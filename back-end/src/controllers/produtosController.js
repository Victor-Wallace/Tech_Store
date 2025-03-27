import {
  getProdutos,
  postProduto,
  DeleteProduto,
  getProduto,putProduto
} from "../models/prodrutosModels.js";

export const listarProdutos = async (req, res) => {
    
    const produtos = await getProdutos();
    
    res.json(produtos);
    
};


export const criarProduto = async (req, res) => {
    try {
        const { nome, desc,quant ,preco } = req.body;
        if (!nome || !desc || !quant || !preco) {
          console.log("Entrou no if");
          console.log(req.body, " Body recebido");
          return res.status(400).json({ error: "Preencha todos os campos!" });
        }
        const produtoId = await postProduto({ nome, desc, quant, preco });
        return res.status(201).json({id:produtoId,message:"Produto criado com sucesso!!!"})
    } catch (error) {
        console.error("Erro ao criar produto", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}
 
export const deletarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        await DeleteProduto(id);
        return res.status(200).json({message:"Produto deletado com sucesso!!!"})
    } catch (error) {
        console.log("Erro ao deletar produto:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
        
    }
}

export const listarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await getProduto(id);
        if (!produto) {
            return res.status(404).json({
                error: "Produto não encontrado"
            });
        }
        return res.status(200).json(produto);
    } catch (error) {
        console.log("Erro ao buscar produto:", error);
        return res.status(500).json({error:"Erro interno do servidor"})
    }
}

export const atualizarProduto = async (req,res)=>{
    try {
        const { id } = req.params;
        const dadosAtualizados = req.body;

        await putProduto(id, dadosAtualizados);
        return res.status(200).json({message:"Produto atualizado com sucesso"})
    } catch (error) {
        console.error("Erro ao atualizar produto", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}