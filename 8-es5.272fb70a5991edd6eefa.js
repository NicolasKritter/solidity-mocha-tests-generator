function _createSuper(t){return function(){var e,n=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qR3m:function(t,e,n){"use strict";n.r(e),n.d(e,"UnitTestAppModule",(function(){return I}));var o,r=n("jAig"),c=n("ofXK"),a=n("nede"),i=n("fXoL"),u=((o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"initFile",value:function(t){return"\n    const ".concat(t,' = artifacts.require("').concat(t,'");\n    const assert = require("chai").assert;\n    const truffleAssert = require(\'truffle-assertions\');\n\n    ')}},{key:"addContract",value:function(t){return'\n    contract("'.concat(t,'", (accounts) => {\n\n      let access;\n      const ownerAccount = accounts[0];\n\n      before(async () => {\n          access = await Access.new({\n              from: ownerAccount\n          });\n      });\n    ')}},{key:"closeFile",value:function(){return"});"}},{key:"writeOutputs",value:function(t){if(t.length<1)return"//TODO Attach Event or getter";var e,n="",o=0;return t.forEach((function(t){e=a.a.parseOut(t),n+="assert.equal(result['".concat(o,"']").concat(e.transfo,", ").concat(e.val,', "should be ').concat(e.val," and type ").concat(e.realType,'");\n       '),o++})),n}},{key:"writeInputs",value:function(t){var e,n="",o="";return t.forEach((function(t){e=a.a.parseIn(t),o+="const ".concat(e.transfo," = ").concat(e.val,"; // ").concat(e.realType)+"\n",n+=" ".concat(e.transfo,",")})),n.length&&(n=n.slice(0,n.length-1)),{ins:n,vars:o}}},{key:"writeFunctionsTest",value:function(e){var n=" ";return e.forEach((function(e){n+=t.writeTestForFunction(e)})),n}},{key:"writeTestForFunction",value:function(e){console.log(e);var n=t.writeInputs(e.inputs),o=t.writeOutputs(e.outputs);return"\n    it('".concat(e.name,"', async ()=>{ //TODO TOCHECK\n    ").concat(n.vars,"\n     const result = await access.").concat(e.name,"(").concat(n.ins,");\n     ").concat(o,"\n    });\n    ")}},{key:"writeOutputsEvent",value:function(t){var e,n="",o="";return t.forEach((function(t){e=a.a.parseIn(t),n+=" ev.".concat(t.name," == ").concat(e.val," &"),o+=" ".concat(e.transfo,": ").concat(e.realType,",")})),n.length&&(n="return "+(n=n.slice(0,n.length-1))+";"),o.length&&(o=o.slice(0,o.length-1)),[n,o]}},{key:"writeEvent",value:function(e){var n=t.writeOutputsEvent(e.inputs);return"\n            truffleAssert.eventEmitted(callThatTriggersTheEvent, '".concat(e.name,"', (ev) => {\n              ").concat(n[0]," // {").concat(n[1],"}\n              });\n          ")}},{key:"writeEventsTest",value:function(t){var e=this,n="";return t.forEach((function(t){n+=e.writeEvent(t)})),n}},{key:"writeTest",value:function(e){var n=a.a.parseABIForElements(e),o=a.a.getContractName(e);console.log("sorted",n);var r=t.writeEventsTest(n.eList),c=this.initFile(o);return c+=this.addContract(o),c+=this.writeFunctionsTest(n.fList),[c+=this.closeFile(),r]}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275prov=i.Ib({token:o,factory:o.\u0275fac,providedIn:"root"}),o),l=n("bnEv"),s=n("/t3+"),f=n("wZkO"),b=n("kmnG"),p=n("qFsG"),d=n("3Pt+"),h=n("bTqV"),v=n("NFeN");function m(t,e){if(1&t){var n=i.Sb();i.Rb(0,"button",17),i.Zb("click",(function(){return i.nc(n),i.dc().urlContractJson=""})),i.Rb(1,"mat-icon"),i.uc(2,"close"),i.Qb(),i.Qb()}}function y(t,e){if(1&t){var n=i.Sb();i.Rb(0,"mat-tab",18),i.Rb(1,"div",19),i.Rb(2,"div",3),i.Rb(3,"mat-form-field",20),i.Rb(4,"textarea",21),i.uc(5),i.Qb(),i.Qb(),i.Rb(6,"button",14),i.Zb("click",(function(){return i.nc(n),i.dc().copyResultToClipBoard()})),i.uc(7,"Copy to ClipBoard"),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){var o=i.dc();i.Bb(5),i.vc(o.result)}}function g(t,e){if(1&t){var n=i.Sb();i.Rb(0,"mat-tab",22),i.Rb(1,"div",19),i.Rb(2,"div",23),i.Rb(3,"mat-form-field",20),i.Rb(4,"textarea",24),i.uc(5),i.Qb(),i.Qb(),i.Rb(6,"button",14),i.Zb("click",(function(){return i.nc(n),i.dc().copyEventToClipBoard()})),i.uc(7,"Copy to ClipBoard"),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){var o=i.dc();i.Bb(5),i.vc(o.events)}}var R,C,w,k=((R=function(t){_inherits(n,t);var e=_createSuper(n);function n(){return _classCallCheck(this,n),e.call(this)}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"writeTest",value:function(){if(this.abiInput){var t=JSON.parse(this.abiInput),e=u.writeTest(t);this.result=e[0],this.events=e[1]}}},{key:"copyResultToClipBoard",value:function(){this.copyToClipboard(this.result)}},{key:"copyEventToClipBoard",value:function(){this.copyToClipboard(this.events)}}]),n}(l.a)).\u0275fac=function(t){return new(t||R)},R.\u0275cmp=i.Gb({type:R,selectors:[["app-unit-test"]],features:[i.yb],decls:39,vars:6,consts:[["label","ABI"],["cdkscrollable","",1,"margin-h-15","fill-remaining-space","flex-block"],[1,"element","flex-block","flex-block_column","margin-h-15"],[1,"element"],["type","file",2,"display","none",3,"change"],["fileInput",""],["readonly","","matInput","","type","text",3,"ngModel","ngModelChange"],["mat-flat-button","","color","accent",1,"margin-h-15",3,"click"],["disabled","","matInput","","type","text","placeholder","https://url/contract.json",1,"inpt-text",3,"ngModel","ngModelChange"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"fill-remaining-space"],["disabled","","mat-flat-button","","color","primary"],[1,"element-x-2","flex-block","flex-block_column"],["rows","15","matInput","","placeholder","contract.json generated by truffle or your solc compilation","required","",3,"ngModel","ngModelChange"],["mat-flat-button","","color","primary",3,"click"],["label","Result - Functions",4,"ngIf"],["label","Result - Events",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["label","Result - Functions"],[1,"flex-line","margin-h-15","fill-remaining-space"],[1,"element","width-100"],["rows","25","matInput","","placeholder","Mocha test file",1,"keep-lines","code-font"],["label","Result - Events"],[1,"keep-lines","element"],["rows","25","matInput","","placeholder","Events test code",1,"keep-lines","code-font"]],template:function(t,e){1&t&&(i.Rb(0,"mat-toolbar"),i.Rb(1,"mat-toolbar-row"),i.Rb(2,"h2"),i.uc(3,"Load ABI & Generate Test File"),i.Qb(),i.Qb(),i.Qb(),i.Rb(4,"mat-tab-group"),i.Rb(5,"mat-tab",0),i.Rb(6,"div",1),i.Rb(7,"div",2),i.Rb(8,"h4"),i.uc(9,"Import contract.json from computer"),i.Qb(),i.Rb(10,"div",3),i.Rb(11,"div",3),i.Rb(12,"input",4,5),i.Zb("change",(function(t){return e.onFileChanged(t)})),i.Qb(),i.Rb(14,"mat-form-field",3),i.Rb(15,"input",6),i.Zb("ngModelChange",(function(t){return e.fileName=t})),i.Qb(),i.Qb(),i.Rb(16,"button",7),i.Zb("click",(function(){return e.selectFile()})),i.uc(17,"Select File"),i.Qb(),i.Qb(),i.Qb(),i.Rb(18,"div",3),i.Rb(19,"h4"),i.uc(20,"Import contract.json from URL"),i.Qb(),i.Rb(21,"mat-form-field",3),i.Rb(22,"mat-label"),i.uc(23,"Load from Url"),i.Qb(),i.Rb(24,"input",8),i.Zb("ngModelChange",(function(t){return e.urlContractJson=t})),i.Qb(),i.tc(25,m,3,0,"button",9),i.Qb(),i.Nb(26,"span",10),i.Rb(27,"button",11),i.uc(28,"Load from url"),i.Qb(),i.Qb(),i.Qb(),i.Rb(29,"div",12),i.Rb(30,"h4"),i.uc(31,"Contract.json content"),i.Qb(),i.Rb(32,"mat-form-field"),i.Rb(33,"textarea",13),i.Zb("ngModelChange",(function(t){return e.abiInput=t})),i.Qb(),i.Qb(),i.Rb(34,"div",3),i.Rb(35,"button",14),i.Zb("click",(function(){return e.writeTest()})),i.uc(36,"Generate Test"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.tc(37,y,8,1,"mat-tab",15),i.tc(38,g,8,1,"mat-tab",16),i.Qb()),2&t&&(i.Bb(15),i.gc("ngModel",e.fileName),i.Bb(9),i.gc("ngModel",e.urlContractJson),i.Bb(1),i.gc("ngIf",e.urlContractJson),i.Bb(8),i.gc("ngModel",e.abiInput),i.Bb(4),i.gc("ngIf",e.result),i.Bb(1),i.gc("ngIf",e.result))},directives:[s.a,s.c,f.b,f.a,b.a,p.a,d.b,d.h,d.j,h.b,b.d,c.j,d.k,b.e,v.a],styles:[""]}),R),Q=n("tyNb"),_=[{path:"",component:k}],T=((w=function t(){_classCallCheck(this,t)}).\u0275mod=i.Kb({type:w}),w.\u0275inj=i.Jb({factory:function(t){return new(t||w)},imports:[[Q.b.forChild(_)],Q.b]}),w),I=((C=function t(){_classCallCheck(this,t)}).\u0275mod=i.Kb({type:C}),C.\u0275inj=i.Jb({factory:function(t){return new(t||C)},imports:[[c.b,T,r.a,d.d]]}),C)}}]);