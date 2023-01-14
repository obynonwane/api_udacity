import client from "../database";

export type Teacher = {
  firstname: string;
  lastname: string;
};

export class TeacherModel {
  async index() {
    try {
      //open a connection a connection
      const connection = await client.connect();

      //write a sql statement
      const statement = "SELECT * FROM teachers";

      //execute the sql statement
      const result = await connection.query(statement);

      //close connectio
      connection.release();

      return result.rows;
    } catch (error) {}
  }

  async create(data: Teacher) {
    const { firstname, lastname } = data;
    try {
      //open a connection a connection
      const connection = await client.connect();

      const sql =
        "INSERT INTO teachers (firstname, lastname) VALUES($1, $2) RETURNING *";

      const result = await connection.query(sql, [firstname, lastname]);

      const data = result.rows[0];

      //close connectio
      connection.release();

      return data;
    } catch (error) {}
  }
}
