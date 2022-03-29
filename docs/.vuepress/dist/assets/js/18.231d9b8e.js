(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{459:function(l,v,_){"use strict";_.r(v);var e=_(25),t=Object(e.a)({},(function(){var l=this,v=l.$createElement,_=l._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("h2",{attrs:{id:"一、什么是flex布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是flex布局"}},[l._v("#")]),l._v(" 一、什么是flex布局")]),l._v(" "),_("ul",[_("li",[l._v('Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性；')]),l._v(" "),_("li",[l._v("应用：垂直水平居中；")]),l._v(" "),_("li",[l._v("设置为flex布局的元素float、clear、vertical-align失效。")])]),l._v(" "),_("h2",{attrs:{id:"二、flex布局使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、flex布局使用"}},[l._v("#")]),l._v(" 二、flex布局使用")]),l._v(" "),_("ul",[_("li",[l._v("通过给元素添加"),_("strong",[l._v("display: flex")]),l._v("将父盒子变成flex容器，其中的子项为flex项目")])]),l._v(" "),_("h3",{attrs:{id:"_1-父项常见属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-父项常见属性"}},[l._v("#")]),l._v(" 1. "),_("strong",[l._v("父项常见属性")])]),l._v(" "),_("ul",[_("li",[_("strong",[l._v("flex-direction：主轴的方向")]),l._v(" "),_("ul",[_("li",[l._v("row（默认）：x轴（从左到右）")]),l._v(" "),_("li",[l._v("column：y轴（从上到下）")]),l._v(" "),_("li",[l._v("row-reverse：x轴（从右到左）")]),l._v(" "),_("li",[l._v("column-reverse：y轴（从下到上）")])])]),l._v(" "),_("li",[_("strong",[l._v("flex-wrap：主轴排列不下时是否换行")]),l._v(" "),_("ul",[_("li",[l._v("wrap（默认）：换行，第一行在上方")]),l._v(" "),_("li",[l._v("wrap-reverse：换行，第一行在下方")]),l._v(" "),_("li",[l._v("nowrap：不换行")])])]),l._v(" "),_("li",[_("strong",[l._v("flex-flow（flex-direction + flex-wrap）")])]),l._v(" "),_("li",[_("strong",[l._v("⭐justify-content：项目在主轴上的排列方式")]),l._v(" "),_("ul",[_("li",[l._v("flex-start（默认）：从左向右")]),l._v(" "),_("li",[l._v("flex-end：从右向左")]),l._v(" "),_("li",[l._v("⭐cneter：居中排列")]),l._v(" "),_("li",[l._v("space-around：项目之间距离相等，盒子之间的距离=盒子左右两侧的距离*2")]),l._v(" "),_("li",[l._v("⭐space-between：先两端对齐，再平分剩余空间")]),l._v(" "),_("li",[l._v("space-evenly：除了项目之外的距离平分，盒子之间的距离=盒子左右两侧的距离")])])]),l._v(" "),_("li",[_("strong",[l._v("align-items：项目在交叉轴上的排列方式")]),l._v(" "),_("ul",[_("li",[l._v("flex-start：起点开始排列")]),l._v(" "),_("li",[l._v("flex-end：终点开始排列")]),l._v(" "),_("li",[l._v("center：中点对齐")]),l._v(" "),_("li",[l._v("baseline：基线对齐")]),l._v(" "),_("li",[l._v("stretch：拉伸对齐")])])]),l._v(" "),_("li",[_("strong",[l._v("align-content：多根轴线的对齐方式")]),l._v(" "),_("ul",[_("li",[l._v("flex-start")]),l._v(" "),_("li",[l._v("flex-end")]),l._v(" "),_("li",[l._v("center")]),l._v(" "),_("li",[l._v("space-around：项目之间距离相等")]),l._v(" "),_("li",[l._v("space-between：先两头后中间")]),l._v(" "),_("li",[l._v("stretch：拉伸排列")])])])]),l._v(" "),_("h3",{attrs:{id:"_2-子项常见属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-子项常见属性"}},[l._v("#")]),l._v(" 2."),_("strong",[l._v("子项常见属性")])]),l._v(" "),_("ul",[_("li",[_("strong",[l._v("order：项目的排列顺序")]),l._v("\n数值越小排列越靠前")]),l._v(" "),_("li",[_("strong",[l._v("flex-grow")]),l._v("\n有剩余空间时项目的放大比例，默认为0，即空间有剩余时不放大，给定的属性值就是该项目占的比例")]),l._v(" "),_("li",[_("strong",[l._v("flex-shrink")]),l._v("\n空间不足时项目的缩小比例，默认为1，即空间不足时等比例缩小，如果设置为0，则不缩小")]),l._v(" "),_("li",[_("strong",[l._v("flex-basis")]),l._v("\n分配剩余空间前，项目占有的主轴空间，可设置成具体的值")]),l._v(" "),_("li",[_("strong",[l._v("⭐flex（是否放大，是否缩小，有多少可以被分配）")]),l._v(" "),_("ul",[_("li",[l._v("(1). flex-grow\n"),_("ul",[_("li",[l._v("增长系数（子项没排满容器时子项所占的比例）")]),l._v(" "),_("li",[l._v("默认值：1")])])]),l._v(" "),_("li",[l._v("(2). flex-shirink\n"),_("ul",[_("li",[l._v("缩小系数（子项的总宽度大于整体容器宽度）")]),l._v(" "),_("li",[l._v("默认值：1")])])]),l._v(" "),_("li",[l._v("(3). flex-basis\n"),_("ul",[_("li",[l._v("指定元素的初始大小\n"),_("ul",[_("li",[l._v("设置为auto时，按照自身设置的宽度均分")]),l._v(" "),_("li",[l._v("设置为数值时，根据缩放比例计算\n"),_("ul",[_("li",[l._v("放：自己+((容器-所有子项)/子项个数)")]),l._v(" "),_("li",[l._v("缩：自己-(((容器-所有子项)/容器)x自己)")])])]),l._v(" "),_("li",[l._v("默认值：0（也就是均分）")])])])])])])]),l._v(" "),_("li",[_("strong",[l._v("align-self：设置单个项目与其他项目有不同的排列方式")])])]),l._v(" "),_("h2",{attrs:{id:"三、面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、面试题"}},[l._v("#")]),l._v(" 三、面试题")]),l._v(" "),_("ul",[_("li",[l._v("flex: 1;\n= flex: 1 1 任意数字加任意长度单位，实现的效果是空间等分")]),l._v(" "),_("li",[l._v("flex: auto;\n= flex: 1 1 auto")]),l._v(" "),_("li",[l._v("flex: none;\n= flex: 0 0 auto")]),l._v(" "),_("li",[l._v("实现左上右下布局")])])])}),[],!1,null,null,null);v.default=t.exports}}]);