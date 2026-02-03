import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASS } from "../config";
import { User } from "../db";



export const userRouter=Router();



userRouter.post("/signup", async(req: Request, res:Response)=>{

    const username= req.body.username;
    const password= req.body.password;

    try{
        await User.create({
        username:username,
        password:password
        })
        res.status(200).json({
        message:"User signed up"
        })
    }catch(e:any){
        console.error("Signup error:", e.message)
        res.status(411).json({
            message: e.message
        })
    }


})

userRouter.post("/signin", async(req, res)=>{
    const { username, password } = req.body;

     if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required"
    });
    }
    
    const existinguser=await User.findOne({
        username
    })

    
  if (!existinguser) {
    return res.status(403).json({
      message: "Incorrect credentials"
    });
  }

  if (existinguser.password !== password) {
    return res.status(403).json({
      message: "Incorrect credentials"
    });
  }

  const token = jwt.sign(
    { id: existinguser._id },
    JWT_PASS
  );

  // ✅ SUCCESS MUST BE 200
  res.status(200).json({ token });
});


