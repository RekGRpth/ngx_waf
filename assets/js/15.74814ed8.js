(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{393:function(e,t,i){"use strict";i.r(t);var a=i(44),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"built-in-variables"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#built-in-variables"}},[e._v("#")]),e._v(" Built-in Variables")]),e._v(" "),i("p",[e._v("When writing "),i("code",[e._v("nginx.conf")]),e._v(", some variables are inevitably needed. For example, "),i("code",[e._v("$remote_addr")]),e._v(" can be used to get the client IP address.")]),e._v(" "),i("p",[e._v("This module adds several available variables.")]),e._v(" "),i("h2",{attrs:{id:"waf-log"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#waf-log"}},[e._v("#")]),e._v(" "),i("code",[e._v("$waf_log")])]),e._v(" "),i("p",[e._v("Not an empty string if the firewall is checked in this request, otherwise an empty string. This variable is mainly used in the directive "),i("code",[e._v("access_log")]),e._v(", see "),i("RouterLink",{attrs:{to:"/advance/log.html#customised-log-format"}},[e._v("Customised Log Format")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"waf-blocking-log"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#waf-blocking-log"}},[e._v("#")]),e._v(" "),i("code",[e._v("$waf_blocking_log")])]),e._v(" "),i("p",[e._v("Not an empty string if this request was originally blocked by the module, and vice versa. This variable is mainly used in the directive "),i("code",[e._v("access_log")]),e._v(", see "),i("RouterLink",{attrs:{to:"/advance/log.html#customised-log-format"}},[e._v("Customised Log Format")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"waf-blocked"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#waf-blocked"}},[e._v("#")]),e._v(" "),i("code",[e._v("$waf_blocked")])]),e._v(" "),i("p",[e._v("Whether this request is intercepted by this module, if intercepted, its value is "),i("code",[e._v("'true'")]),e._v(", otherwise it is "),i("code",[e._v("'false'")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"waf-spend"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#waf-spend"}},[e._v("#")]),e._v(" "),i("code",[e._v("$waf_spend")])]),e._v(" "),i("p",[e._v("Indicates how much time (in milliseconds) this check took, retaining 5 decimal places, with rounding rules depending on the specific C standard library implementation.")]),e._v(" "),i("h2",{attrs:{id:"waf-rule-type"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#waf-rule-type"}},[e._v("#")]),e._v(" "),i("code",[e._v("$waf_rule_type")])]),e._v(" "),i("p",[e._v("If a black and white list rule is in effect for this request, the value is the type of rule that triggered it. Here are the possible values. If no black and white list rule is in effect then the value is "),i("code",[e._v("''")]),e._v(".")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("'CC-DENY'")])]),e._v(" "),i("li",[i("code",[e._v("'WHITE-IPV4'")])]),e._v(" "),i("li",[i("code",[e._v("'WHITE-IPV6'")])]),e._v(" "),i("li",[i("code",[e._v("'BLACK-IPV4'")])]),e._v(" "),i("li",[i("code",[e._v("'BLACK-IPV6'")])]),e._v(" "),i("li",[i("code",[e._v("'WHITE-URL'")])]),e._v(" "),i("li",[i("code",[e._v("'BLACK-URL'")])]),e._v(" "),i("li",[i("code",[e._v("'BLACK-ARGS'")])]),e._v(" "),i("li",[i("code",[e._v("'BLACK-USER-AGENT'")])]),e._v(" "),i("li",[i("code",[e._v("'WHITE-REFERER'")])]),e._v(" "),i("li",[i("code",[e._v("'BLACK-REFERER'")])]),e._v(" "),i("li",[i("code",[e._v("'BLACK-COOKIE'")])]),e._v(" "),i("li",[i("code",[e._v("'BLACK-POST'")])]),e._v(" "),i("li",[i("code",[e._v("'UNDER-ATTACK'")])])]),e._v(" "),i("h2",{attrs:{id:"waf-rule-details"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#waf-rule-details"}},[e._v("#")]),e._v(" "),i("code",[e._v("$waf_rule_details")])]),e._v(" "),i("p",[e._v("If this request is blocked by this module, its value is the content of the specific rule triggered. If it is not blocked, its value is "),i("code",[e._v("''")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);