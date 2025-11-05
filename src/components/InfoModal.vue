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
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div v-if="type === 'privacy'">
            <h6>Política de Privacidade</h6>
            <p>Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.</p>
            
            <h6 class="mt-4">1. Coleta de Dados</h6>
            <p>Coletamos informações que você nos fornece diretamente ao se cadastrar em nossos serviços, incluindo nome, e-mail, telefone e documentos empresariais.</p>
            
            <h6 class="mt-4">2. Uso dos Dados</h6>
            <p>Utilizamos seus dados para:</p>
            <ul>
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Processar transações e solicitações</li>
              <li>Enviar comunicações importantes</li>
              <li>Garantir a segurança da plataforma</li>
            </ul>
            
            <h6 class="mt-4">3. Proteção de Dados</h6>
            <p>Implementamos medidas de segurança rigorosas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>
            
            <h6 class="mt-4">4. Compartilhamento de Dados</h6>
            <p>Não vendemos, comercializamos ou transferimos suas informações pessoais a terceiros sem seu consentimento, exceto quando necessário por lei.</p>
            
            <h6 class="mt-4">5. Seus Direitos</h6>
            <p>Você tem direito a acessar, corrigir ou excluir suas informações pessoais a qualquer momento, conforme a LGPD.</p>
          </div>

          <div v-else-if="type === 'terms'">
            <h6>Termos de Uso</h6>
            <p>Ao utilizar nossa plataforma, você concorda com os seguintes termos:</p>
            
            <h6 class="mt-4">1. Aceitação dos Termos</h6>
            <p>Ao acessar e usar este serviço, você aceita e concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis.</p>
            
            <h6 class="mt-4">2. Uso do Serviço</h6>
            <p>Você concorda em usar o serviço apenas para fins legais e de acordo com estes Termos. É proibido:</p>
            <ul>
              <li>Violar qualquer lei ou regulamento</li>
              <li>Transmitir material ofensivo ou prejudicial</li>
              <li>Tentar acessar áreas não autorizadas do sistema</li>
              <li>Interferir no funcionamento do serviço</li>
            </ul>
            
            <h6 class="mt-4">3. Propriedade Intelectual</h6>
            <p>Todo o conteúdo, marcas e propriedade intelectual pertencem à Cohn Technology e são protegidos por lei.</p>
            
            <h6 class="mt-4">4. Limitação de Responsabilidade</h6>
            <p>Não nos responsabilizamos por danos indiretos, incidentais ou consequenciais resultantes do uso ou impossibilidade de uso do serviço.</p>
            
            <h6 class="mt-4">5. Modificações</h6>
            <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. Mudanças serão comunicadas através da plataforma.</p>
          </div>

          <div v-else-if="type === 'cookies'">
            <h6>Política de Cookies</h6>
            <p>Este site utiliza cookies para melhorar sua experiência de navegação.</p>
            
            <h6 class="mt-4">O que são Cookies?</h6>
            <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso site. Eles nos ajudam a melhorar sua experiência e entender como você usa nossos serviços.</p>
            
            <h6 class="mt-4">Tipos de Cookies que Usamos</h6>
            <ul>
              <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</li>
              <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como você usa o site</li>
              <li><strong>Cookies de Funcionalidade:</strong> Lembram suas preferências</li>
              <li><strong>Cookies de Marketing:</strong> Rastreiam sua atividade para exibir anúncios relevantes</li>
            </ul>
            
            <h6 class="mt-4">Gerenciamento de Cookies</h6>
            <p>Você pode controlar e gerenciar cookies através das configurações do seu navegador. No entanto, desativar cookies pode afetar a funcionalidade do site.</p>
            
            <h6 class="mt-4">Consentimento</h6>
            <p>Ao continuar usando nosso site, você concorda com o uso de cookies conforme descrito nesta política.</p>
          </div>

          <div v-else-if="type === 'license'">
            <h6>Licença de Uso</h6>
            <p>Software proprietário © 2025 Cohn Technology</p>
            
            <h6 class="mt-4">Concessão de Licença</h6>
            <p>Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para usar nosso software conforme os termos deste acordo.</p>
            
            <h6 class="mt-4">Restrições</h6>
            <p>Você não pode:</p>
            <ul>
              <li>Copiar, modificar ou criar trabalhos derivados do software</li>
              <li>Fazer engenharia reversa ou descompilar o software</li>
              <li>Remover avisos de direitos autorais ou propriedade</li>
              <li>Transferir, sublicenciar ou revender o software</li>
            </ul>
            
            <h6 class="mt-4">Propriedade</h6>
            <p>Todos os direitos, títulos e interesses no software permanecem com a Cohn Technology.</p>
            
            <h6 class="mt-4">Rescisão</h6>
            <p>Esta licença permanece em vigor até ser rescindida. Podemos rescindi-la se você violar qualquer termo deste acordo.</p>
          </div>

          <div v-else-if="type === 'about'">
            <h6>Sobre Nós</h6>
            
            <h6 class="mt-4">Missão</h6>
            <p>Promover soluções acessíveis e confiáveis para todos os usuários.</p>
            
            <h6 class="mt-4">Visão</h6>
            <p>Ser referência em tecnologia e experiência do usuário.</p>
            
            <h6 class="mt-4">Nossa História</h6>
            <p>Somos uma equipe dedicada a oferecer soluções digitais eficientes e seguras. Nosso objetivo é facilitar o acesso à tecnologia com transparência e inovação.</p>
            
            <p class="mt-3">Acreditamos que a tecnologia deve ser simples, poderosa e acessível a todos. Por isso, desenvolvemos ferramentas que transformam desafios reais em soluções práticas, ajudando empresas de todos os tamanhos a crescerem juntas conosco.</p>
          </div>

          <div v-else-if="type === 'contact'">
            <h6>Entre em Contato</h6>
            <p>Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo:</p>
            
            <div class="mt-4">
              <p><i class="bi bi-envelope me-2 text-primary"></i><strong>E-mail:</strong> contato@cohntechnology.com</p>
              <p><i class="bi bi-telephone me-2 text-primary"></i><strong>Telefone:</strong> (31) 0000-0000</p>
              <p><i class="bi bi-clock me-2 text-primary"></i><strong>Horário de atendimento:</strong> Segunda a sexta, das 8h às 16h</p>
            </div>
            
            <div class="alert alert-info mt-4">
              <i class="bi bi-info-circle me-2"></i>
              Nossa equipe responde todas as mensagens em até 24 horas úteis.
            </div>
          </div>

          <div v-else-if="type === 'careers'">
            <h6>Carreiras</h6>
            <p class="lead">No momento estamos com nossa equipe muito forte, mas não se sinta desanimado por isso.</p>
            
            <div class="mt-4 p-4 bg-light rounded">
              <h6><i class="bi bi-people me-2"></i>Acompanhe nossas oportunidades</h6>
              <p>Estamos sempre em busca de talentos excepcionais. Acompanhe nossas redes sociais e fique por dentro de qualquer oportunidade que surgir.</p>
              
              <div class="mt-3">
                <p class="mb-2"><strong>Siga-nos:</strong></p>
                <div class="d-flex gap-3">
                  <a href="#" class="btn btn-outline-primary btn-sm">
                    <i class="bi bi-instagram me-1"></i> Instagram
                  </a>
                  <a href="#" class="btn btn-outline-primary btn-sm">
                    <i class="bi bi-linkedin me-1"></i> LinkedIn
                  </a>
                  <a href="#" class="btn btn-outline-success btn-sm">
                    <i class="bi bi-whatsapp me-1"></i> WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div class="mt-4">
              <h6>O que buscamos em nossos colaboradores:</h6>
              <ul>
                <li>Paixão por tecnologia e inovação</li>
                <li>Comprometimento com resultados</li>
                <li>Espírito de equipe</li>
                <li>Vontade de aprender e crescer</li>
              </ul>
            </div>
          </div>

          <div v-else-if="type === 'roadmap'">
            <h6>Roadmap do Projeto</h6>
            <p class="mb-4">Confira nossos planos e próximos passos para o desenvolvimento da plataforma:</p>
            
            <img 
              :src="roadmapImage" 
              alt="Roadmap Cohn Technology" 
              class="img-fluid rounded shadow-sm"
            >
            
            <div class="mt-4">
              <h6>Principais Marcos</h6>
              <div class="timeline">
                <div class="mb-3">
                  <span class="badge bg-success">✓ Concluído</span>
                  <p class="mt-2 mb-1"><strong>Q1 2025</strong></p>
                  <p class="small">Lançamento da plataforma base com gestão de ponto</p>
                </div>
                <div class="mb-3">
                  <span class="badge bg-primary">Em Andamento</span>
                  <p class="mt-2 mb-1"><strong>Q2 2025</strong></p>
                  <p class="small">Integração de biometria facial e registro por crachá</p>
                </div>
                <div class="mb-3">
                  <span class="badge bg-secondary">Planejado</span>
                  <p class="mt-2 mb-1"><strong>Q3 2025</strong></p>
                  <p class="small">Dashboard avançado com IA e relatórios personalizados</p>
                </div>
                <div class="mb-3">
                  <span class="badge bg-secondary">Planejado</span>
                  <p class="mt-2 mb-1"><strong>Q4 2025</strong></p>
                  <p class="small">Aplicativo mobile nativo e novas integrações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isOpen" class="modal-backdrop fade show"></div>
</template>

<script>
import { watch } from 'vue'

export default {
  name: 'InfoModal',

  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  emits: ['close'],

  setup(props, { emit }) {
    const roadmapImage = 'https://images.unsplash.com/photo-1590402494610-2c378a9114c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1lbGluZSUyMHJvYWRtYXAlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjIyNjAwODl8MA&ixlib=rb-4.1.0&q=80&w=1080'

    const closeModal = () => {
      emit('close')
    }

    watch(() => props.isOpen, (newValue) => {
      document.body.style.overflow = newValue ? 'hidden' : ''
    })

    return {
      roadmapImage,
      closeModal
    }
  }
}
</script>

<style scoped>
.timeline {
  border-left: 2px solid var(--color-green);
  padding-left: 1.5rem;
  margin-left: 0.5rem;
}
</style>
