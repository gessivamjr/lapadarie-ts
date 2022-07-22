import { Request, Response } from "express";
import { ReceiptsService } from "./receipts.services";

export class ReceiptsController {
  private receiptsService: ReceiptsService;

  constructor() {
    this.receiptsService = new ReceiptsService();
  }

  async registerReceipt(req: Request, res: Response) {
    const {
      body: { id_customer, total_price },
    } = req;

    const service = await this.receiptsService.create(id_customer, total_price);
    res.status(201).send(service);
  }

  async showReceipts(req: Request, res: Response) {
    const service = await this.receiptsService.select();
    res.status(200).send(service);
  }
}
