/**
 * ARQUIVO DE CONFIGURAÇÃO DOS PLANOS
 * 
 * Edite os valores dos planos conforme necessário.
 * Os valores são exibidos automaticamente no portfólio.
 */

export const PLANS_CONFIG = {
  currency: "R$",
  currencySymbol: "R$",
  billingPeriod: "/mês",

  plans: [
     
    {
      id: "start",
      name: "Plano Start",
      description: "Para frotas em crescimento com necessidades intermediárias",
      monthlyPrice: 1200, // EDITE AQUI - preço mensal
      setupPrice: 9500, // EDITE AQUI - preço de setup/instalação
      features: [
         "Economia com manutenção preventiva",
        "Facilidade de gestão e auditoria de checklists",
        "Histórico completo e confiável",
        "Mais segurança na liberação dos veículos",
        "Aumenta controle da frota",
        "Suporte dedicado",
        "Reduz falhas operacionais",
        "Elimina controles em papel e caderno",
      ],
      highlight: true,
      color: "from-caldeira-600 to-caldeira-700",
    },
    
  ],
};

/**
 * CONFIGURAÇÃO DE BENEFÍCIOS
 * Customize as vantagens do produto
 */
export const BENEFITS_CONFIG = [
  {
    id: 1,
    title: "Redução de Custos",
    description: "Diminua despesas com manutenção preventiva e combustível",
    icon: "💰",
  },
  {
    id: 2,
    title: "Eficiência Operacional",
    description: "Otimize rotas e aumente produtividade em até 40%",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Segurança",
    description: "Monitore condições dos veículos ",
    icon: "🛡️",
  },
   
];

/**
 * CONFIGURAÇÃO DE MÉTRICAS
 * Customize os números apresentados
 */
export const METRICS_CONFIG = {
  costReduction: "95%", // EDITE AQUI - redução de custos
  uptime: "99.9%", // EDITE AQUI - uptime do sistema
  efficiency: "65%", // EDITE AQUI - aumento de eficiência
  companies: "500+", // EDITE AQUI - número de empresas
};
