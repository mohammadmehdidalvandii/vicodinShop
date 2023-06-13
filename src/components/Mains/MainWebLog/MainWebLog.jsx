import React from 'react'
import './MainWebLog.css'
import MainTitle from '../MainTitle/MainTitle'
import {BsPerson ,BsCalendar3} from 'react-icons/bs'
import {TiTags} from 'react-icons/ti'
import {webLogs} from '../../../data'
export default function MainWebLog() {
  return (
   <section className="mainWebLog">
        <div className="container">
            <div className="mainWebLogWrapper">
                <div className="mainWebLogTitles">
                    <span className="mainWebLogText">خبرها و بلاک</span>
                </div>
                    <MainTitle title='آخرین مطالب وبلاگ'/>
                <div className="mainWebLogItems">
                    {webLogs.map((weblog)=>(
                    <div className="mainWebLogItem">
                        <div className="mainWebLogImage">
                            <img src="./images/weblog/1.jpg" alt="" className="mainWebLogImg" />
                        </div>
                        <div className="mainWebLogPerson">
                            <span className="mainWebLogName">
                                <BsPerson className='mainWebLogPersonIcon'/>
                                توسط :{weblog.userName}</span>
                            <span className="mainWebLogJob">
                            <TiTags className='mainWebLogPersonIcon'/>
                                {weblog.job}
                            </span>
                        </div>
                        <h4 className="mainWebLogTitleName">{weblog.title}</h4>
                        <div className="mainWebLogInfo">
                            <div className="mainWebLogDataText">
                                <BsCalendar3 className='mainWebLogDataIcon'/>
                                <span className="mainWebLogDataTxt">{weblog.data}</span>
                            </div>
                            <div className="mainWebLogDataText">
                                <a href="#" className="mainWebLogMore">اطلاعات بیشتر</a>
                            </div>
                        </div>
                    </div>
                    ))}
                  
                </div>
            </div>
        </div>
   </section>
  )
}
