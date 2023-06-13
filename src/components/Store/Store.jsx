import React from 'react'
import './Store.css'
import StoreSideRight from '../StoreSideRight/StoreSideRight'
import StoreSideLeft from '../StoreSideLeft/StoreSideLeft'
export default function Store() {
  return (
        <section className="store">
            <div className="container">
                <div className="storeWrapper">
                    <StoreSideRight/>
                    <StoreSideLeft/>
                </div>
            </div>
        </section>
  )
}
