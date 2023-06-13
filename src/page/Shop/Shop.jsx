import React from 'react'
import MenuDownNav from '../../components/MenuDownNav/MenuDownNav'
import NavInfo from '../../components/NavInfo/NavInfo'
import Store from '../../components/Store/Store'
import NavCenterRes from '../../components/NavCenterRes/NavCenterRes'
export default function Shop() {
  return (
    <>
      <div className="navCenter-res">
    <NavCenterRes/>
   </div>
    <div className="menuDown-nav">
    <MenuDownNav/>
    </div>
    <NavInfo page='فروشگاه' text='فروشگاه'/>
    <Store/>
    </>
  )
}
