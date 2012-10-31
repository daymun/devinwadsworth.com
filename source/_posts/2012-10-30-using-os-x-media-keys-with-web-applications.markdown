---
layout: post
title: "Using OS X Media Keys with Web Applications"
date: 2012-10-30 15:54
comments: true
categories: mac osx music media minisub subsonic javascript python github
---

{% img left /images/mac-media-keys.jpg Mac Media Keys %}
Last week I set out to find a way to use my macbook media keys to control web applications. Specifically, I wanted to use the play/pause and next/prev buttons with [MinSub](https://github.com/tsquillario/MiniSub), the HTML5 player for [Subsonic](http://www.subsonic.org/).

After a bit of googling, I found two solutions from [Boris Smus](http://smus.com/). The first ([Chrome-Media-Keys](https://github.com/borismus/Chrome-Media-Keys)), works by adding JS event listeners to all Chrome tabs. There are a few problems with this:

1. Pressing a media key doesn't actually trigger keypress, but pressing F7-F9 does. This means that you need to invert those keys with [FunctionFlip](http://kevingessner.com/software/functionflip/) or similar, which breaks support for desktop media apps (you would need to push fn+play to control iTunes). I believe some non-mac keyboards will trigger keypress for their media keys.

2. Possible performance issues because you are inserting JavaScript into every open Chrome tab.

3. Lastly, this only works if Chrome is the active window. The whole point of media keys is to let you control music regardless of what software you are currently using.

<!-- more -->

I ended up using Boris' more recent implementation, [keysocket](https://github.com/borismus/keysocket). This approach uses a small Python app to capture media key events and forward them through a websocket server to the web app. This solves all of the problems with the previous solution, but there are still a couple issues:

1. Most desktop apps will still take over the media keys, so you need to quit any open media apps.

2. iTunes gets launched every time play is pressed with no open music app. Of course, this one is mostly Apple's fault - there really should be an easy way to disable this "feature". There is a [hack](http://www.thebitguru.com/projects/iTunesPatch) that addresses this, but it apparently breaks with code signatures in 10.8.

Both of these are only minor inconveniences, and I'm really happy with this solution. I've added it to [my fork of MiniSub](https://github.com/daymun/MiniSub). I think that these issues could be completely resolved by using the more robust [SPMediaKeyTap](https://github.com/nevyn/SPMediaKeyTap) - maybe I will take a stab at that sometime.

[Unity Music Media Keys](https://chrome.google.com/webstore/detail/unity-music-media-keys/icckhjgjjompfgoiidainoapgjepncej) is also a really solid proprietary solution that works with a variety of music streaming apps.

Getting websites to behave like applications is challenging, and I'm looking forward to seeing what kind of future allowances Google and others will make for web apps that need OS level access.

<p class="copyright">Photo courtesy of <a href="http://lifehacker.com/5651055/free-your-macs-media-keys-from-itunes-no-manual-hacking-required">Lifehacker</a>.</p>
