import Vue from '../../../vue.2.6.js';
Vue.component('My', {
    data() {
        return {
            name: "我的"
        }
    },
    template: `<div v-text="name"></div>`
})