import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Product = sequelize.define("Product", {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    category: { type: DataTypes.STRING },
    oldPrice: { type: DataTypes.DECIMAL(10, 2) },
    discount: { type: DataTypes.INTEGER },
    brand: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING }
});

export default Product;