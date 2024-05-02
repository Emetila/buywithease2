import {ReactComponent as Image} from "../../assets/Image/about-image.svg"
import style from './style.module.css'

export const AboutTitle = () => {
    return (
        <section>
            <div className={style.textbox}>
                <div className={style.textwrap}>
                    <h1 className={style.title}>Our Story</h1>
                <p>Welcome to BuyWithEase, where convenience meets quality. We understand that your time is valuable, and shopping can sometimes be a daunting task. That's why we've made it our mission to create a seamless shopping experience that allows you to find exactly what you need without the hassle.
                    <br />
                    Our journey began with a simple idea: to provide a platform that offers a wide range of products, all in one place, with a focus on customer satisfaction. From the latest tech gadgets to trendy fashion and essential home goods, we've curated an extensive selection to cater to your everyday needs.
                    <br />
                    At BuyWithEase, we believe in the power of choice. Our dedicated team is constantly sourcing high-quality products from trusted suppliers to ensure that you get the best value for your money. We're committed to providing a user-friendly experience, with easy navigation, secure checkout, and responsive customer support.
                    But we're more than just an online store. We're a community that values your feedback and continuously strives to improve. Your satisfaction is our top priority, and we welcome you to join us on this journey of effortless shopping.
                    <br />
                    Experience the ease of shopping with us, and discover why BuyWithEase is the go-to destination for busy individuals like you.</p>
                </div>
                <div className={style.image}>
                    <Image className={style.image} />
                </div>
            </div>
        </section>
    )
}