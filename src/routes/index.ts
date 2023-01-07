import * as express from "express";
import students from "./api/students";
import teachers from "./api/teachers";

const routes = express.Router();

routes.use("/students", students);
routes.use("/teachers", teachers);

export default routes;
