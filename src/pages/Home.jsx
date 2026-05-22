import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Marquee from "../components/landing/Marquee";
import BrandStory from "../components/landing/BrandStory";
import MenuShowcase from "../components/landing/MenuShowcase";
import StarMomentSection from "../components/landing/StarMomentSection";
import BrandStrength from "../components/landing/BrandStrength";
import Outlets from "../components/landing/Outlets";
import Channels from "../components/landing/Channels";
import Franchise from "../components/landing/Franchise";
import ContactForm from "../components/landing/ContactForm";
import Footer from "../components/landing/Footer";

export default function Home() {
    return (
        <div className="bg-cream text-obsidian font-sans overflow-x-hidden">
            <Navbar />
            <Hero />
            <Marquee />
            <BrandStory />
            <MenuShowcase />
            <StarMomentSection />
            <BrandStrength />
            <Outlets />
            <Channels />
            <Franchise />
            <ContactForm />
            <Footer />
        </div>
    );
}
