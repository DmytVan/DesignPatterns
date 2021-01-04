var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.json({ok: true, token: 123});
});

module.exports = router;
