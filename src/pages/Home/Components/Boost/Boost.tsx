import React from 'react';
import BannerImage from '../../../../assets/Boost.png'
import {TiTick} from 'react-icons/ti'
import Item from '../UI/Item';
import Button from '../UI/Button';

const Boost = () => {
    return (
        <div className='flex items-center justify-between h-[380px] bg-[#F5F5F5] w-[100%]'>  
            <div className='flex flex-col items-start justify-between h-full '>
                <div className='w-[300px]'>
                    <h3 className='text-[22px]'>Boost your Business</h3>
                    <span className='text-[14px]'>Save time and money with Mass Payouts. No Limits. No Boundaries</span>
                </div>
                <div className='grid grid-cols-2 gap-y-4 gap-x-[30px] font-[700]'>
                    <Item title = "Easily enter an international market" type="boost"/>
                    <Item title = "Import your data from file (.xls)" type="boost"/>
                    <div className='flex flex-col items-start justify-end'>
                        <Item title = "Pool together up to 1000 transactions" type="boost"/>
                        <span className='pl-[25px] text-icon'>saving 80% on fees</span>
                    </div>
                    
                    <Item title = "No limits for payout amount" type="boost"/>

                    
                </div>
                <Button lable="Boost my Business" />
            </div>
            <div >
                <img width={500}  alt="Line gatepay Banner" src={BannerImage} />
            </div>

        </div>
    );
};

export default Boost;