/* eslint-disable react/prop-types */
import "./Button.css"

const Button = ({btnText,py,px,classes = ""}) => {
  return (
    <button  style={{paddingTop: py, paddingBottom: py, paddingRight: px, paddingLeft: px}} className={`btn rounded-lg u-button-text ${classes}`} >
        {btnText}
    </button>
  )
}

export default Button