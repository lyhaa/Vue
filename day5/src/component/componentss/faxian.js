import Vue from '../../../vue.2.6.js';
Vue.component('faxian', {
    data() {
        return {
            name: "发现"
        }
    },
    template: `<div v-text="name"></div>`
})