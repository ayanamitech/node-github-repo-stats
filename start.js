const process = require('process');
const GithubStats = require('./index');

// load config from .env
require('dotenv').config();

const config = {
  github_token: process.env.GH_TOKEN,
  repo_org: process.env.GH_USER.split(',')
};

if (!(config.github_token && config.repo_org)) {
  throw new Error('Config error');
}

GithubStats(config);
