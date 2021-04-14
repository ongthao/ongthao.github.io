'use strict';
const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', function (req, res) {
  res.type('text');
  const radius = req.params['r']
  const area =  Math.PI * radius * radius
  const circumference = Math.PI * (2*radius)
  res.send({"area": area, "circumference": circumference});
});

// define endpoint for exercise 2 here
app.get('/hello/name', (req, res) => {
  if(req.query['first'] && req.query['last']) {
    let firstName = req.query['first']
    let lastName = req.query['last']
    res.type('text')
    res.send(`Hello ${firstName} ${lastName}`)
  } else if(req.query['first'] && !req.query['last']) {
    res.type('text').status(400).send("Missing Required GET parameters: last")
  } else if(!req.query['first'] && req.query['last']) {
    res.type('text').status(400).send("Missing Required GET parameters: first")
  } else {
    res.type('text').status(400).send("Missing Required GET parameters: first, last")
  }
})

const PORT = process.env.PORT || 8000;
app.listen(PORT);
