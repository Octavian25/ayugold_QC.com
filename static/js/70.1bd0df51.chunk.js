(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[70,176],{1154:function(e,a,t){"use strict";t.r(a);var n=t(80),r=t(81),o=t(83),i=t(82),l=t(0),c=t.n(l),s=t(29),u=t(5),d=t(481),m=t(303),p=t(478),f=t(471),v=t(480),h=t(291),b=t(199),g=t(191),y=t(3),E=t(513),k=t(477),j=t(479),_=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={edit:!1,columns:[{dataField:"kode_jenis",text:"Kode Model",headerStyle:function(){return{width:"30%"}}},{dataField:"level2",text:"Nama Model",headerStyle:function(){return{width:"20%"}}},{dataField:"level3",text:"Kode Kategori",headerStyle:function(){return{width:"30%"}}},{dataField:"link",text:"Aksi",csvExport:!1,formatter:function(e,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-warning",onClick:function(){return r.edit(a)},"data-tut":"reactour_3"},c.a.createElement("i",{className:"fa fa-edit mr-1"}),c.a.createElement(d.a,{id:"edit",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),"Edit"))}}]},r}return Object(r.a)(t,[{key:"edit",value:function(e){this.props.change("kode_jenis",e.kode_jenis),this.props.change("level_2",e.level2),this.props.change("level_3",e.level3),this.setKadarJual(e.kode_jenis),this.setState({edit:!0})}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(h.b)()),this.props.dispatch(Object(b.b)())}},{key:"simpanKelompok",value:function(){var e=this,a={kode_jenis:this.props.kode_jenis,level2:this.props.level_2,level3:this.props.level_3},t={level2:this.props.level_2,level3:this.props.level_3};this.state.edit?Object(y.d)("kelompok-harga/edit/".concat(this.props.kode_jenis),t).then((function(){return Object(g.b)("Berhasil Disimpan")})).then((function(){return e.props.dispatch(Object(m.a)("KelompokHarga"))})).then((function(){return e.props.dispatch(Object(h.b)())})).catch((function(e){return Object(g.c)("Gagal Menyimpan Data, Detail : ".concat(e.response.data))})):Object(y.c)("kelompok-harga/add",a).then((function(){return Object(g.b)("Berhasil Disimpan")})).then((function(){return e.props.dispatch(Object(m.a)("KelompokHarga"))})).then((function(){return e.props.dispatch(Object(h.b)())})).catch((function(e){return Object(g.c)("Gagal Menyimpan Data, Detail : ".concat(e.response.data))}))}},{key:"setKadarJual",value:function(e){var a=e,t=this.props.kodeBarang.filter((function(e){return e.kode_jenis===a}));this.props.change("kadar_jual",t[0].kadar_jual),this.setState({edit:!1})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(u.b,{to:"/KlasifikasiBarang"},c.a.createElement("button",{type:"button",className:"btn btn-secondary "},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("h2",null,"Tambah Kelompok Harga")),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("hr",null)),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(p.a,{name:"kode_jenis",component:j.b,options:this.props.kodeBarang.map((function(e){return{value:e.kode_jenis,name:e.nama_jenis}})),type:"text",label:"Kode Jenis",placeholder:"Masukan Kode Jenis",onChange:function(a){return e.setKadarJual(a)}})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(p.a,{name:"kadar_jual",component:j.a,type:"number",label:"Harga Kadar Jual",placeholder:"Masukan Harga Kadar Jual",readOnly:!0})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(p.a,{name:"level_2",component:j.a,type:"number",label:"Harga Level 2",placeholder:"Masukan Harga Level 2"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(p.a,{name:"level_3",component:j.a,type:"number",label:"Harga Level 3",placeholder:"Masukan Harga Level 3"})),c.a.createElement("div",{className:"col-lg-12 mt-2"},c.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){return e.simpanKelompok()}},"SIMPAN"))))),c.a.createElement("div",{className:"col-lg-8"},c.a.createElement("div",{className:"card"},c.a.createElement(k.default,{title:"Kelompok Harga"}),c.a.createElement("div",{className:"card-body"},c.a.createElement(E.a,{keyField:"id",data:this.props.KelompokHarga,columns:this.state.columns,search:!0}))))))}}]),t}(l.Component);_=Object(f.a)({form:"KelompokHarga"})(_);var F=Object(v.a)("KelompokHarga");a.default=Object(s.b)((function(e){var a=F(e,"level_2","level_3","kode_jenis"),t=a.kode_jenis,n=a.level_2,r=a.level_3;return{KelompokHarga:e.provinsi.kelompokHarga,kodeBarang:e.provinsi.kodeBarang,kode_jenis:t,level_2:n,level_3:r}}))(_)},303:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(19),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},477:function(e,a,t){"use strict";t.r(a);var n=t(80),r=t(81),o=t(83),i=t(82),l=t(0),c=t.n(l),s=t(481),u=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card-header mb-3",style:{fontSize:30,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#ffffff"}},c.a.createElement("div",{className:"row my-auto"},c.a.createElement("div",{className:"col-lg-10 my-auto"},c.a.createElement("h4",{style:{fontSize:25,color:"#ffffff"}},this.props.title)),c.a.createElement("div",{className:"col-lg-2 text-right my-auto"},c.a.createElement(s.a,{id:"reload",type:"dark",effect:"solid"},c.a.createElement("span",null,"Reload")),c.a.createElement("button",{"data-tip":!0,"data-for":"reload",className:"btn btn-success btn-small btn-circle my-auto",onClick:function(){return window.location.reload()}},c.a.createElement("i",{className:"fa fa-retweet"})))))}}]),t}(l.Component);a.default=u},478:function(e,a,t){"use strict";var n=t(13),r=t.n(n),o=t(193),i=t.n(o),l=t(40),c=t.n(l),s=t(0),u=t.n(s),d=t(2),m=t.n(d),p=t(53),f=t.n(p),v=t(28),h=t.n(v),b=t(29),g=function(e,a,t,n){var o=a.value;return"checkbox"===e?r()({},a,{checked:!!o}):"radio"===e?r()({},a,{checked:n(o,t),value:t}):"select-multiple"===e?r()({},a,{value:o||[]}):"file"===e?r()({},a,{value:o||void 0}):a};var y=t(190),E=function(e,a){if(Object(y.a)(e)){if(!a&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(a&&void 0!==e.nativeEvent)return e.nativeEvent.text;var t=e,n=t.target,r=n.type,o=n.value,i=n.checked,l=n.files,c=t.dataTransfer;return"checkbox"===r?!!i:"file"===r?l||c&&c.files:"select-multiple"===r?function(e){var a=[];if(e)for(var t=0;t<e.length;t++){var n=e[t];n.selected&&a.push(n.value)}return a}(e.target.options):o}return e},k="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,j=function(e,a){var t=a.name,n=a.parse,r=a.normalize,o=E(e,k);return n&&(o=n(o,t)),r&&(o=r(t,o)),o},_=t(12),F=t(84),N=function(e,a,t){return Object(F.isValidElementType)(e[a])?null:new Error("Invalid prop `"+a+"` supplied to `"+t+"`.")},w=["_reduxForm"],x=function(e){return e&&"object"===typeof e},O=function(e){return e&&"function"===typeof e},D=function(e){x(e)&&O(e.preventDefault)&&e.preventDefault()},S=function(e,a){if(x(e)&&x(e.dataTransfer)&&O(e.dataTransfer.getData))return e.dataTransfer.getData(a)},C=function(e,a,t){x(e)&&x(e.dataTransfer)&&O(e.dataTransfer.setData)&&e.dataTransfer.setData(a,t)};var R=function(e){var a=e.deepEqual,t=e.getIn,n=function(t){function n(){for(var e,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(a){var t=e.props,n=t.name,o=t.dispatch,i=t.parse,l=t.normalize,c=t.onChange,s=t._reduxForm,u=t.value,d=j(a,{name:n,parse:i,normalize:l}),m=!1;if(c)if(!k&&Object(y.a)(a))c(r()({},a,{preventDefault:function(){return m=!0,D(a)}}),d,u,n);else{var p=c(a,d,u,n);k&&(m=p)}m||(o(s.change(n,d)),s.asyncValidate&&s.asyncValidate(n,d,"change"))},e.handleFocus=function(a){var t=e.props,n=t.name,o=t.dispatch,i=t.onFocus,l=t._reduxForm,c=!1;i&&(k?c=i(a,n):i(r()({},a,{preventDefault:function(){return c=!0,D(a)}}),n)),c||o(l.focus(n))},e.handleBlur=function(a){var t=e.props,n=t.name,o=t.dispatch,i=t.parse,l=t.normalize,c=t.onBlur,s=t._reduxForm,u=t._value,d=t.value,m=j(a,{name:n,parse:i,normalize:l});m===u&&void 0!==u&&(m=d);var p=!1;c&&(k?p=c(a,m,d,n):c(r()({},a,{preventDefault:function(){return p=!0,D(a)}}),m,d,n)),p||(o(s.blur(n,m)),s.asyncValidate&&s.asyncValidate(n,m,"blur"))},e.handleDragStart=function(a){var t=e.props,n=t.name,r=t.onDragStart,o=t.value;C(a,"text",null==o?"":o),r&&r(a,n)},e.handleDrop=function(a){var t=e.props,n=t.name,o=t.dispatch,i=t.onDrop,l=t._reduxForm,c=t.value,s=S(a,"text"),u=!1;i&&i(r()({},a,{preventDefault:function(){return u=!0,D(a)}}),s,c,n),u||(o(l.change(n,s)),D(a))},e}c()(n,t);var o=n.prototype;return o.shouldComponentUpdate=function(e){var t=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?t.props[n]!==e[n]:!~w.indexOf(n)&&!a(t.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var a=this.props,t=a.component,n=a.forwardRef,o=a.name,i=a._reduxForm,l=(a.normalize,a.onBlur,a.onChange,a.onFocus,a.onDragStart,a.onDrop,a.immutableProps,h()(a,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),c=function(e,a,t){var n=e.getIn,o=e.toJS,i=e.deepEqual,l=t.asyncError,c=t.asyncValidating,s=t.onBlur,u=t.onChange,d=t.onDrop,m=t.onDragStart,p=t.dirty,f=t.dispatch,v=t.onFocus,b=t.form,y=t.format,E=t.initial,k=(t.parse,t.pristine),j=t.props,_=t.state,F=t.submitError,N=t.submitFailed,w=t.submitting,x=t.syncError,O=t.syncWarning,D=(t.validate,t.value),S=t._value,C=(t.warn,h()(t,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),R=x||l||F,K=O,B=function(e,t){if(null===t)return e;var n=null==e?"":e;return t?t(e,a):n}(D,y);return{input:g(C.type,{name:a,onBlur:s,onChange:u,onDragStart:m,onDrop:d,onFocus:v,value:B},S,i),meta:r()({},o(_),{active:!(!_||!n(_,"active")),asyncValidating:c,autofilled:!(!_||!n(_,"autofilled")),dirty:p,dispatch:f,error:R,form:b,initial:E,warning:K,invalid:!!R,pristine:k,submitting:!!w,submitFailed:!!N,touched:!(!_||!n(_,"touched")),valid:!R,visited:!(!_||!n(_,"visited"))}),custom:r()({},C,{},j)}}(e,o,r()({},l,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=c.custom,d=h()(c,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof t){var m=d.input;d.meta;return Object(s.createElement)(t,r()({},m,{},u))}return Object(s.createElement)(t,r()({},d,{},u))},n}(s.Component);return n.propTypes={component:N,props:m.a.object},Object(b.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,l=(0,o.getFormState)(e),c=t(l,"initial."+r),s=void 0!==c?c:i&&t(i,r),u=t(l,"values."+r),d=t(l,"submitting"),m=function(e,a){var t=_.a.getIn(e,a);return t&&t._error?t._error:t}(t(l,"syncErrors"),r),p=function(e,a){var n=t(e,a);return n&&n._warning?n._warning:n}(t(l,"syncWarnings"),r),f=a(u,s);return{asyncError:t(l,"asyncErrors."+r),asyncValidating:t(l,"asyncValidating")===r,dirty:!f,pristine:f,state:t(l,"fields."+r),submitError:t(l,"submitErrors."+r),submitFailed:t(l,"submitFailed"),submitting:d,syncError:m,syncWarning:p,initial:s,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},K=t(194),B=t.n(K),V=function(e,a,t,n,r,o){if(o)return e===a},T=function(e,a,t){var n=B()(e.props,a,V),r=B()(e.state,t,V);return!n||!r},P=function(e,a){var t=e._reduxForm.sectionPrefix;return t?t+"."+a:a},H=t(119);var z=function(e){var a=R(e),t=e.setIn,n=function(e){function n(a){var n;if((n=e.call(this,a)||this).ref=u.a.createRef(),n.normalize=function(e,a){var r=n.props.normalize;if(!r)return a;var o=n.props._reduxForm.getValues();return r(a,n.value,t(o,e,a),o,e)},!a._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}c()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,a){return T(this,e,a)},o.UNSAFE_componentWillReceiveProps=function(e){var a=P(this.props,this.props.name),t=P(e,e.name);a===t&&_.a.deepEqual(this.props.validate,e.validate)&&_.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(a),this.props._reduxForm.register(t,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(s.createElement)(a,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return P(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(s.Component);return n.propTypes={name:m.a.string.isRequired,component:N,format:m.a.func,normalize:m.a.func,onBlur:m.a.func,onChange:m.a.func,onFocus:m.a.func,onDragStart:m.a.func,onDrop:m.a.func,parse:m.a.func,props:m.a.object,validate:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),warn:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),forwardRef:m.a.bool,immutableProps:m.a.arrayOf(m.a.string),_reduxForm:m.a.object},Object(H.b)(n)};a.a=z(_.a)},479:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return l}));var n=t(0),r=t.n(n),o=t(55),i=function(e){var a=e.input,t=e.label,n=e.type,o=(e.name,e.limit),i=e.readOnly,l=e.placeholder,c=(e.search,e.meta),s=c.touched,u=c.error,d=c.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},t),r.a.createElement("input",Object.assign({},a,{type:n,id:t,className:"form-control",maxLength:o,readOnly:i,placeholder:l,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),s&&(u&&r.a.createElement("p",{className:"invalid-feedback"},u)||d&&r.a.createElement("p",null,d)))},l=function(e){var a=e.input,t=e.label,n=e.options,i=e.placeholder,l=(e.name,e.disabled),c=(e.value,e.readOnly),s=e.autoComplete,u=e.search,d=e.meta,m=d.touched,p=d.error,f=d.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},t),r.a.createElement(o.a,Object.assign({},a,{options:n,search:u,emptyMessage:"Tidak Ada Data",id:t,placeholder:i||"Silahkan Pilih",disabled:l,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:s,readOnly:c})),m&&(p&&r.a.createElement("p",{className:"invalid-feedback"},p)||f&&r.a.createElement("p",null,f)))}},480:function(e,a,t){"use strict";var n=t(53),r=t.n(n),o=t(12);a.a=function(e){var a=e.getIn;return function(e,t){r()(e,"Form value must be specified");var n=t||function(e){return a(e,"form")};return function(t){for(var i=arguments.length,l=new Array(i>1?i-1:0),c=1;c<i;c++)l[c-1]=arguments[c];return r()(l.length,"No fields specified"),1===l.length?a(n(t),e+".values."+l[0]):l.reduce((function(r,i){var l=a(n(t),e+".values."+i);return void 0===l?r:o.a.setIn(r,i,l)}),{})}}}(o.a)},513:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(483),i=t.n(o),l=t(509),c=t.n(l),s=t(508),u=t.n(s),d=t(5),m=t(515),p=t.n(m);var f=function(e){return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:p.a,width:"250",height:"250",alt:"Empty"}),r.a.createElement("h5",null,e.text),void 0!==e.link?r.a.createElement(d.b,{to:e.link,replace:!0},r.a.createElement("button",{className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-chevron-left mr-2"}),e.location)):null))},v=l.Search.SearchBar,h=l.CSVExport.ExportCSVButton;a.a=function(e){var a=e.textEmpty,t=e.handleClick,n=e.tambahData,o=e.expandRow,l=e.selectRow,s=e.exportCSV,d=e.link,m=e.location;return r.a.createElement(c.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},(function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-left"},r.a.createElement(v,e.searchProps))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-right"},n&&r.a.createElement("button",{onClick:t,className:"btn btn-primary",type:"button"},"Tambah Data",r.a.createElement("i",{className:"fa fa-plus ml-3"})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"col-12"},r.a.createElement(i.a,Object.assign({bootstrap4:!0,pagination:u()(),selectRow:l,expandRow:o},e.baseProps,{striped:!0,noDataIndication:r.a.createElement(f,{text:a||"Tidak Ada Data",link:d,location:m})})),r.a.createElement("br",null),s&&r.a.createElement(h,e.csvProps,"Export CSV!!")))}))}},515:function(e,a,t){e.exports=t.p+"static/media/emptyTable.ffc2d7dc.svg"}}]);
//# sourceMappingURL=70.1bd0df51.chunk.js.map