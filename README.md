## About

[Herbarium](http://cargokult.github.com/herbarium) explores image subreddits by creating a slideshow from the images posted. Best enjoyed fullscreen.

## Stories

* I want to specify a subreddit so I can see a slideshow from the posts.

## Implementation

* Subreddits should be specified with a get parameter.
* Images should cover the screen, should look good on 1920x1080.

## Tasks
* extract user posts from a /r's hot stream **done**
* filter only images that are posts, discard images that are too small
* use a get param, multiple /r can be specified with +
* use the image as background **done**
* cover screen with the image for various browser size or full screen
* change the image with a delay of 20s *done*
* slideshow should loop indefinitely as long as there is at least 1 image

## Open issues
* How to extract images from flickr.com?
* Images should be loaded in background, to avoid showing only a part

## Tools used
* https://github.com/reddit/reddit/wiki
