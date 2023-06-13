import React from 'react'
import './Account.css'
import NavCenterRes from '../../components/NavCenterRes/NavCenterRes'
import MenuDownNav from '../../components/MenuDownNav/MenuDownNav'
import NavInfo from '../../components/NavInfo/NavInfo'
import AccountContent from '../../components/AccountContent/AccountContent'
export default function Account() {
  return (
   <>
      <div className="navCenter-res">
    <NavCenterRes/>
   </div>
    <div className="menuDown-nav">
    <MenuDownNav/>
    </div>
    <NavInfo page='حساب کابری' text='حساب کاربری'/>
    <AccountContent/>
   </>
  )
}
