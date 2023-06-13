import React from 'react'
import './HeaderShape.css'
import {FaBong ,FaTooth , FaMicroscope , FaSyringe, FaBoxTissue, FaPumpMedical, FaProcedures} from 'react-icons/fa'
export default function HeaderShape() {
  return (
    <section className="headerShape">
        <div className="container">
            <div className="headerShapeItems">
                <div className="headerShapeItem">
                    <a href="#" className="headerShapeLink">
                            <FaBong className='headerShapeIcon'/>
                            <h3 className="headerShapeText">سرپوش پزشکی</h3>
                    </a>
                </div>
                <div className="headerShapeItem">
                    <a href="#" className="headerShapeLink">
                            <FaTooth className='headerShapeIcon'/>
                            <h3 className="headerShapeText">تجهیزات دندانپزشکی</h3>
                    </a>
                </div>
                <div className="headerShapeItem">
                    <a href="#" className="headerShapeLink">
                            <FaMicroscope className='headerShapeIcon'/>
                            <h3 className="headerShapeText">تجهیزات آزمایشگاهی</h3>
                    </a>
                </div>
                <div className="headerShapeItem">
                    <a href="#" className="headerShapeLink">
                            <FaSyringe className='headerShapeIcon'/>
                            <h3 className="headerShapeText">همه لوازم</h3>
                    </a>
                </div>
                <div className="headerShapeItem">
                    <a href="#" className="headerShapeLink">
                            <FaBoxTissue className='headerShapeIcon'/>
                            <h3 className="headerShapeText">پد میکروب</h3>
                    </a>
                </div>
                <div className="headerShapeItem">
                    <a href="#" className="headerShapeLink">
                            <FaPumpMedical className='headerShapeIcon'/>
                            <h3 className="headerShapeText">تجهیزات جانبی</h3>
                    </a>
                </div>
                <div className="headerShapeItem">
                    <a href="#" className="headerShapeLink">
                            <FaProcedures className='headerShapeIcon'/>
                            <h3 className="headerShapeText">تجهیزات اتاق عمل</h3>
                    </a>
                </div>
            </div>
        </div>
        <br /><br /><br /><br /><br />
    </section>
  )
}
