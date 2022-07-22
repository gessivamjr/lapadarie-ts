import { pool } from "../../config/database/database.config";

export class ReceiptsService {
  private conn = pool;

  public async create(id_customer: number, total_price: number) {
    const query = "INSERT INTO receipts(id_customer, total_price) VALUES(?, ?)";
    const params = [id_customer, total_price];
    const result = await this.main(query, params);
    return result;
  }

  public main(query: string, params?) {
    return new Promise((resolve) => {
      this.conn.getConnection((error, conn) => {
        if (error) {
          throw new Error(error.message);
        }

        conn.query(query, params, (err, result) => {
          if (err) {
            throw new Error(err.message);
          }

          resolve(result);
        });
      });
    });
  }
}
