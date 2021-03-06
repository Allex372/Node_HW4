const router = require('express').Router();

const ownerController = require('../controller/owner.controller');

router.get('/', ownerController.findAll);

router.get('/:id', ownerController.findById);

router.post('/', ownerController.createOw);

module.exports = router;
