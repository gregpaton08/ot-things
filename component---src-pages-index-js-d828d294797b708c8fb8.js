(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(t,e,r){"use strict";r.r(e);r("91GP"),r("a1Th"),r("Btvt");var a=r("q1tI"),n=r.n(a);var i=function(t){var e,r;function a(e){var r;(r=t.call(this,e)||this).intervalId=0,r.displayValues=[];for(var a=65;a<=90;++a)r.displayValues.push(String.fromCharCode(a));for(var n=0;n<=10;++n)r.displayValues.push(n.toString());return r.state={currentText:r.displayValues[0]},r}r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=a.prototype;return i.componentDidMount=function(){this.start()},i.start=function(){var t=this;this.intervalId=setInterval((function(){return t.updateText()}),1e3)},i.stop=function(){0!==this.intervalId&&(clearInterval(this.intervalId),this.intervalId=0)},i.toggle=function(){0===this.intervalId?this.start():this.stop()},i.updateText=function(){var t=this.displayValues[Math.floor(Math.random()*this.displayValues.length)];this.setState(Object.assign({},this.state,{currentText:t}))},i.createStyle=function(){return{position:"absolute",transform:"translate(-50%, -50%)",top:80*Math.random()+10+"%",left:80*Math.random()+10+"%"}},i.render=function(){return n.a.createElement("div",{id:"center-parent",style:this.createStyle()},n.a.createElement("div",{id:"the-text",onClick:this.toggle.bind(this)},n.a.createElement("h1",null,this.state.currentText)))},a}(n.a.Component);e.default=i}}]);
//# sourceMappingURL=component---src-pages-index-js-d828d294797b708c8fb8.js.map