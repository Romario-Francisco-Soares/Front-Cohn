# Nexus Landing Page - Vue.js 3 + Bootstrap 5

Landing page moderna desenvolvida com **Vue.js 3** e **Bootstrap 5**.

## 🚀 Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **Bootstrap 5** - Framework CSS para design responsivo
- **Bootstrap Icons** - Biblioteca de ícones
- **Vite** - Build tool e dev server
- **Composition API** - API moderna do Vue.js 3

## 🎨 Paleta de Cores

### Light Mode
- `--black`: #41463d
- `--blue`: #9d8df1
- `--semiblue`: #b8cdf8
- `--semigreen`: #95f2d9
- `--green`: #1cfeba

### Dark Mode (Foco em Verde)
- `--black`: #0a0f0d
- `--blue`: #95f2d9
- `--semiblue`: #6dd4ba
- `--semigreen`: #4de8bf
- `--green`: #1cfeba

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 🌟 Funcionalidades

### ✅ Implementadas
- [x] Navegação fixa com blur effect
- [x] Hero section com gradientes
- [x] Grid de features com ícones Bootstrap Icons
- [x] Seções de produto com imagens alternadas
- [x] Tabela de preços com plano destacado
- [x] CTA (Call-to-Action) destacado
- [x] Footer completo
- [x] **Menu mobile com hambúrguer**
- [x] **Modo Dark com foco em tons de verde**
- [x] **Animações de entrada (fade-up, fade-right)**
- [x] **Design totalmente responsivo**
- [x] **Transições suaves entre light/dark mode**

## 🎯 Estrutura de Componentes

### Componente Principal: `App.vue`

O componente utiliza a **Composition API** do Vue.js 3 com:

- `ref()` - Para estados reativos
- `onMounted()` - Para lifecycle hooks
- `watch()` - Para observar mudanças de estado
- Transitions - Para animações de entrada

### Dados Reativos

```javascript
const mobileMenuOpen = ref(false);  // Estado do menu mobile
const darkMode = ref(false);         // Estado do modo dark
```

## 🎨 Bootstrap 5 - Classes Principais Utilizadas

### Grid System
- `container` / `container-fluid`
- `row` / `col-*`
- `g-*` (gap/gutter)

### Utilities
- `d-flex` / `align-items-*` / `justify-content-*`
- `mb-*` / `mt-*` / `p-*` (spacing)
- `text-*` (typography)
- `bg-*` (backgrounds)
- `rounded-*` (border radius)
- `shadow-*` (box shadows)

### Components
- `navbar` / `navbar-expand-md`
- `card` / `card-body`
- `btn` / `btn-*`
- `badge`

## 🎭 Animações Vue

### Transitions Nativas do Vue.js

```vue
<transition name="fade-up" appear>
  <div>Conteúdo animado</div>
</transition>
```

Tipos de animações implementadas:
- `fade-up` - Entrada de baixo para cima
- `fade-right` - Entrada da direita
- `fade` - Fade simples

## 🌓 Sistema de Tema (Light/Dark)

### Toggle de Tema

```javascript
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('theme', darkMode.value ? 'dark' : 'light');
};
```

### Detecção Automática

O sistema detecta:
1. Preferência salva no `localStorage`
2. Preferência do sistema operacional (`prefers-color-scheme`)

### CSS Variables

Todas as cores usam CSS Custom Properties que mudam automaticamente:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #41463d;
}

.dark-mode {
  --bg-color: #0a0f0d;
  --text-color: #e8f5f0;
}
```

## 📱 Responsividade

Breakpoints Bootstrap 5:
- `xs` - < 576px
- `sm` - ≥ 576px
- `md` - ≥ 768px
- `lg` - ≥ 992px
- `xl` - ≥ 1200px
- `xxl` - ≥ 1400px

## 🎯 Componentes React → Vue.js 3

### Conversões Principais

| React/TypeScript | Vue.js 3 |
|-----------------|----------|
| `useState()` | `ref()` |
| `useEffect()` | `onMounted()`, `watch()` |
| `className` | `class` / `:class` |
| `style={{ }}` | `style` / `:style` |
| `onClick` | `@click` |
| Framer Motion | Vue Transitions |
| Tailwind CSS | Bootstrap 5 |
| Lucide Icons | Bootstrap Icons |

## 📂 Estrutura de Arquivos

```
/
├── App.vue              # Componente principal
├── main.js              # Entry point
├── index.html           # HTML base
├── vite.config.js       # Configuração Vite
├── package.json         # Dependências
├── styles/
│   └── main.css        # Estilos personalizados
└── README-VUE.md       # Este arquivo
```

## 🔧 Configuração do Vite

O projeto usa **Vite** como build tool, oferecendo:
- ⚡ Hot Module Replacement (HMR) extremamente rápido
- 📦 Build otimizado para produção
- 🎯 Suporte nativo a ES modules
- 🔌 Plugin oficial para Vue.js 3

## 🌐 Deploy

Para fazer deploy:

```bash
# Build
npm run build

# A pasta 'dist' conterá os arquivos otimizados
```

Compatível com:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- Qualquer servidor estático

## 📝 Notas de Desenvolvimento

### Bootstrap Icons

Os ícones são carregados via CDN no `main.css`:
```css
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
```

### Imagens

As imagens são carregadas do Unsplash via URLs diretas. Para produção, recomenda-se:
1. Download das imagens
2. Otimização (WebP, lazy loading)
3. Servir localmente

## 🎓 Aprendizado

Este projeto demonstra:
- ✅ Migração React → Vue.js 3
- ✅ Migração Tailwind → Bootstrap 5
- ✅ Uso da Composition API
- ✅ Sistema de temas com CSS Variables
- ✅ Animações nativas do Vue.js
- ✅ Responsividade com Bootstrap Grid

## 📞 Suporte

Para dúvidas ou problemas:
1. Consulte a [documentação do Vue.js 3](https://vuejs.org/)
2. Consulte a [documentação do Bootstrap 5](https://getbootstrap.com/)
3. Verifique os [ícones disponíveis](https://icons.getbootstrap.com/)

---

**Desenvolvido com Vue.js 3 + Bootstrap 5** 💚
