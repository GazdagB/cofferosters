import logo from '../assets/shared/desktop/logo-white-text.svg'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'

const Footer = () => {
  return (
    <footer className='h-[346px] md:h-[270px] w-[327px] md:w-[688px] bg-[#2C343E] py-[55px] lg:p-0 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:px-[100px] m-[25px] lg:w-[1280px] lg:h-[120px]'>
        <img className='mb-[48px] md:mb-[32px] lg:mb-0' src={logo} alt="" />
        <nav className='mb-[48px] md:mb-[65px] lg:mb-0'>
            <ul className='nav-text text-center flex flex-col md:flex-row justify-center items-center gap-[24px] text-[#83888F] '>
                <li className=''><a href="#" >Home</a></li>
                <li className=''><a href="#">About us</a></li>
                <li className=''><a href="#">Create your plan</a></li>
            </ul>
        </nav>
        <div className="social-links flex gap-[25px]">
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
            </div>
    </footer>
  )
}

export default Footer