webpackJsonp([0],{45:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(62),o=a(73),n=a(16),i=n(r.a,o.a,!1,null,null,null);e.default=i.exports},49:function(t,e,a){function r(t){for(var e=0;e<t.length;e++){var a=t[e],r=c[a.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](a.parts[o]);for(;o<a.parts.length;o++)r.parts.push(n(a.parts[o]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{for(var i=[],o=0;o<a.parts.length;o++)i.push(n(a.parts[o]));c[a.id]={id:a.id,refs:1,parts:i}}}}function o(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function n(t){var e,a,r=document.querySelector("style["+v+'~="'+t.id+'"]');if(r){if(f)return _;r.parentNode.removeChild(r)}if(b){var n=u++;r=d||(d=o()),e=i.bind(null,r,n,!1),a=i.bind(null,r,n,!0)}else r=o(),e=s.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}function i(t,e,a,r){var o=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var n=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}function s(t,e){var a=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),h.ssrId&&t.setAttribute(v,e.id),o&&(a+="\n/*# sourceURL="+o.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var m=a(51),c={},p=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,u=0,f=!1,_=function(){},h=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,a,o){f=a,h=o||{};var n=m(t,e);return r(n),function(e){for(var a=[],o=0;o<n.length;o++){var i=n[o],s=c[i.id];s.refs--,a.push(s)}e?(n=m(t,e),r(n)):n=[];for(var o=0;o<a.length;o++){var s=a[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var y=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},50:function(t,e,a){"use strict";var r=a(55),o=a.n(r);e.a={data:function(){return{theme:"dark",pass:o.a}}}},51:function(t,e){t.exports=function(t,e){for(var a=[],r={},o=0;o<e.length;o++){var n=e[o],i=n[0],s=n[1],l=n[2],m=n[3],c={id:t+":"+o,css:s,media:l,sourceMap:m};r[i]?r[i].parts.push(c):a.push(r[i]={id:i,parts:[c]})}return a}},52:function(t,e,a){"use strict";function r(t){a(53)}var o=a(50),n=a(56),i=a(16),s=r,l=i(o.a,n.a,!1,s,"data-v-633398a4",null);e.a=l.exports},53:function(t,e,a){var r=a(54);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(49)("20e6eb1e",r,!0,{})},54:function(t,e,a){e=t.exports=a(43)(!1),e.push([t.i,"\na[data-v-633398a4]{\n    color: hsla(0,0%,100%,.7);\n}\na[data-v-633398a4]:hover {\n    color: #57a3f3;\n}\n",""])},55:function(t,e,a){t.exports=a.p+"static/imgs/pass.png"},56:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Menu",{attrs:{mode:"horizontal",theme:t.theme,"active-name":"1"}},[a("MenuItem",{attrs:{name:"1"}},[a("router-link",{attrs:{to:"/index"}},[a("Avatar",{attrs:{src:t.pass}})],1)],1),t._v(" "),a("MenuItem",{attrs:{name:"1"}},[a("router-link",{attrs:{to:"/index"}},[a("Icon",{attrs:{type:"home"}}),t._v("首页")],1)],1),t._v(" "),a("MenuItem",{attrs:{name:"2"}},[a("router-link",{attrs:{to:"/common"}},[a("Icon",{attrs:{type:"unlocked"}}),t._v("常用密码")],1)],1),t._v(" "),a("MenuItem",{attrs:{name:"3"}},[a("router-link",{attrs:{to:"/readme"}},[a("Icon",{attrs:{type:"ios-paperplane"}}),t._v("说明")],1)],1)],1)},o=[],n={render:r,staticRenderFns:o};e.a=n},57:function(t,e,a){"use strict";e.a={name:"password",data:function(){return{placeholder:"密码",visible:!1}},props:["password","desc"],computed:{rows:function(){return 1.01*this.password.split("\n").length}},methods:{copy:function(t){var e=this;this.visible=!0;var a=this.$refs.textnode.$el.children[0];a.select(),document.execCommand("Copy"),a.blur(),setTimeout(function(){e.visible=!1},1e3)}}}},58:function(t,e,a){"use strict";function r(t){a(59)}var o=a(57),n=a(61),i=a(16),s=r,l=i(o.a,n.a,!1,s,"data-v-e753b2ae",null);e.a=l.exports},59:function(t,e,a){var r=a(60);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(49)("6a5b74d2",r,!0,{})},60:function(t,e,a){e=t.exports=a(43)(!1),e.push([t.i,"\nButton[data-v-e753b2ae]{\n    margin: 10px 0;\n}\n",""])},61:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.password?a("span",[a("span",[t._v(t._s(t.desc)+" - "+t._s(t.password.split("\n").length)+"个")]),t._v(" "),a("Poptip",{attrs:{content:"已复制"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("Button",{attrs:{type:"primary"},on:{click:t.copy}},[t._v("复制")])],1),t._v(" "),a("Input",{ref:"textnode",attrs:{value:t.password,type:"textarea",rows:t.rows,placeholder:t.placeholder}})],1):t._e()},o=[],n={render:r,staticRenderFns:o};e.a=n},62:function(t,e,a){"use strict";var r=a(52),o=a(67),n=a(58),i=a(71);a.n(i);e.a={name:"index",components:{NavMenu:r.a,QueryForm:o.a,PasswordArea:n.a},data:function(){return{password1:"",password2:"",password3:""}},computed:{password4:function(){return this.password1+(this.password2?"\n"+this.password2:"")+(this.password3?"\n"+this.password3:"")}},methods:{get_data:function(t){var e=this;this.$Spin.show(),this.$http.post("/api/get_password",t).then(function(t){e.password1=t.data.pass_first,e.password2=t.data.pass_second,e.password3=t.data.pass_third,e.$Spin.hide()}).catch(function(t){e.password1="",e.password2="",e.password3="",console.log(t),e.$Spin.hide()})}}}},63:function(t,e,a){"use strict";e.a={name:"query",data:function(){return{form_item_origin:{first_name:"",second_name:"",third_name:"",birthday:"",birthday2:"",email:"",telephone:"",mobile:"",user_name:"",account:"",qq:"",organization:"",company:"",like_use:"",id_card:"",work_no:"",connector:"",common:"0,1,2,3,4,5,6,7,8,9,a,z,q,11,12,01,qq,aa,zz,00,66,88,99,ab,zx,az,qw,qa,123,888,666,000,111,aaa,abc,qaz,qwe,asd,zxc,1234,1qaz,qwer,asdf,zxcv,1357,2468,0123,6789,12345,123456",number_filter:!1,string_filter:!1,short_filter:!0,long_filter:!0,short:"6",long:"16",have_year:!0,year:"10"},form_item:{},title:{first_name:"请输入姓(英文)",second_name:"请输入名的第一个字(英文)",third_name:"请输入名的第二个字(如果有，否则不用输入，英文)",birthday:"公历生日",birthday2:"农历生日",email:"请输入邮箱",telephone:"请输入座机",mobile:"请输入手机",user_name:"请输入常用用户名(英文)",account:"请输入常用用户账号",qq:"请输入QQ号",organization:"请输入组织名(英文)",company:"请输入公司名(英文)",like_use:"请输入常用短语(英文),如iloveyou",id_card:"请输入身份证号",work_no:"请输入工号",connector:"请输入连接符(如.!_-#@:$&*~?%+=/|),尽量减少,否则会极大增加密码数量",common:"请输入常用词组,如123456,abcd等，多个用逗号分隔。",year:"最近几年的年份",short:"请输入最小长度",long:"请输入最大长度"}}},mounted:function(){this.reset()},methods:{emit_data:function(){this.form_item.birthday=this.format(this.form_item.birthday),this.form_item.birthday2=this.format(this.form_item.birthday2),this.$emit("get_data",this.form_item)},format:function(t){return/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(t)?t.getFullYear()+"-"+(t.getMonth()+1<10?"0":"")+(t.getMonth()+1)+"-"+(t.getDate()<10?"0":"")+t.getDate():t},reset:function(){this.form_item=Object.assign({},this.form_item_origin)}}}},67:function(t,e,a){"use strict";function r(t){a(68)}var o=a(63),n=a(70),i=a(16),s=r,l=i(o.a,n.a,!1,s,"data-v-35e6a142",null);e.a=l.exports},68:function(t,e,a){var r=a(69);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(49)("130cd5ba",r,!0,{})},69:function(t,e,a){e=t.exports=a(43)(!1),e.push([t.i,"\nForm[data-v-35e6a142] {\n    margin: 20px;\n}\n.inline-item[data-v-35e6a142] {\n    margin-right: 10px;\n}\n",""])},70:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Form",{attrs:{model:t.form_item,"label-width":100}},[a("FormItem",{attrs:{label:"姓名"}},[a("Row",[a("Col",{staticClass:"inline-item",attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.first_name,title:t.title.first_name,type:"text"},model:{value:t.form_item.first_name,callback:function(e){t.$set(t.form_item,"first_name",e)},expression:"form_item.first_name"}})],1),t._v(" "),a("Col",{staticClass:"inline-item",attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.second_name,title:t.title.second_name,type:"text"},model:{value:t.form_item.second_name,callback:function(e){t.$set(t.form_item,"second_name",e)},expression:"form_item.second_name"}})],1),t._v(" "),a("Col",{staticClass:"inline-item",attrs:{span:"4"}},[a("Input",{attrs:{placeholder:t.title.third_name,title:t.title.third_name,type:"text"},model:{value:t.form_item.third_name,callback:function(e){t.$set(t.form_item,"third_name",e)},expression:"form_item.third_name"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"生日"}},[a("Row",[a("Col",{staticClass:"inline-item",attrs:{span:"3"}},[a("DatePicker",{attrs:{type:"date",format:"yyyy-MM-dd",placeholder:t.title.birthday,title:t.title.birthday},model:{value:t.form_item.birthday,callback:function(e){t.$set(t.form_item,"birthday",e)},expression:"form_item.birthday"}})],1),t._v(" "),a("Col",{staticClass:"inline-item",attrs:{span:"3"}},[a("DatePicker",{attrs:{type:"date",format:"yyyy-MM-dd",placeholder:t.title.birthday2,title:t.title.birthday2},model:{value:t.form_item.birthday2,callback:function(e){t.$set(t.form_item,"birthday2",e)},expression:"form_item.birthday2"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"Email"}},[a("Row",[a("Col",{attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.email,title:t.title.email,type:"email"},model:{value:t.form_item.email,callback:function(e){t.$set(t.form_item,"email",e)},expression:"form_item.email"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"电话"}},[a("Row",[a("Col",{staticClass:"inline-item",attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.telephone,title:t.title.telephone,type:"text"},model:{value:t.form_item.telephone,callback:function(e){t.$set(t.form_item,"telephone",e)},expression:"form_item.telephone"}})],1),t._v(" "),a("Col",{staticClass:"inline-item",attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.mobile,title:t.title.mobile,type:"text"},model:{value:t.form_item.mobile,callback:function(e){t.$set(t.form_item,"mobile",e)},expression:"form_item.mobile"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"用户名"}},[a("Row",[a("Col",{staticClass:"inline-item",attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.user_name,title:t.title.user_name,type:"text"},model:{value:t.form_item.user_name,callback:function(e){t.$set(t.form_item,"user_name",e)},expression:"form_item.user_name"}})],1),t._v(" "),a("Col",{staticClass:"inline-item",attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.account,title:t.title.account,type:"text"},model:{value:t.form_item.account,callback:function(e){t.$set(t.form_item,"account",e)},expression:"form_item.account"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"QQ号"}},[a("Row",[a("Col",{attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.qq,title:t.title.qq,type:"text"},model:{value:t.form_item.qq,callback:function(e){t.$set(t.form_item,"qq",e)},expression:"form_item.qq"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"组织"}},[a("Row",[a("Col",{staticClass:"inline-item",attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.organization,title:t.title.organization,type:"text"},model:{value:t.form_item.organization,callback:function(e){t.$set(t.form_item,"organization",e)},expression:"form_item.organization"}})],1),t._v(" "),a("Col",{staticClass:"inline-item",attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.company,title:t.title.company,type:"text"},model:{value:t.form_item.company,callback:function(e){t.$set(t.form_item,"company",e)},expression:"form_item.company"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"短语"}},[a("Row",[a("Col",{attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.like_use,title:t.title.like_use,type:"text"},model:{value:t.form_item.like_use,callback:function(e){t.$set(t.form_item,"like_use",e)},expression:"form_item.like_use"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"身份证号"}},[a("Row",[a("Col",{attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.id_card,title:t.title.id_card,type:"text"},model:{value:t.form_item.id_card,callback:function(e){t.$set(t.form_item,"id_card",e)},expression:"form_item.id_card"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"工号"}},[a("Row",[a("Col",{attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.work_no,title:t.title.work_no,type:"text"},model:{value:t.form_item.work_no,callback:function(e){t.$set(t.form_item,"work_no",e)},expression:"form_item.work_no"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"连接符"}},[a("Row",[a("Col",{attrs:{span:"3"}},[a("Input",{attrs:{placeholder:t.title.connector,title:t.title.connector,type:"text"},model:{value:t.form_item.connector,callback:function(e){t.$set(t.form_item,"connector",e)},expression:"form_item.connector"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"常用词组"}},[a("Row",[a("Col",{attrs:{span:"15"}},[a("Input",{attrs:{placeholder:t.title.common,title:t.title.common,type:"text"},model:{value:t.form_item.common,callback:function(e){t.$set(t.form_item,"common",e)},expression:"form_item.common"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"最近年份"}},[a("Row",[a("Col",{attrs:{span:"1"}},[a("i-switch",{model:{value:t.form_item.have_year,callback:function(e){t.$set(t.form_item,"have_year",e)},expression:"form_item.have_year"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}},[a("Input",{attrs:{placeholder:t.title.year,title:t.title.year,type:"text"},model:{value:t.form_item.year,callback:function(e){t.$set(t.form_item,"year",e)},expression:"form_item.year"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"过滤纯数字"}},[a("Row",[a("Col",{attrs:{span:"1"}},[a("i-switch",{model:{value:t.form_item.number_filter,callback:function(e){t.$set(t.form_item,"number_filter",e)},expression:"form_item.number_filter"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"过滤纯字母"}},[a("Row",[a("Col",{attrs:{span:"1"}},[a("i-switch",{model:{value:t.form_item.string_filter,callback:function(e){t.$set(t.form_item,"string_filter",e)},expression:"form_item.string_filter"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"过滤长度小于"}},[a("Row",[a("Col",{attrs:{span:"1"}},[a("i-switch",{model:{value:t.form_item.short_filter,callback:function(e){t.$set(t.form_item,"short_filter",e)},expression:"form_item.short_filter"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}},[a("Input",{attrs:{placeholder:t.title.short,title:t.title.short,type:"text"},model:{value:t.form_item.short,callback:function(e){t.$set(t.form_item,"short",e)},expression:"form_item.short"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"过滤长度大于"}},[a("Row",[a("Col",{attrs:{span:"1"}},[a("i-switch",{model:{value:t.form_item.long_filter,callback:function(e){t.$set(t.form_item,"long_filter",e)},expression:"form_item.long_filter"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}},[a("Input",{attrs:{placeholder:t.title.long,title:t.title.long,type:"text"},model:{value:t.form_item.long,callback:function(e){t.$set(t.form_item,"long",e)},expression:"form_item.long"}})],1)],1)],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.emit_data}},[t._v("生成密码")]),t._v(" "),a("Button",{attrs:{type:"ghost"},on:{click:t.reset}},[t._v("重置")])],1)],1)},o=[],n={render:r,staticRenderFns:o};e.a=n},71:function(t,e,a){var r=a(72);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0};o.transform=void 0;a(44)(r,o);r.locals&&(t.exports=r.locals)},72:function(t,e,a){e=t.exports=a(43)(!1),e.push([t.i,".ivu-form-item {\r\n    margin-bottom: 10px;\r\n}",""])},73:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-menu"),t._v(" "),a("QueryForm",{on:{get_data:t.get_data}}),t._v(" "),a("Row",[a("Col",{attrs:{span:"3",offset:"1"}},[a("PasswordArea",{attrs:{password:t.password1,desc:"一阶密码"}})],1),t._v(" "),a("Col",{attrs:{span:"3",offset:"1"}},[a("PasswordArea",{attrs:{password:t.password2,desc:"二阶密码"}})],1),t._v(" "),a("Col",{attrs:{span:"3",offset:"1"}},[a("PasswordArea",{attrs:{password:t.password3,desc:"三阶密码"}})],1),t._v(" "),a("Col",{attrs:{span:"3",offset:"1"}},[a("PasswordArea",{attrs:{password:t.password4,desc:"全部密码"}})],1)],1)],1)},o=[],n={render:r,staticRenderFns:o};e.a=n}});