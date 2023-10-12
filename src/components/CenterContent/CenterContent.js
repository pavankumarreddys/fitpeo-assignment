import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {BsArrowUpShort,BsArrowDownShort} from 'react-icons/bs'
import money from "../../assets/logo/money1.png"
import order from "../../assets/logo/order1.png"
import wallet from '../../assets/logo/wallet1.png'
import bag from '../../assets/logo/bag1.png'

import { Barchart } from '../Barchart'


export const CenterContent = () => {
  return (
    <div>
        <div className='hidden md:flex justify-between items-center p-2'>
            <h1>Hello Pavan ,</h1>
            <div className="search-box p-1 text-black">
                <button className='custom-button'><CiSearch className="search-icon" /></button>
                <input type="text" placeholder="Search" className="text-black p-1 input-custom" />
            </div>
        </div>
        <div className='mt-3 flex flex-wrap gap-2'>
            <div className='box-custom shadow-xl flex justify-start items-center'>
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

            <div className='box-custom shadow-xl flex justify-start items-center'>
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

            <div className='box-custom shadow-xl flex justify-start items-center'>
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

            <div className='box-custom shadow-xl flex justify-between items-center'>
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
    </div>
  )
}
