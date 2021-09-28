(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{243:function(e,i,t){var s=t(256);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t(183).default)("02acad6a",s,!0,{})},245:function(e,i,t){"use strict";var s=t(29),r=t(47),n=t(88);var a={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0},productionDeadline:{type:Number,default:0}},computed:{deadlineStr(){const e=this.shippingLine,i=e.posting_deadline&&e.posting_deadline.working_days||e.delivery_time&&e.delivery_time.working_days;let t=e.posting_deadline?e.posting_deadline.days:0;return e.delivery_time&&(t+=e.delivery_time.days),t+=this.productionDeadline,t>1?`${Object(r.a)(s.Sd)} ${t} `+Object(r.a)(i?s.Zd:s.Z).toLowerCase():Object(r.a)(1===t?s.Rd:e.pick_up?"Retire hoje":s.Sc)},freightValueStr(){const{shippingLine:e}=this,i="number"==typeof e.total_price?e.total_price:e.price;return i?Object(n.a)(i):Object(r.a)(e.pick_up?s.sb:s.tb)}}},o=(t(255),t(56)),d=Object(o.a)(a,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"shipping-line"},[t("strong",{staticClass:"mr-2"},[e._v(" "+e._s(e.deadlineStr)+" ")]),t("span",{staticClass:"mr-2"},[e._v(" "+e._s(e.freightValueStr)+" ")]),e.shippingLine.delivery_instructions?t("small",[e._v(" "+e._s(e.shippingLine.delivery_instructions)+" ")]):e._e()])}),[],!1,null,null,null);i.a=d.exports},255:function(e,i,t){"use strict";t(243)},256:function(e,i,t){(i=t(182)(!0)).push([e.i,".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{display:block;display:-webkit-box;line-height:var(--line-height-sm);-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:var(--text-muted)}","",{version:3,sources:["ShippingLine.scss"],names:[],mappings:"AAAA,sBAAsB,oBAAoB,CAAC,eAAe,CAAC,oBAAoB,oBAAoB,CAAC,qBAAqB,aAAa,CAAC,mBAAmB,CAAC,iCAAiC,CAAC,oBAAoB,CAAC,2BAA2B,CAAC,eAAe,CAAC,uBAAuB",file:"ShippingLine.scss",sourcesContent:[".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{display:block;display:-webkit-box;line-height:var(--line-height-sm);-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:var(--text-muted)}"]}]),e.exports=i},386:function(e,i,t){"use strict";t.r(i);var s=t(120),r=t(10),n=t(57),a=t(181),o={name:"confirmation",components:{EcOrderInfo:t(271).a},data:()=>({canUpsertCart:!0}),computed:{...Object(s.c)(["orders","customer"]),orderId(){return this.$route.params.id},order:{get(){return this.orders.find((({_id:e})=>e===this.orderId))||{_id:this.orderId}},set(e){if(e&&e._id===this.orderId){const i=this.orders.concat(),t=i.find((({_id:i})=>i===e._id));t?Object.assign(t,e):i.push(e),this.setOrders(i),this.$route.params.json||this.$router.push({params:{json:encodeURIComponent(JSON.stringify(e))}})}}}},methods:{...Object(s.d)(["addOrder","setOrders","resetCart"]),...Object(s.b)(["saveCustomer"]),handleUpsertCart(){if(this.canUpsertCart){this.canUpsertCart=!1;const{status:e}=this.order;e&&"cancelled"!==e&&(r.a.data.completed=!0,this.orderId&&(r.a.data.orders||(r.a.data.orders=[]),r.a.data.orders.push(this.orderId)),Object(a.c)().then(this.resetCart))}}},created(){const{customer:e}=this;n.a.checkAuthorization()||e.main_email&&e.doc_number&&n.a.fetchLogin(e.main_email,e.doc_number).then((()=>{this.saveCustomer({ecomPassport:n.a}),this.handleUpsertCart()}))},mounted(){n.a.checkAuthorization()&&this.handleUpsertCart()}},d=t(56),l=Object(d.a)(o,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"confirmation"}},[t("ec-order-info",{attrs:{order:e.order,isNew:!0},on:{"update:order":function(i){e.order=i}}})],1)}),[],!1,null,null,null);i.default=l.exports}}]);