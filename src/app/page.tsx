import Features from "@/components/sections/Features";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}