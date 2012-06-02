---
layout: post
title: "First Post with Octopress"
date: 2012-06-02 11:51
comments: true
categories: 
---

Yesterday, I set up this blog using the excellent [Octopress](http://octopress.org/) framework. If you're not familiar with it, Octopress is an extremely lightweight blogging solution that runs on [Jekyll](http://jekyllrb.com/). No databases, cluttered web UIs, or Wordpress PHP. And because it uses Jekyll, [hosting your blog on GitHub Pages](http://octopress.org/docs/deploying/) is a snap.

Write a new post in Markdown:
{% codeblock %}
rake new_post['First Post with Octopress']
Creating new post: source/_posts/2012-06-02-first-post-with-octopress.markdown
{% endcodeblock %}

Publish to GitHub:
{% codeblock %}
rake generate
rake deploy
{% endcodeblock %}

With a framework like this, I might actually start blogging. We'll see.
