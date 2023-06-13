import React from 'react'
import './MainProductLast.css'
import MainTitle from '../MainTitle/MainTitle'

import { IoEyeSharp } from 'react-icons/io5'
import { BsFillBasket3Fill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

import { productLast } from '../../../data'
export default function MainProductLast() {
  return (
    <section className="mainProductLast">
        <div className="container">
            <MainTitle title='آخرین محصولات'/>
            <div className="productLastWrapper">
                <div className="productLastTop">
                    <div className="productLastItems">
                        {productLast.map((prodctLT)=>(
                            <div className="productLastItem" key={prodctLT.id}>
                            <div className="productLastImgText">
                                <img src={prodctLT.img} alt="" className="productLastImg" />
                                <span className="productLastText">جدید</span>
                            </div>
                            <div className="productLastButton">
                                <a href="#" className="ProductLastBtnLink">
                                    <IoEyeSharp className='productLastBtnIcon'/>
                                </a>
                                <a href="#" className="ProductLastBtnLink">
                                <BsFillBasket3Fill className='productLastBtnIcon'/>
                                </a>
                                <a href="#" className="ProductLastBtnLink">
                                <AiFillHeart className='productLastBtnIcon'/>
                                </a>
                            </div>
                            <h4 className="productLastTitle">{prodctLT.name}</h4>
                            <span className="productLastPrice">{prodctLT.price}تومان</span>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="productLastDown">
                    <div className="productDownBoxLinkImg">
                        <a href="#" className="productDownBoxLink">
                            <img src="./images/23.jpg" alt="" className="productDownBoxImg" />
                        </a>
                        <a href="#" className="productDownBoxLink">
                            <img src="./images/21.jpg" alt="" className="productDownBoxImg" />
                        </a>
                        <a href="#" className="productDownBoxLink">
                            <img src="./images/22.jpg" alt="" className="productDownBoxImg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
