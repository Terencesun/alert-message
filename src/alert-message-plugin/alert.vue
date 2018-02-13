<template>
    <div class="g-alert">
        <transition name="fade">
            <div class="content" :tag="selectStyle" v-show="show">{{ msg.content }}</div>
        </transition>
    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        data(){
            return {
                "show": false,
                "msg": {
                    "status": 0,
                    "content": ""
                },
                "styleMap": {
                    0: "normal",
                    1: "important",
                    2: "pass"
                }
            }
        },
        computed: {
            "selectStyle": function(){
                let index = this.msg.status;
                let styleName = this.styleMap[index];
                return styleName;
            }
        },
        methods: {
            "alert": function(obj){
                this.msg = obj;
                this.show = true;
                setTimeout(() => {
                    this.close()
                }, 2000);
            },
            "close": function(){
                this.show = false;
            }
        },
    }
</script>

<style lang="less">
.g-alert {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #FF9D9D;
    justify-content: center;
    z-index: 99999;

    div[tag="normal"] {
        background-color: #7CC6FD;
    }
    div[tag="important"] {
        background-color: #FD8080;
    }
    div[tag="pass"] {
        background-color: #9BD9AF;
    }
}

.g-alert .content {
    min-width: 100px;
    max-width: 300px;
    min-height: 40px;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    transform: translateY(100px);
}

.fade-enter, .fade-leave-to {
    margin-top: -10px;
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
    transition: all .2s;
}
</style>