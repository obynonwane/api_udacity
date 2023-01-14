import express, { Request, Response } from "express";
import { UserModel } from "../models/user";

const userMethod = new UserModel();
export class UserHandler {
  async create(req: Request, res: Response) {
    const data = req.body;
    const response = await userMethod.create(data);
    return res.json(response);
  }

  async signin(req: Request, res: Response) {
    const data = req.body;
    
    const response = await userMethod.signin(data);
    return res.json(response);
  }
}
