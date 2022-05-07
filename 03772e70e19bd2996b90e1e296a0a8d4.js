;// bundle: page___62334f5da000bcca2c7d69017c483a84_m
;// files: ~/viewapp/widgets/captcha/captcha.js, ~/viewapp/widgets/captcha/constants/captchaConstants.js, ~/viewapp/widgets/captcha/directives/captchaDirective.js, ~/viewapp/widgets/captcha/services/captchaInterface.js, ~/viewapp/widgets/captcha/services/funCaptchaInterface.js, ~/viewapp/widgets/captcha/directives/funCaptchaDirective.js, SocialLogin.js, Tracking/FormEvents.js, ~/viewapp/common/formEvents/formEvents.js, ~/viewapp/common/formEvents/directives/formInteraction.js, ~/viewapp/common/formEvents/directives/formContext.js, ~/viewapp/common/constants/urlConstants.js, ~/viewapp/common/constants/phoneConstants.js, ~/viewapp/common/services/phoneService.js, GenericConfirmation.js, utilities/dialog.js, common/deviceMeta.js

;// ~/viewapp/widgets/captcha/captcha.js
"use strict";var captcha=angular.module("captcha",[]);

;// ~/viewapp/widgets/captcha/constants/captchaConstants.js
"use strict";captcha.constant("captchaConstants",{template:"<div id='{{captchaElem.id}}' ng-show='captchaElem.isVisible'></div>",googleTemplate:"google-captcha-template",fcTemplate:"fun-captcha-template",fcModalTemplate:"fun-captcha-modal-template"});

;// ~/viewapp/widgets/captcha/directives/captchaDirective.js
"use strict";captcha.directive("captcha",["$log","$parse","captchaConstants","captchaInterface",function(n,t,i,r){return{restrict:"A",template:i.template,link:function(i,u,f){function h(n,t,f,e){var l=u.find("#"+i.captchaElem.id),s,h;if(i.captchaElem.isVisible=!0,s=function(){c(),angular.isFunction(t)&&t()},h=function(){angular.isFunction(f)&&f()},o){r.reset(n,s,h,e);return}r.render(i.captchaElem.id,n,s,h,e),o=!0,r.execute()}function c(){var n=u.find("#"+i.captchaElem.id);n.empty(),i.captchaElem.isVisible=!1}var o,e,s;i.captchaElem={isVisible:!1},o=!1,e=t(f.captchaModel)(i),i.captchaElem.id=e.id||r.ids.defaultCaptcha,s=i.$watch(function(){return e.isActivated},function(r){if(r){var s=t(f.onCaptchaSuccess)(i)||angular.noop,c=t(f.onCaptchaError)(i)||angular.noop,l=t(f.onCaptchaResponse)(i)||angular.noop,o=t(f.captchaType)(i);if(!o){n.debug("[Captcha Error] captcha type cannot be empty");return}h(o,s,c,l),e.isActivated=!1}},!0),i.$on("$destroy",function(){s&&s()})}}}]);

;// ~/viewapp/widgets/captcha/services/captchaInterface.js
captcha.factory("captchaInterface",["$q",function(){var t=Roblox.Captcha||{};return{types:t.types,ids:t.ids,setEndpoint:t.setEndpoint,setInvisibleMode:t.setInvisibleMode,setSiteKey:t.setSiteKey,reset:t.reset,render:t.render,execute:t.execute}}]);

;// ~/viewapp/widgets/captcha/services/funCaptchaInterface.js
captcha.factory("funCaptchaInterface",["$q",function(){var t=Roblox.FunCaptcha||{};return{ids:Roblox.CaptchaConstants.ids,types:t.types,reset:t.reset,render:t.render}}]);

