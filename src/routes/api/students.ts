import * as express from "express";
const students = express.Router();

import { Student } from "../../models/student";

const data = new Student();

students.get("/", data.index);
students.post("/", data.create);

export default students;
