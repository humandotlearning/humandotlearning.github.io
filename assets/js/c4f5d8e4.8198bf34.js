/*! For license information please see c4f5d8e4.8198bf34.js.LICENSE.txt */
"use strict";(self.webpackChunknithin_blog=self.webpackChunknithin_blog||[]).push([[2634],{5327:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var i=r(4955),s=r(9856),n=r(2497),a=r(381),o=r(8222),l=r(3144);const c={features:"features_aEB2",featureSvg:"featureSvg_BSNV"};var h=r(4331);const g=[];function u(e){let{Svg:t,title:r,description:i}=e;return(0,h.jsxs)("div",{className:(0,s.A)("col col--4"),children:[(0,h.jsx)("div",{className:"text--center",children:(0,h.jsx)(t,{className:c.featureSvg,role:"img"})}),(0,h.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,h.jsx)(l.A,{as:"h3",children:r}),(0,h.jsx)("p",{children:i})]})]})}function d(){return(0,h.jsx)("section",{className:c.features,children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"row",children:g.map(((e,t)=>(0,h.jsx)(u,{...e},t)))})})})}const m={heroBanner:"heroBanner_Pa04",buttons:"buttons_Di9L"},f=r.p+"assets/images/profile-without-bkg-dbcb5391f8ab7efb54077a28347da386.png",v=r.p+"assets/images/noise-1934aa47770dd85847de43aeeab8063c.png",x=(...e)=>e.filter(((e,t,r)=>Boolean(e)&&r.indexOf(e)===t)).join(" ");var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const p=(0,i.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:n="",children:a,iconNode:o,...l},c)=>(0,i.createElement)("svg",{ref:c,...b,width:t,height:t,stroke:e,strokeWidth:s?24*Number(r)/Number(t):r,className:x("lucide",n),...l},[...o.map((([e,t])=>(0,i.createElement)(e,t))),...Array.isArray(a)?a:[a]]))),T=(e,t)=>{const r=(0,i.forwardRef)((({className:r,...s},n)=>{return(0,i.createElement)(p,{ref:n,iconNode:t,className:x(`lucide-${a=e,a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,r),...s});var a}));return r.displayName=`${e}`,r},A=T("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),E=T("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),_=T("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);function w(e){let{Icon:t,href:r,label:i}=e;return(0,h.jsx)("a",{className:(0,s.A)("button button--primary",m.social),target:"_blank",rel:"noopener noreferrer",href:r,"aria-label":i,children:(0,h.jsx)(t,{size:24})})}function N(){const{siteConfig:e}=(0,a.A)(),{glitchTagline:t,glitchWord:r,glitchIntensity:o,glitchColors:c}=e.customFields;return(0,i.useEffect)((()=>{!async function(){const[e,t]=await Promise.all([U(f),U(v)]),r=new j(document.querySelector("canvas")),{gl:i}=r;r.init("\n      precision mediump float;\n\n      attribute vec2 aPosition;\n      attribute vec2 aUV;\n      \n      varying vec2 vUV;\n      varying vec2 vPos;\n      \n      void main() {\n          gl_Position = vec4(aPosition, 0.0, 1.0);\n          vUV = aUV;\n          vPos = aPosition;\n      }\n      ","\n      precision mediump float;\n      \n      uniform sampler2D uTexture1;\n      uniform sampler2D uTexture2;\n      \n      uniform float uVar;\n      \n      varying vec2 vUV;\n      varying vec2 vPos;\n      \n      \n      float random (vec2 st) {\n          return fract(sin(dot(st.xy,vec2(12.9898,78.233)))* 43758.5453123);\n      }\n      \n      void main() {\n          vec4 color1 = texture2D(uTexture1, vUV);\n          vec4 color2 = texture2D(uTexture2, vUV);\n          vec4 color3 = vec4(vec3(random(vUV)), 1.);\n      \n          if (color2.r - uVar < 0.0) {\n              discard;\n          }\n      \n          gl_FragColor = color1;\n      }\n     ").loadBuffer(new Float32Array([1,1,1,1,-1,1,0,1,-1,-1,0,0,-1,-1,0,0,1,-1,1,0,1,1,1,1])).setAttrib("aPosition",2,i.FLOAT,!1,16,0).setAttrib("aUV",2,i.FLOAT,!1,16,8).loadTexture(e).setUniform("uTexture1","uniform1i",0).loadTexture(t).setUniform("uTexture2","uniform1i",1);let s=0,n=!1;!function e(){const t=i.getUniformLocation(r.program,"uVar");i.uniform1f(t,n?s-=.01:s+=.01),s>=1&&(n=!0);s<=0&&(n=!1);r.draw(r.gl.TRIANGLES,6),requestAnimationFrame(e)}()}()}),[]),(0,h.jsx)("header",{className:(0,s.A)("hero hero--primary",m.heroBanner),children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("canvas",{width:"300",height:"300",style:{borderRadius:"50%"}}),(0,h.jsx)(l.A,{as:"h1",className:"hero__title",children:e.title}),(0,h.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,h.jsx)("div",{className:m.buttons,children:(0,h.jsx)(n.A,{className:"button button--secondarycss button--lg",to:"/aboutMe",children:"About Me  \u2192"})}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:m.socialIcons,children:[(0,h.jsx)(w,{Icon:A,href:"https://twitter.com/call_me_Nithin",label:"Twitter Profile"}),(0,h.jsx)(w,{Icon:E,href:"https://www.linkedin.com/in/nithin1357/",label:"LinkedIn Profile"}),(0,h.jsx)(w,{Icon:_,href:"https://github.com/humandotlearning",label:"GitHub Profile"})]})]})})}function R(){const{siteConfig:e}=(0,a.A)();return(0,h.jsxs)(o.A,{title:`Hello from ${e.title}`,description:"working towards a better future supprted with AI",children:[(0,h.jsx)(N,{}),(0,h.jsx)("main",{children:(0,h.jsx)(d,{})})]})}console.log(f);class j{gl;program;vs;fs;buffer;textures=[];constructor(e){if(e instanceof HTMLCanvasElement)return this.gl=e.getContext("webgl"),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this;throw new Error("please pass canvas element")}init(e,t){const r=this.vs=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(r,e),this.gl.compileShader(r);const i=this.fs=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(i,t),this.gl.compileShader(i);const s=this.program=this.gl.createProgram();return this.gl.attachShader(s,r),this.gl.attachShader(s,i),this.gl.linkProgram(s),this.gl.useProgram(s),this}loadBuffer(e){const t=this.buffer=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,e,this.gl.STATIC_DRAW),this}loadTexture(e){const t=this.gl.createTexture();return this.gl.activeTexture(this.gl["TEXTURE"+this.textures.length]),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.textures.push(t),this}setAttrib(e,t,r,i,s,n){const a=this.gl.getAttribLocation(this.program,e);return this.gl.vertexAttribPointer(a,t,r,i,s,n),this.gl.enableVertexAttribArray(a),this}setUniform(e,t,r){const i=this.gl.getUniformLocation(this.program,e);return this.gl[t](i,r),this}draw(e,t){this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.drawArrays(e,0,t)}then(e){return e.call(this),this}}function U(e){return new Promise((t=>{const r=new Image;r.src=e,r.onload=function(){t(r)}}))}}}]);