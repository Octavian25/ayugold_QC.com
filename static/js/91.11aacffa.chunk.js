(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[91,176],{1186:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a(81),i=a(83),o=a(82),s=a(0),c=a.n(s),l=a(478),u=a(471),p=a(29),d=a(567),m=a.n(d),h=a(483),f=a.n(h),v=a(509),g=a.n(v),b=a(508),E=a.n(b),k=a(62),N=a.n(k),O=a(55),_=a(39),A=a(191),S=a(46),T=a(477),y=a(3),R=a(48),F=a(513),C=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,i=e.readOnly,o=e.meta,s=o.touched,l=o.error,u=o.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},a),c.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:i})),s&&(l&&c.a.createElement("p",{className:"invalid-feedback"},l)||u&&c.a.createElement("p",null,u)))},j=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold_QC.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://188.166.254.162:4002/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,x=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).disabledButton=function(e){e.target.disabled=!0},r.nextStep=function(){var e=r.state.step;0===e&&r.setState({step:e+1,step2:"row",step1:"row d-none"}),r.props.dispatch(Object(S.h)())},r.prevStep=function(){var e=r.state.step;1===e&&r.setState({step:e-1,step2:"row d-none",step1:"row"})},r.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"no_bon",text:"Nomor Bon"},{dataField:"kode_customer",text:"Customer"},{dataField:"keterangan",text:"Keterangan"},{dataField:"total_bruto",text:"Total Bruto"},{dataField:"total_netto",text:"Total Netto"},{dataField:"bon_rp",text:"Bon RP"},{dataField:"titip_gr",text:"Titip Gr"},{dataField:"titip_rp",text:"Titip Rp"}],data:[{tanggal:"23/11/2020"}],step:0,step1:"row",step2:"row d-none",step3:"row d-none",listSales:[],listCustomer:[]},r}return Object(r.a)(a,[{key:"updateButton",value:function(e){switch(e){case"PENJUALAN":this.props.dispatch(Object(_.l)());break;case"RETURN PENJUALAN":this.props.dispatch(Object(_.m)());break;case"PEMBAYARAN PER BON":this.props.dispatch(Object(_.j)());break;case"TOLAKAN CUSTOMER":this.props.dispatch(Object(_.o)());break;case"TITIP GR CUSTOMER":this.props.dispatch(Object(_.n)());break;case"PENJUALAN LM":this.props.dispatch(Object(_.i)());break;case"PEMBELIAN LM":this.props.dispatch(Object(_.k)());break;default:console.log("ERROR")}}},{key:"kirimvalidasi",value:function(e){var t=this;console.log("BERHASIL");var a={trx_customer:JSON.parse(localStorage.getItem("FakturTerpilih_kirim"))||[]};switch(e){case"PENJUALAN":Object(y.d)("validate-customer/validate",a).then((function(){return Object(A.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(_.l)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("FakturTerpilih_kirim")})).catch((function(e){return Object(A.c)("Gagal Validasi, Check Koneksi Anda, Detial : ".concat(e.response.data))}));break;case"RETURN PENJUALAN":Object(y.d)("validate-customer/validate",a).then((function(){return Object(A.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(_.m)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(A.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"PEMBAYARAN PER BON":Object(y.d)("validate-customer/validate",a).then((function(){return Object(A.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(_.j)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(A.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"TOLAKAN PEMBAYARAN CUSTOMER":Object(y.d)("validate-customer/validate",a).then((function(){return Object(A.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(_.m)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(A.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"TITIP GR CUSTOMER":Object(y.d)("validate-customer/validate",a).then((function(){return Object(A.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(_.n)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("FakturTerpilih_kirim")})).catch((function(e){return Object(A.c)("Gagal Validasi, Check Koneksi Anda, Detial : ".concat(e.response.data))}));break;case"PENJUALAN LM":N.a.put(j+"cst/dc/lm",a).then((function(){return Object(A.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(_.i)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(A.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"PEMBELIAN LM":N.a.put(j+"cst/dc/lm",a).then((function(){return Object(A.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(_.k)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(A.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"TRANSFER BALANCE":Object(y.d)("validate-customer/validate",a).then((function(){return Object(A.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(_.q)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("FakturTerpilih_kirim")})).catch((function(e){return Object(A.c)("Gagal Validasi, Check Koneksi Anda, Detial : ".concat(e.response.data))}));break;default:console.log("ERROR")}}},{key:"changeTransaksi",value:function(){switch(this.state.tipeTransaksi){case"PENJUALAN":this.props.dispatch(Object(_.l)(this.state.kode_customer,this.state.tanggal));break;case"RETURN PENJUALAN":this.props.dispatch(Object(_.m)(this.state.kode_customer,this.state.tanggal));break;case"PEMBAYARAN PER BON":this.props.dispatch(Object(_.j)(this.state.kode_customer,this.state.tanggal));break;case"TOLAKAN PEMBAYARAN CUSTOMER":this.props.dispatch(Object(_.o)(this.state.kode_customer,this.state.tanggal));break;case"TOLAKAN RETURN CUSTOMER":this.props.dispatch(Object(_.p)());break;case"TITIP GR CUSTOMER":this.props.dispatch(Object(_.n)(this.state.kode_customer,this.state.tanggal));break;case"PENJUALAN LM":this.props.dispatch(Object(_.i)());break;case"PEMBELIAN LM":this.props.dispatch(Object(_.k)());break;case"TRANSFER BALANCE":this.props.dispatch(Object(_.q)(this.state.kode_customer,this.state.tanggal));break;default:console.log("ERROR")}}},{key:"componentDidMount",value:function(){localStorage.setItem("FakturTerpilih_kirim","[]"),localStorage.setItem("FakturTerpilih","[]"),this.props.dispatch(Object(R.h)())}},{key:"onSubmitToko",value:function(e){this.props.change("namaToko",e)}},{key:"render",value:function(){var e=this,t=this.props.listCustomer.map((function(e){return{value:e.kode_customer,name:e.nama_customer}})),a={mode:"checkbox",clickToSelect:!0,onSelect:function(e,t,a,n){console.log(e.noFaktur);var r=JSON.parse(localStorage.getItem("FakturTerpilih"))||[],i=JSON.parse(localStorage.getItem("FakturTerpilih_kirim"))||[],o={tanggal:e.tanggal,no_bon:e.no_bon,no_trx:e.no_trx,kode_customer:e.kode_customer,keterangan:e.keterangan,total_bruto:e.total_bruto,total_netto:e.total_netto,bon_rp:e.bon_rp,titip_gr:e.titip_gr,titip_rp:e.titip_rp},s={no_trx:e.no_trx,keterangan:e.keterangan};if(t){var c=r.findIndex((function(t,a){return t.no_bon===e.no_bon})),l=i.findIndex((function(t,a){return t.no_bon===e.no_bon}));c<0?(r.push(o),i.push(s)):(r.splice(c,1),i.splice(l,1)),localStorage.setItem("FakturTerpilih",JSON.stringify(r)),localStorage.setItem("FakturTerpilih_kirim",JSON.stringify(i))}else{var u=r.findIndex((function(t,a){return t.no_bon===e.no_bon})),p=r.findIndex((function(t,a){return t.no_bon===e.no_bon}));r.splice(u,1),i.splice(p,1),localStorage.setItem("FakturTerpilih",JSON.stringify(r)),localStorage.setItem("FakturTerpilih_kirim",JSON.stringify(r))}},onSelectAll:function(e,t,a){var n=[],r=[];t.forEach((function(e){var t={tanggal:e.tanggal,no_bon:e.no_bon,no_trx:e.no_trx,kode_customer:e.kode_customer,keterangan:e.keterangan,total_bruto:e.total_bruto,total_netto:e.total_netto,bon_rp:e.bon_rp,titip_gr:e.titip_gr,titip_rp:e.titip_rp},a={no_trx:e.no_trx,keterangan:e.keterangan};n.push(t),r.push(a)})),e?(localStorage.setItem("FakturTerpilih",JSON.stringify(n)),localStorage.setItem("FakturTerpilih_kirim",JSON.stringify(r))):(localStorage.removeItem("FakturTerpilih"),localStorage.removeItem("FakturTerpilih_kirim"))}};return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement(T.default,{title:"Validasi Customer"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(m.a,{steps:[{title:"Pilih Data"},{title:"Validasi Data"}],activeStep:this.state.step})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step1},c.a.createElement("div",{className:"col-lg-3 mb-3"},c.a.createElement("label",{htmlFor:""},"Jenis Transaksi"),c.a.createElement(l.a,{name:"tipeTransaksi",label:"Dari",component:"select",className:"form-control",onChange:function(t){return e.setState({tipeTransaksi:t.target.value})}},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),c.a.createElement("option",{value:"PENJUALAN",key:"PENJUALAN"},"PENJUALAN"),c.a.createElement("option",{value:"RETURN PENJUALAN",key:"RETURN PENJUALAN"},"RETURN PENJUALAN"),c.a.createElement("option",{value:"PEMBAYARAN PER BON",key:"PEMBAYARAN PER BON"},"PEMBAYARAN PER BON"),c.a.createElement("option",{value:"TOLAKAN PEMBAYARAN CUSTOMER",key:"TOLAKAN PEMBAYARAN CUSTOMER"},"TOLAKAN CUSTOMER"),c.a.createElement("option",{value:"TITIP GR CUSTOMER",key:"TITIP GR CUSTOMER"},"TITIP CUSTOMER"),c.a.createElement("option",{value:"TRANSFER BALANCE",key:"TRANSFER BALANCE"},"TRANSFER BALANCE"))),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Nama Customer"),c.a.createElement(O.a,{options:t,search:!0,placeholder:"Silahkan Pilih",onChange:function(t){return e.setState({kode_customer:t})}})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(l.a,{name:"tanggal",label:"Tanggal Transaksi",component:C,type:"date",onChange:function(t){return e.setState({tanggal:t.target.value})}})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.changeTransaksi()}},c.a.createElement("i",{className:"fa fa-eye"})," Lihat Data"))),c.a.createElement("div",{className:"col-lg-12 mt-3"},c.a.createElement(F.a,{keyField:"no_bon",data:this.props.listValidasiCustomer,columns:this.state.columns,search:!0,striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:E()(),selectRow:a})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.nextStep()}},"Next",c.a.createElement("i",{className:"fa fa-chevron-right ml-3"}))))),c.a.createElement("div",{className:this.state.step2},c.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.listDataSelectedValidasiSupplier?c.a.createElement(g.a,{keyField:"noFaktur",data:this.props.listDataSelectedValidasiSupplier,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement(f.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:E()()})))})):c.a.createElement(f.a,{keyField:"noFaktur",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.prevStep()}},c.a.createElement("i",{className:"fa fa-chevron-left mr-3"}),"Kembali"))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.kirimvalidasi(e.state.tipeTransaksi)}},c.a.createElement("i",{className:"fa fa-check mr-3"}),"VALIDASI"))))))))))))}}]),a}(s.Component);x=Object(u.a)({form:"validasiCustomer",enableReinitialize:!0})(x),t.default=Object(p.b)((function(e){return{listValidasiCustomer:e.provinsi.listValidasiCustomer,listDataSelectedValidasiSupplier:e.provinsi.listDataSelectedValidasiSupplier,listCustomer:e.provinsi.customer}}),null)(x)},477:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a(81),i=a(83),o=a(82),s=a(0),c=a.n(s),l=a(481),u=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"card-header mb-3",style:{fontSize:30,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#ffffff"}},c.a.createElement("div",{className:"row my-auto"},c.a.createElement("div",{className:"col-lg-10 my-auto"},c.a.createElement("h4",{style:{fontSize:25,color:"#ffffff"}},this.props.title)),c.a.createElement("div",{className:"col-lg-2 text-right my-auto"},c.a.createElement(l.a,{id:"reload",type:"dark",effect:"solid"},c.a.createElement("span",null,"Reload")),c.a.createElement("button",{"data-tip":!0,"data-for":"reload",className:"btn btn-success btn-small btn-circle my-auto",onClick:function(){return window.location.reload()}},c.a.createElement("i",{className:"fa fa-retweet"})))))}}]),a}(s.Component);t.default=u},478:function(e,t,a){"use strict";var n=a(13),r=a.n(n),i=a(193),o=a.n(i),s=a(40),c=a.n(s),l=a(0),u=a.n(l),p=a(2),d=a.n(p),m=a(53),h=a.n(m),f=a(28),v=a.n(f),g=a(29),b=function(e,t,a,n){var i=t.value;return"checkbox"===e?r()({},t,{checked:!!i}):"radio"===e?r()({},t,{checked:n(i,a),value:a}):"select-multiple"===e?r()({},t,{value:i||[]}):"file"===e?r()({},t,{value:i||void 0}):t};var E=a(190),k=function(e,t){if(Object(E.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,i=n.value,o=n.checked,s=n.files,c=a.dataTransfer;return"checkbox"===r?!!o:"file"===r?s||c&&c.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):i}return e},N="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,O=function(e,t){var a=t.name,n=t.parse,r=t.normalize,i=k(e,N);return n&&(i=n(i,a)),r&&(i=r(a,i)),i},_=a(12),A=a(84),S=function(e,t,a){return Object(A.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},T=["_reduxForm"],y=function(e){return e&&"object"===typeof e},R=function(e){return e&&"function"===typeof e},F=function(e){y(e)&&R(e.preventDefault)&&e.preventDefault()},C=function(e,t){if(y(e)&&y(e.dataTransfer)&&R(e.dataTransfer.getData))return e.dataTransfer.getData(t)},j=function(e,t,a){y(e)&&y(e.dataTransfer)&&R(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var x=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.parse,s=a.normalize,c=a.onChange,l=a._reduxForm,u=a.value,p=O(t,{name:n,parse:o,normalize:s}),d=!1;if(c)if(!N&&Object(E.a)(t))c(r()({},t,{preventDefault:function(){return d=!0,F(t)}}),p,u,n);else{var m=c(t,p,u,n);N&&(d=m)}d||(i(l.change(n,p)),l.asyncValidate&&l.asyncValidate(n,p,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.onFocus,s=a._reduxForm,c=!1;o&&(N?c=o(t,n):o(r()({},t,{preventDefault:function(){return c=!0,F(t)}}),n)),c||i(s.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.parse,s=a.normalize,c=a.onBlur,l=a._reduxForm,u=a._value,p=a.value,d=O(t,{name:n,parse:o,normalize:s});d===u&&void 0!==u&&(d=p);var m=!1;c&&(N?m=c(t,d,p,n):c(r()({},t,{preventDefault:function(){return m=!0,F(t)}}),d,p,n)),m||(i(l.blur(n,d)),l.asyncValidate&&l.asyncValidate(n,d,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,i=a.value;j(t,"text",null==i?"":i),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.onDrop,s=a._reduxForm,c=a.value,l=C(t,"text"),u=!1;o&&o(r()({},t,{preventDefault:function(){return u=!0,F(t)}}),l,c,n),u||(i(s.change(n,l)),F(t))},e}c()(n,a);var i=n.prototype;return i.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~T.indexOf(n)&&!t(a.props[n],e[n])})))},i.getRenderedComponent=function(){return this.ref.current},i.render=function(){var t=this.props,a=t.component,n=t.forwardRef,i=t.name,o=t._reduxForm,s=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,v()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),c=function(e,t,a){var n=e.getIn,i=e.toJS,o=e.deepEqual,s=a.asyncError,c=a.asyncValidating,l=a.onBlur,u=a.onChange,p=a.onDrop,d=a.onDragStart,m=a.dirty,h=a.dispatch,f=a.onFocus,g=a.form,E=a.format,k=a.initial,N=(a.parse,a.pristine),O=a.props,_=a.state,A=a.submitError,S=a.submitFailed,T=a.submitting,y=a.syncError,R=a.syncWarning,F=(a.validate,a.value),C=a._value,j=(a.warn,v()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),x=y||s||A,P=R,D=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(F,E);return{input:b(j.type,{name:t,onBlur:l,onChange:u,onDragStart:d,onDrop:p,onFocus:f,value:D},C,o),meta:r()({},i(_),{active:!(!_||!n(_,"active")),asyncValidating:c,autofilled:!(!_||!n(_,"autofilled")),dirty:m,dispatch:h,error:x,form:g,initial:k,warning:P,invalid:!!x,pristine:N,submitting:!!T,submitFailed:!!S,touched:!(!_||!n(_,"touched")),valid:!x,visited:!(!_||!n(_,"visited"))}),custom:r()({},j,{},O)}}(e,i,r()({},s,{form:o.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=c.custom,p=v()(c,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof a){var d=p.input;p.meta;return Object(l.createElement)(a,r()({},d,{},u))}return Object(l.createElement)(a,r()({},p,{},u))},n}(l.Component);return n.propTypes={component:S,props:d.a.object},Object(g.b)((function(e,n){var r=n.name,i=n._reduxForm,o=i.initialValues,s=(0,i.getFormState)(e),c=a(s,"initial."+r),l=void 0!==c?c:o&&a(o,r),u=a(s,"values."+r),p=a(s,"submitting"),d=function(e,t){var a=_.a.getIn(e,t);return a&&a._error?a._error:a}(a(s,"syncErrors"),r),m=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(s,"syncWarnings"),r),h=t(u,l);return{asyncError:a(s,"asyncErrors."+r),asyncValidating:a(s,"asyncValidating")===r,dirty:!h,pristine:h,state:a(s,"fields."+r),submitError:a(s,"submitErrors."+r),submitFailed:a(s,"submitFailed"),submitting:p,syncError:d,syncWarning:m,initial:l,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},P=a(194),D=a.n(P),I=function(e,t,a,n,r,i){if(i)return e===t},w=function(e,t,a){var n=D()(e.props,t,I),r=D()(e.state,a,I);return!n||!r},B=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},L=a(119);var U=function(e){var t=x(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=u.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var i=n.props._reduxForm.getValues();return r(t,n.value,a(i,e,t),i,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}c()(n,e);var i=n.prototype;return i.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},i.shouldComponentUpdate=function(e,t){return w(this,e,t)},i.UNSAFE_componentWillReceiveProps=function(e){var t=B(this.props,this.props.name),a=B(e,e.name);t===a&&_.a.deepEqual(this.props.validate,e.validate)&&_.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},i.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},i.getRenderedComponent=function(){return h()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},i.render=function(){return Object(l.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},o()(n,[{key:"name",get:function(){return B(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(l.Component);return n.propTypes={name:d.a.string.isRequired,component:S,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(L.b)(n)};t.a=U(_.a)},513:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(483),o=a.n(i),s=a(509),c=a.n(s),l=a(508),u=a.n(l),p=a(5),d=a(515),m=a.n(d);var h=function(e){return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:m.a,width:"250",height:"250",alt:"Empty"}),r.a.createElement("h5",null,e.text),void 0!==e.link?r.a.createElement(p.b,{to:e.link,replace:!0},r.a.createElement("button",{className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-chevron-left mr-2"}),e.location)):null))},f=s.Search.SearchBar,v=s.CSVExport.ExportCSVButton;t.a=function(e){var t=e.textEmpty,a=e.handleClick,n=e.tambahData,i=e.expandRow,s=e.selectRow,l=e.exportCSV,p=e.link,d=e.location;return r.a.createElement(c.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},(function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-left"},r.a.createElement(f,e.searchProps))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-right"},n&&r.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",r.a.createElement("i",{className:"fa fa-plus ml-3"})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"col-12"},r.a.createElement(o.a,Object.assign({bootstrap4:!0,pagination:u()(),selectRow:s,expandRow:i},e.baseProps,{striped:!0,noDataIndication:r.a.createElement(h,{text:t||"Tidak Ada Data",link:p,location:d})})),r.a.createElement("br",null),l&&r.a.createElement(v,e.csvProps,"Export CSV!!")))}))}},515:function(e,t,a){e.exports=a.p+"static/media/emptyTable.ffc2d7dc.svg"},567:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(573),i=(n=r)&&n.__esModule?n:{default:n};t.default=i.default}}]);
//# sourceMappingURL=91.11aacffa.chunk.js.map