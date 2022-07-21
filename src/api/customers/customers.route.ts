import { Router } from "express";
import { CustomerController } from "./customers.controller";

export const routerCustomer = Router();
const customerController = new CustomerController();

routerCustomer.get("/", customerController.showCustomers.bind(customerController));
routerCustomer.post("/create/", customerController.registerCustomer.bind(customerController));
