webpackJsonp([4],{211:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(49),c=a.n(n),i=a(44),l=a.n(i),o=a(45),r=a.n(o),s=a(46),u=a.n(s),h=a(48),p=a.n(h),f=a(47),g=a.n(f),d=a(0),v=a.n(d),m=a(217),w=(a.n(m),function(e){function t(){r()(this,t);var e=p()(this,(t.__proto__||l()(t)).call(this));return e.changeTitle=function(t){e.setState({title:t.target.value})},e.changePrice=function(t){e.setState({price:t.target.value})},e.changeSpicial=function(t){e.setState({spicialPrice:t.target.value})},e.changeAllowance=function(t){e.setState({allowance:t.target.value})},e.fetchData=function(){var t=c()({title:e.state.title,price:e.state.price,spicialPrice:e.state.spicialPrice,allowance:e.state.allowance});fetch("/api/product/addProduct",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(e){return e.json()}).then(function(t){e.setState({lists:t}),e.props.history.push({pathname:"/two",search:"?name="+e.state.userName})}).catch(function(e){console.log(e)})},e.state={price:123,title:123,spicialPrice:123,allowance:123,userName:"wangruilong"},e}return g()(t,e),u()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement("input",{type:"text",placeholder:"标题",value:this.state.title,onChange:this.changeTitle}),v.a.createElement("input",{type:"text",placeholder:"价格",value:this.state.price,onChange:this.changePrice}),v.a.createElement("input",{type:"text",placeholder:"特价",value:this.state.spicialPrice,onChange:this.changeSpicial}),v.a.createElement("input",{type:"text",placeholder:"余量",value:this.state.allowance,onChange:this.changeAllowance}),v.a.createElement("button",{onClick:this.fetchData},"添加产品"))}}]),t}(d.Component));t.default=w},217:function(e,t){}});