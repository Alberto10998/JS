import React, { useEffect, useRef, useState } from 'react';
import logoTarjetaFrontal from "@/assets/images/logo-tarjeta-frontal.png";
import logoTarjetaTrasera from "@/assets/images/logo-tarjeta-trasera.png";

const FloatingCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const scrollActual = window.pageYOffset;
        
        const gradosRotacion = (scrollActual / 500) * 180;
        const rotacionFinal = Math.min(gradosRotacion, 180);
        cardRef.current.style.transform = `rotateY(${rotacionFinal}deg)`;

        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          
          if (rect.top < window.innerHeight - 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`escenario-3d ${!isVisible ? 'fade-out' : ''}`}>
      <div className="tarjeta-flotante">
        <div className="tarjeta-flotante__capas" ref={cardRef}>
          
          <div className="tarjeta-flotante__cara tarjeta-flotante__cara--frontal">
            <img className="w-30 h-auto" src={logoTarjetaFrontal} alt="Logo Frontal" />
          </div>

          <div className="tarjeta-flotante__cara tarjeta-flotante__cara--trasera">
            <img src={logoTarjetaTrasera} className="watermark-image" alt="Marca de agua" />
            
            <div className="contenido-fisico">
              <div className="bloque-encabezado">
                <h2 className="nombre-fisico text-black font-bold">C.P. MARCO A. JIMENEZ H.</h2>
                <p className="puesto-fisico text-gray-700">DIRECTOR</p>
              </div>

              <div className="bloque-contacto text-[10px] leading-tight text-gray-800">
                <p>direccion@jimenezsiller.com.mx</p>
                <p>jsdespacho1960@gmail.com</p>
                <p>Cel: 844.662.03.39</p>
              </div>

              <div className="bloque-direccion text-[10px] leading-tight text-gray-800">
                <p>Centeno 1172-A, Col. Praderas Ote. C.P 25295</p>
                <p>Saltillo Coah.</p>
              </div>
            </div>
            
            <div className="linea-decorativa-oro"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;