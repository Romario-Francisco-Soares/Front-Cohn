# 🚀 Cohn Technology - Landing Page

Landing page moderna para sistema de gestão de ponto desenvolvida com **Vue.js 3** e **Bootstrap 5**.

## 📋 Sobre o Projeto

Este é um projeto Vue.js 3 puro, construído com JavaScript (não TypeScript), seguindo as melhores práticas e convenções do Vue.js. A aplicação apresenta uma landing page completa para sistema de gestão de ponto com modo dark focado em tons de verde.

## 🎨 Tecnologias

- **Vue.js 3** - Framework JavaScript progressivo
- **JavaScript ES6+** - Sem TypeScript
- **Bootstrap 5** - Framework CSS responsivo
- **Bootstrap Icons** - Biblioteca de ícones
- **Vite** - Build tool moderna e rápida
- **Composition API** - API moderna do Vue.js 3

## 🎨 Paleta de Cores

### Light Mode
- **Black**: `#41463d`
- **Blue**: `#9d8df1`
- **Semi Blue**: `#b8cdf8`
- **Semi Green**: `#95f2d9`
- **Green**: `#1cfeba`

### Dark Mode (Foco Verde)
- **Black**: `#0a0f0d`
- **Blue**: `#95f2d9`
- **Semi Blue**: `#6dd4ba`
- **Semi Green**: `#4de8bf`
- **Green**: `#1cfeba`

## 📦 Instalação e Uso

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

O servidor de desenvolvimento irá abrir automaticamente em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
/
├── src/
│   ├── App.vue                    # Componente raiz
│   ├── main.js                    # Entry point
│   ├── assets/
│   │   └── styles.css            # Estilos globais
│   └── components/
│       ├── NavigationBar.vue     # Barra de navegação
│       ├── HeroSection.vue       # Seção hero
│       ├── FeaturesSection.vue   # Seção de features
│       ├── ProductSection.vue    # Seção de produto
│       ├── PricingSection.vue    # Seção de preços
│       ├── CtaSection.vue        # Call-to-action
│       └── FooterSection.vue     # Rodapé
├── index.html                     # HTML base
├── vite.config.js                # Configuração Vite
├── package.json                   # Dependências
└── README.md                      # Este arquivo
```

## 🌟 Funcionalidades

✅ **Navegação Responsiva**
- Menu fixo com efeito blur
- Menu hambúrguer para mobile
- Links de navegação suaves

✅ **Hero Section**
- Título com gradiente animado
- Badges e estatísticas
- Imagens do Unsplash
- Botões de CTA

✅ **Features Grid**
- Cards com ícones Bootstrap
- Efeito hover animado
- Layout responsivo em grid

✅ **Product Showcase**
- Duas seções de produto
- Imagens alternadas
- Lista de features
- Cards de estatísticas

✅ **Pricing Table**
- 3 planos de preço
- Plano destacado (featured)
- Lista de recursos por plano
- Design em cards

✅ **CTA Section**
- Gradiente de fundo
- Decorações animadas
- Botões de conversão

✅ **Footer Completo**
- Links organizados por categoria
- Links de redes sociais
- Design dark

✅ **Modo Dark/Light**
- Toggle de tema com ícone
- Persistência no localStorage
- Detecção de preferência do sistema
- Transições suaves entre temas
- **Foco em tons de verde no dark mode**

## 🔧 Componentes Vue.js

### App.vue
Componente raiz que gerencia o estado do tema e organiza todos os componentes.

### NavigationBar.vue
- Props: `isDarkMode`
- Emits: `toggle-theme`
- Features: Menu mobile, toggle de tema

### HeroSection.vue
- Título principal com gradiente
- Badges e estatísticas
- Imagem hero

### FeaturesSection.vue
- Grid de 6 features
- Ícones Bootstrap
- Cards com hover

### ProductSection.vue
- 2 blocos de produto
- Imagens alternadas
- Cards de estatísticas

### PricingSection.vue
- 3 planos de preço
- Plano destacado
- Lista de features

### CtaSection.vue
- Call-to-action destacado
- Fundo gradiente

### FooterSection.vue
- Links organizados
- Redes sociais
- Copyright

## 🎯 Padrões Vue.js Utilizados

### Composition API
```javascript
import { ref, onMounted, watch } from 'vue'

