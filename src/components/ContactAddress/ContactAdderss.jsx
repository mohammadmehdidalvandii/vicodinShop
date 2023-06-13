import React from 'react'
import './ContactAddress.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {FiPhoneCall} from 'react-icons/fi'
import {AiFillCheckCircle} from 'react-icons/ai'
import {FaMapMarkedAlt} from 'react-icons/fa'
export default function ContactAdderss() {
  return (
        <section className="contactAddress">
            <div className="container">
                <div className="contactAddressWrapper">
                    <div className="contactAddressItems">
                        <div className="contactAddressItem">
                            <div className="contactAddressIcons">
                                <span className="contactAddressIconTop">
                                    <HiOutlineMailOpen className='topIcon'/>
                                </span>
                                <span className="contactAddressIconDown">
                                    <AiFillCheckCircle className='downIcon'/>
                                </span>
                            </div>
                            <div className="contactAddressContent">
                                <h5 className="contactAddressTitle">آدرس ایمیل</h5>
                                <span className="contactAddressText">info@webmail.com</span>
                                <span className="contactAddressText">jobs@webexample.com</span>
                            </div>
                        </div>
                        <div className="contactAddressItem">
                            <div className="contactAddressIcons">
                                <span className="contactAddressIconTop">
                                    <FiPhoneCall className='topIcon'/>
                                </span>
                                <span className="contactAddressIconDown">
                                    <AiFillCheckCircle className='downIcon'/>
                                </span>
                            </div>
                            <div className="contactAddressContent">
                                <h5 className="contactAddressTitle"> شماره تلفن</h5>
                                <span className="contactAddressText">+۰۱۲۳-۴۵۶۷۸۹</span>
                                <span className="contactAddressText">+۹۸۷-۶۵۴۳۲۱۰</span>
                            </div>
                        </div>
                        <div className="contactAddressItem">
                            <div className="contactAddressIcons">
                                <span className="contactAddressIconTop">
                                    <FaMapMarkedAlt className='topIcon'/>
                                </span>
                                <span className="contactAddressIconDown">
                                    <AiFillCheckCircle className='downIcon'/>
                                </span>
                            </div>
                            <div className="contactAddressContent">
                                <h5 className="contactAddressTitle"> آدرس دفتر مرکزی</h5>
                                <span className="contactAddressTxt">خراسان رضوی،مشهد،طباطبایی ۶ جنب فروشگاه افق کوروش</span>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
