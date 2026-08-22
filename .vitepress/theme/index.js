import DefaultTheme from 'vitepress/theme'
import BiodataHero from './components/BiodataHero.vue'
import AgeDisplay from './components/AgeDisplay.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BiodataHero', BiodataHero)
    app.component('AgeDisplay', AgeDisplay)
    app.component('PhotoGallery', PhotoGallery)
  }
}
