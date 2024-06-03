/* eslint-disable react/prop-types */

const CoffeeBag = ({image,coffeeName,coffeeText}) => {
  return (
    <div style={{zIndex: "10"}} className="flex flex-col md:flex-row lg:flex-col md:gap-[35px] lg:gap-[72px] justify-center items-center md:items-start lg:items-center mt-[65px] ">
        <img className='w-[200px]' src={image} alt="" />
        <div className="w-[282px] ">
          <h3 className='u-h4 mb-[16px] lg:mb-[24px] text-center md:text-left lg:text-center'>{coffeeName}</h3>
          <p className="text-center md:text-left lg:text-center">{coffeeText}</p>
        </div>
    </div>
  )
}

export default CoffeeBag