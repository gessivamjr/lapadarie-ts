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

  async showOneCustomer(req: Request, res: Response) {
    const {
      params: { id_customer },
    } = req;
    const service = await this.customerService.selectOne(id_customer);
    res.status(200).send(service);
  }

  async registerCustomer(req: Request, res: Response) {
    const {
      body: { customer_name, id_sandwich },
    } = req;

    const service = await this.customerService.create(customer_name, id_sandwich);
    res.status(201).send(service);
  }

  async updateCustomer(req: Request, res: Response) {
    const {
      params: { id_customer },
      body: { customer_name, id_sandwich },
    } = req;

    const service = await this.customerService.update(customer_name, id_sandwich, id_customer);
    res.status(200).send(service);
  }

  async deleteCustomer(req: Request, res: Response) {
    const {
      params: { id_customer },
    } = req;

    const service = await this.customerService.delete(id_customer);
    res.status(200).send(service);
  }
}
