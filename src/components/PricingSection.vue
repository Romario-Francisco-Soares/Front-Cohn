<template>
  <section id="pricing" class="section-pricing">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="display-5 mb-3">Planos simples e transparentes</h2>
        <p class="lead mx-auto" style="max-width: 700px">
          Escolha o plano ideal para sua empresa. Sem taxas ocultas, sempre preços claros.
        </p>
      </div>

      <div class="row g-4 justify-content-center">
        <div
          v-for="(plan, index) in pricingPlans"
          :key="index"
          class="col-lg-3 col-md-6"
        >
          <div class="card pricing-card h-100" :class="{ 'featured': plan.featured }">
            <div class="card-body p-4">
              <div v-if="plan.featured" class="badge-popular">Mais Popular</div>
              
              <h5 class="card-title mb-3">{{ plan.name }}</h5>
              <div class="mb-3">
                <span class="display-4 gradient-text">{{ plan.price }}</span>
                <span v-if="plan.price !== 'Grátis'"> /profissional</span>
              </div>
              <p class="mb-4">{{ plan.description }}</p>
              
              <button 
                class="btn w-100 mb-4"
                :class="plan.featured ? 'btn-gradient' : 'btn-outline-primary'"
                @click="$emit('open-register')"
              >
                Começar Agora
              </button>

              <ul class="list-unstyled">
                <li v-for="(feature, idx) in plan.features" :key="idx" class="mb-2 d-flex align-items-start">
                  <i class="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0"></i>
                  <span class="small">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingSection',

  emits: ['open-register'],

  setup() {
    const pricingPlans = [
      {
        name: 'Grátis',
        price: 'Grátis',
        description: 'Perfeito para começar e experimentar',
        features: [
          'Até 5 profissionais',
          'Gestão de Ponto',
          'Registro de Ponto por Senha',
          'Relatórios e métricas básicas',
          'Criação de até 3 escalas de trabalho',
          'Suporte dentro da aplicação'
        ],
        featured: false
      },
      {
        name: 'Inicial',
        price: 'R$ 6',
        description: 'Ideal para pequenas equipes',
        features: [
          'Até 10 profissionais',
          'Todos itens do plano Grátis +',
          'Registro de ponto por face (biometria)',
          'Relatórios e métricas intermediárias'
        ],
        featured: false
      },
      {
        name: 'Enterprise',
        price: 'R$ 8',
        description: 'Para empresas em crescimento',
        features: [
          'Até 20 profissionais',
          'Todos os itens do plano Inicial',
          'Registro de ponto web',
          'Relatórios e métricas avançadas'
        ],
        featured: true
      },
      {
        name: 'Livre Demanda',
        price: 'R$ 11',
        description: 'Solução completa para grandes equipes',
        features: [
          'Mais de 20 profissionais',
          'Todos os itens do plano Enterprise',
          'Registro de ponto por crachá',
          'Registro de ponto por digital',
          'Registro de ponto por íris',
          'Relatórios e métricas completas',
          'Suporte por WhatsApp',
          'Suporte por ligação',
          'Necessário contratação de suporte extra'
        ],
        featured: false
      }
    ]

    return {
      pricingPlans
    }
  }
}
</script>
