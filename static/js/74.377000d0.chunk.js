(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[74,176],{1162:function(e,t,a){"use strict";a.r(t);var n=a(86),r=a(80),o=a(81),i=a(83),l=a(82),c=a(0),s=a.n(c),u=a(196),p=a(195),d=a(87),m=a(29),f=a(5),v=a(191),h=a(477),g=a(478),b=a(471),E=a(480),y=a(479),k=a(513),x=a(3),F=a(510),w=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");o.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},o.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"jenis_trx",text:"Jenis Transaksi"},{dataField:"no_bon",text:"Nomor Bon"},{dataField:"total_bruto",text:"Total Bruto(Gr)"},{dataField:"total_gross",text:"Total Gross(Gr)"},{dataField:"total_netto",text:"Total Netto(Gr)"},{dataField:"total_pkg",text:"Total Pkg(Gr)"},{dataField:"total_rp",text:"Total Rp(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return o.getDetails(t)}},s.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:[]},o}return Object(o.a)(a,[{key:"getDetails",value:function(e){var t=[],a=e.detail_barang;a.forEach((function(e,a){var n=[++a,e.kode_jenis,e.kadar_cetak,e.p,e.k,e.pkg,e.bruto,e.kadar_beli,parseFloat(e.netto).toFixed(3),"Rp. "+parseFloat(e.ongkos_rp).toLocaleString("id-ID")];t.push(n)}));var n=["","","","","",a.map((function(e){return e.pkg})).reduce((function(e,t){return e+t}),0),a.map((function(e){return e.bruto})).reduce((function(e,t){return e+t}),0),"",a.map((function(e){return e.netto})).reduce((function(e,t){return e+t}),0),"Rp. "+a.map((function(e){return e.ongkos_rp})).reduce((function(e,t){return e+t}),0).toLocaleString("id-ID")];t.push(n),console.log(JSON.stringify(t));Object(F.a)("No Bon",e.no_bon.toUpperCase(),"Tanggal",e.tanggal,"Supplier",this.state.printSupplier[0].kode_supplier.toUpperCase(),"","","ADMIN",e.tanggal,"",["No","Kode Barang","Kadar Cetak (%)","P","K","Bungkus(Gr)","Berat(Gr)","Harga(Gr)","Murni(Gr)","Ongkos(Rp)"],"Tolakan Return Barang Supplier",t)}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.f)()),this.props.dispatch(Object(p.b)()),this.props.dispatch(Object(u.b)())}},{key:"caridata",value:function(){var e=this;Object(x.b)("report/tolakan-supplier/".concat(this.props.kode_supplier,"&").concat(this.props.tanggal_awal,"&").concat(this.props.tanggal_akhir)).then((function(t){return e.setState({listPenerimaan:t.data&&t.data[0].detail,printSupplier:t.data})})).catch((function(){return Object(v.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(f.b,{to:"/cetakUlangBukti"},s.a.createElement("button",{type:"button",className:"btn btn-secondary"},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),s.a.createElement("div",{className:"card"},s.a.createElement(h.default,{title:"Cetak Ulang Bukti Tolakan Supplier"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(g.a,{name:"tanggal_awal",component:y.a,type:"date",label:"Mulai Dari",placeholder:"Masukan Mulai Dari"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(g.a,{name:"tanggal_akhir",component:y.a,type:"date",label:"Sampai Dengan",placeholder:"Masukan Sampai Dengan"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"kode_supplier",component:y.b,options:this.props.supplier.map((function(e){return{value:e.kode_supplier,name:e.nama_supplier}})),type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},s.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(k.a,{bootstrap4:!0,keyField:this.state.listPenerimaan,data:this.state.listPenerimaan,columns:this.state.columns})))))))))}}]),a}(c.Component);w=Object(b.a)({form:"FormLaporanTolakanSupplier"})(w);var _=Object(E.a)("FormLaporanTolakanSupplier");t.default=Object(m.b)((function(e){var t=_(e,"tanggal_awal","tanggal_akhir","kode_supplier"),a=t.tanggal_awal,n=t.tanggal_akhir,r=t.kode_supplier;return{supplier:e.provinsi.supplier,tanggal_akhir:n,tanggal_awal:a,kode_supplier:r}}))(w)},477:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a(81),o=a(83),i=a(82),l=a(0),c=a.n(l),s=a(481),u=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"card-header mb-3",style:{fontSize:30,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#ffffff"}},c.a.createElement("div",{className:"row my-auto"},c.a.createElement("div",{className:"col-lg-10 my-auto"},c.a.createElement("h4",{style:{fontSize:25,color:"#ffffff"}},this.props.title)),c.a.createElement("div",{className:"col-lg-2 text-right my-auto"},c.a.createElement(s.a,{id:"reload",type:"dark",effect:"solid"},c.a.createElement("span",null,"Reload")),c.a.createElement("button",{"data-tip":!0,"data-for":"reload",className:"btn btn-success btn-small btn-circle my-auto",onClick:function(){return window.location.reload()}},c.a.createElement("i",{className:"fa fa-retweet"})))))}}]),a}(l.Component);t.default=u},478:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(193),i=a.n(o),l=a(40),c=a.n(l),s=a(0),u=a.n(s),p=a(2),d=a.n(p),m=a(53),f=a.n(m),v=a(28),h=a.n(v),g=a(29),b=function(e,t,a,n){var o=t.value;return"checkbox"===e?r()({},t,{checked:!!o}):"radio"===e?r()({},t,{checked:n(o,a),value:a}):"select-multiple"===e?r()({},t,{value:o||[]}):"file"===e?r()({},t,{value:o||void 0}):t};var E=a(190),y=function(e,t){if(Object(E.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,o=n.value,i=n.checked,l=n.files,c=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?l||c&&c.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},k="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,x=function(e,t){var a=t.name,n=t.parse,r=t.normalize,o=y(e,k);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},F=a(12),w=a(84),_=function(e,t,a){return Object(w.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},N=["_reduxForm"],D=function(e){return e&&"object"===typeof e},S=function(e){return e&&"function"===typeof e},O=function(e){D(e)&&S(e.preventDefault)&&e.preventDefault()},C=function(e,t){if(D(e)&&D(e.dataTransfer)&&S(e.dataTransfer.getData))return e.dataTransfer.getData(t)},j=function(e,t,a){D(e)&&D(e.dataTransfer)&&S(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var T=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,l=a.normalize,c=a.onChange,s=a._reduxForm,u=a.value,p=x(t,{name:n,parse:i,normalize:l}),d=!1;if(c)if(!k&&Object(E.a)(t))c(r()({},t,{preventDefault:function(){return d=!0,O(t)}}),p,u,n);else{var m=c(t,p,u,n);k&&(d=m)}d||(o(s.change(n,p)),s.asyncValidate&&s.asyncValidate(n,p,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onFocus,l=a._reduxForm,c=!1;i&&(k?c=i(t,n):i(r()({},t,{preventDefault:function(){return c=!0,O(t)}}),n)),c||o(l.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,l=a.normalize,c=a.onBlur,s=a._reduxForm,u=a._value,p=a.value,d=x(t,{name:n,parse:i,normalize:l});d===u&&void 0!==u&&(d=p);var m=!1;c&&(k?m=c(t,d,p,n):c(r()({},t,{preventDefault:function(){return m=!0,O(t)}}),d,p,n)),m||(o(s.blur(n,d)),s.asyncValidate&&s.asyncValidate(n,d,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,o=a.value;j(t,"text",null==o?"":o),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onDrop,l=a._reduxForm,c=a.value,s=C(t,"text"),u=!1;i&&i(r()({},t,{preventDefault:function(){return u=!0,O(t)}}),s,c,n),u||(o(l.change(n,s)),O(t))},e}c()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~N.indexOf(n)&&!t(a.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,l=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,h()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),c=function(e,t,a){var n=e.getIn,o=e.toJS,i=e.deepEqual,l=a.asyncError,c=a.asyncValidating,s=a.onBlur,u=a.onChange,p=a.onDrop,d=a.onDragStart,m=a.dirty,f=a.dispatch,v=a.onFocus,g=a.form,E=a.format,y=a.initial,k=(a.parse,a.pristine),x=a.props,F=a.state,w=a.submitError,_=a.submitFailed,N=a.submitting,D=a.syncError,S=a.syncWarning,O=(a.validate,a.value),C=a._value,j=(a.warn,h()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),T=D||l||w,R=S,B=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(O,E);return{input:b(j.type,{name:t,onBlur:s,onChange:u,onDragStart:d,onDrop:p,onFocus:v,value:B},C,i),meta:r()({},o(F),{active:!(!F||!n(F,"active")),asyncValidating:c,autofilled:!(!F||!n(F,"autofilled")),dirty:m,dispatch:f,error:T,form:g,initial:y,warning:R,invalid:!!T,pristine:k,submitting:!!N,submitFailed:!!_,touched:!(!F||!n(F,"touched")),valid:!T,visited:!(!F||!n(F,"visited"))}),custom:r()({},j,{},x)}}(e,o,r()({},l,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=c.custom,p=h()(c,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof a){var d=p.input;p.meta;return Object(s.createElement)(a,r()({},d,{},u))}return Object(s.createElement)(a,r()({},p,{},u))},n}(s.Component);return n.propTypes={component:_,props:d.a.object},Object(g.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,l=(0,o.getFormState)(e),c=a(l,"initial."+r),s=void 0!==c?c:i&&a(i,r),u=a(l,"values."+r),p=a(l,"submitting"),d=function(e,t){var a=F.a.getIn(e,t);return a&&a._error?a._error:a}(a(l,"syncErrors"),r),m=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(l,"syncWarnings"),r),f=t(u,s);return{asyncError:a(l,"asyncErrors."+r),asyncValidating:a(l,"asyncValidating")===r,dirty:!f,pristine:f,state:a(l,"fields."+r),submitError:a(l,"submitErrors."+r),submitFailed:a(l,"submitFailed"),submitting:p,syncError:d,syncWarning:m,initial:s,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},R=a(194),B=a.n(R),P=function(e,t,a,n,r,o){if(o)return e===t},V=function(e,t,a){var n=B()(e.props,t,P),r=B()(e.state,a,P);return!n||!r},z=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},A=a(119);var I=function(e){var t=T(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=u.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var o=n.props._reduxForm.getValues();return r(t,n.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}c()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return V(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=z(this.props,this.props.name),a=z(e,e.name);t===a&&F.a.deepEqual(this.props.validate,e.validate)&&F.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(s.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return z(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(s.Component);return n.propTypes={name:d.a.string.isRequired,component:_,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(A.b)(n)};t.a=I(F.a)},479:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(0),r=a.n(n),o=a(55),i=function(e){var t=e.input,a=e.label,n=e.type,o=(e.name,e.limit),i=e.readOnly,l=e.placeholder,c=(e.search,e.meta),s=c.touched,u=c.error,p=c.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement("input",Object.assign({},t,{type:n,id:a,className:"form-control",maxLength:o,readOnly:i,placeholder:l,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),s&&(u&&r.a.createElement("p",{className:"invalid-feedback"},u)||p&&r.a.createElement("p",null,p)))},l=function(e){var t=e.input,a=e.label,n=e.options,i=e.placeholder,l=(e.name,e.disabled),c=(e.value,e.readOnly),s=e.autoComplete,u=e.search,p=e.meta,d=p.touched,m=p.error,f=p.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement(o.a,Object.assign({},t,{options:n,search:u,emptyMessage:"Tidak Ada Data",id:a,placeholder:i||"Silahkan Pilih",disabled:l,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:s,readOnly:c})),d&&(m&&r.a.createElement("p",{className:"invalid-feedback"},m)||f&&r.a.createElement("p",null,f)))}},480:function(e,t,a){"use strict";var n=a(53),r=a.n(n),o=a(12);t.a=function(e){var t=e.getIn;return function(e,a){r()(e,"Form value must be specified");var n=a||function(e){return t(e,"form")};return function(a){for(var i=arguments.length,l=new Array(i>1?i-1:0),c=1;c<i;c++)l[c-1]=arguments[c];return r()(l.length,"No fields specified"),1===l.length?t(n(a),e+".values."+l[0]):l.reduce((function(r,i){var l=t(n(a),e+".values."+i);return void 0===l?r:o.a.setIn(r,i,l)}),{})}}}(o.a)},510:function(e,t,a){"use strict";var n=a(511);a(512);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",p=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",d=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],m=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",f=arguments.length>13?arguments[13]:void 0,v=new n.default;v.setProperties({title:m}),v.autoTable(d,f,{startY:40,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});var h=v.lastAutoTable.finalY+10;v.text(m,14,15),v.setFontSize(10),v.text(e,14,25),v.text(":",37,25),v.text(t,40,25),v.text(a,120,25),v.text(":",141,25),v.text(r,145,25),v.text(o,14,30),v.text(":",37,30),v.text(i,40,30),v.text(l,120,30),v.text(":",141,30),v.text(c,145,30),v.text("User",160,h+10),v.text(":",168,h+10),v.text(s,170,h+10),v.text("Cetak",160,h+15),v.text(":",168,h+15),v.text(u,170,h+15),v.text("Valid",160,h+20),v.text(":",168,h+20),v.text(p,170,h+20);var g=v.output("datauristring"),b=window.open();b.document.open(),b.document.write("<html><head><title>"+m+"</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+g+"></embed></body></html>"),b.document.close()}},513:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(483),i=a.n(o),l=a(509),c=a.n(l),s=a(508),u=a.n(s),p=a(5),d=a(515),m=a.n(d);var f=function(e){return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:m.a,width:"250",height:"250",alt:"Empty"}),r.a.createElement("h5",null,e.text),void 0!==e.link?r.a.createElement(p.b,{to:e.link,replace:!0},r.a.createElement("button",{className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-chevron-left mr-2"}),e.location)):null))},v=l.Search.SearchBar,h=l.CSVExport.ExportCSVButton;t.a=function(e){var t=e.textEmpty,a=e.handleClick,n=e.tambahData,o=e.expandRow,l=e.selectRow,s=e.exportCSV,p=e.link,d=e.location;return r.a.createElement(c.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},(function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-left"},r.a.createElement(v,e.searchProps))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-right"},n&&r.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",r.a.createElement("i",{className:"fa fa-plus ml-3"})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"col-12"},r.a.createElement(i.a,Object.assign({bootstrap4:!0,pagination:u()(),selectRow:l,expandRow:o},e.baseProps,{striped:!0,noDataIndication:r.a.createElement(f,{text:t||"Tidak Ada Data",link:p,location:d})})),r.a.createElement("br",null),s&&r.a.createElement(h,e.csvProps,"Export CSV!!")))}))}},515:function(e,t,a){e.exports=a.p+"static/media/emptyTable.ffc2d7dc.svg"}}]);
//# sourceMappingURL=74.377000d0.chunk.js.map