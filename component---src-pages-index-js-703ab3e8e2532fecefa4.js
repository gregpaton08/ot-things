(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(t,e,a){"use strict";a.r(e);a("91GP"),a("a1Th"),a("Btvt");var n=a("q1tI"),r=a.n(n);a("Wbzz"),a("8ypT");var i=function(t){var e,a;function n(e){var a;(a=t.call(this,e)||this).intervalId=0,a.displayValues=[];for(var n=65;n<=90;++n)a.displayValues.push(String.fromCharCode(n));for(var r=0;r<=10;++r)a.displayValues.push(r.toString());return a.state={currentText:a.displayValues[0]},a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){this.start()},i.start=function(){var t=this;this.intervalId=setInterval((function(){return t.updateText()}),1e3)},i.stop=function(){0!==this.intervalId&&(clearInterval(this.intervalId),this.intervalId=0)},i.toggle=function(){0===this.intervalId?this.start():this.stop()},i.updateText=function(){var t=this.displayValues[Math.floor(Math.random()*this.displayValues.length)];this.setState(Object.assign({},this.state,{currentText:t}))},i.createStyle=function(){return{position:"absolute",transform:"translate(-50%, -50%)",top:80*Math.random()+10+"%",left:80*Math.random()+10+"%"}},i.render=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"center-parent",style:this.createStyle()},r.a.createElement("div",{id:"the-text",onClick:this.toggle.bind(this)},r.a.createElement("h1",null,this.state.currentText))))},n}(r.a.Component);e.default=i}}]);
//# sourceMappingURL=component---src-pages-index-js-703ab3e8e2532fecefa4.js.map