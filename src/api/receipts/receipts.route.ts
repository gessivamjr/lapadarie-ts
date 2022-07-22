import { Router } from "express";
import { ReceiptsController } from "./receipts.controller";

export const routerReceipts = Router();
const receiptsController = new ReceiptsController();

routerReceipts.post("/create/", receiptsController.registerReceipt.bind(receiptsController));
