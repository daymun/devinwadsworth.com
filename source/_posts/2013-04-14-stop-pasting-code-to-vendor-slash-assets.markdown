---
layout: post
title: "Stop pasting code to vendor/assets!"
date: 2013-04-14 23:55
comments: true
categories: ruby rails javascript css assets bower gems
---

Use the [Bower](http://twitter.github.io/bower/) [gem](https://github.com/spagalloco/bower) instead!

I prefer the bower gem over [bower-rails](https://github.com/rharriso/bower-rails/) because it [defaults to placing everything in components/](https://github.com/spagalloco/bower#how-this-gem-differs-from-other-techniques), instead of lib/ and vendor/. Using components/ is a nice cue to other developers that the project uses Bower.

Besides, Rails creates vendor/assets/javascripts/ and vendor/assets/stylesheets/ -- this structure doesn't make sense for many repositories that include CSS and Javascript. Use components/project_name/ instead.
