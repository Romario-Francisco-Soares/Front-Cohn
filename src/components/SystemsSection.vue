<template>
  <section id="systems" class="systems-section py-5">
    <div class="container">
      <h2 class="text-center mb-5">Meus Sistemas</h2>
      <div class="row g-4">
        <div v-for="system in systems" :key="system._id" class="col-md-6 col-lg-4">
          <div class="system-card">
            <img :src="system.url_img" :alt="system.produto" class="system-image">
            <div class="system-content">
              <h5>{{ system.produto }}</h5>
              <p class="text-muted">{{ system.desc }}</p>
              <p>{{ system.detalhes }}</p>
              <button class="btn btn-gradient btn-sm w-100">
                Acessar
                <i class="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SystemsSection',

  props: {
    systems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.systems-section {
  padding-top: 100px;
  min-height: 100vh;
}

.system-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.system-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.system-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.system-content {
  padding: 1.5rem;
}

.system-content h5 {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.system-content p {
  font-size: 0.95rem;
  margin-bottom: 1rem;
}
</style>