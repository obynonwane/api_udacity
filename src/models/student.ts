import client from "../database";
import express, { Request, Response } from "express";

export class Student {
  async index(req: Request, res: Response) {
    try {
      //opening a connection to the db
      const connection = await client.connect();

      //sql query
      const sql = "SELECT * FROM students";

      //run query
      const result = await connection.query(sql);

      //close conection
      connection.release();

      //return result to the calling client
      return res.send(result.rows);
    } catch (error) {}
  }

  async create(req: Request, res: Response) {
    try {
      const { name, level } = req.body;
      //opening a connection to the db
      const connection = await client.connect();

      const sql =
        "INSERT INTO students (name, level) VALUES($1, $2) RETURNING *";

      const result = await connection.query(sql, [name, level]);

      const student = result.rows[0];

      //close conection
      connection.release();

      return res.json(student);
    } catch (error) {}
  }
}
