const express = require('express')
const format = require('date-format')
const app = express()

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello ALL</h1>")
});


app.get("/api/v1/instagram", (req, res) => {
    const instaSocial ={
        username: "yogeshmotiyani12",
        followers: 100,
        following: 98,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };

    // res.status(200).json({instaSocial})
    res.status(200).json(instaSocial)
});

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial ={
        username: "yogeshmotiyani",
        followers: 400,
        following: 80,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };

    res.status(200).json(instaSocial)
});

app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial ={
        username: "yogesh-motiyani",
        followers: 200,
        following: 100,
        date: format.asString("MM-dd-yy - hh:mm:ss", new Date()),
    };

    res.status(200).json(instaSocial)
});

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({param:req.params.token })
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});