import React, { useState } from 'react'
import Button from '../UI/Button'
import CodeImg from '../../../../assets/Code.png'
import { PiBagFill, PiNotepadLight } from 'react-icons/pi'
import { FaRobot } from 'react-icons/fa'

const Code = () => {
  const [selected, setSelected] = useState<number>(0)
  return (
    <div className="flex flex-col-reverse items-center justify-between max-w-[1280px] mx-auto sm:flex-row">
      <div className="flex flex-col-reverse items-center sm:flex-row">
        <div className=" mt-[30px] flex justify-between items-center gap-x-2  sm:hidden">
          <Button lable="Dev Documents" />
          <Button lable="Get help" primary />
        </div>

        <div className="px-[20px] sm:px-[0px]">
          <img width={700} alt="Line gatepay Banner" src={CodeImg} />
        </div>

        <div className="flex mt-[25px] mb-[10px] sm:mb-[0px] sm:mt-[0px] sm:space-y-7 text-[18px] font-[700] text-[#BABABA] sm:flex-col ">
          <div
            onClick={() => setSelected(0)}
            className={[
              'cursor-pointer flex items-center justify-start pl-[20px] ',
              selected === 0
                ? 'text-primary sm:border-l-[5px] sm:border-primary sm:pl-[15px] '
                : '',
            ].join(' ')}
          >
            <div>
              <FaRobot />
            </div>
            <span className="ml-[5px]">Balance</span>
          </div>
          <div
            onClick={() => setSelected(1)}
            className={[
              'cursor-pointer flex items-center justify-start pl-[20px]',
              selected === 1
                ? 'sm:border-l-[5px] sm:border-primary sm:pl-[15px] text-primary'
                : '',
            ].join(' ')}
          >
            <div>
              <PiBagFill />
            </div>
            <span className="ml-[5px]">Payout</span>
          </div>
          <div
            onClick={() => setSelected(2)}
            className={[
              'cursor-pointer flex items-center justify-start pl-[20px]',
              selected === 2
                ? 'sm:border-l-[5px] sm:border-primary sm:pl-[15px] text-primary'
                : '',
            ].join(' ')}
          >
            <div>
              <PiNotepadLight />
            </div>
            <span className="ml-[5px]">Invoice</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[90%] sm:w-[30%] sm:items-start">
        {/* <div className="h-0 w-0 border-t-[30px] border-r-[30px] border-blue-500 transform rotate-45"></div> */}

        {/* <div className="w-0 h-0 
                transform
                rotate-
                border-l-[50px] border-l-transparent
                border-t-[75px] border-t-red-500
                border-r-[50px] border-r-transparent">
                </div> */}

        <h4 className="text-[22px] font-[700]">Simple code. Easy setup.</h4>
        <span className="mt-[10px] mb-[25px] text-center sm:text-start">
          Use our code to connect your business in a few clicks. Our API will
          show you that managing your funds and invoices or calculating fees has
          never been easier.
        </span>
        <div className="hidden flex-col space-y-3  sm:flex">
          <Button lable="Dev Documents" />
          <Button lable="Get help" primary />
        </div>
      </div>
    </div>
  )
}

export default Code