;// ~/viewapp/widgets/captcha/directives/funCaptchaDirective.js
"use strict";captcha.directive("funCaptcha",["$log","$uibModal","captchaConstants","funCaptchaInterface",function(n,t,i,r){return{restrict:"A",scope:{captchaModel:"=",onFunCaptchaSuccess:"&",onFunCaptchaError:"&",onFunCaptchaSolved:"&",onFunCaptchaLoaded:"&",onFunCaptchaSuppress:"&",onFunCaptchaShown:"&",onFunCaptchaClosed:"&",captchaType:"=",credentialsValue:"=",credentialsType:"=",showInModal:"="},templateUrl:i.fcTemplate,link:function(u,f){function a(){u.showInModal&&(u.showContainer=!1,s=t.open({templateUrl:i.fcModalTemplate,keyboard:!1,backdrop:"static"}),s.rendered.then(function(){c=angular.element("#funcaptcha-modal-body"),l=angular.element("#"+u.captchaElem.id).detach(),c.append(l),u.showContainer=!0}),s.result.then(function(){f.append(angular.element("#"+u.captchaElem.id).detach()),u.showContainer=!1,u.onFunCaptchaClosed&&u.onFunCaptchaClosed()})),u.onFunCaptchaShown&&u.onFunCaptchaShown()}function v(){u.showInModal&&s&&s.close(),u.onFunCaptchaSolved&&u.onFunCaptchaSolved()}var o=u.captchaModel,s,c,l,h;u.captchaElem={id:o.id},u.showContainer=!0,h=u.$watch(function(){return o.isActivated},function(t){if(t){var f={successCb:u.onFunCaptchaSuccess||angular.noop,errorCb:function(n){u.onFunCaptchaError&&u.onFunCaptchaError({errorCode:n})},solvedCb:v,loadedCb:u.onFunCaptchaLoaded||angular.noop,suppressCb:u.onFunCaptchaSuppress||angular.noop,shownCb:a,cType:u.captchaType};if(!f.cType){n.debug("[Captcha Error] captcha type cannot be empty");return}o.extraValidationParams?f.extraValidationParams=o.extraValidationParams:u.credentialsValue&&u.credentialsType&&(f.extraValidationParams={credentialsValue:u.credentialsValue,credentialsType:u.credentialsType}),r.render(u.captchaElem.id,f),o.isActivated=!1}},!0),u.$on("$destroy",function(){h&&h()})}}}]);

;// SocialLogin.js
var Roblox=Roblox||{};typeof Roblox.SocialLogin=="undefined"&&(Roblox.SocialLogin=new function(){function t(){gigya.socialize.getUserInfo({callback:i})}function i(t){var i=$("#SocialIdentitiesInformation").data("rbx-login");$.ajax({url:i,method:"POST",data:{currentUid:t.UID},success:n,error:r})}function r(){$(".connect-button[data-rbx-provider]").each(function(){var n=$(this).data("rbx-provider"),t=$("#connect-"+n);t.text("Sorry, an error occurred. Please try again later.")})}function n(){gigya.socialize.getUserInfo({callback:u})}function u(n){var t=[];$(".connect-button[data-rbx-provider]").each(function(){t.push($(this.valueOf()).data("rbx-provider"))}),$(t).each(function(){var i=this.valueOf(),t="connect-"+i;n.user.identities.hasOwnProperty(i)?($("#"+t+" .connect-button").hide(),$("#"+t+" .nickname").text(n.user.identities[i].nickname),$("#"+t+" .disconnect-link").html("Disconnect"),i==="facebook"&&$("#FacebookConnectCard").length&&($("#FacebookConnectCard p").html("You've successfully connected as: <b>"+n.user.nickname+"</b>"),$("#FacebookConnectCard #connect-facebook").hide(),$("#FacebookConnectCard").fadeOut(5e3))):($("#"+t+" .nickname").html(""),$("#"+t+" .disconnect-link").html(""),$("#"+t+" .connect-button").show())})}function f(t){gigya.socialize.addConnection({provider:t,callback:function(){var i=$("#SocialIdentitiesInformation").data("rbx-update"),t="socialStatusBar";$.ajax({url:i,method:"POST",success:function(){n()},error:function(n){$("#"+t).html(JSON.parse(n.responseText).message),$("#"+t).show().delay(5e3).fadeOut(1e3)}})}})}function e(t){var r=$("#SocialIdentitiesInformation").data("rbx-disconnect"),i="socialStatusBar";$.ajax({url:r,method:"POST",data:{provider:t},success:function(){n()},error:function(n){$("#"+i).html(JSON.parse(n.responseText).message),$("#"+i).show().delay(5e3).fadeOut(1e3)}})}function o(n,t){var i=$("#SocialIdentitiesInformation").data("rbx-login-redirect-url"),r,u;typeof i!="undefined"&&(r="https://"+window.location.hostname+(window.location.port?":"+window.location.port:"")+i,u={provider:n,authFlow:t,redirectMethod:"post",redirectURL:r},gigya.socialize.login(u))}return{updateLoginStatus:t,showConnectionsUi:n,addConnection:f,removeConnection:e,login:o}}),$(function(){var n=".social-login",t="#SocialIdentitiesInformation";typeof $("#SocialIdentitiesInformation").data("user-is-authenticated")!="undefined"&&Roblox.SocialLogin.updateLoginStatus(),$(".connect-button").click(function(){Roblox.SocialLogin.addConnection($(this).data("rbx-provider"))}),$(".disconnect-link").click(function(){Roblox.SocialLogin.removeConnection($(this).data("rbx-provider"))});$("body").on("click",n,function(n){var i=$(t),r=i.data("context"),u="fbLoginSubmit";Roblox.FormEvents&&r&&Roblox.FormEvents.SendInteractionClick(r,u),typeof i.data("force-use-redirect")!="undefined"?Roblox.SocialLogin.login($(this).data("rbx-provider"),"redirect"):Roblox.SocialLogin.login($(this).data("rbx-provider"),"popup"),n.preventDefault()})});

