webpackJsonp([6],{100:function(n,e,t){"use strict";function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments[1];switch(e.type){case r.a:return{async_list_data:e.lists};default:return n}}e.a=a;var r=t(91),o={async_list_data:123}},101:function(n,e,t){"use strict";function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;switch(arguments[1].type){case r.a:return{count:n.count+1};default:return n}}e.a=a;var r=t(92),o={count:0}},102:function(n,e,t){"use strict";var a=t(12),r=t(101),o=t(103),u=t(100);e.a=t.i(a.d)({counter:r.a,number:o.a,list_data:u.a})},103:function(n,e,t){"use strict";function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments[1];switch(e.type){case r.a:console.log(e.changeVal);var t=void 0;return t=void 0===e.changeVal||1===e.changeVal?"用户可能登陆失败了 或者是个点击事件":"用户登陆状态："+e.changeVal,{number:t};default:return n}}e.a=a;var r=t(56),o={number:"wangruilong number"}},104:function(n,e,t){n.exports=t(105)},105:function(n,e,t){"use strict";function a(n){return t.i(r.b)(o.a,n,u.a)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=t(12),o=t(102),u=t(106)},106:function(n,e,t){"use strict";var a=t(12),r=t(196);e.a=t.i(a.c)(r.a)},107:function(n,e,t){"use strict";var a=t(162),r=t.n(a),o=t(108);e.a=[{path:"/",component:o.a,childRoutes:[{path:"/one",component:r()({loader:function(){return t.e(2).then(t.bind(null,212))},LoadingComponent:function(){return null}})},{path:"/two",component:r()({loader:function(){return t.e(1).then(t.bind(null,215))},LoadingComponent:function(){return null}})},{path:"/three",component:r()({loader:function(){return t.e(3).then(t.bind(null,214))},LoadingComponent:function(){return null}})},{path:"/four",component:r()({loader:function(){return t.e(4).then(t.bind(null,211))},LoadingComponent:function(){return null}})},,{path:"/SyncView",component:r()({loader:function(){return t.e(0).then(t.bind(null,213))},LoadingComponent:function(){return null}})}]}]},108:function(n,e,t){"use strict";var a=t(49),r=t.n(a),o=t(44),u=t.n(o),c=t(45),l=t.n(c),i=t(46),s=t.n(i),m=t(48),f=t.n(m),p=t(47),d=t.n(p),h=t(0),v=t.n(h),b=t(76),E=t(52),g=t(1),y=t.n(g),_=t(19),C=t(12),N=t(55),j=t(143),w=(t.n(j),function(n){function e(){var n,t,a,r;l()(this,e);for(var o=arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];return t=a=f()(this,(n=e.__proto__||u()(e)).call.apply(n,[this].concat(c))),a.changeNumber=function(n){a.props.actions.numberadd(n)},r=t,f()(a,r)}return d()(e,n),s()(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement("nav",null,v.a.createElement("ul",{className:"nav"},v.a.createElement("li",null,"导航1"),v.a.createElement("li",null,"导航2"),v.a.createElement("li",null,"导航3"),v.a.createElement("li",null,"导航4"),v.a.createElement("li",null,"导航5"),v.a.createElement("li",null,"导航6"))),v.a.createElement("div",null,v.a.createElement("p",null,v.a.createElement(E.b,{to:"/one",exact:!0},"去one页面")),v.a.createElement("p",null,v.a.createElement(E.b,{to:{pathname:"/two/123"},activeClassName:"textColor",exact:!0},"去two页面")),v.a.createElement("p",null,v.a.createElement(E.b,{to:{pathname:"/three",query:{projectId:1234}},activeClassName:"textColor",exact:!0},"去three页面")),v.a.createElement("p",null,v.a.createElement(E.b,{to:{pathname:"/four",query:{projectId:1234}},activeClassName:"textColor",exact:!0},"去four页面")),v.a.createElement("p",null,v.a.createElement(E.b,{to:"/"},"去首页")),t.i(b.a)(this.props.route.childRoutes)),v.a.createElement("div",null,"index footer",r()(this.props.number),v.a.createElement("button",{onClick:this.changeNumber.bind(this,1)},"改变changechangechangechange"),"---Number:",this.props.number.number,"---"))}}]),e}(h.Component));w.propTypes={actions:y.a.object,counter:y.a.object};var x=function(n){return{number:n.number}},k=function(n){return{actions:t.i(C.a)(N,n)}};e.a=t.i(_.b)(x,k)(w)},143:function(n,e){},55:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"numberadd",function(){return r});var a=t(56),r=function(n){return{type:a.a,changeVal:n}}},56:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var a="NUMBERADD"},84:function(n,e,t){"use strict";var a=t(49),r=t.n(a),o=t(44),u=t.n(o),c=t(45),l=t.n(c),i=t(46),s=t.n(i),m=t(48),f=t.n(m),p=t(47),d=t.n(p),h=t(0),v=t.n(h),b=t(76),E=t(52),g=t(107),y=t(1),_=t.n(y),C=t(19),N=t(12),j=t(55),w=function(n){function e(){var n,t,a,o;l()(this,e);for(var c=arguments.length,i=Array(c),s=0;s<c;s++)i[s]=arguments[s];return t=a=f()(this,(n=e.__proto__||u()(e)).call.apply(n,[this].concat(i))),a.checkUser=function(){console.log(a.props)},a.changeNumber=function(n){a.props.actions.numberadd(n)},a.fetchData=function(){var n=r()({userName:"王大锤",passWord:"111111"});fetch("/api/consumers/login",{method:"POST",headers:{"Content-Type":"application/json"},body:n}).then(function(n){return n.json()}).then(function(n){a.changeNumber(n.msg)}).catch(function(n){console.log(n)})},o=t,f()(a,o)}return d()(e,n),s()(e,[{key:"componentWillMount",value:function(){this.fetchData()}},{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement(E.a,{onEnter:this.checkUser()},t.i(b.a)(g.a)))}}]),e}(h.Component);w.propTypes={actions:_.a.object,counter:_.a.object};var x=function(n){return{number:n.number}},k=function(n){return{actions:t.i(N.a)(j,n)}};e.a=t.i(C.b)(x,k)(w)},85:function(n,e,t){"use strict";var a=t(104),r=t.n(a),o=r()();e.a=o},91:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var a="ASYNC_DATA"},92:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var a="INCREMENT"},99:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(88),u=t.n(o),c=t(89),l=(t.n(c),t(19)),i=t(85),s=t(84);t(86).polyfill(),t(87);var m=function(n){u.a.render(r.a.createElement(c.AppContainer,null,r.a.createElement(l.a,{store:i.a},r.a.createElement(n,null))),document.getElementById("root"))};m(s.a)}},[99]);