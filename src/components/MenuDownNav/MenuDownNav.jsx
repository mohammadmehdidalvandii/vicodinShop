import React from 'react'
import './MenuDownNav.css'
import {Link} from 'react-router-dom'
export default function MenuDownNav() {
    
  return (
        <section className="menuDownNav">
            <div className="container">
                <div className="menuDownNavWrapper">
                    <ul className="menuDownNavItems">
                        <li className="menuDownNavItem">
                            <Link to='/' className="menuDownNavLink">خانه</Link>
                        </li>
                        <li className="menuDownNavItem">
                            <Link to='/AboutUs' className="menuDownNavLink">درباره ما</Link>
                        </li>
                        <li className="menuDownNavItem">
                            <Link to='/Shop' className="menuDownNavLink">فروشگاه</Link>
                        </li>
                        <li className="menuDownNavItem">
                            <Link to='/' className="menuDownNavLink">وبلاگ</Link>
                        </li>
                        <li className="menuDownNavItem">
                            <Link to='/Contact' className="menuDownNavLink">ارتباط با ما</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
