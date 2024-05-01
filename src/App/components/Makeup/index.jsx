import style from './style.module.css';
import { Title } from './title';
import { makeupProducts} from './product';
import { ReactComponent as FirstArrow } from "../../assets/Icons/doublepreviousarrow.svg";
import { ReactComponent as NextArrow } from "../../assets/Icons/nextarrow.svg";
import { ReactComponent as LastArrow } from "../../assets/Icons/lastarrow.svg";
import { ReactComponent as PreviousArrow } from "../../assets/Icons/previousarrow.svg";
import { CustomButton } from '../Button';

export const MakeupProducts = () => {
    return (
        <section>
            <Title />
            <div className={style.products}>
            {makeupProducts.map((makeupProducts) => (
                <div>
                    <div>
                        <img className={style.Image} src={makeupProducts.Image} />
                    </div>
                    <div className={style.wrap}>
                        <div className={style.name}>
                                <h5 className={style.heading}>{makeupProducts.title}</h5>
                            <div className={style.amount}>
                                <p className={style.money}>{makeupProducts.amount}</p>
                                <img className={style.rating} src={makeupProducts.rating} />
                            </div>
                        </div>
                        <CustomButton className={style.button} onClick={() => { }}>Add to cart</CustomButton>
                    </div>
                </div>
            ))}
        </div>
        <div className={style.direction}>
            <FirstArrow />
            <NextArrow />
            <h5 className={style.number}>1 <span className={style.next}>2 3</span></h5>
            <PreviousArrow />
            <LastArrow />
        </div>
        </section>
    )
}