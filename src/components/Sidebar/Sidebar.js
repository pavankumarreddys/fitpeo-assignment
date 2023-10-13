import React, { useEffect, useState } from 'react'
import {BiMenuAltRight,BiSolidKey,BiSolidUser } from "react-icons/bi"
import {CiSearch} from 'react-icons/ci'
import { FaTimes } from 'react-icons/fa'
import {IoIosArrowForward} from 'react-icons/io'
import {MdOutlineLiveHelp} from 'react-icons/md'
import {LuBadgePercent} from 'react-icons/lu'
import {GiMoneyStack} from 'react-icons/gi'
import {BsBox} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'
import logos from '../../assets/logo/logos.png'
import manlog from '../../assets/logo/manlogo.png'
export const Sidebar = (props) => {
    const {menuTrigger} = props
    const [menu,setMenu] = useState(true)
    const [nav, setNav] = useState(false);
    
    useEffect(()=>{
        menuTrigger(nav)
    },[nav])

  return (
    <>
    <div className='md:hidden p-2 cursor-pointer items-center text-white'>
        {menu?(
            <div className='flex justify-between items-center '>
                <div className='flex' >
                    <img src={logos} className='logo-custom'/>
                    <div onClick={() => setNav(!nav)} className='cursor-pointer  z-10 text-gray-500 md:hidden '>
                        {nav ? <FaTimes size={30} /> : <BiMenuAltRight size={30} />}
                    </div>
                </div>
                <div>
                    Hello Pavan 👋🏻,
                </div>
                <div className="search-box">
                <button className='custom-button'><CiSearch className="search-icon" /></button>
                    <input type="search" placeholder="Search" className="input-custom" />
                </div>
            </div>
        ):(
            <div>No menu</div>
        )}
        
          {nav && 
          
            <ul className='md:hidden flex justify-between flex-col  absolute top-0 
              left-0 w-full  h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>
            <div>
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200 hover:text-gray-100">
                <div className='flex mt-5'>
                <img src={logos} className='logo-custom'/>
                <h1>Dashboard</h1>
                </div>
            </li>
            <li className='px-4  pt-8' >
                <div className='flex justify-start items-center p-1'>
                    <button className='border-2 rounded'><BiSolidKey style={{ margin: '3px',}}/></button>
                    <p className='text-xl mt-3 pl-2'>Dashboard</p>
                </div>
            </li>
            <li className='px-4' onClick={() => setNav(false)}>
                <div className='flex justify-between items-center hover:bg-slate-600 rounded p-1'>
                    <div className='flex justify-center items-center'>
                        <button className='border-2 rounded h-[1.5rem]'><BsBox style={{ margin: '3px',}}/></button>
                        <p className='text-xl mt-3 pl-2'>Product</p>
                    </div>
                    <IoIosArrowForward/>
                </div>
            </li>
            <li className='px-4' onClick={() => setNav(false)}>
                <div className='flex justify-between items-center hover:bg-slate-600 rounded p-1'>
                    <div className='flex justify-center items-center'>
                        <button className='border-2 rounded h-[1.5rem]'><BiSolidUser style={{ margin: '3px',}}/></button>
                        <p className='text-xl mt-3 pl-2'>Customers</p>
                    </div>
                    <IoIosArrowForward/>
                </div>
            </li>
            <li className='px-4' onClick={() => setNav(false)}>
                <div className='flex justify-between items-center hover:bg-slate-600 rounded p-1'>
                    <div className='flex justify-center items-center'>
                        <button className='border-2 rounded h-[1.5rem]'><GiMoneyStack style={{ margin: '3px',}}/></button>
                        <p className='text-xl mt-3 pl-2'>Income</p>
                    </div>
                    <IoIosArrowForward/>
                </div>
            </li>
            <li className='px-4' onClick={() => setNav(false)}>
                <div className='flex justify-between items-center hover:bg-slate-600 rounded p-1'>
                    <div className='flex justify-center items-center'>
                        <button className='border-2 rounded h-[1.5rem]'><LuBadgePercent style={{ margin: '3px',}}/></button>
                        <p className='text-xl mt-3 pl-2'>Promote</p>
                    </div>
                    <IoIosArrowForward/>
                </div>
            </li>
            <li className='px-4' onClick={() => setNav(false)}>
                <div className='flex justify-between items-center hover:bg-slate-600 rounded p-1'>
                    <div className='flex justify-center items-center'>
                        <button className='border-2 rounded h-[1.5rem]'><MdOutlineLiveHelp style={{ margin: '3px',}}/></button>
                        <p className='text-xl mt-3 pl-2'>Help</p>
                    </div>
                    <IoIosArrowForward/>
                </div>
            </li>
            </div>
            <div>
            <div className='bg-slate-600 m-2 flex justify-between items-center hover:bg-slate-600 rounded p-1'>
                    <div className='flex justify-center items-center'>
                        <img src={manlog} className='man-logo'/>
                        <div className=''>
                            <p className='text-xl pl-2'><span className=' text-white font-bold'>Pavan</span><br/>Frontend Developer</p>
                        </div>
                    </div>
                    <IoIosArrowForward/>
                </div>
            </div>
            
        </ul>
        }
    </div>
    <div className='h-screen  pb-3 hidden md:flex flex-col justify-between fixed'>
        
        <div>
        <div className='flex'>
            <img src={logos} className='logo-custom'/>
            <h4 className=''>Dashboard</h4>
        </div>
        
        <ul className='p-0'>
        <li className='pt-8 ' >
                <div className='flex justify-start items-center p-1'>
                    <button className='mb-2 border-2 rounded h-[1.5rem] lg: h-[1.3rem]'><BiSolidKey style={{ margin: '1px',}}/></button>
                    <p className='text-2xl lg:text-lg pt-2 pl-2'>Dashboard</p>
                </div>
            </li>
        <li className='p-1 flex justify-between items-center hover:bg-slate-600 rounded'>
            <div className='flex justify-center items-center'>
                <button className='mb-2 border-2 rounded h-[1.5rem] lg: h-[1.3rem]'><BsBox style={{ margin: '1px',}}/></button>
                <p className='text-2xl lg:text-lg pt-2 pl-2'>Product</p>
            </div>
            <IoIosArrowForward/>
        </li>

        <li className='p-1 flex justify-between items-center hover:bg-slate-600 rounded'>
            <div className='flex justify-center items-center'>
                <button className='mb-2 border-2 rounded h-[1.5rem] lg: h-[1.3rem]'><BiSolidUser style={{ margin: '1px',}}/></button>
                <p className='text-2xl lg:text-lg pt-2 pl-2'>Customers</p>
            </div>
            <IoIosArrowForward/>
        </li>

        <li className='p-1 flex justify-between items-center hover:bg-slate-600 rounded'>
            <div className='flex justify-center items-center'>
                <button className='mb-2 border-2 rounded h-[1.5rem] lg: h-[1.3rem]'><GiMoneyStack style={{ margin: '1px',}}/></button>
                <p className='text-2xl lg:text-lg pt-2 pl-2'>Income</p>
            </div>
            <IoIosArrowForward/>
        </li>

        <li className='p-1 flex justify-between items-center hover:bg-slate-600 rounded'>
            <div className='flex justify-center items-center'>
                <button className='mb-2 border-2 rounded h-[1.5rem] lg: h-[1.3rem]'><LuBadgePercent style={{ margin: '1px',}}/></button>
                <p className='text-2xl lg:text-lg pt-2 pl-2'>Promote</p>
            </div>
            <IoIosArrowForward/>
        </li>
           
        <li className='p-1 flex justify-between items-center hover:bg-slate-600 rounded'>
            <div className='flex justify-center items-center'>
                <button className='mb-2 border-2 rounded h-[1.5rem] lg: h-[1.3rem]'><MdOutlineLiveHelp style={{ margin: '1px',}}/></button>
                <p className='text-2xl lg:text-lg pt-2 pl-2'>Help</p>
            </div>
            <IoIosArrowForward/>
        </li>

        </ul>
        </div>
        
        <div className=' bg-slate-500 flex justify-between items-center hover:bg-slate-600 rounded p-1'>
            <div className='flex justify-center items-center'>
                <img src={manlog} className='man-logo'/>
                <div className=''>
                    <p className='text-2xl md:text-sm lg:text-xs pt-3 pl-2'><span className=' text-white font-bold'>Pavan</span><br/>Frontend Developer</p>
                </div>
            </div>
            <MdKeyboardArrowDown/>
        </div>
    </div>
    </>
  )
}
