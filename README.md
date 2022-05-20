# node-github-repo-stats

[![Build Status](https://github.com/ayanamitech/node-github-repo-stats/workflows/GitHub%20Clone%20Count%20for%2014%20days%20at%20every%208%20hours/badge.svg)](https://github.com/ayanamitech/node-github-repo-stats/actions)
[![NPM Package Version](https://img.shields.io/npm/v/node-github-repo-stats.svg)](https://npmjs.org/package/node-github-repo-stats)
[![NPM Package Downloads](https://img.shields.io/npm/dm/node-github-repo-stats.svg)](https://npmjs.org/package/node-github-repo-stats)
[![Known Vulnerabilities](https://snyk.io/test/github/ayanamitech/node-github-repo-stats/badge.svg?style=flat-square)](https://snyk.io/test/github/ayanamitech/node-github-repo-stats)
[![GitHub Views](https://img.shields.io/badge/dynamic/json?color=green&label=Views&query=uniques&url=https://github.com/ayanamitech/node-github-repo-stats/blob/main/data/ayanamitech/node-github-repo-stats/views.json?raw=True&logo=github)](https://github.com/ayanamitech/node-github-repo-stats)
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=uniques&url=https://github.com/ayanamitech/node-github-repo-stats/blob/main/data/ayanamitech/node-github-repo-stats/clone.json?raw=True&logo=github)](https://github.com/ayanamitech/node-github-repo-stats)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Fetch Github Repo Stats with Node.js, inspired by [GitHub Clone Count Badge](https://github.com/MShawon/github-clone-count-badge) with multiple github users & github repository support with [Node.js](https://nodejs.org/)

## How does it work?

This is a simple node.js application that will generate traffic statistics for your public Github repository into json file.

Could be parsed with [Shields.io](https://shields.io/) badge so that you could add your unique visitor & clone counter for your README file.

## How to configure

With node-github-repo-stats, you can either

1. Setup Github Actions that could do the automated cron job for you

2. Or install them locally and serve json file with your favorite web server.

### Environment Variables

Using node-github-repo-stats requires two environment variables to be available

`GH_TOKEN`: Your personal [github access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

`GH_USER`: Github organization or your github username to parse the list of Github Repositories, only the repositories with write accesses will be tracked.

## How to install (For Github Actions)

https://github.com/Azure/actions-workflow-samples/blob/master/assets/create-secrets-for-GitHub-workflows.md#set-up-secrets-in-github-action-workflows

## How to install (For local usage)

### Requirements

[Node.js](https://nodejs.org/) (LTS version is recommended)

```bash
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install & Run from source

To build from the source,

```bash
$ git clone https://github.com/ayanamitech/node-github-repo-stats
$ npm i
```

Obtain your personal github access token following [the guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token).

You could either export directly to the system environments using `export GH_TOKEN=<your-github-token>`, or write them down to `.env` file (See [dotenv](https://github.com/motdotla/dotenv) for more info).

## Usage
Replace `<url>` with clone.json url.

**Markdown**
```markdown
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=<url>?raw=True&logo=github)](https://github.com/ayanamitech/node-github-repo-stats)
```

 **HTML**
```html
<a href="https://github.com/ayanamitech/node-github-repo-stats"><img alt="GitHub Clones" src="https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=<url>?raw=True&logo=github"></a>
```

## See also

https://github.com/MShawon/github-clone-count-badge

https://github.com/nchah/github-traffic-stats
