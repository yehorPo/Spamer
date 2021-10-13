import express from "express";
import mongoose from "mongoose";
import router from "./endpoints.js";

const PORT = 6500;
const url = `mongodb+srv://admin:admin@emaildb.9w2wk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());
app.use('/api', router);

async function start() {
    try {
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => console.log("server is running on port " + PORT));
    } catch (e) {
        console.log(e);
    }
}
start();