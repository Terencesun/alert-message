import $ from "jquery";
import template_alert from "./alert.vue";

const install = function(Vue, option){

    const g_alert = Vue.extend(template_alert)

    const alert = new g_alert();

    alert.$mount();

   Vue.mixin({
        mounted(){
            $("body").append(alert.$el);
        }
    });

    Vue.prototype.$alert = alert;
}

export default install;
