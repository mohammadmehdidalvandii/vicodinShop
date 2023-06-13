import React, { useEffect, useState } from 'react'
import './StoreSideLeft.css'
import { GoArrowSmallDown } from 'react-icons/go'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsStarFill, BsFillBasket3Fill, BsFillEyeFill } from 'react-icons/bs'
import { sideLeftProduct } from '../../data'
import {Link, useNavigate} from 'react-router-dom'

export default function StoreSideLeft() {

    const [ishandllerOpneMenu, setIsHandllerOpneMenu] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState('مرتب سازی پیش فرض')

    const [productLeft ,setProductLeft ] = useState([])
    const [currentPage, setCurrentPage] =useState(1)
    const [pagiatedProduct, setPagiatedProduct] =useState([])

    const navigate = useNavigate();


    let pageSize = 10;
    let pageNumbers;

        useEffect(()=>{
            setProductLeft(sideLeftProduct)
            let endIndex = pageSize * currentPage;
            let startIndex = endIndex - pageSize ; 
            let allShownProduct = sideLeftProduct.slice(startIndex,endIndex)
            setPagiatedProduct(allShownProduct)
        }, [])

    useEffect(()=>{
        let endIndex = pageSize * currentPage;
        let startIndex = endIndex - pageSize ; 
        let allShownProduct = productLeft.slice(startIndex , endIndex)
        setPagiatedProduct(allShownProduct)
    },[currentPage , productLeft])

    const chagePaginate = (newPage)=>{
        setCurrentPage(newPage)
    }

    const pagesCount = Math.ceil(productLeft.length / pageSize)
    pageNumbers = Array.from(Array(pagesCount).keys())
   
    const handllerOpneMenu = () => {
        setIsHandllerOpneMenu(!ishandllerOpneMenu)
    }

    const orderClickLink = (text) => {
        setSelectedOrder(text)
    }

    const clickshowProduct = (productId) => {
        navigate(`/Product/${productId}`);
      };

    return (
        <div className='wrapperSideLeft'>
        <div className="sideLeft">
            <div className="sideLeftTop">
                <div className="sideLeftTopItem">
                    <span className="sideLeftTopText">نمایش 10 محصول از 30 محصول</span>
                </div>
                <div className="sideLeftTopItem">
                    <div className="sideLeftTopMenu" onClick={handllerOpneMenu}>
                        <div className="sideLeftTopOrder">
                            <GoArrowSmallDown className='sideLeftTopOrderIcon' />
                            <sapn className="sideLeftTopOrderText">{selectedOrder}</sapn>
                        </div>
                        <div className="sideLeftTopOrderItems" style={{ display: ishandllerOpneMenu ? 'block' : 'none' }}>
                            <ul className="sideLeftOrderMenus">
                                <li className="sideLeftOrderMenu"><a href="#" className="sideLeftOrderLink" onClick={() => orderClickLink('مرتب سازی پیش فرض')}>مرتب سازی پیش فرض</a></li>
                                <li className="sideLeftOrderMenu"><a href="#" className="sideLeftOrderLink" onClick={() => orderClickLink('محبوب ترین')}>محبوب ترین</a></li>
                                <li className="sideLeftOrderMenu"><a href="#" className="sideLeftOrderLink" onClick={() => orderClickLink('جدید ترین')}>جدیدترین</a></li>
                                <li className="sideLeftOrderMenu"><a href="#" className="sideLeftOrderLink" onClick={() => orderClickLink('بیشترین قیمت')}>بیشترین قیمت</a></li>
                                <li className="sideLeftOrderMenu"><a href="#" className="sideLeftOrderLink" onClick={() => orderClickLink('کمترین قیمت')}>کمترین قیمت</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="sideLeftProduct">

                    <div className="sideLeftProductItems">
                    {pagiatedProduct.map((sProductL) => (
                        <div className="sideLeftProductItem">
                            <img src={sProductL.img} alt="" className="sideLeftProductImg" />
                            <div className="sideLeftProductButton">
                                <a href="#" className="sideLeftProductBtnLink">
                                    <AiOutlineHeart className='sideLeftProductBtnIcon' />
                                </a>
                                <a href="#" className="sideLeftProductBtnLink">
                                    <BsFillBasket3Fill className='sideLeftProductBtnIcon' />
                                </a>
                                <Link to={`/Product/${sProductL.id}`} className="sideLeftProductBtnLink"  onClick={()=>clickshowProduct(sProductL.id)} >
                                    <BsFillEyeFill className='sideLeftProductBtnIcon' />
                                </Link>
                            </div>
                            <div className="sideLeftProductDescription">
                                <div className="sideLeftProductStar">
                                    <BsStarFill className='sideLeftProductStarIcon' />
                                    <BsStarFill className='sideLeftProductStarIcon' />
                                    <BsStarFill className='sideLeftProductStarIcon' />
                                    <BsStarFill className='sideLeftProductStarIcon' />
                                    <BsStarFill className='sideLeftProductStarIcon' />
                                </div>
                                <h4 className="sideLeftProductName">{sProductL.name}</h4>
                                <div className="sideLeftProductPrices">
                                    <span className="sideLeftProductPrice">{sProductL.price}تومان</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
         
        </div>
           {/* pagination */}
           <nav className='d-flex jusctify-content-center sideLeftPage'>
                <ul className="pagination">
                    {pageNumbers.map((pageNumber)=>(

                    <li className={
                        pageNumber + 1 === currentPage 
                        ? "page-item active"
                        : "page-item"
                    }
                        key={pageNumber + 1}
                        onClick={()=>chagePaginate(pageNumber + 1)}
                    >
                        <span className="page-link">{pageNumber + 1}</span>
                    </li>

                    ))}
                </ul>
            </nav>
        </div>
    )
}
