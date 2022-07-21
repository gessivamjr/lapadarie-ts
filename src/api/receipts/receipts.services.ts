import { pool } from "../../config/database/database.config";

export class ReceiptsService {
  private conn = pool;

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
