import express from "express";
import mongoose from "mongoose";
import router from "./endpoints.js";
import path from 'path';
import cors from 'cors';
const __dirname = path.resolve();
const PORT = 5000;
const url = `mongodb+srv://admin:admin@emaildb.9w2wk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();
var allowedOrigins ='http://localhost:5000';
app.use(cors({
  origin: function(origin, callback){ 
    if(!origin) return callback(null, true);    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }    return callback(null, true);
  }
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.json());
app.use('/api', router);
app.use(express.static(__dirname));

async function start() {
    try {
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        app.get('/', function(req, res){
            res.sendFile(__dirname+"/front/index.html");
        });
        app.listen(PORT, () => console.log("server is running on port " + PORT));
    } catch (e) {
        console.log(e);
    }
}
start();