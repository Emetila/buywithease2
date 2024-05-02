import React from "react";
import { Link } from "react-router-dom";

export const HeaderNavigation = (props) => {
    return (<nav>
            <ul className={props.className}>
                <li>
                    <Link className="active" to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product" reloadDocument>Product</Link>
                </li>
                <li>
                    <Link to="#/Testimonies">Testimonies</Link>
                </li>
                <li><Link to="#/Benefits">Benefits</Link></li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="#/Support">Support</Link>
                </li>
            </ul>
            </nav>
    )
}