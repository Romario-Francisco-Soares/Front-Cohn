<template>
  <div 
    v-if="isOpen" 
    class="modal fade show d-block" 
    tabindex="-1"
    @click.self="closeModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title">Entrar na Plataforma</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="nomeEmpresa" class="form-label">Empresa</label>
              <input 
                type="text" 
                class="form-control" 
                id="nomeEmpresa" 
                v-model="formData.nomeEmpresa"
                placeholder="Digite o nome da empresa"
                required
              >
            </div>
            <div class="mb-3">
              <label for="login" class="form-label">Login</label>
              <input 
                type="text" 
                class="form-control" 
                id="login" 
                v-model="formData.login"
                placeholder="Digite seu login"
                required
              >
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Senha</label>
              <input 
                type="password" 
                class="form-control" 
                id="password" 
                v-model="formData.password"
                placeholder="Digite sua senha"
                required
              >
            </div>
            <button type="submit" class="btn btn-gradient w-100">
              Acessar
              <i class="bi bi-arrow-right ms-2"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isOpen" class="modal-backdrop fade show"></div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'SignInModal',

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  emits: ['close', 'submit'],

  setup(props, { emit }) {
    const formData = ref({
      login: '',
      password: ''
    })

    const closeModal = () => {
      emit('close')
    }

    const handleSubmit = () => {
      emit('submit', formData.value)
      closeModal()
    }

    watch(() => props.isOpen, (newValue) => {
      document.body.style.overflow = newValue ? 'hidden' : ''
    })

    return {
      formData,
      closeModal,
      handleSubmit
    }
  }
}
</script>
