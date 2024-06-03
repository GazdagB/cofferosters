import React from 'react'

const Steps = () => {

    const circleStyles = {
        "borderRadius": "100%",
        "height": "30px", 
        "aspectRatio": "1",
        "border": "2px solid #0E8784", 
        "zIndex": "1",
        "backgroundColor": "#FEFCF7"
    }

    const lineStyles = {
        "height": "2px", 
        "backgroundColor": "#FDD6BA",
        "width": "95%", 
        "position": "absolute",
        "top" : "50%",
        "transform": "translateY(-50%)",
        "zIndex": "0"
    }

    const containerStyles = {
        "marginBottom": "45px"
    }

  return (
    <div style={containerStyles} className='steps-container flex justify-between w-[467px] lg:w-[760px] relative'>
    <div style={circleStyles}></div>
    <div style={circleStyles}></div>
    <div style={circleStyles}></div>
    <div style={lineStyles}></div>
    </div>
  )
}

export default Steps