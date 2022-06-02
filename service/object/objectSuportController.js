const { Op } = require('sequelize');

const getListObject = async(Objects, params) => {
    if (params) {
        const listObject = await Objects.findAll({
            where: {
                name: {
                    [Op.like]: `%${params}%`
                }
            }
        });
        if (listObject) {
            return listObject
        } else {
            return false
        }
    } else {
        const listLibraries = await Objects.findAll();
        if (listLibraries) {
            return listLibraries
        } else {
            return false
        }

    }
}

module.exports = {
    getListObject
}