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
        return;
    }
    
    tweets.push(tweetsData);
    console.log("array tweets: ", tweets);
    res.status(201).send(tweets);
}));

app.get('/tweets', ((req, res) => {
    let tweetsList = [];
    
    if(tweets.length === 0){
        res.status(201).send(tweetsList);
        return;
    }

    tweets.map((tweet, index) => {
        const user = users.find(user => user.username === tweet.username);
        if(user) {
            tweetsList.push({
                username: tweet.username,
                avatar: user.avatar,
                tweet: tweet.tweet
            })
        }
        
    });

    res.status(201).send(tweetsList.slice(-10).reverse());
}));

app.listen(PORT);