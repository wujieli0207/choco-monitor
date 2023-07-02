import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import monitor from '../../packages/core/src/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(monitor, {
  dsn: 'http://localhost:3000/api/monitor/create',
  appKey: 'play',
  useImgReport: false
})

app.mount('#app')
