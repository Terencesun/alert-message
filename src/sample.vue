<template>
    <div>
        <input type="button" value="测试" @click='fn1(0)'></button>
        <input type="button" value="测试" @click='fn1(1)'></button>
        <input type="button" value="测试" @click='fn1(2)'></button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                "obj": {
                    0: {
                        "status": 0,
                        "content": "请求ing"
                    },
                    1: {
                        "status": 1,
                        "content": "请求失败"
                    },
                    2: {
                        "status": 2,
                        "content": "登录成功"
                    }
                }
            }
        },
        methods: {
            fn1: function(index){
                this.$alert.alert(this.obj[index]);
            }
        }
    }
</script>

<style>
</style>