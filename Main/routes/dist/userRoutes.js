"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCtrl_1 = require("../controller/userCtrl");
var router = express_1["default"].Router();
router
    .get('/get-user', userCtrl_1.getUser);
exports["default"] = router;
