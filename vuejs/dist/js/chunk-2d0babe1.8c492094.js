(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0babe1"],{3905:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"navigation-buttons"},[a("li",{staticClass:"buttons",on:{click:e.homeRoute}},[e._v("Home")]),e.logged?a("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[e._v("My Settings")]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.otpRegisterRoute}},[e._v("OTP Registration")]),e.logged&&e.admin&&!e.superadmin?a("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?a("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[e._v("Logout")]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])]),a("hr")])},s=[],n={data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=JSON.parse(localStorage.getItem("tokendata")),t=JSON.parse(localStorage.getItem("userdata"));null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request/user")},loginRoute:function(){this.$router.push("/0:login/")},otpRegisterRoute:function(){this.$router.push("/0:register/otp")}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("tokendata")),a=JSON.parse(localStorage.getItem("userdata"));null!=a&&null!=t?this.axios.post(window.apiRoutes.verifyRoute,{token:t.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?a.admin&&!a.superadmin?(e.logged=!0,e.admin=!0):a.admin&&a.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!1:e.$router.push({name:"results",params:{data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})})):this.logged=!1}},r=n,i=a("2877"),u=Object(i["a"])(r,o,s,!1,null,null,null);t["default"]=u.exports}}]);