(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[138,176],{1235:function(e,a,t){"use strict";t.r(a);var n=t(80),l=t(81),r=t(83),c=t(82),o=t(0),s=t.n(o),i=t(477),m=t(29),u=t(478),p=t(471),d=t(480),b=t(519),g=t(3),f=t(479),h=Object(b.createNumberMask)({prefix:"Rp. ",locale:"id-ID"}),N=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={list_barang:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(g.b)("jenis/get/all").then((function(a){return e.setState({list_barang:a.data})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("h3",null,"Barcode 1"),s.a.createElement("hr",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(u.a,{name:"kode_barang",component:f.b,options:this.state.list_barang.map((function(e){return{value:e.kode_jenis,name:e.kode_jenis}})),type:"text",label:"Kode Barang",placeholder:"Masukan Kode Barang"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(u.a,{name:"sub_kategori",component:f.a,type:"text",label:"Sub Kategori",placeholder:"Masukan Sub Kategori"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(u.a,{name:"pkg",component:f.a,type:"text",label:"PKG (Gr)",placeholder:"Masukan Pkg",onChange:function(){return e.props.change("gw",e.props.gw)},onBlur:function(){return e.props.change("gw",e.props.gw)},step:"0.01"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(u.a,{name:"nw",component:f.a,type:"text",label:"NW (Gr)",placeholder:"Masukan NW",onChange:function(){return e.props.change("gw",e.props.gw)},onBlur:function(){return e.props.change("gw",e.props.gw)},step:"0.01"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(u.a,{name:"gw",component:f.a,type:"text",label:"GW (Gr)",placeholder:"Masukan GW"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(u.a,{name:"tukaran",component:f.a,type:"text",label:"Tukaran (%)",placeholder:"Masukan Tukaran (%)"})),s.a.createElement("div",{className:"col-lg-5"},s.a.createElement(u.a,Object.assign({name:"ongkos",component:f.a,type:"telp",label:"Ongkos (Rp)",placeholder:"Masukan Ongkos (Rp)"},h)))))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},s.a.createElement("i",{className:"fa fa-print mr-2"})," Cetak"))))}}]),t}(o.Component);N=Object(p.a)({form:"CetakBarcodeHead",enableReinitialize:!0})(N);var v=Object(d.a)("CetakBarcodeHead"),E=Object(m.b)((function(e){var a=v(e,"pkg","nw","pkg2","nw2"),t=a.pkg,n=a.nw,l=a.pkg2,r=a.nw2;return{gw:parseFloat(t||0)+parseFloat(n||0),gw2:parseFloat(l||0)+parseFloat(r||0)}}))(N),k=t(199),y=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(k.b)())}},{key:"paddingNumberGW",value:function(e){return("00000000".substring(0,"00000000".length-e.length)+e).replace(".","")}},{key:"paddingNumberNW",value:function(e){return("000000".substring(0,"000000".length-e.length)+e).replace(".","")}},{key:"handleSubmit",value:function(e){var a="";a+="<xpml><page quantity='0' pitch='35.0 mm'></xpml>I8,A\n",a+="ZN\n",a+="q504\n",a+="O\n",a+="JF\n",a+="\x1bKIZZQ0\n",a+="\x1bKI9+0.0\n",a+="ZT\n",a+="Q280,B25\n",a+="\x1bArg\x1b\x1blabel 350 31\n",a+="\x1b\x1bexit\n",a+="\x1bKI80\n",a+="<xpml></page></xpml><xpml><page quantity='1' pitch='35.0 mm'></xpml>N\n",a+='A400,275,2,2,1,2,N,"'.concat(e.kode_barang," - ").concat(e.sub_kategori||"",'"\n'),a+='B350,238,2,1,1,10,73,N,"'.concat(e.kode_barang,"X").concat(this.paddingNumberGW(parseFloat(e.gw).toFixed(2))).concat(this.paddingNumberNW(parseFloat(e.nw).toFixed(2)),'"\n'),a+='A400,155,2,2,1,2,N,"'.concat(e.kode_barang,"X>C").concat(this.paddingNumberGW(parseFloat(e.gw).toFixed(2))).concat(this.paddingNumberNW(parseFloat(e.nw).toFixed(2)),'"\n'),a+='A400,107,2,2,1,2,N,"GW"\n',a+='A400,62,2,2,1,2,N,"NW"\n',a+='A365,107,2,2,1,2,N,"'.concat(parseFloat(e.gw||0).toFixed(2),'"\n'),a+='A365,62,2,2,1,2,N,"'.concat(parseFloat(e.nw||0).toFixed(2),'"\n'),a+='A250,107,2,2,1,2,N,"ONG"\n',a+='A250,62,2,2,1,2,N,"T"\n',a+='A205,107,2,2,1,2,N,"'.concat(parseFloat(e.ongkos||0).toLocaleString("id-ID")||0,'"\n'),a+='A205,62,2,2,1,2,N,"'.concat(parseFloat(e.tukaran||0).toFixed(2),'%"\n'),a+="P1\n",a+="<xpml></page></xpml><xpml><end/></xpml>",document.getElementById("myInput").value=a;var t=document.createElement("a"),n=new Blob([document.getElementById("myInput").value],{type:"text/plain;charset=utf-8"});t.href=URL.createObjectURL(n),t.download="autoprint_barcode.txt",document.body.appendChild(t),t.click()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"card"},s.a.createElement(i.default,{title:"Cetak Barcode"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(E,{onSubmit:function(a){return e.handleSubmit(a)}})),s.a.createElement("div",{className:"d-none"},s.a.createElement("textarea",{id:"myInput"}))))))}}]),t}(o.Component);a.default=Object(m.b)()(y)},477:function(e,a,t){"use strict";t.r(a);var n=t(80),l=t(81),r=t(83),c=t(82),o=t(0),s=t.n(o),i=t(481),m=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"card-header mb-3",style:{fontSize:30,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#ffffff"}},s.a.createElement("div",{className:"row my-auto"},s.a.createElement("div",{className:"col-lg-10 my-auto"},s.a.createElement("h4",{style:{fontSize:25,color:"#ffffff"}},this.props.title)),s.a.createElement("div",{className:"col-lg-2 text-right my-auto"},s.a.createElement(i.a,{id:"reload",type:"dark",effect:"solid"},s.a.createElement("span",null,"Reload")),s.a.createElement("button",{"data-tip":!0,"data-for":"reload",className:"btn btn-success btn-small btn-circle my-auto",onClick:function(){return window.location.reload()}},s.a.createElement("i",{className:"fa fa-retweet"})))))}}]),t}(o.Component);a.default=m},479:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return o}));var n=t(0),l=t.n(n),r=t(55),c=function(e){var a=e.input,t=e.label,n=e.type,r=(e.name,e.limit),c=e.readOnly,o=e.placeholder,s=(e.search,e.meta),i=s.touched,m=s.error,u=s.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},t),l.a.createElement("input",Object.assign({},a,{type:n,id:t,className:"form-control",maxLength:r,readOnly:c,placeholder:o,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),i&&(m&&l.a.createElement("p",{className:"invalid-feedback"},m)||u&&l.a.createElement("p",null,u)))},o=function(e){var a=e.input,t=e.label,n=e.options,c=e.placeholder,o=(e.name,e.disabled),s=(e.value,e.readOnly),i=e.autoComplete,m=e.search,u=e.meta,p=u.touched,d=u.error,b=u.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},t),l.a.createElement(r.a,Object.assign({},a,{options:n,search:m,emptyMessage:"Tidak Ada Data",id:t,placeholder:c||"Silahkan Pilih",disabled:o,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:i,readOnly:s})),p&&(d&&l.a.createElement("p",{className:"invalid-feedback"},d)||b&&l.a.createElement("p",null,b)))}}}]);
//# sourceMappingURL=138.9bc7b21d.chunk.js.map