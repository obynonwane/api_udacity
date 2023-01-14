import express, { Request, Response } from "express";
import { UserModel } from "../models/user";

const userModel = new UserModel();
export class UserHandler {
  async create(req: Request, res: Response) {
    const result = await userModel.create(req.body);
    return res.json(result);
  }

  async index(req: Request, res: Response) {
    const result = await userModel.index();
    return res.json(result);
  }

  async signIn(req: Request, res: Response) {
    const result = await userModel.signIn(req.body);
    return res.json(result);
  }
}
