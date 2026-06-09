import { Router } from "express";

const route = Router();

route.post("/register", async (req, res) => {
  res.status(200).json("success");
});
