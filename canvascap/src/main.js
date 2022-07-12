import { app } from "./plugins/main-app";
import "./plugins/register-icons";

import router from './router'

app.use(router)

import "@/assets/scss/main.scss";

app.mount('#app')
