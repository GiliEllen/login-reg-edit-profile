"use strict";
exports.__esModule = true;
console.log("connect");
//bW6nUlcDdX9uUBgR
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = 3028;
app.use(express_1["default"].static('public'));
app.use(express_1["default"].json());
var userRoutes_1 = require("./routes/userRoutes");
mongoose_1["default"]
    .connect("mongodb+srv://doritgy:bW6nUlcDdX9uUBgR@cluster0.grzjg.mongodb.net/myDatabase?retryWrites=true&w=majority")
    .then(function () {
    console.log("Connected to DB!");
})["catch"](function (err) { return console.log(err); });
app.use('/users', userRoutes_1["default"]);
app.listen(port, function () {
    console.log("register/login app listening on port " + port);
});
