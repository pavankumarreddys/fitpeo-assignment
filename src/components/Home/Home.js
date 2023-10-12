import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import {CenterContent} from '../CenterContent/CenterContent'
export const Home = () => {
  return (
    <div className='container-fluid bg-yellow-400'>
        <div className='row'>
            <div className='col-12 col-md-4 col-lg-2 p-2 bg-green-800 text-white md:h-screen'>
                <Sidebar/>
            </div>
            <div className='col-12 col-md-8 p-2 col-lg-10 bg-red-300 '>
                <CenterContent/>
            </div>
        </div>
    </div>
  )
}
