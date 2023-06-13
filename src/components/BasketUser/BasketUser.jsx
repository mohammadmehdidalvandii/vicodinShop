import React, { useState, useEffect } from 'react'
import './BasketUser.css'
import { TiTimes } from 'react-icons/ti'
import { basketProduct } from '../../data'

export default function BasketUser() {
    const [basketUsers, setBasketUsers] = useState(basketProduct)
    const [productCounts, setProductCounts] = useState(Array(basketProduct.length).fill(1))
    const [subTotal, setSubTotal] = useState(0)
    const [allprice, setAllPrice] = useState(0)

    function checkInputValue(event) {
        event.preventDefault()
        const fullUsername = document.querySelector('#fullname')
        const phoneUserName = document.querySelector('#phoneusername')
        const addressUsername = document.querySelector('#addressusername')
        const formAlert = document.querySelector('.basketProductFormAlert')


        const fullUsernameValue =  fullUsername.value
         const phoneUserNameValue =   phoneUserName.value
        const addressUsernameValue =  addressUsername.value
        if (fullUsernameValue === '' || phoneUserNameValue === '' ||addressUsernameValue === '') {
            formAlert.innerHTML = 'فیلد های مورد نظر پرکنید '
            formAlert.style.color = 'red'
            setTimeout(()=>{
                formAlert.innerHTML = ''
            },3000)
        }
    }

    useEffect(() => {
        setSubTotal(calculateSubTotal(basketUsers, productCounts))
    }, [basketUsers, productCounts])

    useEffect(() => {
        setAllPrice(allpricebasket(subTotal))
    }, [subTotal])

    function allpricebasket(subTotal) {
        let allprice = subTotal + 50000 + 80000
        return allprice
    }

    function calculateSubTotal(basketUsers, productCounts) {
        let subTotal = 0
        for (let i = 0; i < basketUsers.length; i++) {
            subTotal += basketUsers[i].price * productCounts[i]
        }
        return subTotal
    }

    // Increase or decrease the product
    const clickplus = (index) => {
        const newProductCounts = [...productCounts]
        newProductCounts[index]++
        setProductCounts(newProductCounts)

    }

    const clickmins = (index) => {
        const newProductCounts = [...productCounts]
        if (newProductCounts[index] > 1) {
            newProductCounts[index]--
            setProductCounts(newProductCounts)
        } else {
            alert('مقدار یک محصول نمی تواند (0)باشد❤  \n اگر محصول نیازش ندارید (X) فشار دهید ')
        }
    }
    // Remove the product from the shopping cart
    const tiemsDeleteProduct = (index) => {
        const updateBasketProductUser = basketUsers.filter((productUser, i) => i !== index)
        setBasketUsers(updateBasketProductUser)
        const newProductCounts = [...productCounts]
        newProductCounts.splice(index, 1)
        setProductCounts(newProductCounts)
    }
    // Condition for input discount
    function clickActiveDiscount(event) {
        event.preventDefault();
        const inputElem = document.querySelector('.basketProductDisCountInput')
        const alertElem = document.querySelector('.basketProductAlert')
        const regexInput = /^[0-9]+$/;
        if (regexInput.test(inputElem.value)) {
            alertElem.innerHTML = 'کد نخفیف اعمال شد '
            alertElem.style.color = 'green'
            inputElem.value = ""
        } else {
            alertElem.innerHTML = '(کد تخفیف شامل اعداد است) کد نخفیف  معتبر نیست '
            alertElem.style.color = 'red'
            setTimeout(() => {
                alertElem.innerHTML = ''
                inputElem.value = ""
            }, 3000)
        }
    }

    return (
        <section className="basketUser">
            <div className="container">
                <div className="basketUserWrapper">
                    <div className="basketUserProduct">
                        <ul className="basketUserProductItems">
                            {basketUsers.map((basketUser, index) => (
                                <li className="basketUserProductItem" key={index}>
                                    <TiTimes className="basketProductButtonTimes" onClick={() => tiemsDeleteProduct(index)} />
                                    <img src={basketUser.img} alt="" className="basketUserImg" />
                                    <span className="basketProductName">{basketUser.name}</span>
                                    <span className="basketProductPrice">{basketUser.price} تومان</span>
                                    <div className="basketProductButtonCount">
                                        <button className="basketProductBtnPlus" onClick={() => clickplus(index)}>+</button>
                                        <span className="basketProductCount">{productCounts[index]}</span>
                                        <button className="basketProductBtnMins" onClick={() => clickmins(index)}>-</button>
                                    </div>
                                    <span className="basketUserProductCountPrice">
                                        {basketUser.price && productCounts[index]
                                            ? basketUser.price * productCounts[index] + " تومان"
                                            : 0 + " تومان"
                                        }

                                    </span>
                                </li>
                            ))}
                            <li className="basketProductDiscount">
                                <form action="#" className="basketProductForm">
                                    <div className="basketProductInputButtn">
                                        <input type="text" placeholder='کد تخفیف را وارد کنید:' className='basketProductDisCountInput' />
                                        <button className="basketProductDiscountBtn" onClick={clickActiveDiscount}>اعمال تخفیف</button>
                                    </div>
                                    <span className="basketProductAlert"></span>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className="basketProductInfo">
                        <form action="#" className="basketProductInfoForm">
                            <h4 className="basketProductIndoFormTitle">اطاعات خریدار</h4>
                            <div className="basketProductFormUserName">
                                <label htmlFor="fullname" className='basketProductFormTitle'>نام و نام خانوادگی</label>
                                <input type="text" id='fullname' className='basketProductFormText' />
                            </div>
                            <div className="basketProductFormUserName">
                                <label htmlFor="phoneusername" className='basketProductFormTitle'>شماره تلفن:</label>
                                <input type="text" id='phoneusername' className='basketProductFormText' />
                            </div>
                            <div className="basketProductFormUserName">
                                <label htmlFor="addressusername" className='basketProductFormTitle'> آدرس:</label>
                                <textarea type="text" id='addressusername' className='basketProductFormText basketProductFormTextarea' />
                            </div>
                            <span className="basketProductFormAlert"></span>
                        </form>
                        <div className="basketProductInfoPay">
                            <h3 className="basketProductPayTitle">مجموع سبد خرید</h3>
                            <div className="basketProductPayItems">
                                <div className="baskProductPayItem">
                                    <span className="basketPoductLable">مجموع خرده سبد خرید</span>
                                    <span className="basketPoducttext">{subTotal} تومان</span>
                                </div>
                                <div className="baskProductPayItem">
                                    <span className="basketPoductLable">حمل و نقل و تحویل</span>
                                    <span className="basketPoducttext">50000 تومان</span>
                                </div>
                                <div className="baskProductPayItem">
                                    <span className="basketPoductLable">مالیات بر ارزش افزوده</span>
                                    <span className="basketPoducttext">80000 تومان </span>
                                </div>
                                <div className="baskProductPayItem">
                                    <span className="basketPoductLableaAll">مجموع سفارش</span>
                                    <span className="basketPoducttextAll"> {allprice} تومان</span>
                                </div>
                                <a href="#" className="basketProductPayButton" onClick={checkInputValue}>تایید و پرداخت</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}






