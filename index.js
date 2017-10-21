const {app, fullTextAnnotation} = require('./server/server');

console.log(fullTextAnnotation);

app.listen(3000, () => {
  console.log('WE ARE RUNNING!!');
});
