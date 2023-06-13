import React from 'react'
import './AboutContent.css'
import NavInfo from '../../NavInfo/NavInfo'
import MenuDownNav from '../../MenuDownNav/MenuDownNav'
import AboutHeader from '../AboutHeader/AboutHeader'
import MainDiscount from '../../Mains/MainDiscount/MainDiscount' // import Section  Corona vaccine For Mains component
import AboutProperty from '../AboutProperty/AboutProperty'
import AboutPercent from '../AboutPercent/AboutPercent'
import AboutUserActive from '../AboutUserActive/AboutUserActive'
import AboutExpert from '../AboutExpert/AboutExpert'
import AboutFeedBack from '../AboutFeedBack/AboutFeedBack'
import AboutQuestions from '../AboutQuestions/AboutQuestions'
import AboutService from '../AboutService/AboutService'
import MainWebLog from '../../Mains/MainWebLog/MainWebLog' // import Section  Weblog  For Mains component
import NavCenterRes from '../../NavCenterRes/NavCenterRes'
export default function AboutContent() {
  return (
    <section className='AboutContent'>
      <div className="navCenter-res">
    <NavCenterRes/>
   </div>
      <div className="menuDown-nav">
    <MenuDownNav/>
      </div>
    <NavInfo page='درباه ما' text='درباه ما'/>
    <AboutHeader/>
    <MainDiscount/>
    <AboutProperty/>
    <AboutPercent/>
    <AboutUserActive/>
    <AboutExpert/>
    <AboutFeedBack/>
    <AboutQuestions/>
    <AboutService/>
    <MainWebLog/>
    </section>
  )
}
