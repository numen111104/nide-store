import{u as r,R as e,H as n,L as s}from"./app-1ee02fb1.js";import{L as d}from"./Web-f0df3e33.js";import{D as o}from"./Delete-4c5f56e8.js";import{f as l}from"./FormatPrice-60f3027e.js";import"./sweetalert2.all-578e7a4c.js";function b(){const{dataCarts:m,carts:t}=r().props;return e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement("title",null,"Keranjang - Nide Store - Tempat Belanja Online")),e.createElement(d,null,e.createElement("div",{className:"container mt-80 mb-5"},e.createElement("div",{className:"fade-in"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8"},t.length>0?e.createElement("div",{className:"row mb-2"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"card border-0 shadow-sm rounded-3 mb-3"},e.createElement("div",{className:"card-body"},t.map((a,c)=>e.createElement("div",{key:c},e.createElement("div",{className:"row g-0"},e.createElement("div",{className:"col-md-4 col-4"},e.createElement("img",{src:a.product_image,className:"img-fluid rounded-3"})),e.createElement("div",{className:"col-md-8 col-8"},e.createElement("div",{className:"card-body"},e.createElement("h4",{className:"card-title"},a.product.title),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-6"},e.createElement("div",null,"Qty : ",e.createElement("strong",null,a.qty)),e.createElement("div",{className:"mt-3"},"Ukuran : ",e.createElement("strong",null,a.size))),e.createElement("div",{className:"col-md-6 col-6"},e.createElement("div",null,"Icon Warna : ",e.createElement("img",{src:a.color_image,width:"20",className:"rounded-circle mb-1"})),e.createElement("div",{className:"mt-3"},"Warna : ",e.createElement("strong",null,a.color))),e.createElement("div",{className:"col-md-3 col-12 text-end"},e.createElement(o,{URL:"/carts",id:a.id}))),e.createElement("hr",null),e.createElement("h5",null,"Rp. ",l(a.price))))),e.createElement("hr",null))))))):e.createElement("div",{className:"card border-0 rounded-3 shadow-sm mt-4 mb-4"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"col-sm-12 empty-cart-cls text-center"},e.createElement("img",{src:"/assets/images/shopping-cart.png",width:"150",height:"150",className:"img-fluid mb-4 mr-3"}),e.createElement("h6",null,e.createElement("strong",null,"Keranjangnya masih kosong😁"))))),e.createElement("div",{className:"row mb-5"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"card border-0 rounded-3 shadow-sm"},e.createElement("div",{className:"card-body"},e.createElement("h6",{className:"mb-0"},"Jumlah Pesanan : ",e.createElement("strong",null,"Rp. ",l(m.price)))))),e.createElement("div",{className:"col-md-12 mt-4"},t.length>0?e.createElement(s,{href:"/checkouts",className:"btn btn-success btn-md border-0 shadow rounded-3 w-100"},"Lanjutkan Pembayaran ",e.createElement("i",{className:"fa fa-long-arrow-alt-right"})):e.createElement("button",{className:"btn btn-success btn-md border-0 shadow rounded-3 w-100",disabled:!0},"Lanjutkan Pembayaran ",e.createElement("i",{className:"fa fa-long-arrow-alt-right"}))))))))))}export{b as default};