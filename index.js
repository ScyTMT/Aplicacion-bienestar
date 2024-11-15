const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const nombreBd = "clase";
const uri = "mongodb+srv://scytmt:AXVcLyDF8XJw.VT@cluster0.pt0vk.mongodb.net/" + nombreBd + "?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Conectado a la base de datos");
});

connection.on("error", (err) => {
    console.log("ERROR:" + err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'inicio.html'));
});

app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app.html'));
});



const Usuario = mongoose.model("Usuario", { 
    correo: String,
    password: String
});

app.post('/add', (req, res) => {
    const usuario = new Usuario({ 
        correo: req.body.correo,
        password: req.body.password
    });

    usuario.save()
        .then((doc) => {
            console.log("Ingresado: " + doc);
            res.redirect('/app'); 
        })
        .catch((err) => {
            console.log("ERROR: " + err);
            res.send("Hubo un error al guardar el usuario."); 
        });
});



// Inicia el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Escuchando al puerto: " + PORT);
});


