import{_inheritsLoose,createPopper,require_react_dom}from"./chunk-XWKHDWQO.mjs";import{_extends,_objectWithoutPropertiesLoose,require_window}from"./chunk-QFIGSMSK.mjs";import{emotion_styled_browser_esm_default,lightenColor}from"./chunk-IFMYLCIQ.mjs";import{require_react}from"./chunk-CGGDZUA2.mjs";import{require_memoizerific}from"./chunk-7NJ6NIF4.mjs";import{__commonJS,__toESM as __toESM2}from"./chunk-KQFPYAFV.mjs";import{__toESM}from"./chunk-JCTATS4D.mjs";var import_react=__toESM(require_react(),1);var import_react2=__toESM(require_react(),1),import_react_dom=__toESM(require_react_dom(),1),React4=__toESM(require_react(),1),React=__toESM(require_react(),1),React2=__toESM(require_react(),1),React3=__toESM(require_react(),1),ReactDOM=__toESM(require_react_dom(),1),React5=__toESM(require_react(),1),import_react3=__toESM(require_react(),1),import_memoizerific=__toESM(require_memoizerific(),1);var require_react_fast_compare=__commonJS({"../../node_modules/react-fast-compare/index.js"(exports,module){var hasElementType=typeof Element<"u",hasMap=typeof Map=="function",hasSet=typeof Set=="function",hasArrayBuffer=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function equal(a,b){if(a===b)return!0;if(a&&b&&typeof a=="object"&&typeof b=="object"){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;i--!==0;)if(!equal(a[i],b[i]))return!1;return!0}var it;if(hasMap&&a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;for(it=a.entries();!(i=it.next()).done;)if(!equal(i.value[1],b.get(i.value[0])))return!1;return!0}if(hasSet&&a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;return!0}if(hasArrayBuffer&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if(length=a.length,length!=b.length)return!1;for(i=length;i--!==0;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;i--!==0;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;if(hasElementType&&a instanceof Element)return!1;for(i=length;i--!==0;)if(!((keys[i]==="_owner"||keys[i]==="__v"||keys[i]==="__o")&&a.$$typeof)&&!equal(a[keys[i]],b[keys[i]]))return!1;return!0}return a!==a&&b!==b}module.exports=function(a,b){try{return equal(a,b)}catch(error){if((error.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw error}}}}),require_warning=__commonJS({"../../node_modules/warning/warning.js"(exports,module){"use strict";var __DEV__=!0,warning2=function(){};__DEV__&&(printWarning=function(format,args){var len=arguments.length;args=new Array(len>1?len-1:0);for(var key=1;key<len;key++)args[key-1]=arguments[key];var argIndex=0,message="Warning: "+format.replace(/%s/g,function(){return args[argIndex++]});typeof console<"u"&&console.error(message);try{throw new Error(message)}catch{}},warning2=function(condition,format,args){var len=arguments.length;args=new Array(len>2?len-2:0);for(var key=2;key<len;key++)args[key-2]=arguments[key];if(format===void 0)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");condition||printWarning.apply(null,[format].concat(args))});var printWarning;module.exports=warning2}}),import_global=__toESM2(require_window()),ManagerReferenceNodeContext=React.createContext(),ManagerReferenceNodeSetterContext=React.createContext();function Manager(_ref){var children=_ref.children,_React$useState=React.useState(null),referenceNode=_React$useState[0],setReferenceNode=_React$useState[1],hasUnmounted=React.useRef(!1);React.useEffect(function(){return function(){hasUnmounted.current=!0}},[]);var handleSetReferenceNode=React.useCallback(function(node){hasUnmounted.current||setReferenceNode(node)},[]);return React.createElement(ManagerReferenceNodeContext.Provider,{value:referenceNode},React.createElement(ManagerReferenceNodeSetterContext.Provider,{value:handleSetReferenceNode},children))}var unwrapArray=function(arg){return Array.isArray(arg)?arg[0]:arg},safeInvoke=function(fn){if(typeof fn=="function"){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return fn.apply(void 0,args)}},setRef=function(ref,node){if(typeof ref=="function")return safeInvoke(ref,node);ref!=null&&(ref.current=node)},fromEntries=function(entries){return entries.reduce(function(acc,_ref){var key=_ref[0],value=_ref[1];return acc[key]=value,acc},{})},useIsomorphicLayoutEffect=typeof window<"u"&&window.document&&window.document.createElement?React2.useLayoutEffect:React2.useEffect,import_react_fast_compare=__toESM2(require_react_fast_compare()),EMPTY_MODIFIERS=[],usePopper=function(referenceElement,popperElement,options){options===void 0&&(options={});var prevOptions=React3.useRef(null),optionsWithDefaults={onFirstUpdate:options.onFirstUpdate,placement:options.placement||"bottom",strategy:options.strategy||"absolute",modifiers:options.modifiers||EMPTY_MODIFIERS},_React$useState=React3.useState({styles:{popper:{position:optionsWithDefaults.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),state=_React$useState[0],setState=_React$useState[1],updateStateModifier=React3.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(_ref){var state2=_ref.state,elements=Object.keys(state2.elements);ReactDOM.flushSync(function(){setState({styles:fromEntries(elements.map(function(element){return[element,state2.styles[element]||{}]})),attributes:fromEntries(elements.map(function(element){return[element,state2.attributes[element]]}))})})},requires:["computeStyles"]}},[]),popperOptions=React3.useMemo(function(){var newOptions={onFirstUpdate:optionsWithDefaults.onFirstUpdate,placement:optionsWithDefaults.placement,strategy:optionsWithDefaults.strategy,modifiers:[].concat(optionsWithDefaults.modifiers,[updateStateModifier,{name:"applyStyles",enabled:!1}])};return(0,import_react_fast_compare.default)(prevOptions.current,newOptions)?prevOptions.current||newOptions:(prevOptions.current=newOptions,newOptions)},[optionsWithDefaults.onFirstUpdate,optionsWithDefaults.placement,optionsWithDefaults.strategy,optionsWithDefaults.modifiers,updateStateModifier]),popperInstanceRef=React3.useRef();return useIsomorphicLayoutEffect(function(){popperInstanceRef.current&&popperInstanceRef.current.setOptions(popperOptions)},[popperOptions]),useIsomorphicLayoutEffect(function(){if(!(referenceElement==null||popperElement==null)){var createPopper2=options.createPopper||createPopper,popperInstance=createPopper2(referenceElement,popperElement,popperOptions);return popperInstanceRef.current=popperInstance,function(){popperInstance.destroy(),popperInstanceRef.current=null}}},[referenceElement,popperElement,options.createPopper]),{state:popperInstanceRef.current?popperInstanceRef.current.state:null,styles:state.styles,attributes:state.attributes,update:popperInstanceRef.current?popperInstanceRef.current.update:null,forceUpdate:popperInstanceRef.current?popperInstanceRef.current.forceUpdate:null}},NOOP=function(){},NOOP_PROMISE=function(){return Promise.resolve(null)},EMPTY_MODIFIERS2=[];function Popper(_ref){var _ref$placement=_ref.placement,placement=_ref$placement===void 0?"bottom":_ref$placement,_ref$strategy=_ref.strategy,strategy=_ref$strategy===void 0?"absolute":_ref$strategy,_ref$modifiers=_ref.modifiers,modifiers=_ref$modifiers===void 0?EMPTY_MODIFIERS2:_ref$modifiers,referenceElement=_ref.referenceElement,onFirstUpdate=_ref.onFirstUpdate,innerRef=_ref.innerRef,children=_ref.children,referenceNode=React4.useContext(ManagerReferenceNodeContext),_React$useState=React4.useState(null),popperElement=_React$useState[0],setPopperElement=_React$useState[1],_React$useState2=React4.useState(null),arrowElement=_React$useState2[0],setArrowElement=_React$useState2[1];React4.useEffect(function(){setRef(innerRef,popperElement)},[innerRef,popperElement]);var options=React4.useMemo(function(){return{placement,strategy,onFirstUpdate,modifiers:[].concat(modifiers,[{name:"arrow",enabled:arrowElement!=null,options:{element:arrowElement}}])}},[placement,strategy,onFirstUpdate,modifiers,arrowElement]),_usePopper=usePopper(referenceElement||referenceNode,popperElement,options),state=_usePopper.state,styles=_usePopper.styles,forceUpdate=_usePopper.forceUpdate,update=_usePopper.update,childrenProps=React4.useMemo(function(){return{ref:setPopperElement,style:styles.popper,placement:state?state.placement:placement,hasPopperEscaped:state&&state.modifiersData.hide?state.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:state&&state.modifiersData.hide?state.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:styles.arrow,ref:setArrowElement},forceUpdate:forceUpdate||NOOP,update:update||NOOP_PROMISE}},[setPopperElement,setArrowElement,placement,state,styles,update,forceUpdate]);return unwrapArray(children)(childrenProps)}var import_warning=__toESM2(require_warning());function Reference(_ref){var children=_ref.children,innerRef=_ref.innerRef,setReferenceNode=React5.useContext(ManagerReferenceNodeSetterContext),refHandler=React5.useCallback(function(node){setRef(innerRef,node),safeInvoke(setReferenceNode,node)},[innerRef,setReferenceNode]);return React5.useEffect(function(){return function(){return setRef(innerRef,null)}},[]),React5.useEffect(function(){(0,import_warning.default)(Boolean(setReferenceNode),"`Reference` should not be used outside of a `Manager` component.")},[setReferenceNode]),unwrapArray(children)({ref:refHandler})}var TooltipContext=import_react2.default.createContext({}),callAll=function(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return fns.forEach(function(fn){return fn&&fn.apply(void 0,args)})}},noop=function(){},canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},setRef3=function(ref,node){if(typeof ref=="function")return ref(node);ref!=null&&(ref.current=node)},Tooltip=function(_Component){_inheritsLoose(Tooltip3,_Component);function Tooltip3(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_Component.call.apply(_Component,[this].concat(args))||this,_this.observer=void 0,_this.tooltipRef=void 0,_this.handleOutsideClick=function(event){if(_this.tooltipRef&&!_this.tooltipRef.contains(event.target)){var parentOutsideClickHandler=_this.context.parentOutsideClickHandler,_this$props=_this.props,hideTooltip=_this$props.hideTooltip,clearScheduled=_this$props.clearScheduled;clearScheduled(),hideTooltip(),parentOutsideClickHandler&&parentOutsideClickHandler(event)}},_this.handleOutsideRightClick=function(event){if(_this.tooltipRef&&!_this.tooltipRef.contains(event.target)){var parentOutsideRightClickHandler=_this.context.parentOutsideRightClickHandler,_this$props2=_this.props,hideTooltip=_this$props2.hideTooltip,clearScheduled=_this$props2.clearScheduled;clearScheduled(),hideTooltip(),parentOutsideRightClickHandler&&parentOutsideRightClickHandler(event)}},_this.addOutsideClickHandler=function(){document.body.addEventListener("touchend",_this.handleOutsideClick),document.body.addEventListener("click",_this.handleOutsideClick)},_this.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",_this.handleOutsideClick),document.body.removeEventListener("click",_this.handleOutsideClick)},_this.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",_this.handleOutsideRightClick)},_this.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",_this.handleOutsideRightClick)},_this.getTooltipRef=function(node){_this.tooltipRef=node,setRef3(_this.props.innerRef,node)},_this.getArrowProps=function(props){return props===void 0&&(props={}),_extends({},props,{style:_extends({},props.style,_this.props.arrowProps.style)})},_this.getTooltipProps=function(props){return props===void 0&&(props={}),_extends({},props,_this.isTriggeredBy("hover")&&{onMouseEnter:callAll(_this.props.clearScheduled,props.onMouseEnter),onMouseLeave:callAll(_this.props.hideTooltip,props.onMouseLeave)},{style:_extends({},props.style,_this.props.style)})},_this.contextValue={isParentNoneTriggered:_this.props.trigger==="none",addParentOutsideClickHandler:_this.addOutsideClickHandler,addParentOutsideRightClickHandler:_this.addOutsideRightClickHandler,parentOutsideClickHandler:_this.handleOutsideClick,parentOutsideRightClickHandler:_this.handleOutsideRightClick,removeParentOutsideClickHandler:_this.removeOutsideClickHandler,removeParentOutsideRightClickHandler:_this.removeOutsideRightClickHandler},_this}var _proto=Tooltip3.prototype;return _proto.componentDidMount=function(){var _this2=this,observer=this.observer=new MutationObserver(function(){_this2.props.update()});if(observer.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var _this$context=this.context,removeParentOutsideClickHandler=_this$context.removeParentOutsideClickHandler,removeParentOutsideRightClickHandler=_this$context.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),removeParentOutsideClickHandler&&removeParentOutsideClickHandler(),removeParentOutsideRightClickHandler&&removeParentOutsideRightClickHandler()}},_proto.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},_proto.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var _this$context2=this.context,isParentNoneTriggered=_this$context2.isParentNoneTriggered,addParentOutsideClickHandler=_this$context2.addParentOutsideClickHandler,addParentOutsideRightClickHandler=_this$context2.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!isParentNoneTriggered&&addParentOutsideClickHandler&&addParentOutsideClickHandler(),!isParentNoneTriggered&&addParentOutsideRightClickHandler&&addParentOutsideRightClickHandler()}},_proto.render=function(){var _this$props3=this.props,arrowProps=_this$props3.arrowProps,placement=_this$props3.placement,tooltip=_this$props3.tooltip;return import_react2.default.createElement(TooltipContext.Provider,{value:this.contextValue},tooltip({arrowRef:arrowProps.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement,tooltipRef:this.getTooltipRef}))},_proto.isTriggeredBy=function(event){var trigger=this.props.trigger;return trigger===event||Array.isArray(trigger)&&trigger.includes(event)},Tooltip3}(import_react2.Component);Tooltip.contextType=TooltipContext;var DEFAULT_MUTATION_OBSERVER_CONFIG={childList:!0,subtree:!0},TooltipTrigger=function(_Component){_inheritsLoose(TooltipTrigger2,_Component);function TooltipTrigger2(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_Component.call.apply(_Component,[this].concat(args))||this,_this.state={tooltipShown:_this.props.defaultTooltipShown},_this.hideTimeout=void 0,_this.showTimeout=void 0,_this.popperOffset=void 0,_this.setTooltipState=function(state){var cb=function(){return _this.props.onVisibilityChange(state.tooltipShown)};_this.isControlled()?cb():_this.setState(state,cb)},_this.clearScheduled=function(){clearTimeout(_this.hideTimeout),clearTimeout(_this.showTimeout)},_this.showTooltip=function(_ref){var pageX=_ref.pageX,pageY=_ref.pageY;_this.clearScheduled();var state={tooltipShown:!0};_this.props.followCursor&&(state=_extends({},state,{pageX,pageY})),_this.showTimeout=window.setTimeout(function(){return _this.setTooltipState(state)},_this.props.delayShow)},_this.hideTooltip=function(){_this.clearScheduled(),_this.hideTimeout=window.setTimeout(function(){return _this.setTooltipState({tooltipShown:!1})},_this.props.delayHide)},_this.toggleTooltip=function(_ref2){var pageX=_ref2.pageX,pageY=_ref2.pageY,action=_this.getState()?"hideTooltip":"showTooltip";_this[action]({pageX,pageY})},_this.clickToggle=function(event){event.preventDefault();var pageX=event.pageX,pageY=event.pageY,action=_this.props.followCursor?"showTooltip":"toggleTooltip";_this[action]({pageX,pageY})},_this.contextMenuToggle=function(event){event.preventDefault();var pageX=event.pageX,pageY=event.pageY,action=_this.props.followCursor?"showTooltip":"toggleTooltip";_this[action]({pageX,pageY})},_this.getTriggerProps=function(props){return props===void 0&&(props={}),_extends({},props,_this.isTriggeredBy("click")&&{onClick:callAll(_this.clickToggle,props.onClick),onTouchEnd:callAll(_this.clickToggle,props.onTouchEnd)},_this.isTriggeredBy("right-click")&&{onContextMenu:callAll(_this.contextMenuToggle,props.onContextMenu)},_this.isTriggeredBy("hover")&&_extends({onMouseEnter:callAll(_this.showTooltip,props.onMouseEnter),onMouseLeave:callAll(_this.hideTooltip,props.onMouseLeave)},_this.props.followCursor&&{onMouseMove:callAll(_this.showTooltip,props.onMouseMove)}),_this.isTriggeredBy("focus")&&{onFocus:callAll(_this.showTooltip,props.onFocus),onBlur:callAll(_this.hideTooltip,props.onBlur)})},_this}var _proto=TooltipTrigger2.prototype;return _proto.componentWillUnmount=function(){this.clearScheduled()},_proto.render=function(){var _this2=this,_this$props=this.props,children=_this$props.children,tooltip=_this$props.tooltip,placement=_this$props.placement,trigger=_this$props.trigger,getTriggerRef=_this$props.getTriggerRef,modifiers=_this$props.modifiers,closeOnReferenceHidden=_this$props.closeOnReferenceHidden,usePortal=_this$props.usePortal,portalContainer=_this$props.portalContainer,followCursor=_this$props.followCursor,getTooltipRef=_this$props.getTooltipRef,mutationObserverOptions=_this$props.mutationObserverOptions,restProps=_objectWithoutPropertiesLoose(_this$props,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),popper=import_react2.default.createElement(Popper,_extends({innerRef:getTooltipRef,placement,modifiers:[{name:"followCursor",enabled:followCursor,phase:"main",fn:function(data){_this2.popperOffset=data.state.rects.popper}}].concat(modifiers)},restProps),function(_ref3){var ref=_ref3.ref,style=_ref3.style,placement2=_ref3.placement,arrowProps=_ref3.arrowProps,isReferenceHidden=_ref3.isReferenceHidden,update=_ref3.update;if(followCursor&&_this2.popperOffset){var _this2$state=_this2.state,pageX=_this2$state.pageX,pageY=_this2$state.pageY,_this2$popperOffset=_this2.popperOffset,width=_this2$popperOffset.width,height=_this2$popperOffset.height,x=pageX+width>window.pageXOffset+document.body.offsetWidth?pageX-width:pageX,y=pageY+height>window.pageYOffset+document.body.offsetHeight?pageY-height:pageY;style.transform="translate3d("+x+"px, "+y+"px, 0"}return import_react2.default.createElement(Tooltip,_extends({arrowProps,closeOnReferenceHidden,isReferenceHidden,placement:placement2,update,style,tooltip,trigger,mutationObserverOptions},{clearScheduled:_this2.clearScheduled,hideTooltip:_this2.hideTooltip,innerRef:ref}))});return import_react2.default.createElement(Manager,null,import_react2.default.createElement(Reference,{innerRef:getTriggerRef},function(_ref4){var ref=_ref4.ref;return children({getTriggerProps:_this2.getTriggerProps,triggerRef:ref})}),this.getState()&&(usePortal?(0,import_react_dom.createPortal)(popper,portalContainer):popper))},_proto.isControlled=function(){return this.props.tooltipShown!==void 0},_proto.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},_proto.isTriggeredBy=function(event){var trigger=this.props.trigger;return trigger===event||Array.isArray(trigger)&&trigger.includes(event)},TooltipTrigger2}(import_react2.Component);TooltipTrigger.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:noop,placement:"right",portalContainer:canUseDOM()?document.body:null,trigger:"hover",usePortal:canUseDOM(),mutationObserverOptions:DEFAULT_MUTATION_OBSERVER_CONFIG,modifiers:[]};var react_popper_tooltip_default=TooltipTrigger,match=(0,import_memoizerific.default)(1e3)((requests,actual,value,fallback=0)=>actual.split("-")[0]===requests?value:fallback),ArrowSpacing=8,Arrow=emotion_styled_browser_esm_default.div({position:"absolute",borderStyle:"solid"},({placement})=>{let x=0,y=0;switch(!0){case(placement.startsWith("left")||placement.startsWith("right")):{y=8;break}case(placement.startsWith("top")||placement.startsWith("bottom")):{x=8;break}default:}return{transform:`translate3d(${x}px, ${y}px, 0px)`}},({theme,color,placement})=>({bottom:`${match("top",placement,ArrowSpacing*-1,"auto")}px`,top:`${match("bottom",placement,ArrowSpacing*-1,"auto")}px`,right:`${match("left",placement,ArrowSpacing*-1,"auto")}px`,left:`${match("right",placement,ArrowSpacing*-1,"auto")}px`,borderBottomWidth:`${match("top",placement,"0",ArrowSpacing)}px`,borderTopWidth:`${match("bottom",placement,"0",ArrowSpacing)}px`,borderRightWidth:`${match("left",placement,"0",ArrowSpacing)}px`,borderLeftWidth:`${match("right",placement,"0",ArrowSpacing)}px`,borderTopColor:match("top",placement,theme.color[color]||color||theme.base==="light"?lightenColor(theme.background.app):theme.background.app,"transparent"),borderBottomColor:match("bottom",placement,theme.color[color]||color||theme.base==="light"?lightenColor(theme.background.app):theme.background.app,"transparent"),borderLeftColor:match("left",placement,theme.color[color]||color||theme.base==="light"?lightenColor(theme.background.app):theme.background.app,"transparent"),borderRightColor:match("right",placement,theme.color[color]||color||theme.base==="light"?lightenColor(theme.background.app):theme.background.app,"transparent")})),Wrapper=emotion_styled_browser_esm_default.div(({hidden})=>({display:hidden?"none":"inline-block",zIndex:2147483647}),({theme,color,hasChrome})=>hasChrome?{background:theme.color[color]||color||theme.base==="light"?lightenColor(theme.background.app):theme.background.app,filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:theme.appBorderRadius*2,fontSize:theme.typography.size.s1}:{}),Tooltip2=({placement,hasChrome,children,arrowProps,tooltipRef,arrowRef,color,...props})=>import_react3.default.createElement(Wrapper,{hasChrome,placement,ref:tooltipRef,...props,color},hasChrome&&import_react3.default.createElement(Arrow,{placement,ref:arrowRef,...arrowProps,color}),children);Tooltip2.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var{document:document2}=import_global.default,TargetContainer=emotion_styled_browser_esm_default.div`
  display: inline-block;
  cursor: ${props=>props.mode==="hover"?"default":"pointer"};
`,TargetSvgContainer=emotion_styled_browser_esm_default.g`
  cursor: ${props=>props.mode==="hover"?"default":"pointer"};
`,WithTooltipPure=({svg,trigger,closeOnClick,placement,modifiers,hasChrome,tooltip,children,tooltipShown,onVisibilityChange,...props})=>{let Container=svg?TargetSvgContainer:TargetContainer;return import_react.default.createElement(react_popper_tooltip_default,{placement,trigger,modifiers,tooltipShown,onVisibilityChange,tooltip:({getTooltipProps,getArrowProps,tooltipRef,arrowRef,placement:tooltipPlacement})=>import_react.default.createElement(Tooltip2,{hasChrome,placement:tooltipPlacement,tooltipRef,arrowRef,arrowProps:getArrowProps(),...getTooltipProps()},typeof tooltip=="function"?tooltip({onHide:()=>onVisibilityChange(!1)}):tooltip)},({getTriggerProps,triggerRef})=>import_react.default.createElement(Container,{ref:triggerRef,...getTriggerProps(),...props},children))};WithTooltipPure.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var WithToolTipState=({startOpen=!1,onVisibilityChange:onChange,...rest})=>{let[tooltipShown,setTooltipShown]=(0,import_react.useState)(startOpen),onVisibilityChange=(0,import_react.useCallback)(visibility=>{onChange&&onChange(visibility)===!1||setTooltipShown(visibility)},[onChange]);return(0,import_react.useEffect)(()=>{let hide=()=>onVisibilityChange(!1);document2.addEventListener("keydown",hide,!1);let iframes=Array.from(document2.getElementsByTagName("iframe")),unbinders=[];return iframes.forEach(iframe=>{let bind=()=>{try{iframe.contentWindow.document&&(iframe.contentWindow.document.addEventListener("click",hide),unbinders.push(()=>{try{iframe.contentWindow.document.removeEventListener("click",hide)}catch{}}))}catch{}};bind(),iframe.addEventListener("load",bind),unbinders.push(()=>{iframe.removeEventListener("load",bind)})}),()=>{document2.removeEventListener("keydown",hide),unbinders.forEach(unbind=>{unbind()})}}),import_react.default.createElement(WithTooltipPure,{...rest,tooltipShown,onVisibilityChange})};export{WithToolTipState,WithToolTipState as WithTooltip,WithTooltipPure};
