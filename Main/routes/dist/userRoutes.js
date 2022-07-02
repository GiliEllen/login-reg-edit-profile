"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCtrl_1 = require("../controller/userCtrl");
var router = express_1["default"].Router();
router
    // .get(`/get-user`, getUser)
    .patch('/get-user', userCtrl_1.getUser)
    .post('/edit-user', userCtrl_1.editUser)
    .post('/user-register', userCtrl_1.register)
    .post('/user-login', userCtrl_1.login);
exports["default"] = router;
