!function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);var n=()=>{let e,t;document.querySelector(".right").addEventListener("click",s=>{void 0!==(e=s.target).dataset.popup&&((t=document.querySelector(`${e.dataset.popup}`)).style.display="block"),void 0!==e.dataset.popup&&t.addEventListener("click",e=>{let s=e.target;(s.classList.contains("overlay")||s.closest(".close-form"))&&(t.style.display="none")})})};var o=()=>{const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("toDel"),t.style.cssText="margin-top: 10px !important",e.addEventListener("submit",e=>{e.preventDefault();let n=e.target;n.appendChild(t),t.innerHTML='<img src = "./images/send-status/loadiiing.gif" width = "100" !important>';let o=n.querySelectorAll("input");const i=new FormData;o.forEach(e=>{"hidden"!==e.type&&"checkbox"!==e.type&&i.append(e.name,e.value)}),s(i).then(e=>{if(200!==e.status)throw new Error("status network");t.innerHTML='<img src = "./images/send-status/Download-Success-PNG-Image.png" width = "100" !important>',setTimeout(()=>t.remove(),2e3),n.querySelectorAll("input").forEach(e=>{e.value="",e.classList.remove("success")})}).catch(e=>{t.innerHTML='<img src = "./images/send-status/error.png" width = "100" !important>',setTimeout(()=>t.remove(),2e3),console.error(e)})});const s=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e})};var i=()=>{class e{constructor({selector:e,pattern:t={},method:s}){this.form=document.querySelector(e),this.pattern=t,this.method=s,this.elementsForm=[...this.form.elements].filter(e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type),this.elementsButtons=[...this.form.elements].filter(e=>"button"==e.tagName.toLowerCase()||"button"==e.type),this.error=new Set}init(){this.applyStyle(),this.setPattern(),this.elementsForm.forEach(e=>e.addEventListener("change",this.checkIt.bind(this))),this.form.addEventListener("submit",e=>{this.elementsForm.forEach(e=>this.checkIt({target:e})),this.error.size&&e.preventDefault()})}isValid(e){const t={notEmpty:e=>""!==e.value.trim(),pattern:(e,t)=>t.test(e.value)};if(this.method){const s=this.method[e.id];if(s)return s.every(s=>t[s[0]](e,this.pattern[s[1]]))}else console.warn("Необходимо передать id полей ввода и метода этих полей!");return!0}checkIt(e){const t=e.target;this.isValid(t)?(this.showSucces(t),this.error.delete(t)):(this.showError(t),this.error.add(t)),this.error.size?this.disabled||this.elementsButtons.forEach(e=>{e.setAttribute("disabled","true")}):this.elementsButtons.forEach(e=>{e.disabled=!1})}showError(e){e.classList.remove("success"),e.classList.add("error")}showSucces(e){e.classList.remove("error"),e.classList.add("success")}applyStyle(){const e=document.createElement("style");e.textContent="\n        input.success {\n          border: 2px solid green !important\n        }\n        input.error {\n            border: 2px solid red !important\n        }\n        ",document.head.appendChild(e)}setPattern(){this.pattern.phone||(this.pattern.phone=/^\+?[78]([-()]*\d){10}$/),this.pattern.email||(this.pattern.email=/^\w+@\w+\.\w{2,}$/)}}const t=new e({selector:"#banner-form",pattern:{name:/^[А-Яа-яЁё\s]+$/,phone:/^\+?[78]\d{10}$/},method:{phone:[["notEmpty"],["pattern","phone"]],name:[["notEmpty"],["pattern","name"]]}}),s=new e({selector:"#card_order",pattern:{name:/^[А-Яа-яЁё\s]+$/,phone:/^\+?[78]\d{10}$/},method:{"callback_form-phone":[["notEmpty"],["pattern","phone"]],"callback_form-name":[["notEmpty"],["pattern","name"]]}}),n=new e({selector:"#footer_form",pattern:{phone:/^\+?[78]\d{10}$/},method:{"callback_footer_form-phone":[["notEmpty"],["pattern","phone"]]}}),o=new e({selector:"#form1",pattern:{name:/^[А-Яа-яЁё\s]+$/,phone:/^\+?[78]\d{10}$/},method:{"callback_form1-name":[["notEmpty"],["pattern","name"]],"callback_form1-phone":[["notEmpty"],["pattern","phone"]]}}),i=new e({selector:"#form2",pattern:{name:/^[А-Яа-яЁё\s]+$/,phone:/^\+?[78]\d{10}$/},method:{"callback_form2-name":[["notEmpty"],["pattern","name"]],"callback_form2-phone":[["notEmpty"],["pattern","phone"]]}});t.init(),s.init(),n.init(),o.init(),i.init()};var r=function(){document.querySelector("body").addEventListener("input",()=>{let e=event.target,t=e.id;(/name$/.test(t)||/message$/.test(t))&&(e.value=e.value.replace(/[^А-Яа-яёЁ\s]/gim,""))})};var l=()=>{const e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e.addEventListener("click",()=>{t.style.display="block",e.remove()}),t.addEventListener("click",e=>{let s=e.target;s.closest(".form-content")&&!s.classList.contains("close-btn")||(t.style.display="none")})};var a=()=>{new class{constructor({main:e,wrap:t,infinity:s=!1,position:n=0,slidesToShow:o=3,responsive:i=[]}){e&&t||console.warn("Необходимо 2 селектора main и wrap"),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.slidesToShow=o,this.options={position:n,infinity:s,widthSLide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=i}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next?this.controlSlider():(this.addArrow(),this.controlSlider()),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent=`\n            .glo-slider {\n                overflow: hidden !important;\n                position: relative;\n            }\n            .glo-slider__wrap {\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n            .glo-slider__item {\n                align-items: center;\n                justify-content: center;\n                flex: 0 0 ${this.options.widthSLide}% !important;\n                margin: auto 0 !important;\n            }\n        `,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.position>0||this.options.infinity)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSLide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSLide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.textContent="<",this.next.textContent=">",this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const e=document.createElement("style");e.textContent="\n            .glo-slider__prev {\n                position: absolute;\n                left: 10px;\n                top: 50%;\n                border: 10px solid #ffd11a;\n                background: #ffd11a;\n                border-radius: 20px;\n            }\n            .glo-slider__next {\n                position: absolute;\n                right: 10px;\n                top: 50%;\n                border: 10px solid #ffd11a;\n                background: #ffd11a;\n                border-radius: 20px;\n            }\n         \n        ",document.head.appendChild(e)}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),s=Math.max(...t),n=()=>{const n=document.documentElement.clientWidth;if(n<s)for(let e=0;e<t.length;e++)n<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSLide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSLide=Math.floor(100/this.slidesToShow),this.addStyle()};n(),window.addEventListener("resize",n)}}({main:"#services .wrapper",wrap:".services-slider",slidesToShow:3,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()};var d=()=>{const e=document.querySelectorAll(".main-slider .slide"),t=(document.querySelector(".main-slider"),document.querySelector(".slider-dots"));(()=>{for(let s=0;s<e.length;s++){let e=document.createElement("li");e.classList.add("slider-dot"),t.appendChild(e);let s=document.createElement("button");e.appendChild(s)}})();let s=document.querySelectorAll(".slider-dot");s[0].classList.add("slick-active");let n,o=0;const i=()=>{e[o].style.display="none",((e,t,s)=>{e[t].classList.remove(s)})(s,o,"slick-active"),++o>=e.length&&(o=0),e[o].style.display="flex",((e,t,s)=>{e[t].classList.add(s)})(s,o,"slick-active")};((e=3e3)=>{n=setInterval(i,e)})(3e3)};var c=()=>{const e=document.querySelector(".gallery-slider"),t=document.querySelectorAll(".gallery-slider .slide");e.style.position="relative";t.forEach(e=>{e.style.display="none"}),t[0].classList.add("slide_active");(()=>{let t=document.createElement("button"),s=document.createElement("button");t.innerHTML="<strong><</strong>",s.innerHTML="<strong>></strong>",t.className="glo-slider__prev",s.className="glo-slider__next",e.appendChild(t),e.appendChild(s);const n=document.createElement("style");n.textContent="\n            .glo-slider__prev {\n                position: absolute;\n                left: 10px;\n                top: 50%;\n                border: 10px solid #ffd11a;\n                background: #ffd11a;\n                border-radius: 20px;\n            }\n            .glo-slider__next {\n                position: absolute;\n                right: 10px;\n                top: 50%;\n                border: 10px solid #ffd11a;\n                background: #ffd11a;\n                border-radius: 20px;\n            }\n            .slide_active {\n                display:flex !important;\n            }\n            .slide_nonactive {\n                display:none;\n            }\n         \n        ",document.head.appendChild(n)})();(()=>{let s=document.createElement("ul");s.classList.add("slider-dots"),s.style.background="transparent",e.appendChild(s);for(let e=0;e<t.length;e++){let e=document.createElement("li");e.classList.add("slider-dot"),s.appendChild(e);let t=document.createElement("button");e.appendChild(t)}})();let s=document.querySelectorAll(".gallery-slider .slider-dot");s[0].classList.add("slick-active");let n,o=0;const i=(e,t,s)=>{e[t].classList.remove(s)},r=(e,t,s)=>{e[t].classList.add(s)},l=()=>{i(t,o,"slide_active"),i(s,o,"slick-active"),++o>=t.length&&(o=0),r(t,o,"slide_active"),r(s,o,"slick-active")},a=(e=3e3)=>{n=setInterval(l,e)};e.addEventListener("click",e=>{e.preventDefault();let n=e.target;console.log("target: ",n),n.closest(".glo-slider__next, .glo-slider__prev, .slider-dot")&&(i(t,o,"slide_active"),i(s,o,"slick-active"),n.closest(".glo-slider__prev")?o--:n.closest(".glo-slider__next")?o++:n.closest(".slider-dot")&&s.forEach((e,t)=>{e===n&&(o=t)}),o>=t.length&&(o=0),o<0&&(o=t.length-1),r(t,o,"slide_active"),r(s,o,"slick-active"))}),e.addEventListener("mouseover",e=>{(e.target.closest(".glo-slider__next")||e.target.closest(".glo-slider__prev")||e.target.closest(".slider-dot"))&&clearInterval(n)}),e.addEventListener("mouseout",e=>{(e.target.closest(".glo-slider__next")||e.target.closest(".glo-slider__prev")||e.target.closest(".slider-dot"))&&a()}),a()};(()=>{const e=document.querySelector("body"),t=document.querySelector(".clubs-list > ul");e.addEventListener("click",e=>{e.target.closest(".clubs-list")?t.style.display="block":t.style.display="none"})})(),n(),o(),i(),r(),l(),a(),d(),c()}]);