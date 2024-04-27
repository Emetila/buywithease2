import LogoBlack from '../../assets/Image/logo/logoblack.svg';
import LogoWhite from '../../assets/Image/logo/logowhite.svg';
import style from "./style.module.css";

export function Logo(props) {
    // props useWhite
    if (props.useWhite) {
        const myImage = props.useWhite ? LogoBlack : LogoWhite
        return (
            <a href='#/dasboard' className= {style.logo}>
                <img src={myImage} alt="Black logo" />   
            </a>
        )
    } else {
        const myImage = props.useBlack ? LogoBlack : LogoWhite
        return (
            <a href='#/dasboard' className= {style.logo}>
                <img src={myImage} alt="Whhite logo" /> 
            </a>
        )
    }
}