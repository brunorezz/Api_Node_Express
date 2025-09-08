import express from 'express';
import conectarBancoDeDados from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectarBancoDeDados();

conexao.on("error", (erro) => console.error(erro));
conexao.once("open", () => {
    console.log('Conexão com o banco feita com sucesso!');
});

const app = express();
routes(app);

export default app;

