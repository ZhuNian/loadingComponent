var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).render('users/user.html', {
        title: 'test',
        layout: 'layout.html'
    });
});

module.exports = router;
