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

  async registerCustomer(req: Request, res: Response) {
    const {
      body: { customer_name, id_sandwich },
    } = req;

    const service = await this.customerService.create(customer_name, id_sandwich);
    res.status(201).send(service);
  }
}
