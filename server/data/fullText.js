// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Instantiates a client
const vision = Vision();

const fullTextAnnotation = (fileName) => {
  return vision.documentTextDetection({ source: { filename: fileName } })
  .then((results) => {
    return results[0];
      console.log("DOCUMENT: ", fullTextAnnotation);
    })
  .catch((err) => {
    return err;
      console.error('ERROR:', err);
  });
};

module.exports = fullTextAnnotation;
