import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import custom styles
import './styles/main.css';

const app = createApp(App);

app.mount('#app');