;// Tracking/FormEvents.js
typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.FormEvents=="undefined"&&(Roblox.FormEvents=function(){function n(n,t,i){Roblox.EventStream&&Roblox.EventStream.SendEvent(n,t,i)}function t(t,i,r,u){var f={msg:u,input:r,field:i,vis:!0};n("formValidation",t,f)}function i(t,i){var r={aType:"focus",field:i};n("formInteraction",t,r)}function r(t,i,r){var u={aType:"offFocus",field:i};r&&(u.input=r),n("formInteraction",t,u)}function u(t,i,r,u){var f={aType:"click",field:i};r&&(f.input=r),u&&(f=$.extend(f,u)),n("formInteraction",t,f)}return{SendValidationFailed:t,SendInteractionFocus:i,SendInteractionOffFocus:r,SendInteractionClick:u}}());

;// ~/viewapp/common/formEvents/formEvents.js
"use strict";var formEvents=angular.module("roblox.formEvents",[]);

;// ~/viewapp/common/formEvents/directives/formInteraction.js
"use strict";formEvents.directive("rbxFormInteraction",function(){return{require:"^form",restrict:"A",link:function(n,t,i,r){var u=i.sendInputValue;t.bind("blur",function(){if(Roblox.FormEvents){var n=angular.element(this),t;u&&(t=n.val()),Roblox.FormEvents.SendInteractionOffFocus(r.context,n.attr("name"),t)}}).bind("focus",function(){Roblox.FormEvents&&Roblox.FormEvents.SendInteractionFocus(r.context,angular.element(this).attr("name"))})}}});

;// ~/viewapp/common/formEvents/directives/formContext.js
"use strict";formEvents.directive("rbxFormContext",function(){return{require:"form",restrict:"A",link:function(n,t,i,r){var u=r.$name;r.context=i.context+u.charAt(0).toUpperCase()+u.substr(1)}}});

;// ~/viewapp/common/constants/urlConstants.js
robloxApp.constant("urlConstants",{urlQueryStringPrefix:"?",urlQueryParameterSeparator:"&",hashSign:"#"});

;// ~/viewapp/common/constants/phoneConstants.js
robloxApp.constant("phoneConstants",{templates:{verifyPhoneModal:"verify-phone-modal"},urls:{phonePrefixes:"/v1/countries/phone-prefix-list",addPhone:"/v1/phone",verifyPhone:"/v1/phone/verify",resendCode:"/v1/phone/resend"},modalTypes:{addPhone:"addPhone",verifyPhone:"verifyPhone"},minimumPhoneLength:4,underscore:"_",phonePrefixCharacter:"+",defaultCountryCode:"US",unitedStatesPrefix:{name:"United States",localizedName:"United States",code:"US",prefix:1}});

