import heroImage from "@/assets/images/hero-office.jpeg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Oficina Corporativa Luxury"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>

      <div className="container relative z-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Excelencia y Confianza
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            J.S. SERVICIOS <br /> <span className="text-primary">PROFESIONALES, S.C.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Consultoría integral contable, administrativa, fiscal y legal. 
            Soluciones estratégicas para el cumplimiento de sus obligaciones con ética y profesionalismo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href="#services">
              <Button className="bg-primary text-black hover:bg-primary/90 h-12 px-8 text-base font-semibold w-full sm:w-auto">
                Nuestros Servicios
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black h-12 px-8 text-base font-semibold w-full sm:w-auto">
                Agendar Consulta
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
