# Description

This is a plugin for reveal.js
It brings images to the front when clicked.

# Demo

[Here is a demo](http://htmlpreview.github.io/?https://raw.githubusercontent.com/yazgoo/image_zoom/example/index.html)

# Zoom proportion

The zoomed images takes 100% of the screen in height by default.
If you want an image to take a different proportion, you can
use the data-zoom-height attribute.
For example:

    <imag src="blah.png" data-zoom-height="300%"/>

Will be three times longer than the screen in height.

# Usage

1. Install this directory in plugin directory
1. load the dependency using reveal.js dependencies configuration item:

    dependencies: [ { src: 'plugin/image_zoom/image_zoom.js', async: true }, ],
