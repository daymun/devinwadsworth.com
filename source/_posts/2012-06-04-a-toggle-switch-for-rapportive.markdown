---
layout: post
title: "A Toggle Switch for Rapportive"
date: 2012-06-04 14:50
comments: true
categories:
---

After watching my unread email count in Gmail climb into the thousands for far too long, I finally went back to [inbox zero](http://inboxzero.com/). I'd encourage you to do the same, unless you actually plan on reading all those messages whose subject lines you skimmed and decided not to open. (good luck with that)

After archiving all those messages, I started looking for more ways to make my email more usable. I started by revisiting the Labs features within Gmail and ended up enabling a few of them. Some of my favorites that significantly improve Gmail's interface:

<ul class="image-preview">
  <li><img src="/images/gmail-unreadcountfavicon.png" alt="Unread message icon"></li>
  <li><img src="/images/gmail-sendandarchive.png" alt="Send & Archive"></li>
  <li><img src="/images/gmail-rightchat.gif" alt="Right-side chat"></li>
</ul>

<!-- more -->

I like having chat more accessible with the right-side chat feature, but because I use [Rapportive](http://rapportive.com/), the total page width was getting to be a bit much for 1280x800. Not wanting to lose the Rapportive functionality, I decided to write a little toggle switch using Chris Wanstrath's [dotjs](http://defunkt.io/dotjs/). It makes the Rapportive menu look like this:
![Gmail Rapportive toggle](/images/gmail-rapportive-toggle.png)
Simply click the green thing to turn Rapportive on and off. You can find the script on GitHub: [https://github.com/daymun/dotjs-scripts](https://github.com/daymun/dotjs-scripts)

One thing I learned while writing this is that Gmail's DOM is an absolute nightmare to work with. There are iframes everywhere and almost all of the elements have non-descriptive class names like "Bu y3". It's so bad that Google themselves created a [Greasemonkey API](http://code.google.com/p/gmail-greasemonkey/wiki/GmailGreasemonkey10API) to deal with this. Sadly, support for this features seems to be lacking - a 2.0 version is available but there's no mention of this in the documentation. I ended up doing it the old fashioned way but still, something to keep in mind for next time.
