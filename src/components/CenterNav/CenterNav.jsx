import React from 'react'
import './CenterNav.css'
import {Link} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {MdPersonOutline} from 'react-icons/md'
import {SlBasket} from 'react-icons/sl'
export default function CenterNav() {
  return (
    <section className="centerNav">
        <div className="container">
            <div className="centerNavWrapper">
                <div className="centerWrapperItem">
                    <Link to='/' className='centerNavLogo'>
                        <img src="/images/logo.png" alt="" className="centerNavLogoImg" />
                    </Link>
                </div>
                <div className="centerWrapperItem">
                    <form  className="centerNavSearch">
                        <input type="search" className='centerNavSearchInput' placeholder='جست وجو...' />
                        <BiSearch className='centerNavSearchIcon'/>
                    </form>
                </div>
                <div className="centerWrapperItem centerWrapperItemBox ">
                    <div className="centerNavAccount">


                        <div className="centerNavBasketLink centerNavBasketLinkTooltip">
                            <MdPersonOutline className='centerNavAccountIcon'/>
                             <span className="centerNavBasketLinks centerNavBasketLinksTooltipContent">
                                <ul className="itemsTooltipLinks">
                                    <li className="itemTooltipLink">
                                    <Link to='/Account' className='LinkTooltipPage'>حساب کاربری</Link>
                                    </li>
                                    <li className="itemTooltipLink">
                                    <Link to='/LoginSingin' className='LinkTooltipPage'>ورود /ثبت نام</Link>
                                    </li>
                                </ul>
                             </span>
                        </div>
                    </div>
                    <div className="centerNavBasket">
                        <Link to='/Basket' className="centerNavBasketLink">
                            <SlBasket className='centerNavBasketIcon'/>
                            <span className="centerNavBasketCount">2</span>
                        </Link>
                    </div>
                    <div className="centerNavUserBasket">
                        <span className="centerNavUserBasketText">سبد خرید</span>
                        <span className="centerNavUserBasketPrice">850,000 تومان</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
