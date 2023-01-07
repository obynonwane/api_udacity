import express from "express";
import { TeacherHandler } from "../../handlers/teacher";

const teachers = express.Router();

const teacherMethods = new TeacherHandler();

teachers.get("/", teacherMethods.index);
teachers.post("/", teacherMethods.create);

export default teachers;
