import React from 'react'
import './LoginSingin.css'
import NavCenterRes from '../../components/NavCenterRes/NavCenterRes'
import MenuDownNav from '../../components/MenuDownNav/MenuDownNav'
import NavInfo from '../../components/NavInfo/NavInfo'
import LoginSiningContent from '../../components/LoginSinginContent/LoginSiningContent'
export default function LoginSingin() {
  return (
    <>
      <div className="navCenter-res">
        <NavCenterRes />
      </div>
      <div className="menuDown-nav">
        <MenuDownNav />
      </div>
      <NavInfo page='ثبت نام و ورود' text='ثبت نام و ورود' />
      <LoginSiningContent/>
    </>
  )
}
