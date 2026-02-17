import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Links() {
  const links = [
    { name: "BANXICO", url: "https://www.banxico.org.mx/" },
    { name: "SAT", url: "https://www.sat.gob.mx/" },
    { name: "IMSS", url: "https://www.imss.gob.mx/" },
    { name: "INFONAVIT", url: "https://www.infonavit.org.mx/" },
    { name: "FONACOT", url: "https://www.fonacot.gob.mx/" },
    { name: "PAGAFACIL", url: "https://www.pagafacil.gob.mx/" },
    { name: "BURO DE CRÉDITO", url: "https://www.burodecredito.com.mx/" },
    { name: "STPS", url: "https://www.gob.mx/stps" },
    { name: "COPARMEX", url: "https://coparmex.org.mx/" },
    { name: "RODRIGO PACHECO", url: "https://www.rodrigopacheco.mx/" },
    { name: "LISR", url: "#" },
    { name: "CFF", url: "#" },
    { name: "LIVA", url: "#" },
    { name: "MISCELEÁNEA FISCAL", url: "#" },
  ];

  return (
    <section id="links" className="py-16 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-3xl uppercase tracking-widest mb-10 font-medium">
          Enlaces de Interés Institucional
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {links.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              className="bg-transparent border-white/10 text-gray-400 hover:text-primary hover:border-primary h-14 px-8 text-sm font-semibold tracking-wider min-w-[160px] flex items-center gap-2 group transition-all"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
