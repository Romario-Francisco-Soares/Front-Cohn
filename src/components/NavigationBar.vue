<template>
  <nav class="navbar navbar-expand-md fixed-top">
    <div class="container-fluid px-4">
      <a class="navbar-brand d-flex align-items-center gap-2" href="#">
        <div class="logo-box">
          <i class="bi bi-stars"></i>
        </div>
        <span class="brand-text">Cohn Technology</span>
      </a>

      <div class="d-flex align-items-center gap-2 d-md-none">
        <button 
          class="btn btn-icon"
          @click="$emit('toggle-theme')"
          aria-label="Toggle theme"
        >
          <i :class="isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
        </button>
        <button
          class="navbar-toggler"
          type="button"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle menu"
        >
          <i :class="isMenuOpen ? 'bi bi-x' : 'bi bi-list'"></i>
        </button>
      </div>

      <div class="collapse navbar-collapse" :class="{ 'show': isMenuOpen }">
        <ul class="navbar-nav mx-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" href="#features" @click="closeMenu">Recursos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#product" @click="closeMenu">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pricing" @click="closeMenu">Planos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" @click="closeMenu">Sobre</a>
          </li>
        </ul>

        <div class="d-flex align-items-center gap-3">
          <button 
            class="btn btn-icon d-none d-md-flex"
            @click="$emit('toggle-theme')"
            aria-label="Alternar tema"
          >
            <i :class="isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
          </button>
          <button class="btn btn-gradient" @click="$emit('open-signin')">
            Entrar
            <i class="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from 'vue'

export default {
  name: 'NavigationBar',

  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },

  emits: ['toggle-theme', 'open-signin'],

  setup() {
    const isMenuOpen = ref(false)

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen.value) {
        isMenuOpen.value = false
      }
    }

    watch(isMenuOpen, (newValue) => {
      document.body.style.overflow = newValue ? 'hidden' : ''
    })

    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = ''
    })

    return {
      isMenuOpen,
      closeMenu
    }
  }
}
</script>
