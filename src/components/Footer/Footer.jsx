import React from 'react'
import './Footer.css'
import {IoLocationOutline} from 'react-icons/io5'
import {FiPhoneCall} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillFacebook, AiFillTwitterSquare , AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import {CiLocationArrow1} from 'react-icons/ci'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
   <>
    <section className="footerTop">
        <div className="footerTopWrapper">
            <div className="footerTopItems">
                <ul className="footerTopItem">
                    <li className="footerTopData">
                        <img src="/images/logo-2.png" alt="" className="footerTopImg" />
                    </li>
                    <li className="footerTopData">
                        <p className="footerTopParaph">
                        لورم ایپسوم متن ساختگی با معنی و مفهوم نامعتبر در راستا بهبود ظاهری متون در پروژه ها است.
                        </p>
                    </li>
                    <li className="footerTopData">
                        <IoLocationOutline className="footerTopIcon"/>
                        خراسان رضوی،کاشمر
                    </li>
                    <li className="footerTopData">
                    <FiPhoneCall className="footerTopIcon"/>
                    +۰۱۲۳-۴۵۶۷۸۹
                    </li>
                    <li className="footerTopData">
                    <MdOutlineEmail className="footerTopIcon"/>
                    example@example.com
                    </li>
                    <li className="footerTopData">
                        <div className="footerTopMedia">
                            <a href="#" className="footerTopLink">
                                <AiFillFacebook className="footerTopLinkIcon"/>
                                </a>    
                            <a href="#" className="footerTopLink">
                                <AiFillTwitterSquare className="footerTopLinkIcon"/>
                                </a>    
                            <a href="#" className="footerTopLink">
                                <AiFillLinkedin className="footerTopLinkIcon"/>
                                </a>    
                            <a href="#" className="footerTopLink">
                                <AiFillYoutube className="footerTopLinkIcon"/>
                                </a>    
                        </div>
                    </li>
                </ul>
                <ul className="footerTopItem">
                    <li className="footerTopData">
                        <h3 className="footerTopTilte">شرکت </h3>
                    </li>
                    <li className="footerTopData">
                        <span className="footerTopText"> وبلاگ</span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText"> همه مصولات    </span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText"> نمایندگی ها</span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText">پرسش های متداول </span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText">ارتباط با ما</span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText"> درباره ما</span>
                    </li>
                </ul>
                <ul className="footerTopItem">
                    <li className="footerTopData">
                        <h3 className="footerTopTilte">سرویس ها </h3>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText"> رهگیری سفارش</span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText">لیست علاقه مندی ها </span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText"> ورود</span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText">حساب کاربری </span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText"> قوانین و مقررات</span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText"> قوانین و مقررات</span>
                    </li>
                </ul>
                <ul className="footerTopItem">
                    <li className="footerTopData">
                        <h3 className="footerTopTilte">لینک های مفید </h3>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText"> سبد خرید</span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText">نمونه کار ها </span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText"> سرویس ها</span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText"> سوابق</span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText">تیم </span>
                    </li>
                    <li className="footerTopData">
                         <span className="footerTopText">فروشگاه </span>
                    </li>
                </ul>
                <ul className="footerTopItem">
                    <li className="footerTopData">
                        <h3 className="footerTopTilte">خبرنامه </h3>
                    </li>
                    <li className="footerTopData">
                        <p className="footerTopNews">
                        با عضویت در خبرنامه ما از تمامی آپدیت ها و اخبار ها با خبر باشید.
                        </p>
                    </li>
                    <li className="footerTopData">
                        <form className='footerTopForm'>
                            <input type="text" className='footerTopInput' placeholder='ایمیل خود را وارکنید' />
                            <span className="footerTopInputIcon">
                                <CiLocationArrow1/>
                            </span>
                        </form>
                    </li>
                    <li className="footerTopData">
                        <h4 className="footerTopTextLink">همراهان ما</h4>
                        <img src="./images/payment-4.png" alt="" className="footerTopTextLinkImg" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section className="footerDown">
        <div className="footerDownWrapper">
            <div className="footerDownItems">
                <div className="footerDownLeft">
                    <h5 className="footerDownCopyRight">تمامی حقوق  ویکودین محفوظ است ۲۰۲۳©</h5>
                </div>
                <div className="footerDownRight">
                    <Link to='/' className='footerDownLink'>پرسش هاس متداول</Link>
                    <Link to='/Account' className='footerDownLink'> حساب کاربری</Link>
                    <Link to='/' className='footerDownLink'> قوانین و مقررات</Link>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
