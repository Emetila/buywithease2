import { OurBenefits } from "../../components/Benefits"
import { LandingPageHeader } from "../../components/Header/LandingPageHeader"
import { Hero } from "../../components/Hero"
import { TestimoniesSection } from "../../components/Testimonies"

export const HomePage = () => {
    return (
        <div>
            <LandingPageHeader />
            <Hero />
            <TestimoniesSection />
            <OurBenefits />
        </div>
    )
}