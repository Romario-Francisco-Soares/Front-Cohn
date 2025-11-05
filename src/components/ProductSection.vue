<template>
  <section id="product" class="section-product">
    <div class="container">
      <!-- First Product Block -->
      <div class="row align-items-center g-5 mb-6">
        <div class="col-lg-6 order-lg-1">
          <img
            :src="productImage1"
            alt="Gestão de ponto inteligente"
            class="img-fluid rounded-4 shadow-lg"
          />
        </div>
        
        <div class="col-lg-6 order-lg-2">
          <h2 class="display-6 mb-4">Feito para quem busca resultados, não complexidade</h2>
          <p class="lead mb-4">
            Nossa plataforma intuitiva facilita o trabalho de qualquer equipe, com recursos poderosos que atendem desde pequenas até grandes empresas.
          </p>
          
          <ul class="list-unstyled">
            <li v-for="(item, index) in productFeatures" :key="index" class="mb-3 d-flex align-items-center">
              <div class="check-icon me-3">
                <i class="bi bi-arrow-right"></i>
              </div>
              <span>{{ item }}</span>
            </li>
          </ul>

          <button class="btn btn-gradient mt-3">
            Saiba Mais
            <i class="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </div>

      <!-- Product Carousel -->
      <div class="row mb-6">
        <div class="col-12">
          <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button
                v-for="(product, index) in carouselProducts"
                :key="index"
                type="button"
                data-bs-target="#productCarousel"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                :aria-current="index === 0"
                :aria-label="`Slide ${index + 1}`"
              ></button>
            </div>
            <div class="carousel-inner rounded-4 shadow-lg">
              <div
                v-for="(product, index) in carouselProducts"
                :key="index"
                class="carousel-item"
                :class="{ active: index === 0 }"
              >
                <img :src="product.image" class="d-block w-100" :alt="product.title" style="height: 500px; object-fit: cover;">
                <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 p-3">
                  <h5>{{ product.title }}</h5>
                  <p>{{ product.description }}</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Second Product Block -->
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <h2 class="display-6 mb-4">Métricas que impulsionam decisões</h2>
          <p class="lead mb-4">
            Tome decisões baseadas em dados reais com nossas análises completas. Acompanhe o que importa e otimize seus resultados.
          </p>
          
          <div class="row g-3">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="col-6"
            >
              <div class="stat-card p-4 rounded-3">
                <p class="fs-2 mb-1 gradient-text">{{ stat.value }}</p>
                <p class="mb-0">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <img
            :src="productImage2"
            alt="Dashboard de análises"
            class="img-fluid rounded-4 shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductSection',

  setup() {
    const productImage1 = 'https://images.unsplash.com/photo-1646038572816-04ab3ff22b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyMDAwMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    const productImage2 = 'https://images.unsplash.com/photo-1744819181935-edb1c6924d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduZHwxfHx8fDE3NjE5OTkyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080'

    const productFeatures = [
      'Colaboração em tempo real com sua equipe',
      'Opções avançadas de personalização',
      'Visualize relatórios e dados diretamente na plataforma'
    ]

    const carouselProducts = [
      {
        title: 'Software para totens de Registro de ponto',
        description: 'Sistema completo para totens de autoatendimento com interface moderna e intuitiva',
        image: 'https://images.unsplash.com/photo-1742796674961-a5e833a6f0c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwc2VydmljZSUyMGtpb3NrJTIwdG91Y2hzY3JlZW58ZW58MXx8fHwxNzYyMTc5MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'Registro de ponto em crachá',
        description: 'Controle de ponto prático e seguro através de crachá corporativo',
        image: 'https://images.unsplash.com/photo-1731834452840-2ff77b3140bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMGJhZGdlJTIwY2FyZCUyMHJlYWRlcnxlbnwxfHx8fDE3NjIxNzkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'Registro de ponto em digital',
        description: 'Tecnologia biométrica de ponta para registro de ponto por impressão digital',
        image: 'https://images.unsplash.com/photo-1620423855978-e5d74a7bef30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5nZXJwcmludCUyMGJpb21ldHJpYyUyMHNjYW5uZXJ8ZW58MXx8fHwxNzYyMTM4NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'Gestão de ponto',
        description: 'Dashboard completo para RH acompanhar e gerenciar todos os registros de ponto',
        image: 'https://images.unsplash.com/photo-1623658877772-69ae99a89304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxociUyMG1hbmFnZXIlMjBsYXB0b3AlMjBvZmZpY2V8ZW58MXx8fHwxNzYyMTc5MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]

    const stats = [
      { label: 'Disponibilidade', value: '99.9%' },
      { label: 'Tempo de Resposta', value: '<100ms' },
      { label: 'Estados Atendidos', value: '27' },
      { label: 'Registros/Mês', value: '1M+' }
    ]

    return {
      productImage1,
      productImage2,
      productFeatures,
      carouselProducts,
      stats
    }
  }
}
</script>
