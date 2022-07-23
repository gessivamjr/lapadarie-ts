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

  async showOneReceipt(req: Request, res: Response) {
    const {
      params: { id_customer, total_price },
    } = req;

    const service = await this.receiptsService.selectOne(id_customer, total_price);
    res.status(200).send(service);
  }

  async updateReceipt(req: Request, res: Response) {
    const {
      params: { id_receipt },
      body: { id_customer, total_price },
    } = req;

    const service = await this.receiptsService.update(id_customer, total_price, id_receipt);
    res.status(200).send(service);
  }

  async deleteReceipt(req: Request, res: Response) {
    const {
      params: { id_receipt },
    } = req;

    const service = await this.receiptsService.delete(id_receipt);
    res.status(200).send(service);
  }
}
