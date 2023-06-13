import React from 'react'
import './NavInfo.css'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {IoIosArrowBack} from 'react-icons/io'
export default function NavInfo(props) {
  return (
    <section className="navInfo">
        <div className="container">
            <div className="navInfoContent">
                <h3 className="navInfoTitle">{props.page}</h3>
                <div className="navInfoLink">
                    <Link to='/' className="navInfoLinkBack">
                        <FaHome className='navInfoLinkIcon'/>
                        خانه
                    </Link>
                    <IoIosArrowBack className='navInfoIcon'/> 
                    <span className="navInfoInSide">{props.text}</span>
                </div>
            </div>
        </div>
    </section>
  )
}
