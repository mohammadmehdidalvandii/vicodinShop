import React from 'react'
import './LoginSinginContent.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginSiningContent() {
    const [statusLogin, setStatusLogin] = useState('Login')
    

    const opnePageSingin = () => {
        setStatusLogin('Singin')
    }
    const opnepageLogin = () => {
        setStatusLogin('Login')
    }

    function singinButton(event) {
        event.preventDefault()
        const inputSinginName = document.querySelector('.singinInputName')
        const inputSinginFamily = document.querySelector('.singinInputFamily')
        const inputSinginEmail = document.querySelector('.singinInputEmail')
        const inputSinginPassWord = document.querySelector('.singinInputPassWord')
        const inputSinginPasswordRepet = document.querySelector('.singinInputPassWordRepet')
        const SinginAlert = document.querySelector(".SingiAlert")
        const singinNameFamily = /^[a-zA-Z]+$/g
        const singinpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
        const singinEmail = /^\.[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(singinNameFamily.test(inputSinginName ,inputSinginFamily) && singinEmail.test(inputSinginEmail) && singinpassword.test(inputSinginPassWord, inputSinginPasswordRepet)){
            SinginAlert.innerHTML = 'تمام ورودی های شما درست است '
            SinginAlert.style.color = 'green'
        }else{
            SinginAlert.innerHTML = 'فیلد های مورد نظر پرکنید'
            SinginAlert.style.color = 'red'
        }
    }

    function clickLoginButton(event) {
        event.preventDefault();
        const inputEmail = document.querySelector('#LoginInputEmail').value
        const inputPassword = document.querySelector('#LoginInputPassword').value
        const spanAlert = document.querySelector('.LoginSingiAlert')
        const emailRegex = /^\.[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;

        if (emailRegex.test(inputEmail)) {
            spanAlert.innerHTML = 'ایمیل شما درست است'
            spanAlert.style.color = 'green'
            setTimeout(() => {
                spanAlert.innerHTML = ''

            }, 3000)
        } else {
            spanAlert.innerHTML = 'ایمیل شما اشتباه است'
            spanAlert.style.color = 'red'
            setTimeout(() => {
                spanAlert.innerHTML = ''
            }, 3000)
        }

        if (passwordRegex.test(inputPassword)) {
            spanAlert.innerHTML += '<br>مقدار رمز عبور صحیح'
            spanAlert.style.color = 'green'
            setTimeout(() => {
                spanAlert.innerHTML = ''
            }, 3000)
        } else {
            spanAlert.innerHTML += '<br> مقدار رمز عبور باید شامل حروف و اعداد باشد و بیشتر از 8 حرف'
            spanAlert.style.color = 'red'
            setTimeout(() => {
                spanAlert.innerHTML = ''
            }, 3000)

        }

    }
    return (
        <section className="LoginSinginContent">
            <div className="container">
                <div className="LoginSinginWrapper">
                    {statusLogin === 'Login' && (
                        <div className="LoginContent">
                            <div className="LoginSiningTitles">
                                <h2 className="LoginSinginTitle">ورود به حساب کاربری</h2>
                                <span className="LoginSinignTitleText">لورم ایپسوم متن ساختگ با معنی و مفهوم نامعتبر در راستای تامین ظاهر متون است.</span>
                            </div>
                            <div className="LoginContentWrapper">
                                <form action="#" className="LoginContentForm">
                                    <div className="LoginContentFormBox">
                                        <input type="text" className='LoginContentFormInput' id='LoginInputEmail' placeholder='ایمیل خود را وارد کنید' />
                                    </div>
                                    <div className="LoginContentFormBox">
                                        <input type="password" className='LoginContentFormInput' id='LoginInputPassword' placeholder='رمز عبور خود را واردکنید' />
                                    </div>
                                    <span className="LoginSingiAlert"></span>
                                    <button className="LoginContentFormButton" onClick={clickLoginButton}>ورود</button>
                                    <a href="#" className="LoginContentFormForget">رمز را فراموشی کردی؟</a>
                                </form>
                                <div className="LoginContentNotAccount">
                                    <div className="LoginContentNotAccountBox">
                                        <h4 className="LoginContentTitle">حساب کاربری ندارید؟</h4>
                                        <p className="loginContentText">با ایجاد حساب کاربری در ویکودین از مزیت های فراوانی برخوردار باشید.</p>
                                        <button className="LoginContentForSingin" onClick={opnePageSingin}>ثبت نام</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {statusLogin !== 'Login' && (
                        <div className="SinginContent">
                            <div className="LoginSiningTitles">
                                <h2 className="LoginSinginTitle">ثبت نام اکانت جدید</h2>
                                <span className="LoginSinignTitleText">لورم ایپسوم متن ساختگ با معنی و مفهوم نامعتبر در راستای تامین ظاهر متون است.</span>
                            </div>
                            <div className="singinContentWrapper">
                                <form action="#" className='singinContentForm'>
                                    <div className="singinContentFormBox">
                                        <input type="text" className='singinContentFormInput' id='singinInputName' placeholder='نام' />
                                    </div>
                                    <div className="singinContentFormBox">
                                        <input type="text" className='singinContentFormInput' id='singinInputFamily' placeholder='نام خانوادگی' />
                                    </div>
                                    <div className="singinContentFormBox">
                                        <input type="text" className='singinContentFormInput' id='singinInputEmail' placeholder='ایمیل' />
                                    </div>
                                    <div className="singinContentFormBox">
                                        <input type="password" className='singinContentFormInput' id='singinInputPassWord' placeholder='رمزعبور' />
                                    </div>
                                    <div className="singinContentFormBox">
                                        <input type="password" className='singinContentFormInput' id='singinInputPassWordRepet' placeholder='تکرار رمز عبور' />
                                    </div>
                                    <div className="singinContentCheckBox">
                                        <span className="singinContentTextCheckBox">
                                            <input type="checkbox" name="#" className='singinContentCheck' />
                                            تمامی قوانین مربوط به خریدار و فروشنده را میپذیرم
                                        </span>
                                        <span className="singinContentTextCheckBox">
                                            <input type="checkbox" name="#" className='singinContentCheck' />
                                            تمامی قوانین و بند های قرارداد را میپذیرم.
                                        </span>
                                    </div>
                                    <span className="SingiAlert"></span>
                                    <button className="singinContentButton" onClick={singinButton}>ثبت نام</button>
                                </form>
                                <div className="singinContentDiscirption">
                                    <span className="singinContentDisTitle">در هنگام ثبت نام شما عناوین زیر را تایید کردید</span>
                                    <a href="" className="singinContnentDisLaw">
                                        قوانین و بند های قرارداد     |     قوانین مربوط به خریدار و فروشنده
                                    </a>
                                    <Link className='LoginSinginBtn' onClick={opnepageLogin}>قبلا ثبت نام کرده اید؟ورود</Link>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}
