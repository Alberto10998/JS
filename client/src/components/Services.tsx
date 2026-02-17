import { Calculator, Gavel, Globe, HandCoins } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  const services = [
    {
      icon: <Calculator className="w-10 h-10 text-primary" />,
      title: "Contabilidad y Fiscal",
      description: "Consultoría experta, cálculo preciso de obligaciones, gestión de devoluciones de I.V.A. y análisis financiero profundo para la toma de decisiones.",
      badges: ["Impuestos", "Auditoría", "Finanzas"]
    },
    {
      icon: <Gavel className="w-10 h-10 text-primary" />,
      title: "Servicios Legales",
      description: "Defensa y asesoría jurídica especializada en las ramas Mercantil, Civil y Laboral. Protección integral para su patrimonio y empresa.",
      badges: ["Mercantil", "Civil", "Laboral"]
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Comercio Exterior",
      description: "Apoyo logístico estratégico, gestión de trámites de importación y exportación, asegurando el cumplimiento normativo internacional.",
      badges: ["Logística", "Import/Export", "Aduanas"]
    },
    {
      icon: <HandCoins className="w-10 h-10 text-primary" />,
      title: "Créditos PyMES",
      description: "Asesoría y gestión para la obtención de financiamiento y créditos empresariales destinados al crecimiento y desarrollo de PyMES.",
      badges: ["Financiamiento", "Gestión", "Crecimiento"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">Nuestras Soluciones</h2>
          <h3 className="text-4xl font-serif font-bold text-white mb-4">Servicios Profesionales Integrales</h3>
          <p className="text-gray-400">
            Estrategias diseñadas a medida para garantizar el cumplimiento y potenciar el crecimiento de su organización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="bg-card border-white/5 hover:border-primary hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
              <CardHeader className="pt-8 px-8">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-serif text-white group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex-grow flex flex-col justify-between">
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="bg-background text-gray-300 hover:bg-primary hover:text-black transition-colors text-xs font-normal">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            "Siempre apegados al marco legal, con actualización constante."
          </p>
        </div>
      </div>
    </section>
  );
}