;// ~/viewapp/common/services/phoneService.js
robloxApp.factory("phoneService",["$q","httpService","phoneConstants",function(n,t,i){function f(n){var i=n+r,f={url:i};return t.httpGet(f,null).then(function(n){var t;return _.reject(n,function(n){return n.code===u?(t=n,!0):!1}),t&&n.unshift(t),n})}function e(n){var r=Roblox.EnvironmentUrls.accountInformationApi+i.urls.addPhoneV2,u={url:r},f={countryCode:n.countryCode,prefix:n.prefix,phone:n.phone,password:n.password};return t.httpPost(u,f)}function o(n){var r=Roblox.EnvironmentUrls.accountInformationApi+i.urls.verifyPhoneV2,u={url:r},f={code:n.code};return t.httpPost(u,f)}function s(){var n=Roblox.EnvironmentUrls.accountInformationApi+i.urls.resendCodeV2,r={url:n};return t.httpPost(r)}function h(n){return!n||n.length<i.minimumPhoneLength?!1:/\d/.test(n)?/^[\d|\W|_]+$/.test(n):!1}var r=i.urls.phonePrefixes,u=i.defaultCountryCode;return{getPhonePrefixes:f,addPhone:e,verifyPhone:o,resendCode:s,isPhoneNumber:h}}]);

;// GenericConfirmation.js
typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.GenericConfirmation=="undefined"&&(Roblox.GenericConfirmation=function(){function w(){n.isOpen=!1,t()}function k(t){var a,e,o,s,l;n.isOpen=!0,a={titleText:"",bodyContent:"",footerText:"",acceptText:Roblox.Resources.GenericConfirmation.yes,declineText:Roblox.Resources.GenericConfirmation.No,acceptColor:u,declineColor:f,xToCancel:!1,onAccept:function(){return!1},onDecline:function(){return!1},onCancel:function(){return!1},imageUrl:null,allowHtmlContentInBody:!1,allowHtmlContentInFooter:!1,dismissable:!0,fieldValidationRequired:!1,onOpenCallback:function(){}},t=$.extend({},a,t),c.overlayClose=t.dismissable,c.escClose=t.dismissable,e=$(i),e.html(t.acceptText),e.attr("class","btn-large "+t.acceptColor),e.unbind(),e.bind("click",function(){return v(e)?!1:(t.fieldValidationRequired?nt(t.onAccept):h(t.onAccept),!1)}),o=$(r),o.html(t.declineText),o.attr("class","btn-large "+t.declineColor),o.unbind(),o.bind("click",function(){return v(o)?!1:(h(t.onDecline),!1)}),$('[data-modal-handle="confirmation"] div.Title').text(t.titleText),s=$("[data-modal-handle='confirmation']"),t.imageUrl==null?s.addClass("noImage"):(s.find("img.GenericModalImage").attr("src",t.imageUrl),s.removeClass("noImage")),t.allowHtmlContentInBody?$("[data-modal-handle='confirmation'] div.Message").html(t.bodyContent):$("[data-modal-handle='confirmation'] div.Message").text(t.bodyContent),$.trim(t.footerText)==""?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').hide():$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').show(),t.allowHtmlContentInFooter?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').html(t.footerText):$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').text(t.footerText),$("[data-modal-handle='confirmation']").modal(c),l=$("a.genericmodal-close"),l.unbind(),l.bind("click",function(){return h(t.onCancel),!1}),t.xToCancel||l.hide(),t.onOpenCallback()}function a(n){n.hasClass(f)?n.addClass(s):n.hasClass(l)?n.addClass(e):n.hasClass(u)&&n.addClass(o)}function v(n){return n.hasClass(o)||n.hasClass(s)||n.hasClass(e)?!0:!1}function b(){var n=$(i),t=$(r);a(n),a(t)}function g(){var u=$(i),t=$(r),n=o+" "+s+" "+e;u.removeClass(n),t.removeClass(n)}function p(){if(n.isOpen){var t=$(i);t.click()}}function y(){var n=$(r);n.click()}function t(t){n.isOpen=!1,typeof t!="undefined"?$.modal.close(t):$.modal.close()}function h(n){t(),typeof n=="function"&&n()}function nt(n){if(typeof n=="function"){var i=n();if(i!=="undefined"&&i==!1)return!1}t()}var l="btn-primary",u="btn-neutral",f="btn-negative",e="btn-disabled-primary",o="btn-disabled-neutral",s="btn-disabled-negative",d="btn-none",i="#roblox-confirm-btn",r="#roblox-decline-btn",n={isOpen:!1},c={overlayClose:!0,escClose:!0,opacity:80,overlayCss:{backgroundColor:"#000"},onClose:w};return{open:k,close:t,disableButtons:b,enableButtons:g,clickYes:p,clickNo:y,status:n,green:l,blue:u,gray:f,none:d}}()),$(document).keypress(function(n){Roblox.GenericConfirmation.status.isOpen&&n.which===13&&Roblox.GenericConfirmation.clickYes()});

