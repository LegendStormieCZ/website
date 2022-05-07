;// bundle: page___c81f52806df08ea21b5414f09ea1350c_m
;// files: utilities/robloxAds.js, utilities/sharedElementManipulator.js, extensions/Thumbnails.js, pageStyleNotifications.js, ~/Generated/js/Roblox_TranslationResources_Feature_CatalogResources_en_us_standard.js, ~/viewapp/widgets/captcha/captcha.js, ~/viewapp/widgets/captcha/constants/captchaConstants.js, ~/viewapp/widgets/captcha/directives/captchaDirective.js, ~/viewapp/widgets/captcha/services/captchaInterface.js, ~/viewapp/widgets/captcha/services/funCaptchaInterface.js, ~/viewapp/widgets/captcha/directives/funCaptchaDirective.js, Tracking/FormEvents.js, ~/viewapp/common/formEvents/formEvents.js, ~/viewapp/common/formEvents/directives/formInteraction.js, ~/viewapp/common/formEvents/directives/formContext.js, ~/viewapp/common/constants/urlConstants.js, ~/viewapp/common/constants/phoneConstants.js, ~/viewapp/common/services/phoneService.js, GenericConfirmation.js, utilities/dialog.js, common/deviceMeta.js

;// utilities/robloxAds.js
"use strict";var Roblox=Roblox||{};Roblox.AdsHelper=Roblox.AdsHelper||{},Roblox.AdsLibrary={},Roblox.AdsLibrary.adsIdList=["Skyscraper-Abp-Left","Skyscraper-Abp-Right","Leaderboard-Abp","GamePageAdDiv1","GamePageAdDiv2","GamePageAdDiv3","ProfilePageAdDiv1","ProfilePageAdDiv2"],Roblox.AdsLibrary.adsParameters={"Skyscraper-Abp-Left":{element:$("#Skyscraper-Abp-Left"),template:null,fitTwoAds:!0,fitOneAd:!1,isSkyscraper:!0},"Skyscraper-Abp-Right":{element:$("#Skyscraper-Abp-Right"),tempalte:null,fitTwoAds:!0,fitOneAd:!0,isSkyscraper:!0},"Leaderboard-Abp":{element:$("#Leaderboard-Abp"),tempalte:null,fitTwoAds:!0,fitOneAd:!0,isLeaderboard:!0},GamePageAdDiv1:{element:$("#GamePageAdDiv1"),template:null,isPageAd:!0},GamePageAdDiv2:{element:$("#GamePageAdDiv2"),template:null,isPageAd:!0},GamePageAdDiv3:{element:$("#GamePageAdDiv3"),template:null,isPageAd:!0},ProfilePageAdDiv1:{element:$("#ProfilePageAdDiv1"),template:null,isPageAd:!0},ProfilePageAdDiv2:{element:$("#ProfilePageAdDiv2"),template:null,isPageAd:!0}},Roblox.AdsHelper.AdRefresher=function(){function c(n){return!n||!$.trim($(n).html())}function h(n){t.push(n)}function s(){return googletag.pubadsReady}function r(n){var u,f,e,i;typeof n=="undefined"&&(n=v),u=!1;for(f in t){if(e="#"+t[f]+" [data-js-adtype]",i=$(e),typeof i=="undefined")return;if(i.attr("data-js-adtype")==="iframead")o(i);else if(i.attr("data-js-adtype")==="gptAd")if(s())u=!0;else if(n>0){setTimeout(function(){r(--n)},y);break}}u&&googletag.cmd.push(function(){googletag.pubads().refresh()})}function o(n){var i=n.attr("src"),r,u,t;typeof i=="string"&&(r=i.indexOf("?")<0?"?":"&",u=i+r+"nocache="+(new Date).getMilliseconds().toString(),typeof n[0]!="undefined")&&(t=n[0].contentDocument,t===undefined&&(t=n[0].contentWindow),t&&t.location.href!=="about:blank"&&t.location.replace(u))}function n(n,t,i){i.length&&c(i)&&(i.append(n),r())}function b(){for(var u=$(window).width(),f,r,t,i=0;i<Roblox.AdsLibrary.adsIdList.length;i++)r=Roblox.AdsLibrary.adsIdList[i],t=Roblox.AdsLibrary.adsParameters[r],t&&!t.template&&(f=t.element,t.template=f.html());for(i=0;i<Roblox.AdsLibrary.adsIdList.length;i++)(r=Roblox.AdsLibrary.adsIdList[i],t=Roblox.AdsLibrary.adsParameters[r],t)&&(t.isSkyscraper?u>=e&&t.fitTwoAds?n(t.template,r,t.element):u<e&&u>=l?t.fitOneAd?n(t.template,r,t.element):t.element.empty():t.element.empty():t.isLeaderboard?u<p?t.element.empty():n(t.template,r,t.element):t.isPageAd&&(u<w?t.element.empty():n(t.template,r,t.element)))}var t=[],i=20,u=970,f=160,p=728,y=100,v=16,e=$("[data-max-width-for-two-ads]").attr("data-max-width-for-two-ads")||u+f*2+48-i,l=$("[data-max-width-for-one-ads]").attr("data-max-width-for-one-ads")||u+f+24-i,a=1024,w=a-i;return{registerAd:h,refreshAds:r,adjustAdsFitScreen:b,getAds:n}}(),Roblox.AdsHelper.DynamicAdCreator=function(){function n(){var n=$(".dynamic-ad").filter(".unpopulated");n.each(function(n,t){var i=$(t),u=i.attr("data-ad-slot"),f=parseInt(i.attr("data-ad-width")),e=parseInt(i.attr("data-ad-height")),r=i.children(".ad-slot").attr("id");googletag.cmd.push(function(){var n=googletag.defineSlot(u,[f,e],r).addService(googletag.pubads());googletag.display(r),googletag.pubads().refresh([n])}),i.removeClass("unpopulated")})}return{populateNewAds:n}}(),$(function(){$(window).resize(function(){Roblox.AdsHelper.AdRefresher.adjustAdsFitScreen()})});

