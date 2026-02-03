import {Request, Response ,Router } from "express";
import { userMiddleware } from "../middleware";
import { Content } from "../db";

export const contentRouter=Router();


contentRouter.post("/",userMiddleware, async(req:Request, res:Response)=>{
   
   try{
    const { link, title ,type} = req.body;
    
    const content= await Content.create({
        link:link,
        title,
        type,
        userId: req.userId,
        tags:[]

    })
    console.log("saved content ", content);

    return res.json({
        message:" Content added"
    })
}catch(e:any){
    res.status(400).json({message:e.message});
}
 });

contentRouter.get("/", userMiddleware,async (req:Request, res:Response)=>{
    const userId=req.userId;
    const content= await Content.find({
        userId:userId
    }).populate("userId" ,"username")
    res.json({
        content
    })

});

contentRouter.delete("/", async(req:Request, res:Response)=>{

    const contentId=req.body.contentId

    await Content.deleteMany({
        contentId,
        userId: req.userId
    })
})