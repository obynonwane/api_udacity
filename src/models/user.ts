import client from "../database";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
export type User = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export type SigninType = {
  email: string;
  password: string;
};
export class UserModel {
  async create(data: User) {
    try {
      const { firstname, lastname, email, password } = data;

      const hash = bcrypt.hashSync(password + process.env.SALT, 10);

      //open a connection
      const connectionObject = await client.connect();
      const sqlStatement =
        "INSERT INTO users (firstname, lastname, email, password) VALUES($1, $2, $3, $4) RETURNING *";
      const result = await connectionObject.query(sqlStatement, [
        firstname,
        lastname,
        email,
        hash,
      ]);

      const user = result.rows[0];
      console.log(user);

      connectionObject.release();

      return user;
    } catch (error) {}
  }

  async signin(details: SigninType) {
    try {
      // return details;
      const { email, password } = details;

      const sql = "SELECT * FROM users WHERE email=($1)";
      // @ts-ignore
      const conn = await client.connect();

      const result = await conn.query(sql, [email]);

      conn.release();

      return result.rows[0];
    } catch (error) {}
  }
}
