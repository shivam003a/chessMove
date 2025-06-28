import FAQs from "../components/FAQs";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWork";
import Navbar from "../components/Navbar";

function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <FAQs />
            <Footer />
        </>
    );
}

export default Landing;
