import { Router } from "express";
import { CustomerController } from "./customers.controller";

export const routerCustomer = Router();
const customerController = new CustomerController();

routerCustomer.get("/", customerController.showCustomers.bind(customerController));
routerCustomer.post("/create/", customerController.registerCustomer.bind(customerController));
routerCustomer.patch("/update/:id_customer", customerController.updateCustomer.bind(customerController));
routerCustomer.delete("/delete/:id_customer", customerController.deleteCustomer.bind(customerController));
