import{u as s,R as e,H as m,L as c}from"./app-1ee02fb1.js";import{L as n,h as r}from"./Account-2891df5d.js";import{S as o}from"./Search-97698e84.js";import{P as d}from"./Pagination-0beeb951.js";import{D as i}from"./Delete-4c5f56e8.js";import"./sweetalert2.all-578e7a4c.js";function f(){const{colors:t}=s().props;return e.createElement(e.Fragment,null,e.createElement(m,null,e.createElement("title",null,"Warna - Nide Store")),e.createElement(n,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(c,{href:"/account/colors/create",className:"btn btn-md btn-success border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Tambah")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(o,{URL:"/account/colors"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-palette"})," Warna")),e.createElement("div",{className:"card-body text-center"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Nama Warna"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Icon Warna"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Aksi"))),e.createElement("tbody",null,t.data.map((a,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(t.current_page-1)*t.per_page),e.createElement("td",null,a.name),e.createElement("td",{className:"text-center"},e.createElement("img",{src:a.image,className:"rounded-circle",width:"30"})),e.createElement("td",{className:"text-center"},r(["colors.edit"])&&e.createElement(c,{href:`/account/colors/${a.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),r(["colors.delete"])&&e.createElement(i,{URL:"/account/colors",id:a.id}))))))),e.createElement(d,{links:t.links,align:"end"})))))))}export{f as default};