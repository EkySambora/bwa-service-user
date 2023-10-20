const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "bwamicro23";

/* GET home page. */
router.get('/', function async(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
