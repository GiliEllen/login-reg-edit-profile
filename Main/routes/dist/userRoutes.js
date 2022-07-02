"use strict";
exports.__esModule = true;
var express_1 = require("express");
<<<<<<< HEAD
var userCtrl_1 = require("../controller/userCtrl");
var router = express_1["default"].Router();
router
<<<<<<< HEAD
    // .get(`/get-user`, getUser)
    .patch('/get-user', userCtrl_1.getUser);
=======
    .post('/edit-user', userCtrl_1.editUser);
>>>>>>> gili
=======
var userCont_1 = require("../controller/userCont");
var router = express_1["default"].Router();
router
    .post('/user-register', userCont_1.register)
    .post('/user-login', userCont_1.login);
>>>>>>> Dorit
exports["default"] = router;
