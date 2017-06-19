# Image Compressor

## Development dependencies

Please be sure to have at least [Git](http://git-scm.com/), [NodeJS](http://nodejs.org/) v7.10.0 installed. It is also recommented to use [NPM](https://www.npmjs.org/) v4.2.0

You'll also need [NVM](https://github.com/creationix/nvm) to be able to run the setup

## Setup

You can setup the compressor by running `npm run setup`.

### Windows setup

To setup the project for windows machines use `npm run windows`.


## Using the compressor

To compress all images inside the `original-images` just run `npm start`. It will watch the `original-images` folder and compress the images as soon as you drop them into the folder.

For a one time compress, without the watcher, just use `npm run compress`.

### Wait for the compressor to finish

The compressor is done working as soon, as you see the message `gulp-imagemin: Minified X images (saved X.XX MB - XX.XX%)` inside the console/terminal.