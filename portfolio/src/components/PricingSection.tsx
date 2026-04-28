import React from "react";
import { PLANS_CONFIG } from "@/config/plans";

const PricingSection: React.FC = () => {
  return (
    <section
      id="planos"
      className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-caldeira-950 via-iron-900 to-caldeira-900"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 animate-slide-in-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Planos <span className="gradient-text-caldeira"></span>
          </h2>
          <p className="text-lg md:text-xl text-caldeira-300 max-w-2xl mx-auto">
            Escolha o plano perfeito para sua frota
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {PLANS_CONFIG.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? "md:scale-105 shadow-2xl"
                  : "hover:shadow-lg"
              }`}
            >
              {/* Badge highlight */}
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-caldeira text-white px-4 py-2 rounded-bl-lg font-bold text-sm">
                  RECOMENDADO
                </div>
              )}

              <div
                className={`bg-gradient-to-br ${plan.color} p-8 md:p-10 h-full flex flex-col`}
              >
                {/* Plan name and description */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-caldeira-200 mb-8 text-sm md:text-base flex-grow">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8 border-b border-caldeira-500/30 pb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {PLANS_CONFIG.currency}
                      {plan.monthlyPrice.toLocaleString("pt-BR")}
                    </span>
                    <span className="text-caldeira-200 ml-2">
                      {PLANS_CONFIG.billingPeriod}
                    </span>
                  </div>
                  {plan.setupPrice > 0 && (
                    <p className="text-sm text-caldeira-300 mt-2">
                      + {PLANS_CONFIG.currency}
                      {plan.setupPrice.toLocaleString("pt-BR")} de instalação
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-white text-sm md:text-base"
                    >
                      <span className="text-caldeira-300 mr-3 font-bold">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all duration-300 ${
                    plan.highlight
                      ? "bg-white text-caldeira-900 hover:shadow-lg hover:scale-105"
                      : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                  }`}
                >
                  Começar Agora
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-caldeira-300 mb-6 text-lg">
            Dúvidas sobre qual plano escolher?
          </p>
          <button className="btn-secondary">
            Fale com nosso time de vendas
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
