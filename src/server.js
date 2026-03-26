import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import dotenv from "dotenv";

// --- IMPORTAÇÃO DOS MODELS ---
import "./models/Product.js";
import "./models/User.js";

import router from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// --- CONFIGURAÇÕES DO EXPRESS ---
app.use(cors());
app.use(express.json());
app.use(router);

async function start() {
    try {
        // Testa a conexão com o banco
        await sequelize.authenticate();
        console.log("Conexão com o banco OK!");

        // Sincroniza os modelos com o banco de dados
        await sequelize.sync({ alter: true });
        console.log("Tabelas sincronizadas!");

        // Inicia o servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Erro ao ligar o servidor:", error);
    }
}

start();