import React, { useState } from 'react'
import './StoreSideRight.css'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { BsStarFill, BsSearch } from 'react-icons/bs'
import { sideRightProduct } from '../../data'
export default function StoreSideRight() {

    const [priceRange, setPriceRange] = useState(50000)

    const rengePriceChange = (e) => {
        setPriceRange(e.target.value);
    }

    return (
        <div className="SideRight">
            <div className="sideRightBox">
                <h3 className="sideRightTitle">دسته بندی های محصول</h3>
                <ul className="sideRightGroupItems">
                    <li className="sideRightGroupItem">
                        <Link to='/' className="sideRightGroupLink">عفونی کننده دست</Link>
                        <span className="sideRightGroupIcon">
                            <IoIosArrowRoundBack />
                        </span>
                    </li>
                    <li className="sideRightGroupItem">
                        <Link to='/' className="sideRightGroupLink">ماسک صورت Lab N۹۵</Link>
                        <span className="sideRightGroupIcon">
                            <IoIosArrowRoundBack />
                        </span>
                    </li>
                    <li className="sideRightGroupItem">
                        <Link to='/' className="sideRightGroupLink">دستکشهای دستی</Link>
                        <span className="sideRightGroupIcon">
                            <IoIosArrowRoundBack />
                        </span>
                    </li>
                    <li className="sideRightGroupItem">
                        <Link to='/' className="sideRightGroupLink">تجهیزات پزشکی</Link>
                        <span className="sideRightGroupIcon">
                            <IoIosArrowRoundBack />
                        </span>
                    </li>
                    <li className="sideRightGroupItem">
                        <Link to='/' className="sideRightGroupLink">محصول جدید ورود</Link>
                        <span className="sideRightGroupIcon">
                            <IoIosArrowRoundBack />
                        </span>
                    </li>
                    <li className="sideRightGroupItem">
                        <Link to='/' className="sideRightGroupLink">دسته‌بندی نشده</Link>
                        <span className="sideRightGroupIcon">
                            <IoIosArrowRoundBack />
                        </span>
                    </li>
                    <li className="sideRightGroupItem">
                        <Link to='/' className="sideRightGroupLink">پیشنهادات ویژه</Link>
                        <span className="sideRightGroupIcon">
                            <IoIosArrowRoundBack />
                        </span>
                    </li>
                </ul>
            </div>
            <div className="sideRightBox">
                <h3 className="sideRightTitle">فیلتر بر اساس قیمت</h3>
                <div className="sideRightRange">
                    <span className="sideRightRangePrice">
                        قیمت مدنظر:
                    </span>
                    <span className="sideRightRangePricing">
                        50,000تومان
                        -
                        {priceRange}تومان
                    </span>
                </div>
                <input type="range" min='0' max='4000000' className="sideRightRangeInput" onChange={rengePriceChange} value={priceRange} />
            </div>
            <div className="sideRightBox">
                <h3 className="sideRightTitle"> محصولات دارای امتیاز برتر</h3>
                <div className="sideRightProductitems">
                    {sideRightProduct.map((productRight) => (
                        <div className="sideRightProductItem">
                            <div className="sideRightProductImage">
                                <img src={productRight.img} alt="" className="sideRightProductImg" />
                            </div>
                            <div className="sideRightProductContent">
                                <div className="sideRightProductIcon">
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                </div>
                                <h5 className="sideRightProductTitle">{productRight.name}</h5>
                                <span className="sideRightProductPrice">{productRight.price}تومان</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sideRightBox">
                <h3 className="sideRightTitle">جست و جو محصول</h3>
                <form className="sideRightSearch">
                    <input type="text" className='sideRightSearchInput' placeholder='کلمه کیلدی مدنظر را وارد کنید' />
                    <span>
                        <BsSearch className='sideRightSearchIcon' />
                    </span>
                </form>

            </div>
            <div className="sideRightBox">
                <h3 className="sideRightTitle">برچسب های محبوب</h3>
                <div className="sideRightLabel">
                    <button className="sideRightLabelBtn">بدن</button>
                    <button className="sideRightLabelBtn">دکتر</button>
                    <button className="sideRightLabelBtn">دارو</button>
                    <button className="sideRightLabelBtn">چشم</button>
                    <button className="sideRightLabelBtn">چهره</button>
                    <button className="sideRightLabelBtn">دست</button>
                    <button className="sideRightLabelBtn">ماسک</button>
                    <button className="sideRightLabelBtn">پزشکی</button>
                    <button className="sideRightLabelBtn">قیمت</button>
                    <button className="sideRightLabelBtn">اسپری</button>
                    <button className="sideRightLabelBtn">ویروس</button>
                </div>
            </div>
            <img src="./images/shop-2.jpg" alt="" className="sideRightImg" />

        </div>
    )
}
