import express from "express"; // Importamos o express aqui para configurar o CORS
import cors from "cors";       // NOVO: Importando o crachá de acesso
import sequelize from "./config/database.js";
import "./models/Product.js";
import dotenv from "dotenv";
import router from "./routes/index.js"; // Importe suas rotas aqui

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// --- CONFIGURAÇÕES DO EXPRESS ---
app.use(cors());              // NOVO: Liberando acesso para o seu Front-end
app.use(express.json());      // Permite que o servidor entenda JSON (o que vem do Insomnia)
app.use(router);              // Usa as rotas que configuramos (GET, POST, etc)

async function start() {
    try {
        await sequelize.authenticate();
        console.log("Conexão com o banco OK! ✅");

        await sequelize.sync({ alter: true });
        console.log("Tabelas sincronizadas! 🗄️");

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT} 🚀`);
        });
    } catch (error) {
        console.error("Erro ao ligar o servidor:", error);
    }
}

start();