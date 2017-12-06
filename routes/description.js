const router = require('express').Router();
const knex = require('../db/knex');


router.get('/', (req, res) => {
  knex('description')
    .select()
    .then((result) => {
      res.json(result);
    });
});

module.exports = router;