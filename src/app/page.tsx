import Features from "@/components/sections/Features";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
        </main>
    );
}