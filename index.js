import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("Public"));

app.get("/", async (req, res) =>{
    try{
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious");
    res.render("index.ejs",{
        setup1: result.data.setup,
        delivery1: result.data.delivery
    });
    }catch(error){
        res.status(500);
    };
});


app.listen(port, () => {
    console.log("Listening on port 3000");
});