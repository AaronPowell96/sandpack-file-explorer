var a="storybook/outline",s="outline";var o=__REACT__,{Children:C,Component:E,Fragment:R,Profiler:g,PureComponent:k,StrictMode:I,Suspense:P,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:B,cloneElement:L,createContext:M,createElement:x,createFactory:v,createRef:D,forwardRef:N,isValidElement:H,lazy:K,memo:i,useCallback:m,useContext:Y,useDebugValue:F,useEffect:p,useImperativeHandle:W,useLayoutEffect:G,useMemo:w,useReducer:U,useRef:V,useState:q,version:z}=__REACT__;var J=__STORYBOOKAPI__,{ActiveTabs:Q,Consumer:X,ManagerContext:ee,Provider:te,addons:u,combineParameters:oe,controlOrMetaKey:re,controlOrMetaSymbol:ae,eventMatchesShortcut:ne,eventToShortcut:le,isMacLike:se,isShortcutTaken:ue,keyToSymbol:ce,merge:ie,mockChannel:me,optionOrAltSymbol:pe,shortcutMatchesShortcut:Se,shortcutToHumanString:_e,types:S,useAddonState:de,useArgTypes:Te,useArgs:Oe,useChannel:be,useGlobalTypes:ye,useGlobals:_,useParameter:Ae,useSharedState:fe,useStoryPrepared:he,useStorybookApi:d,useStorybookState:Ce}=__STORYBOOKAPI__;var ke=__STORYBOOKCOMPONENTS__,{A:Ie,ActionBar:Pe,AddonPanel:Be,Badge:Le,Bar:Me,Blockquote:xe,Button:ve,Code:De,DL:Ne,Div:He,DocumentWrapper:Ke,FlexBar:Ye,Form:Fe,H1:We,H2:Ge,H3:we,H4:Ue,H5:Ve,H6:qe,HR:ze,IconButton:T,IconButtonSkeleton:Ze,Icons:O,Img:$e,LI:je,Link:Je,Loader:Qe,OL:Xe,P:et,Placeholder:tt,Pre:ot,ResetWrapper:rt,ScrollArea:at,Separator:nt,Spaced:lt,Span:st,StorybookIcon:ut,StorybookLogo:ct,Symbols:it,SyntaxHighlighter:mt,TT:pt,TabBar:St,TabButton:_t,TabWrapper:dt,Table:Tt,Tabs:Ot,TabsState:bt,TooltipLinkList:yt,TooltipMessage:At,TooltipNote:ft,UL:ht,WithTooltip:Ct,WithTooltipPure:Et,Zoom:Rt,codeCommon:gt,components:kt,createCopyToClipboardFunction:It,getStoryHref:Pt,interleaveSeparators:Bt,nameSpaceClassNames:Lt,resetComponents:Mt,withReset:xt}=__STORYBOOKCOMPONENTS__;var y=i(function(){let[r,b]=_(),c=d(),n=r[s]||!1,l=m(()=>b({[s]:!n}),[n]);return p(()=>{c.setAddonShortcut(a,{label:"Toggle Measure [O]",defaultShortcut:["O"],actionName:"outline",showInMenu:!1,action:l})},[l,c]),o.createElement(T,{key:"outline",active:n,title:"Apply outlines to the preview",onClick:l},o.createElement(O,{icon:"outline"}))});u.register(a,()=>{u.add(a,{title:"Outline",type:S.TOOL,match:({viewMode:r})=>!!(r&&r.match(/^(story|docs)$/)),render:()=>o.createElement(y,null)})});
//# sourceMappingURL=manager.mjs.map
