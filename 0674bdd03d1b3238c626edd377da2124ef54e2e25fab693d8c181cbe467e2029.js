!function(){"use strict";var X,r={n:function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},d:function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}},Z=React,ee=r.n(Z),n=ReactDOM,a=CoreUtilities,i=Roblox,e=r.n(i),t=ReactUtilities,ne={ActionSignUpCapitalized:"Action.SignUpCapitalized",ActionLogInCapitalized:"Action.LogInCapitalized",ActionDeviceCode:"Action.DeviceCode",ActionResendEmail:"Action.ResendEmail",ActionSendVerificationEmail:"Action.SendVerificationEmail",ActionOk:"Action.Ok",ActionAnotherLoggedInDevice:"Action.AnotherLoggedInDevice",ActionForgotPasswordOrUsernameQuestionCapitalized:"Action.ForgotPasswordOrUsernameQuestionCapitalized",DescriptionCurfewMessage:"Description.CurfewMessage",HeadingLoginRoblox:"Heading.LoginRoblox",LabelNoAccount:"Label.NoAccount",LabelPassword:"Label.Password",LabelUsername:"Label.Username",LabelUsernameEmailPhone:"Label.UsernameEmailPhone",LabelLoginWithYour:"Label.LoginWithYour",LabelUnverifiedEmailInstructions:"Label.UnverifiedEmailInstructions",LabelNotReceived:"Label.NotReceived",LabelVerificationEmailSent:"Label.VerificationEmailSent",LabelEmailNeedsVerification:"Label.EmailNeedsVerification",MessageUnknownErrorTryAgain:"Message.UnknownErrorTryAgain",MessageUsernameAndPasswordRequired:"Message.UsernameAndPasswordRequired",ResponseAccountNotFound:"Response.AccountNotFound",ResponseAccountIssueErrorContactSupport:"Response.AccountIssueErrorContactSupport",ResponseTooManyAttemptsPleaseWait:"TooManyAttemptsPleaseWait",ResponseCaptchaErrorFailedToLoad:"Response.CaptchaErrorFailedToLoad",ResponseCaptchaErrorFailedToVerify:"Response.CaptchaErrorFailedToVerify",ResponseGlobalAppAccessError:"Response.GlobalAppAccessError",ResponseIncorrectEmailOrPassword:"Response.IncorrectEmailOrPassword",ResponseIncorrectPhoneOrPassword:"Response.IncorrectPhoneOrPassword",ResponseIncorrectUsernamePassword:"Response.IncorrectUsernamePassword",ResponseEmailLinkedToMultipleAccountsLoginWithUsername:"Response.EmailLinkedToMultipleAccountsLoginWithUsername",ResponseLoginWithUsername:"Response.LoginWithUsername",ResponseUnverifiedEmailLoginWithUsername:"Response.UnverifiedEmailLoginWithUsername",ResponseUnverifiedPhoneLoginWithUsername:"Response.UnverifiedPhoneLoginWithUsername",ResponseVerificationError:"Response.VerificationError"},o={securityNotification:i.EnvironmentUrls.websiteUrl+"/login/securityNotification",koreaIdVerification:i.EnvironmentUrls.websiteUrl+"/id-verification/korea/login",forgotCredentialsUrl:i.EnvironmentUrls.websiteUrl+"/login/forgot-password-or-username"},c="WebsiteLogin_",l="react-2sv-container",s="react-captcha-container",u="react-security-questions-container",te=1,re=2,ae=3,oe=4,ie=6,ce=7,le=9,se=10,ue=11,de=12,fe=13,pe=14,he=16,me=18,ge=3,ve="FirstAttempt",Ee="Attempt",Ce="Success",ye="Captcha",be="PasswordResetRequired",we="UnverifiedAccount",Ie="InvalidCredentials",Se="AccountNotFound",Ae="AccountIssue",Le="TooManyAttempts",Te="DefaultLoginRequired",Ue="CaptchaLoadFailed",Re="CaptchaVerifyFailed",ke="CaptchaUnknownError",Pe="LuoBuUserDenied",Ne="ScreenTimeRestricted",xe="UnknownError",Ve="SecurityQuestionRequired",d={common:["Common.Captcha"],feature:"Authentication.Login"},f={common:[],feature:"Feature.IdVerification"};function p(e){return i.UrlParser?(e=i.UrlParser.getParameterValueByName(e,!1))&&encodeURIComponent(e):null}function De(e){window.location.href=e}function h(e){return new RegExp("^\\w+([-_+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$").test(e)}function m(e){return!(!e||e.length<4)&&(!!/\d/.test(e)&&/^[\d|\W|_]+$/.test(e))}function Me(e){var n=(t=i.CaptchaConstants.errorCodes).failedToLoadProviderScript,t=t.failedToVerify,r=ue,a=de,o=fe;switch(e){case n:return r;case t:return a;default:return o}}function Fe(){De(o.securityNotification)}function Oe(e){R&&e&&R.fireEvent(c+e)}function We(e,n){switch(e){case le:case se:case te:return function(e,n){switch(e){case te:return n===X.Email?ne.ResponseIncorrectEmailOrPassword:n===X.PhoneNumber?ne.ResponseIncorrectPhoneOrPassword:ne.ResponseIncorrectUsernamePassword;case le:return n===X.Email?ne.ResponseEmailLinkedToMultipleAccountsLoginWithUsername:n===X.PhoneNumber?ne.ResponseLoginWithUsername:"";case se:return n===X.Email?ne.ResponseUnverifiedEmailLoginWithUsername:n===X.PhoneNumber?ne.ResponseUnverifiedPhoneLoginWithUsername:"";default:return""}}(e,n);case ae:return ne.ResponseAccountNotFound;case ie:return ne.ResponseAccountIssueErrorContactSupport;case ce:return ne.ResponseTooManyAttemptsPleaseWait;case ue:return ne.ResponseCaptchaErrorFailedToLoad;case de:return ne.ResponseCaptchaErrorFailedToVerify;case pe:return ne.ResponseGlobalAppAccessError;case fe:return ne.MessageUnknownErrorTryAgain;case he:return ne.DescriptionCurfewMessage;default:return ne.MessageUnknownErrorTryAgain}}function Qe(e){return h(e)?X.Email:m(e)?X.PhoneNumber:X.Username}function Be(){var e=function(e){if(!e)return"/";var n=e;return-1<e.indexOf(k.urlQueryStringPrefix)?n+=k.urlQueryParameterSeparator:n+=k.urlQueryStringPrefix,n+="nl=true"}((null==(e=U())?void 0:e.getAttribute("data-return-url"))||"");return a.urlService.getAbsoluteUrl(e)}function g(e){return i.EnvironmentUrls.authApi+e}function je(t,r){return N(void 0,void 0,Promise,function(){var n;return x(this,function(e){switch(e.label){case 0:return n=g("/v3/users/"+t+"/two-step-verification/login"),n={url:n,withCredentials:!0},[4,a.httpService.post(n,r)];case 1:return[2,e.sent().data]}})})}function qe(t){return N(void 0,void 0,Promise,function(){var n;return x(this,function(e){switch(e.label){case 0:return n=g("/v2/login"),n={url:n,withCredentials:!0},[4,a.httpService.post(n,t)];case 1:return[2,e.sent().data]}})})}function v(e){Ye.eventStreamService.sendEventWithTarget(Ke.formInteraction,Je.context.loginForm,{field:e.field,aType:e.aType})}function E(){v({field:Je.field.username,aType:Je.aType.focus})}function C(){v({field:Je.field.username,aType:Je.aType.offFocus})}function y(){v({field:Je.field.password,aType:Je.aType.focus})}function b(){v({field:Je.field.password,aType:Je.aType.offFocus})}function w(e){var n=[];return e&&"object"==typeof e&&(e=e.errors)instanceof Array?(e.forEach(function(e){!e||"object"!=typeof e||"number"==typeof(e=e.code)&&n.push(e)}),n):[]}function ze(e){var n=[];return e&&"object"==typeof e&&(e=e.errors)instanceof Array?(e.forEach(function(e){!e||"object"!=typeof e||"string"==typeof(e=e.fieldData)&&n.push(e)}),n):[]}function Ge(e){var n=e.dataExchange,t=e.unifiedCaptchaId,r=e.onCaptchaChallengeCompleted,a=e.onCaptchaChallengeInvalidated,o=e.onCaptchaChallengeAbandoned,i=e.onUnknownError,c=(e=(0,Z.useState)(null))[0],l=e[1];return(0,Z.useEffect)(function(){var e;n&&t&&(e={dataExchange:n,unifiedCaptchaId:t},null===c?(e={containerId:F,actionType:M.ActionType.Login,appType:null,dataExchangeBlob:e.dataExchange,unifiedCaptchaId:e.unifiedCaptchaId,shouldDynamicallyLoadTranslationResources:!1,onChallengeDisplayed:function(e){return null},onChallengeCompleted:function(e){l(null),r(e)},onChallengeInvalidated:function(e){l(null),a(e)},renderInline:!1,onModalChallengeAbandoned:function(e){return l(function(){return e}),o(),null}},M?M.renderChallenge(e).then(function(e){e||i()}).catch(function(){i()}):console.error("no captcha service available")):c())},[n+t]),ee().createElement("div",{id:F})}function _e(e){var n=e.userId,t=e.challengeId,r=e.on2svChallengeCompleted,a=e.on2svChallengeInvalidated,o=e.on2svChallengeAbandoned,i=e.onUnknownError,c=l;return(0,Z.useEffect)(function(){n&&t&&O.renderChallenge({containerId:c,userId:n,challengeId:t,actionType:O.ActionType.Login,renderInline:!1,shouldShowRememberDeviceCheckbox:!0,shouldDynamicallyLoadTranslationResources:!1,onChallengeCompleted:r,onChallengeInvalidated:a,onModalChallengeAbandoned:o}).then(function(e){e||i()}).catch(function(){i()})},[n,t]),ee().createElement("div",{id:c})}function I(e){Ye.localStorageService.setLocalStorage("identityVerificationLoginTicket",e)}function S(){var e=o.koreaIdVerification;window.location.href=e}function He(e){var n=e.userId,t=e.sessionId,r=e.onSecurityQuestionsChallengeCompleted,a=e.onSecurityQuestionsChallengeInvalidated,o=e.onSecurityQuestionsChallengeAbandoned,i=e.onUnknownError,c=u;return(0,Z.useEffect)(function(){n&&t&&Q.renderChallenge({containerId:c,userId:n,sessionId:t,renderInline:!1,shouldDynamicallyLoadTranslationResources:!1,onChallengeCompleted:r,onChallengeInvalidated:a,onModalChallengeAbandoned:o}).then(function(e){e||i()}).catch(function(){i()})},[n,t]),ee().createElement("div",{id:c})}function A(){function e(e){var n,t,r,a,o,i;e.detail&&(o=e.detail.inputParams,t=(n=o).userId,r=n.challengeId,a=n.onChallengeCompleted,e=n.onChallengeInvalidated,o=n.onModalChallengeAbandoned,i=n.onUnknownError,j.renderChallenge({containerId:c,userId:t,challengeId:r,actionType:j.ActionType.Login,renderInline:!1,shouldShowRememberDeviceCheckbox:!0,shouldDynamicallyLoadTranslationResources:!1,onChallengeCompleted:a,onChallengeInvalidated:e,onModalChallengeAbandoned:o}).then(function(e){e||i()}).catch(function(){i()}))}var c=l;return(0,Z.useEffect)(function(){return window.addEventListener("render2svChallenge",e),function(){window.removeEventListener("render2svChallenge",e)}},[]),ee().createElement("div",{id:c})}function L(){var t=s,e=(0,Z.useState)(null),r=e[0],a=e[1];return(0,Z.useEffect)(function(){function e(e){var n;e.detail&&(n=e.detail.inputParams,e=n,null===r?(n=e.unifiedCaptchaId,e=e.dataExchange,n={containerId:t,actionType:q.ActionType.Login,appType:null,dataExchangeBlob:e,unifiedCaptchaId:n,shouldDynamicallyLoadTranslationResources:!1,onChallengeDisplayed:function(){return null},onChallengeCompleted:function(e){a(null);e=new CustomEvent("ReactCaptchaSuccess",{detail:{data:e}});window.dispatchEvent(e)},onChallengeInvalidated:function(e){a(null);e=new CustomEvent("ReactCaptchaError",{detail:{data:e}});window.dispatchEvent(e)},renderInline:!1,onModalChallengeAbandoned:function(e){return a(function(){return e}),null}},q?q.renderChallenge(n):console.error("No captcha service available")):r())}return window.addEventListener("CaptchaDataOptionsUpdated",e),function(){window.removeEventListener("CaptchaDataOptionsUpdated",e)}},[t,r]),ee().createElement("div",{id:t})}function T(){var c=u;return(0,Z.useEffect)(function(){function e(e){var n,t,r,a,o,i;e.detail&&(o=e.detail.inputParams,t=(n=o).userId,r=n.sessionId,a=n.onChallengeCompleted,e=n.onChallengeInvalidated,o=n.onModalChallengeAbandoned,i=n.onUnknownError,z.renderChallenge({containerId:c,userId:t,sessionId:r,renderInline:!1,shouldDynamicallyLoadTranslationResources:!1,onChallengeCompleted:a,onChallengeInvalidated:e,onModalChallengeAbandoned:o}).then(function(e){e||i()}).catch(function(){i()}))}return window.addEventListener("renderSecurityQuestionsChallenge",e),function(){window.removeEventListener("renderSecurityQuestionsChallenge",e)}},[c]),ee().createElement("div",{id:c})}(V=X=X||{}).Username="Username",V.Email="Email",V.PhoneNumber="PhoneNumber",V.AuthToken="AuthToken",(W={}).Email="Email",W.Authenticator="Authenticator",W.RecoveryCode="RecoveryCode";var U=function(){return document.getElementById("react-login-container")},R=window.EventTracker,k={urlQueryStringPrefix:"?",urlQueryParameterSeparator:"&",hashSign:"#"},P=function(){var e=U();return"true"===(null==e?void 0:e.getAttribute("data-enable-react-ui"))},N=function(e,i,c,l){return new(c=c||Promise)(function(t,n){function r(e){try{o(l.next(e))}catch(e){n(e)}}function a(e){try{o(l.throw(e))}catch(e){n(e)}}function o(e){var n;e.done?t(e.value):((n=e.value)instanceof c?n:new c(function(e){e(n)})).then(r,a)}o((l=l.apply(e,i||[])).next())})},x=function(t,r){var a,o,i,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:n(0),throw:n(1),return:n(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function n(n){return function(e){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,o&&(i=2&n[0]?o.return:n[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(!(i=0<(i=c.trys).length&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=r.call(t,c)}catch(e){n=[6,e],o=0}finally{a=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,e])}}},V={canVerifyCredentials:function(t){return N(void 0,void 0,Promise,function(){var n;return x(this,function(e){switch(e.label){case 0:return n=g("/v2/credentials/verification"),n={url:n},[4,a.httpService.post(n,t)];case 1:return[2,e.sent().data]}})})},getAuthTokenMetadata:function(){return N(void 0,void 0,Promise,function(){var n;return x(this,function(e){switch(e.label){case 0:return n=i.EnvironmentUrls.apiGatewayUrl+"/auth-token-service/v1/login/metadata",n={url:n},[4,a.httpService.get(n)];case 1:return[2,e.sent().data]}})})},loginWithVerificationToken:je,login:qe,utils:{getUrlParamValue:p,getLoginErrorCodeFromCaptchaErrorCode:Me,incrementEphemeralCounter:Oe,isPhoneNumber:m,isValidEmail:h,navigateToSecurityNotificationPage:Fe}},Ye=CoreRobloxUtilities,Je={eventName:{loginOtherDevice:"loginOtherDevice"},context:{loginPage:"loginPage",loginForm:"LoginForm"},aType:{click:"click",offFocus:"offFocus",focus:"focus"},field:{loginOtherDevice:"loginOtherDevice",loginSubmitButtonName:"loginSubmit",password:"password",username:"username"}},Ke=Ye.eventStreamService.eventTypes,$e=function(e){var n=w(e);return"object"==typeof e&&w(e.data).forEach(function(e){return n.push(e)}),n[0]||null},D=ReactStyleGuide,Xe=(0,t.withTranslations)(function(e){var n=e.captchaId,t=e.captchaToken,r=e.credentialValue,a=e.password,o=e.isLoading,i=e.errorMsg,c=e.translate,l=e.onFormSubmit,s=e.onCredentialValueChange,u=e.onPasswordChange;return(0,Z.useEffect)(function(){n&&t&&l(!1)},[n+t]),ee().createElement("div",{id:"login-form"},ee().createElement("div",null,ee().createElement("div",{className:"login-form-container"},ee().createElement("form",{className:"login-form",name:"loginForm",onSubmit:function(e){e.preventDefault(),e.stopPropagation()}},ee().createElement("div",{className:"form-group username-form-group"},ee().createElement("label",{htmlFor:"login-username",className:"sr-only"},c(ne.LabelUsernameEmailPhone)),ee().createElement("input",{id:"login-username",name:"username",type:"text",className:"form-control input-field",onFocus:E,onBlur:C,placeholder:c(ne.LabelUsernameEmailPhone),value:r,onChange:function(e){return s(e.target.value)}})),ee().createElement("div",{className:"form-group password-form-group"},ee().createElement("label",{htmlFor:"login-password",className:"sr-only"},c(ne.LabelPassword)),ee().createElement("input",{id:"login-password",name:"password",type:"password",className:"form-control input-field",onFocus:y,onBlur:b,placeholder:c(ne.LabelPassword),value:a,onChange:function(e){return u(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&l()}}),ee().createElement("div",{"aria-live":"polite"},0<i.length&&ee().createElement("p",{className:"form-control-label xsmall text-error login-error",id:"login-form-error"},i))),o?ee().createElement(D.Loading,null):ee().createElement("button",{type:"button",id:"login-button",className:"btn-full-width login-button btn-secondary-md",onClick:function(e){return l()}},c(ne.ActionLogInCapitalized))))))},d),M=i.AccountIntegrityChallengeService.Captcha,F=s,O=i.AccountIntegrityChallengeService.TwoStepVerification,Ze=(0,t.withTranslations)(function(e){var n=e.onCrossDeviceLoginCodeValidated,e=e.translate;return(0,Z.useEffect)(function(){function e(e){e.detail&&n(e.detail)}return window.addEventListener("OnCrossDeviceCodeValidated",e),function(){window.removeEventListener("OnCrossDeviceCodeValidated",e)}},[]),ee().createElement("div",null,ee().createElement("div",{className:"alternative-login-divider-container"},ee().createElement("div",{className:"rbx-divider alternative-login-divider"}),ee().createElement("div",{className:"divider-text-container"},ee().createElement("span",{className:"divider-text xsmall"},e(ne.LabelLoginWithYour)))),ee().createElement("button",{type:"button",id:"cross-device-login-button",className:"btn-full-width btn-control-md cross-device-login-button",onClick:function(){Ye.eventStreamService.sendEventWithTarget(Ke.formInteraction,Je.context.loginPage,{field:Je.field.loginOtherDevice,aType:Je.aType.click}),i.CrossDeviceLoginDisplayCodeService.openModal()}},ee().createElement("span",null,e(ne.ActionAnotherLoggedInDevice))))},d),W={storeIdentityVerificationLoginTicket:I,startIdentityVerification:S},en=(0,t.withTranslations)(function(e){var n=e.identityVerificationLoginTicket,t=e.translate,r=(0,D.createModal)(),e=r[0],a=r[1];return(0,Z.useEffect)(function(){I(n),n&&a.open()},[n]),ee().createElement(e,{title:t("Title.VerificationRequired"),body:t("Description.VerificationRequired"),neutralButtonText:t("Action.StartVerification"),onNeutral:S,closeable:!1})},f),Q=i.AccountIntegrityChallengeService.SecurityQuestions,nn=(0,t.withTranslations)(function(e){var n=e.translate,e=function(){var e=p("returnurl");if(e){e={ReturnUrl:e};return a.urlService.getUrlWithQueries("/account/signupredir",e)}return a.urlService.getAbsoluteUrl("/")}();return ee().createElement("div",{className:"text-center"},ee().createElement("div",{className:"signup-option"},ee().createElement("span",{className:"no-account-text"},n(ne.LabelNoAccount)),ee().createElement("a",{id:"sign-up-link",className:"text-link signup-link",href:e,target:"_self"},n(ne.ActionSignUpCapitalized))))},d),tn=(0,t.withTranslations)(function(e){var n=e.translate,e=o.forgotCredentialsUrl;return ee().createElement("div",{className:"text-center forgot-credentials-link"},ee().createElement("a",{id:"forgot-credentials-link",className:"text-link",href:e,target:"_self"},n(ne.ActionForgotPasswordOrUsernameQuestionCapitalized)))},d),rn=function(e,i,c,l){return new(c=c||Promise)(function(t,n){function r(e){try{o(l.next(e))}catch(e){n(e)}}function a(e){try{o(l.throw(e))}catch(e){n(e)}}function o(e){var n;e.done?t(e.value):((n=e.value)instanceof c?n:new c(function(e){e(n)})).then(r,a)}o((l=l.apply(e,i||[])).next())})},an=function(t,r){var a,o,i,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:n(0),throw:n(1),return:n(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function n(n){return function(e){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,o&&(i=2&n[0]?o.return:n[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(!(i=0<(i=c.trys).length&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=r.call(t,c)}catch(e){n=[6,e],o=0}finally{a=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,e])}}},B=(0,t.withTranslations)(function(e){function r(e){return Boolean(null==e?void 0:e.identityVerificationLoginTicket)}function a(e){q(e.identityVerificationLoginTicket)}function o(){V(!0),De(Be())}function i(e){var n;n=e,Boolean(null===(n=null==n?void 0:n.twoStepVerificationData)||void 0===n?void 0:n.ticket)?(n={userId:(n=e).user.id.toString(),challengeId:n.twoStepVerificationData.ticket},V(!1),z(n)):r(e)?a(e):o()}function c(e,n){var t=$e(e);switch(t){case re:return _(e),0;case oe:return Y(),0;case me:return H(e),0;case le:return J(),0;default:G(),V(!1),Oe(function(e){var n=xe;switch(e){case te:n=Ie;break;case ae:n=Se;break;case ie:n=Ae;break;case ce:n=Le;break;case le:n=Te;break;case se:n=we;break;case ue:n=Ue;break;case de:n=Re;break;case pe:n=Pe;break;case fe:n=ke;break;case he:n=Ne;break;default:n=xe}return n}(t)),D(l(We(t,n)))}}var l=e.translate,n=(0,Z.useState)(""),t=n[0],s=n[1],u=(0,Z.useState)(""),d=u[0],f=u[1],p=(0,Z.useState)(""),h=p[0],m=p[1],e=(0,Z.useState)(""),g=e[0],v=e[1],n=(0,Z.useState)(""),E=n[0],C=n[1],u=(0,Z.useState)(""),y=u[0],b=u[1],p=(0,Z.useState)(0),w=p[0],I=p[1],e=(0,Z.useState)(""),S=e[0],A=e[1],n=(0,Z.useState)(""),L=n[0],T=n[1],u=(0,Z.useState)(""),U=u[0],R=u[1],p=(0,Z.useState)(X.Username),k=p[0],P=p[1],e=(0,Z.useState)(""),N=e[0],x=e[1],n=(0,Z.useState)(!1),u=n[0],V=n[1],p=(0,Z.useState)(""),e=p[0],D=p[1],n=(0,Z.useState)(!1),M=n[0],F=n[1],p=(0,Z.useState)(""),O=p[0],W=p[1],n=(0,Z.useState)(""),Q=n[0],B=n[1],j=!0,p=(0,Z.useState)(""),n=p[0],q=p[1],z=function(e){C(e.userId),b(e.challengeId)},G=function(){f(""),s("")},_=function(e){e=function(e){var n=ze(e);"object"==typeof e&&ze(e.data).forEach(function(e){return n.push(e)});e=n[0]||"",e=JSON.parse(e);return{dataExchange:e.dxBlob,unifiedCaptchaId:e.unifiedCaptchaId}}(e);Oe(ye),s((e=e).unifiedCaptchaId),f(e.dataExchange)},H=function(e){e=function(e){var n=ze(e);"object"==typeof e&&ze(e.data).forEach(function(e){return n.push(e)});e=n[0]||"",e=JSON.parse(e);return{userId:e.userId,sessionId:e.sessionId}}(e);Oe(Ve),C((e=e).userId),A(e.sessionId)},Y=function(){Oe(be),Fe()},J=function(){G(),F(!0),Oe(Te)},K=function(){D(l(ne.MessageUnknownErrorTryAgain))},$=function(e){void 0===e&&(e=!0);var n,t,n=(n=k===X.AuthToken?{ctype:k,cvalue:O,password:Q}:{ctype:M?X.Username:k,cvalue:U,password:N},h&&g&&(n.captchaId=h,n.captchaToken=g),S&&L&&(n.securityQuestionSessionId=S,n.securityQuestionRedemptionToken=L,A(""),T("")),n);if(e){if(!U||!N)return void D(l(ne.MessageUsernameAndPasswordRequired));Ye.eventStreamService.sendEventWithTarget(Ke.formInteraction,Je.context.loginPage,{field:Je.field.loginSubmitButtonName,aType:Je.aType.click}),Oe(Ee),j&&(Oe(ve),j=!1)}V(!0),t=n,rn(void 0,void 0,void 0,function(){var n;return an(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,qe(t)];case 1:return n=e.sent(),Oe(Ce),i(n),[3,3];case 2:return n=e.sent(),c(n,t.ctype),[3,3];case 3:return[2]}})})};return(0,Z.useEffect)(function(){S&&L&&$(!1)},[S&&L]),(0,Z.useEffect)(function(){Q&&O&&$(!1)},[Q,O]),(0,Z.useEffect)(function(){M&&$(!1)},[M]),ee().createElement("div",{id:"login-base"},ee().createElement("div",{className:"section-content login-section"},ee().createElement("h2",{className:"login-header"},l(ne.HeadingLoginRoblox)),ee().createElement(Xe,{captchaId:h,captchaToken:g,credentialValue:U,password:N,isLoading:u,errorMsg:e,translate:l,onFormSubmit:$,onCredentialValueChange:function(e){D(""),R(e),P(Qe(e))},onPasswordChange:function(e){D(""),x(e)}}),ee().createElement(tn,null),ee().createElement(Ze,{onCrossDeviceLoginCodeValidated:function(e){V(!0),P(X.AuthToken),W(e.code),B(e.privateKey)},translate:l}),ee().createElement(nn,null)),t&&d&&ee().createElement(Ge,{unifiedCaptchaId:t,dataExchange:d,onCaptchaChallengeCompleted:function(e){m(e.captchaId),v(e.captchaToken)},onCaptchaChallengeInvalidated:function(e){var n=Me(e.errorCode),e=Qe(U);D(l(We(n,e)))},onCaptchaChallengeAbandoned:function(){G(),V(!1)},onUnknownError:K}),E&&S&&ee().createElement(He,{userId:E,sessionId:S,onSecurityQuestionsChallengeCompleted:function(e){T(e.redemptionToken)},onSecurityQuestionsChallengeInvalidated:function(e){A(""),T(""),$(!1)},onSecurityQuestionsChallengeAbandoned:function(e){C(""),A(""),G(),V(!1)},onUnknownError:K}),E&&y&&ee().createElement(_e,{userId:E,challengeId:y,on2svChallengeCompleted:function(t){return rn(void 0,void 0,void 0,function(){var n;return an(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,je(E,{challengeId:y,verificationToken:t.verificationToken,rememberDevice:t.rememberDevice})];case 1:return n=e.sent(),r(n)?a(n):o(),[3,3];case 2:return e.sent(),K(),[3,3];case 3:return[2]}})})},on2svChallengeInvalidated:function(e){I(w+1),D(l(ne.ResponseVerificationError)),w<ge&&$(!1)},on2svChallengeAbandoned:function(e){C(""),b(""),G(),V(!1)},onUnknownError:K}),ee().createElement(en,{identityVerificationLoginTicket:n,translate:l}),ee().createElement("div",{id:"crossDeviceLoginDisplayCodeModal-container"}))},d),j=i.AccountIntegrityChallengeService.TwoStepVerification,q=i.AccountIntegrityChallengeService.Captcha,z=i.AccountIntegrityChallengeService.SecurityQuestions,G=(0,t.withTranslations)(function(){return ee().createElement("div",null,ee().createElement(L,null),ee().createElement(A,null),ee().createElement(T,null))},d);function _(){var e=U();e?P()?(0,n.render)(ee().createElement(B,null),e):(0,n.render)(ee().createElement(G,null),e):window.requestAnimationFrame(_)}Object.assign(e(),{ReactLoginService:V}),Object.assign(e(),{ReactIdentityVerificationService:W}),(0,a.ready)(function(){_()})}();
//# sourceMappingURL=https://js.rbxcdn.com/f1dd901f3fc5ccd4ae10-reactLogin.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ReactLogin");