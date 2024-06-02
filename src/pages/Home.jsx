
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
        <div className='p-[25px]'>
        <Hero/>
        <Collection>
            <CoffeBag image={coffeData[0].image} coffeeName={coffeData[0].coffeeName} coffeeText={coffeData[0].coffeeText}  />
            <CoffeBag image={coffeData[1].image} coffeeName={coffeData[1].coffeeName} coffeeText={coffeData[1].coffeeText}  />
            <CoffeBag image={coffeData[2].image} coffeeName={coffeData[2].coffeeName} coffeeText={coffeData[2].coffeeText}  />
            <CoffeBag image={coffeData[3].image} coffeeName={coffeData[3].coffeeName} coffeeText={coffeData[3].coffeeText}  />
        </Collection>
        <WhyUs />
        <section className='flex flex-col justify-center items-center mb-[120px]'>
            <h2 className='u-h2 text-[24px] mb-[80px] text-center text-[#83888F] '>How it works</h2>
            <HowItCard number={"01"} title={"Pick your coffee"} body={"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."}/>

            <HowItCard number={"02"} title={"Choose the frequency"} body={"Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."}/>

            <HowItCard number={"03"} title={"Receive and enjoy"} body={"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."}/>

            <Button btnText='Create your plan' py={"15px"} px={"31px"} classes='text-[#FEFCF7]' />
        </section>

        </div>
        </>
    )
}

export default Home