import { Router } from "express";
import { ReceiptsController } from "./receipts.controller";

export const routerReceipts = Router();
const receiptsController = new ReceiptsController();

routerReceipts.post("/create/", receiptsController.registerReceipt.bind(receiptsController));
routerReceipts.get("/", receiptsController.showReceipts.bind(receiptsController));
routerReceipts.get("/:id_customer/:total_price", receiptsController.showOneReceipt.bind(receiptsController));
routerReceipts.patch("/update/:id_receipt", receiptsController.updateReceipt.bind(receiptsController));
routerReceipts.delete("/delete/:id_receipt", receiptsController.deleteReceipt.bind(receiptsController));
