(self.webpackChunk_medaka0213_react_vrw=self.webpackChunk_medaka0213_react_vrw||[]).push([[5911],{"./node_modules/@mui/material/styles/defaultTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/material/styles/createTheme.js").Z)()},"./node_modules/@mui/material/styles/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Dz:()=>slotShouldForwardProp,FO:()=>rootShouldForwardProp,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/createStyled.js"),_defaultTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const rootShouldForwardProp=prop=>(0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.x9)(prop)&&"classes"!==prop,slotShouldForwardProp=_mui_system__WEBPACK_IMPORTED_MODULE_0__.x9,__WEBPACK_DEFAULT_EXPORT__=(0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.ZP)({themeId:_identifier__WEBPACK_IMPORTED_MODULE_1__.Z,defaultTheme:_defaultTheme__WEBPACK_IMPORTED_MODULE_2__.Z,rootShouldForwardProp})},"./node_modules/@mui/material/styles/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useTheme});__webpack_require__("./node_modules/react/index.js");var _mui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),_defaultTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useTheme(){const theme=(0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.Z)(_defaultTheme__WEBPACK_IMPORTED_MODULE_2__.Z);return theme[_identifier__WEBPACK_IMPORTED_MODULE_3__.Z]||theme}},"./node_modules/@mui/material/styles/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps});var _mui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),_defaultTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useThemeProps({props,name}){return(0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.Z)({props,name,defaultTheme:_defaultTheme__WEBPACK_IMPORTED_MODULE_1__.Z,themeId:_identifier__WEBPACK_IMPORTED_MODULE_2__.Z})}},"./node_modules/@mui/system/esm/createStyled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>createStyled,x9:()=>shouldForwardProp});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js");const _excluded=["variant"];function isEmpty(string){return 0===string.length}function propsToClassKey(props){const{variant}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded);let classKey=variant||"";return Object.keys(other).sort().forEach((key=>{classKey+="color"===key?isEmpty(classKey)?props[key]:(0,capitalize.Z)(props[key]):`${isEmpty(classKey)?key:(0,capitalize.Z)(key)}${(0,capitalize.Z)(props[key].toString())}`})),classKey}var styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js");const createStyled_excluded=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];const getStyleOverrides=(name,theme)=>theme.components&&theme.components[name]&&theme.components[name].styleOverrides?theme.components[name].styleOverrides:null,transformVariants=variants=>{const variantsStyles={};return variants&&variants.forEach((definition=>{const key=propsToClassKey(definition.props);variantsStyles[key]=definition.style})),variantsStyles},getVariantStyles=(name,theme)=>{let variants=[];return theme&&theme.components&&theme.components[name]&&theme.components[name].variants&&(variants=theme.components[name].variants),transformVariants(variants)},variantsResolver=(props,styles,variants)=>{const{ownerState={}}=props,variantsStyles=[];return variants&&variants.forEach((variant=>{let isMatch=!0;Object.keys(variant.props).forEach((key=>{ownerState[key]!==variant.props[key]&&props[key]!==variant.props[key]&&(isMatch=!1)})),isMatch&&variantsStyles.push(styles[propsToClassKey(variant.props)])})),variantsStyles},themeVariantsResolver=(props,styles,theme,name)=>{var _theme$components;const themeVariants=null==theme||null==(_theme$components=theme.components)||null==(_theme$components=_theme$components[name])?void 0:_theme$components.variants;return variantsResolver(props,styles,themeVariants)};function shouldForwardProp(prop){return"ownerState"!==prop&&"theme"!==prop&&"sx"!==prop&&"as"!==prop}const systemDefaultTheme=(0,createTheme.Z)(),lowercaseFirstLetter=string=>string?string.charAt(0).toLowerCase()+string.slice(1):string;function resolveTheme({defaultTheme,theme,themeId}){return function createStyled_isEmpty(obj){return 0===Object.keys(obj).length}(theme)?defaultTheme:theme[themeId]||theme}function defaultOverridesResolver(slot){return slot?(props,styles)=>styles[slot]:null}const muiStyledFunctionResolver=({styledArg,props,defaultTheme,themeId})=>{const resolvedStyles=styledArg((0,esm_extends.Z)({},props,{theme:resolveTheme((0,esm_extends.Z)({},props,{defaultTheme,themeId}))}));let optionalVariants;if(resolvedStyles&&resolvedStyles.variants&&(optionalVariants=resolvedStyles.variants,delete resolvedStyles.variants),optionalVariants){return[resolvedStyles,...variantsResolver(props,transformVariants(optionalVariants),optionalVariants)]}return resolvedStyles};function createStyled(input={}){const{themeId,defaultTheme=systemDefaultTheme,rootShouldForwardProp=shouldForwardProp,slotShouldForwardProp=shouldForwardProp}=input,systemSx=props=>(0,styleFunctionSx.Z)((0,esm_extends.Z)({},props,{theme:resolveTheme((0,esm_extends.Z)({},props,{defaultTheme,themeId}))}));return systemSx.__mui_systemSx=!0,(tag,inputOptions={})=>{(0,styled_engine.Co)(tag,(styles=>styles.filter((style=>!(null!=style&&style.__mui_systemSx)))));const{name:componentName,slot:componentSlot,skipVariantsResolver:inputSkipVariantsResolver,skipSx:inputSkipSx,overridesResolver=defaultOverridesResolver(lowercaseFirstLetter(componentSlot))}=inputOptions,options=(0,objectWithoutPropertiesLoose.Z)(inputOptions,createStyled_excluded),skipVariantsResolver=void 0!==inputSkipVariantsResolver?inputSkipVariantsResolver:componentSlot&&"Root"!==componentSlot&&"root"!==componentSlot||!1,skipSx=inputSkipSx||!1;let shouldForwardPropOption=shouldForwardProp;"Root"===componentSlot||"root"===componentSlot?shouldForwardPropOption=rootShouldForwardProp:componentSlot?shouldForwardPropOption=slotShouldForwardProp:function isStringTag(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96}(tag)&&(shouldForwardPropOption=void 0);const defaultStyledResolver=(0,styled_engine.ZP)(tag,(0,esm_extends.Z)({shouldForwardProp:shouldForwardPropOption,label:undefined},options)),muiStyledResolver=(styleArg,...expressions)=>{const expressionsWithDefaultTheme=expressions?expressions.map((stylesArg=>{if("function"==typeof stylesArg&&stylesArg.__emotion_real!==stylesArg)return props=>muiStyledFunctionResolver({styledArg:stylesArg,props,defaultTheme,themeId});if((0,deepmerge.P)(stylesArg)){let styledArgVariants,transformedStylesArg=stylesArg;return stylesArg&&stylesArg.variants&&(styledArgVariants=stylesArg.variants,delete transformedStylesArg.variants,transformedStylesArg=props=>{let result=stylesArg;return variantsResolver(props,transformVariants(styledArgVariants),styledArgVariants).forEach((variantStyle=>{result=(0,deepmerge.Z)(result,variantStyle)})),result}),transformedStylesArg}return stylesArg})):[];let transformedStyleArg=styleArg;if((0,deepmerge.P)(styleArg)){let styledArgVariants;styleArg&&styleArg.variants&&(styledArgVariants=styleArg.variants,delete transformedStyleArg.variants,transformedStyleArg=props=>{let result=styleArg;return variantsResolver(props,transformVariants(styledArgVariants),styledArgVariants).forEach((variantStyle=>{result=(0,deepmerge.Z)(result,variantStyle)})),result})}else"function"==typeof styleArg&&styleArg.__emotion_real!==styleArg&&(transformedStyleArg=props=>muiStyledFunctionResolver({styledArg:styleArg,props,defaultTheme,themeId}));componentName&&overridesResolver&&expressionsWithDefaultTheme.push((props=>{const theme=resolveTheme((0,esm_extends.Z)({},props,{defaultTheme,themeId})),styleOverrides=getStyleOverrides(componentName,theme);if(styleOverrides){const resolvedStyleOverrides={};return Object.entries(styleOverrides).forEach((([slotKey,slotStyle])=>{resolvedStyleOverrides[slotKey]="function"==typeof slotStyle?slotStyle((0,esm_extends.Z)({},props,{theme})):slotStyle})),overridesResolver(props,resolvedStyleOverrides)}return null})),componentName&&!skipVariantsResolver&&expressionsWithDefaultTheme.push((props=>{const theme=resolveTheme((0,esm_extends.Z)({},props,{defaultTheme,themeId}));return themeVariantsResolver(props,getVariantStyles(componentName,theme),theme,componentName)})),skipSx||expressionsWithDefaultTheme.push(systemSx);const numOfCustomFnsApplied=expressionsWithDefaultTheme.length-expressions.length;if(Array.isArray(styleArg)&&numOfCustomFnsApplied>0){const placeholders=new Array(numOfCustomFnsApplied).fill("");transformedStyleArg=[...styleArg,...placeholders],transformedStyleArg.raw=[...styleArg.raw,...placeholders]}const Component=defaultStyledResolver(transformedStyleArg,...expressionsWithDefaultTheme);return tag.muiName&&(Component.muiName=tag.muiName),Component};return defaultStyledResolver.withConfig&&(muiStyledResolver.withConfig=defaultStyledResolver.withConfig),muiStyledResolver}}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;const result={systemProps:{},otherProps:{}},config=null!=(_props$theme$unstable=null==props||null==(_props$theme=props.theme)?void 0:_props$theme.unstable_sxConfig)?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>getThemeProps});var _mui_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps.js");function getThemeProps(params){const{theme,name,props}=params;return theme&&theme.components&&theme.components[name]&&theme.components[name].defaultProps?(0,_mui_utils__WEBPACK_IMPORTED_MODULE_0__.Z)(theme.components[name].defaultProps,props):props}},"./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps});var _getThemeProps__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),_useTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js");function useThemeProps({props,name,defaultTheme,themeId}){let theme=(0,_useTheme__WEBPACK_IMPORTED_MODULE_0__.Z)(defaultTheme);themeId&&(theme=theme[themeId]||theme);return(0,_getThemeProps__WEBPACK_IMPORTED_MODULE_1__.Z)({theme,name,props})}},"./node_modules/@mui/utils/esm/composeClasses/composeClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function composeClasses(slots,getUtilityClass,classes=void 0){const output={};return Object.keys(slots).forEach((slot=>{output[slot]=slots[slot].reduce(((acc,key)=>{if(key){const utilityClass=getUtilityClass(key);""!==utilityClass&&acc.push(utilityClass),classes&&classes[key]&&acc.push(classes[key])}return acc}),[]).join(" ")})),output}__webpack_require__.d(__webpack_exports__,{Z:()=>composeClasses})},"./node_modules/@mui/utils/esm/resolveProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>resolveProps});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");function resolveProps(defaultProps,props){const output=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.Z)({},props);return Object.keys(defaultProps).forEach((propName=>{if(propName.toString().match(/^(components|slots)$/))output[propName]=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.Z)({},defaultProps[propName],output[propName]);else if(propName.toString().match(/^(componentsProps|slotProps)$/)){const defaultSlotProps=defaultProps[propName]||{},slotProps=props[propName];output[propName]={},slotProps&&Object.keys(slotProps)?defaultSlotProps&&Object.keys(defaultSlotProps)?(output[propName]=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.Z)({},slotProps),Object.keys(defaultSlotProps).forEach((slotPropName=>{output[propName][slotPropName]=resolveProps(defaultSlotProps[slotPropName],slotProps[slotPropName])}))):output[propName]=slotProps:output[propName]=defaultSlotProps}else void 0===output[propName]&&(output[propName]=defaultProps[propName])})),output}},"./src/components/Form/MarpPreview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>MarpPreview});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_marp_team_marp_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@marp-team/marp-core/lib/marp.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MarpPreview=({markdown,customRender})=>{const[html,setHtml]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[css,setCss]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[comments,setComments]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const marp=new _marp_team_marp_core__WEBPACK_IMPORTED_MODULE_1__.gG({html:!0}),{html,css,comments}=marp.render(markdown,{htmlAsArray:!0});setHtml(html),setCss(css),setComments(comments)}),[markdown]);const SlidePage=({html,css})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style",{children:css}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{dangerouslySetInnerHTML:{__html:html},className:"marpit"})]}),DefaultRender=({html,css})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SlidePage,{html,css})});return customRender?customRender({slides:html.map(((html,i)=>({index:i,comments:comments[i],slide:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SlidePage,{html,css},i)})))}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:html.map(((html,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DefaultRender,{html,css,index:i,comments},i)))})};try{MarpPreview.displayName="MarpPreview",MarpPreview.__docgenInfo={description:"",displayName:"MarpPreview",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"string"}},customRender:{defaultValue:null,description:"",name:"customRender",required:!1,type:{name:"((props: CustomRenderProps) => Element)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/MarpPreview.tsx#MarpPreview"]={docgenInfo:MarpPreview.__docgenInfo,name:"MarpPreview",path:"src/components/Form/MarpPreview.tsx#MarpPreview"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Form/MarpPreview.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustonRender:()=>CustonRender,Default:()=>Default,Transporter:()=>Transporter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _MarpPreview__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Form/MarpPreview.tsx"),_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_MarpPreview__WEBPACK_IMPORTED_MODULE_1__.V,title:"MarpPreview"},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MarpPreview__WEBPACK_IMPORTED_MODULE_1__.V,{...args});Template.displayName="Template";const T6='---\nmarp: true\npaginate: true\n---\n\x3c!--業務連絡 Attrs: event, spacecrafts, rocket, reuse_attempts, reuse_attempts[]["vehicle"]--\x3e\n<style>\n    p, table, ul {\n        font-size: 18px;\n    }\n    h1{\n        font-size: 42px;\n        padding: 10px 0;\n        margin: 10px 0;\n    }\n    h2{\n        font-size: 36px;\n        padding: 10px 0;\n        margin: 5px 0;\n    }\n    h3{\n        font-size: 30px;\n        padding: 10px 0;\n        margin: 5px 0;\n    }\n    h4{\n        font-size: 24px;\n        padding: 10px 0;\n        margin: 2px 0;\n    }\n    h5{\n        font-size: 18px;\n        padding: 10px 0;\n        margin: 2px 0;\n    }\n</style>\n\n\n\n\x3c!--\n_footer: \'Image:SpaceX\'\n--\x3e\n\n\n\n![bg left:40%](https://img.virtualrocketwatching.net/image/image_4e0ded53-f48a-44bb-a435-92c6beef4e33.jpeg)\n\n# Transporter 6\n\n小型衛星ライドシェア 114機\n\n\n|||\n|-|-|\n|日本時間| 1/3(火) 23:55 |\n|ロケット| SpaceX | Falcon 9 Block 5 |\n|射点| ケープカナベラル宇宙軍基地  |\n\n---\n![bg left:50% vertical](https://pbs.twimg.com/media/FlOdV9raUAIpJlT?format=jpg&name=4096x4096)\n![bg](https://www.teslarati.com/wp-content/uploads/2020/06/Starlink-V1-L8-Skysats-16-18-rideshare-June-2020-SpaceX-1-crop-768x432.jpg)\n\n# Smallsat Rideshare Prodram\nSpaceX 小型衛星ライドシェアプログラム\n\n\x3c!--\n_footer: \'Photo: ExoLaunch, SpaceX\'\n--\x3e\n\n基本料金 ... 50kgまで$275K\n追加料金 ... 1kgにつき$5.5K\n\nネットでかんたん予約: <https://spacex.com/rideshare>\n\n## SpaceX Transporter\n\n太陽同期軌道ライドシェア\n半年ごとに専用の定期便で打ち上げ\n\n## Starlink 相乗りミッション\n\n傾斜角53度の低軌道\n相乗り重量分のStarlinkを減らして打ち上げ\n\n---\n\x3c!--\n_footer: "Image: J. Aerosp. Technol. Manag., 2017、東京大学"\n--\x3e\n![bg left vertical](https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXBZO3269534022072011000001-9.jpg?ixlib=js-2.3.2&w=680&h=850&auto=format%2Ccompress&ch=Width%2CDPR&q=100&fit=crop&bg=FFFFFF&s=cca1536f7cebd6ab929045213b9aa202)\n\n# 成長する小型衛星市場\n\n2010年代から急速な打ち上げ数増加\nキューブサット、ESPAなど小型衛星の規格化\n\n## キューブサット\n\n超小型衛星: 1~10kg級\n10cm * 10cm * 10cm の立方体を1Uとして規格化\n\n![h:300](https://minio.scielo.br/documentstore/2175-9146/FJyCtWr5jnDTZV5dNSvR7Pw/f1fb4b677593a0cad8d93444b786a66c726766d6.jpg)\n\n---\n\n\x3c!--\n_footer: "Image: Electron, JAXA"\n--\x3e\n![bg left vertical](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjzTFfoMmVhV3MQVQtyGiOdF0-eoSZpadnw&usqp=CAU)\n![bg ](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaVSl8UG-2WTZ-N8y_rbW9Gx1yNTkQSsfoQqcYOjdcBGCYyAa6T1jD7LnwU8Taxw53Qs&usqp=CAU)\n![bg fit](https://fanfun.jaxa.jp/countdown/astro_h/images/cubesat_image.jpg)\n\n# 小型衛星の打ち上げ手段\n\n### 国際宇宙ステーションから放出\n\n国際宇宙ステーション補給機に相乗り\n→ ロボットアームで放出\n\n実験棟「きぼう」 ... 300万円～\n低価格だが、軌道はISS近傍に限定\n\n### 大型ロケットに相乗り\n\nH-IIAロケット ... 2,700万円～\n価格はピンキリ、主衛星の軌道に限定\n\n\n### 小型ロケットの専用ミッション\n\nElectronロケット\n- 低軌道に300kg、コスト$7.5M (8億円)\n- 1kg単価 低軌道に285万円\n\n---\n\n![bg left:40% fit vertical](https://www.eoportal.org/api/cms/documents/163813/2897662/STP1_Auto5.jpeg)\n![bg](https://techable.jp/wp-content/uploads/2019/08/SmallSat-Rideshare-1.png)\n\n# 小型衛星の打ち上げ手段\n\n## ESPA\n\nEELV Secondary Payload Adapter\n米国 発展型使い捨てロケット (Atlas-V, Delta-IV) 向けに開発\n\n軍事ミッション向け 小型ロケットのための放出機構の規格\n現在は商業ミッションでも活用\n\n### SpaceX Transporter\n\nESPAクラス小型衛星の相乗り\nアダプターを大量搭載して小型ライドシェア専門ミッション\n\n基本料金 ... 50kgまで$275K\n追加料金 ... 1kgにつき$5.5K\n\n\n---\n\n\x3c!--\n_footer: "Image: EXOLaunch"\n--\x3e\n![bg left vertical fit](https://pbs.twimg.com/media/E-CbJ6bWYAYSqSc?format=jpg&name=large)\n![bg fit](https://pbs.twimg.com/media/Ffb_PXZUoAMcjog?format=png&name=900x900)\n\n# EXOLaunch\n\nドイツのベンチャー企業\n放出機構を独自提供\n\n### EXOPorts\n\n複数のEXOPod, CarboNIXがESPAに結合\nESPAから複数の小型衛星を放出\nほぼSpaceX向け\n\n### EXOPod\n\nキューブサット放出機構\n複数のキューブが相乗りで放出\n\n\n---\n\x3c!--\n_footer: "Image: EXOLaunch, SpaceX"\n--\x3e\n![bg left vertical fit](https://pbs.twimg.com/media/Ffb-S4lUcAAviIS?format=jpg&name=medium)\n![bg fit](https://pbs.twimg.com/media/Ffb-UqTUUAEJ9-X?format=jpg&name=medium)\n\n# SpaceX 相乗り料金改定\n\n改定前 ... ESPA級の小型衛星向け\n\n- 200kgまで基本料金$1.1M (1億円)\n- 追加料金 1kgあたり5K (57万円)\n\n改定後 (2022年10月発表) ... より小型の衛星向けの放出機構\n角柱形の新型アダプター\n- 基本料金 ... 50kgまで$275K\n- 追加料金 ... 1kgにつき$5.5K\n\n\n![](https://m.exolaunch.com/img/news/news52_%D1%81.jpg)\n\n---\n\n# 衛星キャリア\n\n顧客の衛星を搭載して軌道遷移\nSpaceX Transporterと別の軌道に投入\n\n![bg left:40% vertical](https://cdnb.artstation.com/p/assets/images/images/057/514/609/4k/martin-miguel-orbiter-update-dispensing-mktg.jpg?1671800635)\n![bg](https://cdnb.artstation.com/p/assets/images/images/057/514/601/4k/martin-miguel-orbiter-update-launcher-light-separation.jpg?1671800624&dl=1)\n\n\x3c!--\n_footer: "Image: Launcher"\n--\x3e\n\n## Launcher Orbiter SN1\n\n国/種別 ... 米国 / 衛星キャリア\n運用 ... Launcher\n装備 ... キューブサット放出機構\n\n最大400kgのペイロードを搭載して軌道遷移\nエタン/亜酸化窒素の推進系 （dV = 500m/s）\n\n将来的には自社の小型ロケットの上段としても運用？\n\n\n---\n\n![bg left:40%](https://storage.googleapis.com/nextspaceflight/media/rockets/Block_5.jpg)\n\n# Falcon 9 Block 5\n\n2段式ロケット+ 補助ブースター0基\n\n|||\n|-|-|\n|初飛行|2018年 5/12(土) 05:14 <br> (Bangabandhu-1)|\n|飛行回数|139回目|\n|性能|地球低軌道に 22.8 トン<br>GTO(静止軌道遷移軌道)に 8.3 トン|\n|大きさ|全長70.0 m<br>フェアリング: 直径5.2 m * 高さ13.0 m|\n|離昇推力|7607.0 kN (776トン重)|\n|費用|$67M (87億円)|\n|kg単価|地球低軌道に $2K (38万円)<br>GTO(静止軌道遷移軌道)に $8K (105万円)|\n\n---\n\n|名前|国|仲介業者|運用/製造|構成/重量|概要|\n|-|-|-|-|-|-|\n|KuwaitSat-1|クウェート|||キューブサット (2U) |技術実証|\n|BDSAT|チェコ|| BD Sensors<br>中央ヨーロッパ工科大学|キューブサット (1U) |技術実証\n|SharedSat 2211|ブルガリア||EnduroSat / EnduroSat|キューブサット (6U) |技術実証\n|Lemur-2 |米国||Spire / Spire|キューブサット (3U) <br> 4 kg　×6機|地球観測<br>交通監視\n|Connecta T1.1|トルコ||Plan-S / )|キューブサット (3U) |技術実証, 通信\n|GAMA|\n|BRO 8|フランス||UnseenLabs / GOMSpace|キューブサット (6U) / 6 kg|スペクトル分析<br>交通監視\n|Menut|\n|MilSpace-1 & 2<br>(Huygens  & Birkeland)|ノルウェー<br>オランダ||ノルウェー防衛技研<br> オランダ王立航空宇宙センター <br> NanoAvionics|キューブサット (6U) <br> 10 kg ×2機|技術実証\n\n---\n\n|名前|国|仲介業者|運用/製造|構成/重量|概要|\n|-|-|-|-|-|-|\n|Star-Vibe\n|KSF 3|ルクセンブルク|ISILAUNCH |Kleos Space / ISISpace|キューブサット (6U) <br> ×4機 |スペクトル分析<br> 交通監視\n|SpaceBEE-156/167 |米国||Swarm Technologies|キューブサット (0.25U) <br> 0.25 kg ×10機| IoT向けスターリンク\n|RROCI\n|PolyItan 2 ||SpaceBD<br>ISILAUNCH\n|Flock-4Y <br>(SuperDove)|米国||Planet Labs|キューブサット (3U) <br> 5 kg　×36機|技術実証\n|Guardian alpha|スペイン|| OrbAstro|キューブサット (3U) |地球観測\n|Sony Sphere-1|日本|SpaceBD |SONY| キューブサット (6U) |地球観測\n|NSLSat 2|イスラエル|ISILAUNCH|NSLComm / ÅAC Clyde Space|キューブサット (6U) |技術実証\n\n---\n\n|名前|国|仲介業者|運用/製造|構成/重量|概要|\n|-|-|-|-|-|-|\n|Sternula 1|Denmark|ISILAUNCH|GOMSpace / GOMSpace|キューブサット (6U) |交通監視, 通信\n|Lynk Tower 03/04|米国||Lynk Global Inc| × 2機|通信\n|YAM 5|米国||Loft Orbital & LeoStella |LeoStella bus / 83 kg|技術実証\n|Ñusat 34 & 35|アルゼンチン||Satellogic S.A. | 41 kg |地球観測\n|ION-SCV 7 & 8|イタリア||D-Orbit / D-Orbit|ION mk02 platform |衛星キャリア\n|Orbiter SN1|米国|| Launcher| |衛星キャリア\n|ICEYE X21,X22,X27|フィンランド||ICEYE| |地球観測\n|Umbra-SAR 2001|米国||Umbra Lab| 65 kg × 2機|地球観測\n|Skykraft Deployer 1|オーストラリア||Skykraft| |衛星キャリア\n|Vigoride 5|米国||Momentus| |衛星キャリア\n|Chimera LEO-1|米国||Epic Aerospace| |衛星キャリア\n|EOS-SAT 1|南アフリカ||Dragonfly Aerospace|µDragonfly bus / ~100 kg|地球観測\n\n---\n\x3c!--\n_footer: "Image: KuwaitSat.space CEITEC"\n--\x3e\n\n![bg left:40% vertical](https://kuwaitsat.space/img/2-Unit-structure.png)\n\n\n### KuwaitSat-1\n\n国/種別 ... クウェート / 技術実証\n構成 ... キューブサット (2U)\n\nカメラを用いた姿勢制御の実験\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/bd-sat__1.jpg)\n\n### BDSAT 2\n\n国/種別 ... チェコ / 技術実証\n運用 ... BD Sensors,中央ヨーロッパ工科大学\n構成 ... キューブサット (1U) / 1 kg\n\n\nアマチュア無線ペイロード\n圧力測定装置、スーパーキャパシタの実証\n\n\n---\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/spartan__1.jpg)\n\n\x3c!--\n_footer: "Image: EnduroSat"\n--\x3e\n\n### SharedSat 2211\n\n国/種別 ... ブルガリア / 技術実証\n運用 ... EnduroSat\n構成 ... キューブサット (6U)\n\n顧客の実験機器をのせて実験衛星として運用\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/lemur-2__2.jpg)\n\n\x3c!--\n_footer: "Image: Spire"\n--\x3e\n\n### Lemur-2 ×6機\n\n国/種別 ... 米国 / 地球観測, 交通監視\n運用 ... Spire\n構成 ... キューブサット (3U) / 4 kg\n\nSTRATOS (GNSS電波掩蔽機器)\nSENSE (AIS受信機)\nAirSafe (ASD-B受信機)\n\n\n---\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/connecta-t1-1__1.jpg)\n![bg](https://static.wixstatic.com/media/3d111e_3418c619fc884ffe862f71f5ff717874~mv2.png/v1/fill/w_324,h_183,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d111e_3418c619fc884ffe862f71f5ff717874~mv2.png)\n\n\x3c!--\n_footer: "Image: Plan-S"\n--\x3e\n\n### Connecta T1.1\n\n国/種別 ... Turkey / 技術実証, 通信\n運用 ... Plan-S\n構成 ... キューブサット (3U)\n\n### Gama Alpha\n\n\n国/種別 ... フランス / 技術実証\n\nソーラセイルの実証\n（画像は将来構想）\n\n\x3c!--\nhttps://www.satelliteevolution.com/post/nanoavionics-and-gama-to-set-sail-in-space-demonstrating-solar-sail-propulsion-in-leo\n--\x3e\n\n---\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/bro-1__1.jpg)\n![bg left:40% vertical](https://2.bp.blogspot.com/-65wD7oIG90M/VaYrTG3K_UI/AAAAAAAAvn8/yUk3rBTyajw/s800/space_jinkoueisei.png)\n\n\x3c!--\n_footer: "Image: UnseenLabs"\n--\x3e\n\n### BRO 8\n\n国/種別 ... フランス / 電磁スペクトル分析, SIGINT, 交通監視\n運用 ... UnseenLabs　/ GOMSpace\n構成 ... キューブサット (6U) / 6 kg\n\n民間SIGINT衛星\n船舶等の電波を受信して解析\n\n### Menut\n\n国/種別 ... スペイン / 地球観測\n運用 ... Open Cosmos\n構成 ... キューブサット (6U)\n\n---\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/milspace2__1.jpg)\n\n\x3c!--\n_footer: "Image: NanoAvionics"\n--\x3e\n\n### MilSpace2 (Huygens  & Birkeland)\n\n国/種別 ... ノルウェー, オランダ / 技術実証\n運用 ... ノルウェー防衛技研, オランダ王立航空宇宙センター\n製造 ... NanoAvionics\n構成 ... キューブサット (6U) / 10 kg\n\nNanoAvioncsの衛星プラットフォーム\n顧客の実験機器をのせて実験\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/ksf-1__1.jpg)\n\n\x3c!--\n_footer: "Image: ISISpace"\n--\x3e\n\n### KSF 3 ×4機\n\n国/種別 ... ルクセンブルク / 電磁スペクトル分析, SIGINT, 交通監視\n運用 ... Kleos Space\n構成 ... ISISpace / キューブサット (6U) ×4機\n\n海上無線の位置情報を解析\n人命救助・国境警備・偵察に利用\n\n---\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/spacebee-10__1.jpg)\n\n\x3c!--\n_footer: "Image: Swarm Technologies"\n--\x3e\n\n# SpaceBEE ×10機\n\n国/種別 ... 米国 / 通信 M2M/IoT\n運用 ... Swarm Technologies\n構成 ... キューブサット (0.25U) / 0.25 kg\n\n\n### IoT向け Starlink\n\n2021年8月 IoT向け衛星通信事業者「Swarm」を買収\n月額$5で世界中どこでもインターネット接続\n\n0.25Uの超超小型衛星でIoT向け通信\nこれまでに180機以上を投入\n\n海洋ブイ、農業、車両追跡などに利用\n\n\n---\n\n![bg left:40% vertical](https://2.bp.blogspot.com/-65wD7oIG90M/VaYrTG3K_UI/AAAAAAAAvn8/yUk3rBTyajw/s800/space_jinkoueisei.png)\n\n![bg left:40% vertical](https://2.bp.blogspot.com/-65wD7oIG90M/VaYrTG3K_UI/AAAAAAAAvn8/yUk3rBTyajw/s800/space_jinkoueisei.png)\n\n### RROCI\n\n国/種別 ... 米国 / 気象観測\n運用 ... アメリカ宇宙軍\n構成 ... キューブサット (12U)\n\n### PolyItan HP-30\n\n国/種別 ... ウクライナ / 技術実証\n構成 ... キューブサット (2U)\n\nヒートパイプの技術実証\n\n\n---\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/flock-1__2.jpg)\n\n\x3c!--\n_footer: "Image: Planet Labs, Aistech"\n--\x3e\n\n### Flock-4Y\n\n国/種別 ... 米国 / 技術実証\n運用 ... Planet Labs\n構成 ... キューブサット (3U) / 5 kg\n装備 ... PS0, PS1 or PS2 画像ペイロード\n寿命 ... 2-3年\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/guardian-alpha__1.jpg)\n\n\n### Guardian alpha\n\n国/種別 ... Spain / 地球観測\n運用 ... OrbAstro\n構成 ... キューブサット (3U)\n推進系 ... 2 × FEEP\n\n---\n\x3c!--\n_footer: "Image: SONY"\n--\x3e\n![bg left vertical](https://readyfor.jp/s3/readyfor-img/ckeditor_assets/pictures/922871/content_f08fb8dc6e0ccba778d083db486e7ca4e0274e4c.png)\n![bg](https://prcdn.freetls.fastly.net/release_image/103296/2/103296-2-adc6e381074b63fe28be41200901a93a-1597x889.png?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds)\n\n## Sony Sphere-1 "EYE"\n\n国/種別 ... 日本 / 技術実証\n運用 ... SONY\n構成 ... キューブサット (6U)\n推進系 ... 水ベースの電気推進\n\n### ソニー 衛星画像撮影体験サービス\n\n「誰でも宇宙カメラマン」\n自社製のフルサイズカメラ ＋ レンズ (28-135mm, F4)\n\n地上局と通信しながら衛星を制御して画像を撮影\nリアルタイムの画像確認＆360度操作\n\n\n東京大学 ... 水スラスターの提供・技術実証（革新3号で実証予定だった）\nJAXA ... 人工衛星の開発・運用ノウハウ\n\n今回の打ち上げはSONYのYoutube・Webメタバースで中継\n~~(ロケみる集会やんけ)~~\n\n---\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/nslsat-1__1.jpg)\n\n\x3c!--\n_footer: "Image: Sternula, NSLComm"\n--\x3e\n\n### NSLSat 2\n\n国/種別 ... イスラエル / 技術実証\n運用 ... NSLComm / ÅAC Clyde Space\n構成 ... キューブサット (6U)\n\n2Uのスペースから非剛性リフレクターを展開\n最大1Gbpsの通信を提供\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/sternula-1__1.jpg)\n\n### Sternula 1\n\n国/種別 ... デンマーク / 技術実証, 交通監視, 通信\n運用 ... GOMSpace\n構成 ... キューブサット (6U)\n装備 ... AIS受信機, VDES通信機器\n\n\n---\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/lynk-06__1.jpg)\n\n\n### Lynk Tower 03, 04\n\n国/種別 ... 米国 / 通信\n運用 ... Lynk Global Inc.\n\n既存の携帯電話と直接通信\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/yam-3__1.jpg)\n\n\x3c!--\n_footer: "Image: Lynk Global, Loft Orbital, Dragonfly Aerospace"\n--\x3e\n\n\n### YAM 5\n\n国/種別 ... 米国 / 技術実証\n運用 ... Loft Orbital; LeoStella (bus)\n重量 ...  LeoStella bus / 83 kg\n\n顧客の衛星を搭載して実験\n\n![bg left:40% vertical fit](https://space.skyrocket.de/img_sat/eos-sat-1__1.jpg)\n\n## EOS-SAT 1\n\n国/種別 ... South Africa / 地球観測\n運用 ... Dragonfly Aerospace\n構成 ... µDragonfly bus / ~100 kg\n装備 ... 2 × Dragoneye 画像ペイロード\n\n\n---\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/nusat-1__1.jpg)\n\n\n### Ñusat 34 & 35\n\n国/種別 ... アルゼンチン / 地球観測\n運用 ... Satellogic S.A.\n重量 ... 41 kg\n装備 ... 画像ペイロード\n寿命 ... 3-4年\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/iceye-x4__1.jpg)\n\n\x3c!--\n_footer: "Image: ICEYE, Umbra Lab, Satellogic"\n--\x3e\n\n## ICEYE X21, X22, X27\n\n国/種別 ... フィンランド, 米国 / 地球観測 (レーダー)\n運用 ... ICEYE\n装備 ... X-band SAR\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/umbra-sar__1.jpg)\n\n\n### Umbra-SAR\n\n国/種別 ... 米国 / 地球観測 (レーダー)\n運用 ... Umbra Lab\n重量 ... 65 kg\n装備 ... X-band SAR\n\n\n\n---\n\n![bg left:40% vertical fit](https://space.skyrocket.de/img_sat/ion-scv2__1.jpg)\n\n\x3c!--\n_footer: "Image: D-Orbit, Skykraft"\n--\x3e\n\n# 衛星キャリア\n\n顧客の衛星を搭載して軌道遷移\nSpaceX Transporterと別の軌道に投入\n\n## ION-SCV 007, 008\n\n国/種別 ... イタリア / 衛星キャリア\n運用 ... D-Orbit\n構成 ... ION mk02 platform\n装備 ... キューブサット放出機構\n\n## Skykraft Deployer 1\n\n(画像は搭載されてる方)\n\n国/種別 ... オーストラリア / 衛星キャリア\n運用 ... Skykraft\n\n\n自社の通信衛星「Skykraft Block 2」を搭載\n(ADS-B受信機, VHS通信機器を搭載して通信・海上監視)\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/skykraft_block2__1.jpg)\n\n---\n\n# 衛星キャリア\n\n顧客の衛星を搭載して軌道遷移\nSpaceX Transporterと別の軌道に投入\n\n\n![bg left:40% vertical](https://space.skyrocket.de/img_sat/vigoride__1.jpg)\n\n\x3c!--\n_footer: "Image: Momentus, Epic Aerospace"\n--\x3e\n\n### Vigoride 1, 2, 3, 4, 5\n\n国/種別 ... 米国 / 衛星キャリア\n運用 ... Momentus\n装備 ... キューブサット放出機構\n推進系 ... 水ベースのマイクロ波式電気推進\n\n![bg left:40% fit vertical](https://pbs.twimg.com/media/FlhgTdNaYAEFBQJ?format=jpg&name=large)\n\n\n### Chimera LEO-1\n\n国/種別 ... 米国 / 衛星キャリア\n運用 ... Epic Aerospace\n装備 ... キューブサット放出機構\n\n最大200kgのペイロードを搭載して軌道遷移\n過酸化水素系のスラスタ （dV = 100m/s）\n将来的にはGTOに投入可能なサイズまで大型化？\n\n---\n\n# 衛星キャリア\n\n顧客の衛星を搭載して軌道遷移\nSpaceX Transporterと別の軌道に投入\n\n![bg left:40% vertical](https://cdnb.artstation.com/p/assets/images/images/057/514/609/4k/martin-miguel-orbiter-update-dispensing-mktg.jpg?1671800635)\n![bg](https://cdnb.artstation.com/p/assets/images/images/057/514/601/4k/martin-miguel-orbiter-update-launcher-light-separation.jpg?1671800624&dl=1)\n\n\x3c!--\n_footer: "Image: Launcher"\n--\x3e\n\n## Launcher Orbiter SN1\n\n国/種別 ... 米国 / 衛星キャリア\n運用 ... Launcher\n装備 ... キューブサット放出機構\n\n最大400kgのペイロードを搭載して軌道遷移\nエタン/亜酸化窒素の推進系 （dV = 500m/s）\n\n将来的には自社の小型ロケットの上段としても運用？\n',Default=Template.bind({});Default.args={markdown:"# hello"};const Transporter=Template.bind({});Transporter.args={markdown:T6};const CustonRender=Template.bind({});CustonRender.args={markdown:T6,customRender:({slides})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__.ZP,{container:!0,spacing:2,children:slides.map((({slide,comments},i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__.ZP,{xs:2,children:slide},i)))})})};const __namedExportsOrder=["Default","Transporter","CustonRender"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <MarpPreview {...args} />",...Default.parameters?.docs?.source}}},Transporter.parameters={...Transporter.parameters,docs:{...Transporter.parameters?.docs,source:{originalSource:"args => <MarpPreview {...args} />",...Transporter.parameters?.docs?.source}}},CustonRender.parameters={...CustonRender.parameters,docs:{...CustonRender.parameters?.docs,source:{originalSource:"args => <MarpPreview {...args} />",...CustonRender.parameters?.docs?.source}}}},"?9114":()=>{},"?79d2":()=>{},"?8fd1":()=>{},"?f406":()=>{},"?0d79":()=>{},"?6b7f":()=>{},"?92c0":()=>{},"?21c9":()=>{},"?5d81":()=>{},"?ca9a":()=>{}}]);