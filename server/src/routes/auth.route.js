import { Router } from "express";

const route = Router();

route.post("/register");
route.post("/login");
route.post("/logout");
route.post("/refresh-token");
route.post("/forgot-password");
route.post("/reset-password");
route.get("/me");
