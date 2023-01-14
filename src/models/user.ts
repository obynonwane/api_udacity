import client from "../database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
export class UserModel {
  async create(data: User) {
    try {
      const { firstname, lastname, email, password } = data;

      const conn = await client.connect();

      const hash = bcrypt.hashSync(password + process.env.SALT, 10);

      const sql =
        "INSERT INTO users (firstname, lastname, email, password) VALUES($1, $2, $3, $4) RETURNING *";
      const result = await conn.query(sql, [firstname, lastname, email, hash]);

      const user = result.rows[0];

      conn.release();
      return user;
    } catch (error) {}
  }

  async index() {
    try {
      //open a connection a connection
      const connection = await client.connect();

      //write a sql statement
      const statement = "SELECT * FROM users";

      //execute the sql statement
      const result = await connection.query(statement);

      //close connectio
      connection.release();

      return result.rows;
    } catch (error) {}
  }

  async signIn(details) {
    try {
      const { email, password } = details;

      console.log("Welcome here");
      const sql = "SELECT * FROM users WHERE email=($1)";
      const conn = await client.connect();

      const result = await conn.query(sql, [email]);

      conn.release();
      console.log(result.rows[0]);

      const user = result.rows[0];
      const token = jwt.sign({ user: user }, process.env.TOKEN_SECRET);

      return {
        user: user,
        token: token,
      };
    } catch (error) {}
  }
}
