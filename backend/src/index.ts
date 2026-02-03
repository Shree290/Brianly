import { Link } from "./db";
import { userMiddleware } from "./middleware";
import { contentRouter } from "./routes/content";
import { userRouter } from "./routes/user";
import { random } from "./utils";
import { NextFunction, Request,Response } from "express";
import cors from "cors";

const express= require ('express');


const app= express();

app.use(express.json());



app.use(cors({
  origin: "http://localhost:5173", // Vite frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false
}));


app.use((req:Request, res:Response, next:NextFunction) => {
  console.log("REQ:", req.method, req.url);
  next();
});


app.use("/api/v1/user" ,userRouter);
app.use("/api/v1/content", contentRouter);


app.post("/api/v1/brain/share",userMiddleware, async(req:Request, res:Response)=>{
    const { share }=req.body;
    
    if(share){
       await Link.create({
            //@ts-ignore
            userId:req.userId,
            hash:random(10)
        })
    } else{
       await Link.deleteOne({
            //@ts-ignore
            userId:req.userId
        })
    }
  
    res.json({
        message:"Update Shareable link"
    })
});

app.listen(5000);
