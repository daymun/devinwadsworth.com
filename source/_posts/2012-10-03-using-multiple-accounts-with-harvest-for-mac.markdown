---
layout: post
title: "Using Multiple Accounts with Harvest for Mac"
date: 2012-10-03 21:52
comments: true
categories: freelancing bash scripts github
---

I need to track time on two different [Harvest](http://www.getharvest.com/) accounts. Harvest for Mac only allows for one account, so I made a bash script to switch between multiple .plist files.

Save a .plist configuration under account_name:
{% codeblock %}
harvest new account_name
{% endcodeblock %}

Launch with a specific .plist:
{% codeblock %}
harvest account_name
{% endcodeblock %}

Check it out, there's more info in the readme: [github.com/daymun/harvest-switcher](https://github.com/daymun/harvest-switcher)

Haven't used Harvest? Feel free to use my [referral link](http://try.hrv.st/6s5g?b).
