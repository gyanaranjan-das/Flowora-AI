import { Router } from "express";

const route = Router();

route.post("/");
route.get("/");
route.get("/:id");
route.patch("/:id");
route.delete("/:id");
route.patch("/:id/status");
route.patch("/reorder");
