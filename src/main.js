import Vue from "vue";
import App from "./App.vue";
import alert_msg from "./alert-message-plugin/alert.js";

Vue.use(alert_msg);

new Vue({
  el: '#app',
  render: h => h(App)
})
