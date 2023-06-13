import React from 'react'
import Header from '../../components/Header/Header'
import HeaderShape from '../../components/HeaderShape/HeaderShape'
import Main from '../../components/Mains/Main/Main'
import DownNav from '../../components/DownNav/DownNav'
import NavDownRes from '../../components/NavDownRes/NavDownRes'
import NavCenterRes from '../../components/NavCenterRes/NavCenterRes'
import './Home.css'
export default function Home() {
  return (
   <> 
   <div className="navCenter-res">
    <NavCenterRes/>
   </div>
   <div className="downNav-menu">
   <DownNav/>
   </div>
   <div className="menuDownNav-res">
    <NavDownRes/>
    </div>
    <Header/>
    <HeaderShape/>
    <Main/> 
    
   </>
  )
}
