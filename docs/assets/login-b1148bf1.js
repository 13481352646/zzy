import{af as B,aC as _e,f as fe,as as oe,at as me,h as ue,d as W,bt as ce,bu as he,bv as ke,P as pe,n as ve,b7 as Ie,k as h,bw as Ee,ad as Ce,m as L,J as le,B as ge,E as we,o as y,T as re,b as l,w as f,a as g,x as m,q as t,C as ie,z as Le,X as $,W as N,a2 as ze,c as z,F as Q,az as $e,aA as Te,bx as Fe,by as Se,a5 as Ne,bz as Oe,bA as Re,ap as xe,p as Ae,aa as Ve,y as K,a3 as Be,bd as Me,A as be,a_ as M,ai as V,bB as Xe,L as ye,bC as Ye,bc as De,b0 as Pe,g as He,t as Ue,bD as We,_ as je,bE as qe,bF as Ze,e as de}from"./index-2b228d4a.js";import{g as Ge,F as Je,G as Ke,c as Qe,a as et,b as tt,E as at}from"./el-button-b0706634.js";import{u as st}from"./index-22247bd1.js";const nt=(s,i)=>{if(!B||!s||!i)return!1;const o=s.getBoundingClientRect();let n;return i instanceof Element?n=i.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},o.top<n.bottom&&o.bottom>n.top&&o.right>n.left&&o.left<n.right};var ot="Expected a function";function ne(s,i,o){var n=!0,c=!0;if(typeof s!="function")throw new TypeError(ot);return _e(o)&&(n="leading"in o?!!o.leading:n,c="trailing"in o?!!o.trailing:c),Ge(s,i,{leading:n,maxWait:i,trailing:c})}const lt=fe({urlList:{type:oe(Array),default:()=>me([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),rt={close:()=>!0,switch:s=>ue(s)},it=["src"],ut=W({name:"ElImageViewer"}),ct=W({...ut,props:lt,emits:rt,setup(s,{expose:i,emit:o}){const n=s,c={CONTAIN:{name:"contain",icon:ce(he)},ORIGINAL:{name:"original",icon:ce(ke)}},{t:p}=pe(),u=ve("image-viewer"),{nextZIndex:O}=Ie(),k=h(),I=h([]),E=Ee(),v=h(!0),w=h(n.initialIndex),b=Ce(c.CONTAIN),d=h({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),X=L(()=>{const{urlList:e}=n;return e.length<=1}),R=L(()=>w.value===0),j=L(()=>w.value===n.urlList.length-1),ee=L(()=>n.urlList[w.value]),Y=L(()=>{const{scale:e,deg:a,offsetX:r,offsetY:_,enableTransition:F}=d.value;let C=r/e,S=_/e;switch(a%360){case 90:case-270:[C,S]=[S,-C];break;case 180:case-180:[C,S]=[-C,-S];break;case 270:case-90:[C,S]=[-S,C];break}const A={transform:`scale(${e}) rotate(${a}deg) translate(${C}px, ${S}px)`,transition:F?"transform .3s":""};return b.value.name===c.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),te=L(()=>ue(n.zIndex)?n.zIndex:O());function x(){ae(),o("close")}function D(){const e=ne(r=>{switch(r.code){case V.esc:n.closeOnPressEscape&&x();break;case V.space:H();break;case V.left:G();break;case V.up:T("zoomIn");break;case V.right:J();break;case V.down:T("zoomOut");break}}),a=ne(r=>{const _=r.deltaY||r.deltaX;T(_<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});E.run(()=>{M(document,"keydown",e),M(document,"wheel",a)})}function ae(){E.stop()}function se(){v.value=!1}function q(e){v.value=!1,e.target.alt=p("el.image.error")}function Z(e){if(v.value||e.button!==0||!k.value)return;d.value.enableTransition=!1;const{offsetX:a,offsetY:r}=d.value,_=e.pageX,F=e.pageY,C=ne(A=>{d.value={...d.value,offsetX:a+A.pageX-_,offsetY:r+A.pageY-F}}),S=M(document,"mousemove",C);M(document,"mouseup",()=>{S()}),e.preventDefault()}function P(){d.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function H(){if(v.value)return;const e=Xe(c),a=Object.values(c),r=b.value.name,F=(a.findIndex(C=>C.name===r)+1)%e.length;b.value=c[e[F]],P()}function U(e){const a=n.urlList.length;w.value=(e+a)%a}function G(){R.value&&!n.infinite||U(w.value-1)}function J(){j.value&&!n.infinite||U(w.value+1)}function T(e,a={}){if(v.value)return;const{zoomRate:r,rotateDeg:_,enableTransition:F}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":d.value.scale>.2&&(d.value.scale=Number.parseFloat((d.value.scale/r).toFixed(3)));break;case"zoomIn":d.value.scale<7&&(d.value.scale=Number.parseFloat((d.value.scale*r).toFixed(3)));break;case"clockwise":d.value.deg+=_;break;case"anticlockwise":d.value.deg-=_;break}d.value.enableTransition=F}return le(ee,()=>{ge(()=>{const e=I.value[0];e!=null&&e.complete||(v.value=!0)})}),le(w,e=>{P(),o("switch",e)}),we(()=>{var e,a;D(),(a=(e=k.value)==null?void 0:e.focus)==null||a.call(e)}),i({setActiveItem:U}),(e,a)=>(y(),re(Me,{to:"body",disabled:!e.teleported},[l(Be,{name:"viewer-fade",appear:""},{default:f(()=>[g("div",{ref_key:"wrapper",ref:k,tabindex:-1,class:m(t(u).e("wrapper")),style:ie({zIndex:t(te)})},[g("div",{class:m(t(u).e("mask")),onClick:a[0]||(a[0]=Le(r=>e.hideOnClickModal&&x(),["self"]))},null,2),$(" CLOSE "),g("span",{class:m([t(u).e("btn"),t(u).e("close")]),onClick:x},[l(t(N),null,{default:f(()=>[l(t(ze))]),_:1})],2),$(" ARROW "),t(X)?$("v-if",!0):(y(),z(Q,{key:0},[g("span",{class:m([t(u).e("btn"),t(u).e("prev"),t(u).is("disabled",!e.infinite&&t(R))]),onClick:G},[l(t(N),null,{default:f(()=>[l(t($e))]),_:1})],2),g("span",{class:m([t(u).e("btn"),t(u).e("next"),t(u).is("disabled",!e.infinite&&t(j))]),onClick:J},[l(t(N),null,{default:f(()=>[l(t(Te))]),_:1})],2)],64)),$(" ACTIONS "),g("div",{class:m([t(u).e("btn"),t(u).e("actions")])},[g("div",{class:m(t(u).e("actions__inner"))},[l(t(N),{onClick:a[1]||(a[1]=r=>T("zoomOut"))},{default:f(()=>[l(t(Fe))]),_:1}),l(t(N),{onClick:a[2]||(a[2]=r=>T("zoomIn"))},{default:f(()=>[l(t(Se))]),_:1}),g("i",{class:m(t(u).e("actions__divider"))},null,2),l(t(N),{onClick:H},{default:f(()=>[(y(),re(Ne(t(b).icon)))]),_:1}),g("i",{class:m(t(u).e("actions__divider"))},null,2),l(t(N),{onClick:a[3]||(a[3]=r=>T("anticlockwise"))},{default:f(()=>[l(t(Oe))]),_:1}),l(t(N),{onClick:a[4]||(a[4]=r=>T("clockwise"))},{default:f(()=>[l(t(Re))]),_:1})],2)],2),$(" CANVAS "),g("div",{class:m(t(u).e("canvas"))},[(y(!0),z(Q,null,xe(e.urlList,(r,_)=>Ae((y(),z("img",{ref_for:!0,ref:F=>I.value[_]=F,key:r,src:r,style:ie(t(Y)),class:m(t(u).e("img")),onLoad:se,onError:q,onMousedown:Z},null,46,it)),[[Ve,_===w.value]])),128))],2),K(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var dt=be(ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const ft=ye(dt),mt=fe({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:oe([String,Object])},previewSrcList:{type:oe(Array),default:()=>me([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),pt={load:s=>s instanceof Event,error:s=>s instanceof Event,switch:s=>ue(s),close:()=>!0,show:()=>!0},vt=["src","loading"],gt={key:0},wt=W({name:"ElImage",inheritAttrs:!1}),bt=W({...wt,props:mt,emits:pt,setup(s,{emit:i}){const o=s;let n="";const{t:c}=pe(),p=ve("image"),u=Ye(),O=Je(),k=h(),I=h(!1),E=h(!0),v=h(!1),w=h(),b=h(),d=B&&"loading"in HTMLImageElement.prototype;let X,R;const j=L(()=>u.style),ee=L(()=>{const{fit:e}=o;return B&&e?{objectFit:e}:{}}),Y=L(()=>{const{previewSrcList:e}=o;return Array.isArray(e)&&e.length>0}),te=L(()=>{const{previewSrcList:e,initialIndex:a}=o;let r=a;return a>e.length-1&&(r=0),r}),x=L(()=>o.loading==="eager"?!1:!d&&o.loading==="lazy"||o.lazy),D=()=>{B&&(E.value=!0,I.value=!1,k.value=o.src)};function ae(e){E.value=!1,I.value=!1,i("load",e)}function se(e){E.value=!1,I.value=!0,i("error",e)}function q(){nt(w.value,b.value)&&(D(),H())}const Z=We(q,200,!0);async function P(){var e;if(!B)return;await ge();const{scrollContainer:a}=o;Pe(a)?b.value=a:He(a)&&a!==""?b.value=(e=document.querySelector(a))!=null?e:void 0:w.value&&(b.value=Ke(w.value)),b.value&&(X=M(b,"scroll",Z),setTimeout(()=>q(),100))}function H(){!B||!b.value||!Z||(X==null||X(),b.value=void 0)}function U(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function G(){Y.value&&(R=M("wheel",U,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",v.value=!0,i("show"))}function J(){R==null||R(),document.body.style.overflow=n,v.value=!1,i("close")}function T(e){i("switch",e)}return le(()=>o.src,()=>{x.value?(E.value=!0,I.value=!1,H(),P()):D()}),we(()=>{x.value?P():D()}),(e,a)=>(y(),z("div",{ref_key:"container",ref:w,class:m([t(p).b(),e.$attrs.class]),style:ie(t(j))},[I.value?K(e.$slots,"error",{key:0},()=>[g("div",{class:m(t(p).e("error"))},Ue(t(c)("el.image.error")),3)]):(y(),z(Q,{key:1},[k.value!==void 0?(y(),z("img",De({key:0},t(O),{src:k.value,loading:e.loading,style:t(ee),class:[t(p).e("inner"),t(Y)&&t(p).e("preview"),E.value&&t(p).is("loading")],onClick:G,onLoad:ae,onError:se}),null,16,vt)):$("v-if",!0),E.value?(y(),z("div",{key:1,class:m(t(p).e("wrapper"))},[K(e.$slots,"placeholder",{},()=>[g("div",{class:m(t(p).e("placeholder"))},null,2)])],2)):$("v-if",!0)],64)),t(Y)?(y(),z(Q,{key:2},[v.value?(y(),re(t(ft),{key:0,"z-index":e.zIndex,"initial-index":t(te),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:J,onSwitch:T},{default:f(()=>[e.$slots.viewer?(y(),z("div",gt,[K(e.$slots,"viewer")])):$("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):$("v-if",!0)],64)):$("v-if",!0)],6))}});var yt=be(bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const _t=ye(yt);const ht=W({setup(){return{src:h("../../src/assets/logo.png")}},data(){return{n:30,userForm:{email:"",password:""},rules:{email:[{required:!0,message:"请输入正确的电子邮箱",trigger:"blur"},{type:"email",message:"电子邮箱格式错误",trigger:"blur"}],password:[{required:!0,message:"请输入正确的用户密码",trigger:"blur"},{min:8,message:"密码长度不得小于8个字符",trigger:"blur"}]}}},mounted(){},methods:{...qe(Ze,["setToken","fillUserinfo"]),btnLogin(){const s=this,i=s.$refs.ruleFormRef;i&&i.validate(o=>{if(o)st(s.userForm).then(c=>{if(c.success){const p=c.data.userinfo;console.log(s),s.setToken(p.token),s.fillUserinfo(p),s.$router.push("/"),console.log(p.token)}else return!1}).catch(c=>{console.log(c)});else return console.log("error submit!"),!1})},resetForm(){this.$refs.ruleFormRef.resetFields()}}}),kt={class:"login"},It={class:"login-form"},Et={class:"login-form-logo"};function Ct(s,i,o,n,c,p){const u=_t,O=et,k=tt,I=at,E=Qe;return y(),z("div",kt,[g("div",It,[g("div",Et,[l(u,{src:s.src,fit:"fill",lazy:!0},null,8,["src"])]),l(E,{ref:"ruleFormRef",model:s.userForm,"status-icon":"",rules:s.rules,class:"login-ruleForm"},{default:f(()=>[l(k,{prop:"email"},{default:f(()=>[l(O,{modelValue:s.userForm.email,"onUpdate:modelValue":i[0]||(i[0]=v=>s.userForm.email=v),autocomplete:"off",placeholder:"请输入你的用户邮箱","suffix-icon":"Message"},null,8,["modelValue"])]),_:1}),l(k,{prop:"password"},{default:f(()=>[l(O,{modelValue:s.userForm.password,"onUpdate:modelValue":i[1]||(i[1]=v=>s.userForm.password=v),type:"password",autocomplete:"off",placeholder:"请输入你的用户密码","suffix-icon":"Lock"},null,8,["modelValue"])]),_:1}),l(k,{class:"login-form-btns"},{default:f(()=>[l(I,{type:"primary",onClick:s.btnLogin},{default:f(()=>[de("用户登录")]),_:1},8,["onClick"]),l(I,{onClick:s.resetForm},{default:f(()=>[de("Reset")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])])}const Tt=je(ht,[["render",Ct],["__scopeId","data-v-cfa86f52"]]);export{Tt as default};