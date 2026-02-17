import { 
  Utensils, Heart, GraduationCap, Scale, Globe, 
  Waves, Leaf, Handshake, ShieldCheck, Zap, 
  Users, Briefcase, Factory, Languages, CloudRain, 
  Sun, Ban
} from "lucide-react";
import { motion } from "framer-motion";

export default function SocialResponsibility() {
  const objectives = [
    { icon: <Ban />, title: "Fin de la Pobreza", id: "1" },
    { icon: <Utensils />, title: "Hambre Cero", id: "2" },
    { icon: <Heart />, title: "Salud y Bienestar", id: "3" },
    { icon: <GraduationCap />, title: "Educación de Calidad", id: "4" },
    { icon: <Languages />, title: "Igualdad de Género", id: "5" },
    { icon: <CloudRain />, title: "Agua Limpia y Saneamiento", id: "6" },
    { icon: <Zap />, title: "Energía Asequible y No Contaminante", id: "7" },
    { icon: <Briefcase />, title: "Trabajo Decente y Crecimiento Económico", id: "8" },
    { icon: <Factory />, title: "Industria, Innovación e Infraestructura", id: "9" },
    { icon: <Users />, title: "Reducción de las Desigualdades", id: "10" },
    { icon: <Sun />, title: "Ciudades y Comunidades Sostenibles", id: "11" },
    { icon: <Leaf />, title: "Producción y Consumo Responsables", id: "12" },
    { icon: <Globe />, title: "Acción por el Clima", id: "13" },
    { icon: <Waves />, title: "Vida Submarina", id: "14" },
    { icon: <Leaf />, title: "Vida de Ecosistemas Terrestres", id: "15" },
    { icon: <ShieldCheck />, title: "Paz, Justicia e Instituciones Sólidas", id: "16" },
    { icon: <Handshake />, title: "Alianzas para lograr los Objetivos", id: "17" },
  ];

  return (
    <section id="responsibility" className="py-24 bg-card/30 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">Compromiso Ético</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Agenda 2030 (ONU)</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Estamos alineados con los Objetivos de Desarrollo Sostenible para garantizar un futuro más justo, equitativo y responsable.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-12">
          {objectives.map((obj, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center space-y-4 basis-[45%] sm:basis-[30%] md:basis-[22%] lg:basis-[15%]"
            >
              <div className="w-20 h-20 rounded-xl bg-card border border-white/10 flex items-center justify-center text-primary group transition-all duration-300 hover:bg-primary hover:text-black hover:border-primary shadow-lg">
                {/* Clone the icon to apply custom sizing */}
                {Object.assign({}, obj.icon, { props: { ...obj.icon.props, className: "w-10 h-10" } })}
              </div>
              <div className="space-y-1">
                <span className="text-primary/50 font-bold text-xs uppercase tracking-tighter">ODS {obj.id}</span>
                <h4 className="text-white text-xs font-semibold leading-tight px-2">{obj.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
