/* eslint-disable react/prop-types */

const CardWy = ({image,heading,body}) => {
  return (
    <div className='h-[382px] md:h-[180px] w-[279px] md:w-[573px] bg-[#0E8784] rounded-lg mb-[24px] flex flex-col md:flex-row lg:flex-col lg:gap-10 p-[35px] md:py-[35px] md:px-[75px] lg:px-[50px] justify-center items-center md:gap-[55px] lg:w-[350px] lg:h-[382px]'>
        <img className="mb-[56px] md:mb-[0] w-[55px]" src={image} alt="" />
        <div className="md:text-start lg:text-center">
          <h2 className="mb-[24px] u-h4 text-[24px]">{heading}</h2>
          <p>{body}</p>
        </div>
    </div>
  )
}

export default CardWy