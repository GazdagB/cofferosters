import Logo from '../assets/shared/desktop/logo.svg'
import Hamburger from '../assets/shared/mobile/icon-hamburger.svg'

const Navbar = () => {
  return (
    <nav className='mb-[40px] flex justify-between items-center p-[25px]'>
        <img className='h-[18px]' src={Logo} alt="" />
        <img src={Hamburger} alt="" />
    </nav>
  )
}

export default Navbar
