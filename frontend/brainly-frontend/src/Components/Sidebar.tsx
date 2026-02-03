import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";


export function Sidebar(){
    return <div className="h-screen bg-white border-bold w-72 fixed left-0 top-0" >
        <div className="pl-2 pt-4 flex items-center">
            <div className="pr-2 text-purple-600">
                 <Logo/>
            </div>
            BRAINLY
        </div>
           <div className="pt-4 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItem text="YouTube" icon={<YoutubeIcon/>}/>
            
           </div>
           
    </div>
}