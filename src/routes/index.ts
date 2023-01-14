import * as express from "express";
import students from "./api/students";
import teachers from "./api/teachers";
import users from "./api/users";

const routes = express.Router();

routes.use("/students", students);
routes.use("/teachers", teachers);
routes.use("/users", users);

export default routes;
