import React from 'react'
import './ContactMessage.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdEmail,MdSubject} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa'
export default function ContactMessage() {
  return (
    <section className="contactMessage">
        <div className="container">
            <div className="contactMessageWrapper"> 
                <form action="#" className="contactMessageForm">
                    <h4 className="contactMessgeTitle">ارسال پیام</h4>
                    <div className="contactMessageInputBox">
                        <div className="contactMessageInputNameIcon">
                            <input type="text" className='contactMessgaeInputName' placeholder='نام خود را واردکنید' />
                            <span className="contactMessageInputIcon">
                                <BsFillPersonFill className='contactMessageIcon'/>
                            </span>
                        </div>
                        <div className="contactMessageInputEmailIcon">
                            <input type="text" className='contactMessgaeInputEmail'  placeholder='آدرس ایمیل را وارد کنید' />
                            <span className="contactMessageInputIcon">
                                <MdEmail className='contactMessageIcon'/>
                            </span>
                        </div>
                    </div>
                    <div className="contactMessageInputBox">
                    <div className="contactMessageInputSubjectIcon">
                            <input type="text" className='contactMessgaeInputSubject'  placeholder='موضوع پیام ' />
                            <span className="contactMessageInputIcon">
                                <FaPhone className='contactMessageIcon'/>
                            </span>
                        </div>
                        <div className="contactMessageInputPhoneIcon">
                            <input type="text" className='contactMessgaeInputPhone' placeholder='شماره تلفن ' />
                            <span className="contactMessageInputIcon">
                                <BsFillPersonFill className='contactMessageIcon'/>
                            </span>
                        </div>
                    </div>
                    <div className="contactMessageClient">
                        <textarea name=""  cols="30" rows="10" className='contactMessageText'></textarea>
                    </div>
                    <div className="contactMessageInfoButton">
                        <span className="contectMessageCheckBob">
                            <input type="checkbox" name="#" id="#" />
                            ذخیره نام،ایمیل،شماره تلفن من برای راحتی کار در آینده
                        </span>
                        <button className="contactMessageButton">ارسال پیام</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
