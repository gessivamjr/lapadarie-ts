import { Request, Response } from "express";
import { ReceiptsService } from "./receipts.services";

export class ReceiptsController {
  private receiptsService: ReceiptsService;

  constructor() {
    this.receiptsService = new ReceiptsService();
  }
}
