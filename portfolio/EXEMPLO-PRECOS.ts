/**
 * EXEMPLO DE CONFIGURAÇÃO PREENCHIDA
 * 
 * Copie e cole os valores abaixo em config/plans.ts
 * SUBSTITUA OS VALORES PELOS SEUS!
 * 
 * Este arquivo mostra COMO PREENCHER, não é o arquivo real.
 * O arquivo real é: config/plans.ts
 */

// ============================================
// EXEMPLO 1: PREÇOS SIMPLES
// ============================================

export const PLANS_CONFIG_EXAMPLE_1 = {
  currency: "R$",
  billingPeriod: "/mês",

  plans: [
    {
      id: "simples",
      name: "Plano Simples",
      description: "Para empresas iniciando na gestão de frota",
      monthlyPrice: 99,          // ✅ EXEMPLO: R$ 99/mês
      setupPrice: 500,           // ✅ EXEMPLO: R$ 500 de setup
      features: [
        "Até 5 caminhões",
        "Checklist básico",
        "Relatórios simples",
        "Suporte por email",
        "Aplicativo mobile",
      ],
      highlight: false,
      color: "from-iron-600 to-iron-700",
    },
    {
      id: "start",
      name: "Plano Start",
      description: "Para frotas em crescimento",
      monthlyPrice: 299,         // ✅ EXEMPLO: R$ 299/mês
      setupPrice: 1000,          // ✅ EXEMPLO: R$ 1.000 de setup
      features: [
        "Até 30 caminhões",
        "Checklists avançados",
        "Relatórios detalhados",
        "Integração com GPS",
        "Suporte 24/7",
        "Histórico completo",
        "Análises em tempo real",
      ],
      highlight: true,
      color: "from-caldeira-600 to-caldeira-700",
    },
    {
      id: "premium",
      name: "Plano Premium",
      description: "Para grandes frotas",
      monthlyPrice: 999,         // ✅ EXEMPLO: R$ 999/mês
      setupPrice: 2500,          // ✅ EXEMPLO: R$ 2.500 de setup
      features: [
        "Caminhões ilimitados",
        "Checklists customizados",
        "API completa",
        "Integração avançada",
        "Análise preditiva",
        "Suporte dedicado",
        "Treinamento da equipe",
        "SLA garantido 99.9%",
        "Consultoria estratégica",
      ],
      highlight: false,
      color: "from-caldeira-800 to-caldeira-900",
    },
  ],
};

// ============================================
// EXEMPLO 2: PREÇOS ALTERNATIVOS (Mais caros)
// ============================================

export const PLANS_CONFIG_EXAMPLE_2 = {
  currency: "R$",
  billingPeriod: "/mês",

  plans: [
    {
      id: "simples",
      name: "Plano Simples",
      description: "Para empresas iniciando",
      monthlyPrice: 149,         // ✅ Versão mais cara
      setupPrice: 750,
      features: [
        "Até 5 caminhões",
        "Checklist básico",
        "Relatórios simples",
        "Suporte por email",
        "Aplicativo mobile",
      ],
      highlight: false,
      color: "from-iron-600 to-iron-700",
    },
    {
      id: "start",
      name: "Plano Start",
      description: "Para frotas em crescimento",
      monthlyPrice: 449,         // ✅ Versão mais cara
      setupPrice: 1500,
      features: [
        "Até 30 caminhões",
        "Checklists avançados",
        "Relatórios detalhados",
        "Integração com GPS",
        "Suporte 24/7",
        "Histórico completo",
        "Análises em tempo real",
      ],
      highlight: true,
      color: "from-caldeira-600 to-caldeira-700",
    },
    {
      id: "premium",
      name: "Plano Premium",
      description: "Para grandes frotas",
      monthlyPrice: 1499,        // ✅ Versão mais cara
      setupPrice: 3500,
      features: [
        "Caminhões ilimitados",
        "Checklists customizados",
        "API completa",
        "Integração avançada",
        "Análise preditiva",
        "Suporte dedicado",
        "Treinamento da equipe",
        "SLA garantido 99.9%",
        "Consultoria estratégica",
      ],
      highlight: false,
      color: "from-caldeira-800 to-caldeira-900",
    },
  ],
};

// ============================================
// EXEMPLO 3: PREÇOS ECONÔMICOS
// ============================================

