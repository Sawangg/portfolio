(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{360:function(e,t,n){},361:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i),r=n(64),a=n.n(r),c=n(14),s=n(102),l=n.n(s),d=n(3);function h(){return Object(d.jsx)(l.a,{style:{opacity:"0.6"},height:"100vh",width:"100%",params:{particles:{number:{value:160,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"bottom",out_mode:"out"}}}})}var m=n(13),g=n(15),f=n(10),p=n(362),u=n(49);function j(){var e=Object(f.c)((function(){return{offset:0}})),t=Object(g.a)(e,2),n=t[0].offset,o=void 0===n?0:n,r=t[1],a=Object(f.c)((function(){return{xy:[0,0]}})),s=Object(g.a)(a,2),l=s[0].xy,h=s[1],j=Object(u.a)((function(e){var t=e.event,n=e.down,i=e.movement;t.preventDefault(),h({xy:n?i:[0,0]})}),{rubberband:!0,bounds:{left:-100,right:100,top:-50,bottom:50}}),b=Object(p.a)(),x=b.t,w=b.i18n,v=function(){r({offset:window.scrollY})};Object(i.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}));var O=Object(c.a)({root:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",minHeight:"75vh",width:"100vw",textAlign:"center",willChange:"transform"},logo:{background:"url(".concat("/assets/logo.png",") no-repeat center"),width:"310px",height:"310px",borderRadius:"50%",boxShadow:"1px 2px 10px #191919",overflow:"hidden",cursor:"grab",touchAction:"none",MozUserSelect:"none",WebkitUserDrag:"none",userSelect:"none"},textlanding:{marginTop:"2em"},text:{fontSize:"32pt",lineHeight:"36pt"},textHighlight:{color:"#cbdff4",fontSize:"35pt"},"@media screen and (max-width: 600px)":{logo:{width:"270px",height:"270px",backgroundSize:"100%"},text:{fontSize:"16pt",lineHeight:"20pt"},textHighlight:{fontSize:"16pt"}}})();return Object(d.jsxs)(f.a.div,{className:O.root,style:{transform:o.interpolate((function(e){return"translateY(".concat(.1*e,"px)")}))},children:[Object(d.jsx)(f.a.div,Object(m.a)(Object(m.a)({},j()),{},{className:O.logo,style:{transform:l.interpolate((function(e,t){return"translate3d(".concat(e,"px, ").concat(t,"px, 0)")}))}})),Object(d.jsxs)("div",{className:O.textlanding,children:[Object(d.jsxs)("h1",{className:O.text,children:[x("l1"),Object(d.jsx)("a",{href:"/assets/resume/resume_"+w.language+".pdf",target:"_blank",rel:"noreferrer",className:O.textHighlight,children:"L\xe9o Mercier"}),"."]}),Object(d.jsx)("h1",{className:O.text,children:x("l2")})]})]})}var b=n(109);function x(){var e=Object(p.a)().t,t=Object(c.a)({root:{flexGrow:1,alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw",marginTop:"5em"},title:{fontSize:"32pt",lineHeight:"36pt"},skillsCard:{width:"100vw",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",height:"80vh",flexWrap:"wrap"},skill:{width:"25vw",height:"auto",display:"flex",margin:"1.75em"},skillImg:{width:"5vw",height:"auto",marginRight:"1em"},skillBar:{height:7,borderRadius:20,backgroundColor:"#cbdff4"},skillBarBuffer:{width:"25vw",margin:"auto 0",height:7,borderRadius:20,backgroundColor:"rgba(203, 223, 244, 0.3)"},"@media screen and (max-width: 600px)":{root:{marginTop:"2em"},title:{fontSize:"25pt"},skillsCard:{flexDirection:"row",height:"70vh"},skill:{width:"45vw",margin:"0"},skillImg:{width:"12.5vw"},skillBarBuffer:{width:"25vw"}},"@media screen and (min-width: 601px) and (max-height: 900px)":{skill:{margin:"1em"}}})(),n=[{name:"nodejs",from:{width:"0%"},to:{width:"90%"},config:{mass:1,tension:25,friction:14}},{name:"react",from:{width:"0%"},to:{width:"75%"},config:{mass:10,tension:180,friction:40}},{name:"express",from:{width:"0%"},to:{width:"85%"},config:{mass:1,tension:280,friction:120}},{name:"mongodb",from:{width:"0%"},to:{width:"60%"},config:{mass:5,tension:100,friction:20}},{name:"javascript",from:{width:"0%"},to:{width:"80%"},config:{mass:20,tension:200,friction:70}},{name:"php",from:{width:"0%"},to:{width:"70%"},config:{mass:20,tension:180,friction:60}},{name:"mysql",from:{width:"0%"},to:{width:"90%"},config:{mass:1,tension:180,friction:80}},{name:"cplusplus",from:{width:"0%"},to:{width:"65%"},config:{mass:10,tension:180,friction:40}},{name:"rust",from:{width:"0%"},to:{width:"55%"},config:{mass:3,tension:210,friction:20}},{name:"java",from:{width:"0%"},to:{width:"65%"},config:{mass:5,tension:150,friction:25}}],i=Object(f.d)(n.length,n.map((function(e){e.name;return Object(b.a)(e,["name"])})));return Object(d.jsxs)("div",{className:t.root,children:[Object(d.jsx)("h1",{className:t.title,children:e("skill")}),Object(d.jsx)("div",{className:t.skillsCard,children:i.map((function(e,i){return Object(d.jsxs)("div",{className:t.skill,children:[Object(d.jsx)("img",{className:t.skillImg,src:"/assets/lng/"+n[i].name+".svg",alt:n[i].name},i+2),Object(d.jsx)("div",{className:t.skillBarBuffer,children:Object(d.jsx)(f.a.div,{className:t.skillBar,style:Object(m.a)({},e)},i)},i+3)]},i+1)}))})]})}function w(){var e=Object(p.a)().t,t=Object(c.a)({root:{flexGrow:1,alignItems:"center",display:"flex",flexDirection:"column",marginTop:"5em"},title:{fontSize:"32pt",lineHeight:"36pt"},wrapper:{width:"100vw",alignItems:"center",display:"flex",justifyContent:"center",height:"80vh"},projectCard:{position:"absolute",willChange:"transform"},projectWrapper:{display:"flex",width:"100vw",alignContent:"center",alignItems:"center",justifyContent:"center"},projet:{backgroundColor:"white",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",width:"calc(100vw - 5em)",maxWidth:"700px",height:"85vh",maxHeight:"570px",borderRadius:"10px",boxShadow:"0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)",cursor:"grab",touchAction:"none",MozUserSelect:"none",WebkitUserDrag:"none",userSelect:"none"},textWrapper:{display:"flex",width:"100vw",justifyContent:"center",alignContent:"center",alignItems:"center",padding:"0 5em 0 10em"},projectTitle:{fontSize:"25pt",marginRight:"0.5em"},projectDesc:{fontSize:"17pt",lineHeight:"22pt",zIndex:-1},technoImg:{width:"5vw",height:"auto",marginRight:"1.5em"},titleWrapper:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},repoImg:{width:"2vw"},technologies:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",paddingTop:"1em"},"@media screen and (max-width: 600px)":{root:{marginTop:"2em"},title:{fontSize:"25pt",MozUserSelect:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",userSelect:"none"},projectTitle:{MozUserSelect:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",userSelect:"none",textAlign:"center",fontSize:"16pt"},projectDesc:{MozUserSelect:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",userSelect:"none",fontSize:"inherit",lineHeight:"inherit"},technoImg:{width:"12vw",MozUserSelect:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",userSelect:"none"},wrapper:{flexDirection:"column"},projectWrapper:{height:"50vh"},projet:{width:"calc(100vw - 5em)",maxWidth:"400px",height:"40vh",maxHeight:"400px"},textWrapper:{zIndex:"auto",padding:"0 0.5em",textAlign:"center",height:"20vh"},repoImg:{width:"7vw"},technologies:{paddingTop:"0.5em"}},"@media screen and (min-width: 1030px) and (max-width: 1366px)":{projectWrapper:{height:"50vh",justifyContent:"flex-end"},projet:{width:"calc(100vw - 5em)",maxWidth:"430px",height:"40vh",maxHeight:"430px"}}}),n=[{name:"Rubik's Cube",desc:e("projectRubiksDesc"),img:"rubiks.png",technologies:["p5"]},{name:"Neptune",desc:e("projectNeptuneDesc"),img:"neptune.jpg",technologies:["nodejs","react","express","mongodb"]},{name:"Portfolio",desc:e("projectPortfolioDesc"),img:"portfolio.png",technologies:["react","javascript"],repo:"https://github.com/Sawangg/portfolio"},{name:"Pokemon",desc:e("projectPokemonDesc"),img:"pokemon.png",technologies:["java"],repo:"https://github.com/Sawangg/PokemonIUT"},{name:"Pilaf",desc:e("projectPilafDesc"),img:"Pilaf.png",technologies:["html","css"],repo:"https://github.com/Sawangg/Pilaf"},{name:"GMP",desc:e("projectGMPDesc"),img:"GMP.png",technologies:["react","express","mysql"]}],o=t(),r=Object(i.useState)((function(){return new Set})),a=Object(g.a)(r,1)[0],s=Object(i.useState)(n.length-1),l=Object(g.a)(s,2),h=l[0],j=l[1],b=Object(f.d)(n.length,(function(e){return Object(m.a)(Object(m.a)({},function(e){return{x:0,y:-4*e,scale:1,rot:20*Math.random()-10,delay:100*e}}(e)),{},{from:{x:0,rot:0,scale:1.5,y:-1e3}})})),x=Object(g.a)(b,2),w=x[0],v=x[1],O=Object(u.a)((function(e){var t=e.event,i=Object(g.a)(e.args,1)[0],o=e.down,r=Object(g.a)(e.delta,1)[0],c=Object(g.a)(e.direction,1)[0],s=e.velocity;t.preventDefault();var l=c<0?-1:1;!o&&s>.2&&a.add(i),v((function(e){if(i===e&&h===e){var t=a.has(i);return{x:t?(200+window.innerWidth)*l:o?r:0,rot:r/100+(t?10*l*s:0),scale:o?1.1:1,config:{friction:50,tension:o?800:t?200:1500}}}})),!o&&a.has(i)&&i-1>=0&&h===i?(j(i-1),window.scrollTo(0,1400+400*(n.length-i))):!o&&a.has(i)&&0===i&&h===i&&window.scrollTo(0,3401)}),{rubberband:!1}),y=Object(f.e)(h,null,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}}),k=function(e){v((function(t){if(h===t){a.add(e),j(e>0?e-1:e);var n=Math.random()<.5?1:-1;return{x:(200+window.innerWidth)*n,rot:Math.floor(199*Math.random()+1)/100+10*n*.2,scale:1.1,config:{friction:50,tension:150}}}}))},S=function(){if(window.scrollY>1400&&window.scrollY<1800){if(!a.has(5)&&5===h)return k(5)}else if(window.scrollY>1800&&window.scrollY<2200){if(!a.has(4)&&4===h)return k(4)}else if(window.scrollY>2200&&window.scrollY<2600){if(!a.has(3)&&3===h)return k(3)}else if(window.scrollY>2600&&window.scrollY<3e3){if(!a.has(2)&&2===h)return k(2)}else if(window.scrollY>3e3&&window.scrollY<3400){if(!a.has(1)&&1===h)return k(1)}else if(window.scrollY>3400&&!a.has(0)&&0===h)return k(0)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",S),function(){window.removeEventListener("scroll",S)}})),Object(d.jsxs)("div",{className:o.root,children:[Object(d.jsx)("h1",{className:o.title,children:e("project")}),Object(d.jsxs)("div",{className:o.wrapper,children:[Object(d.jsx)("div",{className:o.projectWrapper,children:w.map((function(e,t){var i=e.x,r=e.y,a=e.rot,c=e.scale;return Object(d.jsx)(f.a.div,{className:o.projectCard,style:{transform:Object(f.b)([i,r],(function(e,t){return"translate3d(".concat(e,"px, ").concat(t,"px, 0)")}))},children:Object(d.jsx)(f.a.div,Object(m.a)(Object(m.a)({className:o.projet},O(t)),{},{style:{transform:Object(f.b)([a,c],(function(e,t){return"perspective(1500px) rotateX(30deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")})),backgroundImage:"url(".concat("/assets/projects/"+n[t].img,")")}}))},t)}))}),Object(d.jsx)("div",{className:o.textWrapper,children:y.map((function(e){var t=e.item,i=e.props,r=e.key;return Object(d.jsxs)(f.a.div,{style:Object(m.a)(Object(m.a)({},i),{},{position:"absolute",padding:"0 0.5em"}),children:[Object(d.jsxs)("div",{className:o.titleWrapper,children:[Object(d.jsx)("h1",{className:o.projectTitle,children:n[t].name}),void 0!==n[t].repo?Object(d.jsx)("a",{href:n[t].repo,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:o.repoImg,src:"/assets/contact/github.svg",alt:"github"})}):null]},r+1),Object(d.jsx)("p",{className:o.projectDesc,children:n[t].desc}),Object(d.jsx)("div",{className:o.technologies,children:n[t].technologies.map((function(e){return Object(d.jsx)("img",{className:o.technoImg,src:"/assets/lng/"+e+".svg",alt:e},e)}))},r+2)]},r)}))})]})]})}function v(){var e=Object(p.a)().t,t=Object(c.a)({root:{flexGrow:1,alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw",marginTop:"5em"},title:{fontSize:"32pt",lineHeight:"36pt"},subtitle:{fontSize:"20pt",lineHeight:"12pt"},wrapper:{width:"100vw",alignItems:"center",display:"flex",justifyContent:"center",height:"80vh",flexDirection:"column"},imgWrapper:{display:"flex",flexDirection:"row",width:""},img:{width:"7vw",margin:"2em"},"@media screen and (max-width: 600px)":{title:{padding:"0 0.5em",fontSize:"19pt",lineHeight:"25pt",textAlign:"center"},subtitle:{fontSize:"inherit",lineHeight:"inherit"},img:{width:"12vw",margin:"1.5em"}}})();return Object(d.jsx)("div",{className:t.root,children:Object(d.jsxs)("div",{className:t.wrapper,children:[Object(d.jsx)("h1",{className:t.title,children:e("thankyoutitle")}),Object(d.jsx)("p",{className:t.subtitle,children:e("thankyouSubtitle")}),Object(d.jsxs)("div",{className:t.imgWrapper,children:[Object(d.jsx)("a",{href:"https://github.com/Sawangg",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:t.img,src:"/assets/contact/github.svg",alt:"github"})}),Object(d.jsx)("a",{href:"mailto:leo.mercier1@etu.unilim.fr",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:t.img,src:"/assets/contact/email.svg",alt:"email"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/l%C3%A9o-mercier-9b3828207/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:t.img,src:"/assets/contact/linkedin.svg",alt:"linkedin"})})]})]})})}var O=n(51),y=function(){var e=Object(i.useState)(0),t=Object(g.a)(e,2),n=t[0],o=t[1],r=function(){var e=window.scrollY;e<400&&0!==n?o(0):e>400&&e<900&&1!==n?o(1):e>900&&e<3400&&2!==n?o(2):e>3400&&3!==n&&o(3)};Object(i.useEffect)((function(){return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}));var a=[Object(d.jsx)(j,{}),Object(d.jsx)(x,{}),Object(d.jsx)(w,{}),Object(d.jsx)(v,{})];return Object(d.jsx)(O.Transition,{unique:!0,reset:!0,items:n,from:{opacity:0},enter:{opacity:1},leave:{opacity:0},children:function(e){return function(t){return Object(d.jsx)(f.a.div,{style:Object(m.a)(Object(m.a)({},t),{},{position:"absolute",top:0,left:0,display:"flex"}),children:a[e]})}}})},k=o.a.memo(y);function S(){var e=Object(p.a)().i18n,t=["en","fr"],n=Object(i.useState)(t.indexOf(e.language)),o=Object(g.a)(n,2),r=o[0],a=o[1],s=Object(c.a)({root:{cursor:"pointer",position:"absolute",width:"100%",height:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center",willChange:"transform, opacity"},flagButton:{marginRight:"3em",border:"2px solid #cbdff4",padding:"5px 10px 0",borderRadius:"10px",boxShadow:"1px 2px 10px #191919"},flagImg:{width:"27px",height:"auto"},"@media (max-width: 600px)":{flagButton:{marginRight:"1em"},flagImg:{width:"20px",height:"auto"}}})(),l=[Object(d.jsx)("img",{className:s.flagImg,src:"/assets/flags/us_uk.svg",alt:"us_uk"}),Object(d.jsx)("img",{className:s.flagImg,src:"/assets/flags/fr.svg",alt:"fr"})];return Object(d.jsx)("div",{className:s.root,onClick:function(){var n=(r+1)%t.length;a(n),e.changeLanguage(t[n])},children:Object(d.jsx)(O.Transition,{items:r,from:{opacity:0,transform:"translate3d(100%, 0, 0)"},enter:{opacity:1,transform:"translate3d(0%, 0, 0)"},leave:{opacity:0,transform:"translate3d(-50%, 0, 0)"},children:function(e){return function(t){return Object(d.jsx)(f.a.div,{style:Object(m.a)({},t),className:s.flagButton,children:l[e]})}}})})}var N=function(){var e=Object(i.useState)(Math.floor(window.scrollY/(window.document.body.offsetHeight-Math.max(document.documentElement.clientHeight,window.innerHeight||0))*100)),t=Object(g.a)(e,2),n=t[0],o=t[1],r=Object(i.useRef)(),a=function(){o(window.scrollY/(window.document.body.offsetHeight-Math.max(document.documentElement.clientHeight,window.innerHeight||0))*100),r.current&&(r.current.style="transition: stroke-dashoffset 850ms ease-in-out;")};Object(i.useEffect)((function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}));var s=Object(c.a)({svgRootCircle:{position:"absolute",top:0,left:0,margin:"2em",maxWidth:"100%"},svgCircle:{fill:"none"},svgRootLine:{position:"absolute",top:0,left:0,maxWidth:"100%"}})();if(window.innerWidth>800){var l=2*Math.PI*23.5;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("svg",{className:s.svgRootCircle,width:50,height:50,children:Object(d.jsx)("circle",{className:s.svgCircle,ref:r,stroke:"#cbdff4",cx:25,cy:25,r:23.5,strokeWidth:3,strokeDasharray:l,strokeDashoffset:(100-n)/100*l})})})}return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("svg",{className:s.svgRootLine,width:window.innerWidth,height:5,children:Object(d.jsx)("line",{ref:r,x1:"0",y1:"0",y2:"0",x2:n*(.01*window.innerWidth),stroke:"#cbdff4",strokeWidth:"7"})})})},C=o.a.memo(N),z=n(66),I=n(35),W=n(106),D=n(108);z.a.use(I.e).use(W.a).use(D.a).init({supportedLngs:["en","fr"],interpolation:{escapeValue:!1},nonExplicitSupportedLngs:!1,fallbackLng:"en"});z.a;var H=Object(c.b)({"@global":{"*, *::before, *::after":{scrollbarColor:"#202324 #454a4d",boxSizing:"inherit"},html:{WebkitFontSmoothing:"antialiased",MozFontSmoothing:"grayscale",boxSizing:"border-box",overflowX:"hidden",backgroundColor:"#252934"},body:{margin:0,overflowX:"hidden",fontFamily:"Raleway",color:"#FFFFFF",backgroundColor:"#252934",fontWeight:400,lineHeight:1.43,letterSpacing:"0.01071em",direction:"ltr",overscrollBehavior:"contain",fontSize:"0.875rem",position:"relative",minHeight:"4600px"},h1:{margin:0},a:{"&:focus":{outline:0}}}})((function(){var e=Object(c.a)({rootFixed:{position:"fixed",width:"100vw",height:"100vh"},footer:{zIndex:1,width:"100vw",position:"absolute",bottom:0,marginBottom:"2.5em"},"@media screen and (max-width: 600px)":{footer:{marginBottom:"3.5em"}}})();return Object(d.jsxs)("div",{className:e.rootFixed,children:[Object(d.jsx)(h,{}),Object(d.jsxs)(o.a.Suspense,{fallback:"Loading...",children:[Object(d.jsx)(C,{}),Object(d.jsx)(k,{}),Object(d.jsx)("div",{className:e.footer,children:Object(d.jsx)(S,{})})]})]})}));n(360);window.scrollTo(0,0),a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root"))}},[[361,1,2]]]);
//# sourceMappingURL=main.701997f1.chunk.js.map