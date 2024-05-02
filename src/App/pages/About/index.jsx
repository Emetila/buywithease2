import { Ratings } from "../../components/Aboutrating";
import { AboutTitle } from "../../components/abouttitle";
import { Footer } from "../../components/Footer";
import { AboutPageHeader } from "../../components/Header/About/AboutPageHeader";

const About = () => {
    return ( 
        <div>
            <AboutPageHeader />
            <AboutTitle />
            <Ratings />
            <Footer />
        </div>
     );
}
 
export default About;