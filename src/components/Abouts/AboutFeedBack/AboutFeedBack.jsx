import React from 'react'
import './AboutFeedBack.css'
import MainTitle from '../../Mains/MainTitle/MainTitle'
// Use of the library React-Slick 
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function AboutFeedBack() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="aboutFeedBack">
            <div className="container">
                <div className="aboutFeedBackWrappear">
                    <MainTitle title='بازخورد ها.' />
                    <div className="aboutFeedBackItems">

                        <Slider {...settings}>
                            <div  >
                                <div className="aboutFeedBackItem">
                                    <img src="./images/about/u-1.jpg" alt="" className="aboutFeedBackImg" />

                                    <div className="aboutFeedBackContent">
                                        <p className="aboutFeedBackText">

                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                                        </p>
                                        <h4 className="aboutFeedBackUserName">علیررضا</h4>
                                        <h6 className="aboutFeedBackSide">کاربر</h6>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="aboutFeedBackItem">
                                    <img src="./images/about/u-2.jpg" alt="" className="aboutFeedBackImg" />

                                    <div className="aboutFeedBackContent">
                                        <p className="aboutFeedBackText">

                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                                        </p>
                                        <h4 className="aboutFeedBackUserName">محمدی </h4>
                                        <h6 className="aboutFeedBackSide">مهندس پزشکی</h6>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="aboutFeedBackItem">
                                    <img src="./images/about/u-3.jpg" alt="" className="aboutFeedBackImg" />

                                    <div className="aboutFeedBackContent">
                                        <p className="aboutFeedBackText">

                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                                        </p>
                                        <h4 className="aboutFeedBackUserName">احمدی</h4>
                                        <h6 className="aboutFeedBackSide">پزشک</h6>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="aboutFeedBackItem">
                                    <img src="./images/about/u-4.jpg" alt="" className="aboutFeedBackImg" />

                                    <div className="aboutFeedBackContent">
                                        <p className="aboutFeedBackText">

                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                                        </p>
                                        <h4 className="aboutFeedBackUserName">بهروز</h4>
                                        <h6 className="aboutFeedBackSide">کاربر</h6>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="aboutFeedBackItem">
                                    <img src="./images/about/u-5.jpg" alt="" className="aboutFeedBackImg" />

                                    <div className="aboutFeedBackContent">
                                        <p className="aboutFeedBackText">

                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                                        </p>
                                        <h4 className="aboutFeedBackUserName">مجید</h4>
                                        <h6 className="aboutFeedBackSide">کاربر</h6>
                                    </div>
                                </div>
                            </div>
                        </Slider>


                    </div>
                </div>
            </div>
        </section>
    )
}
