!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var s=()=>{let e,t;document.querySelector(".right").addEventListener("click",n=>{void 0!==(e=n.target).dataset.popup&&((t=document.querySelector(`${e.dataset.popup}`)).style.display="block"),void 0!==e.dataset.popup&&t.addEventListener("click",e=>{let n=e.target;(n.classList.contains("overlay")||n.closest(".close-form"))&&(t.style.display="none")})})};var o=()=>{const e=document.getElementById("thanks"),t=document.querySelector("body"),n=document.createElement("div");n.classList.add("toDel"),n.style.cssText="margin-top: 10px !important",t.addEventListener("submit",t=>{t.preventDefault();let i=t.target,r=i.children,l=i.querySelector(".personal-data");for(let e=0;e<r.length;e++)if(l){if(0==i.querySelector(".personal-data input").checked){const e=document.createElement("div");return e.classList.add("validator-error"),e.textContent="Необходимо согласиться на обработку данных",l.insertAdjacentElement("afterend",e),void setTimeout(()=>e.remove(),2e3)}}i.appendChild(n),n.innerHTML='<img src = "./images/send-status/loadiiing.gif" width = "100" !important>';let a=i.querySelectorAll("input");const d=new FormData;a.forEach(e=>{("text"==e.type||"tel"==e.type||"checkbox"!==e.type&&e.checked)&&d.append(e.name,e.value)}),o(d).then(e=>{if(200!==e.status)throw new Error("status network");n.remove(),s(),i.querySelectorAll("input").forEach(e=>{e.value="",e.classList.remove("success")})}).catch(t=>{n.remove(),s(),e.querySelector(".form-content").innerHTML='<h4>Ошибка!</h4><p>Во время отправки формы возникала ошибка.<br>\n                Свяжитесь с администратором, либо позвоните нам по номеру:<br> <strong>+7 (800) 555-64-47</strong>\n                </p><button class="btn close-btn">OK</button>',console.error(t)})});const s=()=>{e.style.display="block",e.querySelector(".form-content").innerHTML='<h4>Спасибо!</h4><p>Ваша заявка отправлена.<br>\n        Мы свяжемся с вами в ближайшее время.</p><button class="btn close-btn">OK</button>',e.addEventListener("click",t=>{let n=t.target;n.closest(".form-content")&&!n.classList.contains("close-btn")||(e.style.display="none")})};(()=>{const e=document.createElement("style");e.textContent="\n        .validator-error {\n            margin-top: 15px;\n            font-size: 18px;\n            font-family:sans-serif;\n            color: red;\n        }\n        ",document.head.appendChild(e)})();const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e})};var i=()=>{class e{constructor({selector:e,pattern:t={},method:n}){this.form=document.querySelector(e),this.pattern=t,this.method=n,this.elementsForm=[...this.form.elements].filter(e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type),this.elementsButtons=[...this.form.elements].filter(e=>"button"==e.tagName.toLowerCase()||"button"==e.type),this.error=new Set}init(){this.applyStyle(),this.setPattern(),this.elementsForm.forEach(e=>e.addEventListener("change",this.checkIt.bind(this))),this.form.addEventListener("submit",e=>{this.elementsForm.forEach(e=>this.checkIt({target:e})),this.error.size&&e.preventDefault()})}isValid(e){const t={notEmpty:e=>""!==e.value.trim(),pattern:(e,t)=>t.test(e.value)};if(this.method){const n=this.method[e.id];if(n)return n.every(n=>t[n[0]](e,this.pattern[n[1]]))}else console.warn("Необходимо передать id полей ввода и метода этих полей!");return!0}checkIt(e){const t=e.target;this.isValid(t)?(this.showSucces(t),this.error.delete(t)):(this.showError(t),this.error.add(t)),this.error.size?this.disabled||this.elementsButtons.forEach(e=>{e.setAttribute("disabled","true")}):this.elementsButtons.forEach(e=>{e.disabled=!1})}showError(e){e.classList.remove("success"),e.classList.add("error")}showSucces(e){e.classList.remove("error"),e.classList.add("success")}applyStyle(){const e=document.createElement("style");e.textContent="\n        input.success {\n          border: 2px solid green !important\n        }\n        input.error {\n            border: 2px solid red !important\n        }\n        ",document.head.appendChild(e)}setPattern(){this.pattern.phone||(this.pattern.phone=/^\+?[78]([-()]*\d){10}$/),this.pattern.email||(this.pattern.email=/^\w+@\w+\.\w{2,}$/)}}const t=new e({selector:"#banner-form",pattern:{name:/^[А-Яа-яЁё\s]+$/,phone:/^\+?[78]\d{10}$/},method:{phone:[["notEmpty"],["pattern","phone"]],name:[["notEmpty"],["pattern","name"]]}}),n=new e({selector:"#card_order",pattern:{name:/^[А-Яа-яЁё\s]+$/,phone:/^\+?[78]\d{10}$/},method:{"callback_form-phone":[["notEmpty"],["pattern","phone"]],"callback_form-name":[["notEmpty"],["pattern","name"]]}}),s=new e({selector:"#footer_form",pattern:{phone:/^\+?[78]\d{10}$/},method:{"callback_footer_form-phone":[["notEmpty"],["pattern","phone"]]}}),o=new e({selector:"#form1",pattern:{name:/^[А-Яа-яЁё\s]+$/,phone:/^\+?[78]\d{10}$/},method:{"callback_form1-name":[["notEmpty"],["pattern","name"]],"callback_form1-phone":[["notEmpty"],["pattern","phone"]]}}),i=new e({selector:"#form2",pattern:{name:/^[А-Яа-яЁё\s]+$/,phone:/^\+?[78]\d{10}$/},method:{"callback_form2-name":[["notEmpty"],["pattern","name"]],"callback_form2-phone":[["notEmpty"],["pattern","phone"]]}});t.init(),n.init(),s.init(),o.init(),i.init()};var r=function(){document.querySelector("body").addEventListener("input",()=>{let e=event.target,t=e.id;(/name$/.test(t)||/message$/.test(t))&&(e.value=e.value.replace(/[^А-Яа-яёЁ\s]/gim,""))})};var l=()=>{const e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");t&&(e.addEventListener("click",()=>{t.style.display="block",e.remove()}),t.addEventListener("click",e=>{let n=e.target;n.closest(".form-content")&&!n.classList.contains("close-btn")||(t.style.display="none")}))};var a=()=>{new class{constructor({main:e,wrap:t,infinity:n=!1,position:s=0,slidesToShow:o=3,responsive:i=[]}){e&&t||console.warn("Необходимо 2 селектора main и wrap"),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.slidesToShow=o,this.options={position:s,infinity:n,widthSLide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=i}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next?this.controlSlider():(this.addArrow(),this.controlSlider()),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent=`\n            .glo-slider {\n                overflow: hidden !important;\n                position: relative;\n            }\n            .glo-slider__wrap {\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n            .glo-slider__item {\n                align-items: center;\n                justify-content: center;\n                flex: 0 0 ${this.options.widthSLide}% !important;\n                margin: auto 0 !important;\n            }\n        `,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.position>0||this.options.infinity)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSLide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSLide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.textContent="<",this.next.textContent=">",this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const e=document.createElement("style");e.textContent="\n            .glo-slider__prev {\n                position: absolute;\n                left: 10px;\n                top: 50%;\n                border: 10px solid #ffd11a;\n                background: #ffd11a;\n                border-radius: 20px;\n            }\n            .glo-slider__next {\n                position: absolute;\n                right: 10px;\n                top: 50%;\n                border: 10px solid #ffd11a;\n                background: #ffd11a;\n                border-radius: 20px;\n            }\n         \n        ",document.head.appendChild(e)}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),n=Math.max(...t),s=()=>{const s=document.documentElement.clientWidth;if(s<n)for(let e=0;e<t.length;e++)s<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSLide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSLide=Math.floor(100/this.slidesToShow),this.addStyle()};s(),window.addEventListener("resize",s)}}({main:"#services .wrapper",wrap:".services-slider",slidesToShow:3,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()};var d=()=>{const e=document.querySelectorAll(".main-slider .slide"),t=document.querySelector(".main-slider");(()=>{let n=document.createElement("ul");n.classList.add("slider-dots"),t.appendChild(n);for(let t=0;t<e.length;t++){let e=document.createElement("li");e.classList.add("slider-dot"),n.appendChild(e);let t=document.createElement("button");e.appendChild(t)}})();const n=document.createElement("style");n.textContent="\n        .slider-dots {\n            z-index: 1200;\n            background: transparent;\n        }     \n    ",document.head.appendChild(n);let s=document.querySelectorAll(".slider-dot");s[0].classList.add("slick-active");let o,i=0;const r=()=>{e[i].style.display="none",((e,t,n)=>{e[t].classList.remove(n)})(s,i,"slick-active"),++i>=e.length&&(i=0),e[i].style.display="flex",((e,t,n)=>{e[t].classList.add(n)})(s,i,"slick-active")};((e=3e3)=>{o=setInterval(r,e)})(3e3)};var c=()=>{const e=document.querySelector(".gallery-slider"),t=document.querySelectorAll(".gallery-slider .slide");e.style.position="relative";t.forEach(e=>{e.style.display="none"}),t[0].classList.add("slide_active");(()=>{let t=document.createElement("button"),n=document.createElement("button");t.innerHTML="<strong><</strong>",n.innerHTML="<strong>></strong>",t.className="glo-slider__prev",n.className="glo-slider__next",e.appendChild(t),e.appendChild(n);const s=document.createElement("style");s.textContent="\n            .glo-slider__prev {\n                position: absolute;\n                left: 10px;\n                top: 50%;\n                border: 10px solid #ffd11a;\n                background: #ffd11a;\n                border-radius: 20px;\n            }\n            .glo-slider__next {\n                position: absolute;\n                right: 10px;\n                top: 50%;\n                border: 10px solid #ffd11a;\n                background: #ffd11a;\n                border-radius: 20px;\n            }\n            .slide_active {\n                display:flex !important;\n            }\n            .slide_nonactive {\n                display:none;\n            }\n         \n        ",document.head.appendChild(s)})();(()=>{let n=document.createElement("ul");n.classList.add("slider-dots"),n.style.background="transparent",e.appendChild(n);for(let e=0;e<t.length;e++){let e=document.createElement("li");e.classList.add("slider-dot"),n.appendChild(e);let t=document.createElement("button");e.appendChild(t)}})();let n=document.querySelectorAll(".gallery-slider .slider-dot");n[0].classList.add("slick-active");let s,o=0;const i=(e,t,n)=>{e[t].classList.remove(n)},r=(e,t,n)=>{e[t].classList.add(n)},l=()=>{i(t,o,"slide_active"),i(n,o,"slick-active"),++o>=t.length&&(o=0),r(t,o,"slide_active"),r(n,o,"slick-active")},a=(e=3e3)=>{s=setInterval(l,e)};e.addEventListener("click",e=>{e.preventDefault();let s=e.target;s.closest(".glo-slider__next, .glo-slider__prev, .slider-dot")&&(i(t,o,"slide_active"),i(n,o,"slick-active"),s.closest(".glo-slider__prev")?o--:s.closest(".glo-slider__next")?o++:s.closest(".slider-dot")&&n.forEach((e,t)=>{e===s&&(o=t)}),o>=t.length&&(o=0),o<0&&(o=t.length-1),r(t,o,"slide_active"),r(n,o,"slick-active"))}),e.addEventListener("mouseover",e=>{(e.target.closest(".glo-slider__next")||e.target.closest(".glo-slider__prev")||e.target.closest(".slider-dot"))&&clearInterval(s)}),e.addEventListener("mouseout",e=>{(e.target.closest(".glo-slider__next")||e.target.closest(".glo-slider__prev")||e.target.closest(".slider-dot"))&&a()}),a()};var p=()=>{const e=document.getElementById("card_order"),t=document.getElementsByName("card-type"),n=document.getElementById("card_leto_schelkovo"),s=document.getElementById("card_leto_mozaika"),o=document.getElementById("price-total");let i=1;if(o){e.addEventListener("click",e=>{let t=e.target;"card-type"==t.name&&(l(),r(i)),t.closest(".club")&&r(i)});const r=()=>{s.checked&&a(i),n.checked&&d(i)},l=()=>{t.forEach(e=>{e.checked&&(i=e.value)})},a=()=>{switch(+i){case 1:o.textContent="1999";break;case 6:o.textContent="9900";break;case 9:o.textContent="13900";break;case 12:o.textContent="19900";break;default:o.textContent="1999"}},d=()=>{switch(+i){case 1:o.textContent="2999";break;case 6:o.textContent="14900";break;case 9:o.textContent="21900";break;case 12:o.textContent="24900";break;default:o.textContent="2999"}}}};(()=>{const e=document.querySelector("body"),t=document.querySelector(".clubs-list > ul");e.addEventListener("click",e=>{e.target.closest(".clubs-list")?t.style.display="block":t.style.display="none"})})(),s(),o(),i(),r(),l(),a(),d(),c(),p()}]);