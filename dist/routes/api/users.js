"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var users_1 = require("../../handlers/users");
var userMothods = new users_1.UserHandler();
var users = express_1["default"].Router();
users.post("/", userMothods.create);
users.get("/", userMothods.index);
users.post("/signin", userMothods.signIn);
exports["default"] = users;
