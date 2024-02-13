import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './style/font.scss'
import './style.scss'

// 设置根元素字体大小
function setRem() {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 100 + 'px';
}
setRem()
window.onresize = setRem
const app = createApp(App)
app.use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}