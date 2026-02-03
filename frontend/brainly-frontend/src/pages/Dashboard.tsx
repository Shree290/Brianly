import { useState } from 'react'

import { Button } from '../Components/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../Components/Card'
import { CreateContentModel } from '../Components/CreateContentModel'
import { Sidebar } from '../Components/Sidebar'
import { useContent } from '../hooks/useContent'







export function Dashboard() {

  const [modelOpen, setModelOpen]=useState(false);
  const content=useContent();


    console.log("Dashboard contents:", content);

  return(<div>
      <Sidebar/>

        <div className="p-4 ml-72 min-h-screen bg-gray-100">
            <div className="p-4">
                      <CreateContentModel 
                        open={modelOpen} 
                        onClose={()=>{
                        setModelOpen(false);
                         
                          }}/>
          </div>
        
        <div className="flex justify-end gap-2">
            <Button onClick={()=>{
              setModelOpen(true)
            }}variant='primary' text='Add content' startIcon={<PlusIcon/>}></Button>
            <Button variant='secondary' text='ShareBrain' startIcon={<ShareIcon/>}></Button> 

        </div>
          < div className="flex gap-4">
              {content.map(({type,title,link})=> <Card type={type} link={link} title={title}></Card>)}  
          </div>

      </div>


  </div>)
}
