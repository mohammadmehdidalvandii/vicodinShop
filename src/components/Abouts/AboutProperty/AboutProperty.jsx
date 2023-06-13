import React from 'react'
import './AboutProperty.css'
import MainTitle from '../../Mains/MainTitle/MainTitle'
export default function AboutProperty() {
  return (
        <section className="aboutProperty">
            <div className="container">
                <MainTitle title='ویژگی های اصلی'/>
                <div className="aboutPropertyWrapper">
                        <div className="aboutPropertyItems">
                            <div className="aboutPropertyItem">
                        <span className='aboutPropertyBorder'></span>   
                                <div className="aboutPropertyItemContent">
                                    <img src="./images/about/about-2.png" alt="" className="aboutPropertyImg" />
                                    <h4 className="aboutPropertyTitle">تحویل رایگان</h4>
                                    <p className="aboutPropertyDescription">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                                <span className='aboutPropertyBorder'></span>
                            </div>
                            <div className="aboutPropertyItem">
                            <span className='aboutPropertyBorder '></span>
                                <div className="aboutPropertyItemContent">
                                    <img src="./images/about/about-3.png" alt="" className="aboutPropertyImg" />
                                    <h4 className="aboutPropertyTitle"> ۱۰۰% برگشت نقدی</h4>
                                    <p className="aboutPropertyDescription">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                                <span className='aboutPropertyBorder '></span>
                            </div>
                            <div className="aboutPropertyItem">
                            <span className='aboutPropertyBorder '></span>
                                <div className="aboutPropertyItemContent">
                                    <img src="./images/about/about-4.png" alt="" className="aboutPropertyImg" />
                                    <h4 className="aboutPropertyTitle"> محصول باکیفیت</h4>
                                    <p className="aboutPropertyDescription">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                                <span className='aboutPropertyBorder '></span>
                            </div>
                            <div className="aboutPropertyItem">
                            <span className='aboutPropertyBorder '></span>
                                <div className="aboutPropertyItemContent">
                                    <img src="./images/about/about-5.png" alt="" className="aboutPropertyImg" />
                                    <h4 className="aboutPropertyTitle"> پشتیبانی ۲۴/۷</h4>
                                    <p className="aboutPropertyDescription">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                                <span className='aboutPropertyBorder '></span>
                            </div>
                        </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </section>

    )
}
