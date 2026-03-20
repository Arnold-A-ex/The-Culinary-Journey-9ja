import Hero from "../components/home-components/Hero";
import Quotes from "../components/home-components/Quotes";
import Benefits from "../components/home-components/Benefits";
import MiniAbout from "../components/home-components/MiniAbout";
import MiniTraining from "../components/home-components/MiniTraining";
import PaymentDetails from "../components/PaymentDetails";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <main>
            <Hero />
            <Quotes />
	    <MiniAbout />
            <Benefits />
	    <MiniTraining />
        <PaymentDetails />
	    {/* Call to Action Section */}
            <section className="py-20 bg-secondary text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Start Your Journey?</h2>
                <p className="text-gray-400 mb-10 text-lg">Registration for the 2026 Edition is now open.</p>

                <a href="https://forms.gle/eb9Ud5GbuJGs1A44A" target="_blank" rel="noopener noreferrer" className="bg-primary text-secondary px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition shadow-2xl">
                    Register Now — ₦5,000
                </a>
            </section>
        </main>
        
    )
}

export default Home;