;// utilities/sharedElementManipulator.js
var Roblox=Roblox||{};Roblox.SharedElementManipulator=function(){function t(n,t){t?n.hide():n.show()}function u(n){var r=$(i);t(r,n)}function f(i){var r=$(n);t(r,i)}function e(n){var i=$(r);t(i,n)}function o(t){$(n).addClass(t)}function s(t){$(n).removeClass(t)}var n=".container-footer",i="#chat-container",r=".pagification";return{toggleChat:u,toggleFooter:f,togglePagification:e,addFooterClass:o,removeFooterClass:s}}();

;// extensions/Thumbnails.js
$(function(){function i(n){var t=n.el.is("img")?n.el:n.el.find("img");return t.length===1?t:n.el.find("img.original-image")}function s(n,t){var r=i(t),u;u=n.data!=null&&n.data[0].imageUrl!=null?n.data[0].imageUrl:n.Url,!r.attr("src")&&r.hasClass("lazy")?r.attr("data-original",u):r.attr("src",u),t.el.removeAttr("data-retry-url"),t.el.trigger("thumbnailLoaded")}function h(n){var i=+new Date-n.start;Roblox.ThumbnailMetrics&&Roblox.ThumbnailMetrics.logFinalThumbnailTime(i),t(["ThumbnailGenTime","2D","Success",i]),t(["ThumbnailGenRetries","2D","Success",n.retryCount])}function c(n){var i=+new Date-n.start;Roblox.ThumbnailMetrics&&Roblox.ThumbnailMetrics.logThumbnailTimeout(),t(["ThumbnailGenRetries","2D","Gave Up",n.retryCount]),t(["ThumbnailGenTime","2D","Gave Up",i])}function l(n,t){n.Final||n.data!=null&&n.data[0].state!=null&&n.data[0].state==="Completed"?(t.realRegeneration&&h(t),s(n,t)):(t.realRegeneration=!0,t.retryCount++,t.retryCount<f?setTimeout(function(){t.retryFunction(t)},u):c(t))}function r(n){var t=n.el.data("retry-url");t&&$.ajax({url:t,dataType:"json",cache:!1,crossDomain:!0,xhrFields:{withCredentials:!0},success:function(t){l(t,n)}})}var n=$("#image-retry-data"),u=n?n.data("image-retry-timer"):1500,f=n?n.data("image-retry-max-times"):10,e=n?n.data("ga-logging-percent"):0,o=window.GoogleAnalyticsEvents&&GoogleAnalyticsEvents.FireEvent||function(){},t=function(n){Math.random()<=e/100&&o(n)};$.fn.loadRobloxThumbnails=function(){return this.each(function(){var n={retryCount:0,realRegeneration:!1,start:+new Date,el:$(this),retryFunction:r},t=i(n);t.one("load",function(){var t=+new Date-n.start;Roblox.ThumbnailMetrics&&Roblox.ThumbnailMetrics.logFinalThumbnailTime(t,"2dThumbnailOnLoad")});setTimeout(function(){r(n)},0)})}});

