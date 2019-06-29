const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('page4');
});

module.exports = router;