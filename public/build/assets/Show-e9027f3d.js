import{u as l,R as e,H as m}from"./app-1ee02fb1.js";import{L as n}from"./Web-f0df3e33.js";import{C as c}from"./CardProduct-9c189da2.js";import"./FormatPrice-60f3027e.js";function u(){const{category:t}=l().props;return e.createElement(e.Fragment,null,e.createElement(m,null,e.createElement("title",null,`${t.name} - Nide Store - Tempat Belanja Online`)),e.createElement(n,null,e.createElement("div",{className:"container mt-80 mb-5"},e.createElement("div",{className:"fade-in"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row mb-5"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"alert alert-warning border-0 shadow-sm rounded-3"},"Kategori Produk:"," ",e.createElement("strong",null,t.name))),t.products.map((a,r)=>e.createElement(c,{product:a,key:r})))))))))}export{u as default};