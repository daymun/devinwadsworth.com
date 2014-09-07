---
layout: post
title: "Cache Rules Everything Around Me"
date: 2014-09-07 14:53:55 -0700
comments: true
categories: ruby rails aws cloudfront cdn assets cors nginx
---

For years, Firefox has enforced a strict same-origin policy for web fonts. This is the behavior recommended by the latest [W3C Fonts Spec](http://www.w3.org/TR/css3-fonts/#same-origin-restriction). As indicated by the spec, servers that you wish to host fonts on for another domain will need to be configured to respond with the appropriate Cross-Origin Resource Sharing (CORS) headers.

This behavior protects font publishers, but it also creates hassle for anyone using an external asset host or CDN. If the font asset response from your asset server doesn't include CORS headers, those fonts will not render correctly in the browser. Usually an empty square will be displayed instead of the desired character.

There's an [old issue](https://bugzilla.mozilla.org/show_bug.cgi?id=604421) on Mozilla's bug tracker where the decision to implement this as default behavior is discussed at length. As noted at the end of the thread, Chrome 37 ([released to Stable on 8/26/14](http://googlechromereleases.blogspot.com/2014/08/stable-channel-update_26.html)) now complies with the W3C spec. Because of this, it's now more important than ever that your asset host is configured correctly.

If you use Cloudfront, this configuration is pretty straightforward as Amazon now offers [full-fledged CORS support](http://aws.amazon.com/about-aws/whats-new/2014/06/26/amazon-cloudfront-device-detection-geo-targeting-host-header-cors/). After you [configure Cloudfront to forward the Origin header](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html#header-caching-web-cors), your origin server still needs to send the right headers -- check out [enable-cors.org](http://enable-cors.org/) for server specific configuration instructions. With nginx I simply had to use the ```add_header``` directive. Once the origin server is responding with the right headers, you'll need to manually bust the edge caches or generate a new asset manifest. You can see if the headers are there with ```curl --head```.

One gotcha I ran into: Chrome does a preflight request before doing a GET for the font asset. If the preflight request doesn't have CORS headers, the actual GET will show as canceled in the webkit network console. It was hard to tell what was going on because the network console doesn't show preflight requests and ```curl --head``` shows the right headers (GET request without preflight). So, make sure you allow both GET and OPTIONS requests with the ```Access-Control-Allow-Methods``` header.
