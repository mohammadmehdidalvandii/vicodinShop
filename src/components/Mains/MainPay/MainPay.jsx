import React from 'react'
import './MainPay.css'
export default function MainPay() {
  return (
    <section className="mainPay">
        <div className="container">
            <div className="mainPayWrapper">
                <div className="mainPayItems">
                    <div className="mainPayItem">
                        <div className="mainPayImage">
                            <img src="./images/svg/8-trolley.svg" alt="" className="mainPayImg" />
                        </div>
                        <div className="mainPayContent">
                            <span className="mainPayTitle">ارسال رایگان</span>
                            <span className="mainPaytext">در همه سفارشات بیش از صد هزارتومان</span>
                        </div>
                    </div>
                    <div className="mainPayItem">
                        <div className="mainPayImage">
                            <img src="./images/svg/9-money.svg" alt="" className="mainPayImg" />
                        </div>
                        <div className="mainPayContent">
                            <span className="mainPayTitle">۱۵ روز برمی‌گردد</span>
                            <span className="mainPaytext">ضمانت بازگشت وجه</span>
                        </div>
                    </div>
                    <div className="mainPayItem">
                        <div className="mainPayImage">
                            <img src="./images/svg/10-credit-card.svg" alt="" className="mainPayImg" />
                        </div>
                        <div className="mainPayContent">
                            <span className="mainPayTitle">تسویه حساب ایمن</span>
                            <span className="mainPaytext">محافظت شده توسط بانک ملی</span>
                        </div>
                    </div>
                    <div className="mainPayItem">
                        <div className="mainPayImage">
                            <img src="./images/svg/11-gift-card.svg" alt="" className="mainPayImg" />
                        </div>
                        <div className="mainPayContent">
                            <span className="mainPayTitle">پیشنهاد و هدیه اینجا</span>
                            <span className="mainPaytext">در تمام سفارشات بیش از صد هزارتومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
