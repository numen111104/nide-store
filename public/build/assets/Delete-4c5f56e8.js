import{R as t,d as s}from"./app-1ee02fb1.js";import{S as a}from"./sweetalert2.all-578e7a4c.js";function m({URL:e,id:n}){const i=async o=>{a.fire({title:"Apakah kamu yakin?",text:"Perubahan ini tidak dapat diulang loh!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Gas, Hapus aja!",cancelButtonText:"Jangan"}).then(r=>{r.isConfirmed&&(s.Inertia.delete(`${e}/${o}`),a.fire({title:"Berhasil!",text:"Datanya berhasil dihapus!!!",icon:"success",showConfirmButton:!1,timer:1500}))})};return t.createElement(t.Fragment,null,t.createElement("button",{onClick:()=>i(n),className:"btn btn-danger btn-sm"},t.createElement("i",{className:"fa fa-trash"})))}export{m as D};