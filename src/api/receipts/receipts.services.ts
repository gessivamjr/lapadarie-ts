import { pool } from "../../config/database/database.config";

export class ReceiptsService {
  private conn = pool;

  public async create(id_customer: number, total_price: number) {
    const query = "INSERT INTO receipts(id_customer, total_price) VALUES(?, ?)";
    const params = [id_customer, total_price];
    const result = await this.main(query, params);
    return result;
  }

  public async select() {
    const query = "SELECT * FROM receipts";
    const result = await this.main(query);
    return result;
  }

  public async selectOne(id_customer: string, total_price: string) {
    const query =
      "SELECT receipts.id_receipt, customers.customer_name, sandwichs.id_sandwich, sandwichs.price FROM receipts INNER JOIN customers ON ? = customers.id_customer INNER JOIN sandwichs ON ? = sandwichs.id_sandwich";
    const params = [id_customer, total_price];
    const result = await this.main(query, params);
    return result;
  }

  public async update(id_customer: number, total_price: number, id_receipt: string) {
    const query = "UPDATE receipts SET id_customer = ?, total_price = ? WHERE id_receipt = ?";
    const params = [id_customer, total_price, id_receipt];
    const result = await this.main(query, params);
    return result;
  }

  public async delete(id_receipt: string) {
    const query = "DELETE FROM receipts WHERE id_receipt = ?";
    const params = [id_receipt];
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
