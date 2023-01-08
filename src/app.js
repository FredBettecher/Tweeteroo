import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

const users = [];
const tweets = [];
let logged = false;
let tweetsList = [];

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

app.get('/tweets', ((req, res) => {
    let newTweetsList = [];

    tweets.map((tweet, index) => {
        tweetsList.push({
            username: tweet.username,
            avatar: users[index].avatar,
            tweet: tweet.tweet
        })
    });

    newTweetsList.push(tweetsList.reverse());

    res.send(newTweetsList.slice(-10));
}));

app.listen(PORT);