import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Componente simple para los Iconos SVG
const Icon = ({ name, className }) => {
  switch (name) {
    case 'home':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      );
    case 'calendar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      );
    case 'phone':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      );
    default:
      return null;
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path) => {
    return router.pathname === path
      ? "text-brand-vanilla font-medium border-b-2 border-brand-vanilla"
      : "text-brand-black hover:text-brand-vanilla transition-colors duration-300";
  };

  const getMobileIconClass = (path) => {
    return router.pathname === path ? "text-brand-vanilla" : "text-gray-400";
  };

  return (
    <>
      {/* ==============================================
          1. NAVBAR DESKTOP (Visible solo en md en adelante)
          ============================================== */}
      <nav
        className={`hidden md:flex fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* LOGOTIPO */}
          <Link href="/" className="cursor-pointer flex items-center">
            <Image src="/logo.svg" alt='Logo MFP' width={150} height={50} className='w-auto h-10 md:h-20 object-contain' />
          </Link>

          {/* ENLACES CENTRALES */}
          <div className="flex items-center space-x-8 font-sans text-sm tracking-wide">
            <Link href="/" className={getLinkClass('/')}>INICIO</Link>
            <Link href="/treatments" className={getLinkClass('/treatments')}>TRATAMIENTOS</Link>
            <Link href="/team" className={getLinkClass('/team')}>EQUIPO</Link>
            <Link href="/contact" className={getLinkClass('/contact')}>CONTACTO</Link>
          </div>

          {/* BOTÓN CTA */}
          <div>
            <Link href="/sede">
              <button className="bg-brand-vanilla hover:bg-brand-vanilla-dark text-white px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium tracking-wide">
                ¡Agéndate!
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ==============================================
          2. LOGO MÓVIL SUPERIOR (Solo logo, sin menú)
          ============================================== */}
      <div className={`md:hidden fixed top-0 w-full z-40 transition-all duration-300 flex justify-center py-4 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <Image
          src="/logo.svg" // La misma imagen
          alt="Logotipo MFP"
          width={170}     // Ligeramente más pequeño referencialmente
          height={60}
          className="w-auto h-20 mt-2 object-contain" // h-8 (32px) es ideal para móvil
        />
      </div>

      {/* ==============================================
          3. BOTTOM BAR (Barra inferior tipo App)
          ============================================== */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] pb-safe pt-2 px-6">
        <div className="flex justify-between items-end pb-3">

          {/* INICIO */}
          <Link href="/" className="flex flex-col items-center w-16 group">
            <Icon name="home" className={`w-6 h-6 mb-1 transition-colors ${getMobileIconClass('/')}`} />
            <span className={`text-[10px] font-medium tracking-wide ${getMobileIconClass('/')}`}>Inicio</span>
          </Link>

          {/* EQUIPO */}
          <Link href="/team" className="flex flex-col items-center w-16 group">
            <Icon name="users" className={`w-6 h-6 mb-1 transition-colors ${getMobileIconClass('/team')}`} />
            <span className={`text-[10px] font-medium tracking-wide ${getMobileIconClass('/team')}`}>Equipo</span>
          </Link>

          {/* BOTÓN CENTRAL FLOTANTE (AGENDAR) */}
          <div className="relative -top-5">
            <Link href="/sede">
              <div className="flex flex-col items-center justify-center bg-brand-vanilla text-white w-14 h-14 rounded-full shadow-lg shadow-brand-vanilla/40 transform active:scale-95 transition-transform">
                <Icon name="calendar" className="w-6 h-6" />
              </div>
            </Link>
            {/* Texto debajo del botón flotante */}
            <span className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] font-medium tracking-wide mt-1 ${getMobileIconClass('/agendar')}`}>
              Agendar
            </span>
          </div>

          {/* TRATAMIENTOS (Opcional, o Contacto) */}
          <Link href="/treatments" className="flex flex-col items-center w-16 group">
            {/* Reutilizo icono users como ejemplo, idealmente sería otro */}
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 mb-1 transition-colors ${getMobileIconClass('/treatments')}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
            <span className={`text-[10px] font-medium tracking-wide ${getMobileIconClass('/treatments')}`}>Servicios</span>
          </Link>

          {/* CONTACTO */}
          <Link href="/contact" className="flex flex-col items-center w-16 group">
            <Icon name="phone" className={`w-6 h-6 mb-1 transition-colors ${getMobileIconClass('/contacto')}`} />
            <span className={`text-[10px] font-medium tracking-wide ${getMobileIconClass('/contacto')}`}>Contacto</span>
          </Link>

        </div>
      </nav>
    </>
  );
};

export default Navbar;