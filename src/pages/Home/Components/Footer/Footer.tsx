import React from 'react'

import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'

const Footer = () => {
  return (
    <div className="flex items-start justify-between max-w-[1280px]  mx-auto pt-[40px]">
      <div className="flex flex-col items-start">
        <h6 className="text-[16px] text-primary font-[700]">Products</h6>
        <ul className="list-disc list-inside mt-[20px] text-[14px] space-y-4">
          <li>Business</li>
          <li>Personal</li>
          <li>White Label</li>
          <li>Invoices</li>
          <li>Donations</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div>
        <h6 className="text-[16px] text-primary font-[700]">Resources</h6>
        <ul className="list-disc list-inside mt-[20px] text-[14px] space-y-4">
          <li>API</li>
          <li>Blog</li>
          <li>Security</li>
          <li>Bug Bounty</li>
          <li>FAQ</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <h6 className="text-[16px] text-primary font-[700]">Policy</h6>
        <ul className="list-disc list-inside mt-[20px] text-[14px] space-y-4">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div>
        <h6 className="text-[16px] text-primary font-[700]">Follow us</h6>
        <div className="flex items-center justify-between text-primary text-[30px] mt-[30px] space-x-3">
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
