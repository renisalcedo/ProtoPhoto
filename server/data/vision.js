// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');
// Instantiates a client
const vision = Vision();

// PAGE BLOCKS with data
const fullTextData = require('./fullText');
// PAGE COLORS WITH DATA
const colorData = require('./colorData');
// Crops hints
const cropsHintsData = require('./cropsHints');
// Label detections
const labelsData = require('./labels.js');

module.exports = { fullTextData, colorData, cropsHintsData, labelsData };
