<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <div class="badge-pill mb-4">
            <i class="bi bi-star-fill"></i>
            <span class="ms-2">Novidade: Plano Gratuito</span>
          </div>

          <h1 class="display-3 mb-4 gradient-text">
            Transforme seu negócio com tecnologia
          </h1>

          <p class="lead mb-5">
            Uma startup moderna que transforma desafios reais em soluções simples e poderosas. Seja qual for o tamanho da sua empresa, conte conosco para crescer — juntos.
          </p>

          <div class="d-flex flex-wrap gap-3 mb-5">
            <button class="btn btn-gradient btn-lg">
              Começar Grátis
              <i class="bi bi-arrow-right ms-2"></i>
            </button>
            <button class="btn btn-outline-primary btn-lg">
              Treinamentos
            </button>
          </div>

          <div class="d-flex align-items-center gap-4 flex-wrap">
            <div>
              <div class="d-flex gap-1 mb-2">
                <i v-for="i in 5" :key="i" class="bi bi-star-fill star-rating"></i>
              </div>
              <p class="small mb-0">Nota 5.0 — Confiança total</p>
            </div>
            <div class="vr d-none d-sm-block"></div>
            <div>
              <i class="bi bi-globe-americas fs-4 mb-2 d-block" style="color: var(--color-green);"></i>
              <p class="small mb-0">Usuários ativos em todo o Brasil</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="hero-image-wrapper">
            <div class="gradient-blur"></div>
            <img
              :src="heroImage"
              alt="Modern workspace"
              class="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',

  setup() {
    const heroImage = 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MjAyNzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080'

    return {
      heroImage
    }
  }
}
</script>
