import ElementPlus from 'element-plus';
import { createApp } from 'vue';
// eslint-disable-next-line import/extensions,import/no-unresolved
import router from '@/router';
import App from './App.vue';

import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
