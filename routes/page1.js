const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('page1');
});

module.exports = router;