import React from 'react'
import './AboutExpert.css'
import MainTitle from '../../Mains/MainTitle/MainTitle'
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
export default function AboutExpert() {
  return (
    <section className="aboutExpert">
        <div className="container">
            <MainTitle title='دکتران متخصص'/>
            <div className="aboutExpertWrapper">
                <div className="aboutExpertItems">
                    <div className="aboutExpertItem">
                        <img src="./images/about/d-1.jpg" alt="" className="aboutExpertImg" />
                        <div className="aboutExpertNameJob">
                            <h4 className="aboutExpertName">دکتر رضا رودکی</h4>
                            <span className="aboutExpertJob">متخصص اطفال</span>
                        </div>
                        <div className="aboutExpertMedia">
                            <a href="#" className="aboutExpertLink">
                                <FaFacebookF  className='aboutExpertLinkIcon'/>
                            </a>
                            <a href="#" className="aboutExpertLink">
                                <FaTwitter  className='aboutExpertLinkIcon'/>
                            </a>
                            <a href="#" className="aboutExpertLink">
                                <FaLinkedinIn  className='aboutExpertLinkIcon'/>
                            </a>
                        </div>
                    </div>
                    <div className="aboutExpertItem">
                        <img src="./images/about/d-2.jpg" alt="" className="aboutExpertImg" />
                        <div className="aboutExpertNameJob">
                            <h4 className="aboutExpertName">دکتر محسن حاجیلو</h4>
                            <span className="aboutExpertJob"> متخصص قلب</span>
                        </div>
                        <div className="aboutExpertMedia">
                            <a href="#" className="aboutExpertLink">
                                <FaFacebookF  className='aboutExpertLinkIcon'/>
                            </a>
                            <a href="#" className="aboutExpertLink">
                                <FaTwitter  className='aboutExpertLinkIcon'/>
                            </a>
                            <a href="#" className="aboutExpertLink">
                                <FaLinkedinIn  className='aboutExpertLinkIcon'/>
                            </a>
                        </div>
                    </div>
                    <div className="aboutExpertItem">
                        <img src="./images/about/d-3.jpg" alt="" className="aboutExpertImg" />
                        <div className="aboutExpertNameJob">
                            <h4 className="aboutExpertName">دکتر حمید فریدون</h4>
                            <span className="aboutExpertJob"> متخصص دندانپزشکی</span>
                        </div>
                        <div className="aboutExpertMedia">
                            <a href="#" className="aboutExpertLink">
                                <FaFacebookF  className='aboutExpertLinkIcon'/>
                            </a>
                            <a href="#" className="aboutExpertLink">
                                <FaTwitter  className='aboutExpertLinkIcon'/>
                            </a>
                            <a href="#" className="aboutExpertLink">
                                <FaLinkedinIn  className='aboutExpertLinkIcon'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
