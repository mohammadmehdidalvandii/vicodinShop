import React from 'react'
import './AboutService.css'
import MainTitle from '../../Mains/MainTitle/MainTitle'
import {FaHandHoldingMedical, FaMicroscope, FaStethoscope} from 'react-icons/fa'
export default function AboutService() {
  return (
    <section className="aboutService">
        <div className="container">
            <div className="aboutServiceWrapper">
                <MainTitle title="بهترین سرویس ها."/>
                <div className="aboutServiceItems">
                    <div className="aboutServiceItem">
                        <div className="aboutServiceIconTitle">
                            <span className="aboutServiceBox">
                                <FaHandHoldingMedical className='aboutServiceIcon'/>
                            </span>
                            <h3 className="aboutServiceTitle">مطب آنلاین</h3>
                        </div>
                        <p className="aboutServiceDescription">
                            لورم ایپسوم متن ساختگی با معنی و مفهوم نامعتبر در راستای بهبود ظاهری متون برای طراحان قدم بر میدارد.
                        </p>
                    </div>
                    <div className="aboutServiceItem">
                        <div className="aboutServiceIconTitle">
                            <span className="aboutServiceBox">
                                <FaMicroscope className='aboutServiceIcon'/>
                            </span>
                            <h3 className="aboutServiceTitle">تجهیزات آزمایشگاهی</h3>
                        </div>
                        <p className="aboutServiceDescription">
                            لورم ایپسوم متن ساختگی با معنی و مفهوم نامعتبر در راستای بهبود ظاهری متون برای طراحان قدم بر میدارد.
                        </p>
                    </div>
                    <div className="aboutServiceItem">
                        <div className="aboutServiceIconTitle">
                            <span className="aboutServiceBox">
                                <FaStethoscope className='aboutServiceIcon'/>
                            </span>
                            <h3 className="aboutServiceTitle"> تجهیزات پزشکی-درمانی</h3>
                        </div>
                        <p className="aboutServiceDescription">
                            لورم ایپسوم متن ساختگی با معنی و مفهوم نامعتبر در راستای بهبود ظاهری متون برای طراحان قدم بر میدارد.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
