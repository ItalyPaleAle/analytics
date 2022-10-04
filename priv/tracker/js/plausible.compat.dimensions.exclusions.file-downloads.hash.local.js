!function(){"use strict";var e,t,i,c=window.location,d=window.document,f=d.getElementById("plausible"),v=f.getAttribute("data-api")||(e=f.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function g(e){console.warn("Ignoring Event: "+e)}function a(e,t){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var i=f&&f.getAttribute("data-include"),a=f&&f.getAttribute("data-exclude");if("pageview"===e){var n=!i||i&&i.split(",").some(l),r=a&&a.split(",").some(l);if(!n||r)return g("exclusion rule")}function l(e){var t=c.pathname;return(t+=c.hash).match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var o={};o.n=e,o.u=c.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var p=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),u=o.p||{};p.forEach(function(e){var t=e.replace("event-",""),i=f.getAttribute(e);u[t]=u[t]||i}),o.p=u,o.h=1;var s=new XMLHttpRequest;s.open("POST",v,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(o)),s.onreadystatechange=function(){4===s.readyState&&t&&t.callback&&t.callback()}}var n=window.plausible&&window.plausible.q||[];window.plausible=a;for(var r,l=0;l<n.length;l++)a.apply(this,n[l]);function o(){r=c.pathname,a("pageview")}window.addEventListener("hashchange",o),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){r||"visible"!==d.visibilityState||o()}):o();var u=1;function p(e){if("auxclick"!==e.type||e.button===u){var t,i,a,n,r,l=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target),o=l&&l.href&&l.href.split("?")[0];if(function(e){if(!e)return!1;var t=e.split(".").pop();return b.some(function(e){return e===t})}(o)){return n={url:o},r=!(a="File Download"),void(!function(e,t){if(!e.defaultPrevented){var i=!t.target||t.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type;return i&&a}}(t=e,i=l)?plausible(a,{props:n}):(plausible(a,{props:n,callback:p}),setTimeout(p,5e3),t.preventDefault()))}}function p(){r||(r=!0,window.location=i.href)}}d.addEventListener("click",p),d.addEventListener("auxclick",p);var s=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],w=f.getAttribute("file-types"),m=f.getAttribute("add-file-types"),b=w&&w.split(",")||m&&m.split(",").concat(s)||s}();