import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router();

router.get("/users", UserController.getAll);
router.post("/users", UserController.create);

export default router;