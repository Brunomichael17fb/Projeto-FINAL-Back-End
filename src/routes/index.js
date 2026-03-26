import { Router } from "express";
import productController from "../controllers/productController.js";

const router = Router();

// Rota de teste
router.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

// --- ROTAS DE PRODUTOS ---

// LISTAR todos os produtos (GET)
router.get("/products", productController.getAll);

// CADASTRAR um novo produto (POST)
router.post("/products", productController.create);

// APAGAR um produto por ID (DELETE) - NOVO!
router.delete("/products/:id", productController.delete);

router.put("/products/:id", productController.update);

export default router;