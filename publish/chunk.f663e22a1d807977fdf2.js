(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{243:function(e,t,i){var r=i(256);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i(183).default)("02acad6a",r,!0,{})},245:function(e,t,i){"use strict";var r=i(29),s=i(47),n=i(88);var o={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0},productionDeadline:{type:Number,default:0}},computed:{deadlineStr(){const e=this.shippingLine,t=e.posting_deadline&&e.posting_deadline.working_days||e.delivery_time&&e.delivery_time.working_days;let i=e.posting_deadline?e.posting_deadline.days:0;return e.delivery_time&&(i+=e.delivery_time.days),i+=this.productionDeadline,i>1?`${Object(s.a)(r.Sd)} ${i} `+Object(s.a)(t?r.Zd:r.Z).toLowerCase():Object(s.a)(1===i?r.Rd:e.pick_up?"Retire hoje":r.Sc)},freightValueStr(){const{shippingLine:e}=this,t="number"==typeof e.total_price?e.total_price:e.price;return t?Object(n.a)(t):Object(s.a)(e.pick_up?r.sb:r.tb)}}},a=(i(255),i(56)),d=Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shipping-line"},[i("strong",{staticClass:"mr-2"},[e._v(" "+e._s(e.deadlineStr)+" ")]),i("span",{staticClass:"mr-2"},[e._v(" "+e._s(e.freightValueStr)+" ")]),e.shippingLine.delivery_instructions?i("small",[e._v(" "+e._s(e.shippingLine.delivery_instructions)+" ")]):e._e()])}),[],!1,null,null,null);t.a=d.exports},255:function(e,t,i){"use strict";i(243)},256:function(e,t,i){(t=i(182)(!0)).push([e.i,".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{display:block;display:-webkit-box;line-height:var(--line-height-sm);-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:var(--text-muted)}","",{version:3,sources:["ShippingLine.scss"],names:[],mappings:"AAAA,sBAAsB,oBAAoB,CAAC,eAAe,CAAC,oBAAoB,oBAAoB,CAAC,qBAAqB,aAAa,CAAC,mBAAmB,CAAC,iCAAiC,CAAC,oBAAoB,CAAC,2BAA2B,CAAC,eAAe,CAAC,uBAAuB",file:"ShippingLine.scss",sourcesContent:[".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{display:block;display:-webkit-box;line-height:var(--line-height-sm);-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:var(--text-muted)}"]}]),e.exports=t},297:function(e,t,i){var r=i(362);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i(183).default)("60cdd274",r,!0,{})},361:function(e,t,i){"use strict";i(297)},362:function(e,t,i){(t=i(182)(!0)).push([e.i,".order{min-height:300px}","",{version:3,sources:["EcOrder.scss"],names:[],mappings:"AAAA,OAAO,gBAAgB",file:"EcOrder.scss",sourcesContent:[".order{min-height:300px}"]}]),e.exports=t},381:function(e,t,i){"use strict";i.r(t);var r=i(120),s=i(1),n=i(57),o={name:"EcOrder",components:{EcOrderInfo:i(271).a},props:{order:{type:Object,required:!0},skipDataLoad:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>n.a}},data(){return{isReady:this.skipDataLoad,orderBody:{_id:"",...this.order}}},computed:{localOrder:{get(){return this.orderBody},set(e){this.orderBody=e,this.$emit("update:order",e)}}},methods:{fetchOrder(){const e=`/orders/${this.orderBody._id}.json`;(this.ecomPassport.checkLogin()?this.ecomPassport.requestApi(e):Object(s.g)({url:e})).then((({data:e})=>{this.localOrder=e,this.isReady=!0}))}},watch:{"order._id"(e){e&&e!==this.orderBody._id&&(this.orderBody=this.order)},"orderBody._id"(e){e&&!this.skipDataLoad&&this.fetchOrder()}},created(){this.skipDataLoad||(this.order._id?this.fetchOrder():this.order.number&&this.ecomPassport.fetchOrdersList().then((e=>{this.localOrder=e.find((({number:e})=>e===this.order.number))||{}})))}},a=(i(361),i(56)),d={name:"order",components:{EcOrder:Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{staticClass:"order"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[e.isReady?i("ec-order-info",{key:"info",attrs:{order:e.localOrder,"skip-first-data-load":""},on:{"update:order":function(t){e.localOrder=t}}}):i("div",{key:"loading"},[i("div",{staticClass:"spinner-border",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])])])],1)],1)}),[],!1,null,null,null).exports},computed:{...Object(r.c)(["orders"]),number(){const e=this.$route.params.number;return/^[0-9]+$/.test(e)&&parseInt(e,10)},order(){const e=this.orders.find((({_id:e,number:t})=>this.number===t||this.$route.params.number===e));if(!e){const{number:e}=this;return e?{_id:this.$route.params.id,number:e}:{_id:this.$route.params.number}}return e}}},l=Object(a.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"order"}},[i("ec-order",{attrs:{order:e.order}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);