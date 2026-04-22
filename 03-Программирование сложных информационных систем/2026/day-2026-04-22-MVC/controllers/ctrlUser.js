const { getModelUser, saveUser, getModelUserById, updateUser } = require('../models/mUser');

const addUserShow = (req, res) => {
    const model = getModelUser(req);
    model.btnDo = "saveUser";
    res.render('vUser', model);
};

const addUserSave = (req, res) => {
    saveUser(req);
    res.redirect('/users');
};

const editUserShow = (req, res) => {
    const userId = req.body.userId;
    const model = getModelUserById(userId);
    model.btnDo = "updateUser";
    res.render('vUser', model);
};

const editUserSave = (req, res) => {
    const model = getModelUser(req);
    updateUser(model);
    res.redirect('/users');
};

module.exports = {
    addUserShow,
    addUserSave,
    editUserShow,
    editUserSave
};
