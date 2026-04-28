import React from "react";
import { BENEFITS_CONFIG } from "@/config/plans";

const BenefitsSection: React.FC = () => {
  return (
    <section
      id="beneficios"
      className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-caldeira-900 via-iron-900 to-caldeira-950"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-caldeira">Benefícios</span> para sua
            Empresa
          </h2>
          <p className="text-lg md:text-xl text-caldeira-300 max-w-2xl mx-auto">
            Descubra como podemos transformar sua operação de frota
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {BENEFITS_CONFIG.map((benefit, index) => (
            <div
              key={benefit.id}
              className="card-premium group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-caldeira-300 mb-3 group-hover:text-caldeira-500 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-caldeira-200 leading-relaxed">
                {benefit.description}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-caldeira group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center card-dark">
            <div className="text-4xl md:text-5xl font-bold gradient-text-caldeira mb-2">
              90%
            </div>
            <p className="text-caldeira-300">Redução de Custos</p>
          </div>
          <div className="text-center card-dark">
            <div className="text-4xl md:text-5xl font-bold gradient-text-caldeira mb-2">
              99.9%
            </div>
            <p className="text-caldeira-300">Uptime do Sistema</p>
          </div>
          <div className="text-center card-dark">
            <div className="text-4xl md:text-5xl font-bold gradient-text-caldeira mb-2">
              40%
            </div>
            <p className="text-caldeira-300">Aumento de Eficiência</p>
          </div>
          <div className="text-center card-dark">
            <div className="text-4xl md:text-5xl font-bold gradient-text-caldeira mb-2">
              500+
            </div>
            <p className="text-caldeira-300">Empresas Confiam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
