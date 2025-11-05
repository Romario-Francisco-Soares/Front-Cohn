<template>
  <footer class="footer">
    <div class="container">
      <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <div class="logo-box">
              <i class="bi bi-stars"></i>
            </div>
            <span class="brand-text">Cohn Technology</span>
          </div>
          <p class="small">
            Transforme sua gestão com o poder da tecnologia moderna.
          </p>
        </div>

        <div class="col-lg-3 col-md-6">
          <h6 class="mb-3">Produtos</h6>
          <ul class="list-unstyled">
            <li v-for="link in productLinks" :key="link.text" class="mb-2">
              <a 
                :href="link.href" 
                class="text-decoration-none small"
                @click="link.type ? ($event.preventDefault(), $emit('open-modal', link.type, link.text)) : null"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h6 class="mb-3">Empresa</h6>
          <ul class="list-unstyled">
            <li v-for="link in companyLinks" :key="link.text" class="mb-2">
              <a 
                href="#" 
                class="text-decoration-none small" 
                @click.prevent="$emit('open-modal', link.type, link.text)"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h6 class="mb-3">Legal</h6>
          <ul class="list-unstyled">
            <li v-for="link in legalLinks" :key="link.text" class="mb-2">
              <a 
                href="#" 
                class="text-decoration-none small"
                @click.prevent="$emit('open-modal', link.type, link.text)"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-top border-secondary pt-4">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p class="small mb-0">© 2025 Cohn Technology. Todos os direitos reservados.</p>
          <div class="d-flex gap-4">
            <a v-for="social in socialLinks" :key="social" href="#" class="text-decoration-none small">
              {{ social }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',

  emits: ['open-modal'],

  setup() {
    const productLinks = [
      { text: 'Recursos', href: '#features' },
      { text: 'Planos', href: '#pricing' },
      { text: 'Segurança', href: '#' },
      { text: 'Roadmap', href: '#', type: 'roadmap' }
    ]
    
    const companyLinks = [
      { text: 'Sobre', type: 'about' },
      { text: 'Carreiras', type: 'careers' },
      { text: 'Contato', type: 'contact' }
    ]
    
    const legalLinks = [
      { text: 'Privacidade', type: 'privacy' },
      { text: 'Termos', type: 'terms' },
      { text: 'Política de Cookies', type: 'cookies' },
      { text: 'Licenças', type: 'license' }
    ]
    
    const socialLinks = ['Instagram', 'LinkedIn', 'WhatsApp']

    return {
      productLinks,
      companyLinks,
      legalLinks,
      socialLinks
    }
  }
}
</script>
