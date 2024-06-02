import CardWy from "./CardWy"
import CoffeeImage from "../assets/home/desktop/icon-coffee-bean.svg"
import GiftImage from "../assets/home/desktop/icon-gift.svg"
import ShippingImage from "../assets/home/desktop/icon-truck.svg"

import './WhyUs.css'

const WhyUs = () => {

  const cardData = [
    {
      image: CoffeeImage,
      heading: "Best quality",
      body: "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
    },
    {
      image: GiftImage,
      heading: "Exclusive benefits",
      body: "Special offers and swag when you subscribe, including 30% off your first shipment."
    },
    {
      image: ShippingImage,
      heading: "Free shipping",
      body: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
    }
  ]
  return (
    <section className='why-us text-center text-[#FEFCF7] px-[24px]'>
        <h2 className="u-h4 text-[28px] pt-[65px] mb-[24px] ">Why choose us?</h2>
        <p className="mb-[65px]" >A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>

        <CardWy image={cardData[0].image} heading={cardData[0].heading}  body={cardData[0].body}  />
        <CardWy  image={cardData[1].image} heading={cardData[1].heading} body={cardData[1].body}/>
        <CardWy  image={cardData[2].image} heading={cardData[2].heading} body={cardData[2].body}/>
    </section>
  )
}

export default WhyUs