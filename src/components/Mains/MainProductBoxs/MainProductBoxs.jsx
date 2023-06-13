import React from 'react'
import './MainProductBoxs.css'
import MainTitle from '../MainTitle/MainTitle'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import { productBoxs } from '../../../data'
export default function MainProductBoxs() {
    return (
        <section className="mainProductBoxs">
            <div className="container">
                <MainTitle title="محصولات ویژه" />
                <div className="mainProductBoxsWrapper">
                    {productBoxs.map((productBS) => (
                        <div className="productBoxItem">
                            <div className="productBoxItemImg" key={productBS.id}>
                                <img src={productBS.img} alt="" className="ProductBoxItemImage" />
                            </div>
                            <div className="productBoxItemContent">
                                <div className="productBoxItemIcons">
                                    <AiFillStar className='productBoxItemIcon' />
                                    <AiFillStar className='productBoxItemIcon' />
                                    <AiFillStar className='productBoxItemIcon' />
                                    <BsStarHalf className='productBoxItemIcon' />
                                    <AiOutlineStar className='productBoxItemIcon' />
                                </div>
                                <h4 className="productBoxItemName">{productBS.name}</h4>
                                <div className="productBoxItemPrices">
                                    <span className="productBoxItemPrice">{productBS.price}تومان</span>
                                    <span className="productBoxItemPriceOff">{productBS.priceOff}تومان</span>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}
