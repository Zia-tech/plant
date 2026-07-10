const express = require('express');
const { createPlant, getAllPlants, updatePlant, deletePlant } = require('../controller/plant.controller');
const protect = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/', protect, createPlant);
router.get('/', getAllPlants);
router.put('/:id', protect, updatePlant);
router.delete('/:id', protect, deletePlant);

module.exports = router;