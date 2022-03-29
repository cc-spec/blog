(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{466:function(t,a,r){"use strict";r.r(a);var s=r(25),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"一、什么是重排和重绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是重排和重绘"}},[t._v("#")]),t._v(" 一、什么是重排和重绘")]),t._v(" "),r("h3",{attrs:{id:"_1-1-重排-reflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-重排-reflow"}},[t._v("#")]),t._v(" 1.1 重排(reflow)")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("重新生成布局")])]),t._v(" "),r("li",[t._v("例如当某个子元素样式发生改变，直接影响到了其父元素以及往上追溯很多祖先元素（包括兄弟元素），这个时候浏览器要重新去渲染这个子元素相关联的所有元素的过程称为重排也称为回流。")])]),t._v(" "),r("h3",{attrs:{id:"_1-2-重绘-repaint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-重绘-repaint"}},[t._v("#")]),t._v(" 1.2 重绘(repaint)")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("重新绘制某些不影响布局的元素")])]),t._v(" "),r("li",[t._v("如果只是改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性，将只会引起浏览器 repaint（重绘）。repaint 的速度明显快于 reflow。")])]),t._v(" "),r("h2",{attrs:{id:"二、什么样的操作会引起重排和重绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、什么样的操作会引起重排和重绘"}},[t._v("#")]),t._v(" 二、什么样的操作会引起重排和重绘")]),t._v(" "),r("h3",{attrs:{id:"_2-1-重排"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-重排"}},[t._v("#")]),t._v(" 2.1 重排")]),t._v(" "),r("p",[t._v("（1）添加或删除可见的DOM元素"),r("br"),t._v("\n（2）元素位置改变"),r("br"),t._v("\n（3）元素本身的尺寸发生改变"),r("br"),t._v("\n（4）元素内容改变"),r("br"),t._v("\n（5）页面渲染器初始化"),r("br"),t._v("\n（6）浏览器窗口大小发生改变\n"),r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4319983b0da46a280d0694c927bf58d~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"_2-2-重绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-重绘"}},[t._v("#")]),t._v(" 2.2 重绘")]),t._v(" "),r("p",[t._v("改变元素的外观都会引起重绘\n"),r("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d645f791f49849d48b6549acb92a207b~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"三、重排和重绘的范围"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、重排和重绘的范围"}},[t._v("#")]),t._v(" 三、重排和重绘的范围")]),t._v(" "),r("ul",[r("li",[t._v("重排 > 重绘")]),t._v(" "),r("li",[t._v("重排一定会重绘，重绘不一定重排")])]),t._v(" "),r("h2",{attrs:{id:"四、重排和重绘引发的性能问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、重排和重绘引发的性能问题"}},[t._v("#")]),t._v(" 四、重排和重绘引发的性能问题")]),t._v(" "),r("ul",[r("li",[t._v("频繁的重排和重绘会导致浏览器卡顿")]),t._v(" "),r("li",[t._v("解决方案\n"),r("ul",[r("li",[t._v("尽量精简css样式表；")]),t._v(" "),r("li",[t._v("批量修改DOM；\n"),r("ul",[r("li",[t._v("尽量降低重排和重绘的DOM元素层级，减小成本；")]),t._v(" "),r("li",[t._v("table元素的重排和重绘成本，要高于div元素，尽量不要使用table元素。")])])])])])])])}),[],!1,null,null,null);a.default=_.exports}}]);