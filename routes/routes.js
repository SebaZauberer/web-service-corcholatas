const express = require('express');
const router = express.Router();
const ctrlHome = require('../controllers/controler');

router.get('/', ctrlHome.home);
router.post('/make', ctrlHome.save);
router.get('/find', ctrlHome.find);
router.get('/find/:id', ctrlHome.findById);
router.get('/findOne/:brand', ctrlHome.findOne);
router.delete('/delete/:id', ctrlHome.remove);

module.exports = router;