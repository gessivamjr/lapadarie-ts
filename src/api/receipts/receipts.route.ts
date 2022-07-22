import { Router } from "express";
import { ReceiptsController } from "./receipts.controller";

export const routerReceipts = Router();
const receiptsController = new ReceiptsController();

routerReceipts.post("/create/", receiptsController.registerReceipt.bind(receiptsController));
routerReceipts.get("/", receiptsController.showReceipts.bind(receiptsController));
routerReceipts.get("/:id_receipt", receiptsController.showOneReceipt.bind(receiptsController));
