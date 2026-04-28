import React, { useState, useEffect } from "react";

interface NavLink {
  id: string;
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { id: "beneficios", label: "Benefícios", href: "#beneficios" },
    { id: "tecnologia", label: "Tecnologia", href: "#tecnologia" },
    { id: "planos", label: "Planos", href: "#planos" },
    { id: "contato", label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-caldeira-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="text-2xl md:text-3xl font-bold gradient-text-caldeira group-hover:scale-110 transition-transform">
            ⚙️
          </div>
          <span className="text-lg md:text-xl font-bold gradient-text-caldeira hidden sm:inline">
            CALDEIRAS
          </span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-caldeira-300 hover:text-caldeira-500 transition-colors duration-300 font-semibold text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block btn-primary text-sm">
          Começar Agora
        </button>

        {/* Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-caldeira-300 text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-caldeira-950/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-caldeira-300 hover:text-caldeira-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="btn-primary text-sm w-full">
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
