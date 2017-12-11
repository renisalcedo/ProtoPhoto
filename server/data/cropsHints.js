// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Instantiates a client
const vision = Vision();

// Find crop hints for the local file
const cropsHintsData = (fileName) => {
  return vision.cropHints({source: { filename: fileName} })
  .then((results) => {
    return results[0].cropHintsAnnotation;
  })
 .catch((err) => {
    console.error('ERROR:', err);
 });
}

module.exports = cropsHintsData;
