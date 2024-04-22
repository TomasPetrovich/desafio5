const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tomaspetrovich:Vectra891@cluster0.yrqumy1.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Conexion exitosa"))
.catch((error) => console.log("Error en la conexion", error))