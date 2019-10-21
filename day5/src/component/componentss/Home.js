import Vue from '../../../vue.2.6.js';
Vue.component('Home',{
    data () {
        return {
            name:"Home",
            data:"",
            page:1
        }
    },
    template: `
            <div >
                <div class="weui-flex">
                    <div class="weui-flex__item"><div class="placeholder" style="text-align:center">Home</div></div>
                </div>
                <div class="weui-panel weui-panel_access">
                    <div class="weui-panel__hd">资讯</div>
                    <div class="weui-panel__bd">
                        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg"
                            v-for="(item,index) in data" :key="item.id"
                        >
                            <div class="weui-media-box__hd">
                                <img class="weui-media-box__thumb" :src="item.author.avatar_url" alt="">
                            </div>
                            <div class="weui-media-box__bd">
                                <h4 class="weui-media-box__title" v-text="item.title"></h4>
                                <p class="weui-media-box__desc" v-text="item.content"></p>
                            </div>
                        </a>
                    </div>
                    <div class="weui-panel__ft" style="padding-bottom:60px">
                        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                            <div class="weui-cell__bd" @click="More">查看更多</div>
                            <span class="weui-cell__ft"></span>
                        </a>    
                    </div>
                </div>
            </div>`,
        created () {
            this.axios({
                type:"get",
                url: `https://cnodejs.org/api/v1/topics?page=${this.page}&tab=ask&limit=20&mdrender=false`
            }).then((res)=>{
                this.data =  res.data.data
            })
        },
        methods: {
            More(){
                this.axios({
                    type: "get",
                    url: `https://cnodejs.org/api/v1/topics?page=${++this.page>7?1:++this.page}&tab=ask&limit=20&mdrender=false`
                }).then((res) => {
                    this.data = [...this.data,...res.data.data]
                })
            }
        }
})