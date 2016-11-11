webpackJsonp([42],{9:function(n,a,s){"use strict";s(15),s(14)},14:function(n,a){},15:function(n,a){},328:function(n,a){"use strict";function s(){}Object.defineProperty(a,"__esModule",{value:!0});a.defaultProps={prefixCls:"am-search",placeholder:"",onSubmit:s,onChange:s,onFocus:s,onBlur:s,onClear:s,showCancelButton:!1,cancelText:"\u53d6\u6d88",disabled:!1}},329:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),o=t(p),e=s(4),c=t(e),u=s(6),l=t(u),i=s(5),r=t(i),k=s(1),f=t(k),d=s(3),h=t(d),v=s(328),g=function(n){function a(s){(0,c["default"])(this,a);var t=(0,l["default"])(this,n.call(this,s));t.onSubmit=function(n){n.preventDefault(),t.props.onSubmit&&t.props.onSubmit(t.state.value)},t.onChange=function(n){var a=n.target.value;"value"in t.props||t.setState({value:a}),t.props.onChange&&t.props.onChange(a)},t.onFocus=function(){t.setState({focus:!0}),t.props.onFocus&&t.props.onFocus()},t.onBlur=function(){t.setState({focus:!1}),t.props.onBlur&&t.props.onBlur()},t.onClear=function(){"value"in t.props||t.setState({value:""}),t.refs.searchInput.focus(),t.props.onClear&&t.props.onClear(""),t.props.onChange&&t.props.onChange("")},t.onCancel=function(){t.props.onCancel?t.props.onCancel(t.state.value):t.onClear(),t.refs.searchInput.blur()};var p=void 0;return p="value"in s?s.value||"":"defaultValue"in s?s.defaultValue:"",t.state={value:p,focus:!1},t}return(0,r["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){"value"in n&&this.setState({value:n.value})},a.prototype.componentDidMount=function(){/U3/i.test(navigator.userAgent)&&(this.initialInputContainerWidth=this.refs.searchInputContainer.offsetWidth,this.props.showCancelButton&&(this.refs.searchInputContainer.style.width=this.refs.searchInputContainer.offsetWidth-41*(window.devicePixelRatio||1)+"px"))},a.prototype.render=function(){var n,a,s,t=this.props,p=t.prefixCls,e=t.showCancelButton,c=t.disabled,u=t.placeholder,l=t.cancelText,i=t.className,r=this.state,k=r.value,d=r.focus,v=(0,h["default"])((n={},(0,o["default"])(n,""+p,!0),(0,o["default"])(n,p+"-start",e||d),(0,o["default"])(n,i,i),n)),g={};/U3/i.test(navigator.userAgent)&&this.initialInputContainerWidth&&(g=e||d?{width:this.initialInputContainerWidth-41*(window.devicePixelRatio||1)+"px"}:{width:this.initialInputContainerWidth+"px"});var m=(0,h["default"])((a={},(0,o["default"])(a,p+"-clear",!0),(0,o["default"])(a,p+"-clear-show",d&&k&&k.length>0),a)),C=(0,h["default"])((s={},(0,o["default"])(s,p+"-cancel",!0),(0,o["default"])(s,p+"-all-cancel",e),s));return f["default"].createElement("form",{onSubmit:this.onSubmit,className:v},f["default"].createElement("div",{ref:"searchInputContainer",className:p+"-input",style:g},f["default"].createElement("input",{type:"search",className:p+"-value",value:k,disabled:c,placeholder:u,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:"searchInput"}),f["default"].createElement("a",{onClick:this.onClear,className:m})),f["default"].createElement("div",{className:C,onClick:this.onCancel},l))},a}(f["default"].Component);a["default"]=g,g.defaultProps=v.defaultProps,n.exports=a["default"]},330:function(n,a,s){"use strict";s(9),s(405)},405:function(n,a){},746:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(330),s(329)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[],meta:{order:0,title:"\u793a\u4f8b",filename:"components/search-bar/demo/basic.md",id:"components-search-bar-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> SearchBar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> SearchBarExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'\u7f8e\u98df\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >clear</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> <span class="token string" >\'\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SearchBar</span>\n        <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u641c\u7d22<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >onSubmit</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> <span class="token string" >\'onSubmit\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onClear</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> <span class="token string" >\'onClear\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onFocus</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'onFocus\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onBlur</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'onBlur\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >showCancelButton</span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SearchBarExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].createClass({displayName:"SearchBarExample",getInitialState:function(){return{value:"\u7f8e\u98df"}},onChange:function(n){this.setState({value:n})},clear:function(){this.setState({value:""})},render:function(){return c["default"].createElement(o["default"],{value:this.state.value,placeholder:"\u641c\u7d22",onSubmit:function(n){return console.log(n,"onSubmit")},onClear:function(n){return console.log(n,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},showCancelButton:!0,onChange:this.onChange})}});return c["default"].createElement(n,null)}}},900:function(n,a,s){n.exports={basic:s(746)}}});