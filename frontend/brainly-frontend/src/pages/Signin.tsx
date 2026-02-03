import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";



export function Signin(){

    const usernameRef=useRef<HTMLInputElement | null>(null);
    const passwordRef=useRef<HTMLInputElement | null>(null);
    const navigate=useNavigate();

    async function signin(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;

        const response=await axios.post(BACKEND_URL+ "/api/v1/user/signin", {
        
                username,
                password
            
        });
        const jwt=response.data.token;
        localStorage.setItem("token", jwt);
        alert("yup you have signed in!!");
        navigate("/dashboard")
    }



    return <div className="h-screen w-screen bg-gray-200 flex jsutify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
             <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            <div className="flex justify-center">
                <Button variant="primary" text="Signin" onClick={signin} />
            </div>
            
        </div>

    </div>

}