export default {
  setup() {
    const state = ref(false)
    
    onMounted(() => {
      // Lógica de inicialização
    })
    
    return { state }
  }
}
```

### Props e Emits
```javascript
export default {
  props: {
    isDarkMode: Boolean
  },
  emits: ['toggle-theme']
}
```

### Ciclo de Vida
- `onMounted()` - Executado após montagem
- `onUnmounted()` - Limpeza antes de desmontar
- `watch()` - Observar mudanças reativas

## 🎨 Bootstrap 5 Classes

### Grid System
- `container`, `container-fluid`
- `row`, `col-*`
- `g-*` (gutters)

### Flexbox
- `d-flex`, `align-items-*`, `justify-content-*`
- `gap-*`, `flex-wrap`

### Spacing
- `m-*`, `p-*`, `mb-*`, `mt-*`
- Valores: 0-5

### Display
- `d-none`, `d-md-block`
- `d-flex`, `d-grid`

### Typography
- `display-*`, `lead`, `small`
- `fw-bold`, `text-center`

## 🌓 Sistema de Tema

### Toggle Manual
Botão com ícone sol/lua disponível no desktop e mobile.

### Detecção Automática
```javascript
const savedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
```

### CSS Variables
```css
:root {
  --color-blue: #9d8df1;
  --color-green: #1cfeba;
}

.dark-mode {
  --color-blue: #95f2d9;
  --color-green: #1cfeba;
}
```

## 📱 Responsividade

### Breakpoints Bootstrap 5
- **xs**: < 576px
- **sm**: ≥ 576px
- **md**: ≥ 768px (menu desktop ativa)
- **lg**: ≥ 992px
- **xl**: ≥ 1200px
- **xxl**: ≥ 1400px

## 🚀 Build para Produção

```bash
npm run build
```

A pasta `dist/` conterá os arquivos otimizados:
- HTML minificado
- CSS e JS bundled e minificados
- Assets otimizados
- Source maps

## 🌐 Deploy

Compatível com:
- ✅ Vercel
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Firebase Hosting
- ✅ Qualquer servidor estático

## 📝 Convenções de Código

### Nomenclatura
- **Componentes**: PascalCase (e.g., `NavigationBar.vue`)
- **Props**: camelCase (e.g., `isDarkMode`)
- **Eventos**: kebab-case (e.g., `toggle-theme`)

### Estrutura de Componente
```vue
<template>
  <!-- HTML -->
</template>

<script>
// JavaScript
export default {
  name: 'ComponentName',
  // ...
}
</script>

<style scoped>
/* CSS específico do componente */
</style>
```

## 🎓 Diferenças React vs Vue.js

| Conceito | React | Vue.js 3 |
|----------|-------|----------|
| Estado | `useState()` | `ref()` |
| Efeito | `useEffect()` | `onMounted()`, `watch()` |
| Classe CSS | `className` | `class`, `:class` |
| Evento | `onClick` | `@click` |
| Propriedades | props | `props` |
| Comunicação | callback | `emits` |

## 🐛 Troubleshooting

### Erro de importação do Vue
Certifique-se de que está usando `import { createApp } from 'vue'`

### Bootstrap não carregando
Verifique se os imports estão no `main.js`:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

### Ícones não aparecem
Certifique-se de importar:
```javascript
import 'bootstrap-icons/font/bootstrap-icons.css'
```

## 📚 Recursos

- [Documentação Vue.js 3](https://vuejs.org/)
- [Documentação Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Vite](https://vitejs.dev/)

## 📄 Licença

Este projeto é livre para uso pessoal e comercial.

---

**Desenvolvido com ❤️ usando Vue.js 3 + Bootstrap 5**
