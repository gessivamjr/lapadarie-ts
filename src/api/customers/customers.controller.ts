import { Request, Response } from "express";
import { CustomerService } from "./customers.services";

export class CustomerController {
  private customerService: CustomerService;

  constructor() {
    this.customerService = new CustomerService();
  }

  async showCustomers(req: Request, res: Response) {
    const service = await this.customerService.select();
    res.status(200).send(service);
  }
}
