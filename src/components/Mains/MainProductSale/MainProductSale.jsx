import React from 'react'
import './MainProductSale.css'
import MainTitle from '../MainTitle/MainTitle'
import { IoEyeSharp } from 'react-icons/io5'
import { BsFillBasket3Fill, BsStarHalf } from 'react-icons/bs'
import { AiFillHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import {productSale} from '../../../data'
export default function MainProductSale() {
  return (
    <section className="mainProductSale">
      <div className="container">
        <MainTitle title='پر فروش ترین محصولات' />
        <div className="mainProductSaleWrapper">
          {productSale.map((productSL)=>(

          <div className="mainProductSaleItem" key={productSL.id}>
            <div className="mainProductSaleImgText">
              <img src={productSL.img} alt="" className="mainProductSaleImg" />
              <span className="mainProductSaleText">خرید</span>
            </div>
            <div className="mainProductSaleButton">
              <a href="#" className="mainProductSaleBtnLink">
                <IoEyeSharp className='mainProductSaleBtnIcon' />
              </a>
              <a href="#" className="mainProductSaleBtnLink">
                <BsFillBasket3Fill className='mainProductSaleBtnIcon' />
              </a>
              <a href="#" className="mainProductSaleBtnLink">
                <AiFillHeart className='mainProductSaleBtnIcon' />
              </a>
            </div>
            <div className="mainProductSaleIcons">
              <AiFillStar className='mainProductSaleIcon' />
              <AiFillStar className='mainProductSaleIcon' />
              <AiFillStar className='mainProductSaleIcon' />
              <BsStarHalf className='mainProductSaleIcon' />
              <AiOutlineStar className='mainProductSaleIcon' />
            </div>
            <h4 className="mainProductSaleName">{productSL.name}</h4>
            <div className="mainProductSalePrices">
              <span className="mainProductSalePrice">{productSL.price}تومان</span>
              <span className="mainProductSalePriceOff">{productSL.priceoff}تومان</span>
            </div>
          </div>

          ))}
      
        </div>
      </div>
    </section>
  )
}
