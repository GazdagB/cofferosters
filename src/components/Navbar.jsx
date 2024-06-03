import Logo from '../assets/shared/desktop/logo.svg'
import Hamburger from '../assets/shared/mobile/icon-hamburger.svg'

const Navbar = () => {
  return (
    <nav className='max-w-[327px] md:max-w-[689px] lg:max-w-[1279px] md:mb-[20px] w-full flex justify-between items-center py-[40px] px-[10px]'>
        <img className='h-[18px]' src={Logo} alt="" />
        <ul className='hidden md:flex gap-10 text-[#83888F] uppercase font-bold text-[12px]'>
          <li><a href="">home</a></li>
          <li><a href="">about us</a></li>
          <li><a href="">create your plan</a></li>
        </ul>
        <img className='md:hidden' src={Hamburger} alt="" />
    </nav>
  )
}

export default Navbar
