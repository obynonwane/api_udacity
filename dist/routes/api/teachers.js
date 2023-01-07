"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var teacher_1 = require("../../handlers/teacher");
var teachers = express_1["default"].Router();
var teacherMethods = new teacher_1.TeacherHandler();
teachers.get("/", teacherMethods.index);
teachers.post("/", teacherMethods.create);
exports["default"] = teachers;
