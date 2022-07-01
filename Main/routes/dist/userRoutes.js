"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCtrl_1 = require("../controller/userCtrl");
var router = express_1["default"].Router();
router
    .post('/edit-user', userCtrl_1.editUser);
exports["default"] = router;
