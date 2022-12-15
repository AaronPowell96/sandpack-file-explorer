import{w as _}from"./window.2ce53669.js";import"./_commonjsHelpers.712cc82f.js";var i="storybook/highlight",n="storybookHighlight",g=`${i}/add`,m=`${i}/reset`,{document:l}=_,s=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,p=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"});module&&module.hot&&module.hot.decline&&module.hot.decline();var h=__STORYBOOK_MODULE_PREVIEW_API__.addons.getChannel(),E=e=>{let t=n;d();let r=Array.from(new Set(e.elements)),o=l.createElement("style");o.setAttribute("id",t),o.innerHTML=r.map(a=>`${a}{
          ${s(e.color,e.style)}
         }`).join(" "),l.head.appendChild(o)},d=()=>{let e=n,t=l.getElementById(e);t&&t.parentNode.removeChild(t)};h.on(__STORYBOOK_MODULE_CORE_EVENTS__.STORY_CHANGED,d);h.on(m,d);h.on(g,E);export{p as highlightObject,s as highlightStyle};
//# sourceMappingURL=preview.8d21e9ce.js.map
