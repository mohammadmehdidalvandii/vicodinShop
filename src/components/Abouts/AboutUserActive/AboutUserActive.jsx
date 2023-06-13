import React from 'react'
import './AboutUserActive.css'
import {BsPersonFillAdd} from 'react-icons/bs'
import {MdTableBar} from 'react-icons/md'
import {TbFileCertificate} from 'react-icons/tb'
import {FiMap} from 'react-icons/fi'
export default function AboutUserActive() {
  return (
    <section className="aboutUserActive">
        <div className="container">
            <div className="aboutUserActiveWrapper">
                <div className="aboutUserActiveItems">
                <div   className="aboutUserActiveItem">
                    <div className="aboutUserActiveContent">
                        <BsPersonFillAdd className='aboutUserActiveIcon'/>
                        <h4 className="aboutUserActiveNumber">+0</h4>
                        <span className="aboutUserActiveText">کاربر فعال</span>
                    </div>
                </div>
                <div   className="aboutUserActiveItem">
                    <div className="aboutUserActiveContent">
                        <MdTableBar className='aboutUserActiveIcon'/>
                        <h4 className="aboutUserActiveNumber">0K+</h4>
                        <span className="aboutUserActiveText">نشست فعال</span>
                    </div>
                </div>
                <div   className="aboutUserActiveItem">
                    <div className="aboutUserActiveContent">
                        <TbFileCertificate className='aboutUserActiveIcon'/>
                        <h4 className="aboutUserActiveNumber">0+</h4>
                        <span className="aboutUserActiveText"> هدیه کاربران</span>
                    </div>
                </div>
                <div   className="aboutUserActiveItem">
                    <div className="aboutUserActiveContent">
                        <FiMap className='aboutUserActiveIcon'/>
                        <h4 className="aboutUserActiveNumber">+0</h4>
                        <span className="aboutUserActiveText"> کشور مختلف</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
