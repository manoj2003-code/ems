import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import HeroSection from "./homePage/components/Hero";
import AboutSection from "./homePage/components/AboutHome";
import FeaturesSection from "./homePage/components/Features";
import TestimonialsSection from "./homePage/components/Testemonial";

export default function Home() {
  return (
   <>
   <HeroSection />
   <AboutSection />
   <FeaturesSection />
   <TestimonialsSection />

   </>
  );
}
