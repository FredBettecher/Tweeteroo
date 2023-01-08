import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

const users = [];
const tweets = [];
let logged = false;

app.post('/sign-up', ((req, res) => {
    const userData = req.body;

    if(userData.username === "" || userData.avatar === "") {
        res.status(422).send();
        alert("O usuário deve preencher todos os campos");
        return;
    }

    users.push(userData);
    console.log(users);
    logged = true;
    res.status(201).send("OK");
}));

app.post('/tweets', ((req, res) => {
    const tweetsData = req.body;

    if(!logged) {
        res.status(401).send("UNAUTHORIZED");
        return;
    }

    if(tweetsData.username === '' || tweetsData.tweet === '') {
        res.status(422).send();
        alert("O usuário deve preencher todos os campos");
        return;
    }
    
    tweets.push(tweetsData);
    console.log(tweets);
    res.status(201).send("OK");
}));

app.listen(PORT);