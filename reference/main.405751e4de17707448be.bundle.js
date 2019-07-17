(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(17),styled_components_browser_esm=__webpack_require__(18);function _templateObject5(){var data=Object(taggedTemplateLiteral.a)(["\n  margin-left: 8px;\n  font-size: 14px;\n"]);return _templateObject5=function _templateObject5(){return data},data}function _templateObject4(){var data=Object(taggedTemplateLiteral.a)([""]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n  @media screen and (max-width: 600px) {\n    margin-top: 10px;\n  }\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  margin-right: 10px;\n  padding: 7px;\n  font-size: 15px;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);\n\n  @media screen and (max-width: 600px) {\n    width: 100%;\n  }\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 3px;\n  align-items: center;\n\n  @media screen and (max-width: 600px) {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Form=styled_components_browser_esm.a.form.attrs({novalidate:!0})(_templateObject()),Input=styled_components_browser_esm.a.input.attrs({type:"text"})(_templateObject2()),CheckboxContainer=styled_components_browser_esm.a.label(_templateObject3()),Checkbox=styled_components_browser_esm.a.input.attrs({type:"checkbox"})(_templateObject4()),CheckboxLabel=styled_components_browser_esm.a.span(_templateObject5());function SearchBar(_ref){var onSubmit=_ref.onSubmit,checkboxLabel=_ref.checkboxLabel,queryInput=Object(react.useRef)(null),tagsOnly=Object(react.useRef)(null),debounce=function debounce(fn,time){var timeout;return function _debounce(){for(var _this=this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var call=function call(){return fn.apply.apply(fn,[_this].concat(args))};clearTimeout(timeout),timeout=setTimeout(call,time)}};function handleSubmit(){onSubmit&&"function"==typeof onSubmit&&onSubmit({query:queryInput.current.value,onlyTags:tagsOnly.current.checked||!1})}return react_default.a.createElement(Form,{onSubmit:handleSubmit},react_default.a.createElement(Input,{ref:queryInput,onInput:debounce(handleSubmit,400),"data-testid":"query",placeholder:"Procurar..."}),react_default.a.createElement(CheckboxContainer,{htmlFor:"search-tags"},react_default.a.createElement(Checkbox,{ref:tagsOnly,onChange:debounce(handleSubmit,400),"data-testid":"tags-only",id:"search-tags"}),react_default.a.createElement(CheckboxLabel,null,checkboxLabel)))}__webpack_require__.d(__webpack_exports__,"a",function(){return SearchBar}),SearchBar.defaultProps={onSubmit:null,checkboxLabel:"search in tags only"},SearchBar.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{onSubmit:{defaultValue:{value:"null",computed:!1},required:!1},checkboxLabel:{defaultValue:{value:"'search in tags only'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SearchBar/index.js"]={name:"SearchBar",docgenInfo:SearchBar.__docgenInfo,path:"src/components/SearchBar/index.js"})},185:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(17),styled_components_browser_esm=__webpack_require__(18);function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n  font-size: 22px;\n  margin: 0px;\n  padding: 0px;\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  font-size: 30px;\n  margin: 0px 0px 10px 0px;\n  padding: 0px;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components_browser_esm.a.header(_templateObject()),Title=styled_components_browser_esm.a.h1(_templateObject2()),SubTitle=styled_components_browser_esm.a.h3(_templateObject3());function Header(_ref){var title=_ref.title,subtitle=_ref.subtitle;return react_default.a.createElement(Container,null,react_default.a.createElement(Title,null,title),react_default.a.createElement(SubTitle,null,subtitle))}__webpack_require__.d(__webpack_exports__,"a",function(){return Header}),Header.defaultProps={title:"VUTTR",subtitle:"Very Useful Tools to Remember"},Header.__docgenInfo={description:"Header component to use on header of aplication.",methods:[],displayName:"Header",props:{title:{defaultValue:{value:"'VUTTR'",computed:!1},required:!1},subtitle:{defaultValue:{value:"'Very Useful Tools to Remember'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Header/index.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"src/components/Header/index.js"})},186:function(module,__webpack_exports__,__webpack_require__){"use strict";var slicedToArray=__webpack_require__(376),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Icon=__webpack_require__(844),DialogContentText=__webpack_require__(845),lodash=__webpack_require__(182),taggedTemplateLiteral=__webpack_require__(17),styled_components_browser_esm=__webpack_require__(18),Dialog=__webpack_require__(846),DialogTitle=__webpack_require__(841),DialogContent=__webpack_require__(842),DialogActions=__webpack_require__(843),Button=__webpack_require__(847);function _templateObject13(){var data=Object(taggedTemplateLiteral.a)([""]);return _templateObject13=function _templateObject13(){return data},data}function _templateObject12(){var data=Object(taggedTemplateLiteral.a)([""]);return _templateObject12=function _templateObject12(){return data},data}function _templateObject11(){var data=Object(taggedTemplateLiteral.a)([""]);return _templateObject11=function _templateObject11(){return data},data}function _templateObject10(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  flex-direction: column;\n\n  > .MuiFormControl-root {\n    margin-bottom: 20px;\n\n    &:last-child {\n      margin-bottom: 0px;\n    }\n  }\n"]);return _templateObject10=function _templateObject10(){return data},data}function _templateObject9(){var data=Object(taggedTemplateLiteral.a)(["\n  > h6 {\n    display: flex;\n    align-items: center;\n\n    .MuiIcon-root {\n      margin-right: 10px;\n    }\n  }\n"]);return _templateObject9=function _templateObject9(){return data},data}function _templateObject8(){var data=Object(taggedTemplateLiteral.a)([""]);return _templateObject8=function _templateObject8(){return data},data}function _templateObject7(){var data=Object(taggedTemplateLiteral.a)(["\n  cursor: pointer;\n  font-size: 13px;\n  padding: 4px 8px;\n  background: rgba(204, 28, 28, 1);\n  color: #ffffff;\n  font-weight: bold;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  box-shadow: 1px 1px rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n\n  > span {\n    margin-right: 3px;\n  }\n"]);return _templateObject7=function _templateObject7(){return data},data}function _templateObject6(){var data=Object(taggedTemplateLiteral.a)(["\n  font-size: 13px;\n  font-weight: bold;\n  margin-right: 7px;\n  margin-bottom: 4px;\n\n  &::before {\n    content: '#';\n  }\n"]);return _templateObject6=function _templateObject6(){return data},data}function _templateObject5(){var data=Object(taggedTemplateLiteral.a)(["\n  list-style-type: none;\n  padding: 0px;\n  margin: 0px;\n  margin-top: 15px;\n  display: flex;\n  flex-wrap: wrap;\n"]);return _templateObject5=function _templateObject5(){return data},data}function _templateObject4(){var data=Object(taggedTemplateLiteral.a)(["\n  font-size: 15px;\n"]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n  font-size: 20px;\n  /* color: rgba(85, 26, 139); */\n  color: #3a0071;\n  text-decoration: underline;\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  margin-bottom: 15px;\n  justify-content: space-between;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  padding: 15px 10px;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 930px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components_browser_esm.a.article(_templateObject()),Header=styled_components_browser_esm.a.header(_templateObject2()),Title=styled_components_browser_esm.a.a(_templateObject3()),Description=styled_components_browser_esm.a.p(_templateObject4()),Tags=styled_components_browser_esm.a.ul(_templateObject5()),Tag=styled_components_browser_esm.a.li(_templateObject6()),RemoveButton=styled_components_browser_esm.a.button.attrs({type:"button"})(_templateObject7()),AlertConfirm=Object(styled_components_browser_esm.a)(Dialog.a).attrs({fullWidth:!0,scroll:"body",maxWidth:"xs"})(_templateObject8()),AlertTitle=Object(styled_components_browser_esm.a)(DialogTitle.a)(_templateObject9()),AlertContent=Object(styled_components_browser_esm.a)(DialogContent.a)(_templateObject10()),AlertFooter=Object(styled_components_browser_esm.a)(DialogActions.a)(_templateObject11()),AlertCancelButton=Object(styled_components_browser_esm.a)(Button.a).attrs({color:"secondary",size:"small",variant:"text"})(_templateObject12()),AlertConfirmButton=Object(styled_components_browser_esm.a)(Button.a).attrs({color:"primary",size:"small",variant:"text"})(_templateObject13());function ToolCard(_ref){var tool=_ref.tool,onRemove=_ref.onRemove,markTextAt=_ref.markTextAt,_useState=Object(react.useState)(!1),_useState2=Object(slicedToArray.a)(_useState,2),confirmDelete=_useState2[0],setConfirmDelete=_useState2[1];function markText(source){var findText=markTextAt;return"string"==typeof source&&findText?(Object(lodash.isRegExp)(findText)||(findText=new RegExp("(".concat(Object(lodash.escapeRegExp)(findText),")"),"gi")),source.split(findText).map(function(value,idx){if(idx%2>=1){var key="".concat(Object(lodash.camelCase)(value),"-").concat(idx);return react_default.a.createElement("mark",{key:key},value)}return value})):source}return react_default.a.createElement(Container,{className:"tool-card-container"},react_default.a.createElement(Header,null,react_default.a.createElement(Title,{href:tool.link,target:"_blank"},markText(tool.title)),!!tool.id&&react_default.a.createElement(RemoveButton,{className:"remove",onClick:function onClick(){return setConfirmDelete(!0)}},react_default.a.createElement(Icon.a,{fontSize:"inherit"},"delete")," remove")),react_default.a.createElement(Description,null,markText(tool.description)),react_default.a.createElement(Tags,{className:"tags"},tool.tags.map(function(tag){return react_default.a.createElement(Tag,{key:tag},markText(tag))})),react_default.a.createElement(AlertConfirm,{open:confirmDelete,"data-testid":"dialog-confirmPopup"},react_default.a.createElement(AlertTitle,null,react_default.a.createElement(Icon.a,null,"delete"),"Excluindo ferramenta..."),react_default.a.createElement(AlertContent,null,react_default.a.createElement(DialogContentText.a,null,'Você está excluindo "',react_default.a.createElement("strong",null,tool.title),'" da lista de ferramentas. Esta ação não poderá ser desfeita, deseja continuar assim mesmo?')),react_default.a.createElement(AlertFooter,null,react_default.a.createElement(AlertCancelButton,{"data-testid":"dialog-cancelButton",onClick:function handleCancelRemove(){setConfirmDelete(!1)}},"Não, cancelar!"),react_default.a.createElement(AlertConfirmButton,{"data-testid":"dialog-confirmButton",onClick:function handleRemove(){if(onRemove&&"function"==typeof onRemove){var id=tool.id,title=tool.title;onRemove({id:id,title:title})}setConfirmDelete(!1)}},"Sim, continuar."))))}__webpack_require__.d(__webpack_exports__,"a",function(){return ToolCard}),ToolCard.defaultProps={onRemove:null,markTextAt:null},ToolCard.__docgenInfo={description:"",methods:[],displayName:"ToolCard",props:{onRemove:{defaultValue:{value:"null",computed:!1},required:!1},markTextAt:{defaultValue:{value:"null",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToolCard/index.js"]={name:"ToolCard",docgenInfo:ToolCard.__docgenInfo,path:"src/components/ToolCard/index.js"})},384:function(module,exports,__webpack_require__){__webpack_require__(385),__webpack_require__(488),module.exports=__webpack_require__(489)},489:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(77);const req=__webpack_require__(652);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(filename=>req(filename))},module)}.call(this,__webpack_require__(122)(module))},652:function(module,exports,__webpack_require__){var map={"./components/Header/header.stories.js":653,"./components/SearchBar/searchBar.stories.js":793,"./components/ToolCard/toolCard.stories.js":808};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=652},653:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(77),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(106),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(185);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Components | Header",module).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo).add("simple usage",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_3__.a,null)}).add("with title",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_3__.a,{title:"Custom Title"})}).add("with sub title",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_3__.a,{subtitle:"Custom Sub Title"})})}.call(this,__webpack_require__(122)(module))},656:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":323,"./nestedObjectAssign.js":323};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=656},793:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(77),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(106),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(172),_storybook_addon_centered_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(173),_storybook_addon_centered_react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_storybook_addon_centered_react__WEBPACK_IMPORTED_MODULE_4__),_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(184);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Components | SearchBar",module).addDecorator(_storybook_addon_centered_react__WEBPACK_IMPORTED_MODULE_4___default.a).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo).add("simple usage",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__.a,null)}).add("custom checkbox label",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__.a,{checkboxLabel:"custom checkbox label"})}).add("submit callback",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__.a,{onSubmit:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onSubmit")})})}.call(this,__webpack_require__(122)(module))},808:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_travis_build_italoiz_bossabox_frontend_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(378),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(77),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(106),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(172),_storybook_addon_centered_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(173),_storybook_addon_centered_react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_storybook_addon_centered_react__WEBPACK_IMPORTED_MODULE_5__),_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(186),tool={id:1,title:"Notion",link:"https://notion.so",description:"All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",tags:["organization","planning","collaboration","writing","calendar"]};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Components | ToolCard",module).addDecorator(_storybook_addon_centered_react__WEBPACK_IMPORTED_MODULE_5___default.a).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo).add("simple usage",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_6__.a,{tool:tool})}).add("remove callback",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_6__.a,{tool:Object(_home_travis_build_italoiz_bossabox_frontend_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},tool,{title:"Tool Example"}),onRemove:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("onRemove")})}).add("with mark text",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_6__.a,{tool:tool,markTextAt:"organiz"})})}.call(this,__webpack_require__(122)(module))}},[[384,1,2]]]);
//# sourceMappingURL=main.405751e4de17707448be.bundle.js.map