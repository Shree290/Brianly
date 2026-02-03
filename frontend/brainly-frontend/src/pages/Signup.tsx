import { useRef } from "react";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup(){

    const usernameRef=useRef<HTMLInputElement | null>(null);
    const passwordRef=useRef<HTMLInputElement | null>(null);
    const navigate= useNavigate();

    async function signup(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;

        await axios.post(BACKEND_URL+ "/api/v1/user/signup", {
        
                username,
                password
            
        });

        alert("yup you have signed up!!");
        navigate("/dashboard");
    }

    return <div className="h-screen w-screen bg-gray-200 flex jsutify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            <div className="flex justify-center">
                <Button variant="primary" text="Signup" onClick={signup} />
            </div>
            
        </div>

    </div>

}