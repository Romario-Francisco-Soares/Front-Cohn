<template>
  <div class="min-vh-100" :class="{ 'dark-mode': darkMode }">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-md fixed-top navbar-light bg-blur border-bottom">
      <div class="container-fluid px-4">
        <a class="navbar-brand d-flex align-items-center gap-2" href="#">
          <div class="logo-box d-flex align-items-center justify-content-center">
            <i class="bi bi-stars text-white"></i>
          </div>
          <span class="fw-semibold brand-text">Nexus</span>
        </a>

        <div class="d-flex align-items-center gap-2 d-md-none">
          <button 
            class="btn btn-icon theme-toggle"
            @click="toggleDarkMode"
            aria-label="Toggle dark mode"
          >
            <i :class="darkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
          </button>
          <button
            class="navbar-toggler"
            type="button"
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-label="Toggle navigation"
          >
            <i :class="mobileMenuOpen ? 'bi bi-x' : 'bi bi-list'"></i>
          </button>
        </div>

        <div class="collapse navbar-collapse" :class="{ 'show': mobileMenuOpen }">
          <ul class="navbar-nav mx-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link" href="#features" @click="closeMenu">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#product" @click="closeMenu">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing" @click="closeMenu">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" @click="closeMenu">About</a>
            </li>
          </ul>

          <div class="d-flex align-items-center gap-3">
            <button 
              class="btn btn-icon theme-toggle d-none d-md-flex"
              @click="toggleDarkMode"
              aria-label="Toggle dark mode"
            >
              <i :class="darkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
            </button>
            <button class="btn btn-link text-decoration-none nav-link">Sign In</button>
            <button class="btn btn-gradient">
              Get Started
              <i class="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <transition name="fade-up" appear>
              <div class="badge-pill mb-4">
                <i class="bi bi-star-fill text-primary"></i>
                <span class="ms-2">New: AI-Powered Features</span>
              </div>
            </transition>

            <transition name="fade-up" appear :style="{ transitionDelay: '100ms' }">
              <h1 class="display-3 fw-bold mb-4 gradient-text">
                Transform your digital experience
              </h1>
            </transition>

            <transition name="fade-up" appear :style="{ transitionDelay: '200ms' }">
              <p class="lead text-muted mb-5">
                The modern platform designed to elevate your workflow, streamline collaboration, and unlock endless possibilities.
              </p>
            </transition>

            <transition name="fade-up" appear :style="{ transitionDelay: '300ms' }">
              <div class="d-flex flex-wrap gap-3 mb-5">
                <button class="btn btn-gradient btn-lg">
                  Start Free Trial
                  <i class="bi bi-arrow-right ms-2"></i>
                </button>
                <button class="btn btn-outline-primary btn-lg">
                  Watch Demo
                </button>
              </div>
            </transition>

            <transition name="fade" appear :style="{ transitionDelay: '400ms' }">
              <div class="d-flex align-items-center gap-4">
                <div>
                  <div class="d-flex gap-1 mb-2">
                    <i v-for="i in 5" :key="i" class="bi bi-star-fill star-rating"></i>
                  </div>
                  <p class="small text-muted mb-0">5.0 from 2000+ reviews</p>
                </div>
                <div class="vr"></div>
                <div>
                  <p class="fs-4 fw-bold mb-0 brand-text">50K+</p>
                  <p class="small text-muted mb-0">Active users</p>
                </div>
              </div>
            </transition>
          </div>

          <div class="col-lg-6">
            <transition name="fade-right" appear>
              <div class="hero-image-wrapper">
                <div class="gradient-blur"></div>
                <img
                  src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MjAyNzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hero"
                  class="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section-features">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3 brand-text">Powerful features for modern teams</h2>
          <p class="lead text-muted mx-auto" style="max-width: 700px">
            Everything you need to build, collaborate, and scale your business to new heights.
          </p>
        </div>

        <div class="row g-4">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="col-md-6 col-lg-4"
          >
            <transition name="fade-up" appear :style="{ transitionDelay: `${index * 50}ms` }">
              <div class="card feature-card h-100">
                <div class="card-body p-4">
                  <div 
                    class="icon-box mb-3"
                    :class="`icon-${feature.color}`"
                  >
                    <i :class="`bi ${feature.icon}`"></i>
                  </div>
                  <h5 class="card-title mb-3">{{ feature.title }}</h5>
                  <p class="card-text text-muted">{{ feature.description }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Showcase -->
    <section id="product" class="section-product">
      <div class="container">
        <!-- First Product Block -->
        <div class="row align-items-center g-5 mb-6">
          <div class="col-lg-6 order-lg-1">
            <img
              src="https://images.unsplash.com/photo-1646038572816-04ab3ff22b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyMDAwMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Product showcase"
              class="img-fluid rounded-4 shadow-lg"
            />
          </div>
          
          <div class="col-lg-6 order-lg-2">
            <h2 class="display-6 fw-bold mb-4 brand-text">Built for creators, designed for everyone</h2>
            <p class="lead text-muted mb-4">
              Our intuitive interface makes it easy for anyone to create stunning results, while powerful features satisfy the needs of professionals.
            </p>
            
            <ul class="list-unstyled">
              <li v-for="(item, index) in productFeatures" :key="index" class="mb-3 d-flex align-items-center">
                <div class="check-icon me-3">
                  <i class="bi bi-arrow-right"></i>
                </div>
                <span>{{ item }}</span>
              </li>
            </ul>

            <button class="btn btn-gradient mt-3">
              Learn More
              <i class="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>

        <!-- Second Product Block -->
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <h2 class="display-6 fw-bold mb-4 brand-text">Analytics that drive results</h2>
            <p class="lead text-muted mb-4">
              Make data-driven decisions with comprehensive analytics and insights. Track what matters and optimize for success.
            </p>
            
            <div class="row g-3">
              <div
                v-for="(stat, index) in stats"
                :key="index"
                class="col-6"
              >
                <div class="stat-card p-4 rounded-3">
                  <p class="fs-2 fw-bold mb-1 gradient-text">{{ stat.value }}</p>
                  <p class="text-muted mb-0">{{ stat.label }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1744819181935-edb1c6924d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduZHwxfHx8fDE3NjE5OTkyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Analytics"
              class="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="section-pricing">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3 brand-text">Simple, transparent pricing</h2>
          <p class="lead text-muted mx-auto" style="max-width: 700px">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        <div class="row g-4 justify-content-center">
          <div
            v-for="(plan, index) in pricingPlans"
            :key="index"
            class="col-lg-4 col-md-6"
          >
            <div class="card pricing-card h-100" :class="{ 'featured': plan.featured }">
              <div class="card-body p-4">
                <div v-if="plan.featured" class="badge-popular">Most Popular</div>
                
                <h5 class="card-title mb-3">{{ plan.name }}</h5>
                <div class="mb-3">
                  <span class="display-4 fw-bold gradient-text">{{ plan.price }}</span>
                  <span class="text-muted">/month</span>
                </div>
                <p class="text-muted mb-4">{{ plan.description }}</p>
                
                <button 
                  class="btn w-100 mb-4"
                  :class="plan.featured ? 'btn-gradient' : 'btn-outline-primary'"
                >
                  Get Started
                </button>

                <ul class="list-unstyled">
                  <li v-for="(feature, idx) in plan.features" :key="idx" class="mb-2 d-flex align-items-center">
                    <i class="bi bi-arrow-right text-success me-2"></i>
                    <span class="small">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-cta">
      <div class="container">
        <div class="cta-box rounded-4 p-5 text-center text-white position-relative overflow-hidden">
          <div class="cta-decoration"></div>
          
          <div class="position-relative">
            <h2 class="display-5 fw-bold mb-3">Ready to get started?</h2>
            <p class="lead mb-5 opacity-90 mx-auto" style="max-width: 600px">
              Join thousands of teams already using Nexus to transform their workflow and achieve more.
            </p>
            
            <div class="d-flex flex-wrap gap-3 justify-content-center">
              <button class="btn btn-light btn-lg">
                Start Free Trial
                <i class="bi bi-arrow-right ms-2"></i>
              </button>
              <button class="btn btn-outline-light btn-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row g-4 mb-5">
          <div class="col-lg-3 col-md-6">
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="logo-box d-flex align-items-center justify-content-center">
                <i class="bi bi-stars text-white"></i>
              </div>
              <span class="fw-semibold text-white">Nexus</span>
            </div>
            <p class="text-muted small">
              Transform your digital experience with the power of modern technology.
            </p>
          </div>

          <div class="col-lg-3 col-md-6">
            <h6 class="text-white mb-3">Product</h6>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Features</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Pricing</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Security</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Roadmap</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6">
            <h6 class="text-white mb-3">Company</h6>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">About</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Blog</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Careers</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Contact</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6">
            <h6 class="text-white mb-3">Legal</h6>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Privacy</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Terms</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Cookie Policy</a></li>
              <li class="mb-2"><a href="#" class="text-muted text-decoration-none small">Licenses</a></li>
            </ul>
          </div>
        </div>

        <div class="border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p class="text-muted small mb-0">© 2025 Nexus. All rights reserved.</p>
          <div class="d-flex gap-4">
            <a href="#" class="text-muted text-decoration-none small hover-success">Twitter</a>
            <a href="#" class="text-muted text-decoration-none small hover-success">LinkedIn</a>
            <a href="#" class="text-muted text-decoration-none small hover-success">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
  name: 'App',
  setup() {
    const mobileMenuOpen = ref(false);
    const darkMode = ref(false);

    const features = [
      {
        icon: 'bi-lightning-charge-fill',
        title: 'Lightning Fast',
        description: 'Experience blazing fast performance with our optimized infrastructure built for speed.',
        color: 'blue'
      },
      {
        icon: 'bi-shield-fill-check',
        title: 'Secure by Default',
        description: 'Enterprise-grade security with end-to-end encryption to keep your data safe.',
        color: 'green'
      },
      {
        icon: 'bi-globe',
        title: 'Global Scale',
        description: 'Deploy worldwide with our global CDN and reach users anywhere, instantly.',
        color: 'blue'
      },
      {
        icon: 'bi-stars',
        title: 'AI-Powered',
        description: 'Leverage cutting-edge AI to automate workflows and boost productivity.',
        color: 'green'
      },
      {
        icon: 'bi-star-fill',
        title: 'Premium Support',
        description: 'Get 24/7 expert support from our dedicated team whenever you need help.',
        color: 'blue'
      },
      {
        icon: 'bi-arrow-right-circle-fill',
        title: 'Easy Integration',
        description: 'Connect seamlessly with your existing tools and workflows in minutes.',
        color: 'green'
      }
    ];

    const productFeatures = [
      'Drag-and-drop interface that just works',
      'Real-time collaboration with your team',
      'Advanced customization options',
      'Export in any format you need'
    ];

    const stats = [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Response Time', value: '<100ms' },
      { label: 'Countries', value: '150+' },
      { label: 'API Calls', value: '1B+' }
    ];

    const pricingPlans = [
      {
        name: 'Starter',
        price: '$19',
        description: 'Perfect for individuals and small projects',
        features: ['Up to 5 projects', '5GB storage', 'Basic analytics', 'Email support']
      },
      {
        name: 'Professional',
        price: '$49',
        description: 'For growing teams and businesses',
        features: ['Unlimited projects', '50GB storage', 'Advanced analytics', 'Priority support', 'Custom integrations'],
        featured: true
      },
      {
        name: 'Enterprise',
        price: '$99',
        description: 'For large organizations with advanced needs',
        features: ['Everything in Pro', '500GB storage', 'Dedicated account manager', 'Custom SLA', 'Advanced security']
      }
    ];

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      localStorage.setItem('theme', darkMode.value ? 'dark' : 'light');
    };

    const closeMenu = () => {
      mobileMenuOpen.value = false;
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        darkMode.value = true;
      }
    });

    // Close mobile menu when window is resized
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen.value) {
        mobileMenuOpen.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    // Prevent scroll when mobile menu is open
    watch(mobileMenuOpen, (newValue) => {
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    return {
      mobileMenuOpen,
      darkMode,
      features,
      productFeatures,
      stats,
      pricingPlans,
      toggleDarkMode,
      closeMenu
    };
  }
};
</script>

<style scoped>
/* Component specific styles */
</style>
