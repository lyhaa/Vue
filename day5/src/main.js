import Vue from "../vue.2.6";
import 'weui';
import axios from 'axios';
import Tab from './component/Tab/Tab.js';
import './component/componentss/Home.js';
import './component/componentss/touxun.js';
import './component/componentss/faxian.js';
import './component/componentss/MY.js';
import './lib/observer.js';
import observer from "./lib/observer.js";
Vue.prototype.axios = axios;
new Vue({
    el:"#app",
    data:{
        path:"Home"
    },
    mounted() {
        observer.on("setTabbar",(path)=>{
            this.path = path
        })
    },
    components: {
        Tab
    }
})