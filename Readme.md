<h1><center>FortuneUpUp</center></h1>
<h4><center>今天会是什么样的一天呢</center></h4>


# ✨简介✨

​	一个今日运势占卜工具，设计的初衷是为了取代博客在用的程序员老黄历，旨在给你的生活增添一些乐趣，设计启发和素材来自于《公主连结 Re:Dive》的一次新年占卜活动。

![Demo页面](https://cdn-js.moeworld.top/gh/KJZH001/FortuneUpUp/Screenshot/Demo.png)

![占卜结果](https://cdn-js.moeworld.top/gh/KJZH001/FortuneUpUp/Screenshot/Demo1.png)

FortuneUpUp里边的推荐你去做/不要做的事件大多都是基于业余程序员（也就是我）的一些日常生活而写出来的，有代码，博客，UP主，视频，游戏，应用，社交，网站，日常等这几大类，如果您有一些想法，欢迎您提出PR。

关于特性与近期更新目标：[FortuneUpUp To Do List](https://github.com/users/Moemu/projects/1)

​	温馨提示: FortuneUpUp生成的内容仅供娱乐，请在面对占卜结果的时候慎重考虑到底要不要做还是不做，由此产生的后果作者概不负责。

# 🪄使用🪄

添加以下代码到您的网页中

```html
<script src="https://cdn-js.moeworld.top/gh/KJZH001/FortuneUpUp/FortuneUpUp.js"></script>
<link rel="stylesheet" href="https://cdn-js.moeworld.top/gh/KJZH001/FortuneUpUp/FortuneUpUp.css"></link>
```

绑定事件

```html
<div id="StartFortuneUpUp" onclick="StartFortuneUpUp()"></div>
```

或者

```javascript
window.onload = function(){
  StartFortuneUpUp();
}
```

# ⚒️自定义⚒️

我们鼓励用户fork此repo以自定义自己的FourtuneUpUp页面。

如果您对JavaScript不熟悉，那么本内容可能对您有所帮助。

**1. 自定义字体**

FortuneUpUp允许用户自定义自己的字体，在`FortuneUpUp.js`首行的设置项中找到`CustomFont`变量，将其中的内容换成你自己的字体即可。

温馨提示：您需要提前在您的CSS/HTML文件中加入您字体的CDN链接，并确保它在FortuneUpUp之前加载，不然会显示默认的微软雅黑。

**2. 自定义事件**

按照这个格式配置你的自定义事件。

对于`Events`中的普通事件，格式如下：

```javascript
{name:"(事件名/标题)",good:"(若这个事件被选为宜事件,下方显示的注释。)",bad:"(若这个事件被选为忌事件,下方显示的注释。输入null则不会被选为忌事件)",tag:"(事件标签，通常是职位或者是兴趣爱好名，在未来引入该特性)"}
```

对于`SpecialFestivalEvents`中的特别日事件，格式如下：

```javascript
{Date:"(触发日期。日期格式: (L)MM.DD 若日期前含有L,则为农历)",name:"(事件名/标题)",good:"(若这个事件被选为宜事件,下方显示的注释。)",bad:"(若这个事件被选为忌事件,下方显示的注释。输入null则不会被选为忌事件)"}
```

对于`NormalFestivalEvents`中的普通节假日事件，格式与`Events`一致（注意：`NormalFestivalDateList`不支持农历）


# 🎉示例🎉

博客示例页面: [运势UpUp](https://blog.moeworld.tech/fortuneupup：测测今天的运势吧/)

![博客示例页面](https://cdn-js.moeworld.top/gh/KJZH001/FortuneUpUp/Screenshot/Demo2.png)

# ✨声明✨

本仓库使用了自建的CDN加速项目以及调用了自己的部分API，同时也为了不会和自己的站点产生css打架的情况修改了不少东西，用以保证自己的站点能够正常调用和国内的正常访问

本仓库不一定会和上游仓库保持同步更新，我们也不建议任何人使用本仓库的内容，如果需要使用，请自建相关API

同时，本仓库也可能会加入自己独有的私货内容，请注意

***最后，我保留拒绝任何人随意调用本站api的权利，也随时可能会在引用地址上加入refer限制***


# ⚒️关于⚒️

使用GPL v3.0协议

使用了 https://github.com/jjonline/calendar.js 中的部分源代码并移植

修改 by 晓空（blog.moeworld.tech）

源作者: Moemu (muspace.top)

* **我们认为保留所有原作者的署名是使用开源项目最为基本的尊重和原则**

**我们也同样建议任何人保留本项目的署名，当然你也可以添加你的署名到自己的仓库中，因为这同样也是属于你的权利**
