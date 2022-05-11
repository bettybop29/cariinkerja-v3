import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "bootstrap/dist/js/bootstrap.js";
import axios from 'axios';
import VueAxios from 'vue-axios';
import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import JlDatatable from 'jl-datatable'

import CKEditor from '@ckeditor/ckeditor5-vue';
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

const app = createApp(App);

app.use('vue-phone-number-input', VuePhoneNumberInput)
app.use(router);
app.use(store);
app.use(VueAxios,axios);
app.use(moshaToast);
app.use(JlDatatable);
app.use(CKEditor);



app.mount('#app');


