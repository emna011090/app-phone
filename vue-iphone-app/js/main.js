
const myApp = Vue.createApp(app)
import app from './app.js'
import navbar from './component/navbar.js'
import cartComponent from './component/cartComponent.js'
import prouctComponent from './component/productComponent.js'
import review from './component/review-zoneComponent.js'
import formulaireComponent from './component/formulaireComponent.js'
import affichageComponent from './component/affichageComponent.js'
myApp.component('nav-bar',navbar);
myApp.component('cart-component',cartComponent);
myApp.component('produit-component', prouctComponent);
myApp.component('review',review);
myApp.component('forms', formulaireComponent);
myApp.component('affichage',affichageComponent);
myApp.mount('#app');


