import React from 'react'
import './MainTitle.css'

export default function MainTitle(props) {
  return (
   <section className="mainTitle">
    <div className="container">
        <h2 className="mainTitleText">{props.title}</h2>
    </div>
   </section>
  )
}
