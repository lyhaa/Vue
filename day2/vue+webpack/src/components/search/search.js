import Vue from '../../lib/vue.2.6.js';
import template from './search.html';
const search = new Vue({
    el: '#search',
    data:{
        title:"sdfdsf",
        style1: false,
        val:'',
        mackisok:false,
        mackisok2:false
    },
    methods:{
        isok(){
            this.style1 = !this.style1;
        },
        clear(){
            this.val = '';
        }
    },
   template,
    created () {
    },
})
export default search;