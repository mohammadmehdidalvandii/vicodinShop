import React, { useState } from 'react'
import './NavCenterRes.css'
import { FaBars ,FaTimes } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
export default function NavCenterRes() {

    const [isOpneMenuRes , setIsOpneMenuRes] = useState(false)

    const toggleShowMenuCenterRes = ()=>{
        console.log('click');
                setIsOpneMenuRes(!isOpneMenuRes)
    }

    return (
        <section className="navCenterRes">
            <div className="container">
                <div className="navCenterResWrapper" onClick={toggleShowMenuCenterRes} >
                    <div className="navCenterResTitleIcon"> 
                        <h4 className="navCenterResTitle">
                            منو
                        </h4>
                        <span className="navCenterResIcon">
                            {isOpneMenuRes ? <FaTimes/> : <FaBars/>}
                        </span>
                     </div>

                    <div className="navCenterResItems" style={{display: isOpneMenuRes ? 'block' : 'none'}}>
                    <div className="navCenterResItemLogo">
                        <img src="./images/logo.png" alt="" className="navCenterLogo" />
                    </div>
                    <form action="#" className='navCenterResSearch'>
                        <input type="text" className='navCenterResInputSearch' placeholder='جست وجو ...' />
                        <span className="navCenterResSearchIcon">
                            <FiSearch />
                        </span>
                    </form>
                    <ul className="navCenterResMenus">
                        <li className="navCenterResMenu">
                            <Link to='/' className="navCenterResLink">خانه</Link>
                        </li>
                        <li className="navCenterResMenu">
                            <Link to='/AboutUs' className="navCenterResLink">درباره ما</Link>
                        </li>
                        <li className="navCenterResMenu">
                            <Link to='/Shop' className="navCenterResLink">فروشگاه</Link>
                        </li>
                        <li className="navCenterResMenu">
                            <Link to='/' className="navCenterResLink">وبلاگ</Link>
                        </li>
                        <li className="navCenterResMenu">
                            <Link to='/Contact' className="navCenterResLink">ارتباط با ما</Link>
                        </li>
                    </ul>
                    </div>
                   
                 
                </div>
            </div>
        </section>
    );
}
