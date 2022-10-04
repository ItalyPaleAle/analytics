!function(){"use strict";var e,t,r,p=window.location,f=window.document,d=f.getElementById("plausible"),g=d.getAttribute("data-api")||(e=d.src.split("/"),t=e[0],r=e[2],t+"//"+r+"/api/event");function v(e){console.warn("Ignoring Event: "+e)}function a(e,t){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(e){}var r=d&&d.getAttribute("data-include"),a=d&&d.getAttribute("data-exclude");if("pageview"===e){var n=!r||r&&r.split(",").some(o),i=a&&a.split(",").some(o);if(!n||i)return v("exclusion rule")}function o(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=e,l.u=t&&t.u?t.u:p.href,l.d=d.getAttribute("data-domain"),l.r=f.referrer||null,l.w=window.innerWidth,t&&t.meta&&(l.m=JSON.stringify(t.meta)),t&&t.props&&(l.p=t.props);var u=d.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=l.p||{};u.forEach(function(e){var t=e.replace("event-",""),r=d.getAttribute(e);c[t]=c[t]||r}),l.p=c;var s=new XMLHttpRequest;s.open("POST",g,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(l)),s.onreadystatechange=function(){4===s.readyState&&t&&t.callback&&t.callback()}}var n=window.plausible&&window.plausible.q||[];window.plausible=a;for(var i=0;i<n.length;i++)a.apply(this,n[i]);var s=1;function o(e){if("auxclick"!==e.type||e.button===s){var t,r,a,n,i,o,l=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);l&&l.href&&l.href.split("?")[0];if((o=l)&&o.href&&o.host&&o.host!==p.host){var u={url:l.href};return n=u,i=!(a="Outbound Link: Click"),void(!function(e,t){if(!e.defaultPrevented){var r=!t.target||t.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type;return r&&a}}(t=e,r=l)?plausible(a,{props:n}):(plausible(a,{props:n,callback:c}),setTimeout(c,5e3),t.preventDefault()))}}function c(){i||(i=!0,window.location=r.href)}}f.addEventListener("click",o),f.addEventListener("auxclick",o)}();