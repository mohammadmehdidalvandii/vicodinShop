import React, { useState } from 'react'
import './AccountContent.css'
import { AiFillHome } from 'react-icons/ai'
import { HiOutlineDocumentText, HiMapPin } from 'react-icons/hi2'
import { HiOutlineDownload } from 'react-icons/hi'
import { BsPersonFill } from 'react-icons/bs'
import { RxExit } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { accoutOrders, accountAddress } from '../../data'
export default function AccountContent() {

    const [selectedMenu, setSelectedMenu] = useState('dashboard')

    const clickShowMenuAccount = (menuName) => {
        setSelectedMenu(menuName);
    }

    return (
        <section className="accountContent">
            <div className="container">
                <div className="accountContentWrapper">
                    {/* Account Menu side Right */}
                    <div className="accountcontentMenu">
                        <ul className="accountContentItems">
                            <li className={`accountContentItem ${selectedMenu === 'dashboard' ? 'accountContentItemActive' : ''}`}
                                onClick={() => clickShowMenuAccount('dashboard')}
                            >
                                <sapn className="accountContentItmeText ">داشبورد</sapn>
                                <sapn className="accountContentItmeIcon"><AiFillHome /></sapn>
                            </li>
                            <li className={`accountContentItem ${selectedMenu === 'order' ? 'accountContentItemActive' : ''}`}
                                onClick={() => clickShowMenuAccount('order')}
                            >
                                <sapn className="accountContentItmeText">سفارش ها</sapn>
                                <sapn className="accountContentItmeIcon"><HiOutlineDocumentText /></sapn>
                            </li>
                            <li className={`accountContentItem ${selectedMenu === 'download' ? 'accountContentItemActive' : ''}`}
                                onClick={() => clickShowMenuAccount('download')}
                            >
                                <sapn className="accountContentItmeText">دانلود ها</sapn>
                                <sapn className="accountContentItmeIcon"><HiOutlineDownload /></sapn>
                            </li>
                            <li className={`accountContentItem ${selectedMenu === 'address' ? 'accountContentItemActive' : ''}`}
                                onClick={() => clickShowMenuAccount('address')}
                            >
                                <sapn className="accountContentItmeText">آدرس ها</sapn>
                                <sapn className="accountContentItmeIcon"><HiMapPin /></sapn>
                            </li>
                            <li className={`accountContentItem ${selectedMenu === 'accounts' ? 'accountContentItemActive' : ''}`}
                                onClick={() => clickShowMenuAccount('accounts')}
                            >
                                <sapn className="accountContentItmeText">جزئیات حساب کاربری</sapn>
                                <sapn className="accountContentItmeIcon"><BsPersonFill /></sapn>
                            </li>
                            <li className={`accountContentItem ${selectedMenu === 'exit' ? 'accountContentItemActive' : ''}`}
                                onClick={() => clickShowMenuAccount('exit')}
                            >
                                <sapn className="accountContentItmeText">خروج</sapn>
                                <sapn className="accountContentItmeIcon"><RxExit /></sapn>
                            </li>
                        </ul>
                    </div>
                    {/* Account content for menu */}
                    <div className="accountContentbox">
                        {selectedMenu === 'dashboard' && (
                            <div className="accountContentDahsboard">
                                <div className="accountContentDashboardUserName">
                                    <p className="dashboardUserNameText">
                                        سلام UserName
                                        اگرUserNameنیستید  /
                                        <Link to='/' className="dashboardUserNameLink"> خروج</Link>
                                    </p>
                                </div>
                                <div className="accountContentDashboardDesciption">
                                    <p className="dashboardDescriptionText">
                                        از داشبورد حساب خود می‌توانید سفارش‌های اخیر خود را مشاهده کنید، آدرس‌های ارسال و صورت‌حساب خود را مدیریت کنید و رمز عبور و جزئیات حساب خود را ویرایش کنید.
                                    </p>
                                </div>
                            </div>
                        )}
                        {selectedMenu === 'order' && (
                            <div className="accountContentOrder">
                                <table className="accountContentTable">
                                    <tr className="accountContentTableTitles">
                                        <th className="accoutContenetTableTitle">سفارش</th>
                                        <th className="accoutContenetTableTitle">تاریخ</th>
                                        <th className="accoutContenetTableTitle">وضعیت</th>
                                        <th className="accoutContenetTableTitle">مجموع</th>
                                        <th className="accoutContenetTableTitle">عمل</th>
                                    </tr>
                                    {accoutOrders.map((order) => (
                                        <tr className="accountContentTableTitle" key={order.id}>
                                            <td className="accounContentTableText">{order.id}</td>
                                            <td className="accounContentTableText">{order.data}</td>
                                            <td className="accounContentTableText">{order.status} </td>
                                            <td className="accounContentTableText">{order.price} تومان</td>
                                            <td className="accounContentTableText accounContentTableTextLink">نمایش</td>
                                        </tr>
                                    ))}

                                </table>
                            </div>
                        )}
                        {selectedMenu === 'download' && (
                            <div className="accountContentDonwLoad">
                                <p className="accountContentDownLoadDecsiption">
                                    شا تا به حال هیچگونه فایل دانلود نکردید
                                </p>
                            </div>
                        )}
                        {selectedMenu === 'address' && (
                            <div className="accountContentAddress">
                                <div className="accountContentAddressText">
                                    <p className="accountContentAddressDecsription">
                                        ادرس های شما :
                                    </p>
                                </div>
                                <div className="menuAddres">
                                    <ul className="menuAddressItems">
                                        {accountAddress.map((address) => (
                                            <li className="menuAddressItem">
                                                <h3 className="menuAddressItemTitle">ادرس </h3>
                                                <span className="menuAddressItemUserName">{address.userName}</span>
                                                <span className="menuAddressItemAdd">{address.address}</span>
                                                <span className="menuAddressItemPhone">تلفن همراه: {address.phone} </span>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        )}
                        {selectedMenu === 'accounts' && (
                            <div className="accountContentAccounts">
                                <div className="accountContentDetails">
                                    <ul className="accountContentDetailsItems">
                                        <li className="accounContentDetailsItem">
                                            <span className="accountContentDetailsTitle">نام کاربری :</span>
                                            <span className="accountContentDetailsText">محمدمهدی دالوندی</span>
                                        </li>
                                        <li className="accounContentDetailsItem">
                                            <span className="accountContentDetailsTitle"> رمز عبور :</span>
                                            <span className="accountContentDetailsText">********</span>
                                        </li>
                                        <li className="accounContentDetailsItem">
                                            <span className="accountContentDetailsTitle">ایمیل شما :</span>
                                            <span className="accountContentDetailsText">dalvandi@gmail.com</span>
                                        </li>
                                        <li className="accounContentDetailsItem">
                                            <span className="accountContentDetailsTitle">شماره همراه :</span>
                                            <span className="accountContentDetailsText">093900000</span>
                                        </li>
                                        <li className="accoutContentDetailsItem">
                                            <a href="#" className="accountContentDetailsButton">تغییر مشخصات</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {selectedMenu === 'exit' && (
                            <Link to='/' className='accountContentExit'>خارج شوید 😁</Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
