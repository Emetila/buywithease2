import { Footer } from "../../components/Footer"
import { ProductPageHeader } from "../../components/Header/ProductPageHeader/ProductPageHeader";
import style from './style.module.css';
import {ReactComponent as SearchIcon} from "../../assets/Icons/search.svg";
import { CustomButton } from "../../components/Button";
import { BagProductsList } from "../../components/BagProducts";

export const ProductPage = () => {
    return (<section className={style.wrapper}>
        <ProductPageHeader className={style.menu} />
        <div className={style.specialoffer}>
            <h1>Special Offer Get 20% off now</h1>
            <a href="#/">Get it now</a>
        </div>
        <div className={style.seachsection}>
            <div className={style.search}>
                <SearchIcon className={style.icon} />
                <input className={style.input}
                    type="search"
                    name="Search"
                    id="search"
                    placeholder="Search products and categories" />
            </div>
            <CustomButton className={style.button} onClick={()=>{}}>Search</CustomButton>
        </div>
        <div className={style.product}>
            <BagProductsList />
           
        </div>
        <div>
        <Footer />
        </div>
        </section>
    )
}