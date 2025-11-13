<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }">
    <!-- Navigation -->
    <NavigationBar 
      :isDarkMode="isDarkMode"
      :isLoggedIn="isLoggedIn"
      @toggle-theme="toggleTheme"
      @open-signin="openSignInModal"
    />

    <!-- Systems Section (mostrado após login) -->
    <SystemsSection v-if="isLoggedIn" :systems="systems" />

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
import SystemsSection from './components/SystemsSection.vue'

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
    InfoModal,
    SystemsSection
  },

  setup() {
    const isDarkMode = ref(false)
    const isLoggedIn = ref(false)
    const systems = ref([])

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

    const handleSignIn = async (data) => {
      const payload = {
        login: data.login,
        password: data.password,
        nomeEmpresa: data.nomeEmpresa
      };

      try {
        const response = await fetch("https://cohn-backend.vercel.app/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Erro no login: ${response.status} - ${errText}`);
        }

        const result = await response.json();
        console.log("✅ Login OK:", result);

        isLoggedIn.value = true
        modals.value.signIn = false
        await includeOptionsNavBar();

      } catch (err) {
        console.error("❌ Erro no login:", err);
      }
    };

    const includeOptionsNavBar = async () => {
      try {
        const response = await fetch("https://cohn-backend.vercel.app/products_list", {
          method: "GET",
          headers: {
            "Accept": "application/json"
          },
          credentials: "include"
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Erro: ${response.status} - ${errText}`);
        }

        const data = await response.json();
        console.log("📦 Opções carregadas:", data);
        systems.value = data

      } catch (err) {
        console.error("❌ Erro ao buscar produtos:", err);
      }
    };

    const handleRegister = (data) => {
      console.log('Cadastro:', data)
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
      isLoggedIn,
      systems,
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
