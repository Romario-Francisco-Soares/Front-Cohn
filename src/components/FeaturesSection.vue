<template>
  <section id="features" class="section-features">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="display-5 mb-3">Recursos que fazem a diferença no dia a dia</h2>
        <p class="lead mx-auto" style="max-width: 700px">
          Tudo que sua empresa precisa para crescer, colaborar e alcançar novos patamares.
        </p>
      </div>

      <div class="row g-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="card feature-card h-100">
            <div class="card-body p-4">
              <div 
                class="icon-box mb-3"
                :class="`icon-${feature.color}`"
              >
                <i :class="`bi ${feature.icon}`"></i>
              </div>
              <h5 class="card-title mb-3">{{ feature.title }}</h5>
              <p class="card-text">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',

  setup() {
    const features = [
      {
        icon: 'bi-lightning-charge-fill',
        title: 'Desempenho Rápido',
        description: 'Infraestrutura otimizada e pensada para oferecer velocidade e eficiência em cada operação.',
        color: 'blue'
      },
      {
        icon: 'bi-shield-fill-check',
        title: 'Segurança Garantida',
        description: 'Proteção de nível empresarial com criptografia completa para manter seus dados sempre seguros.',
        color: 'green'
      },
      {
        icon: 'bi-globe',
        title: 'Alcance Nacional',
        description: 'Disponível para empresas de todo o Brasil, com acesso rápido e confiável em qualquer lugar.',
        color: 'blue'
      },
      {
        icon: 'bi-stars',
        title: 'Inteligência Artificial',
        description: 'Cada processo é aprimorado por inteligência artificial, tornando tudo mais rápido, inteligente e simples.',
        color: 'green'
      },
      {
        icon: 'bi-headset',
        title: 'Suporte Dedicado',
        description: 'Suporte real, feito por quem entende de negócios.',
        color: 'blue'
      },
      {
        icon: 'bi-app-indicator',
        title: 'Tudo em Um Só Lugar',
        description: 'Tudo o que você precisa, em um único ambiente. Colabore, personalize e acompanhe tudo em um só lugar.',
        color: 'green'
      }
    ]

    return {
      features
    }
  }
}
</script>
