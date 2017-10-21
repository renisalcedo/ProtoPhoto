const express = require('express');
const { fullTextData, colorData } = require('./data/vision.js');

// Path to file
const fileName = './server/sample2.png';

// Data to be returned for website
const fullText = fullTextData(fileName);
const colors   = colorData(fileName);

const app = express();

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = {app, fullText, colors};
