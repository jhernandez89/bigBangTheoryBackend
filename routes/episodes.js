const router = require('express').Router();
const knex = require('../db/knex');


router.get('/', (req, res) => {
  knex('episodes')
    .leftJoin('description', 'episodes.episode_number', '=', 'description.episode_id')
    .select()
    .then((result) => {
      res.json(result);
    });
});

router.get('/:id', (req, res) => {
  knex('episodes')
    .leftJoin('description', 'episodes.episode_number', '=', 'description.episode_id')
    .select()
    .where('episodes.season', req.params.id)
    .then((result) => {
      res.json(result);
    });
});

router.post('/', (req, res) => {
  knex('episodes').insert({

  }).then((result) => {
    res.json(result);
  });
});

module.exports = router;
