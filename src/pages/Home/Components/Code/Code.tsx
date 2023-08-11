import React, { useState } from 'react';
import Button from '../UI/Button';
import CodeImg from '../../../../assets/Code.png'
import {PiBagFill, PiNotepadLight} from 'react-icons/pi'
import {FaRobot} from 'react-icons/fa'

const Code = () => {
    const[selected,setSelected] = useState<number>(0);
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <img width={700}  alt="Line gatepay Banner" src={CodeImg} />
                <div className='flex flex-col space-y-7 text-[18px] font-[700] text-[#BABABA]'>
                    <div onClick={() => setSelected(0)} className={['cursor-pointer flex items-center justify-start pl-[20px]', selected===0? "border-l-[5px] border-primary pl-[15px] text-primary" : ""].join(" ")}>
                        <div><FaRobot/></div>
                        <span className='ml-[5px]'>Balance</span>
                    </div>
                    <div onClick={() => setSelected(1)} className={['cursor-pointer flex items-center justify-start pl-[20px]', selected===1? "border-l-[5px] border-primary pl-[15px] text-primary" : ""].join(" ")}>
                   
                        <div><PiBagFill/></div>
                        <span className='ml-[5px]'>Payout</span>
                    </div>
                    <div onClick={() => setSelected(2)} className={['cursor-pointer flex items-center justify-start pl-[20px]', selected===2? "border-l-[5px] border-primary pl-[15px] text-primary" : ""].join(" ")}>
                   
                        <div><PiNotepadLight/></div>
                        <span className='ml-[5px]'>Invoice</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start w-[30%]'>
                {/* <div className="h-0 w-0 border-t-[30px] border-r-[30px] border-blue-500 transform rotate-45"></div> */}

                {/* <div className="w-0 h-0 
                transform
                rotate-
                border-l-[50px] border-l-transparent
                border-t-[75px] border-t-red-500
                border-r-[50px] border-r-transparent">
                </div> */}

                <h4 className='text-[22px] font-[700]'>Simple code. Easy setup.</h4>
                <span className='mt-[10px] mb-[25px]'>Use our code to connect your business in a few clicks. Our API will show you that managing your funds and invoices or calculating fees has never been easier.</span>
                <div className='flex flex-col space-y-3'>
                    <Button lable="Dev Documents"/>
                    <Button lable="Get help" primary/>
                </div>

            </div>
        </div>
    );
};

export default Code;