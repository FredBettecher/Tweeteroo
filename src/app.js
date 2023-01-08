import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

const users = [];
const tweets = [];

app.post('/sign-up', ((req, res) => {
    const userData = req.body;

    if(userData.username === "" || userData.avatar === "") {
        res.status(422).send("O usuário deve preencher todos os campos");
        return;
    }

    users.push(userData);
    res.status(201).send("OK");
}));

app.listen(PORT);