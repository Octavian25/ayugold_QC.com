(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[19],{479:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return i}));var r=a(0),n=a.n(r),o=a(55),l=function(t){var e=t.input,a=t.label,r=t.type,o=(t.name,t.limit),l=t.readOnly,i=t.placeholder,s=(t.search,t.meta),c=s.touched,p=s.error,u=s.warning;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"",className:"text-black"},a),n.a.createElement("input",Object.assign({},e,{type:r,id:a,className:"form-control",maxLength:o,readOnly:l,placeholder:i,onKeyPress:function(t){"Enter"===t.key&&t.preventDefault()}})),c&&(p&&n.a.createElement("p",{className:"invalid-feedback"},p)||u&&n.a.createElement("p",null,u)))},i=function(t){var e=t.input,a=t.label,r=t.options,l=t.placeholder,i=(t.name,t.disabled),s=(t.value,t.readOnly),c=t.autoComplete,p=t.search,u=t.meta,h=u.touched,m=u.error,g=u.warning;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"",className:"text-black"},a),n.a.createElement(o.a,Object.assign({},e,{options:r,search:p,emptyMessage:"Tidak Ada Data",id:a,placeholder:l||"Silahkan Pilih",disabled:i,onKeyPress:function(t){"Enter"===t.key&&t.preventDefault()},autoComplete:c,readOnly:s})),h&&(m&&n.a.createElement("p",{className:"invalid-feedback"},m)||g&&n.a.createElement("p",null,g)))}},517:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return s}));var r=a(0),n=a.n(r),o=a(54),l=a.n(o),i=function(){return(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2)},s=function(t){var e=t.label;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null," ",e," "),n.a.createElement(l.a,{className:"form-control"}))}},551:function(t,e,a){t.exports=a(555)},552:function(t,e,a){"use strict";function r(t,e,a,r,n,o,l){try{var i=t[o](l),s=i.value}catch(c){return void a(c)}i.done?e(s):Promise.resolve(s).then(r,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,o){var l=t.apply(e,a);function i(t){r(l,n,o,i,s,"next",t)}function s(t){r(l,n,o,i,s,"throw",t)}i(void 0)}))}}a.d(e,"a",(function(){return n}))},555:function(t,e,a){var r=function(t){"use strict";var e=Object.prototype,a=e.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function i(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(w){i=function(t,e,a){return t[e]=a}}function s(t,e,a,r){var n=e&&e.prototype instanceof u?e:u,o=Object.create(n.prototype),l=new N(r||[]);return o._invoke=function(t,e,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return B()}for(a.method=n,a.arg=o;;){var l=a.delegate;if(l){var i=S(l,a);if(i){if(i===p)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=c(t,e,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(t,a,l),o}function c(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(w){return{type:"throw",arg:w}}}t.wrap=s;var p={};function u(){}function h(){}function m(){}var g={};g[n]=function(){return this};var f=Object.getPrototypeOf,d=f&&f(f(O([])));d&&d!==e&&a.call(d,n)&&(g=d);var y=m.prototype=u.prototype=Object.create(g);function v(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(n,o){function l(){return new e((function(r,l){!function r(n,o,l,i){var s=c(t[n],t,o);if("throw"!==s.type){var p=s.arg,u=p.value;return u&&"object"===typeof u&&a.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,l,i)}),(function(t){r("throw",t,l,i)})):e.resolve(u).then((function(t){p.value=t,l(p)}),(function(t){return r("throw",t,l,i)}))}i(s.arg)}(n,o,r,l)}))}return r=r?r.then(l,l):l()}}function S(t,e){var a=t.iterator[e.method];if(void 0===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=c(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var n=r.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[n];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:B}}function B(){return{value:void 0,done:!0}}return h.prototype=y.constructor=m,m.constructor=h,h.displayName=i(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,i(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},v(b.prototype),b.prototype[o]=function(){return this},t.AsyncIterator=b,t.async=function(e,a,r,n,o){void 0===o&&(o=Promise);var l=new b(s(e,a,r,n),o);return t.isGeneratorFunction(a)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},v(y),i(y,l,"Generator"),y[n]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=O,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(a,r){return l.type="throw",l.arg=t,e.next=a,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=t,l.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),E(a),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;E(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:O(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},t}(t.exports);try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}},570:function(t,e,a){"use strict";e.a=function(t){var e={};return t.tanggal||(e.tanggal="Tidak Boleh kosong"),t.supplier||(e.supplier="Tidak Boleh kosong"),t.noBon||(e.noBon="Tidak Boleh kosong"),e}},854:function(t,e,a){"use strict";a.r(e);var r=a(551),n=a.n(r),o=a(552),l=a(86),i=a(80),s=a(81),c=a(83),p=a(82),u=a(0),h=a.n(u),m=a(29),g=a(63),f=a(9),d=a.n(f),y=a(478),v=a(471),b=a(480),S=a(519),k=a(48),E=a(479),N=a(54),O=a.n(N),B=a(570),w=a(517),T=a(18),R=a(87),j=a(3),x=Object(u.lazy)((function(){return Promise.all([a.e(3),a.e(9)]).then(a.bind(null,516))})),I=Object(u.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(10)]).then(a.bind(null,698))})),_=Object(u.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(11)]).then(a.bind(null,699))})),C=Object(u.lazy)((function(){return a.e(12).then(a.bind(null,706))})),F=Object(u.lazy)((function(){return a.e(16).then(a.bind(null,700))})),P=Object(u.lazy)((function(){return a.e(14).then(a.bind(null,701))})),D=Object(u.lazy)((function(){return a.e(15).then(a.bind(null,702))})),J=Object(u.lazy)((function(){return a.e(13).then(a.bind(null,638))})),L=Object(u.lazy)((function(){return a.e(17).then(a.bind(null,639))})),A=Object(S.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),G=function(t){Object(c.a)(a,t);var e=Object(p.a)(a);function a(t){var r;Object(i.a)(this,a),(r=e.call(this,t)).setTotal=function(t){return function(e){localStorage.setItem([t],e.target.value),r.setTotalBayar()}},r.changeInput=function(t){return function(e){r.setState(Object(l.a)({},t,e.target.value))}};var n=new Date,o="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate());return r.state={listSupplier:[],tanggal:o,bonBayar:"",detail:"",tanggalInvoice:"",noPembayaran:"",supplier:"",hutangnya:[]},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(R.f)()),this.props.dispatch(Object(g.e)()),this.props.dispatch(Object(g.f)()),this.props.change("tanggal",w.b),this.props.change("totalBayar",this.props.totalBayar),this.props.change("totalBayarCash",this.props.totalBayarRp),this.setTotalBayar()}},{key:"handleSubmit",value:function(t){var e=this,a={kode_jenis:t.kodeBarang.split("|")[0],netto:t.netto,bruto:t.bruto,kadar_transaksi:t.kadarTransaksi},r={jenis:"CIOK",gross:t.bruto,harga:"-",kadar:t.kadarTransaksi,netto:parseFloat(t.netto).toFixed(3),pkg:"",gwpkg:""};this.props.dispatch(Object(T.t)());var n=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];n.push(r),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(n));var o=JSON.parse(localStorage.getItem("ciokTemp"))||[];o.push(a),localStorage.setItem("ciokTemp",JSON.stringify(o));var l=JSON.parse(localStorage.getItem("alatBayarCiok"))||[];l.push(a),localStorage.setItem("alatBayarCiok",JSON.stringify(l)),this.props.dispatch(Object(g.e)()),this.setTotalBayar(),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(T.k)())}))}},{key:"handleSubmit2",value:function(t){var e=this,a={kode_jenis:t.kodeBarang.split("|")[0],netto:t.netto,bruto:t.bruto,kadar_transaksi:t.kadarTransaksi},r={jenis:"RONGSOK",gross:t.bruto,harga:"-",kadar:t.kadarTransaksi,netto:parseFloat(t.netto).toFixed(3),pkg:"",gwpkg:""};this.props.dispatch(Object(T.t)());var n=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];n.push(r),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(n));var o=JSON.parse(localStorage.getItem("rongsokTemp"))||[];o.push(a),localStorage.setItem("rongsokTemp",JSON.stringify(o));var l=JSON.parse(localStorage.getItem("alatBayarRosok"))||[];l.push(a),localStorage.setItem("alatBayarRosok",JSON.stringify(l)),this.props.dispatch(Object(g.f)()),this.setTotalBayar(),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(T.k)())}))}},{key:"setCiok",value:function(){this.props.change("ciokBrutto",this.props.totalCiok),this.props.change("ciokNetto",this.props.totalCiok),this.setTotalBayar()}},{key:"setRongsok",value:function(){this.props.change("rongsokBruto",this.props.totalRongsok),this.props.change("rongsokNetto",this.props.totalRongsok),this.props.change("totalBayar",this.props.totalBayar)}},{key:"handleSubmitCash",value:function(t){var e=[],a={cash_rp:t.cash,harga_emas:t.harga,cash_netto:t.cashNetto},r={jenis:"TUNAI",gross:t.cash,harga:t.harga,kadar:"",netto:parseFloat(t.cashNetto).toFixed(3),pkg:"",gwpkg:""},n=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];n.push(r),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(n)),e.push(a),localStorage.setItem("totalTunaiRp",t.cashNetto),localStorage.setItem("alatBayarTunai",JSON.stringify(e)),this.setTotalBayar(),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Disimpan",showConfirmButton:!1,timer:1500})}},{key:"handleSubmitCashRp",value:function(t){var e={cash_rp:t.cash,harga_emas:t.harga,cash_netto:t.cashNetto},a=JSON.parse(localStorage.getItem("cashTempRp"))||[];a.push(e),localStorage.setItem("cashTempRp",JSON.stringify(a));var r=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))||[];r.push(e),localStorage.setItem("alatBayarTunaiRp",JSON.stringify(r)),this.props.dispatch(Object(k.i)()),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"handleSubmitTransfer",value:function(t){var e=[],a={harga_emas:t.harga,transfer_netto:t.transferNetto,transfer_rp:t.transfer,acc_from:t.asal,acc_to:t.tujuan,tanggal_transfer:t.tanggal},r={jenis:"TRANSFER",gross:t.transfer,harga:t.harga,kadar:"",netto:parseFloat(t.transferNetto).toFixed(3),pkg:"",gwpkg:""},n=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];n.push(r),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(n)),e.push(a),localStorage.setItem("totalTrfRp",t.transferNetto),localStorage.setItem("alatBayarTrf",JSON.stringify(e)),this.setTotalBayar(),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Disimpan",showConfirmButton:!1,timer:1500})}},{key:"handleSubmitTransferRp",value:function(t){console.log(t);var e={harga_emas:t.harga,transfer_netto:t.transferNetto,transfer_rp:t.transfer,acc_from:t.asal,acc_to:t.tujuan,tanggal_transfer:t.tanggal},a=JSON.parse(localStorage.getItem("transferTempRp"))||[];a.push(e),localStorage.setItem("transferTempRp",JSON.stringify(a));var r=JSON.parse(localStorage.getItem("alatBayarTrfRp"))||[];r.push(e),localStorage.setItem("alatBayarTrfRp",JSON.stringify(r)),this.props.dispatch(Object(k.j)()),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"setTotalBayar",value:function(){var t=localStorage.getItem("totalTunaiRp")||0,e=localStorage.getItem("totalTrfRp")||0,a=localStorage.getItem("totalCiok")||0,r=localStorage.getItem("totalRongsok")||0,n=this.props.tambahan||0;this.props.change("totalCash",t),this.props.change("totalTransfer",e),this.props.change("totalCiok",a),this.props.change("totalRongsok",r),this.props.change("totalBayar",(parseFloat(t)+parseFloat(e)+parseFloat(a)+parseFloat(r)+n).toFixed(3)),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"getHutang",value:function(){var t=Object(o.a)(n.a.mark((function t(e){var a=this;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({supplier:e}),console.log(e),Object(j.b)("trx-supplier/get/hutang-titipan-supplier/".concat(this.props.tanggal,"&").concat(e)).then((function(t){a.setState({hutangnya:t.data})})).then((function(){var t=a.state.hutangnya.map((function(t){return t.hutang_netto})).reduce((function(t,e){return t+e}),0),e=a.state.hutangnya.map((function(t){return t.hutang_rp})).reduce((function(t,e){return t+e}),0),r=a.state.hutangnya.map((function(t){return{no_faktur:t.no_ref,keterangan:t.keterangan,putus_titip:0,harga_emas:9e5,putus_titip_netto:0}}));localStorage.setItem("listHutang",JSON.stringify(r)),a.props.change("totalHutangRP",e),a.props.change("totalHutangGr",t)}));case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return h.a.createElement("div",{className:"col-lg-12",style:{color:"black"}},h.a.createElement("div",{className:"col-lg-12"},h.a.createElement("div",{className:"row"},"BARANG"===this.props.jenisTransaksi?h.a.createElement(h.a.Fragment,null,h.a.createElement(u.Suspense,{fallback:h.a.createElement(O.a,{width:"100%",height:50})},h.a.createElement(C,{onSubmit:function(e){return t.handleSubmitCash(e)}}),h.a.createElement(F,{onSubmit:function(e){return t.handleSubmitTransfer(e)},asal:"PEMBAYARAN"})),h.a.createElement(u.Suspense,{fallback:h.a.createElement(O.a,{width:"100%",height:50})},h.a.createElement(P,{totalCiok:this.props.totalCiok,totalBrutoCiok:this.props.totalBrutoCiok})),h.a.createElement(u.Suspense,{fallback:h.a.createElement(O.a,{width:"100%",height:50})},h.a.createElement(D,{totalRongsok:this.props.totalRongsok,totalBrutoRongsok:this.props.totalBrutoRongsok}))):h.a.createElement(h.a.Fragment,null,h.a.createElement(u.Suspense,{fallback:h.a.createElement(O.a,{width:"100%",height:50})},h.a.createElement(J,{onSubmit:function(e){return t.handleSubmitCashRp(e)}}),h.a.createElement(L,{onSubmit:function(e){return t.handleSubmitTransferRp(e)},asal:"PEMBAYARAN"}))))),h.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"col-lg-12"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-3 col-lg-3"},h.a.createElement(y.a,{name:"tanggal",label:"Tanggal",type:"date",component:E.a,defaultValue:this.state.tanggal,onChange:this.changeInput("tanggalInvoice")})),h.a.createElement("div",{className:"col-md-3 col-lg-3"},h.a.createElement(y.a,{name:"supplier",label:"Supplier",className:"form-control",component:E.b,options:this.props.supplier.map((function(t){return{value:t.kode_supplier,name:t.nama_supplier}})),defaultValue:"DEFAULT | DEFAULT",onChange:function(e){return t.getHutang(e)}})),h.a.createElement("div",{className:"col-md-3 col-lg-3"},h.a.createElement(y.a,{name:"noBon",label:"Bon Bayar",type:"txt",component:E.a,onChange:this.changeInput("noPembayaran")})),h.a.createElement("div",{className:"col-md-3 col-lg-3"},h.a.createElement(y.a,{name:"detail",label:"Detail",type:"text",component:E.a})),h.a.createElement("div",{className:"col-md-6 col-lg-6"},h.a.createElement(y.a,{name:"totalHutangRP",label:"Total Hutang RP",type:"text",component:E.a,readOnly:!0})),h.a.createElement("div",{className:"col-md-6 col-lg-6"},h.a.createElement(y.a,{name:"totalHutangGr",label:"Total Hutang Gr",type:"text",component:E.a,readOnly:!0})),"BARANG"===this.props.jenisTransaksi?h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"col-lg-12"},h.a.createElement("div",{className:"card"},h.a.createElement("div",{className:"row p-3"},h.a.createElement("div",{className:"col-lg-4 col-md-4"},h.a.createElement("div",{className:"form-group"},h.a.createElement(y.a,{name:"denda",label:"Denda",type:"number",component:E.a,defaultValue:0,onChange:this.setTotal("denda"),onBlur:this.setTotal("denda")}))),h.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},h.a.createElement("div",{className:"form-group"},h.a.createElement(y.a,{name:"totalCash",label:"Denda",type:"number",component:E.a}))),h.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},h.a.createElement("div",{className:"form-group"},h.a.createElement(y.a,{name:"totalTransfer",label:"Denda",type:"number",component:E.a}))),h.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},h.a.createElement("div",{className:"form-group"},h.a.createElement(y.a,{name:"totalCiok",label:"Denda",type:"number",component:E.a}))),h.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},h.a.createElement("div",{className:"form-group"},h.a.createElement(y.a,{name:"totalRongsok",label:"Denda",type:"number",component:E.a}))))))):null,h.a.createElement("div",{className:"col-lg-12"},h.a.createElement("div",{className:"card"},h.a.createElement("div",{className:"row p-3"},h.a.createElement("div",{className:"BARANG"===this.props.jenisTransaksi?"col-lg-4 col-md-4":"col-lg-4 col-md-4 d-none"},h.a.createElement("div",{className:"form-group"},h.a.createElement(y.a,{name:"totalBayar",label:"Total Bayar",type:"number",component:E.a}))),h.a.createElement("div",{className:"BARANG"!==this.props.jenisTransaksi?"col-lg-4 col-md-4":"col-lg-4 col-md-4 d-none"},h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{htmlFor:""},"Total Bayar Rp"),h.a.createElement(y.a,Object.assign({name:"totalBayarCash",label:"Total Rp",type:"telp",component:"input",className:"form-control",onBlur:this.props.change("totalBayarCash",this.props.totalBayarRp)},A))))))),h.a.createElement("div",{className:"col-lg-12 col-md-12"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-lg-6"},h.a.createElement("div",{className:"text-left"})),h.a.createElement("div",{className:"col-lg-6"},h.a.createElement("div",{className:"text-right"},h.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?h.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",h.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))),h.a.createElement(x,{content:"CIOK"===this.props.tipeBayarModal?h.a.createElement(u.Suspense,{fallback:h.a.createElement(O.a,{width:"100%",height:50,count:5})},h.a.createElement(I,{onSubmit:function(e){return t.handleSubmit(e)},from:"CK",data:this.props.tampungCiok,onSend:this.props.onSend})):h.a.createElement(u.Suspense,{fallback:h.a.createElement(O.a,{width:"100%",height:50,count:5})},h.a.createElement(_,{onSubmit:function(e){return t.handleSubmit2(e)},from:"RSK",data:this.props.tampungRongsok,onSend:this.props.onSend})),title:"CIOK"===this.props.tipeBayarModal?"Tambah Data Ciok":"Tambah Data Rongsok"}))}}]),a}(u.Component);G=Object(v.a)({form:"PembayaranSupplierSimpan",enableReinitialize:!0,validate:B.a})(G);var H=Object(b.a)("PembayaranSupplierSimpan");e.default=Object(m.b)((function(t){var e=H(t,"harga","cash","transfer","discount","bonus","denda","totalCash","totalTransfer","totalCiok","totalRongsok","tanggal"),a=e.harga,r=e.cash,n=e.transfer,o=e.discount,l=e.bonus,i=e.denda,s=e.totalCash,c=e.totalTransfer,p=e.totalCiok,u=e.totalRongsok,h=e.tanggal,m=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):0,g=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))?JSON.parse(localStorage.getItem("alatBayarTunaiRp")):0,f=void 0===l?0:l,d=void 0===i?0:i,y=parseFloat(void 0===o?0:o)-parseFloat(f)+parseFloat(d),v=void 0===g[0]?0:g[0].cash_netto,b=void 0===m[0]?0:m[0].transfer_netto;return{tanggal:h,supplier:t.provinsi.supplier,tipeBayarModal:t.provinsi.tipeBayarModal,onSend:t.provinsi.onSend,cashNetto:(parseFloat(r)/parseFloat(a)).toFixed(3),transferNetto:(parseFloat(n)/parseFloat(a)).toFixed(3),totalBayar:(parseFloat(s)+parseFloat(c)+parseFloat(p)+parseFloat(u)+parseFloat(y)).toFixed(3),tambahan:y,totalBayarRp:parseFloat(v)+parseFloat(b),dataHutangSupplier:t.provinsi.dataHutangSupplier}}))(G)}}]);
//# sourceMappingURL=19.240dcfe3.chunk.js.map