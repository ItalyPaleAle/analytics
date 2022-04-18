!function(){"use strict";var e,t,a,o=window.location,n=window.document,l=n.getElementById("plausible"),p=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event"),s=l&&l.getAttribute("data-exclude").split(",");function c(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(e){}if(s)for(var a=0;a<s.length;a++)if("pageview"===e&&o.pathname.match(new RegExp("^"+s[a].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return c("exclusion rule");var i={};i.n=e,i.u=t&&t.u?t.u:o.href,i.d=l.getAttribute("data-domain"),i.r=n.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=JSON.stringify(t.props)),i.h=1;var r=new XMLHttpRequest;r.open("POST",p,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(i)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback()}}}function r(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==o.host&&((a||i)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}n.addEventListener("click",r),n.addEventListener("auxclick",r);var u=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],f=l.getAttribute("file-types"),d=l.getAttribute("add-file-types"),g=f&&f.split(",")||d&&d.split(",").concat(u)||u;function h(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var r,n=t&&t.href&&t.href.split("?")[0];n&&(r=n.split(".").pop(),g.some(function(e){return e===r}))&&((a||i)&&plausible("File Download",{props:{url:n}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}n.addEventListener("click",h),n.addEventListener("auxclick",h);var w=window.plausible&&window.plausible.q||[];window.plausible=i;for(var m=0;m<w.length;m++)i.apply(this,w[m])}();