/* eslint-disable react/prop-types */
import React from 'react'
import "./AnswerCard.css"

const AnswerCards = ({title, body, selected,setIsOpen}) => {
  return (
    <div className={selected ? "answer-card--green text-white h-[140px] rounded-[8px] mb-[16px] p-[25px]" : "answer-card h-[140px] rounded-[8px] mb-[16px] p-[25px] text-[#333D4B]"}>
      <p className='u-h4'>{title}</p>
      <p>{body}</p>
    </div>
  )
}

export default AnswerCards