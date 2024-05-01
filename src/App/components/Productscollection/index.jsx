import { products } from './product';
import style from './style.module.css';
import { CustomButton } from '../Button';


export const ProductsCollection = () => {
    return (
        <section className={style.collections}>
            <h3>OUR PRODUCTS COLLECTION</h3>
            <div className={style.products}>
                {products.map((products) => (
                    <div>
                        <img className={style.image} src={products.Image} />
                        <div>
                            <h5 className={style.heading}>{products.title}</h5>
                            <p className={style.description}>{products.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <CustomButton className={style.button} onClick={event =>  window.location.href='/product'}>View More</CustomButton>
        </section>
    )
}