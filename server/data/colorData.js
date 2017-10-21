// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');
// Instantiates a client
const vision = Vision();

//Performs property detection on the local file
const colors = (fileName) => {
  return vision.imageProperties({ source: { filename: fileName } })
  .then((results) => {
    const properties = results[0].imagePropertiesAnnotation;
    const colors = properties.dominantColors.colors;
    return colors.forEach((color) => color);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
};

module.exports = colors;
