import User from "../models/User.js";

const UserController = {
    // Listar usuários
    getAll: async (req, res) => {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'] } // não envia a senha no GET
            });
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar usuários", error: error.message });
        }
    },

    // Criar usuário (Cadastro)
    create: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: "Erro ao cadastrar usuário", error: error.message });
        }
    },

// Rota de Login 
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            
            // Busca o usuário pelo e-mail
            const user = await User.findOne({ where: { email: email } });

            if (!user || user.password !== password) {
                return res.status(401).json({ message: "E-mail ou senha inválidos!" });
            }

            res.status(200).json({ 
                message: "Login realizado com sucesso!",
                user: { id: user.id, firstName: user.firstName } 
            });
        } catch (error) {
            res.status(500).json({ message: "Erro ao fazer login", error: error.message });
        }
    }

};

export default UserController;