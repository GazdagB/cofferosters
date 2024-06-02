/* eslint-disable react/prop-types */

const CardWy = ({image,heading,body}) => {
  return (
    <div className='h-[382px] w-full bg-[#0E8784] rounded-lg mb-[24px] flex flex-col p-[35px] justify-center items-center'>
        <img className="mb-[56px]" src={image} alt="" />
        <h2 className="mb-[24px] u-h4 text-[24px]">{heading}</h2>
        <p>{body}</p>
    </div>
  )
}

export default CardWy