import{u,r as m,R as e,H as b,d as E}from"./app-1ee02fb1.js";import{L as f}from"./Account-2891df5d.js";import{S as h}from"./sweetalert2.all-578e7a4c.js";function k(){const{errors:t,permissions:c}=u().props,[s,n]=m.useState(""),[r,o]=m.useState([]),i=a=>{let l=r;l.push(a.target.value),o(l)},d=async a=>{a.preventDefault(),E.Inertia.post("/account/roles",{name:s,permissions:r},{onSuccess:()=>{h.fire({title:"Sukses!",text:"Data berhasil disimpan!!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement("title",null,"Tambah Role - Nide Store")),e.createElement(f,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shield-alt"})," Tambah Role Baru")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:d},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama Role"),e.createElement("input",{type:"text",className:"form-control",value:s,onChange:a=>n(a.target.value),placeholder:"Masukkan nama role"})),t.name&&e.createElement("div",{className:"alert alert-danger custom-alert"},t.name),e.createElement("hr",null),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"fw-bold form-label"},"Pilih Hak Akses"),e.createElement("br",null),c.map((a,l)=>e.createElement("div",{className:"form-check form-check-inline ",key:l},e.createElement("input",{className:"form-check-input",type:"checkbox",value:a.name,onChange:i,id:`check-${a.id}`}),e.createElement("label",{className:"form-check-label",htmlFor:`check-${a.id}`},a.name))),t.permissions&&e.createElement("div",{className:"alert alert-danger custom-alert mt-2"},t.permissions)),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Simpan"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{k as default};