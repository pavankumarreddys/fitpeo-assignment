import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {BsArrowUpShort,BsArrowDownShort} from 'react-icons/bs'
import money from "../../assets/logo/money1.png"
import order from "../../assets/logo/order1.png"
import wallet from '../../assets/logo/wallet1.png'
import bag from '../../assets/logo/bag1.png'
import water from '../../assets/logo/water3d.png'
import illustration from '../../assets/logo/illustration.png'

import { Barchart } from '../Barchart'
import ReactDOMServer from 'react-dom/server';

export const CenterContent = () => {
    const calling = () => {
        return <span>Stock&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>;
      };
      
      let textOr = ReactDOMServer.renderToString(calling());
      const splitText = textOr.split(/(<span[^>]*>)/);
      let modifiedText = splitText[2]
      const text = modifiedText.replace(/<\/span>/g, '');
      console.log('first', splitText[2]);
      
  return (
    <div>
        <div className='hidden md:flex justify-between items-center p-2'>
            <h1>Hello Pavan 👋🏻,</h1>
            <div className="search-box p-1 text-black">
                <button className='custom-button'><CiSearch className="search-icon" /></button>
                <input type="text" placeholder="Search" className="text-black p-1 input-custom" />
            </div>
        </div>
        <div className='mt-3 flex flex-wrap gap-2'>
            <div className='box-custom shadow-md flex justify-start items-center'>
                <div className='in-money mr-2'>
                <img src={money} className='icons-img-custom'/>
                </div>
                <div className='grow p-0 m-0 flex flex-col'>
                    <ul className='p-0'>
                        <li className='font-bolder text-slate-500'>Earnings</li>
                        <li className='font-bold '>$198k</li>
                        <li className='flex'><span className='flex text-green-600'><BsArrowUpShort style={{'marginTop':'5px'}}/>37.8%</span>this month</li>
                    </ul>
                </div>
            </div>

            <div className='box-custom shadow-md flex justify-start items-center'>
                <div className='orders-money mr-2'>
                <img src={order} className='icons-img-custom'/>
                </div>

                <div className='grow p-0 m-0 flex flex-col'>
                    <ul className='p-0'>
                        <li className='font-bolder text-slate-500'>Orders</li>
                        <li className='font-bold '>$2.4k</li>
                        <li className='flex'><span className='flex text-red-600'><BsArrowDownShort style={{'marginTop':'5px'}}/>2%</span>this month</li>
                    </ul>
                </div>
            </div>

            <div className='box-custom shadow-md flex justify-start items-center'>
                <div className='wallet-money mr-2'>
                <img src={wallet} className='icons-img-custom'/>
                </div>
                <div className='grow p-0 m-0 flex flex-col'>
                    <ul className='p-0'>
                        <li className='font-bolder text-slate-500'>Balance</li>
                        <li className='font-bold '>$2.4k</li>
                        <li className='flex'><span className='flex text-red-600 '><BsArrowDownShort style={{'marginTop':'5px'}}/>2%</span>this month</li>
                    </ul>
                </div>
            </div>

            <div className='box-custom shadow-md flex justify-between items-center'>
                <div className='bag mr-2'>
                <img src={bag} className='icons-img-custom'/>
                </div>

                <div className='grow p-0 m-0 flex flex-col'>
                    <ul className='p-0'>
                        <li className='font-bolder text-slate-500'>Total sales</li>
                        <li className='font-bold '>$89k</li>
                        <li className='flex'><span className='flex text-green-600'><BsArrowUpShort style={{'marginTop':'5px'}}/>11%</span>this week</li>
                    </ul>
                </div>
            </div>
            
        </div>

        <div className='mt-3'>
            <div className=''>
                <Barchart/>
            </div>
        </div>

        <div className='bg-white mt-3'>
            <div className='w-full flex justify-between '>
            <div className='w-1/2 md:w-3/5'>
                <h2>Product Sell</h2>
            </div>
            <div className='w-1/2 md:w-2/5 flex justify-around items-center'>
                    <div className="search-box p-1 text-black mr-1">
                        <button className='custom-button'><CiSearch className="search-icon" /></button>
                        <input type="text" placeholder="Search" className="text-black p-1 input-custom" />
                    </div>
                    <select className='rounded bg-transparent shadow-lg'>
                        <option>Last 30 days</option>
                        <option>Last 40 days</option>
                        <option>Last 50 days</option>
                    </select>
            </div>
            </div>

            <div className='w-full flex justify-between border-b-2 border-slate-500 mt-3'>
                <div className='w-1/2 md:w-3/4'>
                    <h5 className=''>Product Name</h5>
                </div>
                <ul className='w-1/2  md:w-2/4 flex  justify-around p-0  items-center'>
                    <li className='text-lg'>{window.innerWidth > 768? text:'Stock'}</li>
                    <li className='text-lg'>Price</li>
                    <li className='text-lg'>Total Sales</li>
                </ul>
            </div>


            <div className='shadow-xl bg-slate-100 w-full flex justify-start items-center mt-2'>
                <div id="items" className='p-1 w-1/2  md:w-3/5  '>
                   <div  className=''>
                    <img src={water} className='image-custom'/>
                   </div>

                    <ul  className='p-0 md:ml-2 self-end'>
                        <li className='font-bold'>Abstract 3D</li>
                        <li className=''>Lorem ipsum dolor sit amet consectetur </li>
                    </ul>
                </div>
                <ul className='p-0 w-1/2 md:w-2/5 flex justify-around items-center'>
                    <li className=''>32 In Stock</li>
                    <li className=' font-bold'>$45.99</li>
                    <li className=''>20</li>
                </ul>
            </div>
            
            <div className='shadow-xl bg-slate-100 w-full flex justify-start items-center mt-2'>
                <div id="items" className='p-1 w-1/2 md:w-3/5  '>
                   <div>
                    <img src={illustration} className='image-custom'/>
                   </div>
                    <ul  className='p-0 md:ml-2 self-end'>
                        <li className='font-bold'>Sarphens Illustration</li>
                        <li className=''>Lorem ipsum dolor sit amet consectetur </li>
                    </ul>
                </div>
                <div className='w-1/2 md:w-2/5 flex justify-around items-center'>
                    <p>32 In Stock</p>
                    <p className='font-bold'>$45.99</p>
                    <p>20</p>
                </div>
            </div>

            
        </div>
    </div>
  )
}
