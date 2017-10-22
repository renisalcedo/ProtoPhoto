// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Instantiates a client
const vision = Vision();

const labelsData = (fileName) => {
  return vision.labelDetection({ source: { filename: fileName } })
  .then((results) => {
    return results[0].labelAnnotations;
  })
  .catch((err) => {
    return err;
    console.error('ERROR:', err);
  });
};

module.exports = labelsData;
