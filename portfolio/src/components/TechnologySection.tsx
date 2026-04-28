/*
import React, { useState } from "react";
import { motion } from "framer-motion";

const TechnologySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 0,
      title: "Mobile App",
      icon: "📱",
      description:
        "Aplicativo nativo para iOS e Android com sincronização em tempo real",
      features: ["Offline-first", "Sincronização automática", "Notificações push"],
    },
    {
      id: 1,
      title: "Dashboard",
      icon: "📊",
      description: "Painel intuitivo com métricas, gráficos e relatórios",
      features: ["Análise em tempo real", "Exportar relatórios", "Customizável"],
    },
    {
      id: 2,
      title: "API REST",
      icon: "⚡",
      description: "API completa para integrar com seus sistemas",
      features: ["Documentação Swagger", "Webhooks", "Rate limiting"],
    },
    {
      id: 3,
      title: "3D Visualization",
      icon: "🎮",
      description: "Visualize sua frota em tempo real com tecnologia 3D",
      features: ["Raio-X de veículos", "Monitoramento GPS", "Alertas em mapa"],
    },
  ];

  return (
    <section
      id="tecnologia"
      className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-caldeira-900 via-iron-900 to-caldeira-950"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */ /*} 
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnologia <span className="gradient-text-caldeira">Avançada</span>
          </h2>
          <p className="text-lg md:text-xl text-caldeira-300 max-w-2xl mx-auto">
            Plataforma moderna construída com as melhores tecnologias
          </p>
        </div>

       

        {/* Feature Tabs */ /*}
        <div className="bg-gradient-to-br from-caldeira-800/50 to-iron-800/50 rounded-xl p-8 md:p-12">
          {/* Tab Buttons */ /* }
          <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(tech.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tech.id
                    ? "bg-gradient-caldeira text-white shadow-lg"
                    : "bg-iron-700 text-caldeira-300 hover:bg-caldeira-700"
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>

          {/* Tab Content */ /*}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-caldeira-300">
                {technologies[activeTab].title}
              </h4>
              <p className="text-caldeira-200 text-lg leading-relaxed">
                {technologies[activeTab].description}
              </p>
              <ul className="space-y-3">
                {technologies[activeTab].features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-caldeira-300"
                  >
                    <span className="text-caldeira-500 mr-3 text-xl">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
