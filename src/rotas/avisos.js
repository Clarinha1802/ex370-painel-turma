const express = require("express");

const router = express.Router();

// ─── Tarefa A — Avisos ────────────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const avisos = [];
let proximoId = 1;

// GET /avisos — lista todos os avisos.
router.get("/", (req, res) => {
  // TODO (Tarefa A): responda com status 200 e o array `avisos`.
  res.status(200).json(avisos)
});

// POST /avisos — cria um aviso { titulo, mensagem } (ambos TEXTO/string).
  router.post("/", (req, res) => {
  // TODO (Tarefa A):
  //  1. Leia titulo (texto) e mensagem (texto) de req.body.
  //  2. Se faltar titulo OU mensagem, responda 400.
  //  3. Crie { id: proximoId++, titulo, mensagem }, adicione em `avisos`
  //     e responda 201 com o aviso criado.

  const { titulo, mensagem } = req.body;

  if (!titulo || !mensagem) {
    return res.status(400).json({
      erro: "Título e mensagem são obrigatórios"
    });
  }

  const novoAviso = {
    id: proximoId++,
    titulo,
    mensagem
  };

  avisos.push(novoAviso);

  return res.status(201).json(novoAviso);
});




module.exports = router;
