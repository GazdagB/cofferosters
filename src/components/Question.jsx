/* eslint-disable react/prop-types */
import { useState } from 'react'
import arrow from "../assets/plan/desktop/icon-arrow.svg"
import AnswerCards from './AnswerCard'
import "./Question.css"

const Question = ({questions,result}) => {

  const [selected,setSelected] = useState(null);
  const [isOpen,setIsOpen] = useState(true);
 
  function handleClose(){
    setIsOpen((prev) => !prev);
  }

  function handleSelect(selectedNumber){
    setSelected(selectedNumber);
    result(questions.answers[selectedNumber].title)
  }

  return (
    <div className={isOpen ? "mb-[120px]" : "mb-[20px]"}>
        <div className='flex justify-between items-center text-pretty mb-[32px]'>
            <p className='u-h4 text-[#83888F]'>{questions.question}</p>
            <img onClick={handleClose} className={`arrow ${isOpen ? 'arrow-up' : 'arrow-down'}`} src={arrow} alt="arrow" />
        </div>
          {
            isOpen && 
            <div className={`${isOpen ? "openIn": "closeOut"} md:flex md:gap-[10px] `} >
            <a onClick={()=>{handleSelect(0)}}>
              <AnswerCards selected={selected === 0 ? true : false} title={questions.answers[0].title} body={questions.answers[0].body}/>
            </a>
            <a onClick={()=>{handleSelect(1)}}>
              <AnswerCards selected={selected === 1 ? true : false} title={questions.answers[1].title} body={questions.answers[1].body}/>
            </a>
            <a onClick={()=>{handleSelect(2)}}>
              <AnswerCards selected={selected === 2 ? true : false} title={questions.answers[2].title} body={questions.answers[2].body}/>
            </a>
          </div>
          }
    </div>
  )
}

export default Question