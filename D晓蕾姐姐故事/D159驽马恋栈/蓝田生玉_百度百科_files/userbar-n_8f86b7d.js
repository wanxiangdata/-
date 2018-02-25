define("wiki-common:widget/component/userbar-n/userbar-n",function(e,a,s){var n=e("wiki-common:widget/lib/jquery/jquery"),i=e("wiki-common:widget/component/userLogin/userLogin"),t=e("wiki-common:widget/lib/jsmart/jsmart"),r=e("wiki-common:widget/util/browser"),l=e("wiki-common:widget/ui/bubble/bubble"),o={userbar:{unlogin:new t('<li>\n<a href="http://www.baidu.com/" nslog="normal" nslog-type="10080109" >百度首页</a>\n</li>\n<li>\n<a data-action=\'login\' href="javascript:;" nslog="normal" nslog-type="10080110" >登录</a>\n</li>\n<li>\n<a href="https://passport.baidu.com/v2/?reg&regType=1&tpl=wk" nslog="normal" nslog-type="10080111" >注册<a>\n</li>'),login:new t('<li>\n<a href="http://www.baidu.com/" nslog="normal" nslog-type="10080112" >百度首页</a>\n</li>\n<li class="userbar_user" data-action="showUserMenu">\n<a href="javascript:;" nslog="normal" nslog-type="10080113" ><span>{%$displayName|escape:html|escape:none%}</span><i class="icon-triangle-down"></i></a>\n</li>\n<li class="userbar_message" data-action="showUserMsg">\n<a href="javascript:;" nslog="normal" nslog-type="10080115" >消息<span class="userbar_message_new_num"></span><i class="icon-triangle-down"></i></a>\n</li>\n<li class="userbar_mall">\n<a href="/mall/" target="_blank" nslog="normal" nslog-type="10080114" >商城</a>\n</li>\n{%if $UIConfig.btns|hasElement:"settings"%}\n<li class="userbar_setting">\n<a href="/usercenter/settings" nslog="normal" nslog-type="10080116" target="_blank"><em class="cmn-icon cmn-icons cmn-icons_cog"></em>设置</a>\n</li>\n{%/if%}')},menu:{userMenu:new t('<ul>\n<li class="top"><a href="/usercenter" target="_blank">我的百科</a></li>\n<li><a href="/usercenter/tasks#mine" target="_blank">我的任务</a></li>\n<li><a href="/usercenter/lemmas" target="_blank">我的词条</a></li>\n{%if $isAuthLemma%}\n<li><a href="/member/mylemmas" target="_blank">我的订单</a></li>\n{%/if%}\n<li><a href="https://passport.baidu.com/center" target="_blank">账号设置</a></li>\n<li class="bottom logout"><a data-action="logout" href="javascript:;">退出</a></li>\n</ul>'),userMsg:new t('<ul>\n<li class="top">\n<a href="/wikimessage/msghome#/notify" target="_blank">\n<span class="userMsgType">通知</span>{%if $baikeMsg.notice && $baikeMsg.notice.num > 0%}\n<span class="userMsgCount">{%if $baikeMsg.notice.num < 100%}{%$baikeMsg.notice.num|f_escape_xml%}{%else%}99{%/if%}</span>{%/if%}\n</a>\n</li>\n<li class="bottom">\n<a href="/wikimessage/msghome#/private" target="_blank">\n<span class="userMsgType">私信</span>{%if $baikeMsg.privateMsg && $baikeMsg.privateMsg.num > 0%}\n<span class="userMsgCount">{%if $baikeMsg.privateMsg.num < 100%}{%$baikeMsg.privateMsg.num|f_escape_xml%}{%else%}99+{%/if%}</span>{%/if%}\n</a>\n</li>\n</ul>')},bubble:{lemmaMsg:new t('<ul>\n{%foreach $baikeMsg as $idx => $msg%}\n{%if $idx === "passedVersion" && $msg.num > 0%}\n<li><a href="/usercenter/lemmas#passed" data-action="readMessage" data-msgType="3" target="_blank">您有{%$msg.num|f_escape_xml%}个版本已通过</a></li>\n{%else if $idx === "failedVersion" && $msg.num > 0%}\n<li><a href="/usercenter/lemmas#rejected" data-action="readMessage" data-msgType="4" target="_blank">您有{%$msg.num|f_escape_xml%}个版本未通过</a></li>\n{%else if $idx === "deletedVersion" && $msg.num > 0%}\n<li><a href="/usercenter/lemmas#rejected" data-action="readMessage" data-msgType="6" target="_blank">您有{%$msg.num|f_escape_xml%}个版本被删除</a></li>\n{%else if $idx === "goodVersion" && $msg.num > 0%}\n<li><a href="/usercenter/lemmas#passed-good" data-action="readMessage" data-msgType="7" target="_blank">您有{%$msg.num|f_escape_xml%}个版本被评为优质版本</a></li>\n{%else if $idx === "featuredLemma" && $msg.num > 0%}\n<li><a href="/usercenter/lemmas#passed-featured" data-action="readMessage" data-msgType="8" target="_blank">您有{%$msg.num|f_escape_xml%}个词条被评为特色词条</a></li>\n{%else if $idx === "deletedLemma" && $msg.num > 0%}\n<li><a href="/usercenter/lemmas#rejected" data-action="readMessage" data-msgType="5" target="_blank">您有{%$msg.num|f_escape_xml%}个词条被删除</a></li>\n{%else if $idx === "featuredModified" && $msg.num > 0%}\n<li><a href="/usercenter/lemmas#passed-featured" data-action="readMessage" data-msgType="9" target="_blank">您有{%$msg.num|f_escape_xml%}个特色词条被修改</a></li>\n{%else if $idx === "tousu" && $msg.num > 0%}\n<li><a href="/wikimessage/msghome#/notify" data-action="readMessage" data-msgType="2" target="_blank">您有{%$msg.num|f_escape_xml%}个投诉处理消息</a></li>\n{%else if $idx === "passedPersonalVersion" && $msg.num > 0%}\n<li><a href="/usercenter/personal" data-action="readMessage" data-msgType="10" target="_blank">您的实名词条有1个版本已通过</a></li>\n{%else if $idx === "failedPersonalVersion" && $msg.num > 0%}\n<li><a href="/usercenter/personal" data-action="readMessage" data-msgType="11" target="_blank">您的实名词条有1个版本未通过</a></li>\n{%else if $idx === "deletedPersonalVersion" && $msg.num > 0%}\n<li><a href="/usercenter/personal" data-action="readMessage" data-msgType="12" target="_blank">您的实名词条有1个版本被删除</a></li>\n{%else if $idx === "second" && $msg.num > 0%}\n<li><a href="/wikimessage/msghome#/notify" data-action="readMessage" data-msgType="13" target="_blank">您有{%$msg.num|f_escape_xml%}个秒懂消息</a></li>\n{%else if $idx === "privateMsgBubble" && $msg.num > 0%}\n<li><a href="/wikimessage/msghome#/private" data-action="readMessage" data-msgType="101" target="_blank">您收到了{%if $msg.num < 100%}{%$msg.num|f_escape_xml%}{%else%}99+{%/if%}条新私信</a></li>\n{%else if $idx === "noticeAnnounce" && $msg.num > 0%}\n<li><a href="/wikimessage/msghome#/notify" data-action="readMessage" data-msgType="15" target="_blank">您收到了{%if $msg.num < 100%}{%$msg.num|f_escape_xml%}{%else%}99+{%/if%}条官方公告</a></li>\n{%else if $idx === "noticeActivity" && $msg.num > 0%}\n<li><a href="/wikimessage/msghome#/notify" data-action="readMessage" data-msgType="14" target="_blank">您收到了{%if $msg.num < 100%}{%$msg.num|f_escape_xml%}{%else%}99+{%/if%}条活动邀请</a></li>\n{%/if%}\n{%/foreach%}\n<li class="cancelAlarm"><a href="/usercenter/settings#message" target="_blank">不再接收此类消息</a></li>\n</ul>\n<a class="wgt-bubble-lemmaMsg_close" data-action="cancelAlarm" href="javascript:;"><em class="cmn-icon cmn-icons cmn-icons_close"></em></a>')}};t.prototype.registerPlugin("modifier","hasElement",function(e,a){for(var s in e)if(e[s]==a)return!0;return!1});var m={render:{userbar:function(e,a,s){switch(a){case"unlogin":e.html(o.userbar[a].fetch(s));break;case"login":e.html(o.userbar[a].fetch(s))}},menu:function(e,a,s,t){var m=new l({host:a,content:o.menu[s].fetch(t),pos:"bottom-center",marginFromHost:4,offset:{top:7},showTail:"undefined"==typeof r.ie()||r.ie()>9?!0:!1,classNames:"wgt-bubble-"+s}),g=n(m.getNode());return a.mouseover(function(){var s=this;"showUserMenu"==n(s).attr("data-action")&&e.find(".userbar_user").addClass("spreadUserMenu"),m.show(function(){var i="";a.on("mouseleave",function(){i=setTimeout(function(){"showUserMenu"==n(s).attr("data-action")&&e.find(".userbar_user").removeClass("spreadUserMenu"),m.hide()},100)}),g.on("mouseenter",function(){clearTimeout(i),g.on("mouseleave",function(){"showUserMenu"==n(s).attr("data-action")&&e.find(".userbar_user").removeClass("spreadUserMenu"),m.hide()})})})}),g.on("click","a",function(){var e=n(this).attr("data-action");if(e){switch(e){case"logout":i.logout()}return!1}}),g},bubble:function(e,a,s){var i=new l({host:e,content:o.bubble[a].fetch(s),pos:"bottom-center",showTail:"undefined"==typeof r.ie()||r.ie()>9?!0:!1,hideWhenBlur:!1,classNames:"wgt-bubble-"+a,marginFromHost:4,offset:{top:7,left:-80}}),t=n(i.getNode());return i.show(),t}}},g={buildUserbar:function(e,a){var a="object"==typeof a&&a instanceof Array?a:[];i.checkIfLogin({ifMsg:!0,onUnlogin:function(){m.render.userbar(e,"unlogin")},onLogin:function(s){function i(){var a={baikeMsg:s.msgStatus},i=a.baikeMsg.privateMsg.num+a.baikeMsg.notice.num;i>0&&e.find(".userbar_message .userbar_message_new_num").html("("+i+")"),m.render.menu(e,e.find('li[data-action="showUserMsg"]'),"userMsg",a);var t=0;for(var r in a.baikeMsg)"notice"!==r&&"privateMsg"!==r&&(t+=a.baikeMsg[r].num);if(t>0){var l=m.render.bubble(e.find('li[data-action="showUserMenu"]'),"lemmaMsg",a);l.on("click","a",function(){var e,a=n(this).attr("data-action");switch(a){case"readMessage":e=n(this).attr("data-msgType");break;case"cancelAlarm":e="all"}return e&&n.ajax({type:"GET",url:"/api/wikimessage/readmsgstatus",data:{type:e},dataType:"JSON",complete:function(){l.remove()}}),"cancelAlarm"===a?!1:void 0})}}m.render.userbar(e,"login",n.extend(s,{UIConfig:{btns:a}})),m.render.menu(e,e.find('li[data-action="showUserMenu"]'),"userMenu",{isAuthLemma:s.isAuthLemma}),i()}}),e.on("click","a",function(){var e=n(this).attr("data-action");if(e){switch(e){case"login":i.showLoginPop()}return!1}})}};s.exports=g});