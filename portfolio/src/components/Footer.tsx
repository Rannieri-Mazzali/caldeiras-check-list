import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-caldeira-950 border-t border-caldeira-800 py-12 md:py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold gradient-text-caldeira">
                ⚙️
              </div>
              <span className="text-lg font-bold gradient-text-caldeira">
                CALDEIRAS
              </span>
            </div>
            <p className="text-caldeira-300 text-sm">
              Gestão profissional de frota para empresas de transporte
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-caldeira-300 mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#beneficios"
                  className="text-caldeira-400 hover:text-caldeira-500 transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#tecnologia"
                  className="text-caldeira-400 hover:text-caldeira-500 transition-colors"
                >
                  Tecnologia
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  className="text-caldeira-400 hover:text-caldeira-500 transition-colors"
                >
                  Planos
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-caldeira-300 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-caldeira-400 hover:text-caldeira-500 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-caldeira-400 hover:text-caldeira-500 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-caldeira-400 hover:text-caldeira-500 transition-colors"
                >
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-caldeira-300 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-caldeira-400 hover:text-caldeira-500 transition-colors"
                >
                  Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-caldeira-400 hover:text-caldeira-500 transition-colors"
                >
                  Termos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-caldeira-400 hover:text-caldeira-500 transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-caldeira-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-caldeira-400 text-sm">
            © {currentYear} Caldeiras. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-caldeira-400 hover:text-caldeira-500 transition-colors text-xl"
            >
              🐙
            </a>
            <a
              href="#"
              className="text-caldeira-400 hover:text-caldeira-500 transition-colors text-xl"
            >
              𝕏
            </a>
            <a
              href="#"
              className="text-caldeira-400 hover:text-caldeira-500 transition-colors text-xl"
            >
              💼
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
