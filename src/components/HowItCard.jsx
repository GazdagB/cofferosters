/* eslint-disable react/prop-types */
 
const HowItCard = ({bodyTxtColor="",number,title,body}) => {
  return (
    <div className='text-center mb-[56px]'>
        <h2 className='u-h1 mb-[24px] text-[#FDD6BA]'>{number}</h2>
        <h2 className={bodyTxtColor + " u-h4 mb-[24px]"}>{title}</h2>
        <p className={bodyTxtColor}>{body}</p>
      
    </div>
  )
}

export default HowItCard