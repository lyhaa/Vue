import observer from '../../lib/observer.js';
let Tab = {
    data () {
        return {
            name:"你好",
            st: `    position: fixed;
                     left: 0;
                     right: 0;
                     bottom: 0;`,
            tabdata:[
                {
                    name:"微信",
                    styleisok:true,
                    num:1,
                    path:"Home"
                },
                {
                    name:"通讯录",
                    styleisok: false,
                    num:0,
                    path:"tongxun"
                },
                {
                    name:"发现",
                    styleisok: false,
                    num: 0,
                    path:"faxian"
                },
                {
                    name:"我",
                    styleisok: false,
                    num: 0,
                    path:"My"
                }
            ],
            offnum:0
        }
    },
    template:`
        <div class="weui-tabbar" :style="st">
            <a href="javascript:;"
            v-for="(item,index) in tabdata" :key="index"
                :class = "['weui-tabbar__item',{
                   'weui-bar__item_on': offnum === index
                }]" @click="dclick(index)">
                <span style="display: inline-block;position: relative;">
                    <img src="./images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                    <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;" v-if="item.num>0">{{item.num}}</span>
                </span>
                <p class="weui-tabbar__label" v-text="item.name"></p>
            </a>
        </div>
    
    `,
    methods: {
        dclick(idx){
           this.offnum = idx
           observer.emit('setTabbar',this.tabdata[idx].path)
        }
    }
}
export default Tab;