/*! For license information please see 64.c3f701e2.chunk.js.LICENSE.txt */
(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[64,26,156,157,158,167,174,176],{1195:function(e,t,a){"use strict";a.r(t);var n=a(86),r=a(80),o=a(81),i=a(83),l=a(82),s=a(0),c=a.n(s),u=a(674),m=a(483),d=a.n(m),p=a(705),f=a(9),h=a.n(f),g=a(29),v=a(54),b=a.n(v),y=a(289),k=a(195),E=a(18),N=a(481),F=a(543),O=a(477),w=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.state={products:[],response:"",tanggal:"",tukang:"DEFAULT|DEFAULT",columns:[{dataField:"kodeJenis",text:"Kode Jenis",footer:""},{dataField:"kadarTransaksi",text:"Kadar Cetak(%)",footer:""},{dataField:"bruto",text:"Bruto(Gr)",footer:function(e){return e.reduce((function(e,t){return parseFloat(e)+parseFloat(t)}),0)}},{dataField:"netto",text:"Netto(Gr)",footer:function(e){return e.reduce((function(e,t){return parseFloat(e)+parseFloat(t)}),0)}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return Object(F.a)("kirimBahan",a,o.props.dispatch,Object(y.b)())}},c.a.createElement(N.a,{id:"hapus",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),c.a.createElement("i",{className:"fa fa-trash mr-1"})),c.a.createElement("br",null))}}]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(y.b)()),this.props.dispatch(Object(k.b)()),this.props.dispatch(Object(E.l)("kirimBahan")),this.props.dispatch(Object(E.o)("kirimBahan")),this.props.dispatch(Object(E.r)("kirimBahan"))}},{key:"kirimBahan",value:function(){if("DEFAULT|DEFAULT"===this.state.tukang)return h.a.fire({position:"top-end",icon:"error",text:"Data Harap isi Tukang",showConfirmButton:!1,timer:1500}),!1;if(""===this.state.tanggal)return h.a.fire({position:"top-end",icon:"error",text:"Data Harap isi Tanggal",showConfirmButton:!1,timer:1500}),!1;var e={noFaktur:this.props.noFaktur,noBon:this.props.noFaktur,tanggal:this.state.tanggal,kodeLokasi:"PUSAT",barangDetails:JSON.parse(localStorage.getItem("kirimBahan")),footerItem:{totalNetto:this.props.sumNetto,totalBruto:this.props.sumBruto,totalNettoExt:0,totalP:0,totalGross:0,totalQty:this.props.sumQty,totalpkg:0,totalRp:0,totalK:0},footerDocument:{inputBy:this.props.username}};console.log(e)}},{key:"handleSubmit",value:function(e){var t=(e.kodeBarang?e.kodeBarang:"DEFAULT|DEFAULT|DEFAULT|DEFAULT").split("|"),a={noFaktur:this.props.noFaktur,netto:parseFloat(e.netto),bruto:parseFloat(e.bruto),rp:0,kadarTransaksi:parseFloat(e.kadarTransaksi),nettoDiscGlobalExt:0,keterangan:t[3],pkg:0,gross:0,p:0,kodeKategori:"-",qty:1,k:0,kadarCetak:0,noBarcode:"-",kodeJenis:t[0],discGlobalGr:0,nettoDiscGlobal:0,discGlobalPr:0},n=JSON.parse(localStorage.getItem("kirimBahan"))||[];n.push(a),localStorage.setItem("kirimBahan",JSON.stringify(n)),h.a.fire({position:"top-end",icon:"success",text:"Transaksi berhasil",showConfirmButton:!1,timer:1500}),this.props.dispatch(Object(y.b)())}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement(O.default,{title:"Kirim Bahan"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{name:"tanggal",id:"tanggal",type:"date",className:"form-control",onChange:this.inputChange("tanggal")})),c.a.createElement("div",{className:"col-md-4 col-lg-3"},c.a.createElement("label",{htmlFor:""},"Tukang"),c.a.createElement("select",{name:"tukang",id:"tukang",className:"form-control",onChange:this.inputChange("tukang")},c.a.createElement("option",{value:"DEFAULT|DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),c.a.createElement("option",{value:"ANGGUN|ANGGUN",key:"ANGGUN"},"ANGGUN"))),c.a.createElement("div",{className:"col-lg-1 col-md-1 no-gutters form-group",style:{marginLeft:-30}},c.a.createElement("label",{htmlFor:"",className:"text-white"},"."),c.a.createElement("button",{className:"btn btn-primary form-control","data-toggle":"modal","data-target":"#primary-header-modal"},"+")),c.a.createElement("div",{className:"col-md-5 col-lg-5"})),c.a.createElement(p.default,{onSubmit:function(t){return e.handleSubmit(t)}}))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"col-lg-12 col-md-12 mb-2"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.kirimBahan()}},"Simpan Data")))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"col-lg-12"},this.props.listBarang?c.a.createElement(d.a,{keyField:"id",data:this.props.listBarang,columns:this.state.columns,bordered:!0,headerClasses:"header-table"}):c.a.createElement(b.a,{width:"100%",height:100})))))),c.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tukang Masak"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(u.default,null))))))}}]),a}(s.Component);t.default=Object(g.b)((function(e){return{listBarang:e.provinsi.kirimBahan,noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,sumBruto:e.perhitungan.sumBruto,sumNetto:e.perhitungan.sumNetto,sumQty:e.perhitungan.sumQty}}),null)(w)},477:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a(81),o=a(83),i=a(82),l=a(0),s=a.n(l),c=a(481),u=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"card-header mb-3",style:{fontSize:30,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#ffffff"}},s.a.createElement("div",{className:"row my-auto"},s.a.createElement("div",{className:"col-lg-10 my-auto"},s.a.createElement("h4",{style:{fontSize:25,color:"#ffffff"}},this.props.title)),s.a.createElement("div",{className:"col-lg-2 text-right my-auto"},s.a.createElement(c.a,{id:"reload",type:"dark",effect:"solid"},s.a.createElement("span",null,"Reload")),s.a.createElement("button",{"data-tip":!0,"data-for":"reload",className:"btn btn-success btn-small btn-circle my-auto",onClick:function(){return window.location.reload()}},s.a.createElement("i",{className:"fa fa-retweet"})))))}}]),a}(l.Component);t.default=u},478:function(e,t,a){"use strict";var n=a(13),r=a.n(n),o=a(193),i=a.n(o),l=a(40),s=a.n(l),c=a(0),u=a.n(c),m=a(2),d=a.n(m),p=a(53),f=a.n(p),h=a(28),g=a.n(h),v=a(29),b=function(e,t,a,n){var o=t.value;return"checkbox"===e?r()({},t,{checked:!!o}):"radio"===e?r()({},t,{checked:n(o,a),value:a}):"select-multiple"===e?r()({},t,{value:o||[]}):"file"===e?r()({},t,{value:o||void 0}):t};var y=a(190),k=function(e,t){if(Object(y.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,o=n.value,i=n.checked,l=n.files,s=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?l||s&&s.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},E="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,N=function(e,t){var a=t.name,n=t.parse,r=t.normalize,o=k(e,E);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},F=a(12),O=a(84),w=function(e,t,a){return Object(O.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},T=["_reduxForm"],B=function(e){return e&&"object"===typeof e},x=function(e){return e&&"function"===typeof e},D=function(e){B(e)&&x(e.preventDefault)&&e.preventDefault()},S=function(e,t){if(B(e)&&B(e.dataTransfer)&&x(e.dataTransfer.getData))return e.dataTransfer.getData(t)},j=function(e,t,a){B(e)&&B(e.dataTransfer)&&x(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var C=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,l=a.normalize,s=a.onChange,c=a._reduxForm,u=a.value,m=N(t,{name:n,parse:i,normalize:l}),d=!1;if(s)if(!E&&Object(y.a)(t))s(r()({},t,{preventDefault:function(){return d=!0,D(t)}}),m,u,n);else{var p=s(t,m,u,n);E&&(d=p)}d||(o(c.change(n,m)),c.asyncValidate&&c.asyncValidate(n,m,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onFocus,l=a._reduxForm,s=!1;i&&(E?s=i(t,n):i(r()({},t,{preventDefault:function(){return s=!0,D(t)}}),n)),s||o(l.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,l=a.normalize,s=a.onBlur,c=a._reduxForm,u=a._value,m=a.value,d=N(t,{name:n,parse:i,normalize:l});d===u&&void 0!==u&&(d=m);var p=!1;s&&(E?p=s(t,d,m,n):s(r()({},t,{preventDefault:function(){return p=!0,D(t)}}),d,m,n)),p||(o(c.blur(n,d)),c.asyncValidate&&c.asyncValidate(n,d,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,o=a.value;j(t,"text",null==o?"":o),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onDrop,l=a._reduxForm,s=a.value,c=S(t,"text"),u=!1;i&&i(r()({},t,{preventDefault:function(){return u=!0,D(t)}}),c,s,n),u||(o(l.change(n,c)),D(t))},e}s()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~T.indexOf(n)&&!t(a.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,l=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,g()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),s=function(e,t,a){var n=e.getIn,o=e.toJS,i=e.deepEqual,l=a.asyncError,s=a.asyncValidating,c=a.onBlur,u=a.onChange,m=a.onDrop,d=a.onDragStart,p=a.dirty,f=a.dispatch,h=a.onFocus,v=a.form,y=a.format,k=a.initial,E=(a.parse,a.pristine),N=a.props,F=a.state,O=a.submitError,w=a.submitFailed,T=a.submitting,B=a.syncError,x=a.syncWarning,D=(a.validate,a.value),S=a._value,j=(a.warn,g()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),C=B||l||O,A=x,I=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(D,y);return{input:b(j.type,{name:t,onBlur:c,onChange:u,onDragStart:d,onDrop:m,onFocus:h,value:I},S,i),meta:r()({},o(F),{active:!(!F||!n(F,"active")),asyncValidating:s,autofilled:!(!F||!n(F,"autofilled")),dirty:p,dispatch:f,error:C,form:v,initial:k,warning:A,invalid:!!C,pristine:E,submitting:!!T,submitFailed:!!w,touched:!(!F||!n(F,"touched")),valid:!C,visited:!(!F||!n(F,"visited"))}),custom:r()({},j,{},N)}}(e,o,r()({},l,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=s.custom,m=g()(s,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof a){var d=m.input;m.meta;return Object(c.createElement)(a,r()({},d,{},u))}return Object(c.createElement)(a,r()({},m,{},u))},n}(c.Component);return n.propTypes={component:w,props:d.a.object},Object(v.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,l=(0,o.getFormState)(e),s=a(l,"initial."+r),c=void 0!==s?s:i&&a(i,r),u=a(l,"values."+r),m=a(l,"submitting"),d=function(e,t){var a=F.a.getIn(e,t);return a&&a._error?a._error:a}(a(l,"syncErrors"),r),p=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(l,"syncWarnings"),r),f=t(u,c);return{asyncError:a(l,"asyncErrors."+r),asyncValidating:a(l,"asyncValidating")===r,dirty:!f,pristine:f,state:a(l,"fields."+r),submitError:a(l,"submitErrors."+r),submitFailed:a(l,"submitFailed"),submitting:m,syncError:d,syncWarning:p,initial:c,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},A=a(194),I=a.n(A),L=function(e,t,a,n,r,o){if(o)return e===t},_=function(e,t,a){var n=I()(e.props,t,L),r=I()(e.state,a,L);return!n||!r},K=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},U=a(119);var G=function(e){var t=C(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=u.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var o=n.props._reduxForm.getValues();return r(t,n.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}s()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return _(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=K(this.props,this.props.name),a=K(e,e.name);t===a&&F.a.deepEqual(this.props.validate,e.validate)&&F.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return K(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(c.Component);return n.propTypes={name:d.a.string.isRequired,component:w,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(U.b)(n)};t.a=G(F.a)},480:function(e,t,a){"use strict";var n=a(53),r=a.n(n),o=a(12);t.a=function(e){var t=e.getIn;return function(e,a){r()(e,"Form value must be specified");var n=a||function(e){return t(e,"form")};return function(a){for(var i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];return r()(l.length,"No fields specified"),1===l.length?t(n(a),e+".values."+l[0]):l.reduce((function(r,i){var l=t(n(a),e+".values."+i);return void 0===l?r:o.a.setIn(r,i,l)}),{})}}}(o.a)},482:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"h",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"g",(function(){return m}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function r(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function i(e,t,a,n){return new(a||(a=Promise))((function(r,o){function i(e){try{s(n.next(e))}catch(t){o(t)}}function l(e){try{s(n.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))}function l(e,t){var a,n,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function s(e){var t="function"===typeof Symbol&&Symbol.iterator,a=t&&e[t],n=0;if(a)return a.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var a="function"===typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,o=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(l){r={error:l}}finally{try{n&&!n.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}return i}function u(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}function m(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<a;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,r++)n[r]=o[i];return n}},526:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(550).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),r=localStorage.getItem("namaTimbangan"),o=localStorage.getItem("enableTimbangan"),i=function(e){o?n.database().ref(r).on("value",(function(t){var a=t.val();e("bruto",a.nilai),console.log(a.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},l=function(e){o?n.database().ref(r).on("value",(function(t){var a=t.val();e("jumlah",a.nilai),console.log(a.nilai);var n=Object.keys(a).map((function(e){return a[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")}},543:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(9),r=a.n(n),o=function(e){e.forEach((function(e){localStorage.removeItem(e)}))},i=function(e,t,a,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var i=JSON.parse(localStorage.getItem(e))||[];i.splice(t,1),localStorage.setItem(e,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)}))}}))},l=function(e,t,a,n){return new Promise((function(o,i){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){if(i.isConfirmed){var l=JSON.parse(localStorage.getItem(e))||[];l.splice(t,1),localStorage.setItem(e,JSON.stringify(l)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)})).then(o("Berhasil")).catch("Gagal")}}))}))}},674:function(e,t,a){"use strict";a.r(t);var n=a(86),r=a(80),o=a(81),i=a(83),l=a(82),s=a(0),c=a.n(s),u=a(483),m=a.n(u),d=a(509),p=a.n(d),f=a(478),h=a(471),g=a(29),v=a(54),b=a.n(v),y=a(508),k=a.n(y),E=a(209),N=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,i=e.meta,l=i.touched,s=i.error,u=i.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},a),c.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),l&&(s&&c.a.createElement("p",{className:"invalid-feedback"},s)||u&&c.a.createElement("p",null,u)))},F=d.Search.SearchBar,O=[{dataField:"kodeLokasi",text:"Kode Tukang"},{dataField:"namaLokasi",text:"Nama Tukang"}],w=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.submit=function(){console.log(JSON.stringify(o.state))},o.state={kode_tukang:null,nama_tukang:null,listTukang:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(E.b)())}},{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement("div",{className:"form-group"},c.a.createElement(f.a,{name:"kodeLokasi",label:"Kode Tukang",component:N,type:"text"}))),c.a.createElement("div",{className:"col-md-10"},c.a.createElement("div",{className:"form-group"},c.a.createElement(f.a,{name:"namaLokasi",label:"Nama Tukang",component:N,type:"text"}))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{name:"submit",id:"simpan",type:"submit",className:"btn btn-info"},"Submit"))))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},this.props.listTukang?c.a.createElement(p.a,{keyField:"id",data:this.props.listTukang,columns:O,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement("h3",{className:"mt-2"},"Kolom Pencarian"),c.a.createElement("div",null,c.a.createElement(F,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),c.a.createElement("hr",null),c.a.createElement(m.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:k()()})))})):c.a.createElement(b.a,{width:"100%",height:300})))}}]),a}(s.Component);w=Object(h.a)({form:"FormKirimMasak",enableReinitialize:!0})(w),t.default=Object(g.b)((function(e){return{listTukang:e.provinsi.listTukang}}),null)(w)},705:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a(81),o=a(83),i=a(82),l=a(0),s=a.n(l),c=a(478),u=a(471),m=a(480),d=a(29),p=a(62),f=a.n(p),h=function(e){var t={};e.kodeBarang||(t.kodeBarang="Tidak Boleh Kosong"),e.kadarTransaksi||(t.kadarTransaksi="Tidak Boleh Kosong"),e.bruto||(t.bruto="Tidak Boleh Kosong"),e.netto||(t.netto="Tidak Boleh Kosong")},g=a(526),v=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,i=e.meta,l=i.touched,c=i.error,u=i.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},a),s.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),l&&(c&&s.a.createElement("p",{className:"invalid-feedback"},c)||u&&s.a.createElement("p",null,u)))},b=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleChange=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");r.setState({kodeJenis:t[0],kadarCetak:t[1],kadarBeli:t[2],namaJenis:t[3]})}},r.state={listBarang:[]},r}return Object(r.a)(a,[{key:"setKadar",value:function(){this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli),this.props.change("keterangan",this.state.namaJenis)}},{key:"setNetto",value:function(){this.props.change("netto","NaN"===this.props.netto?0:this.props.netto)}},{key:"componentDidMount",value:function(){var e=this;f.a.get("http://188.166.254.162:4002/api/v1/subcategorys2?kodeKelompok=PERHIASAN").then((function(t){return e.setState({listBarang:t.data})})).catch((function(e){return console.log(e)})),Object(g.a)(this.props.change)}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement("label",{htmlFor:""},"Kode Barang"),s.a.createElement(c.a,{name:"kodeBarang",component:"select",className:"form-control",onChange:this.handleChange(),onBlur:this.setKadar()},s.a.createElement("option",{value:"DEFAULT|DEFAULT|DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listBarang.map((function(e){return s.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarBeli+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})))),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement(c.a,{name:"kadarTransaksi",label:"Kadar (%)",component:v,type:"text",onBlur:this.setNetto(),readOnly:!0})),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement(c.a,{name:"bruto",label:"Bruto (Gr)",component:v,type:"text",onBlur:this.setNetto()})),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement(c.a,{name:"netto",label:"Netto (Gr)",component:v,type:"text",onBlur:this.setNetto(),readOnly:!0})),s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary mb-3 mt-3",onClick:this.submit},"Tambah data")))))}}]),a}(l.Component);b=Object(u.a)({form:"FormKirimMasakBarang",enableReinitialize:!0,validate:h})(b);var y=Object(m.a)("FormKirimMasakBarang");t.default=Object(d.b)((function(e){var t=y(e,"bruto","kadarTransaksi"),a=t.bruto,n=t.kadarTransaksi;return{netto:(parseFloat(a)*(parseFloat(n)/100)).toFixed(3)}}))(b)}}]);
//# sourceMappingURL=64.c3f701e2.chunk.js.map