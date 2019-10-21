import Vue from '../../../vue.2.6.js';
Vue.component('tongxun',{
    data () {
        return {
            name:"通讯"
        }
    },
    template:`<div v-text="name"></div>`
})