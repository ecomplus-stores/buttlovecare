(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{184:function(t,e,i){"use strict";i(196)},185:function(t,e,i){"use strict";e.a=(t,e)=>new Promise((i=>{const s="object"==typeof window&&window.storefront;if(s){const a=()=>{let a=s.info&&s.info[t];return!!(a&&(e&&(a=a[e]),a&&Object.keys(a).length))&&(i(a),!0)};a()||s.on(`info:${t}`,a)}}))},195:function(t,e,i){"use strict";var s={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((({path:t})=>t===this.href))))}}},a=i(56),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},196:function(t,e,i){var s=i(221);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(183).default)("fd5c67d2",s,!0,{})},197:function(t,e,i){"use strict";i(13);var s=i(30),a=i(97),r=i(71);var n={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[s.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(a.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:i}=this;if(i)return i;const s="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return s?s.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:i}=this;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:i}=this.$el,s=((t,e,i,s)=>{let a,r;for(const n in s){const o=s[n];if(void 0!==o&&t[n]){if(void 0!==r)if(null===o){if(r>=e)continue}else if(o<e||o-50<=i||null!==r&&o>r)continue;a=n,r=o}}return a})(this.src,t,i,this.containerBreakpoints),a=this.src[s],{url:r,size:n}=a||this.defaultImgObj;if(e=r,t&&n&&this.canCalcHeight){const[e,i]=n.split("x").map((t=>parseInt(t,10)));i&&(this.height=`${t>=e?i:t*i/e}px`)}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/"+(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(r.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,i="IMG"===t.tagName?t:t.lastChild;i.style.opacity=0,i.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const i=document.createElement("IMG");i.src=e,t.parentNode.insertBefore(i,t.nextSibling)},i.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=i.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},o=(i(184),i(56)),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,a=t.type;return i("source",{key:e,attrs:{srcset:s,type:a}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=l.exports},198:function(t,e,i){"use strict";var s=i(29),a=i(47),r=i(48),n=i(49),o=i(88),l=i(185);const c=(t,e)=>{const{type:i,value:s}=e;if(s)return"percentage"===i?t*(100-s)/100:t-s};var d={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""},canShowPriceOptions:{type:Boolean,default:!0}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText,pointsProgramName:null,pointsMinPrice:0,earnPointsFactor:0}},computed:{i19asOf:()=>Object(a.a)(s.o),i19from:()=>Object(a.a)(s.xb),i19interestFree:()=>Object(a.a)(s.Kb),i19of:()=>Object(a.a)(s.sc),i19to:()=>Object(a.a)(s.Jd),i19upTo:()=>Object(a.a)(s.Sd),i19youEarn:()=>Object(a.a)(s.ae),price(){const t=Object(r.a)(this.product);return this.extraDiscount.value?c(t,this.extraDiscount):t},comparePrice(){return Object(n.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(r.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const e=Object(r.a)(this.product);for(let i=0;i<t.length;i++){if(Object(r.a)({...this.product,...t[i]})>e)return!0}}return!1},priceWithDiscount(){return this.canShowPriceOptions&&c(this.price,this.discount)},installmentValue(){if(this.canShowPriceOptions&&this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:o.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){this.canShowPriceOptions&&(this.discountOption?this.updateDiscount(this.discountOption):Object(l.a)("apply_discount").then((t=>{t.available_extra_discount&&(this.extraDiscount=t.available_extra_discount)})),this.installmentsOption?this.updateInstallments(this.installmentsOption):Object(l.a)("list_payments").then((t=>{this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option);const e=t.loyalty_points_programs;this.isLiteral&&e&&this.$nextTick((()=>{for(const t in e){const i=e[t];if(i&&i.earn_percentage>0){this.pointsMinPrice=i.min_subtotal_to_earn,this.pointsProgramName=i.name,this.earnPointsFactor=i.earn_percentage/100;break}}}))})))}},_=(i(184),i(56)),u=Object(_.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[i("small",[t._v(" "+t._s(t.i19from)+" ")]),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),i("small",[t._v(" "+t._s(t.i19to)+" ")])]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),i("strong",{staticClass:"prices__value"},[t.hasVariedPrices?i("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.earnPointsFactor>0&&!(t.pointsMinPrice>t.price)?i("div",{key:"points",staticClass:"prices__points"},[i("i",{staticClass:"fas fa-check-circle"}),t._v(" "+t._s(t.i19youEarn)+" "),i("span",[t._v(" +"+t._s((t.earnPointsFactor*t.price).toFixed(1))+" ")]),i("em",[t._v(t._s(t.pointsProgramName))])]):t._e(),t.installmentsNumber>1&&t.installmentValue?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?i("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),i("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?i("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),i("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[i("small",[t._v(" "+t._s(t.i19asOf)+" ")]),i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=u.exports},221:function(t,e,i){(e=i(182)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"empty.scss"}]),t.exports=e},253:function(t,e,i){"use strict";var s={name:"ItemCustomizations",props:{item:{type:Object,required:!0}}},a=i(56),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item.customizations&&t.item.customizations.length?i("div",{staticClass:"item-customizations small"},t._l(t.item.customizations,(function(e){var s=e._id,a=e.label,r=e.option;return i("div",{key:"cs-"+s},[i("span",{staticClass:"text-muted"},[t._v(" "+t._s(a)+": ")]),t._v(" "+t._s(r.text)+" ")])})),0):t._e()}),[],!1,null,null,null);e.a=r.exports},258:function(t,e,i){var s=i(266);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(183).default)("47fe50f4",s,!0,{})},265:function(t,e,i){"use strict";i(258)},266:function(t,e,i){(e=i(182)(!0)).push([t.i,".summary__item{display:flex;align-items:flex-start;overflow-x:hidden;margin-bottom:.5rem}.summary__item a{color:inherit}.summary__item picture{flex:0 0 70px;width:70px;height:auto;margin-right:.5rem}.summary__item picture img{border-radius:var(--border-radius)}.summary__item small{line-height:1.3;display:inline-block}.summary__amount{margin:1rem 0 1.5rem;padding:.75rem 0;border-top:1px dotted var(--gray)}.summary__amount:last-child{margin-bottom:0;padding-bottom:0}.summary__amount__row{display:flex;justify-content:space-between;align-items:center;margin-top:.25rem}.summary__amount__row>span{font-weight:300}.summary__amount__row>span small{display:block;line-height:1.15;color:var(--gray)}.summary__amount__row--total{margin-top:.5rem;font-size:1.25rem}.summary__amount__row--total>div{font-weight:700}.summary__amount__row--total strong{color:var(--secondary)}.summary .prices{text-align:right}","",{version:3,sources:["EcSummary.scss"],names:[],mappings:"AAAA,eAAe,YAAY,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,iBAAiB,aAAa,CAAC,uBAAuB,aAAa,CAAC,UAAU,CAAC,WAAW,CAAC,kBAAkB,CAAC,2BAA2B,kCAAkC,CAAC,qBAAqB,eAAe,CAAC,oBAAoB,CAAC,iBAAiB,oBAAoB,CAAC,gBAAgB,CAAC,iCAAiC,CAAC,4BAA4B,eAAe,CAAC,gBAAgB,CAAC,sBAAsB,YAAY,CAAC,6BAA6B,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,2BAA2B,eAAe,CAAC,iCAAiC,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,6BAA6B,gBAAgB,CAAC,iBAAiB,CAAC,iCAAiC,eAAe,CAAC,oCAAoC,sBAAsB,CAAC,iBAAiB,gBAAgB",file:"EcSummary.scss",sourcesContent:[".summary__item{display:flex;align-items:flex-start;overflow-x:hidden;margin-bottom:.5rem}.summary__item a{color:inherit}.summary__item picture{flex:0 0 70px;width:70px;height:auto;margin-right:.5rem}.summary__item picture img{border-radius:var(--border-radius)}.summary__item small{line-height:1.3;display:inline-block}.summary__amount{margin:1rem 0 1.5rem;padding:.75rem 0;border-top:1px dotted var(--gray)}.summary__amount:last-child{margin-bottom:0;padding-bottom:0}.summary__amount__row{display:flex;justify-content:space-between;align-items:center;margin-top:.25rem}.summary__amount__row>span{font-weight:300}.summary__amount__row>span small{display:block;line-height:1.15;color:var(--gray)}.summary__amount__row--total{margin-top:.5rem;font-size:1.25rem}.summary__amount__row--total>div{font-weight:700}.summary__amount__row--total strong{color:var(--secondary)}.summary .prices{text-align:right}"]}]),t.exports=e},271:function(t,e,i){"use strict";var s=i(29),a=i(47),r=i(88),n=i(50),o=i(1),l=i(57),c=i(10),d=i(73),_=i(245),u=i(272),m={name:"EcOrderInfo",components:{ShippingLine:_.a,EcSummary:u.a},props:{order:{type:Object,required:!0},isNew:Boolean,skipDataLoad:Boolean,skipFirstDataLoad:Boolean,skipCustomerUpdate:Boolean,accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"},ecomCart:{type:Object,default:()=>c.a},ecomPassport:{type:Object,default:()=>l.a}},data(){return{isLoaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order,canReopenOrder:!1}},computed:{i19buyAgain:()=>Object(a.a)(s.v),i19cancelOrder:()=>Object(a.a)(s.B),i19codeCopied:()=>Object(a.a)(s.M),i19copyCode:()=>Object(a.a)(s.V),i19copyErrorMsg:()=>Object(a.a)(s.W),i19doPaymentMsg:()=>Object(a.a)(s.eb),i19freight:()=>Object(a.a)(s.wb),i19login:()=>Object(a.a)(s.Tb),i19loginForOrderDetailsMsg:()=>Object(a.a)(s.Vb),i19myOrders:()=>Object(a.a)(s.ec),i19notes:()=>Object(a.a)(s.oc),i19of:()=>Object(a.a)(s.sc),i19orderConfirmationMsg:()=>Object(a.a)(s.zc),i19orderNumber:()=>Object(a.a)(s.Bc),i19printBillet:()=>Object(a.a)(s.Nc),i19redirectToPayment:()=>Object(a.a)(s.Vc),i19referenceCode:()=>Object(a.a)(s.Xc),i19reopenOrder:()=>Object(a.a)(s.dd),i19shippingAddress:()=>Object(a.a)(s.zd),i19transactionCode:()=>Object(a.a)(s.Md),i19ticketCode:()=>Object(a.a)(s.Id),i19trackDelivery:()=>Object(a.a)(s.Ld),i19zipCode:()=>Object(a.a)(s.be),localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},hasManyTransactions(){const{transactions:t}=this.localOrder;return t&&t.length>1},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},canShowShippingAddress(){const{localOrder:t,shippingAddress:e}=this;return!(!e||!e.street)&&!/(retira|pick\s?up|e-?mail)/i.test(t.shipping_method_label)},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this;if(t.payments_history){let e;if(t.payments_history.forEach((t=>{t&&(!e||!t.date_time||t.date_time>=e.date_time)&&(e=t)})),e)return e.status}const i=t.financial_status&&t.financial_status.current;return i||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null},statusEntries(){const t=[];let e=[];return["payments_history","fulfillments"].forEach((t=>{Array.isArray(this.localOrder[t])&&(e=e.concat(this.localOrder[t]))})),e.length&&(e=e=e.sort(((t,e)=>t.date_time&&e.date_time?t.date_time>e.date_time?-1:1:0)),e.forEach(((i,s)=>{s>0&&i.status===e[s-1].status||t.push(i)}))),t},isAuthenticated(){return this.ecomPassport.checkAuthorization()}},methods:{i19FinancialStatus:t=>Object(a.a)(s.a)[t],i19FulfillmentStatus:t=>Object(a.a)(s.b)[t],i19OrderStatus:t=>Object(a.a)(s.e)[t],formatMoney:r.a,formatDate:n.a,formatTime(t){const e=Date.parse(t);return new Date(e).toLocaleTimeString()},toClipboard(t){this.$copyText(t).then((()=>{this.$toast({title:this.i19codeCopied,body:t,variant:"success",delay:2e3})}),(e=>{console.error(e),this.$toast({title:"Oops",body:`${this.i19copyErrorMsg}: <i>${t}</i>`,variant:"warning",delay:3e3})}))},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e.checkAuthorization()&&e.requestApi("/me.json").then((({data:i})=>{const s=i.orders?i.orders.slice(-300):[],a={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach((e=>{t[e]&&(a[e]=t[e])}));const r=s.findIndex((({_id:e,number:i})=>e===t._id||i===t.number));r>-1?Object.assign(s[r],a):s.push(a),e.requestApi("/me.json","patch",{orders:s})}))},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:e}=t;c.a.clear(),e.forEach(((t,i)=>{c.a.addItem(t,!1),i+1===e.length&&(c.a.save(),window.location=this.cartUrl)}))}},toggle(){this.isUpdating=!0;const t="open"===this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};l.a.requestApi(`/orders/${this.order._id}.json`,"patch",t).then((()=>{this.localOrder={...this.localOrder,...t}})).finally((()=>{this.isUpdating=!1}))}},watch:{isLoaded:{handler(t){if(t&&this.isAuthenticated&&"cancelled"===this.status){const{items:t}=this.localOrder;if(t&&t.length){const e=t.map((t=>t.product_id)),i=new d.a;i.setPageSize(e.length).setProductIds(e).fetch(!0).then((()=>{for(let e=0;e<t.length;e++){const s=t[e],a=i.getItems().find((({_id:t})=>t===s.product_id));if(a){if(s.variation_id&&a.variations){const t=a.variations.find((({sku:t})=>t===s.sku));if(t&&t.quantity>=s.quantity)continue}if(a.quantity>=s.quantity)continue}return void(this.canReopenOrder=!1)}this.canReopenOrder=!0})).catch(console.error)}}},immediate:!0}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t=`/orders/${this.order._id}.json`,e=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(o.g)({url:t})).then((({data:t})=>{this.localOrder={...this.localOrder,...t}})).catch((t=>{console.error(t)}));this.reloadInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout((()=>{e().finally((()=>{this.isLoaded=!0}))}),this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},p=(i(359),i(56)),f=Object(p.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order-info py-4"},[t.isNew?i("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.isLoaded?i("div",{key:"loaded"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-5 col-lg-3"},[i("h2",{staticClass:"order-info__number"},[i("small",[t._v(t._s(t.i19orderNumber)+":")]),t._v(" #"),i("span",[t._v(t._s(t.localOrder.number))])]),i("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast"}},[t.isUpdating||"cancelled"!==t.status?t._e():i("p",{staticClass:"order-info__cancelled h3"},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" "),i("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.canReopenOrder?i("button",{staticClass:"order-info__toggle btn",class:"cancelled"===t.status?"btn-success":"btn-info",on:{click:t.toggle}},[i("i",{staticClass:"fas fa-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()])],1)]),t.statusEntries.length?i("ul",{staticClass:"order-info__timeline"},t._l(t.statusEntries,(function(e,s){return i("li",{key:"status-"+s,staticClass:"order-info__timeline-status",class:"order-info__timeline-status--"+e.status},[e.date_time?i("div",{staticClass:"order-info__timeline-date"},[t._v(" "+t._s(t.formatDate(e.date_time))+" "+t._s(t.formatTime(e.date_time))+" ")]):t._e(),t._v(" "+t._s(t.i19FinancialStatus(e.status)||t.i19FulfillmentStatus(e.status))+" ")])})),0):t._e(),t.accountOrdersUrl?i("a",{staticClass:"order-info__orders-link d-none d-md-block btn btn-light",attrs:{href:t.accountOrdersUrl}},[i("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1),i("div",{staticClass:"col-md-7 col-lg-9"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("article",[t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?i("div",{staticClass:"order-info__billet"},[i("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),t.transaction.banking_billet.code?[i("p",[t._v(" "+t._s(t.i19ticketCode)+": "),i("br"),i("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),i("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[i("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?i("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[i("i",{staticClass:"fas fa-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?i("div",{staticClass:"order-info__redirect"},[i("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),i("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[i("i",{staticClass:"fas fa-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),i("div",{staticClass:"order-info__details"},[t._t("payment",(function(){return[i("div",{staticClass:"order-info__payment card"},[i("div",{staticClass:"card-header"},[i("span",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[i("i",{staticClass:"fas fa-money-check mr-1"}),t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")])]),t._l(t.localOrder.transactions,(function(e){return i("div",{key:"t-"+e._id,staticClass:"card-body"},[i("p",{staticClass:"order-info__payment-value"},[e.payment_method.name?[t._v(" "+t._s(e.payment_method.name)+": ")]:t.localOrder.payment_method_label?[t._v(" "+t._s(t.localOrder.payment_method_label)+": ")]:t._e(),e.installments&&e.installments.value?i("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):i("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")]),t.hasManyTransactions&&e.status?[i("br"),i("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19FinancialStatus(e.status.current))+" ")])]:t._e()],2),e.notes?i("p",{staticClass:"order-info__payment-notes alert alert-warning",attrs:{role:"alert"},domProps:{innerHTML:t._s(e.notes)}}):t._e(),e.credit_card?i("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?i("span",[e.credit_card.company?t._e():i("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?i("div",{staticClass:"order-info__transaction-code"},[i("small",[t._v(t._s(t.i19transactionCode))]),i("br"),i("code",[t._v(t._s(e.intermediator.transaction_code))]),i("br"),i("button",{staticClass:"btn btn-sm btn-light",on:{click:function(){return t.toClipboard(e.intermediator.transaction_code)}}},[i("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]):t._e(),e.intermediator.transaction_reference?i("div",{staticClass:"order-info__transaction-reference"},[i("small",[t._v(t._s(t.i19referenceCode))]),i("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)]}),null,{order:t.localOrder,transaction:t.transaction,financialStatus:t.financialStatus}),t._t("shipping",(function(){return[i("div",{staticClass:"order-info__shipping"},[t._l(t.localOrder.shipping_lines,(function(e){return i("div",{key:"s-"+e._id,staticClass:"order-info__shipping-freight card"},[i("div",{staticClass:"card-header"},[t.fulfillmentStatus?i("span",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[i("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):[i("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]],2),i("div",{staticClass:"card-body"},[e.app?i("span",[t._v(" "+t._s(e.app.label)+" ")]):t._e(),i("shipping-line",{attrs:{"shipping-line":e}}),e.tracking_codes?i("div",{staticClass:"order-info__shipping-tracking"},[i("hr"),i("div",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19trackDelivery)+": ")]),t._l(e.tracking_codes,(function(e,s){return i("samp",{key:"track-"+s},[e.link?i("a",{attrs:{href:""+e.link,target:"_blank"}},[t._v(" "+t._s(e.code)+" ")]):i("span",[t._v(" "+t._s(e.code)+" ")])])}))],2):t._e()],1)])})),t.canShowShippingAddress?i("div",{staticClass:"order-info__shipping-address card"},[i("div",{staticClass:"card-header"},[i("i",{staticClass:"fas fa-map-marked-alt mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),i("address",{staticClass:"card-body mb-0"},[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),t.shippingAddress.complement?[t._v(" , "+t._s(t.shippingAddress.complement)+" ")]:t._e(),t.shippingAddress.near_to?[i("br"),t._v(t._s(t.shippingAddress.near_to)+" ")]:t._e(),i("br"),t._l(["borough","city","province_code"],(function(e,s){return t.shippingAddress[e]?i("span",{key:e},[t._v(" "+t._s(t.shippingAddress[e]+(2===s?".":","))+" ")]):t._e()})),i("br"),i("span",[t._v(" "+t._s(t.i19zipCode)+": "),i("samp",[t._v(t._s(t.shippingAddress.zip))])])],2)]):t._e()],2)]}),null,{order:t.localOrder,shippingAddress:t.shippingAddress,fulfillmentStatus:t.fulfillmentStatus}),t._t("notes",(function(){return[t.localOrder.notes?i("div",{staticClass:"order-info__notes card"},[i("div",{staticClass:"card-header"},[i("span",[t._v(" "+t._s(t.i19notes)+" ")])]),i("div",{staticClass:"card-body"},[i("span",[t._v(" "+t._s(t.localOrder.notes)+" ")])])]):t._e()]}),null,{order:t.localOrder})],2),t.isAuthenticated?t._e():i("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19loginForOrderDetailsMsg)+" "),i("br"),i("a",{staticClass:"btn btn-primary mt-2",attrs:{href:t.accountOrdersUrl}},[i("i",{staticClass:"fas fa-user mr-1"}),t._v(" "+t._s(t.i19login)+" ")])])],2)]),t.localOrder.amount?i("div",{staticClass:"col-lg-6"},[i("div",{staticClass:"order-info__summary card"},[i("div",{staticClass:"card-body"},[i("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isUpdating||"open"!==t.status||t.fulfillmentStatus?t._e():i("button",{staticClass:"order-info__toggle btn btn-danger",on:{click:t.toggle}},[i("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")]),t._t("buy",(function(){return[i("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[i("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])]}))],2):t._e()])])])]):i("div",{key:"loading"},[i("div",{staticClass:"spinner-border",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?i("a",{staticClass:"order-info__orders-link d-md-none btn btn-light",attrs:{href:t.accountOrdersUrl}},[i("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);e.a=f.exports},272:function(t,e,i){"use strict";var s=i(29),a=i(47),r=i(99),n=i(27),o=i(48),l=i(88),c=i(97),d=i(195),_=i(197),u=i(198),m=i(253),p={name:"EcSummary",components:{ALink:d.a,APicture:_.a,APrices:u.a,ItemCustomizations:m.a},props:{amount:{type:Object,required:!0},items:Array,buyer:Object,shippingAddress:Object,canShowPriceOptions:Boolean,paidInAdvance:{type:Number,default:0}},computed:{i19buyer:()=>Object(a.a)(s.y),i19contactPhone:()=>Object(a.a)(s.R),i19discount:()=>Object(a.a)(s.bb),i19docNumber:()=>Object(a.a)(s.fb),i19freebie:()=>Object(a.a)(s.vb),i19freight:()=>Object(a.a)(s.wb),i19myAccount:()=>Object(a.a)(s.dc),i19subtotal:()=>Object(a.a)(s.Gd),i19summary:()=>Object(a.a)(s.Hd),i19toPay:()=>"A pagar",i19total:()=>Object(a.a)(s.Kd),amountToPay(){return this.amount.total-this.paidInAdvance},buyerName(){if(!this.buyer)return"";const{name:t}=this.buyer;return`${t.given_name} ${t.middle_name||""} ${t.family_name}`},buyerPhone(){return Object(r.a)(this.buyer)}},methods:{getName:n.a,getPrice:o.a,formatMoney:l.a,getImg:t=>Object(c.a)(t,null,"small")}},f=(i(265),i(56)),A=Object(f.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"summary"},[i("h5",{staticClass:"summary__title"},[t._v(" "+t._s(t.i19summary)+" ")]),t._t("list",(function(){return[t.items?i("div",{staticClass:"summary__list"},t._l(t.items,(function(e){return e.quantity>0?i("div",{key:e._id,staticClass:"summary__item"},[t.getImg(e)?i("a-picture",{attrs:{src:t.getImg(e).url,alt:t.getImg(e).alt||e.name}}):t._e(),i("div",[i("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(e.quantity)+" ")]),Array.isArray(e.flags)&&e.flags.includes("freebie")?[i("s",[t._v(t._s(t.formatMoney(t.getPrice(e))))]),i("small",{staticClass:"text-muted"},[i("i",{staticClass:"fas fa-gift ml-2 mr-1"}),t._v(" "+t._s(t.i19freebie)+" ")])]:[t._v(" "+t._s(t.formatMoney(t.getPrice(e)))+" ")],i("br"),e.slug?i("a-link",{attrs:{href:"/"+e.slug,target:"_blank"}},[i("small",[t._v(t._s(t.getName(e)))])]):i("small",[t._v(" "+t._s(t.getName(e))+" ")]),i("item-customizations",{attrs:{item:e}})],2)],1):t._e()})),0):t._e()]})),t._t("more-offers"),t._t("amount",(function(){return[i("div",{staticClass:"summary__amount"},[i("div",{staticClass:"summary__amount__row"},[i("span",[t._v(t._s(t.i19subtotal))]),i("div",[t._v(t._s(t.formatMoney(t.amount.subtotal)))])]),i("div",{staticClass:"summary__amount__row"},[i("span",[t._v(" "+t._s(t.i19freight)+" "),t.shippingAddress?i("small",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),t._v(" "+t._s(t.shippingAddress.city)+" "+t._s(t.shippingAddress.province_code)+" ")],2):t._e()]),i("div",[t._v(t._s(t.formatMoney(t.amount.freight)))])]),t.amount.discount?i("div",{staticClass:"summary__amount__row"},[i("span",[t._v(t._s(t.i19discount))]),i("div",[t._v(t._s(t.formatMoney(t.amount.discount)))])]):t._e(),t.paidInAdvance>0?i("div",{staticClass:"summary__amount__row"},[i("span",[t._v(t._s(t.i19total))]),i("div",[t._v(t._s(t.formatMoney(t.amount.total)))])]):t._e(),t._t("amount-custom"),i("div",{staticClass:"summary__amount__row summary__amount__row--total"},[i("span",[t._v(t._s(t.paidInAdvance?t.i19toPay:t.i19total))]),i("a-prices",{attrs:{product:{price:t.amountToPay},"discount-option":{value:t.amount.discount},"is-literal":!0,"is-amount-total":!0,"can-show-price-options":t.canShowPriceOptions}})],1)],2)]})),t._t("default"),t._t("buyer",(function(){return[t.buyer?i("div",{staticClass:"summary__buyer"},[i("h5",[t._v(t._s(t.i19buyer))]),i("p",[t._v(" "+t._s(t.buyerName)+" "),i("br"),i("small",[t._v(t._s(t.i19docNumber)+":")]),t._v(" "+t._s(t.buyer.doc_number)+" "),i("br"),i("small",[t._v(t._s(t.i19contactPhone)+":")]),t._v(" "+t._s(t.buyerPhone)+" ")]),i("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.$emit("click:account")}}},[i("i",{staticClass:"fas fa-pencil-alt mr-1"}),t._v(" "+t._s(t.i19myAccount)+" ")])]):t._e()]}))],2)}),[],!1,null,null,null);e.a=A.exports},296:function(t,e,i){var s=i(360);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(183).default)("0cb08df4",s,!0,{})},359:function(t,e,i){"use strict";i(296)},360:function(t,e,i){(e=i(182)(!0)).push([t.i,".order-info__number{color:var(--secondary);margin-top:var(--spacer-2);font-weight:var(--font-light)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);font-size:var(--font-size-sm);display:block}.order-info__timeline{list-style:none;display:flex;flex-wrap:nowrap;overflow-x:auto;padding:0;margin:var(--spacer-4) 0;font-size:var(--font-size-sm)}@media (min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{padding:var(--spacer-2);margin-right:var(--spacer-1);min-width:165px;border:solid var(--border-color);border-width:0 0 5px}@media (min-width:768px){.order-info__timeline-status{padding-left:var(--spacer-3);margin-right:0;margin-bottom:var(--spacer-1);min-width:0;border-bottom-width:0;border-left-width:5px}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{font-size:85%;color:var(--text-muted)}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{font-weight:var(--font-bold);color:var(--info)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{text-align:center;font-size:var(--font-size-lg);margin-bottom:var(--spacer-5)}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again,.order-info__toggle{margin-top:var(--spacer-3);margin-right:var(--spacer-3)}.order-info__cancelled{color:var(--danger)}","",{version:3,sources:["EcOrderInfo.scss"],names:[],mappings:"AAAA,oBAAoB,sBAAsB,CAAC,0BAA0B,CAAC,6BAA6B,CAAC,yBAAyB,4BAA4B,CAAC,0BAA0B,iBAAiB,CAAC,6BAA6B,CAAC,aAAa,CAAC,sBAAsB,eAAe,CAAC,YAAY,CAAC,gBAAgB,CAAC,eAAe,CAAC,SAAS,CAAC,wBAAwB,CAAC,6BAA6B,CAAC,yBAAyB,sBAAsB,aAAa,CAAC,CAAC,6BAA6B,uBAAuB,CAAC,4BAA4B,CAAC,eAAe,CAAC,gCAAgC,CAAC,oBAAoB,CAAC,yBAAyB,6BAA6B,4BAA4B,CAAC,cAAc,CAAC,6BAA6B,CAAC,WAAW,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,CAAC,mFAAmF,2BAA2B,CAAC,sCAAsC,wBAAwB,CAAC,yHAAyH,0BAA0B,CAAC,2EAA2E,2BAA2B,CAAC,2BAA2B,aAAa,CAAC,uBAAuB,CAAC,uCAAuC,0BAA0B,CAAC,iFAAiF,6BAA6B,CAAC,8DAA8D,4BAA4B,CAAC,iBAAiB,CAAC,uCAAuC,oBAAoB,CAAC,8CAA8C,iBAAiB,CAAC,4HAA4H,mBAAmB,CAAC,gGAAgG,oBAAoB,CAAC,iBAAiB,iBAAiB,CAAC,6BAA6B,CAAC,6BAA6B,CAAC,yBAAyB,gBAAgB,CAAC,0BAA0B,CAAC,qBAAqB,uBAAuB,CAAC,6BAA6B,CAAC,2CAA2C,0BAA0B,CAAC,4BAA4B,CAAC,uBAAuB,mBAAmB",file:"EcOrderInfo.scss",sourcesContent:[".order-info__number{color:var(--secondary);margin-top:var(--spacer-2);font-weight:var(--font-light)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);font-size:var(--font-size-sm);display:block}.order-info__timeline{list-style:none;display:flex;flex-wrap:nowrap;overflow-x:auto;padding:0;margin:var(--spacer-4) 0;font-size:var(--font-size-sm)}@media (min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{padding:var(--spacer-2);margin-right:var(--spacer-1);min-width:165px;border:solid var(--border-color);border-width:0 0 5px}@media (min-width:768px){.order-info__timeline-status{padding-left:var(--spacer-3);margin-right:0;margin-bottom:var(--spacer-1);min-width:0;border-bottom-width:0;border-left-width:5px}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{font-size:85%;color:var(--text-muted)}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{font-weight:var(--font-bold);color:var(--info)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{text-align:center;font-size:var(--font-size-lg);margin-bottom:var(--spacer-5)}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again,.order-info__toggle{margin-top:var(--spacer-3);margin-right:var(--spacer-3)}.order-info__cancelled{color:var(--danger)}"]}]),t.exports=e}}]);