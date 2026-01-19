const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json({"message":"Hello"})
}
)

app.listen(process.env.PORT,()=>{
    console.log("app running port 8080");
})