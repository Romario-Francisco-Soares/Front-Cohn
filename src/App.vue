<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }">
    <!-- Navigation -->
    <NavigationBar 
      :isDarkMode="isDarkMode"
      @toggle-theme="toggleTheme"
      @open-signin="openSignInModal"
    />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section -->
    <FeaturesSection />

    <!-- Product Showcase -->
    <ProductSection />

    <!-- Pricing Section -->
    <PricingSection @open-register="openRegisterModal" />

    <!-- CTA Section -->
    <CtaSection 
      @open-register="openRegisterModal"
      @open-contact="openContactModal"
    />

    <!-- Footer -->
    <FooterSection @open-modal="openInfoModal" />

    <!-- Modals -->
    <SignInModal 
      :isOpen="modals.signIn"
      @close="modals.signIn = false"
      @submit="handleSignIn"
    />

    <RegisterModal 
      :isOpen="modals.register"
      @close="modals.register = false"
      @submit="handleRegister"
    />

    <InfoModal 
      :isOpen="modals.info"
      :type="modalInfo.type"
      :title="modalInfo.title"
      @close="modals.info = false"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ProductSection from './components/ProductSection.vue'
import PricingSection from './components/PricingSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'
import SignInModal from './components/SignInModal.vue'
import RegisterModal from './components/RegisterModal.vue'
import InfoModal from './components/InfoModal.vue'

export default {
  name: 'App',
  
  components: {
    NavigationBar,
    HeroSection,
    FeaturesSection,
    ProductSection,
    PricingSection,
    CtaSection,
    FooterSection,
    SignInModal,
    RegisterModal,
    InfoModal
  },

  setup() {
    const isDarkMode = ref(false)
    
    const modals = ref({
      signIn: false,
      register: false,
      info: false
    })

    const modalInfo = ref({
      type: '',
      title: ''
    })

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value
      localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    }

    const openSignInModal = () => {
      modals.value.signIn = true
    }

    const openRegisterModal = () => {
      modals.value.register = true
    }

    const openContactModal = () => {
      modalInfo.value = { type: 'contact', title: 'Entre em Contato' }
      modals.value.info = true
    }

    const openInfoModal = (type, title) => {
      modalInfo.value = { type, title }
      modals.value.info = true
    }

    const handleSignIn = (data) => {
      console.log('Login:', data);

      const payload = {
        login: data.login,
        password: data.password,
        nomeEmpresa: data.nomeEmpresa
      };

      fetch("https://cohn-backend.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(async r => {
        const text = await r.text();
        console.log("Status:", r.status);
        console.log("Resposta:", text);
      })
      .catch(err => console.error("Erro:", err));

      alert('Login enviado! Em produção, isso seria processado pelo backend.');
    };


    const handleRegister = (data) => {
      console.log('Cadastro:', data)
      // Aqui você pode implementar a lógica de registro
      alert('Cadastro enviado! Em produção, os documentos seriam processados pelo backend.')
    }

    onMounted(() => {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        isDarkMode.value = true
      }
    })

    return {
      isDarkMode,
      modals,
      modalInfo,
      toggleTheme,
      openSignInModal,
      openRegisterModal,
      openContactModal,
      openInfoModal,
      handleSignIn,
      handleRegister
    }
  }
}
</script>

<style>
@import './assets/styles.css';
</style>
