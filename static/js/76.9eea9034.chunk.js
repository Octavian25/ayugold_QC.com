(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[76,176],{1248:function(e,t,a){"use strict";a.r(t);var n=a(86),r=a(80),o=a(81),i=a(83),l=a(82),s=a(0),c=a.n(s),u=a(196),d=a(195),m=a(87),p=a(62),f=a.n(p),h=a(29),v=a(483),g=a.n(v),b=a(509),E=a.n(b),y=a(508),x=a.n(y),k=a(514),F=a.n(k),N=a(54),O=a.n(N),_=a(5),D=a(191),w=a(477),j=a(3),C=a(478),S=a(471),T=a(128),P=a(479),R=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(T.d)())}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(C.a,{name:"tanggalAwal",component:P.a,type:"date",label:"Tanggal Awal ",placeholder:"Masukan Tanggal Awal "})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(C.a,{name:"tanggalAkhir",component:P.a,type:"date",label:"Tanggal Akhir ",placeholder:"Masukan Tanggal Akhir "})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(C.a,{name:"kode_sales",component:P.b,options:this.props.salesman.map((function(e){return{value:e.kode_sales,name:e.nama_sales}})),type:"text",label:"Sales",placeholder:"Masukan Sales"})),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary"},c.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data")))))))}}]),a}(s.Component);R=Object(S.a)({form:"FormLaporanBuktiPenjualanHead",enableReinitialize:!0})(R);var A=Object(h.b)((function(e){return{salesman:e.provinsi.salesman,dataLokasiPindah:e.provinsi.dataLokasiPindah}}))(R),B=a(517),V=a(510),z=b.Search.SearchBar,L=b.CSVExport.ExportCSVButton,U=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold_QC.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://188.166.254.162:4002/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,K=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");o.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},o.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"no_bon",text:"Nomor Bon"},{dataField:"nama_toko",text:"Nama Toko"},{dataField:"ongkos_rp",text:"ongkos (Rp)"},{dataField:"dics_global",text:"Disc Global"},{dataField:"total_netto",text:"Netto (Gr)"},{dataField:"total_netto_ext",text:"Netto Ext (Gr)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return o.print(t)}},c.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(m.f)()),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(u.b)())}},{key:"getData",value:function(e){var t=this;Object(j.b)("report/penjualan/".concat(e.kode_sales,"&").concat(e.tanggalAwal,"&").concat(e.tanggalAkhir)).then((function(e){return t.setState({listPenerimaan:e.data})}))}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),f.a.get(U+"cst/dc/pjl/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier}}).then((function(t){return e.setState({hasilDataGet:t.data})})).catch((function(){return Object(D.c)("Data Kosong")}))}},{key:"print",value:function(e){var t=[],a=e.detail_barang;a.forEach((function(e,a){var n=[++a,e.kadar_cetak,e.kode_jenis,parseFloat(e.bruto).toFixed(3),e.kadar_jual,parseFloat(e.disc).toFixed(3),parseFloat(e.netto).toFixed(3),"",1,"",""];t.push(n)}));var n=["","","",a.map((function(e){return parseFloat(e.bruto)})).reduce((function(e,t){return e+t}),0).toFixed(3),"",a.map((function(e){return parseFloat(e.disc)})).reduce((function(e,t){return e+t}),0).toFixed(3),a.map((function(e){return parseFloat(e.netto)})).reduce((function(e,t){return e+t}),0).toFixed(3),"0",a.map((function(e){return parseFloat(1)})).reduce((function(e,t){return e+t}),0),"",""];t.push(n),console.log(JSON.stringify(t));Object(V.a)("no Trx",e.no_bon,"Tanggal",e.tanggal,"No Bon",e.no_bon,"","","ADMIN",Object(B.b)(),"",["No","Kadar","Kode","Bruto \n(Gr)","Harga \n(%)","Diskon","Netto \n(Gr)","Pkg","Qty","Ongkos \n(Rp)","Grand Total\nNetto Ext"],"Transaksi Penjualan",t)}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(_.b,{to:"/cetakUlangBukti"},c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),c.a.createElement("div",{className:"card"},c.a.createElement(w.default,{title:"Cetak Ulang Bukti Penjualan"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(A,{onSubmit:function(t){return e.getData(t)}})),c.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?c.a.createElement(E.a,{bootstrap4:!0,keyField:this.state.listPenerimaan,data:this.state.listPenerimaan,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},c.a.createElement("div",{className:"text-right"},c.a.createElement(z,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),c.a.createElement(g.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:x()()})),c.a.createElement(L,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):c.a.createElement("div",null,this.props.error?c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:F.a,style:{width:"30%"},alt:"NOT RESPOND"}),c.a.createElement("br",null),c.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):c.a.createElement(O.a,{width:"100%",height:180}))))))))}}]),a}(s.Component);t.default=Object(h.b)()(K)},477:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a(81),o=a(83),i=a(82),l=a(0),s=a.n(l),c=a(481),u=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"card-header mb-3",style:{fontSize:30,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#ffffff"}},s.a.createElement("div",{className:"row my-auto"},s.a.createElement("div",{className:"col-lg-10 my-auto"},s.a.createElement("h4",{style:{fontSize:25,color:"#ffffff"}},this.props.title)),s.a.createElement("div",{className:"col-lg-2 text-right my-auto"},s.a.createElement(c.a,{id:"reload",type:"dark",effect:"solid"},s.a.createElement("span",null,"Reload")),s.a.createElement("button",{"data-tip":!0,"data-for":"reload",className:"btn btn-success btn-small btn-circle my-auto",onClick:function(){return window.location.reload()}},s.a.createElement("i",{className:"fa fa-retweet"})))))}}]),a}(l.Component);t.default=u},478:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(193),i=a.n(o),l=a(40),s=a.n(l),c=a(0),u=a.n(c),d=a(2),m=a.n(d),p=a(53),f=a.n(p),h=a(28),v=a.n(h),g=a(29),b=function(e,t,a,n){var o=t.value;return"checkbox"===e?r()({},t,{checked:!!o}):"radio"===e?r()({},t,{checked:n(o,a),value:a}):"select-multiple"===e?r()({},t,{value:o||[]}):"file"===e?r()({},t,{value:o||void 0}):t};var E=a(190),y=function(e,t){if(Object(E.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,o=n.value,i=n.checked,l=n.files,s=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?l||s&&s.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},x="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,k=function(e,t){var a=t.name,n=t.parse,r=t.normalize,o=y(e,x);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},F=a(12),N=a(84),O=function(e,t,a){return Object(N.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},_=["_reduxForm"],D=function(e){return e&&"object"===typeof e},w=function(e){return e&&"function"===typeof e},j=function(e){D(e)&&w(e.preventDefault)&&e.preventDefault()},C=function(e,t){if(D(e)&&D(e.dataTransfer)&&w(e.dataTransfer.getData))return e.dataTransfer.getData(t)},S=function(e,t,a){D(e)&&D(e.dataTransfer)&&w(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var T=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,l=a.normalize,s=a.onChange,c=a._reduxForm,u=a.value,d=k(t,{name:n,parse:i,normalize:l}),m=!1;if(s)if(!x&&Object(E.a)(t))s(r()({},t,{preventDefault:function(){return m=!0,j(t)}}),d,u,n);else{var p=s(t,d,u,n);x&&(m=p)}m||(o(c.change(n,d)),c.asyncValidate&&c.asyncValidate(n,d,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onFocus,l=a._reduxForm,s=!1;i&&(x?s=i(t,n):i(r()({},t,{preventDefault:function(){return s=!0,j(t)}}),n)),s||o(l.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,l=a.normalize,s=a.onBlur,c=a._reduxForm,u=a._value,d=a.value,m=k(t,{name:n,parse:i,normalize:l});m===u&&void 0!==u&&(m=d);var p=!1;s&&(x?p=s(t,m,d,n):s(r()({},t,{preventDefault:function(){return p=!0,j(t)}}),m,d,n)),p||(o(c.blur(n,m)),c.asyncValidate&&c.asyncValidate(n,m,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,o=a.value;S(t,"text",null==o?"":o),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onDrop,l=a._reduxForm,s=a.value,c=C(t,"text"),u=!1;i&&i(r()({},t,{preventDefault:function(){return u=!0,j(t)}}),c,s,n),u||(o(l.change(n,c)),j(t))},e}s()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~_.indexOf(n)&&!t(a.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,l=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,v()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),s=function(e,t,a){var n=e.getIn,o=e.toJS,i=e.deepEqual,l=a.asyncError,s=a.asyncValidating,c=a.onBlur,u=a.onChange,d=a.onDrop,m=a.onDragStart,p=a.dirty,f=a.dispatch,h=a.onFocus,g=a.form,E=a.format,y=a.initial,x=(a.parse,a.pristine),k=a.props,F=a.state,N=a.submitError,O=a.submitFailed,_=a.submitting,D=a.syncError,w=a.syncWarning,j=(a.validate,a.value),C=a._value,S=(a.warn,v()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),T=D||l||N,P=w,R=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(j,E);return{input:b(S.type,{name:t,onBlur:c,onChange:u,onDragStart:m,onDrop:d,onFocus:h,value:R},C,i),meta:r()({},o(F),{active:!(!F||!n(F,"active")),asyncValidating:s,autofilled:!(!F||!n(F,"autofilled")),dirty:p,dispatch:f,error:T,form:g,initial:y,warning:P,invalid:!!T,pristine:x,submitting:!!_,submitFailed:!!O,touched:!(!F||!n(F,"touched")),valid:!T,visited:!(!F||!n(F,"visited"))}),custom:r()({},S,{},k)}}(e,o,r()({},l,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=s.custom,d=v()(s,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof a){var m=d.input;d.meta;return Object(c.createElement)(a,r()({},m,{},u))}return Object(c.createElement)(a,r()({},d,{},u))},n}(c.Component);return n.propTypes={component:O,props:m.a.object},Object(g.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,l=(0,o.getFormState)(e),s=a(l,"initial."+r),c=void 0!==s?s:i&&a(i,r),u=a(l,"values."+r),d=a(l,"submitting"),m=function(e,t){var a=F.a.getIn(e,t);return a&&a._error?a._error:a}(a(l,"syncErrors"),r),p=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(l,"syncWarnings"),r),f=t(u,c);return{asyncError:a(l,"asyncErrors."+r),asyncValidating:a(l,"asyncValidating")===r,dirty:!f,pristine:f,state:a(l,"fields."+r),submitError:a(l,"submitErrors."+r),submitFailed:a(l,"submitFailed"),submitting:d,syncError:m,syncWarning:p,initial:c,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},P=a(194),R=a.n(P),A=function(e,t,a,n,r,o){if(o)return e===t},B=function(e,t,a){var n=R()(e.props,t,A),r=R()(e.state,a,A);return!n||!r},V=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},z=a(119);var L=function(e){var t=T(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=u.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var o=n.props._reduxForm.getValues();return r(t,n.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}s()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return B(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=V(this.props,this.props.name),a=V(e,e.name);t===a&&F.a.deepEqual(this.props.validate,e.validate)&&F.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return V(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(c.Component);return n.propTypes={name:m.a.string.isRequired,component:O,format:m.a.func,normalize:m.a.func,onBlur:m.a.func,onChange:m.a.func,onFocus:m.a.func,onDragStart:m.a.func,onDrop:m.a.func,parse:m.a.func,props:m.a.object,validate:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),warn:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),forwardRef:m.a.bool,immutableProps:m.a.arrayOf(m.a.string),_reduxForm:m.a.object},Object(z.b)(n)};t.a=L(F.a)},479:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(0),r=a.n(n),o=a(55),i=function(e){var t=e.input,a=e.label,n=e.type,o=(e.name,e.limit),i=e.readOnly,l=e.placeholder,s=(e.search,e.meta),c=s.touched,u=s.error,d=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement("input",Object.assign({},t,{type:n,id:a,className:"form-control",maxLength:o,readOnly:i,placeholder:l,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),c&&(u&&r.a.createElement("p",{className:"invalid-feedback"},u)||d&&r.a.createElement("p",null,d)))},l=function(e){var t=e.input,a=e.label,n=e.options,i=e.placeholder,l=(e.name,e.disabled),s=(e.value,e.readOnly),c=e.autoComplete,u=e.search,d=e.meta,m=d.touched,p=d.error,f=d.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement(o.a,Object.assign({},t,{options:n,search:u,emptyMessage:"Tidak Ada Data",id:a,placeholder:i||"Silahkan Pilih",disabled:l,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:c,readOnly:s})),m&&(p&&r.a.createElement("p",{className:"invalid-feedback"},p)||f&&r.a.createElement("p",null,f)))}},510:function(e,t,a){"use strict";var n=a(511);a(512);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",m=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],p=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",f=arguments.length>13?arguments[13]:void 0,h=new n.default;h.setProperties({title:p}),h.autoTable(m,f,{startY:40,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});var v=h.lastAutoTable.finalY+10;h.text(p,14,15),h.setFontSize(10),h.text(e,14,25),h.text(":",37,25),h.text(t,40,25),h.text(a,120,25),h.text(":",141,25),h.text(r,145,25),h.text(o,14,30),h.text(":",37,30),h.text(i,40,30),h.text(l,120,30),h.text(":",141,30),h.text(s,145,30),h.text("User",160,v+10),h.text(":",168,v+10),h.text(c,170,v+10),h.text("Cetak",160,v+15),h.text(":",168,v+15),h.text(u,170,v+15),h.text("Valid",160,v+20),h.text(":",168,v+20),h.text(d,170,v+20);var g=h.output("datauristring"),b=window.open();b.document.open(),b.document.write("<html><head><title>"+p+"</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+g+"></embed></body></html>"),b.document.close()}},514:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"},517:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),o=a(54),i=a.n(o),l=function(){return(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2)},s=function(e){var t=e.label;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," ",t," "),r.a.createElement(i.a,{className:"form-control"}))}}}]);
//# sourceMappingURL=76.9eea9034.chunk.js.map