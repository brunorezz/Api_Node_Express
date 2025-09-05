import mongoose from "mongoose";

async function conectarBancoDeDados() { 
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.dmrksqh.mongodb.net/Livraria?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
};

export default conectarBancoDeDados;

