(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return s(5790)}])},5790:function(e,l,s){"use strict";s.r(l),s.d(l,{__N_SSG:function(){return m},default:function(){return p}});var a=s(5893),t=s(9008),r=s.n(t),n=s(7294),i=s(3162),o=s(8813),c=s(3157),d=s(1163),u=JSON.parse('{"wZ":[{"description":"Screenshare your n.eko, MovieNight, Owncast, Restreamer, WebBrowser, rtmp, or WebRTC streams directly to Discord without needing to use the same PC and tie up resources!","docker_registry":"https://index.docker.io/v1/","name":"f00d4tehg0dz/kasm-discord-screenshare:latest","image_src":"discord-screenshare.png","cores":4,"memory":4768,"gpu_count":0,"cpu_allocation_method":"Inherit","categories":["Communication","Games"],"run_config":{"hostname":"kasm","privileged":true},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"friendly_name":"Discord Screen Share","architecture":["amd64","arm64"],"compatibility":["1.16.x"],"uncompressed_size_mb":8100,"sha":"e9c6c8a3a9a4f6d1924127e10050c7de16b98b0d"}]}'),m=!0;function p(e){let{workspace:l}=e,t=(0,n.useRef)(null),m=(0,n.useRef)(null),p=(0,n.useRef)(null),[f,b]=(0,n.useState)(null),[x,g]=(0,n.useState)(null),[v,w]=(0,n.useState)(null),[j,y]=(0,n.useState)("png"),[N,_]=(0,n.useState)(null),k={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[C,S]=(0,n.useState)(k);(0,d.useRouter)(),(0,n.useEffect)(()=>{if(null===l)p.current.value="",t.current.value="",m.current.value="",b(null),g(null),w(null),S(k);else if(l&&l[0]){let e=u.wZ.find(e=>e.name===atob(l[0]));if(delete e.sha,p.current.value=e.description,t.current.value=e.name,m.current.value=e.friendly_name,e.categories){let s=[];e.categories.map(e=>s.push({label:e,value:e})),b(s)}if(e.architecture){let a=[];e.architecture.map(e=>a.push({label:e,value:e})),g(a)}_("../../icons/"+e.image_src),S({...C,...e})}},[l]);let R={control:(e,l)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,l){let{data:s}=l;return{...e,backgroundColor:"#dde6f1"}}};(0,n.useEffect)(()=>{if(C&&C.friendly_name){let e={...C};e.image_src=L(e.friendly_name)+"."+j,S(e)}},[j]);let O=e=>{let l={...C};l.categories=e.map(e=>e.value),S(l);let s=[];l.categories.map(e=>s.push({label:e,value:e})),b(s)},I=e=>{let l={...C};l.architecture=e.map(e=>e.value),S(l);let s=[];l.architecture.map(e=>s.push({label:e,value:e})),g(s)};function L(e){var l=e.toString().toLowerCase();return(l=(l=(l=l.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let A=()=>{var e=s(5733);let l=new e,a=l.folder(C.friendly_name);if(a.file("workspace.json",JSON.stringify(C,null,2)),v)a.file(C.image_src,v.file);else if(N){let t=fetch(N).then(e=>e.blob());a.file(C.image_src,t)}l.generateAsync({type:"blob"}).then(function(e){(0,i.saveAs)(e,L(C.friendly_name)+".zip")})},D=e=>{let l={...C};l[e.target.name]=e.target.value,"icon"===e.target.name&&(delete l.icon,w({value:e.target.value,file:e.target.files[0]}),y(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),_(null)),l.friendly_name&&(l.image_src=L(l.friendly_name)+"."+j),S(l)};return(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Kasm Workspaces"}),(0,a.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,a.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,a.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,a.jsx)("input",{type:"file",name:"icon",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,a.jsx)("input",{ref:m,name:"friendly_name",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,a.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:O,styles:R,value:f}),(0,a.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,a.jsx)("input",{ref:p,name:"description",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,a.jsx)("input",{ref:t,name:"name",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,a.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,a.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:I,styles:R,value:x}),(0,a.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,a.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,a.jsx)(h,{workspace:C,icon:v,inlineImage:N}),(0,a.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...C},null,2)}),(0,a.jsx)("button",{onClick:A,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function h(e){let{workspace:l,icon:s,inlineImage:t}=e,[r,i]=(0,n.useState)(!1),o=null;if(s){let c=new Blob([s.file]);o=URL.createObjectURL(c),l.image_src=o}return(0,a.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,a.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,a.jsxs)("div",{onClick:()=>i(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,a.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:l.image_src,onError(e){null!==t&&(e.target.src=t)},alt:l.friendly_name}),(0,a.jsxs)("div",{className:"flex-col pl-28",children:[(0,a.jsx)("div",{className:"font-bold",children:l.friendly_name||"Friendly Name"}),(0,a.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["f00d4tehg0dz`s Custom Workspaces"," ",(0,a.jsx)("span",{children:void 0})]}),(0,a.jsx)("div",{className:" h-8"})]}),(0,a.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[l.architecture&&l.architecture.map((e,l)=>(0,a.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+l)),l.categories.map((e,l)=>(0,a.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+l))]}),!1]}),(0,a.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,a.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>i(!1),children:(0,a.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,a.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,a.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,a.jsx)("div",{className:"font-bold",children:l.friendly_name})," ",l.description]}),(0,a.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,a.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,a.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);