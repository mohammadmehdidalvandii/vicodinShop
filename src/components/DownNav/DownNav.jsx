import React, { useState } from 'react'
import './DownNav.css'
import { Link } from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'
import { FiPhoneCall } from 'react-icons/fi'
import {BsBasket3 , BsPerson} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
import {GiTrophyCup} from 'react-icons/gi'
import {TiTags} from 'react-icons/ti'
export default function DownNav() {
    const [isMenuOpne ,setIsMenuOpne] =useState(false)
        function openMenu (){
           setIsMenuOpne(!isMenuOpne)
        }
    return (
        <section className="downNav">
            <div className="container">
                <div className="downNavWrapper">
                    <div className="downNavLeft">
                        <div className="downNavItems">
                            <div className="downNavItem" onClick={openMenu}>
                                <div className="downNavItemsButton">
                                    <span className="itemsButton">
                                        <GoThreeBars className='itemsButtonIcon' />
                                        دسته بندی
                                    </span>
                                    <IoIosArrowDown className='itemsButtonIconLeft' />
                                </div>
                                <div className="downNavBarMenu" style={{display: isMenuOpne ?'block' :  'none'}}>
                                    <ul className="itemsBarMenu">
                                    <li className="itemBarMenu">
                                            <a href="#" className="itemBarMenuLink">
                                                    <BsBasket3 className='itemBarMenuIcon'/>
                                                    سبد خرید
                                            </a>
                                        </li>
                                        <li className="itemBarMenu">
                                            <a href="#" className="itemBarMenuLink">
                                                    <AiFillSetting className='itemBarMenuIcon'/>
                                                     تجهیزات پزشکی
                                            </a>
                                        </li>
                                        <li className="itemBarMenu">
                                            <a href="#" className="itemBarMenuLink">
                                                    <GiTrophyCup className='itemBarMenuIcon'/>
                                                    تجهیزات بیمارستان
                                            </a>
                                        </li>
                                        <li className="itemBarMenu">
                                            <a href="#" className="itemBarMenuLink">
                                                    <BsPerson className='itemBarMenuIcon'/>
                                                     کرونا
                                            </a>
                                        </li>
                                        <li className="itemBarMenu">
                                            <a href="#" className="itemBarMenuLink">
                                                    <TiTags className='itemBarMenuIcon'/>
                                                    تجهیزات خانگی
                                            </a>
                                        </li>
                                        <li className="itemBarMenu">
                                            <a href="#" className="itemBarMenuLink">
                                                    <BsBasket3 className='itemBarMenuIcon'/>
                                                     جدید ترین محصولات
                                            </a>
                                        </li>
                                        <li className="itemBarMenu">
                                            <a href="#" className="itemBarMenuLink">
                                                    <AiFillSetting className='itemBarMenuIcon'/>
                                                     محصولات بهداشتی
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="downNavMenus">
                                <ul className="downNavMenuItems">
                                    <li className="menuItem">
                                        <Link to='/' className="menuItemLink">خانه</Link>
                                    </li>
                                    <li className="menuItem">
                                        <Link to='/AboutUs' className="menuItemLink">درباه ما</Link>
                                    </li>
                                    <li className="menuItem">
                                        <Link to='/Shop' className="menuItemLink">فروشکاه</Link>
                                    </li>
                                    <li className="menuItem">
                                        <Link to='/' className="menuItemLink">وبلاگ</Link>
                                    </li>
                                    <li className="menuItem">
                                        <Link to='/Contact' className="menuItemLink">ارتباط با ما</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="downNavRight">
                        <a href="#" className="downNavRightLink">
                            +۱۲۳-۴۵۶-۷۸۹-۱۰
                            <FiPhoneCall className='downNavRightLinkIcon' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
