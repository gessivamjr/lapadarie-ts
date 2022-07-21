import { pool } from "../../config/database/database.config";

export class CustomerService {
  private conn = pool;

  public async select() {
    const query = "SELECT * FROM customers";
    const result = await this.main(query);
    return result;
  }

  public async create(customer_name: string, id_sandwich: number) {
    const query = "INSERT INTO customers(customer_name, id_sandwich) VALUES(?, ?)";
    const params = [customer_name, id_sandwich];
    const result = await this.main(query, params);
    return result;
  }

  public async update(customer_name: string, id_sandwich: number, id_customer: string) {
    const query = "UPDATE customers SET customer_name = ?, id_sandwich = ? WHERE id_customer = ?";
    const params = [customer_name, id_sandwich, id_customer];
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
