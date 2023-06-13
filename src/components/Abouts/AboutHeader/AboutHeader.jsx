import React from 'react'
import './AboutHeader.css'
import {BsFillCheckSquareFill} from 'react-icons/bs'
export default function AboutHeader() {
  return (
    <section className="aboutHeader">
        <div className="container">
            <div className="aboutHeaderWrapper">
                <div className="aboutHeaderRight">
                    <img src="./images/about/about-1.png" alt="" className="aboutHeaderImg" />
                </div>
                <div className="aboutHeaderleft">
                    <div className="aboutHeaderLeftDescription">
                        <h2 className="aboutHeaderTilte">کالاهای پزشکی شما در شرکت ما پیدا میشود!</h2>
                        <p className="aboutHeaderParaph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        <div className="aboutHeaderCheckBox">
                            <div className="aboutHeaderCheckBoxTextIcon">
                                <BsFillCheckSquareFill className='aboutHeaderCheckBoxIcon'/>
                                <span className="aboutHeaderCheckBoxText">قیمت به صرفه و منطقی</span>
                            </div>
                            <div className="aboutHeaderCheckBoxTextIcon">
                                <BsFillCheckSquareFill className='aboutHeaderCheckBoxIcon'/>
                                <span className="aboutHeaderCheckBoxText">ارسال به سراسر دنیا از جمله ۸ کشور</span>
                            </div>
                            <div className="aboutHeaderCheckBoxTextIcon">
                                <BsFillCheckSquareFill className='aboutHeaderCheckBoxIcon'/>
                                <span className="aboutHeaderCheckBoxText"> گارانتی ضمانت ۲۴ ماهه برای ۷۰% محصولات </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
