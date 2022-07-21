import { pool } from "../../config/database/database.config";

export class CustomerService {
  private conn = pool;

  public async select() {
    const query = "SELECT * FROM customers";
    const result = await this.main(query);
    return result;
  }

  public main(query: string) {
    return new Promise((resolve) => {
      this.conn.getConnection((error, conn) => {
        if (error) {
          throw new Error(error.message);
        }

        conn.query(query, (err, result) => {
          if (err) {
            throw new Error(err.message);
          }

          resolve(result);
        });
      });
    });
  }
}
