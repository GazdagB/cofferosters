/* eslint-disable react/prop-types */

const Headquarters = ({country,adress,image}) => {
  return (
    <div className="flex flex-col md:items-start justify-center items-center text-center mb-[80px]">
        <img src={image} alt="" className="mb-[48px]"/>
        <h2 className="text-[28px] heading mb-[24px]">{country}</h2>
        <p className="md:text-start" >
            {adress}
        </p>
    </div>
  )
}

export default Headquarters