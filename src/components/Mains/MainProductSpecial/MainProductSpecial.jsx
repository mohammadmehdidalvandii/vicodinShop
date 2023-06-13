import React from 'react'
import './MainProductSpecial.css'
import MainTitle from '../../Mains/MainTitle/MainTitle'
import { IoEyeSharp } from 'react-icons/io5'
import { BsFillBasket3Fill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { productSpecialFirst } from '../../../data'
export default function MainProductSpecial() {
    return (
        <section className="mainProductSpecial">
            <div className="container">
                <MainTitle title='محصولات ویژه' />
                <div className="productSpecial">
                    <div className="productSpecialLeft">
                        <a href="#" className="specialLeftLink">
                            <img src="./images/11.jpg" alt="product" className="specialLeftImg" />
                        </a>
                        <a href="#" className="specialLeftLink">
                            <img src="./images/12.jpg" alt="product" className="specialLeftImg" />
                        </a>
                    </div>
                    <div className="productSpecialRight">
                        <div className="specialRightItems">
                            {productSpecialFirst.map(productSF => (
                                <div className="productRightItem" key={productSF.id}>
                                    <div className="productRightImg">
                                        <img src={productSF.img} alt="" className="productRightsImage" />
                                        <sapn className="productRightImgText">جدید</sapn>
                                    </div>
                                    <div className="productRightButton">
                                        <a href="#" className="productRightBtnLink">
                                            <IoEyeSharp className='productRightBtnIcon' />
                                        </a>
                                        <a href="#" className="productRightBtnLink">
                                            <BsFillBasket3Fill className='productRightBtnIcon' />
                                        </a>
                                        <a href="#" className="productRightBtnLink">
                                            <AiFillHeart className='productRightBtnIcon' />
                                        </a>
                                    </div>
                                    <h4 className="productRightName">{productSF.name}</h4>
                                    <div className="productRightContent">
                                        <span className="productRrithPrice">{productSF.price}</span>
                                        <sapn className="ProductRightOff">{productSF.priceOff}</sapn>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
