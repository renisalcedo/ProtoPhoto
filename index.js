const { app, fullText, colors, cropsHints, labels } = require('./server/server');

// DATA PORTS

// FULL TEXT FOR GOOGLE CLOUD ML
app.get('/fullText', (req, res) => {
  fullText.then((textData) => {
    res.send(textData);
  });
});

// COLORS FOR GOOGLE CLOUD ML
app.get('/colors', (req, res) => {
  colors.then((colorsData) => {
    res.send(colorsData);
  });
});

// Crops Hints FOR GOOGLE CLOUD ML
app.get('/cropsHints', (req, res) => {
  cropsHints.then((hints) => {
    res.send(hints);
  });
});

// Labels FOR GOOGLE CLOUD ML
app.get('/labels', (req, res) => {
  labels.then((labels) => {
    res.send(labels);
  });
});

app.listen(3000, () => {
  console.log('WE ARE RUNNING!!');
});
