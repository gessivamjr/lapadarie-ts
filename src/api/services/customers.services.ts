import connection from "../../config/database/database.config";

export class CustomerService {
  private conn;

  constructor() {
    this.conn = connection();
  }

  createCustomer(customer: [string, number]) {
    try {
      this.conn.query("INSERT INTO customers(customer_name, id_sandwich) VALUES(?, ?)", customer);
    } catch (error) {
      throw new Error("Não foi possível registrar o cliente");
    }
  }
}
