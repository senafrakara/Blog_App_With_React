import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import postRoutes from "./routes/posts.js";


const app = express(); //express server ı yaratırız
dotenv.config();

app.use(bodyParser.json({ limit: "10mb", extended: true}));
//image dosyalarını yani büyük size deki dosyaları da kabul edeceğiz, 
// normal size ı hata verdiği için limitlendiriyoruz.
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true}));
app.use(cors());

app.get("/", (req, res) =>{
   // res.send("Coding is starting...");
   res.json({
       author: "Coding is starting with Nursena :)",
       message: "Happy Coding!"
   });
});

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000; 
// environment port unu kullan çalışmazsa 5000 portunu kullan diyoruz. 

mongoose
.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, //hata vermemesi için depricated error vermemesi için kullanıyoruz bu flagleri
    useUnifiedTopology:true
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on PORT: ${PORT}`);
    })
})
.catch(err => {
    console.error(err.message);
})

