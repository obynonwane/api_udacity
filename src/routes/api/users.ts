import * as express from "express";

import { UserHandler } from "../../handlers/user";

const data = new UserHandler();

const users = express.Router();

users.post("/", data.create);
users.get("/", data.signin);

export default users;
