import { Scale, Users, ShieldCheck, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Justicia",
      description: "Equidad y rectitud en cada decisión y asesoría."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Solidaridad",
      description: "Compromiso real con el bienestar de nuestros clientes."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Honestidad",
      description: "Transparencia absoluta en todos nuestros procesos."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Disciplina",
      description: "Constancia y rigor profesional en nuestro servicio."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-primary uppercase tracking-widest text-sm font-semibold mb-2">Sobre Nosotros</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Trayectoria y Excelencia</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Somos una Firma constituida desde 2016. Especialistas altamente calificados brindando soluciones integrales a personas físicas y morales en materia contable, administrativa e impuestos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 border-l-2 border-primary/20 pl-6">
              <div>
                <h4 className="text-xl font-serif text-white mb-2">Nuestra Misión</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Brindar soluciones integrales en consultoría contable y legal que garanticen la tranquilidad y el crecimiento de nuestros clientes, actuando siempre bajo el marco legal vigente.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-serif text-white mb-2">Nuestra Visión</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Consolidarnos como la firma líder en el norte de México, reconocida por nuestra ética, capacidad de respuesta y alianzas estratégicas globales.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-white/5 hover:border-primary/50 transition-colors duration-300">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10 mb-2">
                      {val.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white font-serif">{val.title}</h4>
                    <p className="text-sm text-gray-400">{val.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
