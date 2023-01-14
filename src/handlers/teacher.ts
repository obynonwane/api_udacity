import express, { Request, Response } from "express";
import { TeacherModel } from "../models/teacher";

const teacherMethods = new TeacherModel();
export class TeacherHandler {
  async index(req: Request, res: Response) {
    console.log(req.headers);
    res.send(req.headers);
    const result = await teacherMethods.index();
    res.json(result);
  }

  async create(req: Request, res: Response) {
    const data = req.body;

    const result = await teacherMethods.create(data);

    res.status(201);
    res.json(result);
  }
}
