const express = require('express');
const { createPlant, getAllPlants, updatePlant, deletePlant } = require('../controller/plant.controller');

const router = express.Router();

router.post('/', createPlant);
router.get('/', getAllPlants);
router.put('/:id', updatePlant);
router.delete('/:id', deletePlant);

module.exports = router;