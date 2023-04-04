import{_ as f}from"./ui-modal.5d783083.js";import{_ as h}from"./ui-content.e5c6574e.js";import{d as u,f as g}from"./table.d52cdd59.js";import{_ as x,z as b,o as p,a as r,j as a,k as c,F as y,b as e,t as w,n as k,w as i,v as n,g as _,A as M}from"./index.09ea6b68.js";import"./ui-nav-header.11d60f7c.js";const S={data(){return u.rows=b().products,{isOpenModal:!1,dataTable:u,filters:g,products:{}}},methods:{onSelect(l){l.type==="edit"?(this.isOpenModal=!0,this.products={...l.row}):l.type==="new"&&(this.isOpenModal=!0,this.products={})},async onSave(){await this.$axios({method:"post",url:"api/master/product",data:this.products})}}},V={class:"flex gap-3"},C={class:"p-0 w-[50%]"},A=e("label",null,"Display name",-1),O={class:"p-0 w-[50%]"},U=e("label",null,"code",-1),N={class:"flex gap-3"},P={class:"p-0 w-[50%]"},T=e("label",null,"QTY",-1),D={class:"p-0 w-[50%]"},F=e("label",null,"Price",-1),I={class:"flex gap-3"},Y={class:"p-0 w-[50%]"},B=e("label",null,"Detail",-1),j={class:"flex mt-2"},q={class:"p-0 w-full"},z={class:"m-icon cursor-pointer text-6xl",for:"uploadImg"},E={class:"flex w-50 h-50 border-2 items-center justify-center rounded-lg"},Q=["src"],G={key:1},H={class:"checkbox"},J=e("div",{for:"active"}," Active ",-1);function K(l,o,L,R,s,d){const m=h,v=f;return p(),r(y,null,[a(m,{title:"Products","data-table":s.dataTable,filters:s.filters,onOnSelectItem:d.onSelect},{"col-isActive":c(({row:t})=>[e("div",{class:k([t.isActive==="Y"?"text-green-600":"text-red-600","m-icon"])},w(t.isActive==="Y"?"done":"close"),3)]),_:1},8,["data-table","filters","onOnSelectItem"]),a(v,{"is-open":s.isOpenModal,"onUpdate:is-open":o[8]||(o[8]=t=>s.isOpenModal=t),right:""},{btnModalTop:c(()=>[e("button",{class:"btn-green",onClick:o[0]||(o[0]=(...t)=>d.onSave&&d.onSave(...t))}," save ")]),default:c(()=>[e("div",V,[e("div",C,[A,i(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>s.products.displayName=t)},null,512),[[n,s.products.displayName]])]),e("div",O,[U,i(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=t=>s.products.code=t)},null,512),[[n,s.products.code]])])]),e("div",N,[e("div",P,[T,i(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>s.products.qty=t)},null,512),[[n,s.products.qty]])]),e("div",D,[F,i(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=t=>s.products.price=t)},null,512),[[n,s.products.price]])])]),e("div",I,[e("div",Y,[B,i(e("input",{type:"text","onUpdate:modelValue":o[5]||(o[5]=t=>s.products.detail=t)},null,512),[[n,s.products.detail]])])]),e("div",j,[e("div",q,[e("label",z,[e("div",E,[s.products.imgPath?(p(),r("img",{key:0,src:s.products.imgPath,class:"w-full h-full rounded-lg"},null,8,Q)):_("",!0),s.products.imgPath?_("",!0):(p(),r("div",G," add_a_photo ")),e("input",{class:"h-0 hidden",ref:"img",type:"file",id:"uploadImg",accept:"image/*",onChange:o[6]||(o[6]=(...t)=>l.onFileChange&&l.onFileChange(...t))},null,544)])])])]),e("label",H,[i(e("input",{type:"checkbox",id:"active",name:"active","onUpdate:modelValue":o[7]||(o[7]=t=>s.products.isActive=t),"true-value":"Y","false-value":"N"},null,512),[[M,s.products.isActive]]),J])]),_:1},8,["is-open"])],64)}const te=x(S,[["render",K]]);export{te as default};
