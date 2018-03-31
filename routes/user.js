var express = require('express');
var router = express.Router();

const middlewares = require('../middlewares')

router.post('/', middlewares.validatation.user(), (req, res) => {
  res.send(req.body);
});

module.exports = router;
