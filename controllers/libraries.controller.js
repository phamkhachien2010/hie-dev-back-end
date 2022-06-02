const { Libraries } = require('../models');
const { Op } = require('sequelize');

const createLibraries = async(req, res) => {
    const { name, setup, description, link, type, tutorial } = req.body;
    try {
        const newLib = await Libraries.create({ name, setup, description, link, type, tutorial });
        res.status(201).send(newLib)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllLibraries = async(req, res) => {
    const { description } = req.query;
    console.log(req.query);
    try {
        if (description) {
            const listLibraries = await Libraries.findAll({
                where: {
                    description: {
                        [Op.like]: `%${description}%`
                    }
                },
            });
            if (listLibraries) {
                res.status(200).send(listLibraries);
            } else {
                res.status(404).send({ message: 'Not found listLibraries!' })
            }
        } else {
            const listLibraries = await Libraries.findAll();
            if (listLibraries) {
                res.status(200).send(listLibraries);
            } else {
                res.status(404).send({ message: 'Not found listLibraries!' })
            }
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailLibraries = async(req, res) => {
    const { id } = req.params;
    try {
        const library = await Libraries.findOne({
            where: {
                id
            }
        });
        if (library) {
            res.status(200).send(library)
        } else {
            res.status(404).send({ message: 'Not found listLibraries!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const editLibraries = async(req, res) => {
    const { id } = req.params;
    const { name, setup, description, link, type, tutorial } = req.body;
    try {
        const library = await Libraries.findOne({
            where: {
                id
            }
        });
        if (library) {
            library.name = name;
            library.setup = setup;
            library.description = description;
            library.link = link;
            library.type = type;
            library.tutorial = tutorial;
            await library.save();
            res.status(200).send(library)
        } else {
            res.status(404).send({ message: 'Not found listLibraries!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteLibrary = async(req, res) => {
    const { id } = req.params;
    try {
        const library = await Libraries.findOne({
            where: {
                id
            }
        });
        if (library) {
            await Libraries.destroy({
                where: {
                    id
                }
            })
            res.status(200).send({ message: 'Delete library successfully!' })
        } else {
            res.status(404).send({ message: 'Not found listLibraries!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createLibraries,
    getAllLibraries,
    getDetailLibraries,
    editLibraries,
    deleteLibrary
}