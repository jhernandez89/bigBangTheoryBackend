const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('games')
    .select()
    .then((result) => {
      res.json(result);
    });
});

router.post('/', (req, res) => {
  knex('games').insert({
    imageOne: req.body.imageOne,
    imageTwo: req.body.imageTwo,
    title: req.body.title,
    description: req.body.description,
    videoURL: req.body.videoURL,
    amazonLink: req.body.amazonLink,
    gameLink: req.body.gameLink,
  }).then((result) => {
    res.json(result);
  });
});

module.exports = router;
