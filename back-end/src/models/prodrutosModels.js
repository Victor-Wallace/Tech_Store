import admin from "firebase-admin";
import { db } from "../index.js";

export const getProdutos = async () => {
  const snapshot = await db.collection("produtos").get();
  return snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id }));
};

export const postProduto = async (produto) => {
  const produtoRef = await db.collection("produtos").add(produto);
  return produtoRef.id;
};

export const DeleteProduto = async (id) => {
  await db.collection("produtos").doc(id).delete();
};

export const getProduto = async (id) => {
  const produtoRef = db.collection("produtos").doc(id);
  const produtoDoc = await produtoRef.get();

  if (!produtoDoc.exists) {
    return null;
  }
  return {id:produtoDoc.id, ... produtoDoc.data()};
};

export const putProduto = async (id,dadosAtualizados) => {
    await db.collection("produtos").doc(id).update(dadosAtualizados);
    
}