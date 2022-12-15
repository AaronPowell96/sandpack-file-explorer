import{j as e,a as t,F as S,M as f,C as h,S as p}from"./chunk-MA2MUXQN.28757a0f.js";import"./chunk-R4NKYYJA.15989c7a.js";import{q as i,n as a,a as o,c as r,Y as u,b as x,O as y}from"./index.07a30d3d.js";import{u as m}from"./index.bed38685.js";import"./iframe.e5fe79ca.js";import"../sb-preview/runtime.mjs";import"./index.bb1adda2.js";import"./_commonjsHelpers.712cc82f.js";import"./window.2ce53669.js";function g(d={}){const{wrapper:s}=Object.assign({},m(),d.components);return s?e(s,{...d,children:e(c,{})}):c();function c(){const n=Object.assign({h1:"h1",p:"p",strong:"strong",em:"em",code:"code",ul:"ul",li:"li",h2:"h2"},m(),d.components);return t(S,{children:[e(f,{title:"SandpackFileTree",component:r}),`
`,e(n.h1,{children:"SandpackFileTree"}),`
`,e(n.p,{children:e(n.strong,{children:t(n.em,{children:["If you are looking to simply drop the file tree and go use ",e(n.code,{children:"<SandpackFileExplorer/>"}),"."]})})}),`
`,t(n.p,{children:[e(n.code,{children:"<SandpackFileTree/>"})," is a granular way to control your files used in combination with with ",e(n.code,{children:"<SandpackFilesProvider>"}),`.
You can:`]}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["Access SandpackFileTree context via ",e(n.code,{children:"useSandpackFiles()"}),","]}),`
`,e(n.li,{children:"Add / Delete files programatically,"}),`
`,e(n.li,{children:"Watch for files being moved,"}),`
`,e(n.li,{children:`Access and mutate the tree directly (Make sure to handle sandpack.files if you do this)
Use it in the same way and enjoy all the extra functionality!`}),`
`,e(n.li,{children:'Power over how high you wrap the files provider, meaning your components can directly control the file tree from "outside".'}),`
`]}),`
`,e(n.h2,{children:"The explorer"}),`
`,e(h,{style:{border:"none"},children:e(p,{name:"Standalone",children:e(i,{theme:a,template:"react-ts",children:e(o,{children:e(r,{})})})})}),`
`,e(n.h2,{children:"Complete with CodeEditor"}),`
`,e(h,{style:{border:"none"},children:e(p,{name:"Complete",children:e(i,{theme:a,template:"react-ts",children:t(u,{children:[t("div",{style:{display:"flex",width:"100%",minHeight:"300px",maxHeight:"300px"},children:[e("div",{style:{minWidth:"150px",maxWidth:"300px",overflow:"hidden"},children:e(o,{children:e(r,{})})}),e("div",{style:{flex:"min-content"},children:e(x,{wrapContent:!0,style:{minHeight:"100%",maxHeight:"100%",overflow:"auto"},showTabs:!0,closableTabs:!0,showInlineErrors:!0,showLineNumbers:!0})})]}),e(y,{})]})})})})]})}}const v=()=>e(i,{theme:a,template:"react-ts",children:e(o,{children:e(r,{})})});v.storyName="Standalone";v.parameters={storySource:{source:'<SandpackProvider theme={nightOwl} template="react-ts"><SandpackFilesProvider><SandpackFileTree /></SandpackFilesProvider></SandpackProvider>'}};const w=()=>e(i,{theme:a,template:"react-ts",children:t(u,{children:[t("div",{style:{display:"flex",width:"100%",minHeight:"300px",maxHeight:"300px"},children:[e("div",{style:{minWidth:"150px",maxWidth:"300px",overflow:"hidden"},children:e(o,{children:e(r,{})})}),e("div",{style:{flex:"min-content"},children:e(x,{wrapContent:!0,style:{minHeight:"100%",maxHeight:"100%",overflow:"auto"},showTabs:!0,closableTabs:!0,showInlineErrors:!0,showLineNumbers:!0})})]}),e(y,{})]})});w.storyName="Complete";w.parameters={storySource:{source:`<SandpackProvider theme={nightOwl} template="react-ts"><SandpackStack><div style={{
      display: "flex",
      width: "100%",
      minHeight: "300px",
      maxHeight: "300px"
    }}><div style={{
        minWidth: "150px",
        maxWidth: "300px",
        overflow: "hidden"
      }}><SandpackFilesProvider><SandpackFileTree /></SandpackFilesProvider></div><div style={{
        flex: "min-content"
      }}><SandpackCodeEditor wrapContent style={{
          minHeight: "100%",
          maxHeight: "100%",
          overflow: "auto"
        }} showTabs closableTabs showInlineErrors showLineNumbers /></div></div><SandpackPreview /></SandpackStack></SandpackProvider>`}};const l={title:"SandpackFileTree",component:r,tags:["mdx"],includeStories:["standalone","complete"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:g};const E=["standalone","complete"];export{E as __namedExportsOrder,w as complete,l as default,v as standalone};
//# sourceMappingURL=SandpackFileTree.stories.2582485e.js.map
