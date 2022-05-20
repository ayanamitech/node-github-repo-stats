const fs = require('fs');
const axios = require('axios');
const {default: PQueue} = require('p-queue-cjs');
const {setDelay, checkDirectory} = require('./libs');

// Get latest stats from Github that requires Github Token Auth, and then write the results to disk
const GithubStats = async (config) => {
  let public_repo_list = [];
  let public_repo_stats = [];
  const queue = new PQueue({ concurrency: 5, intervalCap: 20, interval: 60 * 1000 });
  const maxRetry = 10;

  const axios_header = {
    headers: {
      Authorization: 'token ' + config.github_token
    }
  };
  let fetchRepoList = config.repo_org.map(async (e) => {
    let retry = 0;
    while (retry < maxRetry) {
      try {
        const rawData = await axios.get('https://api.github.com/users/' + e + '/repos', axios_header);
        const result = rawData.data.map((e) => {
          return {
            repo: e.name,
            repo_name: e.full_name
          };
        });
        public_repo_list = public_repo_list.concat(result);
      } catch (e) {
        console.error(e);
        retry++;
      }
      await setDelay(60);
    }
  }).map(f => () => f);
  // Prevent rate limit
  await queue.addAll(fetchRepoList);
  let fetchRepoStats = public_repo_list.map(async (r) => {
    try {
      const [ rawList, rawViews ] = await Promise.all([
        axios.get('https://api.github.com/repos/' + r.repo_name + '/traffic/clones', axios_header),
        axios.get('https://api.github.com/repos/' + r.repo_name + '/traffic/views', axios_header)
      ]);
      public_repo_stats = public_repo_stats.concat({ ...r, repo_views: rawViews.data, repo_clone: rawList.data });
    } catch (e) {
      // Handle error for repositories without write access
      public_repo_stats = public_repo_stats.concat({ ...r, repo_views: {}, repo_clone: {} });
    }
  }).map(f => () => f);
  // Prevent rate limit
  await queue.addAll(fetchRepoStats);
  // Write to disk
  for (const chunk of public_repo_stats) {
    checkDirectory('data/' + chunk.repo_name);
    fs.writeFileSync('data/' + chunk.repo_name + '/views.json', JSON.stringify(chunk.repo_views, null, 2), 'utf8');
    fs.writeFileSync('data/' + chunk.repo_name + '/clone.json', JSON.stringify(chunk.repo_clone, null, 2), 'utf8');
  }
};

module.exports = GithubStats;
