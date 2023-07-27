function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i,o,a,c,s,u,l,f,p,h,v,d,g,y,m,b,_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},w={},O={},S=_.parcelRequire3a11;null==S&&((S=function(e){if(e in w)return w[e].exports;if(e in O){var t=O[e];delete O[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){O[e]=t},_.parcelRequire3a11=S);var j={},E={},L=function(e){return e&&e.Math==Math&&e};E=L("object"==typeof globalThis&&globalThis)||L("object"==typeof window&&window)||L("object"==typeof self&&self)||L("object"==typeof _&&_)||function(){return this}()||E||Function("return this")();var T={},k={};T=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},x={};x=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype.call;$=x?P.bind(P):function(){return P.apply(P,arguments)};var M={}.propertyIsEnumerable,I=Object.getOwnPropertyDescriptor;i=I&&!M.call({1:2},1)?function(e){var t=I(this,e);return!!t&&t.enumerable}:M;var F={};F=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var D={},N={},A={},C=Function.prototype,H=C.call,R=x&&C.bind.bind(H,H),q={},G=(A=x?R:function(e){return function(){return H.apply(e,arguments)}})({}.toString),U=A("".slice);q=function(e){return U(G(e),8,-1)};var z=Object,B=A("".split);N=k(function(){return!z("z").propertyIsEnumerable(0)})?function(e){return"String"==q(e)?B(e,""):z(e)}:z;var W={},Y={};Y=function(e){return null==e};var K=TypeError;W=function(e){if(Y(e))throw K("Can't call method on "+e);return e},D=function(e){return N(W(e))};var V={},J={},Q={},X={},Z={},ee="object"==typeof document&&document.all,et=(Z={all:ee,IS_HTMLDDA:void 0===ee&&void 0!==ee}).all;X=Z.IS_HTMLDDA?function(e){return"function"==typeof e||e===et}:function(e){return"function"==typeof e};var er=Z.all;Q=Z.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:X(e)||e===er}:function(e){return"object"==typeof e?null!==e:X(e)};var en={},ei={};ei=function(e,t){var r;return arguments.length<2?X(r=E[e])?r:void 0:E[e]&&E[e][t]};var eo={};eo=A({}.isPrototypeOf);var ea={},ec={},es={},eu={};eu="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var el=E.process,ef=E.Deno,ep=el&&el.versions||ef&&ef.version,eh=ep&&ep.v8;eh&&(a=(o=eh.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!a&&eu&&(!(o=eu.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=eu.match(/Chrome\/(\d+)/))&&(a=+o[1]),es=a;var ev=E.String;ea=(ec=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol();return!ev(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&es&&es<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ed=Object;en=ea?function(e){return"symbol"==typeof e}:function(e){var t=ei("Symbol");return X(t)&&eo(t.prototype,ed(e))};var eg={},ey={},em={},eb=String;em=function(e){try{return eb(e)}catch(e){return"Object"}};var e_=TypeError;ey=function(e){if(X(e))return e;throw e_(em(e)+" is not a function")},eg=function(e,t){var r=e[t];return Y(r)?void 0:ey(r)};var ew={},eO=TypeError;ew=function(e,t){var r,n;if("string"===t&&X(r=e.toString)&&!Q(n=$(r,e))||X(r=e.valueOf)&&!Q(n=$(r,e))||"string"!==t&&X(r=e.toString)&&!Q(n=$(r,e)))return n;throw eO("Can't convert object to primitive value")};var eS={},ej={};ej=!1;var eE={},eL={},eT=Object.defineProperty;eL=function(e,t){try{eT(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var ek="__core-js_shared__";eE=E[ek]||eL(ek,{}),(eS=function(e,t){return eE[e]||(eE[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.31.1",mode:ej?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",source:"https://github.com/zloirock/core-js"});var e$={},ex={},eP=Object;ex=function(e){return eP(W(e))};var eM=A({}.hasOwnProperty);e$=Object.hasOwn||function(e,t){return eM(ex(e),t)};var eI={},eF=0,eD=Math.random(),eN=A(1..toString);eI=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eN(++eF+eD,36)};var eA=E.Symbol,eC=eS("wks"),eH=ea?eA.for||eA:eA&&eA.withoutSetter||eI,eR=TypeError,eq=(e$(eC,t="toPrimitive")||(eC[t]=ec&&e$(eA,t)?eA[t]:eH("Symbol."+t)),eC[t]);J=function(e,t){if(!Q(e)||en(e))return e;var r,n=eg(e,eq);if(n){if(void 0===t&&(t="default"),!Q(r=$(n,e,t))||en(r))return r;throw eR("Can't convert object to primitive value")}return void 0===t&&(t="number"),ew(e,t)},V=function(e){var t=J(e,"string");return en(t)?t:t+""};var eG={},eU={},ez=E.document,eB=Q(ez)&&Q(ez.createElement);eU=function(e){return eB?ez.createElement(e):{}},eG=!T&&!k(function(){return 7!=Object.defineProperty(eU("div"),"a",{get:function(){return 7}}).a});var eW=Object.getOwnPropertyDescriptor;n=T?eW:function(e,t){if(e=D(e),t=V(t),eG)try{return eW(e,t)}catch(e){}if(e$(e,t))return F(!$(i,e,t),e[t])};var eY={},eK={};eK=T&&k(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eV={},eJ=String,eQ=TypeError;eV=function(e){if(Q(e))return e;throw eQ(eJ(e)+" is not an object")};var eX=TypeError,eZ=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e3="writable";c=T?eK?function(e,t,r){if(eV(e),t=V(t),eV(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e3 in r&&!r[e3]){var n=e0(e,t);n&&n[e3]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(eV(e),t=V(t),eV(r),eG)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eX("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eY=T?function(e,t,r){return c(e,t,F(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e7={},e9=Function.prototype,e8=T&&Object.getOwnPropertyDescriptor,e5=e$(e9,"name")&&(!T||T&&e8(e9,"name").configurable),e6={},te=A(Function.toString);X(eE.inspectSource)||(eE.inspectSource=function(e){return te(e)}),e6=eE.inspectSource;var tt={},tr={},tn=E.WeakMap;tr=X(tn)&&/native code/.test(String(tn));var ti={},to=eS("keys");ti=function(e){return to[e]||(to[e]=eI(e))};var ta={};ta={};var tc="Object already initialized",ts=E.TypeError,tu=E.WeakMap;if(tr||eE.state){var tl=eE.state||(eE.state=new tu);tl.get=tl.get,tl.has=tl.has,tl.set=tl.set,s=function(e,t){if(tl.has(e))throw ts(tc);return t.facade=e,tl.set(e,t),t},u=function(e){return tl.get(e)||{}},l=function(e){return tl.has(e)}}else{var tf=ti("state");ta[tf]=!0,s=function(e,t){if(e$(e,tf))throw ts(tc);return t.facade=e,eY(e,tf,t),t},u=function(e){return e$(e,tf)?e[tf]:{}},l=function(e){return e$(e,tf)}}var tp=(tt={set:s,get:u,has:l,enforce:function(e){return l(e)?u(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=u(t)).type!==e)throw ts("Incompatible receiver, "+e+" required");return r}}}).enforce,th=tt.get,tv=String,td=Object.defineProperty,tg=A("".slice),ty=A("".replace),tm=A([].join),tb=T&&!k(function(){return 8!==td(function(){},"length",{value:8}).length}),t_=String(String).split("String"),tw=e7=function(e,t,r){"Symbol("===tg(tv(t),0,7)&&(t="["+ty(tv(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e5&&e.name!==t)&&(T?td(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&e$(r,"arity")&&e.length!==r.arity&&td(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?T&&td(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tp(e);return e$(n,"source")||(n.source=tm(t_,"string"==typeof t?t:"")),e};Function.prototype.toString=tw(function(){return X(this)&&th(this).source||e6(this)},"toString"),e4=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(X(r)&&e7(r,o,n),n.global)i?e[t]=r:eL(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tO={},tS={},tj={},tE={},tL={},tT={},tk=Math.ceil,t$=Math.floor;tT=Math.trunc||function(e){var t=+e;return(t>0?t$:tk)(t)},tL=function(e){var t=+e;return t!=t||0===t?0:tT(t)};var tx=Math.max,tP=Math.min;tE=function(e,t){var r=tL(e);return r<0?tx(r+t,0):tP(r,t)};var tM={},tI={},tF=Math.min;tI=function(e){return e>0?tF(tL(e),9007199254740991):0},tM=function(e){return tI(e.length)};var tD=function(e){return function(t,r,n){var i,o=D(t),a=tM(o),c=tE(n,a);if(e&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},tN={includes:tD(!0),indexOf:tD(!1)}.indexOf,tA=A([].push);tj=function(e,t){var r,n=D(e),i=0,o=[];for(r in n)!e$(ta,r)&&e$(n,r)&&tA(o,r);for(;t.length>i;)e$(n,r=t[i++])&&(~tN(o,r)||tA(o,r));return o};var tC=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tj(e,tC)},p=Object.getOwnPropertySymbols;var tH=A([].concat);tS=ei("Reflect","ownKeys")||function(e){var t=f(eV(e));return p?tH(t,p(e)):t},tO=function(e,t,r){for(var i=tS(t),o=0;o<i.length;o++){var a=i[o];e$(e,a)||r&&e$(r,a)||c(e,a,n(t,a))}};var tR={},tq=/#|\.prototype\./,tG=function(e,t){var r=tz[tU(e)];return r==tW||r!=tB&&(X(t)?k(t):!!t)},tU=tG.normalize=function(e){return String(e).replace(tq,".").toLowerCase()},tz=tG.data={},tB=tG.NATIVE="N",tW=tG.POLYFILL="P";tR=tG,j=function(e,t){var r,i,o,a,c,s=e.target,u=e.global,l=e.stat;if(r=u?E:l?E[s]||eL(s,{}):(E[s]||{}).prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(c=n(r,i))&&c.value:r[i],!tR(u?i:s+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tO(a,o)}(e.sham||o&&o.sham)&&eY(a,"sham",!0),e4(r,i,a,e)}};var tY={},tK={},tV=Function.prototype,tJ=tV.apply,tQ=tV.call;tK="object"==typeof Reflect&&Reflect.apply||(x?tQ.bind(tJ):function(){return tQ.apply(tJ,arguments)});var tX={},tZ={},t0=(tZ=function(e){if("Function"===q(e))return A(e)})(tZ.bind);tX=function(e,t){return ey(e),void 0===t?e:x?t0(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=ei("document","documentElement");var t2={};t2=A([].slice);var t3={},t4=TypeError;t3=function(e,t){if(e<t)throw t4("Not enough arguments");return e};var t7={};t7=/(?:ipad|iphone|ipod).*applewebkit/i.test(eu);var t9={},t8={},t5=t8={};function t6(){throw Error("setTimeout has not been defined")}function re(){throw Error("clearTimeout has not been defined")}function rt(e){if(h===setTimeout)return setTimeout(e,0);if((h===t6||!h)&&setTimeout)return h=setTimeout,setTimeout(e,0);try{return h(e,0)}catch(t){try{return h.call(null,e,0)}catch(t){return h.call(this,e,0)}}}!function(){try{h="function"==typeof setTimeout?setTimeout:t6}catch(e){h=t6}try{v="function"==typeof clearTimeout?clearTimeout:re}catch(e){v=re}}();var rr=[],rn=!1,ri=-1;function ro(){rn&&d&&(rn=!1,d.length?rr=d.concat(rr):ri=-1,rr.length&&ra())}function ra(){if(!rn){var e=rt(ro);rn=!0;for(var t=rr.length;t;){for(d=rr,rr=[];++ri<t;)d&&d[ri].run();ri=-1,t=rr.length}d=null,rn=!1,function(e){if(v===clearTimeout)return clearTimeout(e);if((v===re||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(e);try{v(e)}catch(t){try{return v.call(null,e)}catch(t){return v.call(this,e)}}}(e)}}function rc(e,t){this.fun=e,this.array=t}function rs(){}t5.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];rr.push(new rc(e,t)),1!==rr.length||rn||rt(ra)},rc.prototype.run=function(){this.fun.apply(null,this.array)},t5.title="browser",t5.browser=!0,t5.env={},t5.argv=[],t5.version="",t5.versions={},t5.on=rs,t5.addListener=rs,t5.once=rs,t5.off=rs,t5.removeListener=rs,t5.removeAllListeners=rs,t5.emit=rs,t5.prependListener=rs,t5.prependOnceListener=rs,t5.listeners=function(e){return[]},t5.binding=function(e){throw Error("process.binding is not supported")},t5.cwd=function(){return"/"},t5.chdir=function(e){throw Error("process.chdir is not supported")},t5.umask=function(){return 0},t9=void 0!==t8&&"process"==q(t8);var ru=E.setImmediate,rl=E.clearImmediate,rf=E.process,rp=E.Dispatch,rh=E.Function,rv=E.MessageChannel,rd=E.String,rg=0,ry={},rm="onreadystatechange";k(function(){g=E.location});var rb=function(e){if(e$(ry,e)){var t=ry[e];delete ry[e],t()}},r_=function(e){return function(){rb(e)}},rw=function(e){rb(e.data)},rO=function(e){E.postMessage(rd(e),g.protocol+"//"+g.host)};ru&&rl||(ru=function(e){t3(arguments.length,1);var t=X(e)?e:rh(e),r=t2(arguments,1);return ry[++rg]=function(){tK(t,void 0,r)},y(rg),rg},rl=function(e){delete ry[e]},t9?y=function(e){rf.nextTick(r_(e))}:rp&&rp.now?y=function(e){rp.now(r_(e))}:rv&&!t7?(b=(m=new rv).port2,m.port1.onmessage=rw,y=tX(b.postMessage,b)):E.addEventListener&&X(E.postMessage)&&!E.importScripts&&g&&"file:"!==g.protocol&&!k(rO)?(y=rO,E.addEventListener("message",rw,!1)):y=rm in eU("script")?function(e){t1.appendChild(eU("script"))[rm]=function(){t1.removeChild(this),rb(e)}}:function(e){setTimeout(r_(e),0)});var rS=(tY={set:ru,clear:rl}).clear;j({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==rS},{clearImmediate:rS});var rj=tY.set,rE={},rL={};rL="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rT=E.Function,rk=/MSIE .\./.test(eu)||rL&&((r=E.Bun.version.split(".")).length<3||0==r[0]&&(r[1]<3||3==r[1]&&0==r[2]));rE=function(e,t){var r=t?2:1;return rk?function(n,i){var o=t3(arguments.length,1)>r,a=X(n)?n:rT(n),c=o?t2(arguments,r):[],s=o?function(){tK(a,this,c)}:a;return t?e(s,i):e(s)}:e};var r$=E.setImmediate?rE(rj,!1):rj;j({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==r$},{setImmediate:r$});class rx{#e=document.querySelector(".recipe");#t;render(e){this.#t=e;let t=this.#r;this.#n,this.#e.insertAdjacentHTML("afterbegin",t)}#n(){this.#e.innerHTML=""}#r(){return`
        <figure class="recipe__fig">
        <img src="${this.#t.image}" alt="${this.#t.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this.#t.title}</span>
        </h1>
      </figure>
  
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this.#t.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this.#t.servings}</span>
          <span class="recipe__info-text">servings</span>
  
          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
  
        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>
  
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this.#t.ingredients.map(e=>`
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${e.unit}</span>
              ${e.description}
          </div>
        </li>
          `).join("")}
      </div>
  
  
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this.#t.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this.#t.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}}new rx;var rP={};rP=new URL(S("27Lyk").resolve("hfd23"),import.meta.url).toString();var rM=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,c,s=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(s,"_invoke",{value:(a=new T(o||[]),c=p,function(r,i){if(c===h)throw Error("Generator is already running");if(c===v){if("throw"===r)throw i;return $()}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var s=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),d;var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,d):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,d)}(o,a);if(s){if(s===d)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var u=f(e,n,a);if("normal"===u.type){if(c=a.done?v:"suspendedYield",u.arg===d)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(c=v,a.method="throw",a.arg=u.arg)}})}),s}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",v="completed",d={};function g(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(k([])));w&&w!==r&&n.call(w,a)&&(b=w);var O=m.prototype=g.prototype=Object.create(b);function S(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function j(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,c){var s=f(e[i],e,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,c)},function(e){r("throw",e,a,c)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,c)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function k(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:$}}function $(){return{value:t,done:!0}}return y.prototype=m,i(O,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},S(j.prototype),u(j.prototype,c,function(){return this}),e.AsyncIterator=j,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new j(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},S(O),u(O,s,"Generator"),u(O,a,function(){return this}),u(O,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:k(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}({});try{regeneratorRuntime=rM}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rM:Function("r","regeneratorRuntime = r")(rM)}const rI={recipe:{}},rF=async function(e){try{let t=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}`),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);let{recipe:n}=r.data;rI.recipe={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.sourceUrl,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},console.log(rI.recipe)}catch(e){alert(e)}};console.log(e(rP));const rD=document.querySelector(".recipe");renderSpinner=function(t){let r=`
    <div class="spinner">
      <svg>
        <use href="${e(rP)}#icon-loader"></use>
      </svg>
    </div>
    `;t.innerHTML="",t.insertAdjacentHTML("afterbegin",r)};const rN=async function(){try{let t=window.location.hash.slice(1);if(console.log(t),!t)return;renderSpinner(rD),await rF(t);let{recipe:r}=rI,n=`
      <figure class="recipe__fig">
      <img src="${r.image}" alt="${r.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${r.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(rP)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${r.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(rP)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${r.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(rP)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(rP)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${e(rP)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${e(rP)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${r.ingredients.map(t=>`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${e(rP)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${t.quantity}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${t.unit}</span>
            ${t.description}
        </div>
      </li>
        `).join("")}
    </div>


    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${r.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${r.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${e(rP)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `;rD.innerHTML="",rD.insertAdjacentHTML("afterbegin",n)}catch(e){alert(e)}};rN().load.forEach(e=>window.addEventListener(e,rN));
//# sourceMappingURL=index.caedd098.js.map
