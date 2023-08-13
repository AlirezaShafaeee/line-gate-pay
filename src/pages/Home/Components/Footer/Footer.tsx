import React from 'react'

import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between max-w-[1280px]  mx-auto pt-[40px] sm:flex-row sm:items-start pl-[40px]">
      <div className="flex flex-col items-start w-full sm:w-auto">
        <h6 className="text-[16px] text-primary font-[700]">Products</h6>
        <ul className="grid grid-cols-2 w-full list-disc list-inside mt-[20px] text-[14px] gap-y-4 sm:grid-cols-1 sm:space-y-4 sm:gap-y-0">
          <li>Business</li>
          <li>Personal</li>
          <li>White Label</li>
          <li>Invoices</li>
          <li>Donations</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div className="w-full sm:w-auto mt-[40px] sm:mt-[0px]">
        <h6 className="text-[16px] text-primary font-[700]">Resources</h6>
        <ul className="list-disc list-inside mt-[20px] text-[14px] grid grid-cols-2 gap-y-4 sm:grid-cols-1 sm:space-y-4 sm:gap-y-0">
          <li>API</li>
          <li>Blog</li>
          <li>Security</li>
          <li>Bug Bounty</li>
          <li>FAQ</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="w-full sm:w-auto mt-[40px] sm:mt-[0px]">
        <h6 className="text-[16px] text-primary font-[700]">Policy</h6>
        <ul className="list-disc list-inside mt-[20px] text-[14px] grid grid-cols-2 gap-y-4 sm:grid-cols-1 sm:space-y-4 sm:gap-y-0">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="w-full sm:w-auto mt-[40px] sm:mt-[0px]">
        <h6 className="text-[16px] text-primary font-[700]">Follow us</h6>
        <div className="flex items-center justify-start text-primary text-[30px] mt-[30px] space-x-6 sm:space-x-3 sm:justify-between">
          {/* <div>
                        <BsTwitter/>
                        <AiFillInstagram/>
                        <FaFacebook/>
                        <IoLogoGithub/>
                    </div>
                    <div>
                        <AiFillInstagram/>
                    </div>
                    <div>
                        <FaFacebook/>
                    </div>
                    <div>
                        <IoLogoGithub/>
                    </div> */}
          <BsTwitter />
          <AiFillInstagram />
          <FaFacebook />
          <IoLogoGithub />
        </div>
      </div>
    </div>
  )
}

export default Footer
