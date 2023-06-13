import React, { useState } from 'react'
import './AboutQuestions.css'
import MainTitle from '../../Mains/MainTitle/MainTitle'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import {questions} from '../../../data'
 export default function AboutQuestions( ) {

   const [opneQuestonId , setOpneQuestionId ] =useState(null)

 const toggleHandlerShowInfo= (questionid)=>{
    setOpneQuestionId(opneQuestonId === questionid  ? null : questionid)
 }

    return (
        <section className="aboutQuestions">
            <div className="container">
                <div className="aboutQuestionsWrapper">
                    <MainTitle title="پرسش های متداول" />
                    <div className="aboutQuestionItems">
                        <div className="aboutQuestionRight">
                            <div className="accrodionItem">
                                {questions.map((question)=>(

                                <div className="aboutQuestionAccordionBox" key={question.id} onClick={ ()=>toggleHandlerShowInfo(question.id)}>
                                    <div className="aboutQuestionAccrodionTitleIcon">
                                        <h5 className="accrodionTitle">{question.title}</h5>
                                        <span className="accrodionButton">
                                            {opneQuestonId === question.id ? <AiOutlinePlusCircle className='accrodionIcon' /> : <AiOutlineMinusCircle className='accrodionIcon'/> }
                                        </span>
                                    </div>
                                    <div className="aboutQuestionAccordionContent">
                                        {opneQuestonId === question.id &&
                                        
                                        <p className="accrodionParaphText">{question.content}</p>
                                        }
                                    </div>
                                </div>

                                ))}
                            </div>
                        </div>
                        <div className="aboutQuestionLeft">
                            <img src="./images/about/100.jpg" alt="" className="aboutQuestionLeftImg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
