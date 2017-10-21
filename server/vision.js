// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Instantiates a client
const vision = Vision();

// The path to the local image file, e.g. "/path/to/image.png"
// const fileName = '/path/to/image.png';

const fileName = './sample.jpg';

// Performs label detection on the local file
vision.labelDetection({ source: { filename: fileName } })
  .then((results) => {
    const labels = results[0].labelAnnotations;
    console.log('Labels:');
    labels.forEach((label) => console.log(label));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
