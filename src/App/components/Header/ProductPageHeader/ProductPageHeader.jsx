import { Logo } from '../../Logo';
import { ProductNavigation } from './ProductPageNavigation';
import { ReactComponent as SettingIcon } from "../../../assets/Icons/setting.svg";
import { ReactComponent as CartIcon } from "../../../assets/Icons/cart.svg"; 
import { ReactComponent as UserImgae } from "../../../assets/Image/profile.svg";
import { ReactComponent as DropdownIcon } from "../../../assets/Icons/dropdown.svg";
import "../LandingPageHeader.css"

export const ProductPageHeader = () => {
    return (<header className='header'>
        <div className="logo">
            <Logo useWhite />
        </div>
        <div className='menu'>
            <ProductNavigation />
        </div>
        <div className='signedin'>
            <SettingIcon />
            <CartIcon />
            <div className='usericon'>
                <UserImgae />
                <DropdownIcon />
            </div>
        </div>
    </header>
    )
}