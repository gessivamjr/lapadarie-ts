import { Request, Response, Router } from "express";
import { CustomerService } from "./customers.services";

export class CustomerController {
  private customerService: CustomerService;
  private router;

  constructor() {
    this.customerService = new CustomerService();
    this.router = Router();
  }

  registerCustomer(): void {
    this.router.post("/create/", async (req: Request, res: Response) => {
      const { body } = req;

      const service = await this.customerService.create(body);
      res.json(service);
    });
  }
}
