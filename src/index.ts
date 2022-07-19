import express, { Application } from "express";
import morgan from "morgan";

export class App {
  private app: Application;
  private port = process.env.PORT || 3000;

  constructor() {
    this.app = express();
    this.listen();
    this.middlewares();
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
