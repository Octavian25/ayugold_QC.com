/*! For license information please see 65.8c5d7b8e.chunk.js.LICENSE.txt */
(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[65,26,156,157,174,176],{1229:function(e,t,a){"use strict";a.r(t);var n=a(86),r=a(80),o=a(81),i=a(83),l=a(82),s=a(0),c=a.n(s),u=a(483),m=a.n(u),d=a(195),p=a(29),f=a(478),h=a(471),g=a(480),v=a(62),b=a.n(v),k=a(9),y=a.n(k),E=function(e){var t={};return"DEFAULT"===!e.kodeBarang?t.kodeBarang="Tidak Boleh kosong":e.kodeBarang||(t.kodeBarang="Tidak Boleh Kosong"),e.bruto||(t.bruto="Tidak Boleh kosong"),e.nettoTerima||(t.nettoTerima="Tidak boleh kosong"),t},N=a(526),S=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,i=e.meta,l=i.touched,s=i.error,u=i.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},a),c.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),l&&(s&&c.a.createElement("p",{className:"invalid-feedback"},s)||u&&c.a.createElement("p",null,u)))},T=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold_QC.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://188.166.254.162:4002/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,F=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.handleChange=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");o.setState({kodeJenis:t[0],kadarCetak:t[1],kadarJual:t[2],namaJenis:t[3]}),o.props.change("kadar",t[1]),o.props.change("kadarTransaksi",t[2]),o.props.change("keterangan",t[3])}},o.searchMasak=function(e){return function(e){console.log("MEMULAI PENCARIAN"),console.log(e.target.value),b.a.get(T+"item/dc/kirimmasak/detail?noFaktur="+e.target.value).then((function(e){return o.setState({hasilBarang:e.data.footerItem.totalNetto,kodeTukang:e.data.kodeLokasi,noKirim:e.data.noFaktur})})).then((function(e){return o.props.change("nettoKirim",o.state.hasilBarang)})).then((function(){return o.props.change("kodeTukang",o.state.kodeTukang)})).then((function(){return o.props.change("noKirim",o.state.noKirim)})).catch((function(e){return y.a.fire({position:"top-right",icon:"error",text:"Barang Masak Tidak Ditemukan, periksa lagi Nomornya..",timer:1500,showConfirmButton:!1}).then((function(){return console.log(e)}))}))}},o.state={listBarang:[],hasilBarang:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://188.166.254.162:4002/api/v1/subcategorys2?kodeKelompok=PERHIASAN").then((function(t){return e.setState({listBarang:t.data})})).catch((function(e){return console.log(e)})),Object(N.a)(this.props.change)}},{key:"setNetto",value:function(){this.props.change("nettoTerima","NaN"===this.props.netto?0:this.props.netto),this.props.change("nettoSelisih","NaN"===this.props.nettoSelisih?0:this.props.nettoSelisih)}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 col-lg-6 form-group"},c.a.createElement("label",{htmlFor:""},"Nomor Kirim"),c.a.createElement("input",{type:"text",id:"noKirim",name:"noKirim",className:"form-control",onBlur:this.searchMasak("kode")})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group d-none"},c.a.createElement(f.a,{name:"noKirim",label:"Nomor Kirim",component:S,type:"text",onBlur:this.setNetto()})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group d-none"},c.a.createElement(f.a,{name:"kodeTukang",label:"Nomor Kirim",component:S,type:"text",onBlur:this.setNetto()})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement("label",{htmlFor:""},"Kode Barang"),c.a.createElement(f.a,{component:"select",name:"kodeBarang",className:"form-control",onChange:this.handleChange(),onBlur:this.handleChange()},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listBarang.map((function(e){return c.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarJual+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})))),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement(f.a,{name:"kadarTransaksi",label:"Kadar Cetak",component:S,type:"text",onBlur:this.setNetto(),readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement(f.a,{name:"bruto",label:"Bruto (Gr)",component:S,type:"text",onBlur:this.setNetto()})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement(f.a,{name:"nettoTerima",label:"Netto Terima",component:S,type:"text",onBlur:this.setNetto(),readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement(f.a,{name:"nettoKirim",label:"Netto Kirim",component:S,type:"text",onBlur:this.setNetto(),readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement(f.a,{name:"nettoSelisih",label:"Netto Selisih",component:S,type:"text",onBlur:this.setNetto(),readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group d-none"},c.a.createElement(f.a,{name:"keterangan",label:"Netto Selisih",component:S,type:"text",onBlur:this.setNetto()})),c.a.createElement("div",{className:"col-lg-12 col-md-12 mb-3 mt-3"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Tambah Data"))))))}}]),a}(s.Component);F=Object(h.a)({form:"FormTerimaMasak",enableReinitialize:!0,validate:E})(F);var C=Object(g.a)("FormTerimaMasak"),O=Object(p.b)((function(e){var t=C(e,"bruto","kadarTransaksi","nettoKirim","nettoTerima"),a=t.bruto,n=t.kadarTransaksi,r=t.nettoKirim,o=t.nettoTerima;return{netto:(parseFloat(a)*(parseFloat(n)/100)).toFixed(3),nettoSelisih:(parseFloat(o||0)-parseFloat(r||0)).toFixed(3)}}))(F),x=a(290),B=a(18),w=a(510),A=a(191),_=a(303),D=a(481),j=a(543),K=a(477),I=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold_QC.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://188.166.254.162:4002/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,R=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.submit=function(){if(null===localStorage.getItem("terimaMasak"))return Object(A.e)("Data belum timbahkan, Silahkan Tambahkan data dahulu"),!1;if(""===o.state.tanggal)return Object(A.e)("Mohon isi tanggal"),!1;var e={noFaktur:o.props.noFaktur.toUpperCase(),kodeLokasi:"PUSAT",noBon:o.props.noFaktur.toUpperCase(),tanggal:o.state.tanggal.toUpperCase(),barangDetails:JSON.parse(localStorage.getItem("terimaMasak")),footerItem:{totalNetto:o.props.sumNetto,totalBruto:o.props.sumBruto,totalNettoExt:0,totalP:0,totalGross:0,totalQty:o.props.sumQty,totalpkg:0,totalRp:0,totalK:0},footerDocument:{inputBy:o.props.username}};o.props.dispatch(Object(B.t)());var t=[];JSON.parse(localStorage.getItem("terimaMasak")).forEach((function(e,a){var n=[a++,e.kodeJenis,e.kodeTukang,e.bruto,e.kadarTransaksi,e.nettoTerima,e.nettoKirim,e.nettoSelisih];t.push(n)})),console.log(t);var a=["No","Kode Jenis","Kode Tukang","Bruto","Harga (%)","Netto Terima","Netto Kirim","Netto Selisih"];b.a.post(I+"item/dc/terimamasak",e).then((function(){return y.a.fire({position:"top-right",icon:"success",text:"Transaksi Berhasil",timer:1500,showConfirmButton:!1}).then((function(){return o.props.dispatch(Object(B.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return Object(w.a)("Tanggal",o.state.tanggal.toUpperCase(),"","","No Faktur",o.props.noFaktur.toUpperCase(),"","","ADMIN",o.state.tanggal.toUpperCase(),"",a,"BUKTI TERIMA MASAK",t)})).then((function(){return localStorage.removeItem("terimaMasak")})).then((function(){return o.props.dispatch(Object(_.a)("FormTerimaMasak"))})).then((function(){return o.setState({tanggal:""})})).then((function(){return o.props.dispatch(Object(d.b)())})).then((function(){return o.props.dispatch(Object(x.b)())}))})).catch((function(e){return y.a.fire({position:"top-right",icon:"error",text:"Sepertinya ada gangguan, Silahkan Check Koneksi anda",timer:1500,showConfirmButton:!1}).then((function(){return console.log(e)})).then((function(){return o.props.dispatch(Object(B.k)())}))}))},o.state={products:[],no:0,no_kirim:"",kode_barang:"",kadar_cetak:"",bruto:0,netto_terima:0,netto_selisih:0,netto_kirim:0,status:"",tanggal:"",columns:[{dataField:"kodeJenis",text:"Kode Barang",footer:""},{dataField:"kodeTukang",text:"Kode Tukang",footer:""},{dataField:"kadarCetak",text:"Kadar Cetak(%)",footer:""},{dataField:"bruto",text:"Bruto(Gr)",footer:function(e){return e.reduce((function(e,t){return e+t}),0)}},{dataField:"nettoTerima",text:"Netto Terima(Gr)",footer:function(e){return e.reduce((function(e,t){return e+t}),0)}},{dataField:"nettoKirim",text:"Netto Kirim(Gr)",footer:function(e){return e.reduce((function(e,t){return e+t}),0)}},{dataField:"nettoSelisih",text:"Netto Selisih(Gr)",footer:function(e){return e.reduce((function(e,t){return e+t}),0)}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return Object(j.a)("terimaMasak",a,o.props.dispatch,Object(x.b)())}},c.a.createElement(D.a,{id:"hapus",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),c.a.createElement("i",{className:"fa fa-trash mr-1"})),c.a.createElement("br",null))}}]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(x.b)()),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(B.o)("terimaMasak")),this.props.dispatch(Object(B.l)("terimaMasak")),this.props.dispatch(Object(B.r)("terimaMasak"))}},{key:"handleSubmit",value:function(e){var t=this,a=(e.kodeBarang?e.kodeBarang:"DEFUALT|DEFUALT|DEFAULT|DEFAULT").split("|"),n={noFaktur:this.props.noFaktur.toUpperCase(),kadarTransaksi:parseFloat(e.kadarTransaksi),kodeTukang:e.kodeTukang.toUpperCase(),kodeLokasi:"PUSAT",kodeKategori:"-",kadarCetak:a[1].toUpperCase(),kodeJenis:a[0].toUpperCase(),noKirim:e.noKirim.toUpperCase(),brutoTerima:parseFloat(e.bruto),bruto:parseFloat(e.bruto),nettoTerima:parseFloat(e.nettoTerima),nettoKirim:parseFloat(e.nettoKirim)?parseFloat(e.nettoKirim):0,nettoSelisih:parseFloat(e.nettoSelisih)?parseFloat(e.nettoSelisih):0},r=JSON.parse(localStorage.getItem("terimaMasak"))||[];r.push(n),localStorage.setItem("terimaMasak",JSON.stringify(r)),y.a.fire({position:"top-right",icon:"success",text:"Data Berhasi Ditambahkan",timer:1500,showConfirmButton:!1}).then((function(){return t.props.dispatch(Object(x.b)())})).then((function(){return t.props.dispatch(Object(_.a)("FormTerimaMasak"))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement(K.default,{title:"Terima Masak"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",id:"tanggal",name:"tanggal",className:"form-control",onChange:this.inputChange("tanggal"),value:this.state.tanggal})),c.a.createElement("div",{className:"col-md-9 col-lg-9"})),c.a.createElement("div",{className:"col-lg-12 col-md-12 mb-3 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:function(){return e.submit()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary","data-target":"#tambahModal","data-toggle":"modal"},"Tambah Data",c.a.createElement("i",{className:"fa fa-plus ml-3"})))))),this.props.listTerimaMasak?c.a.createElement(m.a,{keyField:"id",data:this.props.listTerimaMasak,columns:this.state.columns,bordered:!0,headerClasses:"header-table"}):c.a.createElement(m.a,{keyField:"id",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"}))))),c.a.createElement("div",{id:"tambahModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(O,{onSubmit:function(t){return e.handleSubmit(t)}}))))))}}]),a}(s.Component);t.default=Object(p.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,listTerimaMasak:e.provinsi.listTerimaMasak,sumBruto:e.perhitungan.sumBruto,sumNetto:e.perhitungan.sumNetto,sumQty:e.perhitungan.sumQty,onSend:e.provinsi.onSend}}),null)(R)},303:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(19),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},477:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a(81),o=a(83),i=a(82),l=a(0),s=a.n(l),c=a(481),u=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"card-header mb-3",style:{fontSize:30,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#ffffff"}},s.a.createElement("div",{className:"row my-auto"},s.a.createElement("div",{className:"col-lg-10 my-auto"},s.a.createElement("h4",{style:{fontSize:25,color:"#ffffff"}},this.props.title)),s.a.createElement("div",{className:"col-lg-2 text-right my-auto"},s.a.createElement(c.a,{id:"reload",type:"dark",effect:"solid"},s.a.createElement("span",null,"Reload")),s.a.createElement("button",{"data-tip":!0,"data-for":"reload",className:"btn btn-success btn-small btn-circle my-auto",onClick:function(){return window.location.reload()}},s.a.createElement("i",{className:"fa fa-retweet"})))))}}]),a}(l.Component);t.default=u},478:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(193),i=a.n(o),l=a(40),s=a.n(l),c=a(0),u=a.n(c),m=a(2),d=a.n(m),p=a(53),f=a.n(p),h=a(28),g=a.n(h),v=a(29),b=function(e,t,a,n){var o=t.value;return"checkbox"===e?r()({},t,{checked:!!o}):"radio"===e?r()({},t,{checked:n(o,a),value:a}):"select-multiple"===e?r()({},t,{value:o||[]}):"file"===e?r()({},t,{value:o||void 0}):t};var k=a(190),y=function(e,t){if(Object(k.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,o=n.value,i=n.checked,l=n.files,s=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?l||s&&s.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},E="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,N=function(e,t){var a=t.name,n=t.parse,r=t.normalize,o=y(e,E);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},S=a(12),T=a(84),F=function(e,t,a){return Object(T.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},C=["_reduxForm"],O=function(e){return e&&"object"===typeof e},x=function(e){return e&&"function"===typeof e},B=function(e){O(e)&&x(e.preventDefault)&&e.preventDefault()},w=function(e,t){if(O(e)&&O(e.dataTransfer)&&x(e.dataTransfer.getData))return e.dataTransfer.getData(t)},A=function(e,t,a){O(e)&&O(e.dataTransfer)&&x(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var _=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,l=a.normalize,s=a.onChange,c=a._reduxForm,u=a.value,m=N(t,{name:n,parse:i,normalize:l}),d=!1;if(s)if(!E&&Object(k.a)(t))s(r()({},t,{preventDefault:function(){return d=!0,B(t)}}),m,u,n);else{var p=s(t,m,u,n);E&&(d=p)}d||(o(c.change(n,m)),c.asyncValidate&&c.asyncValidate(n,m,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onFocus,l=a._reduxForm,s=!1;i&&(E?s=i(t,n):i(r()({},t,{preventDefault:function(){return s=!0,B(t)}}),n)),s||o(l.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,l=a.normalize,s=a.onBlur,c=a._reduxForm,u=a._value,m=a.value,d=N(t,{name:n,parse:i,normalize:l});d===u&&void 0!==u&&(d=m);var p=!1;s&&(E?p=s(t,d,m,n):s(r()({},t,{preventDefault:function(){return p=!0,B(t)}}),d,m,n)),p||(o(c.blur(n,d)),c.asyncValidate&&c.asyncValidate(n,d,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,o=a.value;A(t,"text",null==o?"":o),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onDrop,l=a._reduxForm,s=a.value,c=w(t,"text"),u=!1;i&&i(r()({},t,{preventDefault:function(){return u=!0,B(t)}}),c,s,n),u||(o(l.change(n,c)),B(t))},e}s()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~C.indexOf(n)&&!t(a.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,l=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,g()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),s=function(e,t,a){var n=e.getIn,o=e.toJS,i=e.deepEqual,l=a.asyncError,s=a.asyncValidating,c=a.onBlur,u=a.onChange,m=a.onDrop,d=a.onDragStart,p=a.dirty,f=a.dispatch,h=a.onFocus,v=a.form,k=a.format,y=a.initial,E=(a.parse,a.pristine),N=a.props,S=a.state,T=a.submitError,F=a.submitFailed,C=a.submitting,O=a.syncError,x=a.syncWarning,B=(a.validate,a.value),w=a._value,A=(a.warn,g()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),_=O||l||T,D=x,j=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(B,k);return{input:b(A.type,{name:t,onBlur:c,onChange:u,onDragStart:d,onDrop:m,onFocus:h,value:j},w,i),meta:r()({},o(S),{active:!(!S||!n(S,"active")),asyncValidating:s,autofilled:!(!S||!n(S,"autofilled")),dirty:p,dispatch:f,error:_,form:v,initial:y,warning:D,invalid:!!_,pristine:E,submitting:!!C,submitFailed:!!F,touched:!(!S||!n(S,"touched")),valid:!_,visited:!(!S||!n(S,"visited"))}),custom:r()({},A,{},N)}}(e,o,r()({},l,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=s.custom,m=g()(s,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof a){var d=m.input;m.meta;return Object(c.createElement)(a,r()({},d,{},u))}return Object(c.createElement)(a,r()({},m,{},u))},n}(c.Component);return n.propTypes={component:F,props:d.a.object},Object(v.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,l=(0,o.getFormState)(e),s=a(l,"initial."+r),c=void 0!==s?s:i&&a(i,r),u=a(l,"values."+r),m=a(l,"submitting"),d=function(e,t){var a=S.a.getIn(e,t);return a&&a._error?a._error:a}(a(l,"syncErrors"),r),p=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(l,"syncWarnings"),r),f=t(u,c);return{asyncError:a(l,"asyncErrors."+r),asyncValidating:a(l,"asyncValidating")===r,dirty:!f,pristine:f,state:a(l,"fields."+r),submitError:a(l,"submitErrors."+r),submitFailed:a(l,"submitFailed"),submitting:m,syncError:d,syncWarning:p,initial:c,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},D=a(194),j=a.n(D),K=function(e,t,a,n,r,o){if(o)return e===t},I=function(e,t,a){var n=j()(e.props,t,K),r=j()(e.state,a,K);return!n||!r},R=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},U=a(119);var P=function(e){var t=_(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=u.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var o=n.props._reduxForm.getValues();return r(t,n.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}s()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return I(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=R(this.props,this.props.name),a=R(e,e.name);t===a&&S.a.deepEqual(this.props.validate,e.validate)&&S.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return R(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(c.Component);return n.propTypes={name:d.a.string.isRequired,component:F,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(U.b)(n)};t.a=P(S.a)},480:function(e,t,a){"use strict";var n=a(53),r=a.n(n),o=a(12);t.a=function(e){var t=e.getIn;return function(e,a){r()(e,"Form value must be specified");var n=a||function(e){return t(e,"form")};return function(a){for(var i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];return r()(l.length,"No fields specified"),1===l.length?t(n(a),e+".values."+l[0]):l.reduce((function(r,i){var l=t(n(a),e+".values."+i);return void 0===l?r:o.a.setIn(r,i,l)}),{})}}}(o.a)},482:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"h",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"g",(function(){return m}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function r(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function i(e,t,a,n){return new(a||(a=Promise))((function(r,o){function i(e){try{s(n.next(e))}catch(t){o(t)}}function l(e){try{s(n.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))}function l(e,t){var a,n,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function s(e){var t="function"===typeof Symbol&&Symbol.iterator,a=t&&e[t],n=0;if(a)return a.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var a="function"===typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,o=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(l){r={error:l}}finally{try{n&&!n.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}return i}function u(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}function m(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<a;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,r++)n[r]=o[i];return n}},510:function(e,t,a){"use strict";var n=a(511);a(512);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",d=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],p=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",f=arguments.length>13?arguments[13]:void 0,h=new n.default;h.setProperties({title:p}),h.autoTable(d,f,{startY:40,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});var g=h.lastAutoTable.finalY+10;h.text(p,14,15),h.setFontSize(10),h.text(e,14,25),h.text(":",37,25),h.text(t,40,25),h.text(a,120,25),h.text(":",141,25),h.text(r,145,25),h.text(o,14,30),h.text(":",37,30),h.text(i,40,30),h.text(l,120,30),h.text(":",141,30),h.text(s,145,30),h.text("User",160,g+10),h.text(":",168,g+10),h.text(c,170,g+10),h.text("Cetak",160,g+15),h.text(":",168,g+15),h.text(u,170,g+15),h.text("Valid",160,g+20),h.text(":",168,g+20),h.text(m,170,g+20);var v=h.output("datauristring"),b=window.open();b.document.open(),b.document.write("<html><head><title>"+p+"</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+v+"></embed></body></html>"),b.document.close()}},526:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(550).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),r=localStorage.getItem("namaTimbangan"),o=localStorage.getItem("enableTimbangan"),i=function(e){o?n.database().ref(r).on("value",(function(t){var a=t.val();e("bruto",a.nilai),console.log(a.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},l=function(e){o?n.database().ref(r).on("value",(function(t){var a=t.val();e("jumlah",a.nilai),console.log(a.nilai);var n=Object.keys(a).map((function(e){return a[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")}},543:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(9),r=a.n(n),o=function(e){e.forEach((function(e){localStorage.removeItem(e)}))},i=function(e,t,a,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var i=JSON.parse(localStorage.getItem(e))||[];i.splice(t,1),localStorage.setItem(e,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)}))}}))},l=function(e,t,a,n){return new Promise((function(o,i){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){if(i.isConfirmed){var l=JSON.parse(localStorage.getItem(e))||[];l.splice(t,1),localStorage.setItem(e,JSON.stringify(l)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)})).then(o("Berhasil")).catch("Gagal")}}))}))}}}]);
//# sourceMappingURL=65.8c5d7b8e.chunk.js.map