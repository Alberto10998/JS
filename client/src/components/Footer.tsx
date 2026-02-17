import logo from "@/assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <img 
            src={logo}
            alt="J.S. Servicios Logo" 
            className="h-25 w-auto object-contain mx-auto md:mx-0" 
          />
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
