---
layout: post
title: "Hosting Octopress on a Unix Box"
date: 2012-06-02 19:41
comments: true
categories: octopress linux ubuntu apache git
---

I finished setting up Octopress on GitHub Pages today and wanted to publish it at my personal url. Initially, I planned to [CNAME my domain to GitHub](https://github.com/blog/315-cname-support-for-github-pages), but apparently that feature is only available for paid accounts.

If you already have a paid personal GitHub account for other reasons, by all means use that. I've been hosting a few other sites an an [Ubuntu based Apache server](http://www.flickr.com/photos/devinwadsworth/3485096700/) for the past few years, so I decided to use that instead. Here's how I did it.

First, I set up my Ubuntu box as a git remote. There are a few different ways to do this, but I opted for the method employed by GitHub (single git user for all repositories) because I wanted to be able to host some other repositories as well. Check out this guide for some pointers on how to do this: [http://www.corvidworks.com/articles/self-hosted-remote-git-repositories](http://www.corvidworks.com/articles/self-hosted-remote-git-repositories)

Second, I updated my local configuration to push to this new remote. Since everything was already set up to deploy to my personal GitHub page, this was simply a matter of editing _deploy/.git/config to point to my new repository URL. I also changed the name of the new remote and [updated the deploy rake task to print different info](https://github.com/daymun/devinwadsworth.com/commit/7a67baf7f6bc915c4c14a8258f2faa1a2de89983), but this is an optional step.

Finally, I cloned the repository to my Apache document root and made a quick post-receive git hook.

Now I can run ```rake deploy``` and the site gets updated on my basement server.

BOOM!
