(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(n,e,t){n.exports=t(31)},23:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(3),l=t.n(r),o=(t(23),t(13)),c=t(8),u=t(9),s=t(14),d=t(10),p=t(15),v=t(1),f=t(2);function h(){var n=Object(v.a)(["\n  display: inline-block;\n  margin-left: 6px;\n  input[type=text] {\n    height: 24px;\n    line-height: 24px;\n    padding: 0 12px;\n    font-size: 14px;\n    min-width: 250px;\n    width: auto;\n    appearance: none;\n    border: none;\n    outline: none;\n    &:focus {\n      background: transparent;\n    }\n  }\n"]);return h=function(){return n},n}function m(){var n=Object(v.a)(["\n  margin-left: 2px;\n  width: 24px;\n  padding-top: 24px;\n  position: relative;\n  height: 0;\n  svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    height: 24px;\n    width: 24px;\n    .close-x {\n      stroke: ",";\n      fill: transparent;\n      stroke-linecap: round;\n      stroke-width: 1;\n    }\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(v.a)(["\n  line-height: 24px;\n"]);return b=function(){return n},n}function g(){var n=Object(v.a)(["\n  display: inline-block;\n  color: ",";\n  background-color: ",";\n  margin: 0 0 0 12px;\n  font-size: 12px;\n  line-height: 24px;\n  padding: 0 6px 0 12px;\n  border-radius: 24px;\n  cursor: pointer;\n  span {\n    display: inline-block;\n    vertical-align: middle;\n  }\n"]);return g=function(){return n},n}function x(){var n=Object(v.a)(["\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n"]);return x=function(){return n},n}function w(){var n=Object(v.a)(["\n  display: inline-block;\n  line-height: 24px;\n"]);return w=function(){return n},n}function k(){var n=Object(v.a)(["\n  padding: 20px;\n  border-top: 5px solid #C5211E;\n  border-bottom: 1px solid #999;\n  width: auto;\n  > * {\n    vertical-align: middle;\n  }\n"]);return k=function(){return n},n}var E=f.a.div(k()),y=f.a.label(w()),j=f.a.ul(x()),O=f.a.li(g(),function(n){return n.valid?"#333":"#fff"},function(n){return n.valid?"#ccc":"#C5211E"}),C=f.a.span(b()),S=f.a.span(m(),function(n){return n.valid?"#333":"#fff"}),T=f.a.form(h()),z=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={emails:[{value:"Test@test.com",valid:!0},{value:"Test.com",valid:!1}],value:""},t.handleChange=function(n){return t.setState({value:n.target.value})},t.handleSubmit=function(n){t.setState({emails:[].concat(Object(o.a)(t.state.emails),[{value:t.state.value,valid:t.validateEmail(t.state.value)}]),value:""}),n.preventDefault()},t.validateEmail=function(n){return/\S+@\S+\.\S+/.test(n)},t.handleClear=function(n){t.setState({emails:t.state.emails.filter(function(e){return e.value!==n.value})})},t}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this,e=this.state,t=e.emails,a=e.value;return i.a.createElement(E,{className:"App"},i.a.createElement(y,null,"To:"),i.a.createElement(j,null,t.map(function(e){return i.a.createElement(O,{key:e.value,valid:e.valid,onClick:function(){return n.handleClear(e)}},i.a.createElement(C,null,e.value),i.a.createElement(S,{valid:e.valid},i.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{class:"close-x",d:"M 9,9 L 15,15 M 15,9 L 9,15"}))))})),i.a.createElement(T,{onSubmit:this.handleSubmit},i.a.createElement("input",{name:"email",type:"text",value:a,onChange:this.handleChange})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.797db80d.chunk.js.map