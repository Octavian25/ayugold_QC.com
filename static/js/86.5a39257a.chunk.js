(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[86,176],{1242:function(e,a,t){"use strict";t.r(a);var n=t(86),l=t(80),r=t(81),o=t(83),s=t(82),i=t(0),c=t.n(i),m=t(29),d=t(303),u=t(478),p=t(471),h=t(195),b=t(191),k=t(666),g=t(479),E=t(199),f=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={listSupplier:[]},n}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(E.b)())}},{key:"setKodeBarang",value:function(e){var a=(e.target.value||"DEFAULT|DEFAULT|DEFAULT").split("|");this.props.change("kadar",a[2])}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Kode Barang"),c.a.createElement(u.a,{name:"kode_jenis",component:"select",className:"form-control",onChange:function(a){return e.setKodeBarang(a)}},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.props.KodeBarangList.filter((function(e){return"PERHIASAN"===e.kode_kelompok})).map((function(e){return c.a.createElement("option",{value:e.kode_jenis+"|"+e.nama_jenis+"|"+e.kadar_cetak,key:e.kode_jenis},e.nama_jenis)})))),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(u.a,{label:"Kadar (%)",name:"kadar",component:g.a,type:"number"})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(u.a,{label:"Berat (Gr)",name:"bruto",component:g.a,type:"number"}))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))}}]),t}(i.Component);f=Object(p.a)({form:"FormSaldoAwalStok",enableReinitialize:!0,validate:k.a})(f);var v=Object(m.b)((function(e){return{KodeBarangList:e.provinsi.kodeBarang}}))(f),N=t(52),y=t(831),S=t.n(y),j=t(5),O=t(477),_=t(127),w=t(513),T=t(3),A=t(18),x=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).handleChange=function(e){return function(a){r.setState(Object(n.a)({},e,a.target.value))}},r.state={tipeTransksi:"HUTANG",listSales:[],columns:[{dataField:"kode_jenis",text:"Kode Jenis"},{dataField:"kadar_cetak",text:"Kadar "},{dataField:"bruto",text:"Berat"}],tanggal:"",sales:"",loading:!1},r}return Object(r.a)(t,[{key:"sendSaldoAwal",value:function(){var e=this;if(""===this.state.tanggal)return Object(b.c)("Mohon isi tanggal"),!1;if(""===this.state.kode_lokasi)return Object(b.c)("Mohon isi Lokasi"),!1;if(null===localStorage.getItem("SaldoAwalStock"))return Object(b.c)("Data masih Kosong, Silahkan tambahkan dahulu"),!1;this.props.dispatch(Object(A.t)());var a={no_transaksi:this.props.noFaktur,jenis_trx:"STOCK",tanggal:this.state.tanggal,kode_lokasi:this.state.kode_lokasi,detail_saldo_awal:JSON.parse(localStorage.getItem("SaldoAwalStock"))};Object(T.c)("saldo-awal/simpan",a).then((function(){return e.props.dispatch(Object(A.k)())})).then((function(){return Object(b.b)("Saldo Awal Berhasil Disimpan")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return localStorage.removeItem("SaldoAwalStock")})).then((function(){return e.props.dispatch(Object(h.b)())})).then((function(){return e.props.dispatch(Object(N.h)())})).catch((function(){return Object(b.c)("Sepertinya ada gangguan, Mohon periksa koneksi anda").then((function(){return e.props.dispatch(Object(A.k)())}))}))}},{key:"setTipe",value:function(e){this.setState({tipeTransksi:e.target.value}),this.props.dispatch(Object(d.a)("FormSaldoAwalPiutang"))}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(h.b)()),this.props.dispatch(Object(N.h)()),this.props.dispatch(Object(_.d)()),this.props.dispatch(Object(E.b)())}},{key:"handlerSimpan",value:function(e){var a={kode_supplier:"-",kode_customer:"-",kode_sales:"-",no_bon:"-",saldo_gr:0,saldo_rp:0,titip_gr:0,titip_rp:0,kode_jenis:e.kode_jenis.split("|")[0],kadar_cetak:e.kode_jenis.split("|")[2],bruto:e.bruto,netto:0};console.log(JSON.stringify(a));var t=JSON.parse(localStorage.getItem("SaldoAwalStock"))||[];t.push(a),localStorage.setItem("SaldoAwalStock",JSON.stringify(t)),Object(b.b)("Data Tersimpan"),this.props.dispatch(Object(N.h)())}},{key:"render",value:function(){var e=this;return!0===this.state.loading?c.a.createElement("div",{className:"d-flex no-block justify-content-center align-items-center position-relative",style:{width:"100%",height:"90vh"}},c.a.createElement("div",null,c.a.createElement(S.a,{type:"Oval",color:"#00BFFF",height:70,width:70}))):c.a.createElement("div",{className:"container-fluid"},c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(j.b,{to:"/saldoawal"},c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement(O.default,{title:"Saldo Awal Piutang Customer"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",className:"form-control",onChange:this.handleChange("tanggal")})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(u.a,{name:"kode_lokasi",component:g.b,options:this.props.lokasi.map((function(e){return{value:e.kode_lokasi,name:e.nama_lokasi}})),type:"text",label:"Kode Lokasi",placeholder:"Masukan Kode Lokasi",onChange:function(a){return e.setState({kode_lokasi:a})}})),c.a.createElement("div",{className:"col-lg-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"}),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary","data-target":"#tambahBarang","data-toggle":"modal"},"Tambah Data"))),c.a.createElement("div",{className:"col-lg-12 mt-3"},c.a.createElement(w.a,{keyField:"kode_jenis",data:this.props.dataSaldoAwalStok,columns:this.state.columns})))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:this.props.onSend,onClick:function(){return e.sendSaldoAwal()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan"))))))))),c.a.createElement("div",{id:"tambahBarang",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Transaksi"),c.a.createElement("button",{id:"dismiss_modal1",name:"dismiss_modal1",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(v,{onSubmit:function(a){return e.handlerSimpan(a)},tipe:this.state.tipeTransksi})),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))}}]),t}(i.Component);x=Object(p.a)({form:"SaldoAwalStok",enableReinitialize:!0})(x);a.default=Object(m.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,dataSaldoAwalStok:e.provinsi.dataSaldoAwalStok,lokasi:e.provinsi.lokasi,onSend:e.provinsi.onSend}}),null)(x)},477:function(e,a,t){"use strict";t.r(a);var n=t(80),l=t(81),r=t(83),o=t(82),s=t(0),i=t.n(s),c=t(481),m=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"card-header mb-3",style:{fontSize:30,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#ffffff"}},i.a.createElement("div",{className:"row my-auto"},i.a.createElement("div",{className:"col-lg-10 my-auto"},i.a.createElement("h4",{style:{fontSize:25,color:"#ffffff"}},this.props.title)),i.a.createElement("div",{className:"col-lg-2 text-right my-auto"},i.a.createElement(c.a,{id:"reload",type:"dark",effect:"solid"},i.a.createElement("span",null,"Reload")),i.a.createElement("button",{"data-tip":!0,"data-for":"reload",className:"btn btn-success btn-small btn-circle my-auto",onClick:function(){return window.location.reload()}},i.a.createElement("i",{className:"fa fa-retweet"})))))}}]),t}(s.Component);a.default=m},479:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return s}));var n=t(0),l=t.n(n),r=t(55),o=function(e){var a=e.input,t=e.label,n=e.type,r=(e.name,e.limit),o=e.readOnly,s=e.placeholder,i=(e.search,e.meta),c=i.touched,m=i.error,d=i.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},t),l.a.createElement("input",Object.assign({},a,{type:n,id:t,className:"form-control",maxLength:r,readOnly:o,placeholder:s,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),c&&(m&&l.a.createElement("p",{className:"invalid-feedback"},m)||d&&l.a.createElement("p",null,d)))},s=function(e){var a=e.input,t=e.label,n=e.options,o=e.placeholder,s=(e.name,e.disabled),i=(e.value,e.readOnly),c=e.autoComplete,m=e.search,d=e.meta,u=d.touched,p=d.error,h=d.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},t),l.a.createElement(r.a,Object.assign({},a,{options:n,search:m,emptyMessage:"Tidak Ada Data",id:t,placeholder:o||"Silahkan Pilih",disabled:s,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:c,readOnly:i})),u&&(p&&l.a.createElement("p",{className:"invalid-feedback"},p)||h&&l.a.createElement("p",null,h)))}},513:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(483),o=t.n(r),s=t(509),i=t.n(s),c=t(508),m=t.n(c),d=t(5),u=t(515),p=t.n(u);var h=function(e){return l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:p.a,width:"250",height:"250",alt:"Empty"}),l.a.createElement("h5",null,e.text),void 0!==e.link?l.a.createElement(d.b,{to:e.link,replace:!0},l.a.createElement("button",{className:"btn btn-primary"},l.a.createElement("i",{className:"fa fa-chevron-left mr-2"}),e.location)):null))},b=s.Search.SearchBar,k=s.CSVExport.ExportCSVButton;a.a=function(e){var a=e.textEmpty,t=e.handleClick,n=e.tambahData,r=e.expandRow,s=e.selectRow,c=e.exportCSV,d=e.link,u=e.location;return l.a.createElement(i.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},(function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-left"},l.a.createElement(b,e.searchProps))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-right"},n&&l.a.createElement("button",{onClick:t,className:"btn btn-primary",type:"button"},"Tambah Data",l.a.createElement("i",{className:"fa fa-plus ml-3"})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,Object.assign({bootstrap4:!0,pagination:m()(),selectRow:s,expandRow:r},e.baseProps,{striped:!0,noDataIndication:l.a.createElement(h,{text:a||"Tidak Ada Data",link:d,location:u})})),l.a.createElement("br",null),c&&l.a.createElement(k,e.csvProps,"Export CSV!!")))}))}},515:function(e,a,t){e.exports=t.p+"static/media/emptyTable.ffc2d7dc.svg"},666:function(e,a,t){"use strict";a.a=function(e){var a={};return e.kode_customer||(a.kode_customer="Tidak Boleh kosong"),e.no_bon||(a.no_bon="Tidak Boleh kosong"),e.bruto||(a.bruto="Tidak Boleh kosong"),e.netto||(a.netto="Tidak Boleh kosong"),e.saldo_gr||(a.saldo_gr="Tidak Boleh kosong"),e.saldo_rp||(a.saldo_rp="Tidak Boleh kosong"),e.titip_gr||(a.titip_gr="Tidak Boleh kosong"),e.titip_rp||(a.titip_rp="Tidak Boleh kosong"),a}}}]);
//# sourceMappingURL=86.5a39257a.chunk.js.map