import React from 'react'
import './AboutPercent.css'

export default function AboutPercent() {

    
    return (
        <section className="aboutPercent">
            <div className="container">
                <div className="aboutPercentWrapper">
                    <div className="aboutPercentItems">
                        <div className="aboutPercentItem">
                            <div className="aboutPercentProgress">
                                <span className="aboutPercentProgressText">80 %</span>
                            </div>
                            <div className="aboutPercentContent">
                                <h4 className="aboutPercentContentTitle">پروژه انجام شده</h4>
                                <span className="aboutPercentContentText">شبیه ساز ساخت و ساز</span>
                            </div>
                        </div>
                        <div className="aboutPercentItem">
                            <div className="aboutPercentProgress">
                                <span className="aboutPercentProgressText">62 %</span>
                            </div>
                            <div className="aboutPercentContent">
                                <h4 className="aboutPercentContentTitle">کشور مختلف</h4>
                                <span className="aboutPercentContentText"> کشور های از همه دنیا  </span>
                            </div>
                        </div>
                        <div className="aboutPercentItem">
                            <div className="aboutPercentProgress">
                                <span className="aboutPercentProgressText">50 %</span>
                            </div>
                            <div className="aboutPercentContent">
                                <h4 className="aboutPercentContentTitle"> شرکت تکمیل شده
                                </h4>
                                <span className="aboutPercentContentText">    امور مشتریان</span>
                            </div>
                        </div>
                        <div className="aboutPercentItem">
                            <div className="aboutPercentProgress">
                                <span className="aboutPercentProgressText">90 %</span>
                            </div>
                            <div className="aboutPercentContent">
                                <h4 className="aboutPercentContentTitle">مشتریان خوشحال</h4>
                                <span className="aboutPercentContentText"> سیستم نظر دهی</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
