import Product from "../models/Product.js";

const productController = {
    // Listar todos os produtos (GET)
    getAll: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar produtos", error: error.message });
        }
    },

    // Buscar um produto específico por ID (GET)
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: "Produto não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar produto", error: error.message });
        }
    },

    // Criar novo produto (POST)
    create: async (req, res) => {
        try {
            const newProduct = await Product.create(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(400).json({ message: "Erro ao cadastrar produto", error: error.message });
        }
    },

    // ATUALIZAR um produto (PUT)
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const [updatedRows] = await Product.update(req.body, {
                where: { id: id }
            });

            if (updatedRows > 0) {
                const updatedProduct = await Product.findByPk(id);
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({ message: "Produto não encontrado ou nada foi alterado." });
            }
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar produto", error: error.message });
        }
    },

    // APAGAR um produto (DELETE)
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Product.destroy({
                where: { id: id }
            });

            if (deleted) {
                res.status(200).json({ message: "Produto removido com sucesso!" });
            } else {
                res.status(404).json({ message: "Produto não encontrado para apagar." });
            }
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar produto", error: error.message });
        }
    }
};

export default productController;