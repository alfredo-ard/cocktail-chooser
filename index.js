import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        const data = response.data;
        console.log(data["drinks"][0]["strDrink"]);
        res.render("index.ejs", {
            data: data["drinks"][0],
        });
    } catch (error) {
        console.error(error);
        res.render("index.ejs");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
