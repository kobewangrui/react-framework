webpackJsonp([2],{212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(44),a=n.n(o),r=n(45),u=n.n(r),s=n(46),l=n.n(s),c=n(48),i=n.n(c),p=n(47),f=n.n(p),g=n(0),m=n.n(g),h=n(52),v=n(246),_=(n.n(v),n(225),function(e){function t(e){u()(this,t);var n=i()(this,(t.__proto__||a()(t)).call(this,e));return n.nameChange=function(e){n.setState({name:e.target.value})},n.sexChange=function(e){n.setState({sex:e.target.value})},n.remarkChange=function(e){n.setState({remark:e.target.value})},n.surportChange=function(e){var t=e.target.value,o=e.target.checked,a={};a[t]=o,n.setState(a)},n.submitForm=function(){console.log(n)},console.log(n.props),n.state={name:"",sex:"",remark:"",basketball:!1,football:!1,pingpang:!1,propsData:"props父传子的数据"},n}return f()(t,e),l()(t,[{key:"componentWillMount",value:function(){console.log(this.props),console.log(this.state)}},{key:"render",value:function(){return m.a.createElement(h.c,{to:"/Four"})}}]),t}(g.Component));t.default=_},225:function(e,t,n){"use strict";var o=n(44),a=n.n(o),r=n(45),u=n.n(r),s=n(46),l=n.n(s),c=n(48),i=n.n(c),p=n(47),f=n.n(p),g=n(0),m=n.n(g),h=function(e){function t(){return u()(this,t),i()(this,(t.__proto__||a()(t)).call(this))}return f()(t,e),l()(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",null,"这是个复用组件：",this.props.name))}}]),t}(g.Component);t.a=h},246:function(e,t){}});