;// utilities/dialog.js
typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.Dialog=="undefined"&&(Roblox.Dialog=function(){function g(f){var k,c,v,w,o,b;n.isOpen=!0,k={titleText:"",bodyContent:"",footerText:"",footerMiddleAligned:!1,acceptText:Roblox.Lang.ControlsResources["Action.Yes"]||a.Yes,declineText:Roblox.Lang.ControlsResources["Action.No"]||a.No,acceptColor:h,declineColor:s,xToCancel:!1,onAccept:function(){return!1},onDecline:function(){return!1},onCancel:function(){return!1},imageUrl:null,showAccept:!0,showDecline:!0,allowHtmlContentInBody:!1,allowHtmlContentInFooter:!1,dismissable:!0,fieldValidationRequired:!1,onOpenCallback:function(){},onCloseCallback:t,cssClass:null,checkboxAgreementText:Roblox.Lang.ControlsResources["Action.Agree"]||a.Agree,checkboxAgreementRequired:!1},f=$.extend({},k,f),i.overlayClose=f.dismissable,i.escClose=f.dismissable,f.onCloseCallback&&(i.onClose=function(){f.onCloseCallback(),t()}),c=$(u),c.html(f.acceptText),c.attr("class",f.acceptColor),c.unbind(),c.bind("click",function(){return p(c)?!1:(f.fieldValidationRequired?nt(f.onAccept):l(f.onAccept),!1)}),v=$(e),v.html(f.declineText),v.attr("class",f.declineColor),v.unbind(),v.bind("click",function(){return p(v)?!1:(l(f.onDecline),!1)}),w=$(tt),w.unbind(),w.bind("change",function(){w.is(":checked")?y(c):r(c)}),o=$('[data-modal-type="confirmation"]'),o.find(".modal-title").text(f.titleText),f.imageUrl==null?o.addClass("noImage"):(o.find("img.modal-thumb").attr("src",f.imageUrl),o.removeClass("noImage")),n.extraClass&&(o.removeClass(n.extraClass),n.extraClass=!1),f.cssClass!=null&&(o.addClass(f.cssClass),n.extraClass=f.cssClass),f.allowHtmlContentInBody?o.find(".modal-message").html(f.bodyContent):o.find(".modal-message").text(f.bodyContent),f.checkboxAgreementRequired?(r(c),o.find(".modal-checkbox.checkbox > input").prop("checked",!1),o.find(".modal-checkbox.checkbox > label").text(f.checkboxAgreementText),o.find(".modal-checkbox.checkbox").show()):(o.find(".modal-checkbox.checkbox > input").prop("checked",!0),o.find(".modal-checkbox.checkbox").hide()),$.trim(f.footerText)==""?o.find(".modal-footer").hide():o.find(".modal-footer").show(),f.allowHtmlContentInFooter?o.find(".modal-footer").html(f.footerText):o.find(".modal-footer").text(f.footerText),f.footerMiddleAligned&&o.find(".modal-footer").addClass("modal-footer-center"),o.modal(i),b=$(d+" .modal-header .close"),b.unbind(),b.bind("click",function(){return l(f.onCancel),!1}),f.xToCancel||b.hide(),f.showAccept||c.hide(),f.showDecline||v.hide(),$("#rbx-body").addClass("modal-mask"),f.onOpenCallback()}function r(n){n.hasClass(s)?n.addClass(f):n.hasClass(v)?n.addClass(o):n.hasClass(h)&&n.addClass(c)}function p(n){return n.hasClass(c)||n.hasClass(f)||n.hasClass(o)?!0:!1}function rt(){var n=$(u),t=$(e);r(n),r(t)}function y(n){n.hasClass(f)?(n.removeClass(f),n.addClass(s)):n.hasClass(o)?(n.removeClass(o),n.addClass(v)):n.hasClass(c)&&(n.removeClass(c),n.addClass(h))}function w(){var n=$(u),t=$(e);y(n),y(t)}function k(){if(n.isOpen){var t=$(u);t.click()}}function b(){var n=$(e);n.click()}function t(t){n.isOpen=!1,typeof t!="undefined"?$.modal.close(t):$.modal.close(),$("#rbx-body").removeClass("modal-mask")}function l(n){t(),typeof n=="function"&&n()}function nt(n){if(typeof n=="function"){var i=n();if(i!=="undefined"&&i==!1)return!1}t()}function ut(n,t){var i=$(".modal-body");n?(i.find(".modal-btns").hide(),i.find(".modal-processing").show()):(i.find(".modal-btns").show(),i.find(".modal-processing").hide()),typeof t!="undefined"&&t!==""&&$.modal.close("."+t)}var d=".simplemodal-container",v="btn-primary-md",h="btn-secondary-md",s="btn-control-md",o="btn-primary-md disabled",c="btn-secondary-md disabled",f="btn-control-md disabled",it="btn-none",u=".modal-btns #confirm-btn",e=".modal-btns #decline-btn",tt="#modal-checkbox-input",n={isOpen:!1},i={overlayClose:!0,escClose:!0,opacity:80,zIndex:1040,overlayCss:{backgroundColor:"#000"},onClose:t,focus:!1},a={Yes:"Yes",No:"No",Agree:"Agree"};return{open:g,close:t,disableButtons:rt,enableButtons:w,clickYes:k,clickNo:b,status:n,toggleProcessing:ut,green:v,blue:h,white:s,none:it}}()),$(document).keypress(function(n){Roblox.Dialog.isOpen&&n.which===13&&Roblox.Dialog.clickYes()});

