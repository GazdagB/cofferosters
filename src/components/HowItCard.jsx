/* eslint-disable react/prop-types */
 
const HowItCard = ({bodyTxtColor="",number,title,body}) => {
  return (
    <div className='text-center mb-[56px] lg:w-[285px]'>
        <h2 className='u-h1 mb-[24px] text-[#FDD6BA] md:text-start'>{number}</h2>
        <h2 className={bodyTxtColor + " u-h4 mb-[24px] md:text-start pr-24"}>{title}</h2>
        <p className={bodyTxtColor + " md:text-start"}>{body}</p>
      
    </div>
  )
}

export default HowItCard