import NavStyle from '../styles/NavBarStyle.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto, Montserrat, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import HamburgerMenu from './hamburgerMenu'

const albula = localFont({
    src: '../fonts/serpentype-albula-pro-bold.otf',
    weight: '500'
})

const NavBar = () => {

    return(
        <div className={albula.className}>
            <div className={NavStyle.navContainer}>
                <div className={NavStyle.brandingContainer}>
                    <Image src="/Gibraltar.svg" width={75} height={75} className={NavStyle.logoMobile}></Image>
                    
                    <Image src="/Gibraltar.svg" width={90} height={90} className={NavStyle.logoDesktop}></Image>
                
                    <h1 className={NavStyle.brandName}>Gibraltr</h1>
                </div>
                <div className={NavStyle.hamburgerMenu}>
                    <HamburgerMenu></HamburgerMenu>
                </div>
                <ul className={NavStyle.navItems}>
                    <Link className={NavStyle.navItem} href="/">Find Visas</Link>
                    <Link className={NavStyle.navItem} href="/about">About</Link>
                    <Link className={NavStyle.navItem} href="/faq">FAQ</Link>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;