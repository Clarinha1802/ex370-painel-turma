const express = require("express");

const router = express.Router();

router.use(express.json())

// ─── Tarefa B — Links úteis ───────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const links = [
  {id:1, titulo: "curso", url: "https://cursos"},
  {id: 2, titulo: "música", url: "https://musica"}
]
let proximoId = 3;

// GET /links — lista todos os links.
router.get("/", (req, res) => {
  // TODO (Tarefa B): responda com status 200 e o array `links`.
  res.status(201).send({links});
});

// POST /links — cria um link { titulo, url } (ambos TEXTO/string).
router.post("/", (req, res) => {
  const {titulo, url} = req.body

  if(!titulo || !url){
    return res.status(400).json({erro: "Título e url obrigatórios."})
  }
  const novoElemento = {
    id: proximoId++,
    titulo,
    url
  }

  links.push(novoElemento)

  return res.status(201).json(novoElemento)

  // TODO (Tarefa B):
  //  1. Leia titulo (texto) e url (texto) de req.body.
  //  2. Se faltar titulo OU url, responda 400.
  //  3. Crie { id: proximoId++, titulo, url }, adicione em `links`
  //     e responda 201 com o link criado.
  
});

module.exports = router;
