import { Router } from "express";

const route = Router();

route.get("/profile");
route.patch("/profile");
route.patch("/avatar");
route.delete("/account");
