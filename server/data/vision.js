// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');
// Instantiates a client
const vision = Vision();

// PAGE BLOCKS with data
const fullTextData = require('./fullText');
// PAGE COLORS WITH DATA
const colorData = require('./colorData');

module.exports = { fullTextData, colorData };
