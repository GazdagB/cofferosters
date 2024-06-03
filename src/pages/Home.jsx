
import Hero from '../components/Hero/Hero';
import Collection from '../components/Collection/Collection';
import CoffeBag from '../components/CoffeeBag';

import coffe1 from '../assets/home/desktop/image-gran-espresso.png'
import coffe2 from '../assets/home/desktop/image-planalto.png'
import coffe3 from '../assets/home/desktop/image-piccollo.png'
import coffe4 from '../assets/home/desktop/image-danche.png'
import WhyUs from '../components/WhyUs';
import HowItCard from '../components/HowItCard';
import Button from '../components/Button/Button';
import Steps from '../components/Steps/Steps';
import "./Home.css"; 

const Home = () => {

    const coffeData = [
        {
            image: coffe1,
            coffeeName: 'Gran Espresso',
            coffeeText: 'Light and flavorful blend with cocoa and black pepper for an intense experience'
        },
        {
            image: coffe2,
            coffeeName: 'Planalto',
            coffeeText: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
        },
        {
            image: coffe3,
            coffeeName: 'Piccollo',
            coffeeText: 'Mild and smooth blend featuring notes of toasted almond and dried cherry'
        },
        {
            image: coffe4,
            coffeeName: 'Danche',
            coffeeText: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
        }
    ]

    return (
        <>
        <div className='px-[25px] flex flex-col items-center'>
        <Hero/>
        <div className="container flex flex-col w-full justify-center items-center mb-[120px] relative lg:w-[1111px] lg:flex-row lg:gap-[30px]">
        <h2 className="header-fade-out u-h2 text-center md:text-[96px] md:absolute md:top-0 md:z-0 md:w-[700px] pt-5 lg:text-[150px] lg:w-[1072px]">our collection</h2>
            <CoffeBag image={coffeData[0].image} coffeeName={coffeData[0].coffeeName} coffeeText={coffeData[0].coffeeText}  />
            <CoffeBag image={coffeData[1].image} coffeeName={coffeData[1].coffeeName} coffeeText={coffeData[1].coffeeText}  />
            <CoffeBag image={coffeData[2].image} coffeeName={coffeData[2].coffeeName} coffeeText={coffeData[2].coffeeText}  />
            <CoffeBag image={coffeData[3].image} coffeeName={coffeData[3].coffeeName} coffeeText={coffeData[3].coffeeText}  />
        </div>
        <WhyUs />
        <section className='flex flex-col justify-center items-center lg:items-start md:items-start mb-[120px] w-[327px] md:w-[689px] lg:w-[1045px]'>
            <h2 className='u-h2 text-[24px] mb-[80px] md:mb-[40px] text-center text-[#83888F] '>How it works</h2>

            <div className="hidden md:block">
                <Steps/>
            </div>
           
            <div className='md:flex gap-[30px]'>
                <HowItCard bodyTxtColor='text-[#333D4B]' number={"01"} title={"Pick your coffee"} body={"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."}/>
                <HowItCard bodyTxtColor='text-[#333D4B]' number={"02"} title={"Choose the frequency"} body={"Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."}/>
                <HowItCard bodyTxtColor='text-[#333D4B]' number={"03"} title={"Receive and enjoy"} body={"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."}/>
            </div>

            <Button btnText='Create your plan' py={"15px"} px={"31px"} classes='text-[#FEFCF7]' />
        </section>

        </div>
        </>
    )
}

export default Home