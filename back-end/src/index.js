import express from 'express';
import produtosRoutes from './routes/produtosRoutes.js';
import admin from 'firebase-admin';
import cors from "cors"
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const serviceAccount = require("./serviceAccountKey.json");


const app = express();
const port = 8000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


export const db = admin.firestore();




app.use(cors())
app.use(express.json());
app.use(produtosRoutes);



app.listen(port,()=>{console.log("App rodando")})
