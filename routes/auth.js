const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/profile', authController.getProfile);

module.exports = router;
