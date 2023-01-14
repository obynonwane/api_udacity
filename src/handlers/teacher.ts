import express, { Request, Response } from "express";
import { TeacherModel } from "../models/teacher";

import jwt from "jsonwebtoken";

const teacherMethods = new TeacherModel();
export class TeacherHandler {
  async index(req: Request, res: Response) {
    // console.log(req.headers);
    // res.send(req.headers);
    const result = await teacherMethods.index();
    res.json(result);
  }

  async create(req: Request, res: Response) {
    const data = req.body;

    const result = await teacherMethods.create(data);

    res.status(201);
    res.json(result);
  }

  verifyAuthToken = (req: Request, res: Response, next) => {
    try {
      const authorizationHeader = req.headers.authorization;
      const token = authorizationHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

      next();
    } catch (error) {
      res.status(401);
      res.send(error.message);
    }
  };
}
