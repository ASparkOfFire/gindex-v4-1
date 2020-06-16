(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d837a0e8","chunk-2d0babe1"],{3905:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"navigation-buttons"},[a("li",{staticClass:"buttons",on:{click:e.homeRoute}},[e._v("Home")]),e.logged?a("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[e._v("My Settings")]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.otpRegisterRoute}},[e._v("OTP Registration")]),e.logged&&e.admin&&!e.superadmin?a("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?a("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[e._v("Logout")]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])]),a("hr")])},o=[],r={data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=JSON.parse(localStorage.getItem("tokendata")),t=JSON.parse(localStorage.getItem("userdata"));null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request/user")},loginRoute:function(){this.$router.push("/0:login/")},otpRegisterRoute:function(){this.$router.push("/0:register/otp")}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("tokendata")),a=JSON.parse(localStorage.getItem("userdata"));null!=a&&null!=t?this.axios.post(window.apiRoutes.verifyRoute,{token:t.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?a.admin&&!a.superadmin?(e.logged=!0,e.admin=!0):a.admin&&a.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!1:e.$router.push({name:"results",params:{data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})})):this.logged=!1}},n=r,i=a("2877"),u=Object(i["a"])(n,s,o,!1,null,null,null);t["default"]=u.exports},fce6:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content login-page"},[a("TopLinks"),a("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.databasemessage))]),a("p",{staticStyle:{color:"#f6f578"}},[e._v(e._s(e.resultmessage))]),a("h4",[e._v("Change Your Password")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("p",{staticStyle:{color:"white"}},[e._v("Your Email - "),a("span",{staticStyle:{color:"#ff9595"}},[e._v('"'+e._s(e.userinfo.email)+'"')])]),a("div",[a("label",{attrs:{for:"oldpassword"}},[e._v(" > Your Old Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.oldpassword,expression:"oldpassword"}],attrs:{id:"oldpassword",type:"password",required:""},domProps:{value:e.oldpassword},on:{input:function(t){t.target.composing||(e.oldpassword=t.target.value)}}})])]),a("div",[a("label",{attrs:{for:"newpassword"}},[e._v(" > Your New Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newpassword,expression:"newpassword"}],attrs:{id:"newpassword",type:"password",required:""},domProps:{value:e.newpassword},on:{input:function(t){t.target.composing||(e.newpassword=t.target.value)}}})])]),a("div",[a("label",{attrs:{for:"confirm-password"}},[e._v(" > Confirm New Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmpassword,expression:"confirmpassword"}],attrs:{id:"confirm-password",type:"password",required:""},domProps:{value:e.confirmpassword},on:{input:function(t){t.target.composing||(e.confirmpassword=t.target.value)}}})])]),e._m(0)])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"login-button",attrs:{type:"submit"}},[e._v(" Login ")])])}],r=a("3905"),n={components:{TopLinks:r["default"]},data:function(){return{userinfo:JSON.parse(localStorage.getItem("userdata")),oldpassword:"",newpassword:"",confirmpassword:"",resultmessage:"",databasemessage:""}},methods:{handleSubmit:function(e){var t=this;if(e.preventDefault(),this.confirmpassword===this.newpassword&&this.newpassword.length>0){var a=JSON.parse(localStorage.getItem("tokendata")),s=JSON.parse(localStorage.getItem("userdata"));this.$http.post(window.apiRoutes.changePasswordRoute,{email:s.email,oldpassword:this.oldpassword,newpassword:this.newpassword}).then((function(e){console.log(e),e.data.auth&&e.data.registered&&e.data.changed?null!=s&&null!=a&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),t.$router.push({name:"results",params:{redirectUrl:"/0:login/",data:"response.data.message. You have to Relogin with new Password"}})):t.resultmessage="> "+e.data.message}))}else this.resultmessage="> Passwords Do Not Match",this.newpassword="",this.confirmpassword=""}},mounted:function(){var e=this;this.$http.post(window.apiRoutes.homeRoute).then((function(t){console.log(t),"200"==t.status?e.databasemessage="🟢 Database is Live. Ping - ".concat(t.data.ping,"ms"):e.databasemessage="🔴 Database Offline / under Maintenance. Please Try Later"}))}},i=n,u=a("2877"),l=Object(u["a"])(i,s,o,!1,null,null,null);t["default"]=l.exports}}]);