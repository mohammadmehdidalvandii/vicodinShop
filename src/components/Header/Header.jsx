import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <section className="header">
        <div className="container">
            <div className="headerWrapper">
                <div className="headerLeft">
                    <div className="headerLeftItem">
                    <a href="#" className="headerLink">
                        <img src="./images/header/header-1.jpg" alt="" className="headeerLinkImgLeft" />
                    </a>
                    </div>
                    <div className="headerLeftContent">
                        <span className="headerLeftContentText">تا 50% تخفیف ققط امروز</span>
                        <h1 className="headerLeftContentTitle">استاندارد نقره ای قبل از تمرین</h1>
                        <a href="#" className="headerLeftContentButton">بزن بریم</a>
                    </div>
                </div>
                <div className="headerright">
                    <div className="headerRightItem">
                        <a href="#" className="headerLink">
                            <img src="./images/header/header-2.jpg" alt="" className="headerLinkImgRight" />
                            </a>
                    </div>
                    <div className="headerRightItem">
                        <a href="#" className="headerLink">
                            <img src="./images/header/header-3.jpg" alt="" className="headerLinkImgRight" />
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
