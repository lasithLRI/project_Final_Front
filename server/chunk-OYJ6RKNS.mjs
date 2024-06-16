import './polyfills.server.mjs';
import{a as ve,i as Ce}from"./chunk-IY34DO54.mjs";import{$ as v,$a as V,Ba as d,Ca as g,D as re,Db as X,H as P,Ib as R,J as y,Jb as Z,Ka as de,L as K,N,O as ae,Oa as w,Pa as me,Qa as x,R as f,Ra as pe,Sa as fe,Ta as r,Ua as c,Va as p,Wa as W,Xa as _,Y as j,Ya as M,Z as H,Za as he,_ as b,_a as ge,a as ee,ab as z,ba as ce,bb as u,cb as C,da as O,db as B,ea as le,eb as U,fb as h,gb as $,hb as G,i as A,j as te,m as k,r as ie,t as ne,w as se,y as oe,ya as T,yb as be,za as ue}from"./chunk-7PR5ABCA.mjs";import"./chunk-NDYDZJSS.mjs";var De=["*"],Y;function Le(){if(Y===void 0&&(Y=null,typeof window<"u")){let s=window;s.trustedTypes!==void 0&&(Y=s.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Y}function D(s){return Le()?.createHTML(s)||s}function Ie(s){return Error(`Unable to find icon with the name "${s}"`)}function Pe(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function Se(s){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${s}".`)}function ye(s){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${s}".`)}var I=class{constructor(n,m,e){this.url=n,this.svgText=m,this.options=e}},je=(()=>{let n=class n{constructor(e,t,i,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,o){return this._addSvgIconConfig(e,t,new I(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,o){let a=this._sanitizer.sanitize(T.HTML,i);if(!a)throw ye(i);let l=D(a);return this._addSvgIconConfig(e,t,new I("",l,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new I(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let o=this._sanitizer.sanitize(T.HTML,t);if(!o)throw ye(t);let a=D(o);return this._addSvgIconSetConfig(e,new I("",a,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(T.RESOURCE_URL,e);if(!t)throw Se(e);let i=this._cachedIconsByUrl.get(t);return i?A(q(i)):this._loadSvgIconFromConfig(new I(e,null)).pipe(P(o=>this._cachedIconsByUrl.set(t,o)),k(o=>q(o)))}getNamedSvgIcon(e,t=""){let i=_e(t,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):te(Ie(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?A(q(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(k(t=>q(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return A(i);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ne(l=>{let F=`Loading icon set URL: ${this._sanitizer.sanitize(T.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(F)),A(null)})));return ie(o).pipe(k(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Ie(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let o=t[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),l=this._extractSvgIconFromSet(a,e,o.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(P(t=>e.svgText=t),k(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?A(null):this._fetchIcon(e).pipe(P(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let l=this._svgElementFromString(D("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(D("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:a,value:l}=i[o];a!=="id"&&t.setAttribute(a,l)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw Pe();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(T.RESOURCE_URL,t);if(!a)throw Se(t);let l=this._inProgressUrlFetches.get(a);if(l)return l;let E=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(k(F=>D(F)),oe(()=>this._inProgressUrlFetches.delete(a)),re());return this._inProgressUrlFetches.set(a,E),E}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(_e(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](t,e);if(o)return He(o)?new I(o.url,null,o.options):new I(o,null)}}};n.\u0275fac=function(t){return new(t||n)(N(ve,8),N(Ce),N(X,8),N(O))},n.\u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();function q(s){return s.cloneNode(!0)}function _e(s,n){return s+":"+n}function He(s){return!!(s.url&&s.options)}var Oe=new K("MAT_ICON_DEFAULT_OPTIONS"),We=new K("mat-icon-location",{providedIn:"root",factory:Ve});function Ve(){let s=ae(X),n=s?s.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}var Ne=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ze=Ne.map(s=>`[${s}]`).join(", "),Be=/^url\(['"]?#(.*?)['"]?\)$/,we=(()=>{let n=class n{get color(){return this._color||this._defaultColor}set color(e){this._color=e}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}constructor(e,t,i,o,a,l){this._elementRef=e,this._iconRegistry=t,this._location=o,this._errorHandler=a,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=ee.EMPTY,l&&(l.color&&(this.color=this._defaultColor=l.color),l.fontSet&&(this.fontSet=l.fontSet)),i||e.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,o)=>{i.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(ze),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Ne.forEach(a=>{let l=t[o],E=l.getAttribute(a),F=E?E.match(Be):null;if(F){let L=i.get(l);L||(L=[],i.set(l,L)),L.push({name:a,value:F[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(se(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}};n.\u0275fac=function(t){return new(t||n)(g(le),g(je),ce("aria-hidden"),g(We),g(O),g(Oe,8))},n.\u0275cmp=f({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(me("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),fe(i.color?"mat-"+i.color:""),pe("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",be],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[de,h],ngContentSelectors:De,decls:1,vars:0,template:function(t,i){t&1&&(he(),ge(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let s=n;return s})();var xe=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f({type:n,selectors:[["app-header"]],standalone:!0,features:[h],decls:21,vars:0,consts:[[1,"max-w-7xl","h-20","mx-auto","bg-gradient-to-r","from-cyan-500","to-blue-500","flex","justify-between","items-center"],[1,"logo","w-20","h-full","text-xl","font-bold","text-white","ml-4","flex","justify-center","items-center"],[1,"navBar"],[1,"flex"],[1,"mx-5","text-white","text-lg","hover:text-gray-600"],["href",""],[1,"login-button","text-white","mr-4"],[1,"hover:bg-gray-700","hover:rounded-full","flex","items-center","justify-center","text-2xl","font-bold","m-2","p-2"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"div",1),u(2,"hAdissiyak"),c(),r(3,"div",2)(4,"ul",3)(5,"li",4)(6,"a",5),u(7,"Home"),c()(),r(8,"li",4)(9,"a",5),u(10,"Features"),c()(),r(11,"li",4)(12,"a",5),u(13,"About"),c()(),r(14,"li",4)(15,"a",5),u(16,"Contact"),c()()()(),r(17,"div",6)(18,"button",7)(19,"mat-icon"),u(20,"login"),c()()()())},dependencies:[we]});let s=n;return s})();var Q=(()=>{let n=class n{constructor(){this.selectedCategoryArray=[]}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();function Ue(s,n){if(s&1){let m=W();r(0,"div",14)(1,"input",15),_("change",function(){let t=j(m).$implicit,i=M().$implicit,o=M();return H(o.categoriesOnClick(i,t))}),c(),r(2,"label",16),u(3),c(),p(4,"br"),c()}if(s&2){let m=n.$implicit,e=M().$implicit;d(),z("id","'category'+",e.id,"+",m.subId,""),z("name","'category'+",e.id,"+",m.subId,""),V("value",e),d(),z("for","'category'+",e.id,"+",m.subId,""),d(),B(" ",m.subCatName,"")}}function $e(s,n){if(s&1&&(r(0,"div",4),p(1,"input",5),r(2,"div",6)(3,"p",7),u(4),c()(),r(5,"div",8),b(),r(6,"svg",9),p(7,"path",10),c()(),v(),r(8,"div",11)(9,"div",12),w(10,Ue,5,11,"div",13),c()()()),s&2){let m=n.$implicit;d(4),C(m.section),d(6),x("ngForOf",m.subCats)}}var Fe=(()=>{let n=class n{constructor(e){this.categoriesService=e,this.tempCategories=[{id:1,section:"Administrative",subCats:[{subId:101,subCatName:"Receptionist"},{subId:102,subCatName:"Office Clerk"},{subId:103,subCatName:"Data Entry Clerk"},{subId:104,subCatName:"Executive Assistant"},{subId:105,subCatName:"Administrative Assistant"}]},{id:2,section:"Healthcare",subCats:[{subId:201,subCatName:"Nurse"},{subId:202,subCatName:"Medical Assistant"},{subId:203,subCatName:"Pharmacy Technician"},{subId:204,subCatName:"Lab Technician"},{subId:205,subCatName:"Dental Assistant"}]},{id:3,section:"IT & Technology",subCats:[{subId:301,subCatName:"Software Developer"},{subId:302,subCatName:"System Analyst"},{subId:303,subCatName:"IT Support Specialist"},{subId:304,subCatName:"Network Administrator"},{subId:305,subCatName:"Database Administrator"}]},{id:4,section:"Customer Service",subCats:[{subId:401,subCatName:"Call Center Representative"},{subId:402,subCatName:"Customer Support Specialist"},{subId:403,subCatName:"Technical Support Representative"},{subId:404,subCatName:"Client Service Coordinator"},{subId:405,subCatName:"Help Desk Technician"}]},{id:5,section:"Finance",subCats:[{subId:501,subCatName:"Accountant"},{subId:502,subCatName:"Financial Analyst"},{subId:503,subCatName:"Bookkeeper"},{subId:504,subCatName:"Payroll Specialist"},{subId:505,subCatName:"Auditor"}]},{id:6,section:"Human Resources",subCats:[{subId:601,subCatName:"HR Coordinator"},{subId:602,subCatName:"Recruiter"},{subId:603,subCatName:"HR Assistant"},{subId:604,subCatName:"Benefits Administrator"},{subId:605,subCatName:"Training Coordinator"}]},{id:7,section:"Education",subCats:[{subId:701,subCatName:"Substitute Teacher"},{subId:702,subCatName:"Teacher Assistant"},{subId:703,subCatName:"Tutor"},{subId:704,subCatName:"School Counselor"},{subId:705,subCatName:"Librarian"}]},{id:8,section:"Manufacturing",subCats:[{subId:801,subCatName:"Assembler"},{subId:802,subCatName:"Machinist"},{subId:803,subCatName:"Quality Control Inspector"},{subId:804,subCatName:"Production Worker"},{subId:805,subCatName:"Packaging Operator"}]},{id:9,section:"Hospitality",subCats:[{subId:901,subCatName:"Housekeeper"},{subId:902,subCatName:"Event Staff"},{subId:903,subCatName:"Catering Assistant"},{subId:904,subCatName:"Front Desk Agent"},{subId:905,subCatName:"Concierge"}]},{id:10,section:"Retail",subCats:[{subId:1001,subCatName:"Sales Associate"},{subId:1002,subCatName:"Cashier"},{subId:1003,subCatName:"Stock Clerk"},{subId:1004,subCatName:"Store Manager"},{subId:1005,subCatName:"Merchandiser"}]},{id:11,section:"Logistics",subCats:[{subId:1101,subCatName:"Warehouse Worker"},{subId:1102,subCatName:"Delivery Driver"},{subId:1103,subCatName:"Forklift Operator"},{subId:1104,subCatName:"Shipping Clerk"},{subId:1105,subCatName:"Inventory Specialist"}]},{id:12,section:"Construction",subCats:[{subId:1201,subCatName:"Laborer"},{subId:1202,subCatName:"Carpenter"},{subId:1203,subCatName:"Electrician"},{subId:1204,subCatName:"Plumber"},{subId:1205,subCatName:"Painter"}]}],this.categoriesOnClick=(t,i)=>{let o=this.categoriesService.selectedCategoryArray.findIndex(a=>a.categoryId===t.id&&a.subCategoryId===i.subId);o>-1?this.categoriesService.selectedCategoryArray.splice(o,1):this.categoriesService.selectedCategoryArray.push({categoryId:t.id,subCategoryId:i.subId})}}};n.\u0275fac=function(t){return new(t||n)(g(Q))},n.\u0275cmp=f({type:n,selectors:[["app-side-panel"]],standalone:!0,features:[h],decls:5,vars:1,consts:[[1,"w-full","h-auto","bg-gray-100","flex","flex-col","items-center"],[1,"uppercase","mt-5","font-medium","mb-2"],[1,"accordion-outer","w-full","p-2"],["class","relative w-70 overflow-hidden",4,"ngFor","ngForOf"],[1,"relative","w-70","overflow-hidden"],["type","checkbox",1,"absolute","top-0","inset-x-0","w-full","h-12","opacity-0","z-10","cursor-pointer","peer"],[1,"bg-white","h-12","w-full","pl-5","items-center","border-b-2","peer-checked:bg-gradient-to-r","from-cyan-500","to-blue-500","peer-checked:text-white","flex","justify-between"],[1,"text-lg"],[1,"absolute","top-3","right-3","transition-transform","duration-500","rotate-0","peer-checked:rotate-180","peer-checked:text-white"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-6"],["stroke-linecap","round","stroke-linejoin","round","d","m19.5 8.25-7.5 7.5-7.5-7.5"],[1,"bg-white","overflow-hidden","transition-all","duration-500","max-h-0","peer-checked:max-h-full","peer-checked:border-b-2"],[1,"p-4"],["class","subCate-body ml-10 py-2",4,"ngFor","ngForOf"],[1,"subCate-body","ml-10","py-2"],["type","checkbox",3,"change","id","name","value"],[1,"ml-2",3,"for"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"p",1),u(2,"categories"),c(),r(3,"div",2),w(4,$e,11,2,"div",3),c()()),t&2&&(d(4),x("ngForOf",i.tempCategories))},dependencies:[R]});let s=n;return s})();var J=(()=>{let n=class n{constructor(){}openProduct(e){let t=document.getElementById("modal");t&&t.classList.remove("hidden"),this.postModal=e}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();function Ge(s,n){if(s&1&&(r(0,"div",33)(1,"span",34),u(2),c()()),s&2){let m=n.$implicit;d(2),C(m)}}var ke=(()=>{let n=class n{constructor(e){this.productService=e,this.postServiceRef=this.productService,this.productServiceFunction={openProduct:this.productService.openProduct.bind(this.productService)},this.images=["https://via.placeholder.com/150","https://via.placeholder.com/160","https://via.placeholder.com/170"],this.currentIndex=0}changeNextImage(){this.currentIndex=(this.currentIndex+1)%this.images.length}changePreviousImage(){this.currentIndex<0&&(this.currentIndex=this.images.length),this.currentIndex=(this.currentIndex-1)%this.images.length}closeProject(){let e=document.getElementById("modal");e&&e.classList.add("hidden")}};n.\u0275fac=function(t){return new(t||n)(g(J))},n.\u0275cmp=f({type:n,selectors:[["app-products"]],standalone:!0,features:[h],decls:48,vars:10,consts:[["id","modal",1,"fixed","z-10","inset-0","hidden"],[1,"flex","items-center","justify-center","min-h-screen","bg-gray-500","bg-opacity-75","transition-opacity"],[1,"lex","flex-col","items-center","justify-between","bg-white","rounded","w-2/3"],[1,"flex","items-start","justify-end","w-full","h-8","pt-2","pr-2"],["id","product-close-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-6"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18 18 6M6 6l12 12"],[1,"main-outer-modal","mx-10","mt-0","mb-5","flex"],[1,"images-container","w-1/2","h-2/3","mr-5"],[1,"image-onScreen","w-full","h-full","bg-gray-100","rounded","shadow","p-2"],["alt","",1,"w-full","h-full",3,"src"],[1,"w-full","h-16","flex","items-center","justify-center"],[1,"p-2","border-2","rounded-full","hover:bg-gray-100",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M15.75 19.5 8.25 12l7.5-7.5"],["stroke-linecap","round","stroke-linejoin","round","d","m8.25 4.5 7.5 7.5-7.5 7.5"],[1,"flex","flex-col","justify-between"],[1,"details-container","w-full","min-h-96","flex","flex-col"],[1,"text-2xl","uppercase","font-medium"],[1,"w-full","h-auto","flex","items-center","justify-between"],[1,"flex","justify-center","items-center","flex-row"],[1,"my-2","font-light","flex"],["stroke-linecap","round","stroke-linejoin","round","d","M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"],["stroke-linecap","round","stroke-linejoin","round","d","M6 6h.008v.008H6V6Z"],[1,"ml-2"],[1,"font-light","flex"],["stroke-linecap","round","stroke-linejoin","round","d","M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],["stroke-linecap","round","stroke-linejoin","round","d","M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"],[1,"w-full","h-auto","flex","mt-2","text-blue-500"],["stroke-linecap","round","stroke-linejoin","round","d","M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"],["class","",4,"ngFor","ngForOf"],[1,"w-full","h-auto","mt-8","text-justify"],[1,"w-full","h-auto"],[1,"text-blue-500","text-4xl","font-medium","ml-5"],[1,""],[1,"ml-5","first:ml-2","text-lg"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),_("click",function(){return i.closeProject()}),b(),r(5,"svg",5),p(6,"path",6),c()()(),v(),r(7,"div",7)(8,"div",8)(9,"div",9),p(10,"img",10),c(),r(11,"div",11)(12,"button",12),_("click",function(){return i.changePreviousImage()}),b(),r(13,"svg",5),p(14,"path",13),c()(),v(),r(15,"button",12),_("click",function(){return i.changeNextImage()}),b(),r(16,"svg",5),p(17,"path",14),c()()()(),v(),r(18,"div",15)(19,"div",16)(20,"p",17),u(21),c(),r(22,"div",18)(23,"div",19)(24,"div",20)(25,"span"),b(),r(26,"svg",5),p(27,"path",21)(28,"path",22),c()(),v(),r(29,"span",23),u(30),c()()(),r(31,"div",24),b(),r(32,"svg",5),p(33,"path",25)(34,"path",26),c(),v(),r(35,"span",23),u(36),c()()(),r(37,"div",27),b(),r(38,"svg",5),p(39,"path",28),c(),w(40,Ge,3,1,"div",29),c(),v(),r(41,"div",30)(42,"p"),u(43),c()()(),r(44,"div",31)(45,"p",32),u(46),$(47,"currency"),c()()()()()()()),t&2&&(d(10),V("src",i.images[i.currentIndex],ue),d(11),C(i.postServiceRef.postModal==null?null:i.postServiceRef.postModal.title),d(9),U("",i.postServiceRef.postModal==null||i.postServiceRef.postModal.section==null?null:i.postServiceRef.postModal.section.section,", ",i.postServiceRef.postModal==null||i.postServiceRef.postModal.category==null?null:i.postServiceRef.postModal.category.subCatName,""),d(6),C(i.postServiceRef.postModal==null?null:i.postServiceRef.postModal.location),d(4),x("ngForOf",i.postServiceRef.postModal==null?null:i.postServiceRef.postModal.contactNumbers),d(3),C(i.postServiceRef.postModal==null?null:i.postServiceRef.postModal.description),d(3),C(G(47,8,i.postServiceRef.postModal==null?null:i.postServiceRef.postModal.price)))},dependencies:[Z,R]});let s=n;return s})();var Te=(()=>{let n=class n{constructor(e){this.categoriesService=e,this.posts=[{id:1,title:"Administrative Assistant Needed",location:"New York, NY",description:"We are seeking an Administrative Assistant to manage office tasks, schedule meetings, and support executives.",shortDescription:"Administrative Assistant role in NY office.",price:5e4,category:{subId:105,subCatName:"Administrative Assistant"},section:{id:1,section:"Administrative",subCats:[{subId:101,subCatName:"Receptionist"},{subId:102,subCatName:"Office Clerk"},{subId:103,subCatName:"Data Entry Clerk"},{subId:104,subCatName:"Executive Assistant"},{subId:105,subCatName:"Administrative Assistant"}]},contactNumbers:[1234567890,9876543210]},{id:2,title:"Certified Nurse",location:"Los Angeles, CA",description:"Looking for a Certified Nurse to join our healthcare team. Responsibilities include patient care and assisting doctors.",shortDescription:"Certified Nurse position available in LA.",price:75e3,category:{subId:201,subCatName:"Nurse"},section:{id:2,section:"Healthcare",subCats:[{subId:201,subCatName:"Nurse"},{subId:202,subCatName:"Medical Assistant"},{subId:203,subCatName:"Pharmacy Technician"},{subId:204,subCatName:"Lab Technician"},{subId:205,subCatName:"Dental Assistant"}]},contactNumbers:[2345678901,8765432109]},{id:3,title:"Software Developer",location:"San Francisco, CA",description:"Seeking a skilled Software Developer to create and maintain software applications for our tech firm.",shortDescription:"Software Developer needed in SF.",price:9e4,category:{subId:301,subCatName:"Software Developer"},section:{id:3,section:"IT & Technology",subCats:[{subId:301,subCatName:"Software Developer"},{subId:302,subCatName:"System Analyst"},{subId:303,subCatName:"IT Support Specialist"},{subId:304,subCatName:"Network Administrator"},{subId:305,subCatName:"Database Administrator"}]},contactNumbers:[3456789012,7654321098]},{id:4,title:"Call Center Representative",location:"Chicago, IL",description:"We are hiring Call Center Representatives to handle customer inquiries and provide support.",shortDescription:"Call Center Representative job in Chicago.",price:4e4,category:{subId:401,subCatName:"Call Center Representative"},section:{id:4,section:"Customer Service",subCats:[{subId:401,subCatName:"Call Center Representative"},{subId:402,subCatName:"Customer Support Specialist"},{subId:403,subCatName:"Technical Support Representative"},{subId:404,subCatName:"Client Service Coordinator"},{subId:405,subCatName:"Help Desk Technician"}]},contactNumbers:[4567890123,6543210987]},{id:5,title:"Financial Analyst",location:"Boston, MA",description:"Financial Analyst needed to analyze financial data, prepare reports, and assist in decision-making.",shortDescription:"Financial Analyst opportunity in Boston.",price:8e4,category:{subId:502,subCatName:"Financial Analyst"},section:{id:5,section:"Finance",subCats:[{subId:501,subCatName:"Accountant"},{subId:502,subCatName:"Financial Analyst"},{subId:503,subCatName:"Bookkeeper"},{subId:504,subCatName:"Payroll Specialist"},{subId:505,subCatName:"Auditor"}]},contactNumbers:[5678901234,5432109876]},{id:6,title:"HR Coordinator",location:"Austin, TX",description:"HR Coordinator needed to manage HR tasks, employee relations, and recruitment processes.",shortDescription:"HR Coordinator role in Austin.",price:6e4,category:{subId:601,subCatName:"HR Coordinator"},section:{id:6,section:"Human Resources",subCats:[{subId:601,subCatName:"HR Coordinator"},{subId:602,subCatName:"Recruiter"},{subId:603,subCatName:"HR Assistant"},{subId:604,subCatName:"Benefits Administrator"},{subId:605,subCatName:"Training Coordinator"}]},contactNumbers:[6789012345,4321098765]},{id:7,title:"Substitute Teacher",location:"Seattle, WA",description:"Hiring Substitute Teachers for various subjects in our school district. Must be flexible and reliable.",shortDescription:"Substitute Teacher positions in Seattle.",price:45e3,category:{subId:701,subCatName:"Substitute Teacher"},section:{id:7,section:"Education",subCats:[{subId:701,subCatName:"Substitute Teacher"},{subId:702,subCatName:"Teacher Assistant"},{subId:703,subCatName:"Tutor"},{subId:704,subCatName:"School Counselor"},{subId:705,subCatName:"Librarian"}]},contactNumbers:[7890123456,3210987654]},{id:8,title:"Quality Control Inspector",location:"Detroit, MI",description:"Seeking a Quality Control Inspector to ensure manufacturing standards are met in our production facility.",shortDescription:"Quality Control Inspector needed in Detroit.",price:55e3,category:{subId:803,subCatName:"Quality Control Inspector"},section:{id:8,section:"Manufacturing",subCats:[{subId:801,subCatName:"Assembler"},{subId:802,subCatName:"Machinist"},{subId:803,subCatName:"Quality Control Inspector"},{subId:804,subCatName:"Production Worker"},{subId:805,subCatName:"Packaging Operator"}]},contactNumbers:[8901234567,2109876543]},{id:9,title:"Event Staff",location:"Las Vegas, NV",description:"Hiring Event Staff to assist with organizing and managing events. Responsibilities include setup, coordination, and customer service.",shortDescription:"Event Staff required for events in Las Vegas.",price:35e3,category:{subId:902,subCatName:"Event Staff"},section:{id:9,section:"Hospitality",subCats:[{subId:901,subCatName:"Housekeeper"},{subId:902,subCatName:"Event Staff"},{subId:903,subCatName:"Catering Assistant"},{subId:904,subCatName:"Front Desk Agent"},{subId:905,subCatName:"Concierge"}]},contactNumbers:[9012345678,1098765432]},{id:10,title:"Warehouse Worker",location:"Phoenix, AZ",description:"Warehouse Workers needed to manage inventory, load/unload trucks, and maintain warehouse organization.",shortDescription:"Warehouse Worker positions in Phoenix.",price:4e4,category:{subId:1101,subCatName:"Warehouse Worker"},section:{id:11,section:"Logistics",subCats:[{subId:1101,subCatName:"Warehouse Worker"},{subId:1102,subCatName:"Delivery Driver"},{subId:1103,subCatName:"Forklift Operator"},{subId:1104,subCatName:"Shipping Clerk"},{subId:1105,subCatName:"Inventory Specialist"}]},contactNumbers:[1234567890,9876543210]}],this.postsToDisplay=[]}addPostToShow(){let e=this.categoriesService.selectedCategoryArray;e.length!==0?this.postsToDisplay=this.posts.filter(t=>e.some(i=>i.categoryId===t.section.id&&i.subCategoryId===t.category.subId)):this.postsToDisplay=[...this.posts],console.log(this.postsToDisplay)}checkSelectedCategories(){return this.categoriesService.selectedCategoryArray.length!==0?this.addPostToShow():this.addPostToShow(),this.postsToDisplay}};n.\u0275fac=function(t){return new(t||n)(N(Q))},n.\u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();function Ye(s,n){if(s&1){let m=W();r(0,"ul")(1,"li")(2,"div",2),_("click",function(){let t=j(m).$implicit,i=M();return H(i.productServiceFunction.openProduct(t))}),r(3,"div",3),p(4,"img",4),c(),r(5,"div",5)(6,"p",6),u(7),c(),r(8,"div",7)(9,"div",8)(10,"div",9)(11,"span"),b(),r(12,"svg",10),p(13,"path",11)(14,"path",12),c()(),v(),r(15,"span",13),u(16),c()()(),r(17,"div",14),b(),r(18,"svg",10),p(19,"path",15)(20,"path",16),c(),v(),r(21,"span",13),u(22),c()()(),r(23,"div",17),u(24),c(),r(25,"p",18),u(26),$(27,"currency"),c()()()()()}if(s&2){let m=n.$implicit;d(7),C(m.title),d(9),U("",m.section.section,", ",m.category.subCatName,""),d(6),C(m.location),d(2),B(" ",m.shortDescription," "),d(2),C(G(27,6,m.price))}}var Me=(()=>{let n=class n{constructor(e,t){this.postsService=e,this.productService=t,this.postsListToDisplay=this.postsService,this.productServiceFunction={openProduct:i=>{this.productService.openProduct(i)}}}};n.\u0275fac=function(t){return new(t||n)(g(Te),g(J))},n.\u0275cmp=f({type:n,selectors:[["app-ads-panel"]],standalone:!0,features:[h],decls:3,vars:1,consts:[[1,"w-full","h-auto","pb-2","bg-gray-100"],[4,"ngFor","ngForOf"],[1,"post-outer","w-full","h-full","bg-blue-50","flex","border-2","mb-2","hover:border-blue-400","hover:cursor-pointer","text-gray-700",3,"click"],[1,"w-1/3","h-full","bg-white","flex","justify-center","items-center"],["src","https://via.placeholder.com/150",1,"w-full","h-full"],[1,"w-full","h-full","bg-gray-50","p-5"],[1,"text-2xl","font-medium","uppercase"],[1,"flex","justify-between","items-center","text-sm"],[1,"flex","justify-center","items-center","flex-row"],[1,"my-2","font-light","flex"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-6"],["stroke-linecap","round","stroke-linejoin","round","d","M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"],["stroke-linecap","round","stroke-linejoin","round","d","M6 6h.008v.008H6V6Z"],[1,"ml-2"],[1,"font-light","flex"],["stroke-linecap","round","stroke-linejoin","round","d","M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],["stroke-linecap","round","stroke-linejoin","round","d","M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"],[1,"text-justify"],[1,"text-2xl","mt-16","mb-2","font-semibold","text-blue-500"]],template:function(t,i){t&1&&(r(0,"div",0),w(1,Ye,28,8,"ul",1),c(),p(2,"app-products")),t&2&&(d(),x("ngForOf",i.postsListToDisplay.checkSelectedCategories()))},dependencies:[R,Z,ke]});let s=n;return s})();var Re=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f({type:n,selectors:[["app-main-outer"]],standalone:!0,features:[h],decls:5,vars:0,consts:[[1,"main-outer","max-w-7xl","flex","mx-auto","h-dvh"],[1,"sideOne","w-96","h-auto","my-2","rounded"],[1,"sideTwo","w-full","h-auto","ml-2","my-2","rounded"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"div",1),p(2,"app-side-panel"),c(),r(3,"div",2),p(4,"app-ads-panel"),c()())},dependencies:[Fe,Me]});let s=n;return s})();var Tt=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f({type:n,selectors:[["app-ads"]],standalone:!0,features:[h],decls:2,vars:0,template:function(t,i){t&1&&p(0,"app-header")(1,"app-main-outer")},dependencies:[xe,Re]});let s=n;return s})();export{Tt as AdsComponent};
