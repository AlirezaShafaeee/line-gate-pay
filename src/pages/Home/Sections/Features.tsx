import React from 'react'
import FeatureItem from '../Components/UI/FeatureItem'
import NeedItem from '../Components/UI/NeedItem'
import CoinRow from './CoinRow'

import { ReactComponent as TagPrice } from '../Assets/Tag Price.svg'
import { ReactComponent as Restart } from '../Assets/Restart Square.svg'
import { ReactComponent as Eye } from '../Assets/Eye Scan.svg'
import { ReactComponent as Vector } from '../Assets/Vector.svg'
import { needs } from '../DB/Need'
const Features = () => {
  return (
    <>
      <section className="space-x-4 max-md:flex-col max-md:space-x-0 max-md:space-y-4 flex justify-between items-center">
        <FeatureItem
          Icon={Eye}
          lable="Privacy"
          subLable="No proof of identity needed; we don’t keep transaction details"
        />
        <FeatureItem
          Icon={TagPrice}
          lable="Mass Payouts"
          subLable="Pool all your transactions together"
          active="saving 80% on fees"
        />
        <FeatureItem
          Icon={Restart}
          lable="0% chargeback"
          subLable="Transactions cannot be canceled or reversed on Blockchain"
        />
      </section>
      <section className="mt-32 text-center">
        <h3 className="text-text text-[18px] font-bold">
          Accept <span className="text-primary">15+ Supported Coins</span> on
          Your Website
        </h3>
        <div className="w-[130%] relative m-auto -left-[15%] mt-10">
          <div className="absolute bg-gradient-to-r from-background -top-4 bottom-0 -left-10 w-[20%] z-10 "></div>
          <div className="absolute bg-gradient-to-l from-background -top-4 bottom-0 -right-10 w-[20%] z-10 "></div>
          <CoinRow />
        </div>
      </section>
      <section className="flex justify-between items-center mt-32">
        <div className="space-y-4 w-1/4">
          <Vector />
          <h2 className="text-text font-bold text-[22px]">
            Crypto Payment Gateway for All Kinds of Needs
          </h2>
          <span className="text-sm font-normal block">
            Customize Plisio API to meet your business demands and become part
            of the market with $300 billion+ turnover.
          </span>
        </div>
        <div className=" p-16 grid grid-cols-6 gap-x-3 gap-y-5 ">
          {needs.map((value, index) => {
            return (
              <NeedItem
                label={value.label}
                Icon={value.Icon}
                color={
                  (index % 2 === 0 && index < 6) ||
                  (index >= 6 && index % 2 === 1)
                    ? '#1093FF'
                    : '#F6BF53'
                }
                background={
                  (index % 2 === 0 && index < 6) ||
                  (index >= 6 && index % 2 === 1)
                    ? '#E0F1FF'
                    : '#FBF2DF'
                }
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Features
