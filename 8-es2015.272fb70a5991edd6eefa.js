(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qR3m:function(t,e,n){"use strict";n.r(e),n.d(e,"UnitTestAppModule",(function(){return C}));var r=n("jAig"),o=n("ofXK"),a=n("nede"),c=n("fXoL");let i=(()=>{class t{constructor(){}static initFile(t){return`\n    const ${t} = artifacts.require("${t}");\n    const assert = require("chai").assert;\n    const truffleAssert = require('truffle-assertions');\n\n    `}static addContract(t){return`\n    contract("${t}", (accounts) => {\n\n      let access;\n      const ownerAccount = accounts[0];\n\n      before(async () => {\n          access = await Access.new({\n              from: ownerAccount\n          });\n      });\n    `}static closeFile(){return"});"}static writeOutputs(t){if(t.length<1)return"//TODO Attach Event or getter";let e,n="",r=0;return t.forEach(t=>{e=a.a.parseOut(t),n+=`assert.equal(result['${r}']${e.transfo}, ${e.val}, "should be ${e.val} and type ${e.realType}");\n       `,r++}),n}static writeInputs(t){let e,n="",r="";return t.forEach(t=>{e=a.a.parseIn(t),r+=`const ${e.transfo} = ${e.val}; // ${e.realType}`+"\n",n+=` ${e.transfo},`}),n.length&&(n=n.slice(0,n.length-1)),{ins:n,vars:r}}static writeFunctionsTest(e){let n=" ";return e.forEach(e=>{n+=t.writeTestForFunction(e)}),n}static writeTestForFunction(e){console.log(e);const n=t.writeInputs(e.inputs),r=t.writeOutputs(e.outputs);return`\n    it('${e.name}', async ()=>{ //TODO TOCHECK\n    ${n.vars}\n     const result = await access.${e.name}(${n.ins});\n     ${r}\n    });\n    `}static writeOutputsEvent(t){let e,n="",r="";return t.forEach(t=>{e=a.a.parseIn(t),n+=` ev.${t.name} == ${e.val} &`,r+=` ${e.transfo}: ${e.realType},`}),n.length&&(n=n.slice(0,n.length-1),n="return "+n+";"),r.length&&(r=r.slice(0,r.length-1)),[n,r]}static writeEvent(e){const n=t.writeOutputsEvent(e.inputs);return`\n            truffleAssert.eventEmitted(callThatTriggersTheEvent, '${e.name}', (ev) => {\n              ${n[0]} // {${n[1]}}\n              });\n          `}static writeEventsTest(t){let e="";return t.forEach(t=>{e+=this.writeEvent(t)}),e}static writeTest(e){const n=a.a.parseABIForElements(e),r=a.a.getContractName(e);console.log("sorted",n);const o=t.writeEventsTest(n.eList);let c=this.initFile(r);return c+=this.addContract(r),c+=this.writeFunctionsTest(n.fList),c+=this.closeFile(),[c,o]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=n("bnEv"),l=n("/t3+"),b=n("wZkO"),u=n("kmnG"),f=n("qFsG"),p=n("3Pt+"),d=n("bTqV"),m=n("NFeN");function h(t,e){if(1&t){const t=c.Sb();c.Rb(0,"button",17),c.Zb("click",(function(){return c.nc(t),c.dc().urlContractJson=""})),c.Rb(1,"mat-icon"),c.uc(2,"close"),c.Qb(),c.Qb()}}function g(t,e){if(1&t){const t=c.Sb();c.Rb(0,"mat-tab",18),c.Rb(1,"div",19),c.Rb(2,"div",3),c.Rb(3,"mat-form-field",20),c.Rb(4,"textarea",21),c.uc(5),c.Qb(),c.Qb(),c.Rb(6,"button",14),c.Zb("click",(function(){return c.nc(t),c.dc().copyResultToClipBoard()})),c.uc(7,"Copy to ClipBoard"),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.dc();c.Bb(5),c.vc(t.result)}}function R(t,e){if(1&t){const t=c.Sb();c.Rb(0,"mat-tab",22),c.Rb(1,"div",19),c.Rb(2,"div",23),c.Rb(3,"mat-form-field",20),c.Rb(4,"textarea",24),c.uc(5),c.Qb(),c.Qb(),c.Rb(6,"button",14),c.Zb("click",(function(){return c.nc(t),c.dc().copyEventToClipBoard()})),c.uc(7,"Copy to ClipBoard"),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.dc();c.Bb(5),c.vc(t.events)}}let v=(()=>{class t extends s.a{constructor(){super()}ngOnInit(){}writeTest(){if(!this.abiInput)return;const t=JSON.parse(this.abiInput),e=i.writeTest(t);this.result=e[0],this.events=e[1]}copyResultToClipBoard(){this.copyToClipboard(this.result)}copyEventToClipBoard(){this.copyToClipboard(this.events)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-unit-test"]],features:[c.yb],decls:39,vars:6,consts:[["label","ABI"],["cdkscrollable","",1,"margin-h-15","fill-remaining-space","flex-block"],[1,"element","flex-block","flex-block_column","margin-h-15"],[1,"element"],["type","file",2,"display","none",3,"change"],["fileInput",""],["readonly","","matInput","","type","text",3,"ngModel","ngModelChange"],["mat-flat-button","","color","accent",1,"margin-h-15",3,"click"],["disabled","","matInput","","type","text","placeholder","https://url/contract.json",1,"inpt-text",3,"ngModel","ngModelChange"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"fill-remaining-space"],["disabled","","mat-flat-button","","color","primary"],[1,"element-x-2","flex-block","flex-block_column"],["rows","15","matInput","","placeholder","contract.json generated by truffle or your solc compilation","required","",3,"ngModel","ngModelChange"],["mat-flat-button","","color","primary",3,"click"],["label","Result - Functions",4,"ngIf"],["label","Result - Events",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["label","Result - Functions"],[1,"flex-line","margin-h-15","fill-remaining-space"],[1,"element","width-100"],["rows","25","matInput","","placeholder","Mocha test file",1,"keep-lines","code-font"],["label","Result - Events"],[1,"keep-lines","element"],["rows","25","matInput","","placeholder","Events test code",1,"keep-lines","code-font"]],template:function(t,e){1&t&&(c.Rb(0,"mat-toolbar"),c.Rb(1,"mat-toolbar-row"),c.Rb(2,"h2"),c.uc(3,"Load ABI & Generate Test File"),c.Qb(),c.Qb(),c.Qb(),c.Rb(4,"mat-tab-group"),c.Rb(5,"mat-tab",0),c.Rb(6,"div",1),c.Rb(7,"div",2),c.Rb(8,"h4"),c.uc(9,"Import contract.json from computer"),c.Qb(),c.Rb(10,"div",3),c.Rb(11,"div",3),c.Rb(12,"input",4,5),c.Zb("change",(function(t){return e.onFileChanged(t)})),c.Qb(),c.Rb(14,"mat-form-field",3),c.Rb(15,"input",6),c.Zb("ngModelChange",(function(t){return e.fileName=t})),c.Qb(),c.Qb(),c.Rb(16,"button",7),c.Zb("click",(function(){return e.selectFile()})),c.uc(17,"Select File"),c.Qb(),c.Qb(),c.Qb(),c.Rb(18,"div",3),c.Rb(19,"h4"),c.uc(20,"Import contract.json from URL"),c.Qb(),c.Rb(21,"mat-form-field",3),c.Rb(22,"mat-label"),c.uc(23,"Load from Url"),c.Qb(),c.Rb(24,"input",8),c.Zb("ngModelChange",(function(t){return e.urlContractJson=t})),c.Qb(),c.tc(25,h,3,0,"button",9),c.Qb(),c.Nb(26,"span",10),c.Rb(27,"button",11),c.uc(28,"Load from url"),c.Qb(),c.Qb(),c.Qb(),c.Rb(29,"div",12),c.Rb(30,"h4"),c.uc(31,"Contract.json content"),c.Qb(),c.Rb(32,"mat-form-field"),c.Rb(33,"textarea",13),c.Zb("ngModelChange",(function(t){return e.abiInput=t})),c.Qb(),c.Qb(),c.Rb(34,"div",3),c.Rb(35,"button",14),c.Zb("click",(function(){return e.writeTest()})),c.uc(36,"Generate Test"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.tc(37,g,8,1,"mat-tab",15),c.tc(38,R,8,1,"mat-tab",16),c.Qb()),2&t&&(c.Bb(15),c.gc("ngModel",e.fileName),c.Bb(9),c.gc("ngModel",e.urlContractJson),c.Bb(1),c.gc("ngIf",e.urlContractJson),c.Bb(8),c.gc("ngModel",e.abiInput),c.Bb(4),c.gc("ngIf",e.result),c.Bb(1),c.gc("ngIf",e.result))},directives:[l.a,l.c,b.b,b.a,u.a,f.a,p.b,p.h,p.j,d.b,u.d,o.j,p.k,u.e,m.a],styles:[""]}),t})();var Q=n("tyNb");const w=[{path:"",component:v}];let y=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[Q.b.forChild(w)],Q.b]}),t})(),C=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[o.b,y,r.a,p.d]]}),t})()}}]);