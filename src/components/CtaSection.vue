<template>
  <section class="section-cta">
    <div class="container">
      <div class="cta-box rounded-4 p-5 text-center text-white position-relative overflow-hidden">
        <div class="cta-decoration"></div>
        
        <div class="position-relative">
          <h2 class="display-5 mb-3">Pronto para começar?</h2>
          <p class="lead mb-5 opacity-90 mx-auto" style="max-width: 600px">
            Não fique de fora, permita que sua empresa cresça junto ao mercado como nós!
          </p>
          
          <div class="d-flex flex-wrap gap-3 justify-content-center">
            <button class="btn btn-light btn-lg" @click="$emit('open-register')">
              Começar Grátis
              <i class="bi bi-arrow-right ms-2"></i>
            </button>
            <button class="btn btn-outline-light btn-lg" @click="$emit('open-contact')">
              Falar com Vendas
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection',
  emits: ['open-register', 'open-contact']
}
</script>
