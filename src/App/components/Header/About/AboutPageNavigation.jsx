

export const AboutNavigation = (props) => {
    return (<>
            <ul className={props.className}>
                <li>
                    <a  href="/">Home</a>
                </li>
                <li>
                    <a href="/product" reloadDocument>Product</a>
                </li>
                <li>
                    <a href="#/Testimonies">Testimonies</a>
                </li>
                <li><a href="#/Benefits">Benefits</a></li>
                <li>
                    <a className="active" href="/about">About</a>
                </li>
                <li>
                    <a href="#/Support">Support</a>
                </li>
            </ul>
            </>
    )
}