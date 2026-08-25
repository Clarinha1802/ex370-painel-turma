const express = require("express");

const router = express.Router();

// ─── Tarefa C — Enquete rápida ────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
// As opções já vêm cadastradas; vocês podem trocar os nomes se quiserem.
const opcoes = [
  { nome: "Presencial", votos: 0 },
  { nome: "Remoto", votos: 0 },
  { nome: "Híbrido", votos: 0 },
];

// GET /enquete — retorna as opções com a contagem de votos.
router.get("/", (req, res) => {
  // TODO (Tarefa C): responda com status 200 e o objeto { opcoes }.
  res.status(200).json(opcoes)
});

// POST /enquete/voto — corpo { opcao }: incrementa o voto daquela opção.
//   `opcao` é um TEXTO (string): o NOME de uma opção existente (ex.: "Presencial").
router.post("/voto", (req, res) => {
  let opcao = req.body.opcao
    const existe = opcoes.find((a) => a.nome == opcao)
    if(existe!=undefined){
         let index = opcoes.findIndex(v => v.nome === opcao)
        opcoes[index].votos +=1
      res.status(200).json('voto cadastrado com sucesso')
    }else{
      res.status(400).json('opcao invalida')
    }
  // TODO (Tarefa C):
  //  1. Leia `opcao` (texto) de req.body.
  //  2. Procure a opção cujo `nome` seja igual a esse texto em `opcoes`.
  //  3. Se não existir, responda 400.
  //  4. Se existir, incremente `votos` (número) e responda 200.
  
});

module.exports = router;