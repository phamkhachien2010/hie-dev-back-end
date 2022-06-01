const authorize = (arrType) => (req, res, next) => { //arrType là tập hợp những loại user có quền thực hiện chức năng đó vd artype:[superAdmin, admin]
    const { user } = req;
    const index = arrType.findIndex((type) => type === user.type);
    if (index !== -1) {
        next();
    } else {
        res.status(403).send({ message: 'Bạn không có quyền!' })
    }
}

module.exports = {
    authorize
}