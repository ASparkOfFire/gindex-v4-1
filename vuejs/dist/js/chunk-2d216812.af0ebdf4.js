(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216812"],{c36b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content login-page"},[a("h4",[t._v("Login")]),a("form",[a("label",{attrs:{for:"email"}},[t._v(" > Your E-Mail Address")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",type:"email",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",[a("label",{attrs:{for:"password"}},[t._v(" > Your Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("div",[a("button",{staticClass:"login-button",attrs:{type:"submit"},on:{click:t.handleSubmit}},[t._v(" Login ")])]),a("a",{staticClass:"login-register",attrs:{href:"/0:register/"}},[t._v("No Account ? Click Here to Register")])])])},s=[],r={data:function(){return{email:"",password:""}},methods:{handleSubmit:function(t){var e=this;t.preventDefault(),this.password.length>0&&this.$http.post(window.apiRoutes.loginRoute,{email:this.email,password:this.password}).then((function(t){localStorage.setItem("user",JSON.stringify(t.data.user)),localStorage.setItem("jwt",t.data.token),console.log(t.data.token),null!=localStorage.getItem("jwt")&&(e.$emit("loggedIn"),null!=e.$route.params.nextUrl?e.$router.push(e.$route.params.nextUrl):e.$router.push("/0:home/"))}))}}},i=r,n=a("2877"),l=Object(n["a"])(i,o,s,!1,null,null,null);e["default"]=l.exports}}]);