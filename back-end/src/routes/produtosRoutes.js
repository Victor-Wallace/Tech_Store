import express from 'express';
import {
  listarProdutos,
  criarProduto,
  deletarProduto,
  listarProduto,
  atualizarProduto,
} from "../controllers/produtosController.js";



const router = express.Router();



router.get("/produtos", listarProdutos);


router.get("/produtos/:id", listarProduto);


router.delete("/produtos/:id", deletarProduto);


router.post("/produtos", criarProduto);


router.put("/produtos/:id", atualizarProduto);


export default router;