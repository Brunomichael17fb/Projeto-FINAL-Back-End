import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Carrega as variáveis do arquivo .env
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: false, // Para não encher o terminal de comandos SQL
        define: {
            timestamps: true, // Cria colunas createdAt e updatedAt automaticamente
            underscored: true // Usa padrão snake_case (nome_da_coluna)
        }
    }
);

export default sequelize;