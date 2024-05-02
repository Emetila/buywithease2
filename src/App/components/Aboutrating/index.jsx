import style from './style.module.css';
import SMEActive from '../../assets/Image/about/smeactive.svg';
import MonthlySale from '../../assets/Image/about/monthlysale.svg';
import ActiveCustomer from '../../assets/Image/about/customeractive.svg';
import AnnualGross from '../../assets/Image/about/annualgross.svg'

 
export const Ratings = () => {
    return (<section className={style.wrapper}>
        <div className={style.wrapperbox}>
        <div className={style.wrapone}>
            <img className={style.Image} src={SMEActive} alt="SMEactive" />
            <h5 className={style.heading}>2.5k+</h5>
            <p className={style.description}>SMEs active on our site</p>
        </div>
        <div className={style.wraptwo}>
            <img className={style.Image} src={MonthlySale} alt="Monthly sale" />
            <h5 className={style.heading}>1.1k+</h5>
            <p className={style.description}>Monthly Product Sale</p>
        </div>
        <div className={style.wrapone}>
            <img className={style.Image} src={ActiveCustomer} alt="SMEactive" />
            <h5 className={style.heading}>1.5kk</h5>
            <p className={style.description}>Customer active on our site</p>
        </div>
        <div className={style.wrapone}>
            <img className={style.Image} src={SMEActive} alt="SMEactive" />
            <h5 className={style.heading}>2.5k+</h5>
            <p className={style.description}>Annual gross sale  on our site</p>
        </div>
            {/* {AboutRatings.map((AboutRatings) => (
                <div>
                    <img className={style.Image} src={AboutRatings.Image} />
                    <div>
                        <h5 className={style.heading}>{AboutRatings.title}</h5>
                        <p className={style.description}>{AboutRatings.description}</p>
                    </div>
                </div>
            ))} */}
        </div>
    </section>
    )
}
