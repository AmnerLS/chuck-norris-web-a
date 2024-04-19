import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";

import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'

import 'primeicons/primeicons.css'

import 'primeflex/primeflex.css'
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import SelectButton from "primevue/selectbutton";
import Button from "primevue/button";



const app=createApp(App);

app.use(PrimeVue, {ripple: true})
    .component('pv-card',Card)
    .component('pv-toolbar',Toolbar)
    .component('pv-button',Button)
    .component('pv-select-button',SelectButton);

app.mount('#app');
