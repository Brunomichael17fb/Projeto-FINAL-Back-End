import { Router } from "express";
import productController from "../controllers/productController.js";
import UserController from "../controllers/UserController.js"; 

const router = Router();

// Rota de teste
router.get("/", (req, res) => {
  res.send("API Digital Store rodando");
});

// --- ROTAS DE PRODUTOS ---
router.get("/products", productController.getAll);
router.get("/products/:id", productController.getById);
router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);

// --- ROTAS DE USUÁRIOS ---
router.get("/users", UserController.getAll);   // Listar usuários
router.post("/users", UserController.create); // Cadastrar usuário
router.post("/login", UserController.login);

export default router;