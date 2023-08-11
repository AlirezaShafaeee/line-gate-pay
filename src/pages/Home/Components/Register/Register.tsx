import React from 'react';
import Item from '../UI/Item';
import Button from '../UI/Button';

const Register = () => {
    return (
        <div className='flex flex-col w-full items-start justify-between py-[50px]'>
            <h4 className='text-[22px] font-[700]'>Register on Plisio Today</h4>
            <div className='flex items-start justify-between w-full'>
                <div className='flex flex-col items-start'>
                    
                    <span className='text-[14px]'>Grow Your Business while Saving Time and Money</span>
                    <div className='grid grid-cols-2 gap-x-2 mt-[20px]'>
                        <Button lable="Sign up now" />
                        <Button lable="Talk to Sales" primary/>
                    </div>
                    <span className='mt-[9px] text-[12px]'>Sign up for free in 2 clicks • Easy setup in 2 minutes • Tech support 24/7</span>
                </div>
                <div className='grid grid-cols-2 gap-x-20 gap-y-3'>
                    <Item title="Free-of-charge registration and setup" type="register"/>
                    <Item title="Enhanced privacy and security" type="register"/>
                    <Item title="24/7 Live Chat Support" type="register"/>
                    <Item title="Multi-currency account" type="register"/>
                    <Item title="Automated mass payouts" type="register"/>
                    <Item title="Trending integrations" type="register"/>
                </div>
            </div>
            
        </div>

        





    );
};

export default Register;