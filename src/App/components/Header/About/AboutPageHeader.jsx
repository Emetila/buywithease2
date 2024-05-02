import { Logo } from '../../Logo';
import { ReactComponent as SettingIcon } from "../../../assets/Icons/blanklikeicon.svg";
import { ReactComponent as CartIcon } from "../../../assets/Icons/cart.svg"; 
import { ReactComponent as UserImage } from "../../../assets/Image/profile.svg";
import { ReactComponent as DropdownIcon } from "../../../assets/Icons/dropdown.svg";
import "../LandingPageHeader.css"
import { AboutNavigation } from './AboutPageNavigation';
import React from 'react';
import { ReactComponent as Menuicon } from '../../../assets/Icons/menu.svg'

export const AboutPageHeader = () => {
    const [showMenu, setMenu] = React.useState(false);

    const toggleMenu = () => {
        setMenu(showMenu === false)
    }
    return (<header className='header'>
        <div className="logo">
            <Logo useWhite />
        </div>
        <Menuicon className='menu-icon' onClick={toggleMenu} fill='white' />
        <div className='menu'>
            <AboutNavigation className={showMenu ? 'mobile' : ''} />
        </div>
        <div className='signedin'>
            <SettingIcon className='setting' />
            <CartIcon className='cart'onClick={event =>  window.location.href='/cart'}/>
            <div className='usericon'>
                <UserImage/>
                <DropdownIcon />
            </div>
        </div>
    </header>
    )
}