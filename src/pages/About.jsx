import PageCard from "../components/PageCard"
import aboutBg from "../assets/about/mobile/image-hero-whitecup.jpg"
import aboutBg2 from "../assets/about/mobile/image-commitment.jpg"
import aboutBg3 from "../assets/about/mobile/image-quality.jpg"
import ukIllustration from "../assets/about/desktop/illustration-uk.svg"
import canadaIllustration from "../assets/about/desktop/illustration-canada.svg"
import australiaIllustration from "../assets/about/desktop/illustration-australia.svg"
import "./About.css"
import Headquarters from "../components/Headquarters"

let body1 = "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."

const About = () => {
    const adress1 = <p>68 Asfordby <br /> Rd Alcaston <br /> SY6 1YA <br /> +44 1241 918425</p>;
    const adress2 = <p>1528 Eglinton Avenue <br /> Toronto <br /> Ontario M4P 1A6 <br /> +1 416 485 2997</p>;
    const adress3 = <p>36 Swanston Street <br /> Kewell <br /> Victoria <br /> +61 4 9928 3629</p>;

  return (
    <div className="p-[25px]">
        <PageCard bgImage={aboutBg} titleFontSize={"28px"} bodyFontSize={"15px"} classes={"h-[400px] mb-[120px]"} title="About us" body={body1}/>
        <PageCard bgImage={aboutBg2} classes={"h-[400px] mb-[48px]"} />
        <div className="mb-[120px] text-center">
            <h2 className="u-h2 text-[30px] mb-[30px]">Our Commitment</h2>
            <p className="text-[15px]">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
        </div>

        <section className="quality text-center text-[#FEFCF7] p-[24px] rounded-lg mb-[240px]" >
            <img src={aboutBg3} alt="" className="rounded-lg mb-[64px] leading-[28px]" />
            <h2 className="heading text-[28px] leading-[28px] mb-[24px]">Uncompromising quality</h2>
            <p className="text-[15px]">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
  consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </section>

        <section className="headquarters text-center">
        <h2 className="text-[24px] heading mb-[72px]">Our Headquarters</h2>
        <Headquarters country="United Kingdom" adress={adress1} image={ukIllustration} />
        <Headquarters country="Canada" adress={adress2} image={canadaIllustration} />
        <Headquarters country="Australia" adress={adress3} image={australiaIllustration} />
        </section>
    </div>
  )
}

export default About