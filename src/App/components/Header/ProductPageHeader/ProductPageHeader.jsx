import { Logo } from '../../Logo';
import { ProductNavigation } from './ProductPageNavigation';
import { ReactComponent as SettingIcon } from "../../../assets/Icons/blanklikeicon.svg";
import { ReactComponent as CartIcon } from "../../../assets/Icons/cart.svg"; 
import { ReactComponent as UserImgae } from "../../../assets/Image/profile.svg";
import { ReactComponent as DropdownIcon } from "../../../assets/Icons/dropdown.svg";
import "../LandingPageHeader.css"
import { ReactComponent as Menuicon } from '../../../assets/Icons/menu.svg'
import React from 'react';

export const ProductPageHeader = () => {
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
            <ProductNavigation className={showMenu ? 'mobile' : ''} />
        </div>
        <div className='signedin'>
            <SettingIcon className='setting' />
            <CartIcon className='cart'onClick={event =>  window.location.href='/cart'}/>
            <div className='usericon'>
                <UserImgae />
                <DropdownIcon />
            </div>
        </div>
    </header>
    )
}