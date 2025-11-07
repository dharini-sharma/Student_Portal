const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const adminController = require('../controllers/adminController');

router.post('/add-user', adminAuth, adminController.addUser);

router.put('/users/:uid', adminAuth, adminController.updateUser);

router.delete('/users/:uid', adminAuth, adminController.deleteUser);

module.exports = router;