export const PLANS_CONFIG_EXAMPLE_3 = {
  currency: "R$",
  billingPeriod: "/mês",

  plans: [
    {
      id: "simples",
      name: "Plano Simples",
      description: "Para empresas iniciando",
      monthlyPrice: 49,          // ✅ Preço baixo
      setupPrice: 199,
      features: [
        "Até 5 caminhões",
        "Checklist básico",
        "Relatórios simples",
        "Suporte por email",
        "Aplicativo mobile",
      ],
      highlight: false,
      color: "from-iron-600 to-iron-700",
    },
    {
      id: "start",
      name: "Plano Start",
      description: "Para frotas em crescimento",
      monthlyPrice: 149,         // ✅ Preço baixo
      setupPrice: 499,
      features: [
        "Até 30 caminhões",
        "Checklists avançados",
        "Relatórios detalhados",
        "Integração com GPS",
        "Suporte 24/7",
        "Histórico completo",
        "Análises em tempo real",
      ],
      highlight: true,
      color: "from-caldeira-600 to-caldeira-700",
    },
    {
      id: "premium",
      name: "Plano Premium",
      description: "Para grandes frotas",
      monthlyPrice: 349,         // ✅ Preço baixo
      setupPrice: 999,
      features: [
        "Caminhões ilimitados",
        "Checklists customizados",
        "API completa",
        "Integração avançada",
        "Análise preditiva",
        "Suporte dedicado",
        "Treinamento da equipe",
        "SLA garantido 99.9%",
        "Consultoria estratégica",
      ],
      highlight: false,
      color: "from-caldeira-800 to-caldeira-900",
    },
  ],
};

// ============================================
// EXEMPLO 4: SEM CUSTO DE SETUP
// ============================================

export const PLANS_CONFIG_EXAMPLE_4 = {
  currency: "R$",
  billingPeriod: "/mês",

  plans: [
    {
      id: "simples",
      name: "Plano Simples",
      description: "Para empresas iniciando",
      monthlyPrice: 99,
      setupPrice: 0,             // ✅ Sem custo de setup
      features: [
        "Até 5 caminhões",
        "Checklist básico",
        "Relatórios simples",
        "Suporte por email",
        "Aplicativo mobile",
      ],
      highlight: false,
      color: "from-iron-600 to-iron-700",
    },
    {
      id: "start",
      name: "Plano Start",
      description: "Para frotas em crescimento",
      monthlyPrice: 299,
      setupPrice: 0,             // ✅ Sem custo de setup
      features: [
        "Até 30 caminhões",
        "Checklists avançados",
        "Relatórios detalhados",
        "Integração com GPS",
        "Suporte 24/7",
        "Histórico completo",
        "Análises em tempo real",
      ],
      highlight: true,
      color: "from-caldeira-600 to-caldeira-700",
    },
    {
      id: "premium",
      name: "Plano Premium",
      description: "Para grandes frotas",
      monthlyPrice: 999,
      setupPrice: 0,             // ✅ Sem custo de setup
      features: [
        "Caminhões ilimitados",
        "Checklists customizados",
        "API completa",
        "Integração avançada",
        "Análise preditiva",
        "Suporte dedicado",
        "Treinamento da equipe",
        "SLA garantido 99.9%",
        "Consultoria estratégica",
      ],
      highlight: false,
      color: "from-caldeira-800 to-caldeira-900",
    },
  ],
};

// ============================================
// MÉTRICAS - EXEMPLOS
// ============================================

// Exemplo conservador:
export const METRICS_EXAMPLE_1 = {
  costReduction: "30%",
  uptime: "99.5%",
  efficiency: "25%",
  companies: "150+",
};

// Exemplo agressivo:
export const METRICS_EXAMPLE_2 = {
  costReduction: "60%",
  uptime: "99.99%",
  efficiency: "55%",
  companies: "1000+",
};

// Exemplo realista:
export const METRICS_EXAMPLE_3 = {
  costReduction: "45%",
  uptime: "99.9%",
  efficiency: "40%",
  companies: "500+",
};

// ============================================
// COMO USAR ESTE ARQUIVO?
// ============================================

/**
 * 1. ESCOLHA UM EXEMPLO ACIMA
 * 
 * 2. COPIE TODO O OBJETO plans (começando em "plans: [")
 * 
 * 3. VIRE PARA: config/plans.ts
 * 
 * 4. SUBSTITUA O OBJETO plans PELO QUE COPIOU
 * 
 * 5. TAMBÉM EDITE METRICS_CONFIG (opcional)
 * 
 * 6. SALVE O ARQUIVO
 * 
 * 7. EXECUTE: npm run dev
 * 
 * 8. VERIFIQUE OS PREÇOS NO NAVEGADOR
 * 
 * SE ESTIVER CORRETO: Faça deploy!
 * SE NÃO: Edite novamente e salve
 */

// ============================================
// PADRÃO RECOMENDADO
// ============================================

/**
 * Para melhor conversão, recomenda-se:
 * 
 * 1. Plano Simples: Preço baixo (isca)
 *    - Benefício: Atrair clientes iniciantes
 *    - Sugestão: 20-30% do preço do Start
 * 
 * 2. Plano Start: Preço médio (destaque)
 *    - Benefício: Melhor relação custo/benefício
 *    - Sugestão: Marcar como "highlight: true"
 * 
 * 3. Plano Premium: Preço alto (valor)
 *    - Benefício: Atender grandes clientes
 *    - Sugestão: 3-4x o preço do Simples
 * 
 * Exemplo:
 * - Simples: R$ 99/mês
 * - Start: R$ 299/mês (3x mais = 202%)
 * - Premium: R$ 999/mês (10x mais = 909%)
 */

export default PLANS_CONFIG_EXAMPLE_1;
