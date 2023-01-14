import express from "express";

import { UserHandler } from "../../handlers/users";

const userMothods = new UserHandler();

const users = express.Router();

users.post("/", userMothods.create);
users.get("/", userMothods.index);
users.post("/signin", userMothods.signIn);

export default users;