;// common/deviceMeta.js
var Roblox=Roblox||{};Roblox.DeviceMeta=function(){var t=document.querySelector('meta[name="device-meta"]');if(t===null){console.debug("Error loading device information from meta tag - please check if meta tag is present");return}var n=t.dataset||{},i={android:"android",ios:"ios",xbox:"xbox",uwp:"uwp",amazon:"amazon",win32:"win32",universalapp:"universalApp",unknown:"unknown"},r={computer:"computer",tablet:"tablet",phone:"phone",console:"console"};return function(){return{deviceType:r[n.deviceType]||"",appType:i[n.appType]||"",isInApp:n.isInApp==="true",isDesktop:n.isDesktop==="true",isPhone:n.isPhone==="true",isTablet:n.isTablet==="true",isConsole:n.isConsole==="true",isAndroidApp:n.isAndroidApp==="true",isIosApp:n.isIosApp==="true",isUWPApp:n.isUwpApp==="true",isXboxApp:n.isXboxApp==="true",isAmazonApp:n.isAmazonApp==="true",isWin32App:n.isWin32App==="true",isStudio:n.isStudio==="true",isIosDevice:n.isIosDevice==="true",isAndroidDevice:n.isAndroidDevice==="true",isUniversalApp:n.isUniversalApp==="true"}}}();

;//Bundle detector
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('page');