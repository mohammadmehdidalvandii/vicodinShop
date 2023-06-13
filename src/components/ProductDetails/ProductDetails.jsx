import React, { useState } from 'react'
import './ProductDetails.css'
import {Link} from 'react-router-dom'
import { AiFillStar, AiFillInstagram } from 'react-icons/ai'
import { FaShoppingCart, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { productComment } from '../../data'
export default function ProductDetails({ name, price, img }) {
    const [changeMenu, setChangeMenu] = useState('Description')
    const [countProducts , setCounProducts] = useState(1)

    const clickChangeMenu = (menuChange) => {
        setChangeMenu(menuChange)
    }

    const clickPlus = ()=>{
            const newCountPlus = countProducts + 1
            setCounProducts(newCountPlus)
        
    }
    
    const clickmins = ()=>{
        if (countProducts <= 1) {
            alert("حداقل تعداد مجاز برای این محصول یک عدد است.")
        } else {
            const newCountMins = countProducts -1
            setCounProducts(newCountMins)
        }
    }
   

    return (
        <section className="productDetails">
            <div className="container">
                <div className="ProductDetailsWrapper">
                    <div className="productDetailsRight">
                        <div className="productDetailsRightWrappers">
                            <div className="productRightImages">
                                <img src={img} alt={name} className="productRightDetailsImg" />
                            </div>
                            <div className="productRightDetails">
                                <div className="productRightItem">
                                    <div className="productRightStar">
                                        <AiFillStar className='productRightStarIcon' />
                                        <AiFillStar className='productRightStarIcon' />
                                        <AiFillStar className='productRightStarIcon' />
                                        <AiFillStar className='productRightStarIcon' />
                                        <AiFillStar className='productRightStarIcon' />
                                    </div>
                                    <div className="productRightTitlePrice">
                                        <h5 className="productRightTitle">{name}</h5>
                                        <span className="productRightPrice">{price} تومان</span>
                                    </div>
                                </div>
                                <div className="productRightItem">
                                    <div className="productRightGroups">
                                        <span className="productRightGroup">دسته بندی :</span>
                                        <div className="ProductRightGroupItem">
                                            <a href="#" className="productRightGroupLink"> تجهیزات درمانی</a>
                                            <a href="#" className="productRightGroupLink"> تجهیزات ضروری</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="productRightItem">
                                    <div className="productRightButtonCounter">
                                        <div className="productRightCounter">
                                            <button className="productRightButtonCount" onClick={clickPlus}>+</button>
                                            <span className="productRightTextCount">{countProducts}</span>
                                            <button className="productRightButtonCount" onClick={clickmins}>-</button>
                                        </div>
                                       <Link to='/Basket' style={{textDecoration:'none'}}>
                                       <button className="productRigtBotton">
                                            <FaShoppingCart className='productRightButtonIcon'  />
                                            افزودن سبد خرید
                                        </button>
                                       </Link>
                                    </div>
                                </div>
                                <div className="productRightItem">
                                    <div className="productRightMedia">
                                        <a href="#" className="productRightMediaLink">
                                            <FaFacebookF className='ProductRightMediaIcon' />
                                        </a>
                                        <a href="#" className="productRightMediaLink">
                                            <FaTwitter className='ProductRightMediaIcon' />
                                        </a>
                                        <a href="#" className="productRightMediaLink">
                                            <BsLinkedin className='ProductRightMediaIcon' />
                                        </a>
                                        <a href="#" className="productRightMediaLink">
                                            <AiFillInstagram className='ProductRightMediaIcon' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="productRightCommentDescription">
                            <div className="productRightBottonCommentDescription">
                                <button className={`productRightCommentDescriptionBtn ${changeMenu === 'Description' ? 'productRightCommenttDescriptionBtnActive' : ''}`} onClick={() => clickChangeMenu('Description')}>توضیحات</button>
                                <button className={`productRightCommentDescriptionBtn ${changeMenu === 'Comment' ? 'productRightCommenttDescriptionBtnActive' : ''}`} onClick={() => clickChangeMenu('Comment')}>نظرات</button>
                            </div>
                            <div className="productRightCommnetDescriptionWrapper">
                                {changeMenu === "Description" && (
                                    <div className="productRightDescription">
                                        <h4 className="productRightCommentDescriptionTitle">{name}</h4>

                                        <div className="productRightDescriptionContent">
                                            <p className="productRightDescriptionParaph">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                                <br />
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                            </p>
                                        </div>
                                    </div>
                                )}
                                {changeMenu === 'Comment' && (
                                    <div className="productRightComment">
                                        <h4 className="productRightCommentDescriptionTitle">نظرات درباره محصول</h4>
                                        <div className="productRightCommentItems">
                                            {productComment.map((comment) => (
                                                <div className="productRightCommentItem" key={comment.id}>
                                                    <img src={comment.img} alt='' className="productRightCommnetImg" />
                                                    <div className="productRightCommentSeeUser">
                                                        <div className="productRightCommentUserNameData">
                                                            <span className="productRightCommentUserName">{comment.name}</span>
                                                            <span className="productRightCommentData">{comment.data}</span>
                                                        </div>
                                                        <p className="productRightCommentUserText">
                                                            {comment.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>

                                        <div className="productRightSendComment">
                                            <h4 className="productRightCommentDescriptionTitle"> ارسال نظر</h4>
                                            <form action="#" className="productRightCommentForm">
                                                <div className="productRightCommentBoxInput">
                                                    <textarea name="#" id="" cols="20" rows="10" className="productRightTextUser" placeholder='نظر خود را بنویسید'></textarea>
                                                </div>
                                                <div className="productRightCommentBoxInput">
                                                    <input type="text" className="productRightCommentInput" placeholder='نام...' />
                                                </div>
                                                <div className="productRightCommentBoxInput">
                                                    <input type="text" className='productRightCommentInput' placeholder='ایمیل ' />
                                                </div>
                                                <div className="productRightCommentCheck">
                                                    <input type="checkbox" className='productRightCommentCheckBox' />
                                                    ذخیره ایمیل،نام و آدرس وبسایت برای ارسال نظر در آینده
                                                </div>
                                                <button className="productRightCommentBtn">ارسال</button>
                                            </form>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="productDetailsLeft">
                        <div className="productLeftImages">
                            <a href="#" className="productLeftImagesLink">
                                <img src="/images/pd.jpg" alt="" className="productLeftImg" />
                            </a>
                            <a href="#" className="productLeftImagesLink">
                                <img src="/images/shop-2.jpg" alt="" className="productLeftImg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



