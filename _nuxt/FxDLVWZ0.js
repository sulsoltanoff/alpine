import{u as m}from"./fnEPsiFf.js";import{M as c,I as p,d as i,aa as l,r as u,N as e,l as d}from"./D3dcLX9h.js";import f from"./CyCdDor4.js";import y from"./DaxX9-9d.js";import"./CCxv7BoR.js";import"./C0RZ3VAJ.js";import"./9dhGfX1D.js";import"./ClUVKXgq.js";import"./CZddBjCp.js";import"./CogCFuy8.js";import"./DiwUk7r9.js";import"./BfGDTath.js";import"./BDy8gosd.js";import"./6MpNNEsh.js";import"./CxV8r8Io.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-6f4ad041"]]);export{V as default};
