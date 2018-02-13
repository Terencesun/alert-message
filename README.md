# alert-message

> 一个简易的提示信息弹出窗插件

![image](https://raw.githubusercontent.com/Terencesun/blog/master/_img/%E6%95%88%E6%9E%9C.gif)

## 使用

```
npm install

npm run dev

```
## 插件使用方法

找到src目录下的alert-message-plugin文件夹，复制里面的.vue和.js文件到你希望它在的地方，然后保证这俩文件在同级目录下，如果不在同级目录下，那么需要更改.js的.vue引入地址

然后在你项目的main.js里引入alert.js，在下方写上Vue.use(xxx)即可使用

## 全局方法
### vm.$alert.alert(obj)
obj为传入参数，json格式


```
obj: {
    "status": 0,
    "content": "msg"
}
```


其中，status表示弹出窗状态，0: normal, 1: important, 2: pass，三者颜色不同

### vm.$alert.close()
手动关闭弹出窗，一般用不到，多为内置方法使用

该插件编写讲解：

谢谢大家！✿✿ヽ(°▽°)ノ✿
