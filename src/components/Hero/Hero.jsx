import { useEffect, useState } from 'react'
import bgImageMobile from '../../assets/home/mobile/image-hero-coffeepress.jpg'
import bgImageTablet from "../../assets/home/tablet/image-hero-coffeepress.jpg"
import bgImageDesktop from "../../assets/home/desktop/image-hero-coffeepress.jpg"
import Button from '../Button/Button'
import './Hero.css'


const Hero = () => {

    const [heroBg,setHeroBg] = useState(null); 

    useEffect(()=>{
     resizeHeroBg()
    },[])


    window.onresize = (e)=>{
        resizeHeroBg();
    }

    function resizeHeroBg(){
        if(window.innerWidth < 768){
            setHeroBg(bgImageMobile)
        } else if(window.innerWidth > 768 && window.innerWidth < 1440){
            setHeroBg(bgImageTablet)
        } else if(window.innerWidth > 1440){
            setHeroBg(bgImageDesktop)
        }
    }

    return (
        <header className='h-[500px] w-[327px] md:w-[689px] lg:w-[1280px] p-[32px] md:p-[60px] text-center bg-cover text-white rounded-[10px] mb-[120px] md:text-left md:flex md:flex-col md:justify-center ' style={{backgroundImage: `url(${heroBg})`}}>
            <div className='md:w-[398px]'>
                <h1 className='u-h2 mb-6'>Great coffee made simple.</h1>
                <p className='mb-[40px]'>Start your mornings with the world’s best coffees. Try our expertly curated artisan
                coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <Button btnText='Create your plan' py={"15px"} px={"31px"}/>
            </div>
        </header>
    )
}
export default Hero