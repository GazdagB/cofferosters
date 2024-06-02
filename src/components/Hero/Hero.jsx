import bgImageMobile from '../../assets/home/mobile/image-hero-coffeepress.jpg'
import Button from '../Button/Button'
import './Hero.css'

const Hero = () => {

    return (
        <header className='h-[500px] p-[32px] text-center bg-cover text-white rounded-[10px] mb-[120px]' style={{backgroundImage: `url(${bgImageMobile})`}}>
            <h1 className='u-h2 mb-6'>Great coffee made simple.</h1>
            <p className='mb-[40px]'>Start your mornings with the world’s best coffees. Try our expertly curated artisan 
            coffees from our best roasters delivered directly to your door, at your schedule.</p>
            <Button btnText='Create your plan' py={"15px"} px={"31px"}/>
        </header>
    )
}
export default Hero