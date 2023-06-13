import React from 'react'
import './MainProductMask.css'
import { RiHomeHeartLine } from 'react-icons/ri'
import { BsHeartPulse, BsCalendar2Heart } from 'react-icons/bs'
import { CiMountain1 } from 'react-icons/ci'
export default function MainProductMask() {
    return (
        <section className="mainProductMask">
            <div className="container">
                <div className="mainProductMaskWrapper">
                    <div className="mainProductMaskContent">
                        <span className="mainProductMaskText">ماسک پوششی صورت N۹۵</span>
                        <h3 className="mainProductMaskTitle">ماسک های ایمنی درجه A برای فروش. تعداد بالا!</h3>
                        <p className="mainProductMaskParaph">بیش از ۳۹۰۰۰ نفر در بیش از ۷۰ کشور در سراسر جهان برای ما کار می کنند این وسعت پوشش جهانی، همراه با خدمات تخصصی</p>
                    </div>
                    <div className="mainProductMaskItems">
                        <ul className="mainProductMaskLeft">
                            <li className="mainProductMaskItem">
                                <RiHomeHeartLine className='mainProductMaskIcon' />
                                <span className="mainProductMaskTxt">کربن فعال</span>
                            </li>
                            <li className="mainProductMaskItem">
                                <BsHeartPulse className='mainProductMaskIcon' />
                                <span className="mainProductMaskTxt">فیلتر ۶ لایه</span>
                            </li>
                        </ul>
                        <ul className="mainProductMaskLeft">
                            <li className="mainProductMaskItem">
                                <CiMountain1 className='mainProductMaskIcon' />
                                <span className="mainProductMaskTxt">دریچه تنفس</span>
                            </li>
                            <li className="mainProductMaskItem">
                                <BsCalendar2Heart className='mainProductMaskIcon' />
                                <span className="mainProductMaskTxt">شستشو و قابل استفاده مجدد</span>
                            </li>
                        </ul>
                    </div>
                    <a href="" className="mainProductMaskButton">مشاهده محصولات</a>
                </div>
            </div>
        </section>
    )
}
