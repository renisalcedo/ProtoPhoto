const express = require('express');
const { fullTextData, colorData, cropsHintsData, labelsData } = require('./data/vision.js');

// Path to file
const fileName = './server/sample2.png';

// Data to be returned for website
const fullText = fullTextData(fileName);
const colors   = colorData(fileName);
const cropsHints = cropsHintsData(fileName);
const labels = labelsData(fileName);

const app = express();

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = { app, fullText, colors, cropsHints, labels };
