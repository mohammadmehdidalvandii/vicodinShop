import React from 'react'
import './Basket.css'
import NavCenterRes from '../../components/NavCenterRes/NavCenterRes'
import MenuDownNav from '../../components/MenuDownNav/MenuDownNav'
import NavInfo from '../../components/NavInfo/NavInfo'
import BasketUser from '../../components/BasketUser/BasketUser'
export default function Basket() {
  return (
    <>
       <div className="navCenter-res">
    <NavCenterRes/>
   </div>
    <div className="menuDown-nav">
    <MenuDownNav/>
    </div>
    <NavInfo page='سبد خرید ' text='سبد خرید'/>
    <BasketUser/>
    </>
  )
}
