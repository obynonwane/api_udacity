import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import express, { Request, Response } from "express";

dotenv.config();

export class VerifyToken {
  async verifyJwt(req: Request, res: Response, next: any) {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    next();
    try {
    } catch (error) {}
  }
}
