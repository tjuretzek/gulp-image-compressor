# Gulp Image Compressor
This is a lightweight image compressor (with little to no quality loss) on gulp basis using node.js. The compression-rate is optimized for the best image quality:size ratio, but do not expect file sizes to be as small as lossy compressed (e.g. [TinyPNG](http://tinypng.com)) images. However I managed to compress the included sample files to a lower file size than [TinyPNG](http://tinypng.com) risking a slightly higher quality loss.

This project was created to compress large amounts of files or images with a huge file size (e.g. 4K resolution images). Small images are crutial for search engine optimization (SEO) these days, that's why I felt the need to create this project.

You can use this repository as a standalone image compressor or include it into your gulp routine by using the `images` task.


*NOTE: Images may appear not as sharp as you want them to. You can always adjust the settings inside the tasks/images.js file, to increase quality AND filesize.*


## Development dependencies

Please be sure to have at least [Git](http://git-scm.com/), [NodeJS](http://nodejs.org/) v7.10.0 installed. It is also recommented to use [NPM](https://www.npmjs.org/) v4.2.0

You'll also need [NVM](https://github.com/creationix/nvm) to be able to run the setup

## Setup

You can setup the compressor by running 
``````````
npm run setup
``````````

### Windows setup

To setup the project for windows machines use 
``````````
npm run windows
``````````


## Using the compressor

To compress all images inside the `original-images` folder just run 
``````````
npm start
``````````
 
 It will watch the `original-images` folder and compress the images as soon as you drop them into the folder.

The `compressed-images` folder will be cleared every time you run the `npm run setup`, `npm run compress` or `npm start` command.

### Compress without watcher
For a one-time compress, without the watcher, just use:

``````````
npm run compress
``````````
This will delete all images inside the `compressed-images` folder and recompress them.

If you want to keep your compressed images and want to compress new ones, use: 

``````````
gulp images
``````````


### Wait for the compressor to finish

The compressor is done working as soon, as you see the message `gulp-imagemin: Minified X images (saved X.XX MB - XX.XX%)` inside the console/terminal.