import React, { useState } from 'react'
import './NavDownRes.css'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {BsBasket2Fill, BsFillPersonFill} from 'react-icons/bs'
import {AiFillSetting, AiOutlineShoppingCart, AiFillTags} from 'react-icons/ai'
import {GiTrophyCup} from 'react-icons/gi'
export default function NavDownRes() {
    const[isOpneMenuDown , setIsOpneMenuDown] = useState(false)

    const toggleShowMenuDown = ()=>{
            setIsOpneMenuDown(isOpneMenuDown => !isOpneMenuDown)
    }

  return (
    <section className="NavDownRes">
        <div className="container">
            <div className="navDownResWrapper" onClick={toggleShowMenuDown}>
                <div className="navDownResTitleIcon">
                    <h4 className="navDownResTitle">دسته بندی</h4>
                    <span className="navDownResIcon">
                        {isOpneMenuDown
                            ?  <IoIosArrowUp/>
                            :  <IoIosArrowDown/>
                        }
                    </span>
                </div>
                <div className="navDownResItems" style={{display: isOpneMenuDown ? 'block' : 'none'}}>
                    <ul className="navDownResMenus">
                        <li className="navDownResMenu">
                            <a href="#" className="navDownResMenuLink">
                                <BsBasket2Fill className='navDownResMenuIcon'/>
                                سبد خرید 
                            </a>
                        </li>
                        <li className="navDownResMenu">
                            <a href="#" className="navDownResMenuLink">
                                <AiFillSetting className='navDownResMenuIcon'/>
                                تجهیزات بیمارستان
                            </a>
                        </li>
                        <li className="navDownResMenu">
                            <a href="#" className="navDownResMenuLink">
                                <GiTrophyCup className='navDownResMenuIcon'/>
                                تجهیزات پزشکی

                            </a>
                        </li>
                        <li className="navDownResMenu">
                            <a href="#" className="navDownResMenuLink">
                                <BsFillPersonFill className='navDownResMenuIcon'/>
                                کرونا
                            </a>
                        </li>
                        <li className="navDownResMenu">
                            <a href="#" className="navDownResMenuLink">
                                <AiOutlineShoppingCart className='navDownResMenuIcon'/>
                                 طب سنتی
                            </a>
                        </li>
                        <li className="navDownResMenu">
                            <a href="#" className="navDownResMenuLink">
                                <AiFillTags className='navDownResMenuIcon'/>
                                تجهیزات خانگی
                            </a>
                        </li>
                        <li className="navDownResMenu">
                            <a href="#" className="navDownResMenuLink">
                                <BsBasket2Fill className='navDownResMenuIcon'/>
                                جدید ترین محصولات
                            </a>
                        </li>
                        <li className="navDownResMenu">
                            <a href="#" className="navDownResMenuLink">
                                <AiFillSetting className='navDownResMenuIcon'/>
                                محصولات بهداشتی
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
