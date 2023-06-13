import React from 'react'
import './TopNav.css'
import { AiOutlineMail , AiOutlineTwitter ,AiFillInstagram , AiOutlineDribbble} from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import {FaFacebookF} from 'react-icons/fa'
export default function TopNav() {
  return (
    <section className="topNav">
      <div className="container">
        <div className="topNavWrapper">
          <div className="topNavLeft">
            <a href="#" className="topNavLink">
              info@webmail.com
              <AiOutlineMail className='topNavLinkIconLeft' />
            </a>
            <a href="#" className="topNavLink">
              <IoLocationOutline className='topNavLinkIconLeft' />
              خراسان رضوی،کاشمر،خیام ۴ خراسان رضوی،کاشمر،خیام ۴
            </a>
          </div>
          <div className="topNavright">
            <div className="topNavMedia">
              <a href="#" className="topNavLink"><FaFacebookF className='topNavLinkRightIcon' /></a>
              <a href="#" className="topNavLink"><AiOutlineTwitter className='topNavLinkRightIcon' /></a>
              <a href="#" className="topNavLink"><AiFillInstagram className='topNavLinkRightIcon' /></a>
              <a href="#" className="topNavLink"><AiOutlineDribbble className='topNavLinkRightIcon' /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
