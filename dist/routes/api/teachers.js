"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var teacher_1 = require("../../handlers/teacher");
var verifyToken_1 = require("../../middlewares/verifyToken");
var veriToken = new verifyToken_1.VerifyToken();
var teachers = express_1["default"].Router();
var teacherMethods = new teacher_1.TeacherHandler();
teachers.get("/", teacherMethods.verifyAuthToken, teacherMethods.index);
teachers.post("/", teacherMethods.create);
exports["default"] = teachers;
