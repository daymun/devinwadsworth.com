---
layout: post
title: "First Boot"
date: 2015-03-22 18:23:50 -0700
comments: true
categories: bash scripts mac osx yosemite
---

Switching to a new development machine is often a great opportunity to start fresh and explore new tools. That said, there's a core set of applications and associated preferences that I always take with me.

I appreciate the philosophy of sensible defaults found in Rails and similar frameworks. Context switching between multiple codebases is made easier through the widely accepted "best practices" that are codified in the underlying framework.

Sensible defaults guide you in the right direction; doing things the hard way can sometimes be avoided by embracing defaults. When the need to change a default setting presents itself, often the best solution is to change approach to better utilize the capabilities of the framework, thereby avoiding another re-invented wheel. Of course, sometimes you really do need to change settings. If the use case is wide enough to warrant it, a new default will hopefully be adopted in a future release of the framework.

I see similar benefits to embracing sensible defaults in the OS. Because of Apple's prevalence within the developer community, many development workstations already work similarly. When I set up a new Macbook I don't use migration assistant. Instead, I document where I've deviated from the system defaults on my old computer and apply those changes on the new machine. I migrate application level preferences with [Mackup](https://github.com/lra/mackup).

I've documented my approach to setting up OS X environments for development the from the last time I switched MacBooks a few months ago: [github.com/daymun/firstboot](https://github.com/daymun/firstboot).

Feel free to fork firstboot and customize it to your liking. Please send a pull request if you discover a default that's not sensible!
