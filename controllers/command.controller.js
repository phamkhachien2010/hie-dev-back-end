const { Commands } = require('../models');
const { Op } = require('sequelize');

const createCommand = async(req, res) => {
    const { name, setup, description, type } = req.body;
    try {
        const newCommand = await Commands.create({ name, setup, description, type });
        if (newCommand) {
            res.status(201).send(newCommand)
        } else {
            res.status(404).send({ message: 'Not found command!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllCommand = async(req, res) => {
    const { setup } = req.query;
    try {
        if (setup) {
            const listCommand = await Commands.findAll({
                where: {
                    setup: {
                        [Op.like]: `%${setup}%`
                    }
                }
            });
            if (listCommand) {
                res.status(200).send(listCommand)
            } else {
                res.status(404).send({ message: 'Not found command!' })
            }
        } else {
            const listCommand = await Commands.findAll();
            if (listCommand) {
                res.status(200).send(listCommand)
            } else {
                res.status(404).send({ message: 'Not found command!' })
            }
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailCommand = async(req, res) => {
    const { id } = req.params;
    try {
        const command = await Commands.findOne({
            where: {
                id
            }
        })
        if (command) {
            res.status(200).send(command)
        } else {
            res.status(404).send({ message: 'Not found command!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const editCommand = async(req, res) => {
    const { id } = req.params;
    const { name, setup, description, type } = req.body;
    try {
        const command = await Commands.findOne({
            where: {
                id
            }
        })
        if (command) {
            command.name = name;
            command.setup = setup;
            command.description = description;
            command.type = type;
            await command.save();
            res.status(200).send(command)
        } else {
            res.status(404).send({ message: 'Not found command!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteCommand = async(req, res) => {
    const { id } = req.params;
    try {
        const command = await Commands.findOne({
            where: {
                id
            }
        })
        if (command) {
            await Commands.destroy({
                where: {
                    id
                }
            });
            res.status(200).send({ message: 'Delete command successfully' })
        } else {
            res.status(404).send({ message: 'Not found command!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    createCommand,
    getAllCommand,
    getDetailCommand,
    editCommand,
    deleteCommand
}