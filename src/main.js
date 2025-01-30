import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes';
import store from "./store/index.js";
import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(MotionPlugin);
app.mount('#app')
