define("notorious-rgb/app",["exports","ember","ember/resolver","ember/load-initializers","notorious-rgb/config/environment"],function(e,t,a,r,n){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),r["default"](d,n["default"].modulePrefix),e["default"]=d}),define("notorious-rgb/components/color-converter",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({red:null,green:null,blue:null,hex:null,isNotorious:null,setRandomColor:function(){mixpanel.track("Visit"),this.set("red",this.randomColor()),this.set("green",this.randomColor()),this.set("blue",this.randomColor())}.on("didInsertElement"),randomColor:function(){return Math.floor(255*Math.random())},setHexFromRgb:function(){mixpanel.track("RGB edited");var e=parseInt(this.get("red")||0,10),t=parseInt(this.get("green")||0,10),a=parseInt(this.get("blue")||0,10),r=(1<<24)+(e<<16)+(t<<8)+a,n="#"+r.toString(16).slice(1).toUpperCase();this.set("hex",n)}.observes("red","green","blue"),setRgbFromHex:function(){if(mixpanel.track("Hex edited"),"RBG"===this.get("hex"))mixpanel.track("Easter Egg Found!"),this.set("isNotorious",!0);else{var e=this.get("hex"),t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(e,t,a,r){return t+t+a+a+r+r});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);a&&(this.set("red",parseInt(a[1],16)),this.set("green",parseInt(a[2],16)),this.set("blue",parseInt(a[3],16)))}}.observes("hex"),notifyColorChange:function(){this.sendAction("action",this.get("red"),this.get("green"),this.get("blue"))}.observes("hex")})}),define("notorious-rgb/controllers/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({isNotorious:!1,red:null,green:null,blue:null,actions:{colorChanged:function(e,t,a){this.set("red",e),this.set("green",t),this.set("blue",a)}}})}),define("notorious-rgb/initializers/app-version",["exports","notorious-rgb/config/environment","ember"],function(e,t,a){"use strict";var r=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!n){var i=r(d.toString());a["default"].libraries.register(i,t["default"].APP.version),n=!0}}}}),define("notorious-rgb/initializers/export-application-global",["exports","ember","notorious-rgb/config/environment"],function(e,t,a){"use strict";function r(e,r){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("notorious-rgb/router",["exports","ember","notorious-rgb/config/environment"],function(e,t,a){"use strict";var r=t["default"].Router.extend({location:a["default"].locationType});e["default"]=r.map(function(){})}),define("notorious-rgb/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,d=n.content;r.detectNamespace(a);var i;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(i=this.build(r),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=r.cloneNode(this.cachedFragment,!0))):i=this.build(r);var o=r.createMorphAt(i,0,0,a);return r.insertBoundary(i,0),d(t,o,e,"outlet"),i}}}())}),define("notorious-rgb/templates/components/color-converter",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","converter-panel");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-1"),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","converter col-md-6");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","rgb");var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("div");e.setAttribute(d,"class","color-input");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("label"),o=e.createTextNode("red");e.appendChild(i,o),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(n,d);var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("div");e.setAttribute(d,"class","color-input");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("label"),o=e.createTextNode("green");e.appendChild(i,o),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(n,d);var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("div");e.setAttribute(d,"class","color-input");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("label"),o=e.createTextNode("blue");e.appendChild(i,o),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(n,d);var d=e.createTextNode("\n    ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n\n    ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","hex");var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("div");e.setAttribute(d,"class","hex-color-input");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("label"),o=e.createTextNode("hexadecimal");e.appendChild(i,o),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(n,d);var d=e.createTextNode("\n    ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","swatch-panel col-md-3");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","swatch");var d=e.createTextNode("\n    ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-2"),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,d=n.get,i=n.inline,o=n.concat,l=n.attribute;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var s=r.childAt(c,[0]),p=r.childAt(s,[3]),h=r.childAt(p,[1]),u=r.childAt(s,[5,1]),v=r.createMorphAt(r.childAt(h,[1]),1,1),m=r.createMorphAt(r.childAt(h,[3]),1,1),C=r.createMorphAt(r.childAt(h,[5]),1,1),b=r.createMorphAt(r.childAt(p,[3,1]),1,1),x=r.createAttrMorph(u,"style");return i(t,v,e,"input",[],{type:"number",value:d(t,e,"red"),placeholder:"0",min:"0",max:"255"}),i(t,m,e,"input",[],{type:"number",value:d(t,e,"green"),placeholder:"0",min:"0",max:"255"}),i(t,C,e,"input",[],{type:"number",value:d(t,e,"blue"),placeholder:"0",min:"0",max:"255"}),i(t,b,e,"input",[],{type:"string",value:d(t,e,"hex"),placeholder:"#000000"}),l(t,x,u,"style",o(t,["background-color: ",d(t,e,"hex")])),c}}}())}),define("notorious-rgb/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div"),r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","color-converter-panel");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","jumbotron");var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("h1"),i=e.createTextNode("R.G.B. ");e.appendChild(d,i);var i=e.createElement("span");e.setAttribute(i,"class","left-right-arrow glyphicon glyphicon-resize-horizontal"),e.setAttribute(i,"aria-hidden","true"),e.appendChild(d,i);var i=e.createTextNode(" Hexadecimal ");e.appendChild(d,i),e.appendChild(n,d);var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("h1"),i=e.createTextNode("Hexadecimal ");e.appendChild(d,i);var i=e.createElement("span");e.setAttribute(i,"class","left-right-arrow glyphicon glyphicon-resize-horizontal"),e.setAttribute(i,"aria-hidden","true"),e.appendChild(d,i);var i=e.createTextNode(" R.G.B.");e.appendChild(d,i),e.appendChild(n,d);var d=e.createTextNode("\n    ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n\n    ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","instructions-panel row");var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("div");e.setAttribute(d,"class","col-md-2"),e.appendChild(n,d);var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("div");e.setAttribute(d,"class","instructions-body col-md-8");var i=e.createTextNode("\n        Switch from RGB to hexadecimal and back again. Valid values of Red, Green, and Blue\n        are between 0 and 255. Valid values of hexademical are between #000000 and #FFFFFF. \n        The converter accepts shorthand hexadecimal as well (i.e. #GGG === #GGGGGG).\n      ");e.appendChild(d,i),e.appendChild(n,d);var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("div");e.setAttribute(d,"class","col-md-2"),e.appendChild(n,d);var d=e.createTextNode("\n    ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n\n    ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n    ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n\n    ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","footer");var d=e.createTextNode("\n      © 2015 Lauren Ellsworth");e.appendChild(n,d);var d=e.createElement("br");e.appendChild(n,d);var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("a");e.setAttribute(d,"href","http://www.thefourthparty.com");var i=e.createTextNode("Website");e.appendChild(d,i),e.appendChild(n,d);var d=e.createTextNode("\n    ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,d=n.get,i=n.concat,o=n.attribute,l=n.element,c=n.inline;r.detectNamespace(a);var s;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(s=this.build(r),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=r.cloneNode(this.cachedFragment,!0))):s=this.build(r);var p=r.childAt(s,[0]),h=r.createAttrMorph(p,"style"),u=r.createMorphAt(r.childAt(p,[1,5]),1,1);return o(t,h,p,"style",i(t,["background-color: rgba(",d(t,e,"red"),",",d(t,e,"green"),",",d(t,e,"blue"),",0.5)"])),l(t,p,e,"bind-attr",[],{"class":":notorious-rgb-container isNotorious:notorious-rbg:not-notorious"}),c(t,u,e,"color-converter",[],{action:"colorChanged",isNotorious:d(t,e,"isNotorious")}),s}}}())}),define("notorious-rgb/config/environment",["ember"],function(e){var t="notorious-rgb";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("notorious-rgb/tests/test-helper"):require("notorious-rgb/app")["default"].create({name:"notorious-rgb",version:"0.0.0.c391fd8b"});