import express, { Application } from "express";
import morgan from "morgan";
import { CustomerController } from "./api/customers/customers.controller";
export class App {
  private app: Application;
  private port = process.env.PORT || 3000;
  private customerRoutes;

  constructor() {
    this.app = express();
    this.listen();
    this.middlewares();
    this.routes();
    this.customerRoutes = new CustomerController();
    this.cors();
    this.morgan();
  }

  private listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  private middlewares(): void {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.post("/api/customer/", this.customerRoutes.registerCustomer);
  }

  private cors(): void {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

      if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).send({});
      }

      next();
    });
  }

  private morgan(): void {
    this.app.use(morgan("dev"));
  }
}
