const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');

let output = loremIpsum({
    count: 3
  , units: 'paragraphs'
  , sentanceLowerBound: 10
  , paragraphLowerBound: 5
  , suffix: '<br>'
});




app.get('/lorem', function (req, res) {
  res.send(output)
});

app.get('/lorem/:number', function (req, res) {
  output = loremIpsum({
      count: parseInt(req.params.number)
    , units: 'paragraphs'
    , sentanceLowerBound: 10
    , paragraphLowerBound: 5
    , suffix: '<br>'
  });
  res.send(output)

});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
