(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[88,176],{1237:function(a,t,e){"use strict";e.r(t);var n=e(86),r=e(80),o=e(81),l=e(83),s=e(82),i=e(0),c=e.n(i),p=e(29),m=e(5),u=e(63),g=e(9),h=e.n(g),d=e(195),f=e(510),k=e(191),b=e(54),S=e.n(b),y=e(18),v=e(477),N=e(3),B=e(7),E=e(478),T=e(471),R=e(480),O=e(519),I=e(48),C=e(479),_=e(570),j=e(517),F=e(87),P=Object(i.lazy)((function(){return Promise.all([e.e(3),e.e(9)]).then(e.bind(null,516))})),x=Object(i.lazy)((function(){return Promise.all([e.e(1),e.e(2),e.e(10)]).then(e.bind(null,698))})),w=Object(i.lazy)((function(){return Promise.all([e.e(1),e.e(2),e.e(11)]).then(e.bind(null,699))})),D=Object(i.lazy)((function(){return e.e(12).then(e.bind(null,706))})),J=Object(i.lazy)((function(){return e.e(16).then(e.bind(null,700))})),A=Object(i.lazy)((function(){return e.e(14).then(e.bind(null,701))})),U=Object(i.lazy)((function(){return e.e(15).then(e.bind(null,702))})),H=Object(i.lazy)((function(){return e.e(13).then(e.bind(null,638))})),M=Object(i.lazy)((function(){return e.e(17).then(e.bind(null,639))})),L=Object(O.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),z=function(a){Object(l.a)(e,a);var t=Object(s.a)(e);function e(a){var o;Object(r.a)(this,e),(o=t.call(this,a)).setTotal=function(a){return function(t){localStorage.setItem([a],t.target.value),o.setTotalBayar()}},o.changeInput=function(a){return function(t){o.setState(Object(n.a)({},a,t.target.value))}};var l=new Date,s="".concat(l.getFullYear(),"-").concat(l.getMonth()+1,"-").concat(l.getDate());return o.state={listSupplier:[],tanggal:s,bonBayar:"",detail:"",tanggalInvoice:"",noPembayaran:"",supplier:"",hutangnya:[]},o}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(F.f)()),this.props.dispatch(Object(u.e)()),this.props.dispatch(Object(u.f)()),this.props.change("tanggal",j.b),this.props.change("totalBayar",this.props.totalBayar),this.props.change("totalBayarCash",this.props.totalBayarRp),this.setTotalBayar()}},{key:"handleSubmit",value:function(a){var t=this,e={kode_jenis:a.kodeBarang.split("|")[0],netto:a.netto,bruto:a.bruto,kadar_transaksi:a.kadarTransaksi},n={jenis:"CIOK",gross:a.bruto,harga:"-",kadar:a.kadarTransaksi,netto:parseFloat(a.netto).toFixed(3),pkg:"",gwpkg:""};this.props.dispatch(Object(y.t)());var r=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];r.push(n),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(r));var o=JSON.parse(localStorage.getItem("ciokTemp"))||[];o.push(e),localStorage.setItem("ciokTemp",JSON.stringify(o));var l=JSON.parse(localStorage.getItem("alatBayarCiok"))||[];l.push(e),localStorage.setItem("alatBayarCiok",JSON.stringify(l)),this.props.dispatch(Object(u.e)()),this.setTotalBayar(),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(y.k)())}))}},{key:"handleSubmit2",value:function(a){var t=this,e={kode_jenis:a.kodeBarang.split("|")[0],netto:a.netto,bruto:a.bruto,kadar_transaksi:a.kadarTransaksi},n={jenis:"RONGSOK",gross:a.bruto,harga:"-",kadar:a.kadarTransaksi,netto:parseFloat(a.netto).toFixed(3),pkg:"",gwpkg:""};this.props.dispatch(Object(y.t)());var r=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];r.push(n),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(r));var o=JSON.parse(localStorage.getItem("rongsokTemp"))||[];o.push(e),localStorage.setItem("rongsokTemp",JSON.stringify(o));var l=JSON.parse(localStorage.getItem("alatBayarRosok"))||[];l.push(e),localStorage.setItem("alatBayarRosok",JSON.stringify(l)),this.props.dispatch(Object(u.f)()),this.setTotalBayar(),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(y.k)())}))}},{key:"setCiok",value:function(){this.props.change("ciokBrutto",this.props.totalCiok),this.props.change("ciokNetto",this.props.totalCiok),this.setTotalBayar()}},{key:"setRongsok",value:function(){this.props.change("rongsokBruto",this.props.totalRongsok),this.props.change("rongsokNetto",this.props.totalRongsok),this.props.change("totalBayar",this.props.totalBayar)}},{key:"handleSubmitCash",value:function(a){var t=[],e={cash_rp:a.cash,harga_emas:a.harga,cash_netto:a.cashNetto},n={jenis:"TUNAI",gross:a.cash,harga:a.harga,kadar:"",netto:parseFloat(a.cashNetto).toFixed(3),pkg:"",gwpkg:""},r=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];r.push(n),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(r)),t.push(e),localStorage.setItem("totalTunaiRp",a.cashNetto),localStorage.setItem("alatBayarTunai",JSON.stringify(t)),this.setTotalBayar(),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Disimpan",showConfirmButton:!1,timer:1500})}},{key:"handleSubmitCashRp",value:function(a){var t={cash_rp:a.cash,harga_emas:a.harga,cash_netto:a.cashNetto},e=JSON.parse(localStorage.getItem("cashTempRp"))||[];e.push(t),localStorage.setItem("cashTempRp",JSON.stringify(e));var n=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))||[];n.push(t),localStorage.setItem("alatBayarTunaiRp",JSON.stringify(n)),this.props.dispatch(Object(I.i)()),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"handleSubmitTransfer",value:function(a){var t=[],e={harga_emas:a.harga,transfer_netto:a.transferNetto,transfer_rp:a.transfer,acc_from:a.asal,acc_to:a.tujuan,tanggal_transfer:a.tanggal},n={jenis:"TRANSFER",gross:a.transfer,harga:a.harga,kadar:"",netto:parseFloat(a.transferNetto).toFixed(3),pkg:"",gwpkg:""},r=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];r.push(n),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(r)),t.push(e),localStorage.setItem("totalTrfRp",a.transferNetto),localStorage.setItem("alatBayarTrf",JSON.stringify(t)),this.setTotalBayar(),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Disimpan",showConfirmButton:!1,timer:1500})}},{key:"handleSubmitTransferRp",value:function(a){console.log(a);var t={harga_emas:a.harga,transfer_netto:a.transferNetto,transfer_rp:a.transfer,acc_from:a.asal,acc_to:a.tujuan,tanggal_transfer:a.tanggal},e=JSON.parse(localStorage.getItem("transferTempRp"))||[];e.push(t),localStorage.setItem("transferTempRp",JSON.stringify(e));var n=JSON.parse(localStorage.getItem("alatBayarTrfRp"))||[];n.push(t),localStorage.setItem("alatBayarTrfRp",JSON.stringify(n)),this.props.dispatch(Object(I.j)()),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"setTotalBayar",value:function(){var a=localStorage.getItem("totalTunaiRp")||0,t=localStorage.getItem("totalTrfRp")||0,e=localStorage.getItem("totalCiok")||0,n=localStorage.getItem("totalRongsok")||0,r=this.props.tambahan||0;this.props.change("totalCash",a),this.props.change("totalTransfer",t),this.props.change("totalCiok",e),this.props.change("totalRongsok",n),this.props.change("totalBayar",(parseFloat(a)+parseFloat(t)+parseFloat(e)+parseFloat(n)+r).toFixed(3)),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"render",value:function(){var a=this;return c.a.createElement("div",{className:"col-lg-12",style:{color:"black"}},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},"BARANG"===this.props.jenisTransaksi?c.a.createElement(c.a.Fragment,null,c.a.createElement(i.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:50})},c.a.createElement(D,{onSubmit:function(t){return a.handleSubmitCash(t)}}),c.a.createElement(J,{onSubmit:function(t){return a.handleSubmitTransfer(t)}})),c.a.createElement(i.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:50})},c.a.createElement(A,{totalCiok:this.props.totalCiok,totalBrutoCiok:this.props.totalBrutoCiok})),c.a.createElement(i.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:50})},c.a.createElement(U,{totalRongsok:this.props.totalRongsok,totalBrutoRongsok:this.props.totalBrutoRongsok}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(i.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:50})},c.a.createElement(H,{onSubmit:function(t){return a.handleSubmitCashRp(t)}}),c.a.createElement(M,{onSubmit:function(t){return a.handleSubmitTransferRp(t)}}))))),c.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(E.a,{name:"tanggal",label:"Tanggal",type:"date",component:C.a,defaultValue:this.state.tanggal,onChange:this.changeInput("tanggalInvoice")})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(E.a,{name:"supplier",label:"Supplier",className:"form-control",component:C.b,options:this.props.supplier.map((function(a){return{value:a.kode_supplier,name:a.nama_supplier}})),defaultValue:"DEFAULT | DEFAULT"})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(E.a,{name:"noBon",label:"Bon Titip",type:"txt",component:C.a,onChange:this.changeInput("noPembayaran")})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(E.a,{name:"detail",label:"Detail",type:"text",component:C.a})),"BARANG"===this.props.jenisTransaksi?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"row p-3"},c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(E.a,{name:"totalCash",label:"Denda",type:"number",component:C.a}))),c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(E.a,{name:"totalTransfer",label:"Denda",type:"number",component:C.a}))),c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(E.a,{name:"totalCiok",label:"Denda",type:"number",component:C.a}))),c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(E.a,{name:"totalRongsok",label:"Denda",type:"number",component:C.a}))))))):null,c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"row p-3"},c.a.createElement("div",{className:"BARANG"===this.props.jenisTransaksi?"col-lg-4 col-md-4":"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(E.a,{name:"totalBayar",label:"Total Titip",type:"number",component:C.a}))),c.a.createElement("div",{className:"BARANG"!==this.props.jenisTransaksi?"col-lg-4 col-md-4":"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Total Bayar Rp"),c.a.createElement(E.a,Object.assign({name:"totalBayarCash",label:"Total Titip Rp",type:"telp",component:"input",className:"form-control",onBlur:this.props.change("totalBayarCash",this.props.totalBayarRp)},L))))))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"})),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))),c.a.createElement(P,{content:"CIOK"===this.props.tipeBayarModal?c.a.createElement(i.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:50,count:5})},c.a.createElement(x,{onSubmit:function(t){return a.handleSubmit(t)},from:"CK",data:this.props.tampungCiok,onSend:this.props.onSend})):c.a.createElement(i.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:50,count:5})},c.a.createElement(w,{onSubmit:function(t){return a.handleSubmit2(t)},from:"RSK",data:this.props.tampungRongsok,onSend:this.props.onSend})),title:"CIOK"===this.props.tipeBayarModal?"Tambah Data Ciok":"Tambah Data Rongsok"}))}}]),e}(i.Component);z=Object(T.a)({form:"AmbilTitipanSupplierHead",enableReinitialize:!0,validate:_.a})(z);var G=Object(R.a)("AmbilTitipanSupplierHead"),K=Object(p.b)((function(a){var t=G(a,"harga","cash","transfer","totalCash","totalTransfer","totalCiok","totalRongsok","tanggal"),e=t.harga,n=t.cash,r=t.transfer,o=t.totalCash,l=t.totalTransfer,s=t.totalCiok,i=t.totalRongsok,c=t.tanggal,p=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):0,m=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))?JSON.parse(localStorage.getItem("alatBayarTunaiRp")):0,u=void 0===m[0]?0:m[0].cash_netto,g=void 0===p[0]?0:p[0].transfer_netto;return{tanggal:c,supplier:a.provinsi.supplier,tipeBayarModal:a.provinsi.tipeBayarModal,onSend:a.provinsi.onSend,cashNetto:(parseFloat(n)/parseFloat(e)).toFixed(3),transferNetto:(parseFloat(r)/parseFloat(e)).toFixed(3),totalBayar:(parseFloat(o)+parseFloat(l)+parseFloat(s)+parseFloat(i)).toFixed(3),totalBayarRp:parseFloat(u)+parseFloat(g),dataHutangSupplier:a.provinsi.dataHutangSupplier}}))(z),Y=function(a){Object(l.a)(e,a);var t=Object(s.a)(e);function e(a){var o;Object(r.a)(this,e),(o=t.call(this,a)).inputChange=function(a){return function(t){o.setState(Object(n.a)({},a,t.target.value))}};var l=new Date,s="".concat(l.getFullYear(),"-").concat(l.getMonth()+1,"-").concat(l.getDate());return o.state={listSupplier:[],tanggal:s,bonBayar:"",detail:"",tipeTransaksi:"BARANG"},o}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.e)()),this.props.dispatch(Object(u.f)()),this.props.dispatch(Object(d.b)())}},{key:"componentWillUnmount",value:function(){Object(B.k)(["PrintPembayaranSupplier","totalTunaiRp","alatBayarTunai","totalTrfRp","alatBayarTrf","ciokTemp","alatBayarCiok","totalCiok","totalBrutoCiok","rongsokTemp","alatBayarRosok","totalRongsok","totalBrutoRongsok","listHutang","discount","bonus","denda","cashTempRp","alatBayarTunaiRp","transferTempRp","alatBayarTrfRp","noFaktur"])}},{key:"handleSubmit",value:function(a){var t=this;if(void 0===a.noBon)return Object(k.e)("Mohon isi nomor bon"),!1;if(void 0===a.tanggal)return Object(k.e)("Mohon isi Tanggal"),!1;if(void 0===a.supplier)return Object(k.e)("Mohon isi Supplier"),!1;if(null===localStorage.getItem("alatBayarBarang")&&null===localStorage.getItem("alatBayarTrf")&&null===localStorage.getItem("alatBayarTunai")&&null===localStorage.getItem("alatBayarTunaiRp")&&null===localStorage.getItem("alatBayarTrfRp"))return Object(k.e)("Mohon Masukan Alat Pembayaran Paling Tidak 1 Jenis"),!1;var e={kode_jenis:"-",bruto:0,kadar_transaksi:0,netto:0},n={cash_rp:0,harga_emas:0,cash_netto:0},r={transfer_rp:0,harga_emas:0,transfer_netto:0,tanggal_transfer:"2021-01-01",acc_from:"-",acc_to:"-"},o=JSON.parse(localStorage.getItem("alatBayarCiok"))||[e],l=JSON.parse(localStorage.getItem("alatBayarRosok"))||[e],s=JSON.parse(localStorage.getItem("alatBayarTrf"))||[r],i=JSON.parse(localStorage.getItem("alatBayarTrfRp"))||[r],c=JSON.parse(localStorage.getItem("alatBayarTunai"))||[n],p=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))||[n],m={kode_supplier:(a.supplier?a.supplier:"DEFAULT | DEFUALT").split("|")[0],no_bon:a.noBon,no_titip:this.props.noFaktur,tanggal:a.tanggal,pos_trx:"K",type_bon:"RUPIAH"===this.state.tipeTransaksi?"BON RP":"BON GR",detail_ciok:o,total_ciok:localStorage.getItem("totalCiok")||0,detail_rongsok:l,total_rongsok:localStorage.getItem("totalRongsok")||0,total_titip:"RUPIAH"===this.state.tipeTransaksi?a.totalBayarCash:a.totalBayar,detail_cash:"RUPIAH"===this.state.tipeTransaksi?p:c,total_cash:"RUPIAH"===this.state.tipeTransaksi?p.map((function(a){return a.cash_netto})).reduce((function(a,t){return a+t}),0):localStorage.getItem("totalTunaiRp")||0,detail_trf:"RUPIAH"===this.state.tipeTransaksi?i:s,total_trf:"RUPIAH"===this.state.tipeTransaksi?i.map((function(a){return a.transfer_netto})).reduce((function(a,t){return a+t}),0):localStorage.getItem("totalTrfRp")||0,detail_giro:[{giro_rp:0,harga_emas:0,giro_netto:0,tanggal_giro:"-",no_giro:"-",bank_giro:"-",acc_to:"-",bank_to:"-"}],total_giro:0};localStorage.setItem("notaPembayaranSupplier",JSON.stringify(m)),this.props.dispatch(Object(y.t)());var u=[["Tunai","Tunai","RUPIAH"===this.state.tipeTransaksi?parseFloat(null!==p?p[0].cash_rp:0).toLocaleString("id-ID"):parseFloat(null!==c?c[0].cash_rp:0).toLocaleString("id-ID"),"RUPIAH"===this.state.tipeTransaksi?parseFloat(null!==p?p[0].harga_emas:0).toLocaleString("id-ID"):parseFloat(null!==c?c[0].harga_emas:0).toLocaleString("id-ID"),"","RUPIAH"===this.state.tipeTransaksi?parseFloat(null!==p?p[0].cash_netto:0):parseFloat(null!==c?c[0].cash_netto:0),"",""],["Transfer","Transfer","RUPIAH"===this.state.tipeTransaksi?parseFloat(null!==i?i[0].transfer_rp:0).toLocaleString("id-ID"):parseFloat(null!==s?s[0].transfer_rp:0).toLocaleString("id-ID"),"RUPIAH"===this.state.tipeTransaksi?parseFloat(null!==i?i[0].harga_emas:0).toLocaleString("id-ID"):parseFloat(null!==s?s[0].harga_emas:0).toLocaleString("id-ID"),"","RUPIAH"===this.state.tipeTransaksi?parseFloat(null!==i?i[0].transfer_netto:0):parseFloat(null!==s?s[0].transfer_netto:0),"",""]];(JSON.parse(localStorage.getItem("ciokTemp"))||[]).forEach((function(a,t){var e=["Ciok",a.kodeBarang,a.bruto,"",a.kadarTransaksi,a.netto,"",""];u.push(e)})),(JSON.parse(localStorage.getItem("rongsokTemp"))||[]).forEach((function(a,t){var e=["Rongsok",a.kodeBarang,a.bruto,"",a.kadarTransaksi,a.netto,"",""];u.push(e)})),console.log(JSON.stringify(u));var g=["Jenis \nPembayaran","Nama \nBarang","Gross \nBayar","Harga","Kadar","Netto","Pkg","Gw+Pkg"];console.log(JSON.stringify(m)),Object(N.c)("trx-supplier/titip-supplier",m).then((function(e){return h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(y.k)())})).then((function(){return Object(B.k)(["PrintPembayaranSupplier","totalTunaiRp","alatBayarTunai","totalTrfRp","alatBayarTrf","ciokTemp","alatBayarCiok","totalCiok","totalBrutoCiok","rongsokTemp","alatBayarRosok","totalRongsok","totalBrutoRongsok","listHutang","discount","bonus","denda","cashTempRp","alatBayarTunaiRp","transferTempRp","alatBayarTrfRp","noFaktur"])})).then((function(){return localStorage.setItem("isLogin",!0)})).then((function(){return t.props.dispatch(Object(d.b)())})).then((function(){return t.props.history.push("KlasifikasiSupplier")})).then((function(){return Object(f.a)("Tanggal",a.tanggal,"","","Nomor \nPembayaran",a.noBon,"","","ADMIN",a.tanggal,"",g,"NOTA AMBIL TITIPAN SUPPLIER",u)})).then((function(){return window.history.back()}))})).catch((function(a){return h.a.fire({position:"top-end",icon:"error",text:a.response.data,showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(y.k)())}))}))}},{key:"render",value:function(){var a=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},c.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")),c.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(m.b,{to:"/KlasifikasiSupplier"},c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement(v.default,{title:"Ambil Titipan Supplier"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("ul",{className:"nav nav-pills bg-nav-pills nav-justified mb-3"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"#rupiah","data-toggle":"tab","aria-expanded":"false",className:"nav-link rounded-0 active",onClick:function(){return a.setState({tipeTransaksi:"BARANG"})}},c.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),c.a.createElement("span",{className:"d-none d-lg-block"},"Gram"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"#gram","data-toggle":"tab","aria-expanded":"true",className:"nav-link rounded-0 ",onClick:function(){return a.setState({tipeTransaksi:"RUPIAH"})}},c.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),c.a.createElement("span",{className:"d-none d-lg-block"},"Rupiah")))),c.a.createElement("div",{className:"tab-content"},c.a.createElement("div",{className:"tab-pane show active",id:"rupiah"},c.a.createElement(i.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:200})},c.a.createElement(K,{tampungCiok:this.props.tampungCiok,tampungRongsok:this.props.tampungRongsok,totalCiok:this.props.totalCiok,totalRongsok:this.props.totalRongsok,totalBrutoCiok:this.props.totalBrutoCiok,totalBrutoRongsok:this.props.totalBrutoRongsok,onSubmit:function(t){return a.handleSubmit(t)},jenisTransaksi:this.state.tipeTransaksi,onSend:this.props.onSend}))),c.a.createElement("div",{className:"tab-pane",id:"gram"},c.a.createElement(i.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:200})},c.a.createElement(K,{tampungCiok:this.props.tampungCiok,tampungRongsok:this.props.tampungRongsok,totalCiok:this.props.totalCiok,totalRongsok:this.props.totalRongsok,totalBrutoCiok:this.props.totalBrutoCiok,totalBrutoRongsok:this.props.totalBrutoRongsok,onSubmit:function(t){return a.handleSubmit(t)},jenisTransaksi:this.state.tipeTransaksi,onSend:this.props.onSend})))))))))))}}]),e}(i.Component);t.default=Object(p.b)((function(a){return{pembayaranSupplierList:a.provinsi.AmbilTitipanSupplier,tampungCiok:a.provinsi.tampungCiok,tampungRongsok:a.provinsi.tampungRongsok,totalCiok:a.provinsi.totalCiok,totalRongsok:a.provinsi.totalRongsok,totalBrutoCiok:a.provinsi.totalBrutoCiok,totalBrutoRongsok:a.provinsi.totalBrutoRongsok,alert:a.provinsi.alert,error:a.provinsi.error,noFaktur:a.provinsi.noFaktur,username:a.provinsi.username,onSend:a.provinsi.onSend}}),null)(Y)},477:function(a,t,e){"use strict";e.r(t);var n=e(80),r=e(81),o=e(83),l=e(82),s=e(0),i=e.n(s),c=e(481),p=function(a){Object(o.a)(e,a);var t=Object(l.a)(e);function e(){return Object(n.a)(this,e),t.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"card-header mb-3",style:{fontSize:30,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#ffffff"}},i.a.createElement("div",{className:"row my-auto"},i.a.createElement("div",{className:"col-lg-10 my-auto"},i.a.createElement("h4",{style:{fontSize:25,color:"#ffffff"}},this.props.title)),i.a.createElement("div",{className:"col-lg-2 text-right my-auto"},i.a.createElement(c.a,{id:"reload",type:"dark",effect:"solid"},i.a.createElement("span",null,"Reload")),i.a.createElement("button",{"data-tip":!0,"data-for":"reload",className:"btn btn-success btn-small btn-circle my-auto",onClick:function(){return window.location.reload()}},i.a.createElement("i",{className:"fa fa-retweet"})))))}}]),e}(s.Component);t.default=p},479:function(a,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return s}));var n=e(0),r=e.n(n),o=e(55),l=function(a){var t=a.input,e=a.label,n=a.type,o=(a.name,a.limit),l=a.readOnly,s=a.placeholder,i=(a.search,a.meta),c=i.touched,p=i.error,m=i.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},e),r.a.createElement("input",Object.assign({},t,{type:n,id:e,className:"form-control",maxLength:o,readOnly:l,placeholder:s,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}})),c&&(p&&r.a.createElement("p",{className:"invalid-feedback"},p)||m&&r.a.createElement("p",null,m)))},s=function(a){var t=a.input,e=a.label,n=a.options,l=a.placeholder,s=(a.name,a.disabled),i=(a.value,a.readOnly),c=a.autoComplete,p=a.search,m=a.meta,u=m.touched,g=m.error,h=m.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},e),r.a.createElement(o.a,Object.assign({},t,{options:n,search:p,emptyMessage:"Tidak Ada Data",id:e,placeholder:l||"Silahkan Pilih",disabled:s,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:c,readOnly:i})),u&&(g&&r.a.createElement("p",{className:"invalid-feedback"},g)||h&&r.a.createElement("p",null,h)))}},510:function(a,t,e){"use strict";var n=e(511);e(512);t.a=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",p=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",u=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],g=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",h=arguments.length>13?arguments[13]:void 0,d=new n.default;d.setProperties({title:g}),d.autoTable(u,h,{startY:40,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});var f=d.lastAutoTable.finalY+10;d.text(g,14,15),d.setFontSize(10),d.text(a,14,25),d.text(":",37,25),d.text(t,40,25),d.text(e,120,25),d.text(":",141,25),d.text(r,145,25),d.text(o,14,30),d.text(":",37,30),d.text(l,40,30),d.text(s,120,30),d.text(":",141,30),d.text(i,145,30),d.text("User",160,f+10),d.text(":",168,f+10),d.text(c,170,f+10),d.text("Cetak",160,f+15),d.text(":",168,f+15),d.text(p,170,f+15),d.text("Valid",160,f+20),d.text(":",168,f+20),d.text(m,170,f+20);var k=d.output("datauristring"),b=window.open();b.document.open(),b.document.write("<html><head><title>"+g+"</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+k+"></embed></body></html>"),b.document.close()}},517:function(a,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"a",(function(){return i}));var n=e(0),r=e.n(n),o=e(54),l=e.n(o),s=function(){return(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2)},i=function(a){var t=a.label;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," ",t," "),r.a.createElement(l.a,{className:"form-control"}))}},570:function(a,t,e){"use strict";t.a=function(a){var t={};return a.tanggal||(t.tanggal="Tidak Boleh kosong"),a.supplier||(t.supplier="Tidak Boleh kosong"),a.noBon||(t.noBon="Tidak Boleh kosong"),t}}}]);
//# sourceMappingURL=88.81a4981a.chunk.js.map