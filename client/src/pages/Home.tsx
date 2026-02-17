import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Links from "@/components/Links";
import Environment from "@/components/Environment";
import Blog from "@/components/Blog";
import SocialResponsibility from "@/components/SocialResponsibility";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Links />
      <Environment />
      <Blog />
      <SocialResponsibility />
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
