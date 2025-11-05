<template>
  <div 
    v-if="isOpen" 
    class="modal fade show d-block" 
    tabindex="-1"
    @click.self="closeModal"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title">Cadastro Documental</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="responsavel" class="form-label">Responsável *</label>
              <input 
                type="text" 
                class="form-control" 
                id="responsavel" 
                v-model="formData.responsavel"
                placeholder="Nome completo do responsável"
                required
              >
            </div>

            <hr class="my-4">
            <h6 class="mb-3">Documentos da Empresa</h6>
            <p class="small text-muted mb-4">
              <i class="bi bi-info-circle me-1"></i>
              Obs.: Caso algum documento não se aplique à empresa, a justificativa deve ser enviada em papel timbrado.
            </p>

            <div v-for="(doc, index) in documents" :key="index" class="mb-3">
              <label class="form-label">{{ doc.label }}</label>
              <div class="d-flex gap-2 align-items-start">
                <div class="flex-grow-1">
                  <input 
                    type="file" 
                    class="form-control" 
                    :id="`doc-${index}`"
                    :disabled="doc.notApplicable"
                    @change="handleFileChange(index, $event)"
                  >
                </div>
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    :id="`na-${index}`"
                    v-model="doc.notApplicable"
                  >
                  <label class="form-check-label small" :for="`na-${index}`">
                    Não se aplica
                  </label>
                </div>
              </div>
              
              <div v-if="doc.notApplicable" class="mt-2">
                <label class="form-label small text-muted">Justificativa (papel timbrado)</label>
                <input 
                  type="file" 
                  class="form-control form-control-sm" 
                  @change="handleJustificationChange(index, $event)"
                  required
                >
              </div>
            </div>

            <hr class="my-4">
            
            <button type="submit" class="btn btn-gradient w-100">
              Solicitar Acesso
              <i class="bi bi-send ms-2"></i>
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
  name: 'RegisterModal',

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  emits: ['close', 'submit'],

  setup(props, { emit }) {
    const formData = ref({
      responsavel: ''
    })

    const documents = ref([
      { label: 'Contrato Social', notApplicable: false, file: null, justification: null },
      { label: 'Cartão CNPJ', notApplicable: false, file: null, justification: null },
      { label: 'Certidão Negativa de Débitos Municipal', notApplicable: false, file: null, justification: null },
      { label: 'Certidão Negativa de Débitos Estadual', notApplicable: false, file: null, justification: null },
      { label: 'Certidão Negativa de Débitos Federal', notApplicable: false, file: null, justification: null },
      { label: 'Certidão Negativa de Débitos INSS', notApplicable: false, file: null, justification: null },
      { label: 'Certidão Negativa de Débitos FGTS', notApplicable: false, file: null, justification: null },
      { label: 'Certidão Negativa de Débitos Trabalhista', notApplicable: false, file: null, justification: null },
      { label: 'Certidão Negativa de Falência e Concordata', notApplicable: false, file: null, justification: null },
      { label: 'Certificações de Qualidade', notApplicable: false, file: null, justification: null },
      { label: 'Alvará de Localização (emitido pela Prefeitura)', notApplicable: false, file: null, justification: null },
      { label: 'Alvará Sanitário', notApplicable: false, file: null, justification: null },
      { label: 'Licença de Operação/Ambiental', notApplicable: false, file: null, justification: null },
      { label: 'Certificado de Responsabilidade Técnica da Classe', notApplicable: false, file: null, justification: null }
    ])

    const handleFileChange = (index, event) => {
      documents.value[index].file = event.target.files[0]
    }

    const handleJustificationChange = (index, event) => {
      documents.value[index].justification = event.target.files[0]
    }

    const closeModal = () => {
      emit('close')
    }

    const handleSubmit = () => {
      const data = {
        responsavel: formData.value.responsavel,
        documents: documents.value
      }
      emit('submit', data)
      closeModal()
    }

    watch(() => props.isOpen, (newValue) => {
      document.body.style.overflow = newValue ? 'hidden' : ''
    })

    return {
      formData,
      documents,
      handleFileChange,
      handleJustificationChange,
      closeModal,
      handleSubmit
    }
  }
}
</script>
