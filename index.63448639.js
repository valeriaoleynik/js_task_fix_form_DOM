document.querySelectorAll(".field-text").forEach(function(e){var r="",l=!0,a=!1,t=void 0;try{for(var n,o=e.name[Symbol.iterator]();!(l=(n=o.next()).done);l=!0){var c=n.value;c===c.toLowerCase()?r+=c:r+=" "+c}}catch(e){a=!0,t=e}finally{try{l||null==o.return||o.return()}finally{if(a)throw t}}e.insertAdjacentHTML("beforebegin","\n    <label for=".concat(e.id," class=field-label>").concat(r,"</label>\n  "));var i=r.charAt(0).toUpperCase()+r.slice(1);e.placeholder=i});
//# sourceMappingURL=index.63448639.js.map