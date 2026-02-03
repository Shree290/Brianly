import { NextFunction, Request, Response } from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import { JWT_PASS } from "./config";

interface MyJwtPayload extends JwtPayload{
    id:string;
}

export const userMiddleware=async(req:Request, res:Response, next:NextFunction)=>{
    const header= req.headers["authorization"];
    const decoded= jwt.verify(header as unknown as string,JWT_PASS) as MyJwtPayload;
    if(decoded){
        req.userId=decoded.id;
        next()
    } else{
        res.status(403).json({
            message: "You are not logged in"
        })
    }

}