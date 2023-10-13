import React, { useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import {CenterContent} from '../CenterContent/CenterContent'

export const Home = () => {
  const [mobilemenuActive,setMobilemenuActive] = useState(false)

  const menuTrigger = (nav)=>{
    if(nav){
      setMobilemenuActive(true)
    }else{
      setMobilemenuActive(false)
    }
  }

  return (
    <div className='container-fluid '>
        <div className='row'>
            <div className='sidebar-container bg-blue-900 col-12 col-md-4 col-lg-2 p-2 text-white '>
                <Sidebar menuTrigger={menuTrigger}/>
            </div>
            <div className='col-12 col-md-8 p-2 col-lg-10 '>
                {!mobilemenuActive&& <CenterContent/>}
            </div>
            
        </div>
    </div>
  )
}
