import { Router } from "express";
import { CustomerController } from "../api/controllers/customers.controller";

export const CustomerRouter = Router();

const customerController = new CustomerController();

CustomerRouter.post("/create/", customerController.registerCustomer);
