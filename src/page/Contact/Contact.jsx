import React from 'react'
import MenuDownNav from '../../components/MenuDownNav/MenuDownNav'
import NavInfo from '../../components/NavInfo/NavInfo'
import ContactAdderss from '../../components/ContactAddress/ContactAdderss'
import ContactMessage from '../../components/ContactMessage/ContactMessage'
import NavCenterRes from '../../components/NavCenterRes/NavCenterRes'
export default function Contact() {
  return (
    <>
       <div className="navCenter-res">
    <NavCenterRes/>
   </div>
   <div className="menuDown-nav">
    <MenuDownNav/>
    </div>
    <NavInfo page='ارتباط با ما' text='ارتباط با ما'/>
    <ContactAdderss/>
    <ContactMessage/>
    </>
  )
}
