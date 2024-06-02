/* eslint-disable react/prop-types */

const CoffeeBag = ({image,coffeeName,coffeeText}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-[48px]">
        <img className='w-[200px]' src={image} alt="" />
        <h3 className='u-h4 mb-[16px]'>{coffeeName}</h3>
        <p className="text-center">{coffeeText}</p>
    </div>
  )
}

export default CoffeeBag