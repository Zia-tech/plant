const Plant= require('../model/plant.model');

const createPlant = async (req, res) => {
    try {
        const plant = new Plant(req.body);
        await plant.save();
        res.status(201).json({
            success: true,
            message: 'Plant created successfully',
            data: plant  ,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating plant',
            data: error,
        });
    }
};

const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.status(200).json({
            success: true,
            message: 'Plants retrieved successfully',
            data: plants,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error retrieving plants',
            data: error,
        });
    }
};
const updatePlant = async (req, res) => {
    try {
        const plant = await Plant.findByIdAndUpdate(req.params.id ,req.body, {new: true});
        if (!plant) {
            return res.status(404).json({
                success: false,
                message: 'Plant not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Plant updated successfully',
            data: plant,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating plant',
            data: error,
        });
    }
};
const deletePlant = async (req, res) => {
    try {
        const plant = await Plant.findByIdAndDelete(req.params.id);
        if (!plant) {
            return res.status(404).json({
                success: false,
                message: 'Plant not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Plant deleted successfully',
            data: plant,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error deleting plant',
            data: error,
        });
    }
};
module.exports = {
    createPlant,
    getAllPlants,
    updatePlant,
    deletePlant
};
