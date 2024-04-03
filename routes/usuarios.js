const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Usuarios = require('../models/usuarios')



router.post('/cadastrar', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        // Verificar se o usuário já existe
        const usuarioExistente = await Usuarios.findOne({ where: { email } });
        if (usuarioExistente) {
            return res.status(400).json({ error: 'Usuário já cadastrado' });
        }
        // Criptografar a senha antes de salvar no banco de dados
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        // Criar o novo usuário
        const novoUsuario = await Usuarios.create({
            nome,
            email,
            senha: senhaCriptografada
        });
        return res.status(201).json(novoUsuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, senha } = req.body;
        // Verificar se o usuário existe
        const usuario = await Usuarios.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        // Verificar a senha
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }
        // Autenticação bem-sucedida
        return res.status(200).json(usuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

module.exports = router;