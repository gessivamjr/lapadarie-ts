import { Request, Response } from "express";
import { CustomerService } from "../services/customers.services";

export class CustomerController {
  private customerService: CustomerService;

  constructor() {
    this.customerService = new CustomerService();
  }

  registerCustomer(req: Request, res: Response) {
    const customer = req.body;

    this.customerService.createCustomer(customer);
    res.status(200).send(customer);
  }
}
