(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[102,176],{1200:function(e,a,t){"use strict";t.r(a);var n=t(80),r=t(81),l=t(83),o=t(82),i=t(0),c=t.n(i),s=t(9),m=t.n(s),u=t(195),d=t(510),p=t(675),h=t(29),g=t(191),b=t(18),f=t(303),v=t(477),k=t(3),E=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.b)())}},{key:"handleSubmitTambah",value:function(e){var a=this;if(void 0===e.tanggal)return Object(g.e)("Mohon isi tanggal"),!1;if(void 0===e.jumlah)return Object(g.e)("Mohon isi Jumlah"),!1;if(void 0===e.kategori)return Object(g.e)("Mohon isi Kategori"),!1;if(void 0===e.keperluan)return Object(g.e)("Mohon isi Keperluan"),!1;var t={tanggal:e.tanggal,kode_kas:"KAS",nominal:e.jumlah,keterangan:e.kategori,deskripsi:e.keperluan};console.log(t),this.props.dispatch(Object(b.t)());var n=[],r=["1",parseFloat(e.jumlah).toLocaleString("id-ID"),e.keperluan];n.push(r),console.log(n);var l=["No","Nominal","Keperluan"];Object(k.c)("uang-kas/tambah",t).then((function(){return m.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(b.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return a.props.dispatch(Object(u.b)())})).then((function(){return Object(d.a)("Tanggal",e.tanggal,"","","Nomor Bon",a.props.noFaktur,"","","ADMIN",e.tanggal,"",l,"TAMBAH UANG TUNAI",n)})).then((function(){return a.props.dispatch(Object(f.a)("FormKelolaUangBank"))}))})).catch((function(){return m.a.fire({position:"top-end",icon:"error",text:"Sepertinya terjadi kesalahan, silahkan check koneksi anda dan ulangi lagi transaksi",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(b.k)())}))}))}},{key:"handleSubmitAmbil",value:function(e){var a=this;if(void 0===e.tanggal)return Object(g.e)("Mohon isi tanggal"),!1;if(void 0===e.jumlah)return Object(g.e)("Mohon isi Jumlah"),!1;if(void 0===e.kategori)return Object(g.e)("Mohon isi Kategori"),!1;if(void 0===e.keperluan)return Object(g.e)("Mohon isi Keperluan"),!1;var t={tanggal:e.tanggal,kode_kas:"KAS",nominal:e.jumlah,keterangan:e.kategori,deskripsi:e.keperluan};console.log(t),this.props.dispatch(Object(b.t)());var n=[],r=["1",parseFloat(e.jumlah).toLocaleString("id-ID"),e.keperluan];n.push(r),console.log(n);var l=["No","Nominal","Keperluan"];Object(k.c)("uang-kas/ambil",t).then((function(t){return m.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(b.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return a.props.dispatch(Object(u.b)())})).then((function(){return Object(d.a)("Tanggal",e.tanggal,"","","Nomor Bon",a.props.noFaktur,"","","ADMIN",e.tanggal,"",l,"AMBIL UANG TUNAI",n)})).then((function(){return a.props.dispatch(Object(f.a)("FormKelolaUangBank"))}))})).catch((function(e){return m.a.fire({position:"top-end",icon:"error",text:"Sepertinya terjadi kesalahan, silahkan check koneksi anda dan ulangi lagi transaksi",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(b.k)())}))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"card"},c.a.createElement(v.default,{title:"Kelola Uang Kas"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("ul",{className:"nav nav-pills bg-nav-pills nav-justified mb-3"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"#tambah-uang-bank","data-toggle":"tab","aria-expanded":"true",className:"nav-link active"},c.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),c.a.createElement("span",{className:"d-none d-lg-block"},"Tambah Uang Tunai"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"#ambil-uang-bank","data-toggle":"tab","aria-expanded":"false",className:"nav-link "},c.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),c.a.createElement("span",{className:"d-none d-lg-block"},"Ambil Uang Tunai")))),c.a.createElement("div",{className:"tab-content"},c.a.createElement("div",{className:"tab-pane show active",id:"tambah-uang-bank"},c.a.createElement(p.a,{onSubmit:function(a){return e.handleSubmitTambah(a)},from:"kas",onSend:this.props.onSend})),c.a.createElement("div",{className:"tab-pane ",id:"ambil-uang-bank"},c.a.createElement(p.a,{onSubmit:function(a){return e.handleSubmitAmbil(a)},from:"kas",onSend:this.props.onSend})))))))))}}]),t}(i.Component);a.default=Object(h.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,onSend:e.provinsi.onSend}}),null)(E)},477:function(e,a,t){"use strict";t.r(a);var n=t(80),r=t(81),l=t(83),o=t(82),i=t(0),c=t.n(i),s=t(481),m=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card-header mb-3",style:{fontSize:30,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#ffffff"}},c.a.createElement("div",{className:"row my-auto"},c.a.createElement("div",{className:"col-lg-10 my-auto"},c.a.createElement("h4",{style:{fontSize:25,color:"#ffffff"}},this.props.title)),c.a.createElement("div",{className:"col-lg-2 text-right my-auto"},c.a.createElement(s.a,{id:"reload",type:"dark",effect:"solid"},c.a.createElement("span",null,"Reload")),c.a.createElement("button",{"data-tip":!0,"data-for":"reload",className:"btn btn-success btn-small btn-circle my-auto",onClick:function(){return window.location.reload()}},c.a.createElement("i",{className:"fa fa-retweet"})))))}}]),t}(i.Component);a.default=m},479:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return i}));var n=t(0),r=t.n(n),l=t(55),o=function(e){var a=e.input,t=e.label,n=e.type,l=(e.name,e.limit),o=e.readOnly,i=e.placeholder,c=(e.search,e.meta),s=c.touched,m=c.error,u=c.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},t),r.a.createElement("input",Object.assign({},a,{type:n,id:t,className:"form-control",maxLength:l,readOnly:o,placeholder:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),s&&(m&&r.a.createElement("p",{className:"invalid-feedback"},m)||u&&r.a.createElement("p",null,u)))},i=function(e){var a=e.input,t=e.label,n=e.options,o=e.placeholder,i=(e.name,e.disabled),c=(e.value,e.readOnly),s=e.autoComplete,m=e.search,u=e.meta,d=u.touched,p=u.error,h=u.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},t),r.a.createElement(l.a,Object.assign({},a,{options:n,search:m,emptyMessage:"Tidak Ada Data",id:t,placeholder:o||"Silahkan Pilih",disabled:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:s,readOnly:c})),d&&(p&&r.a.createElement("p",{className:"invalid-feedback"},p)||h&&r.a.createElement("p",null,h)))}},510:function(e,a,t){"use strict";var n=t(511);t(512);a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",m=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",u=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",d=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],p=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",h=arguments.length>13?arguments[13]:void 0,g=new n.default;g.setProperties({title:p}),g.autoTable(d,h,{startY:40,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});var b=g.lastAutoTable.finalY+10;g.text(p,14,15),g.setFontSize(10),g.text(e,14,25),g.text(":",37,25),g.text(a,40,25),g.text(t,120,25),g.text(":",141,25),g.text(r,145,25),g.text(l,14,30),g.text(":",37,30),g.text(o,40,30),g.text(i,120,30),g.text(":",141,30),g.text(c,145,30),g.text("User",160,b+10),g.text(":",168,b+10),g.text(s,170,b+10),g.text("Cetak",160,b+15),g.text(":",168,b+15),g.text(m,170,b+15),g.text("Valid",160,b+20),g.text(":",168,b+20),g.text(u,170,b+20);var f=g.output("datauristring"),v=window.open();v.document.open(),v.document.write("<html><head><title>"+p+"</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+f+"></embed></body></html>"),v.document.close()}},675:function(e,a,t){"use strict";var n=t(80),r=t(81),l=t(83),o=t(82),i=t(0),c=t.n(i),s=t(29),m=t(478),u=t(471),d=t(519),p=t(207),h=t(125),g=t(479),b=Object(d.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),f=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={listKategori:[],listRekening:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(p.b)()),this.props.dispatch(Object(h.d)())}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(m.a,{name:"tanggal",label:"Tanggal",type:"date",component:g.a})),"bank"===this.props.from?c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Rekening"),c.a.createElement(m.a,{name:"rekening",className:"form-control",component:"select"},c.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH"),this.props.rekening.map((function(e){return c.a.createElement("option",{value:e.no_rekening,key:e.no_rekening},e.atas_nama)})))):c.a.createElement("div",{className:"col-md-4 col-lg-4"}),c.a.createElement("div",{className:"col-md-4 col-lg-4"}),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Jumlah"),c.a.createElement(m.a,Object.assign({name:"jumlah",component:"input",type:"tel",className:"form-control"},b))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Kategori"),c.a.createElement(m.a,{name:"kategori",className:"form-control",component:"select"},c.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH"),this.props.parameter.map((function(e){return c.a.createElement("option",{value:e.kategori_transaksi,key:e.kategori_transaksi},e.kategori_transaksi)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(m.a,{name:"keperluan",label:"Untuk Keperluan",type:"text",component:g.a})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),t}(i.Component);f=Object(u.a)({form:"FormKelolaUangBank",enableReinitialize:!0})(f),a.a=Object(s.b)((function(e){return{parameter:e.provinsi.parameterTransaksi,rekening:e.provinsi.rekening}}))(f)}}]);
//# sourceMappingURL=102.d57a3369.chunk.js.map