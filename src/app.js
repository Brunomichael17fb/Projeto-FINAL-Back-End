import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json()); // Essencial para o Insomnia funcionar!

app.use(routes);

export default app;