;// pageStyleNotifications.js
$(function(){$(".pagification .pagification-showall, .pagification .pagification-collapse").click(function(){$(this).parents(".pagification-body").toggleClass("collapsed")})});

;// ~/Generated/js/Roblox_TranslationResources_Feature_CatalogResources_en_us_standard.js
var Roblox=Roblox||{};Roblox.Lang=Roblox.Lang||{},Roblox.Lang["Feature.Catalog"]={"Action.BuyRobux":"Buy Robux","Action.Dialog.AddGearOk":"OK","Action.Filter.Apply":"Apply","Action.Filter.Cancel":"Cancel","Action.Go":"Go","Action.ViewAllItems":"View All Items","Action.ViewFeaturedItems":"View Featured Items","Description.Dialog.AddGearBody":"To add gear to your experience, find an item in the catalog and click the Add to Experience button. The item will automatically be allowed in experience, and you'll receive a commission on every copy sold from your experience page. (You can only add gear that's for sale.)","Heading.AvatarShop":"Avatar Shop","Heading.CatalogCategory":"Category","Heading.CatalogPage":"Catalog","Label.2D":"2D","Label.3D":"3D","Label.AccessoryHead":"Head","Label.AllCommunityCreations":"All Creations","Label.AllFeaturedItems":"View All Featured Items","Label.AllGenres":"All Genres","Label.AllPremiumItems":"All Premium Items","Label.Amazon":"Amazon","Label.AppleOnly":"Apple Only","Label.BreadCrumb.Free":"Free","Label.BreadCrumb.GenreOrText":"{genreName1} or {genreName2}","Label.BreadCrumb.GenreSelectedText":"Genre: {genreCount} selected","Label.BreadCrumb.Group":"Group:","Label.BreadCrumb.PriceAbove":"{price} and above","Label.BreadCrumb.PriceBelow":"{price} and below","Label.BreadCrumb.ResultsCount":"{startNumber} - {endNumber} of {resultsCount} Results","Label.Bundle":"Bundle","Label.Bundles":"Bundles","Label.ByCreatorLink":"By {linkStart}{creator}{linkEnd}","Label.Card.CreatorBy":"By","Label.Card.PriceWas":"Was","Label.Card.Remaining":"Remaining:","Label.CategoryAttributes":"Attributes","Label.CategoryType":"Type","Label.Characters":"Characters","Label.Clothing.ClassicPants":"Classic Pants","Label.Clothing.ClassicShirts":"Classic Shirts","Label.Clothing.ClassicTShirts":"Classic T-Shirts","Label.Clothing.DressSkirtAccessories":"Dresses & Skirts","Label.Clothing.JacketAccessories":"Jackets","Label.Clothing.PantsAccessories":"Pants","Label.Clothing.ShirtAccessories":"Shirts","Label.Clothing.ShoesBundles":"Shoes","Label.Clothing.ShortsAccessories":"Shorts","Label.Clothing.SweaterAccessories":"Sweaters","Label.Clothing.TShirtAccessories":"T-Shirts","Label.ComingSoon":"Coming soon! Check back later.","Label.CommunityCreations":" Community Creations","Label.Dialog.AddGearTitle":"Add Gear to Your Experience","Label.Emotes":"Emotes","Label.Favorites":"Favorites","Label.FeaturedBundles":"Featured Bundles","Label.FeaturedEmotes":"Featured Emotes","Label.FeaturedItemsOnRoblox":"Featured Items on {spanStart}{roblox}{spanEnd}","Label.Filter.ByTime":"By Time","Label.Filter.Category":"Category","Label.Filter.Creator":"Creator","Label.Filter.Filter":"Filter","Label.Filter.Filters":"Filters","Label.Filter.Genre":"Genre","Label.Filter.Hide":"Hide","Label.Filter.Price":"Price","Label.Filter.PriceMax":"Max","Label.Filter.PriceMin":"Min","Label.Filter.PriceTo":"To","Label.Filter.Show":"Show","Label.Filter.Sorting":"Sorting","Label.Filter.UnavailableItems":"Unavailable Items","Label.GoogleOnly":"Google Only","Label.Ios":"iOS","Label.Mobile":"Mobile","Label.New":"New","Label.Premium":"Premium","Label.Recommended":"Recommended","Label.RecommendedItemsForYou":"Recommended Items for You","Label.Rthro":"Rthro","Label.Sale":"Sale","Label.SearchField":"Search","Label.SeeAll":"See All","Label.TakeOff":"Take Off","Label.TryOn":"Try On","Label.Username":"Username","Label.Xbox":"Xbox",LabelAccessories:"Accessories",LabelAccessoryAll:"All Accessories",LabelAccessoryBack:"Back",LabelAccessoryFace:"Face",LabelAccessoryFront:"Front",LabelAccessoryHair:"Hair",LabelAccessoryHats:"Hats",LabelAccessoryNeck:"Neck",LabelAccessoryShoulder:"Shoulder",LabelAccessoryWaist:"Waist",LabelAll:"All",LabelAllAvatarAnimations:"All Animations",LabelAllBodyParts:"All Body Parts",LabelAllCategories:"All Categories",LabelAllClothing:"All Clothing",LabelAllCollectibles:"All Collectibles",LabelAllCreators:"All Creators",LabelAllCurrency:"All Currency",LabelAllFeatured:"All Featured Items",LabelAllTime:"All Time",LabelAnimations:"Animations",LabelAnyPrice:"Any Price",LabelAvatarAnimations:"Avatar Animations",LabelBestselling:"Bestselling",LabelBodyParts:"Body Parts",LabelClothing:"Clothing",LabelCollectibleAccessories:"Collectible Accessories",LabelCollectibleFaces:"Collectible Faces",LabelCollectibleGear:"Collectible Gear",LabelCollectibles:"Collectibles",LabelFaces:"Faces",LabelFeatured:"Featured",LabelFeaturedAccesories:"Featured Accessories",LabelFeaturedAnimations:"Featured Animations",LabelFeaturedFaces:"Featured Faces",LabelFeaturedGear:"Featured Gear",LabelFeaturedPackages:"Featured Packages",LabelFree:"Free",LabelGear:"Gear",LabelGearAll:"All Gear",LabelGearBuilding:"Building",LabelGearExplosive:"Explosive",LabelGearMelee:"Melee",LabelGearMusical:"Musical",LabelGearNavigation:"Navigation",LabelGearPersonalTransport:"Transport",LabelGearPowerUps:"Power Up",LabelGearRanged:"Ranged",LabelGearSocial:"Social",LabelGenreAdventure:"Adventure",LabelGenreAll:"All Genres",LabelGenreBuilding:"Building",LabelGenreComedy:"Comedy",LabelGenreFantasy:"Medieval",LabelGenreFighting:"Fighting",LabelGenreFPS:"FPS",LabelGenreFunny:"Comedy",LabelGenreHorror:"Horror",LabelGenreMedieval:"Medieval",LabelGenreMilitary:"Military",LabelGenreNaval:"Naval",LabelGenreNinja:"Fighting",LabelGenrePirate:"Naval",LabelGenreRPG:"RPG",LabelGenreScary:"Horror",LabelGenreSciFi:"Sci-Fi",LabelGenreSports:"Sports",LabelGenreTownAndCity:"Town and City",LabelGenreTutorial:"Building",LabelGenreWar:"Military",LabelGenreWestern:"Western",LabelGenreWildWest:"Western",LabelHeads:"Heads",LabelMostFavorited:"Most Favorited",LabelNoResellers:"No Resellers",LabelOffSale:"Offsale",LabelPackages:"Packages",LabelPants:"Pants",LabelPastDay:"Past Day",LabelPastWeek:"Past Week",LabelPriceHighFirst:"Price (High to Low)",LabelPriceLowFirst:"Price (Low to High)",LabelRecentlyUpdated:"Recently Updated",LabelRelevance:"Relevance",LabelRoblox:"Roblox",LabelRobux:"Robux",LabelShirts:"Shirts",LabelTShirts:"T-Shirts","Response.Error.Filter":"Errors exist in Filter tab","Response.GenericError":"An error occurred. Please try again later.","Response.NoItemsFound":"No items found.","Response.NoSaleItemsFromSearch":"Your search did not find items for sale. Unavailable items displayed below.","Response.PlacedOnSaleFailure":"Failed to place on sale","Response.PlacedOnSaleSuccess":"Successfully placed on sale","Response.TakenOffSaleFailure":"Failed to take off sale","Response.TakenOffSaleSuccess":"Successfully taken off sale","Response.TemporarilyUnavailable":"Catalog temporarily unavailable. Please try again later.","Response.Throttled":"You're going too fast! Try again in a minute."},Roblox.Lang.CatalogResources=Roblox.Lang["Feature.Catalog"];

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