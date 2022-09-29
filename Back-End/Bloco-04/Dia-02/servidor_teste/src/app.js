const express = require('express');
const array = require('../data/array');

const app = express();

app.get('/myActivities', (_req, res) => res.status(200).json(array));

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;

  const getActivitie = array.find(({ id: arrayId }) => arrayId === Number(id));

  res.status(200).json(getActivitie);
});

app.get('/filter/myActivities', (req, res) => {
  const { q } = req.query;

  const filteredActivities = array.filter(({ description }) => description.includes(q));
  console.log(filteredActivities);

  res.status(200).json(filteredActivities);
});

module.exports = app;