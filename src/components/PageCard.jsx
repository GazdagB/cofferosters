/* eslint-disable react/prop-types */

const PageCard = ({classes, bgImage,title = "",body = "", titleFontSize, bodyFontSize}) => {
  return (
    <div style={{backgroundImage: `url(${bgImage})`}} className={`${classes} rounded-lg  bg-cover text-[#FEFCF7] text-center p-[30px] flex flex-col justify-center items-center`}>
        <h2 className={`text-[${titleFontSize}] u-h2 mb-[24px]`}>{title}</h2>
        <p className={`text-${bodyFontSize} font-normal	`} >{body}</p>
    </div>
  )
}

export default PageCard