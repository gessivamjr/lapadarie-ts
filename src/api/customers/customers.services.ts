import { pool } from "../../config/database/database.config";

export class CustomerService {
  private conn;

  constructor() {
    this.conn = pool;
  }

  create(body: [string, number]): void {
    try {
      this.conn.getConnection((error, conn) => {
        if (error) {
          throw new Error(error.message);
        }

        conn.query("INSERT INTO customers(customer_name, id_sandwich) VALUES(?, ?)", [body]);
      });
    } catch (error) {
      throw new Error("Não foi possível registrar o cliente");
    }
  }
}
