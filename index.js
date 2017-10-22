const {app, fullText, colors} = require('./server/server');

app.get('/fullText', (req, res) => {
  fullText.then((textData) => {
    res.send(textData);
  });
});

app.get('/colors', (req, res) => {
  colors.then((colorsData) => {
    res.send(colorsData);
  });
});

app.listen(3000, () => {
  console.log('WE ARE RUNNING!!');
});
