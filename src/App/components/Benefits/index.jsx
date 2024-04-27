import style from './style.module.css';
import { benefits } from './benefit';

export const OurBenefits = () => {
    return (<section className={style.wrapper}>
        <div className={style.text}>
            <h2 className={style.title}>Our benefits </h2>
        </div>
        <div className={style.benefits}>
            {benefits.map((benefits) => (
                <div>
                    <img className={style.Image} src={benefits.Image} />
                    <div>
                        <h5 className={style.heading}>{benefits.title}</h5>
                        <p className={style.description}>{benefits.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    )
}
