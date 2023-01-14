import express from "express";
import { TeacherHandler } from "../../handlers/teacher";
import { VerifyToken } from "../../middlewares/verifyToken";

const veriToken = new VerifyToken();
const teachers = express.Router();

const teacherMethods = new TeacherHandler();

teachers.get("/", teacherMethods.verifyAuthToken, teacherMethods.index);
teachers.post("/", teacherMethods.create);

export default teachers;
