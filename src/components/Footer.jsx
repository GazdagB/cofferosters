import logo from '../assets/shared/desktop/logo-white-text.svg'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'

const Footer = () => {
  return (
    <footer className='h-[346px] bg-[#2C343E] py-[55px] gap-[48px] flex flex-col justify-center items-center m-[25px]'>
        <img src={logo} alt="" />
        <nav>
            <ul className='nav-text text-center flex flex-col justify-center items-center gap-[24px] text-[#83888F] '>
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