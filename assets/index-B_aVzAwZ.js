var ou=Object.defineProperty;var au=(r,e,t)=>e in r?ou(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var zt=(r,e,t)=>au(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="134",lu=0,$o=1,cu=2,Nl=1,uu=2,Ki=3,gi=0,$e=1,Nn=2,Pl=1,pn=0,ji=1,oo=2,ea=3,ta=4,hu=5,ci=100,du=101,fu=102,na=103,ia=104,pu=200,mu=201,gu=202,vu=203,Vl=204,Dl=205,xu=206,yu=207,_u=208,bu=209,wu=210,Mu=0,Su=1,Cu=2,ao=3,Iu=4,Au=5,Tu=6,Eu=7,or=0,Ru=1,Lu=2,Fn=0,Bu=1,Gu=2,Fu=3,Nu=4,Pu=5,Hl=300,fs=301,ps=302,lo=303,co=304,ar=306,So=307,vi=1e3,bt=1001,qs=1002,qe=1003,uo=1004,ho=1005,rt=1006,Ul=1007,Mi=1008,yn=1009,Vu=1010,Du=1011,$s=1012,Hu=1013,Qs=1014,jt=1015,fi=1016,Uu=1017,zu=1018,Wu=1019,Qi=1020,ku=1021,qt=1022,ot=1023,Ou=1024,Zu=1025,Xu=ot,pi=1026,is=1027,Yu=1028,Ku=1029,Ju=1030,ju=1031,Qu=1032,qu=1033,sa=33776,ra=33777,oa=33778,aa=33779,la=35840,ca=35841,ua=35842,ha=35843,$u=36196,da=37492,fa=37496,eh=37808,th=37809,nh=37810,ih=37811,sh=37812,rh=37813,oh=37814,ah=37815,lh=37816,ch=37817,uh=37818,hh=37819,dh=37820,fh=37821,ph=36492,mh=37840,gh=37841,vh=37842,xh=37843,yh=37844,_h=37845,bh=37846,wh=37847,Mh=37848,Sh=37849,Ch=37850,Ih=37851,Ah=37852,Th=37853,Eh=2200,Rh=2201,Lh=2202,ss=2300,xi=2301,yr=2302,ui=2400,hi=2401,er=2402,Co=2500,zl=2501,Bh=0,Gh=1,Wl=2,mt=3e3,xt=3001,Io=3007,Ao=3002,Fh=3003,kl=3004,Ol=3005,Zl=3006,Nh=3200,Ph=3201,Dn=0,Vh=1,_r=7680,Dh=519,rs=35044,tr=35048,pa="300 es";class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}let ys=1234567;const qi=Math.PI/180,os=180/Math.PI,at=[];for(let r=0;r<256;r++)at[r]=(r<16?"0":"")+r.toString(16);const Hh=typeof crypto<"u"&&"randomUUID"in crypto;function It(){if(Hh)return crypto.randomUUID().toUpperCase();const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toUpperCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function To(r,e){return(r%e+e)%e}function Uh(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function zh(r,e,t){return r!==e?(t-r)/(e-r):0}function $i(r,e,t){return(1-t)*r+t*e}function Wh(r,e,t,n){return $i(r,e,1-Math.exp(-t*n))}function kh(r,e=1){return e-Math.abs(To(r,e*2)-e)}function Oh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Zh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Xh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Yh(r,e){return r+Math.random()*(e-r)}function Kh(r){return r*(.5-Math.random())}function Jh(r){return r!==void 0&&(ys=r%2147483647),ys=ys*16807%2147483647,(ys-1)/2147483646}function jh(r){return r*qi}function Qh(r){return r*os}function fo(r){return(r&r-1)===0&&r!==0}function Xl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Yl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qh(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var $h=Object.freeze({__proto__:null,DEG2RAD:qi,RAD2DEG:os,generateUUID:It,clamp:_t,euclideanModulo:To,mapLinear:Uh,inverseLerp:zh,lerp:$i,damp:Wh,pingpong:kh,smoothstep:Oh,smootherstep:Zh,randInt:Xh,randFloat:Yh,randFloatSpread:Kh,seededRandom:Jh,degToRad:jh,radToDeg:Qh,isPowerOfTwo:fo,ceilPowerOfTwo:Xl,floorPowerOfTwo:Yl,setQuaternionFromProperEuler:qh});class K{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}K.prototype.isVector2=!0;class lt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=i[0],x=i[3],m=i[6],p=i[1],b=i[4],_=i[7],M=i[2],T=i[5],y=i[8];return s[0]=o*v+a*p+l*M,s[3]=o*x+a*b+l*T,s[6]=o*m+a*_+l*y,s[1]=c*v+u*p+h*M,s[4]=c*x+u*b+h*T,s[7]=c*m+u*_+h*y,s[2]=d*v+f*p+g*M,s[5]=d*x+f*b+g*T,s[8]=d*m+f*_+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}lt.prototype.isMatrix3=!0;function Kl(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ma(r,e=0){let t=3735928559^e,n=1103547991^e;for(let i=0,s;i<r.length;i++)s=r.charCodeAt(i),t=Math.imul(t^s,2654435761),n=Math.imul(n^s,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}let On;class Si{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{On===void 0&&(On=lr("canvas")),On.width=e.width,On.height=e.height;const n=On.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=On}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let ed=0;class nt extends Hn{constructor(e=nt.DEFAULT_IMAGE,t=nt.DEFAULT_MAPPING,n=bt,i=bt,s=rt,o=Mi,a=ot,l=yn,c=1,u=mt){super(),Object.defineProperty(this,"id",{value:ed++}),this.uuid=It(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=It()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(br(i[o].image)):s.push(br(i[o]))}else s=br(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vi:e.x=e.x-Math.floor(e.x);break;case bt:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vi:e.y=e.y-Math.floor(e.y);break;case bt:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}nt.DEFAULT_IMAGE=void 0;nt.DEFAULT_MAPPING=Hl;nt.prototype.isTexture=!0;function br(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Si.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class He{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],x=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,_=(f+1)/2,M=(m+1)/2,T=(u+d)/4,y=(h+v)/4,F=(g+x)/4;return b>_&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=T/n,s=y/n):_>M?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=T/i,s=F/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=y/s,i=F/s),this.set(n,i,s,t),this}let p=Math.sqrt((x-g)*(x-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(p)<.001&&(p=1),this.x=(x-g)/p,this.y=(h-v)/p,this.z=(d-u)/p,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}He.prototype.isVector4=!0;class pt extends Hn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t),this.texture=new nt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}pt.prototype.isWebGLRenderTarget=!0;class td extends pt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}td.prototype.isWebGLMultipleRenderTargets=!0;class Jl extends pt{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Jl.prototype.isWebGLMultisampleRenderTarget=!0;class vt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let x=1-a;const m=l*d+c*f+u*g+h*v,p=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const M=Math.sqrt(b),T=Math.atan2(M,m*p);x=Math.sin(x*T)/M,a=Math.sin(a*T)/M}const _=a*p;if(l=l*x+d*_,c=c*x+f*_,u=u*x+g*_,h=h*x+v*_,x===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}vt.prototype.isQuaternion=!0;class A{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}A.prototype.isVector3=!0;const wr=new A,ga=new vt;class Tt{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox),Mr.applyMatrix4(e.matrixWorld),this.union(Mr));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),_s.subVectors(this.max,Vi),Zn.subVectors(e.a,Vi),Xn.subVectors(e.b,Vi),Yn.subVectors(e.c,Vi),sn.subVectors(Xn,Zn),rn.subVectors(Yn,Xn),Tn.subVectors(Zn,Yn);let t=[0,-sn.z,sn.y,0,-rn.z,rn.y,0,-Tn.z,Tn.y,sn.z,0,-sn.x,rn.z,0,-rn.x,Tn.z,0,-Tn.x,-sn.y,sn.x,0,-rn.y,rn.x,0,-Tn.y,Tn.x,0];return!Sr(t,Zn,Xn,Yn,_s)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,Zn,Xn,Yn,_s))?!1:(bs.crossVectors(sn,rn),t=[bs.x,bs.y,bs.z],Sr(t,Zn,Xn,Yn,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Pi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Tt.prototype.isBox3=!0;const Wt=[new A,new A,new A,new A,new A,new A,new A,new A],Pi=new A,Mr=new Tt,Zn=new A,Xn=new A,Yn=new A,sn=new A,rn=new A,Tn=new A,Vi=new A,_s=new A,bs=new A,En=new A;function Sr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){En.fromArray(r,s);const a=i.x*Math.abs(En.x)+i.y*Math.abs(En.y)+i.z*Math.abs(En.z),l=e.dot(En),c=t.dot(En),u=n.dot(En);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nd=new Tt,va=new A,Cr=new A,Ir=new A;class Un{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ir.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Cr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(va.copy(e.center).add(Cr)),this.expandByPoint(va.copy(e.center).sub(Cr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kt=new A,Ar=new A,ws=new A,on=new A,Tr=new A,Ms=new A,Er=new A;class Ci{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.direction).multiplyScalar(t).add(this.origin),kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ar.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Ar);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ws),a=on.dot(this.direction),l=-on.dot(ws),c=on.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ws).multiplyScalar(d).add(Ar),f}intersectSphere(e,t){kt.subVectors(e.center,this.origin);const n=kt.dot(this.direction),i=kt.dot(kt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,n,i,s){Tr.subVectors(t,e),Ms.subVectors(n,e),Er.crossVectors(Tr,Ms);let o=this.direction.dot(Er),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;on.subVectors(this.origin,e);const l=a*this.direction.dot(Ms.crossVectors(on,Ms));if(l<0)return null;const c=a*this.direction.dot(Tr.cross(on));if(c<0||l+c>o)return null;const u=-a*on.dot(Er);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,v,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),o=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(id,e,sd)}lookAt(e,t,n){const i=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),an.crossVectors(n,wt),an.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),an.crossVectors(n,wt)),an.normalize(),Ss.crossVectors(wt,an),i[0]=an.x,i[4]=Ss.x,i[8]=wt.x,i[1]=an.y,i[5]=Ss.y,i[9]=wt.y,i[2]=an.z,i[6]=Ss.z,i[10]=wt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],x=n[10],m=n[14],p=n[3],b=n[7],_=n[11],M=n[15],T=i[0],y=i[4],F=i[8],Z=i[12],V=i[1],E=i[5],ee=i[9],N=i[13],I=i[2],G=i[6],B=i[10],R=i[14],H=i[3],J=i[7],oe=i[11],ne=i[15];return s[0]=o*T+a*V+l*I+c*H,s[4]=o*y+a*E+l*G+c*J,s[8]=o*F+a*ee+l*B+c*oe,s[12]=o*Z+a*N+l*R+c*ne,s[1]=u*T+h*V+d*I+f*H,s[5]=u*y+h*E+d*G+f*J,s[9]=u*F+h*ee+d*B+f*oe,s[13]=u*Z+h*N+d*R+f*ne,s[2]=g*T+v*V+x*I+m*H,s[6]=g*y+v*E+x*G+m*J,s[10]=g*F+v*ee+x*B+m*oe,s[14]=g*Z+v*N+x*R+m*ne,s[3]=p*T+b*V+_*I+M*H,s[7]=p*y+b*E+_*G+M*J,s[11]=p*F+b*ee+_*B+M*oe,s[15]=p*Z+b*N+_*R+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],x=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+v*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+x*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],x=e[14],m=e[15],p=h*x*c-v*d*c+v*l*f-a*x*f-h*l*m+a*d*m,b=g*d*c-u*x*c-g*l*f+o*x*f+u*l*m-o*d*m,_=u*v*c-g*h*c+g*a*f-o*v*f-u*a*m+o*h*m,M=g*h*l-u*v*l-g*a*d+o*v*d+u*a*x-o*h*x,T=t*p+n*b+i*_+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/T;return e[0]=p*y,e[1]=(v*d*s-h*x*s-v*i*f+n*x*f+h*i*m-n*d*m)*y,e[2]=(a*x*s-v*l*s+v*i*c-n*x*c-a*i*m+n*l*m)*y,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*y,e[4]=b*y,e[5]=(u*x*s-g*d*s+g*i*f-t*x*f-u*i*m+t*d*m)*y,e[6]=(g*l*s-o*x*s-g*i*c+t*x*c+o*i*m-t*l*m)*y,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*y,e[8]=_*y,e[9]=(g*h*s-u*v*s-g*n*f+t*v*f+u*n*m-t*h*m)*y,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*m+t*a*m)*y,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*y,e[12]=M*y,e[13]=(u*v*i-g*h*i+g*n*d-t*v*d-u*n*x+t*h*x)*y,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*x-t*a*x)*y,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*y,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,v=o*u,x=o*h,m=a*h,p=l*c,b=l*u,_=l*h,M=n.x,T=n.y,y=n.z;return i[0]=(1-(v+m))*M,i[1]=(f+_)*M,i[2]=(g-b)*M,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(d+m))*T,i[6]=(x+p)*T,i[7]=0,i[8]=(g+b)*y,i[9]=(x-p)*y,i[10]=(1-(d+v))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Kn.set(i[0],i[1],i[2]).length();const o=Kn.set(i[4],i[5],i[6]).length(),a=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Lt.copy(this);const c=1/s,u=1/o,h=1/a;return Lt.elements[0]*=c,Lt.elements[1]*=c,Lt.elements[2]*=c,Lt.elements[4]*=u,Lt.elements[5]*=u,Lt.elements[6]*=u,Lt.elements[8]*=h,Lt.elements[9]*=h,Lt.elements[10]*=h,t.setFromRotationMatrix(Lt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,d=(n+i)*c,f=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}pe.prototype.isMatrix4=!0;const Kn=new A,Lt=new pe,id=new A(0,0,0),sd=new A(1,1,1),an=new A,Ss=new A,wt=new A,xa=new pe,ya=new vt;class Ii{constructor(e=0,t=0,n=0,i=Ii.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ya.setFromEuler(this),this.setFromQuaternion(ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new A(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ii.prototype.isEuler=!0;Ii.DefaultOrder="XYZ";Ii.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class rd{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let od=0;const _a=new A,Jn=new vt,Ot=new pe,Cs=new A,Di=new A,ad=new A,ld=new vt,ba=new A(1,0,0),wa=new A(0,1,0),Ma=new A(0,0,1),cd={type:"added"},Sa={type:"removed"};class Ne extends Hn{constructor(){super(),Object.defineProperty(this,"id",{value:od++}),this.uuid=It(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DefaultUp.clone();const e=new A,t=new Ii,n=new vt,i=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new lt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ne.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(ba,e)}rotateY(e){return this.rotateOnAxis(wa,e)}rotateZ(e){return this.rotateOnAxis(Ma,e)}translateOnAxis(e,t){return _a.copy(e).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ba,e)}translateY(e){return this.translateOnAxis(wa,e)}translateZ(e){return this.translateOnAxis(Ma,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ot.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cs.copy(e):Cs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ot.lookAt(Di,Cs,this.up):Ot.lookAt(Cs,Di,this.up),this.quaternion.setFromRotationMatrix(Ot),i&&(Ot.extractRotation(i.matrixWorld),Jn.setFromRotationMatrix(Ot),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Sa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ot.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ot.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ot),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ne.DefaultUp=new A(0,1,0);Ne.DefaultMatrixAutoUpdate=!0;Ne.prototype.isObject3D=!0;const Bt=new A,Zt=new A,Rr=new A,Xt=new A,jn=new A,Qn=new A,Ca=new A,Lr=new A,Br=new A,Gr=new A;class et{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bt.subVectors(e,t),i.cross(Bt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bt.subVectors(i,t),Zt.subVectors(n,t),Rr.subVectors(e,t);const o=Bt.dot(Bt),a=Bt.dot(Zt),l=Bt.dot(Rr),c=Zt.dot(Zt),u=Zt.dot(Rr),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xt),Xt.x>=0&&Xt.y>=0&&Xt.x+Xt.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Xt),l.set(0,0),l.addScaledVector(s,Xt.x),l.addScaledVector(o,Xt.y),l.addScaledVector(a,Xt.z),l}static isFrontFacing(e,t,n,i){return Bt.subVectors(n,t),Zt.subVectors(e,t),Bt.cross(Zt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),Bt.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return et.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return et.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return et.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return et.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return et.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;jn.subVectors(i,n),Qn.subVectors(s,n),Lr.subVectors(e,n);const l=jn.dot(Lr),c=Qn.dot(Lr);if(l<=0&&c<=0)return t.copy(n);Br.subVectors(e,i);const u=jn.dot(Br),h=Qn.dot(Br);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(jn,o);Gr.subVectors(e,s);const f=jn.dot(Gr),g=Qn.dot(Gr);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qn,a);const x=u*g-f*h;if(x<=0&&h-u>=0&&f-g>=0)return Ca.subVectors(s,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Ca,a);const m=1/(x+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(jn,o).addScaledVector(Qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ud=0;class tt extends Hn{constructor(){super(),Object.defineProperty(this,"id",{value:ud++}),this.uuid=It(),this.name="",this.type="Material",this.fog=!0,this.blending=ji,this.side=gi,this.vertexColors=!1,this.opacity=1,this.format=ot,this.transparent=!1,this.blendSrc=Vl,this.blendDst=Dl,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Pl;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==ot&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}tt.prototype.isMaterial=!0;const jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gt={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Fr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class re{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=To(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=Fr(s,i,e+1/3),this.g=Fr(s,i,e),this.b=Fr(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=jl[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),o=Math.min(t,n,i);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-i)/u+(n<i?6:0);break;case n:a=(i-t)/u+2;break;case i:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=n,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(Is);const n=$i(Gt.h,Is.h,t),i=$i(Gt.s,Is.s,t),s=$i(Gt.l,Is.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}re.NAMES=jl;re.prototype.isColor=!0;re.prototype.r=1;re.prototype.g=1;re.prototype.b=1;class st extends tt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}st.prototype.isMeshBasicMaterial=!0;const Ue=new A,As=new K;class Je{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=rs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new re),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new K),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new A),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new He),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ue.fromBufferAttribute(this,t),Ue.applyMatrix3(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ue.x=this.getX(t),Ue.y=this.getY(t),Ue.z=this.getZ(t),Ue.applyMatrix4(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ue.x=this.getX(t),Ue.y=this.getY(t),Ue.z=this.getZ(t),Ue.applyNormalMatrix(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ue.x=this.getX(t),Ue.y=this.getY(t),Ue.z=this.getZ(t),Ue.transformDirection(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Je.prototype.isBufferAttribute=!0;class Ql extends Je{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ql extends Je{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hd extends Je{constructor(e,t,n){super(new Uint16Array(e),t,n)}}hd.prototype.isFloat16BufferAttribute=!0;class Ze extends Je{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dd=0;const St=new pe,Vr=new Ne,qn=new A,Mt=new Tt,Hi=new Tt,it=new A;class Pe extends Hn{constructor(){super(),Object.defineProperty(this,"id",{value:dd++}),this.uuid=It(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)>65535?ql:Ql)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return St.makeRotationFromQuaternion(e),this.applyMatrix4(St),this}rotateX(e){return St.makeRotationX(e),this.applyMatrix4(St),this}rotateY(e){return St.makeRotationY(e),this.applyMatrix4(St),this}rotateZ(e){return St.makeRotationZ(e),this.applyMatrix4(St),this}translate(e,t,n){return St.makeTranslation(e,t,n),this.applyMatrix4(St),this}scale(e,t,n){return St.makeScale(e,t,n),this.applyMatrix4(St),this}lookAt(e){return Vr.lookAt(e),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Mt.setFromBufferAttribute(s),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(it.addVectors(Mt.min,Hi.min),Mt.expandByPoint(it),it.addVectors(Mt.max,Hi.max),Mt.expandByPoint(it)):(Mt.expandByPoint(Hi.min),Mt.expandByPoint(Hi.max))}Mt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)it.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(it));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)it.fromBufferAttribute(a,c),l&&(qn.fromBufferAttribute(e,c),it.add(qn)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Je(new Float32Array(4*a),4));const l=t.tangent.array,c=[],u=[];for(let V=0;V<a;V++)c[V]=new A,u[V]=new A;const h=new A,d=new A,f=new A,g=new K,v=new K,x=new K,m=new A,p=new A;function b(V,E,ee){h.fromArray(i,V*3),d.fromArray(i,E*3),f.fromArray(i,ee*3),g.fromArray(o,V*2),v.fromArray(o,E*2),x.fromArray(o,ee*2),d.sub(h),f.sub(h),v.sub(g),x.sub(g);const N=1/(v.x*x.y-x.x*v.y);isFinite(N)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-v.y).multiplyScalar(N),p.copy(f).multiplyScalar(v.x).addScaledVector(d,-x.x).multiplyScalar(N),c[V].add(m),c[E].add(m),c[ee].add(m),u[V].add(p),u[E].add(p),u[ee].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let V=0,E=_.length;V<E;++V){const ee=_[V],N=ee.start,I=ee.count;for(let G=N,B=N+I;G<B;G+=3)b(n[G+0],n[G+1],n[G+2])}const M=new A,T=new A,y=new A,F=new A;function Z(V){y.fromArray(s,V*3),F.copy(y);const E=c[V];M.copy(E),M.sub(y.multiplyScalar(y.dot(E))).normalize(),T.crossVectors(F,E);const N=T.dot(u[V])<0?-1:1;l[V*4]=M.x,l[V*4+1]=M.y,l[V*4+2]=M.z,l[V*4+3]=N}for(let V=0,E=_.length;V<E;++V){const ee=_[V],N=ee.start,I=ee.count;for(let G=N,B=N+I;G<B;G+=3)Z(n[G+0]),Z(n[G+1]),Z(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,s=new A,o=new A,a=new A,l=new A,c=new A,u=new A,h=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,d=c;h<u;h++,d++)o[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new Je(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Pe.prototype.isBufferGeometry=!0;const Ia=new pe,$n=new Ci,Dr=new Un,ln=new A,cn=new A,un=new A,Hr=new A,Ur=new A,zr=new A,Ts=new A,Es=new A,Rs=new A,Ls=new K,Bs=new K,Gs=new K,Wr=new A,Fs=new A;class We extends Ne{constructor(e=new Pe,t=new st){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),e.ray.intersectsSphere(Dr)===!1)||(Ia.copy(s).invert(),$n.copy(e.ray).applyMatrix4(Ia),n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=i[m.materialIndex],b=Math.max(m.start,g.start),_=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let M=b,T=_;M<T;M+=3){const y=a.getX(M),F=a.getX(M+1),Z=a.getX(M+2);o=Ns(this,p,e,$n,l,c,u,h,d,y,F,Z),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const v=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=v,p=x;m<p;m+=3){const b=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);o=Ns(this,i,e,$n,l,c,u,h,d,b,_,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=i[m.materialIndex],b=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=b,T=_;M<T;M+=3){const y=M,F=M+1,Z=M+2;o=Ns(this,p,e,$n,l,c,u,h,d,y,F,Z),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=v,p=x;m<p;m+=3){const b=m,_=m+1,M=m+2;o=Ns(this,i,e,$n,l,c,u,h,d,b,_,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}We.prototype.isMesh=!0;function fd(r,e,t,n,i,s,o,a){let l;if(e.side===$e?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==Nn,a),l===null)return null;Fs.copy(a),Fs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:r}}function Ns(r,e,t,n,i,s,o,a,l,c,u,h){ln.fromBufferAttribute(i,c),cn.fromBufferAttribute(i,u),un.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){Ts.set(0,0,0),Es.set(0,0,0),Rs.set(0,0,0);for(let g=0,v=s.length;g<v;g++){const x=d[g],m=s[g];x!==0&&(Hr.fromBufferAttribute(m,c),Ur.fromBufferAttribute(m,u),zr.fromBufferAttribute(m,h),o?(Ts.addScaledVector(Hr,x),Es.addScaledVector(Ur,x),Rs.addScaledVector(zr,x)):(Ts.addScaledVector(Hr.sub(ln),x),Es.addScaledVector(Ur.sub(cn),x),Rs.addScaledVector(zr.sub(un),x)))}ln.add(Ts),cn.add(Es),un.add(Rs)}r.isSkinnedMesh&&(r.boneTransform(c,ln),r.boneTransform(u,cn),r.boneTransform(h,un));const f=fd(r,e,t,n,ln,cn,un,Wr);if(f){a&&(Ls.fromBufferAttribute(a,c),Bs.fromBufferAttribute(a,u),Gs.fromBufferAttribute(a,h),f.uv=et.getUV(Wr,ln,cn,un,Ls,Bs,Gs,new K)),l&&(Ls.fromBufferAttribute(l,c),Bs.fromBufferAttribute(l,u),Gs.fromBufferAttribute(l,h),f.uv2=et.getUV(Wr,ln,cn,un,Ls,Bs,Gs,new K));const g={a:c,b:u,c:h,normal:new A,materialIndex:0};et.getNormal(ln,cn,un,g.normal),f.face=g}return f}class Ai extends Pe{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function g(v,x,m,p,b,_,M,T,y,F,Z){const V=_/y,E=M/F,ee=_/2,N=M/2,I=T/2,G=y+1,B=F+1;let R=0,H=0;const J=new A;for(let oe=0;oe<B;oe++){const ne=oe*E-N;for(let te=0;te<G;te++){const U=te*V-ee;J[v]=U*p,J[x]=ne*b,J[m]=I,c.push(J.x,J.y,J.z),J[v]=0,J[x]=0,J[m]=T>0?1:-1,u.push(J.x,J.y,J.z),h.push(te/y),h.push(1-oe/F),R+=1}}for(let oe=0;oe<F;oe++)for(let ne=0;ne<y;ne++){const te=d+ne+G*oe,U=d+ne+G*(oe+1),Q=d+(ne+1)+G*(oe+1),ce=d+(ne+1)+G*oe;l.push(te,U,ce),l.push(U,Q,ce),H+=6}a.addGroup(f,H,Z),f+=H,d+=R}}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ht(r){const e={};for(let t=0;t<r.length;t++){const n=yi(r[t]);for(const i in n)e[i]=n[i]}return e}const nr={clone:yi,merge:ht};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ft extends tt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}ft.prototype.isShaderMaterial=!0;class Eo extends Ne{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Eo.prototype.isCamera=!0;class dt extends Eo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}dt.prototype.isPerspectiveCamera=!0;const ei=90,ti=1;class Ro extends Ne{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new dt(ei,ti,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new A(1,0,0)),this.add(i);const s=new dt(ei,ti,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new A(-1,0,0)),this.add(s);const o=new dt(ei,ti,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new A(0,1,0)),this.add(o);const a=new dt(ei,ti,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new A(0,-1,0)),this.add(a);const l=new dt(ei,ti,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new A(0,0,1)),this.add(l);const c=new dt(ei,ti,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new A(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class cr extends nt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fs,super(e,t,n,i,s,o,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}cr.prototype.isCubeTexture=!0;class $l extends pt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new cr(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=ot,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ai(5,5,5),s=new ft({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:pn});s.uniforms.tEquirect.value=t;const o=new We(i,s),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=rt),new Ro(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}$l.prototype.isWebGLCubeRenderTarget=!0;const kr=new A,gd=new A,vd=new lt;class Jt{constructor(e=new A(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=kr.subVectors(n,t).cross(gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(kr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vd.getNormalMatrix(e),i=this.coplanarPoint(kr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Jt.prototype.isPlane=!0;const ni=new Un,Ps=new A;class ur{constructor(e=new Jt,t=new Jt,n=new Jt,i=new Jt,s=new Jt,o=new Jt){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],g=n[10],v=n[11],x=n[12],m=n[13],p=n[14],b=n[15];return t[0].setComponents(a-i,h-l,v-d,b-x).normalize(),t[1].setComponents(a+i,h+l,v+d,b+x).normalize(),t[2].setComponents(a+s,h+c,v+f,b+m).normalize(),t[3].setComponents(a-s,h-c,v-f,b-m).normalize(),t[4].setComponents(a-o,h-u,v-g,b-p).normalize(),t[5].setComponents(a+o,h+u,v+g,b+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ps.x=i.normal.x>0?e.max.x:e.min.x,Ps.y=i.normal.y>0?e.max.y:e.min.y,Ps.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ec(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function xd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,h,d),c.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(g=5121),{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,f=u.updateRange;r.bindBuffer(h,c),f.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Qt extends Pe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],v=[],x=[];for(let m=0;m<u;m++){const p=m*d-o;for(let b=0;b<c;b++){const _=b*h-s;g.push(_,-p,0),v.push(0,0,1),x.push(b/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<a;p++){const b=p+c*m,_=p+c*(m+1),M=p+1+c*(m+1),T=p+1+c*m;f.push(b,_,T),f.push(_,M,T)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(x,2))}static fromJSON(e){return new Qt(e.width,e.height,e.widthSegments,e.heightSegments)}}var yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd="vec3 transformed = vec3( position );",Id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,nf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rf=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,of=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,af=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ff=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bf=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Lf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,jf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,op=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ap=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,lp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,up=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,hp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,dp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:yd,alphamap_pars_fragment:_d,alphatest_fragment:bd,alphatest_pars_fragment:wd,aomap_fragment:Md,aomap_pars_fragment:Sd,begin_vertex:Cd,beginnormal_vertex:Id,bsdfs:Ad,bumpmap_pars_fragment:Td,clipping_planes_fragment:Ed,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Bd,color_fragment:Gd,color_pars_fragment:Fd,color_pars_vertex:Nd,color_vertex:Pd,common:Vd,cube_uv_reflection_fragment:Dd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Ud,displacementmap_vertex:zd,emissivemap_fragment:Wd,emissivemap_pars_fragment:kd,encodings_fragment:Od,encodings_pars_fragment:Zd,envmap_fragment:Xd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:Kd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:af,envmap_vertex:jd,fog_vertex:Qd,fog_pars_vertex:qd,fog_fragment:$d,fog_pars_fragment:ef,gradientmap_pars_fragment:tf,lightmap_fragment:nf,lightmap_pars_fragment:sf,lights_lambert_vertex:rf,lights_pars_begin:of,lights_toon_fragment:lf,lights_toon_pars_fragment:cf,lights_phong_fragment:uf,lights_phong_pars_fragment:hf,lights_physical_fragment:df,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:gf,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:xf,logdepthbuf_pars_vertex:yf,logdepthbuf_vertex:_f,map_fragment:bf,map_pars_fragment:wf,map_particle_fragment:Mf,map_particle_pars_fragment:Sf,metalnessmap_fragment:Cf,metalnessmap_pars_fragment:If,morphnormal_vertex:Af,morphtarget_pars_vertex:Tf,morphtarget_vertex:Ef,normal_fragment_begin:Rf,normal_fragment_maps:Lf,normal_pars_fragment:Bf,normal_pars_vertex:Gf,normal_vertex:Ff,normalmap_pars_fragment:Nf,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Df,output_fragment:Hf,packing:Uf,premultiplied_alpha_fragment:zf,project_vertex:Wf,dithering_fragment:kf,dithering_pars_fragment:Of,roughnessmap_fragment:Zf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:Kf,shadowmap_vertex:Jf,shadowmask_pars_fragment:jf,skinbase_vertex:Qf,skinning_pars_vertex:qf,skinning_vertex:$f,skinnormal_vertex:ep,specularmap_fragment:tp,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:op,uv_pars_fragment:ap,uv_pars_vertex:lp,uv_vertex:cp,uv2_pars_fragment:up,uv2_pars_vertex:hp,uv2_vertex:dp,worldpos_vertex:fp,background_vert:pp,background_frag:mp,cube_vert:gp,cube_frag:vp,depth_vert:xp,depth_frag:yp,distanceRGBA_vert:_p,distanceRGBA_frag:bp,equirect_vert:wp,equirect_frag:Mp,linedashed_vert:Sp,linedashed_frag:Cp,meshbasic_vert:Ip,meshbasic_frag:Ap,meshlambert_vert:Tp,meshlambert_frag:Ep,meshmatcap_vert:Rp,meshmatcap_frag:Lp,meshnormal_vert:Bp,meshnormal_frag:Gp,meshphong_vert:Fp,meshphong_frag:Np,meshphysical_vert:Pp,meshphysical_frag:Vp,meshtoon_vert:Dp,meshtoon_frag:Hp,points_vert:Up,points_frag:zp,shadow_vert:Wp,shadow_frag:kp,sprite_vert:Op,sprite_frag:Zp},se={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new lt},uv2Transform:{value:new lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}}},Nt={basic:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new re(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:ht([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:ht([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new re(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:ht([se.points,se.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:ht([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:ht([se.common,se.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:ht([se.sprite,se.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:ht([se.envmap,{opacity:{value:1}}]),vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:ht([se.common,se.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:ht([se.lights,se.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Nt.physical={uniforms:ht([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new K(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function Xp(r,e,t,n,i){const s=new re(0);let o=0,a,l,c=null,u=0,h=null;function d(g,v){let x=!1,m=v.isScene===!0?v.background:null;m&&m.isTexture&&(m=e.get(m));const p=r.xr,b=p.getSession&&p.getSession();b&&b.environmentBlendMode==="additive"&&(m=null),m===null?f(s,o):m&&m.isColor&&(f(m,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),m&&(m.isCubeTexture||m.mapping===ar)?(l===void 0&&(l=new We(new Ai(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:yi(Nt.cube.uniforms),vertexShader:Nt.cube.vertexShader,fragmentShader:Nt.cube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(c!==m||u!==m.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,c=m,u=m.version,h=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new We(new Qt(2,2),new ft({name:"BackgroundMaterial",uniforms:yi(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||u!==m.version||h!==r.toneMapping)&&(a.material.needsUpdate=!0,c=m,u=m.version,h=r.toneMapping),g.unshift(a,a.geometry,a.material,0,0,null))}function f(g,v){t.buffers.color.setClear(g.r,g.g,g.b,v,i)}return{getClearColor:function(){return s},setClearColor:function(g,v=1){s.set(g),o=v,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,f(s,o)},render:d}}function Yp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=v(null);let c=l;function u(N,I,G,B,R){let H=!1;if(o){const J=g(B,G,I);c!==J&&(c=J,d(c.object)),H=x(B,R),H&&m(B,R)}else{const J=I.wireframe===!0;(c.geometry!==B.id||c.program!==G.id||c.wireframe!==J)&&(c.geometry=B.id,c.program=G.id,c.wireframe=J,H=!0)}N.isInstancedMesh===!0&&(H=!0),R!==null&&t.update(R,34963),H&&(y(N,I,G,B),R!==null&&r.bindBuffer(34963,t.get(R).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function f(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,I,G){const B=G.wireframe===!0;let R=a[N.id];R===void 0&&(R={},a[N.id]=R);let H=R[I.id];H===void 0&&(H={},R[I.id]=H);let J=H[B];return J===void 0&&(J=v(h()),H[B]=J),J}function v(N){const I=[],G=[],B=[];for(let R=0;R<i;R++)I[R]=0,G[R]=0,B[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:B,object:N,attributes:{},index:null}}function x(N,I){const G=c.attributes,B=N.attributes;let R=0;for(const H in B){const J=G[H],oe=B[H];if(J===void 0||J.attribute!==oe||J.data!==oe.data)return!0;R++}return c.attributesNum!==R||c.index!==I}function m(N,I){const G={},B=N.attributes;let R=0;for(const H in B){const J=B[H],oe={};oe.attribute=J,J.data&&(oe.data=J.data),G[H]=oe,R++}c.attributes=G,c.attributesNum=R,c.index=I}function p(){const N=c.newAttributes;for(let I=0,G=N.length;I<G;I++)N[I]=0}function b(N){_(N,0)}function _(N,I){const G=c.newAttributes,B=c.enabledAttributes,R=c.attributeDivisors;G[N]=1,B[N]===0&&(r.enableVertexAttribArray(N),B[N]=1),R[N]!==I&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,I),R[N]=I)}function M(){const N=c.newAttributes,I=c.enabledAttributes;for(let G=0,B=I.length;G<B;G++)I[G]!==N[G]&&(r.disableVertexAttribArray(G),I[G]=0)}function T(N,I,G,B,R,H){n.isWebGL2===!0&&(G===5124||G===5125)?r.vertexAttribIPointer(N,I,G,R,H):r.vertexAttribPointer(N,I,G,B,R,H)}function y(N,I,G,B){if(n.isWebGL2===!1&&(N.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const R=B.attributes,H=G.getAttributes(),J=I.defaultAttributeValues;for(const oe in H){const ne=H[oe];if(ne.location>=0){let te=R[oe];if(te===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){const U=te.normalized,Q=te.itemSize,ce=t.get(te);if(ce===void 0)continue;const W=ce.buffer,xe=ce.type,Me=ce.bytesPerElement;if(te.isInterleavedBufferAttribute){const ue=te.data,fe=ue.stride,Ie=te.offset;if(ue&&ue.isInstancedInterleavedBuffer){for(let O=0;O<ne.locationSize;O++)_(ne.location+O,ue.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let O=0;O<ne.locationSize;O++)b(ne.location+O);r.bindBuffer(34962,W);for(let O=0;O<ne.locationSize;O++)T(ne.location+O,Q/ne.locationSize,xe,U,fe*Me,(Ie+Q/ne.locationSize*O)*Me)}else{if(te.isInstancedBufferAttribute){for(let ue=0;ue<ne.locationSize;ue++)_(ne.location+ue,te.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ue=0;ue<ne.locationSize;ue++)b(ne.location+ue);r.bindBuffer(34962,W);for(let ue=0;ue<ne.locationSize;ue++)T(ne.location+ue,Q/ne.locationSize,xe,U,Q*Me,Q/ne.locationSize*ue*Me)}}else if(J!==void 0){const U=J[oe];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(ne.location,U);break;case 3:r.vertexAttrib3fv(ne.location,U);break;case 4:r.vertexAttrib4fv(ne.location,U);break;default:r.vertexAttrib1fv(ne.location,U)}}}}M()}function F(){E();for(const N in a){const I=a[N];for(const G in I){const B=I[G];for(const R in B)f(B[R].object),delete B[R];delete I[G]}delete a[N]}}function Z(N){if(a[N.id]===void 0)return;const I=a[N.id];for(const G in I){const B=I[G];for(const R in B)f(B[R].object),delete B[R];delete I[G]}delete a[N.id]}function V(N){for(const I in a){const G=a[I];if(G[N.id]===void 0)continue;const B=G[N.id];for(const R in B)f(B[R].object),delete B[R];delete G[N.id]}}function E(){ee(),c!==l&&(c=l,d(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:E,resetDefaultState:ee,dispose:F,releaseStatesOfGeometry:Z,releaseStatesOfProgram:V,initAttributes:p,enableAttribute:b,disableUnusedAttributes:M}}function Kp(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Jp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),f=r.getParameter(3379),g=r.getParameter(34076),v=r.getParameter(34921),x=r.getParameter(36347),m=r.getParameter(36348),p=r.getParameter(36349),b=d>0,_=o||e.has("OES_texture_float"),M=b&&_,T=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:m,maxFragmentUniforms:p,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:T}}function jp(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Jt,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,f,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!x)s?u(null):c();else{const p=s?0:n,b=p*4;let _=m.clippingState||null;l.value=_,_=u(g,d,b,f);for(let M=0;M!==b;++M)_[M]=t[M];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const m=f+v*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(x===null||x.length<m)&&(x=new Float32Array(m));for(let b=0,_=f;b!==v;++b,_+=4)o.copy(h[b]).applyMatrix4(p,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function Qp(r){let e=new WeakMap;function t(o,a){return a===lo?o.mapping=fs:a===co&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===lo||a===co)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=r.getRenderTarget(),u=new $l(l.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),r.setRenderTarget(c),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wn extends Eo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}wn.prototype.isOrthographicCamera=!0;class hr extends ft{constructor(e){super(e),this.type="RawShaderMaterial"}}hr.prototype.isRawShaderMaterial=!0;const mi=4,mn=8,Ft=Math.pow(2,mn),tc=[.125,.215,.35,.446,.526,.582],nc=mn-mi+1+tc.length,ii=20,_n={[mt]:0,[xt]:1,[Ao]:2,[kl]:3,[Ol]:4,[Zl]:5,[Io]:6},Or=new wn,{_lodPlanes:Ui,_sizeLods:Aa,_sigmas:Vs}=em(),Ta=new re;let Zr=null;const Bn=(1+Math.sqrt(5))/2,si=1/Bn,Ea=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Bn,si),new A(0,Bn,-si),new A(si,0,Bn),new A(-si,0,Bn),new A(Bn,si,0),new A(-Bn,si,0)];class qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=tm(ii),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zr=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Ba(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=La(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Ui.length;e++)Ui[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Zr),e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e){Zr=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:yn,format:Xu,encoding:$p(e)?e.encoding:Ao,depthBuffer:!1},n=Ra(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Ra(t),n}_compileMaterial(e){const t=new We(Ui[0],e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,n,i){const a=new dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.outputEncoding,f=u.toneMapping;u.getClearColor(Ta),u.toneMapping=Fn,u.outputEncoding=mt,u.autoClear=!1;const g=new st({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),v=new We(new Ai,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(Ta),x=!0);for(let p=0;p<6;p++){const b=p%3;b==0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b==1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p])),Ds(i,b*Ft,p>2?Ft:0,Ft,Ft),u.setRenderTarget(i),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.outputEncoding=d,u.autoClear=h,e.background=m}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===ot&&t.type===yn&&t.encoding===xt?e.value=_n[mt]:e.value=_n[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fs||e.mapping===ps;i?this._cubemapShader==null&&(this._cubemapShader=Ba()):this._equirectShader==null&&(this._equirectShader=La());const s=i?this._cubemapShader:this._equirectShader,o=new We(Ui[0],s),a=s.uniforms;a.envMap.value=e,i||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),this._setEncoding(a.outputEncoding,t.texture),Ds(t,0,0,3*Ft,2*Ft),n.setRenderTarget(t),n.render(o,Or)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<nc;i++){const s=Math.sqrt(Vs[i]*Vs[i]-Vs[i-1]*Vs[i-1]),o=Ea[(i-1)%Ea.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new We(Ui[i],c),d=c.uniforms,f=Aa[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ii-1),v=s/g,x=isFinite(s)?1+Math.floor(u*v):ii;x>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ii}`);const m=[];let p=0;for(let T=0;T<ii;++T){const y=T/v,F=Math.exp(-y*y/2);m.push(F),T==0?p+=F:T<x&&(p+=2*F)}for(let T=0;T<m.length;T++)m[T]=m[T]/p;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=g,d.mipInt.value=mn-n,this._setEncoding(d.inputEncoding,e.texture),this._setEncoding(d.outputEncoding,e.texture);const b=Aa[i],_=3*Math.max(0,Ft-2*b),M=(i===0?0:2*Ft)+2*b*(i>mn-mi?i-mn+mi:0);Ds(t,_,M,3*b,2*b),l.setRenderTarget(t),l.render(h,Or)}}function $p(r){return r===void 0||r.type!==yn?!1:r.encoding===mt||r.encoding===xt||r.encoding===Io}function em(){const r=[],e=[],t=[];let n=mn;for(let i=0;i<nc;i++){const s=Math.pow(2,n);e.push(s);let o=1/s;i>mn-mi?o=tc[i-mn+mi-1]:i==0&&(o=0),t.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,g=2,v=1,x=new Float32Array(f*d*h),m=new Float32Array(g*d*h),p=new Float32Array(v*d*h);for(let _=0;_<h;_++){const M=_%3*2/3-1,T=_>2?0:-1,y=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];x.set(y,f*d*_),m.set(u,g*d*_);const F=[_,_,_,_,_,_];p.set(F,v*d*_)}const b=new Pe;b.setAttribute("position",new Je(x,f)),b.setAttribute("uv",new Je(m,g)),b.setAttribute("faceIndex",new Je(p,v)),r.push(b),n>mi&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function Ra(r){const e=new pt(3*Ft,3*Ft,r);return e.texture.mapping=ar,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Ds(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function tm(r){const e=new Float32Array(r),t=new A(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:_n[mt]},outputEncoding:{value:_n[mt]}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Bo()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function La(){const r=new K(1,1);return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:_n[mt]},outputEncoding:{value:_n[mt]}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Bo()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ba(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:_n[mt]},outputEncoding:{value:_n[mt]}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Bo()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bo(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function nm(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===lo||l===co,u=l===fs||l===ps;if(c||u){if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){const d=r.getRenderTarget();t===null&&(t=new qp(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),r.setRenderTarget(d),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function im(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sm(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let x=0,m=v.length;x<m;x++)e.update(v[x],34962)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const p=f.array;v=f.version;for(let b=0,_=p.length;b<_;b+=3){const M=p[b+0],T=p[b+1],y=p[b+2];d.push(M,T,T,y,y,M)}}else{const p=g.array;v=g.version;for(let b=0,_=p.length/3-1;b<_;b+=3){const M=b+0,T=b+1,y=b+2;d.push(M,T,T,y,y,M)}}const x=new(Kl(d)>65535?ql:Ql)(d,1);x.version=v;const m=s.get(h);m&&e.remove(m),s.set(h,x)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rm(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,f){r.drawElements(s,f,a,d*l),t.update(f,s,1)}function h(d,f,g){if(g===0)return;let v,x;if(i)v=r,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,f,a,d*l,g),t.update(f,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function om(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class Go extends nt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Go.prototype.isDataTexture2DArray=!0;function am(r,e){return r[0]-e[0]}function lm(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Ga(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function cm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new A,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let v=s.get(u);if(v===void 0||v.count!==g){v!==void 0&&v.texture.dispose();const p=u.morphAttributes.normal!==void 0,b=u.morphAttributes.position,_=u.morphAttributes.normal||[],M=u.attributes.position.count,T=p===!0?2:1;let y=M*T,F=1;y>e.maxTextureSize&&(F=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const Z=new Float32Array(y*F*4*g),V=new Go(Z,y,F,g);V.format=ot,V.type=jt;const E=T*4;for(let ee=0;ee<g;ee++){const N=b[ee],I=_[ee],G=y*F*4*ee;for(let B=0;B<N.count;B++){o.fromBufferAttribute(N,B),N.normalized===!0&&Ga(o,N);const R=B*E;Z[G+R+0]=o.x,Z[G+R+1]=o.y,Z[G+R+2]=o.z,Z[G+R+3]=0,p===!0&&(o.fromBufferAttribute(I,B),I.normalized===!0&&Ga(o,I),Z[G+R+4]=o.x,Z[G+R+5]=o.y,Z[G+R+6]=o.z,Z[G+R+7]=0)}}v={count:g,texture:V,size:new K(y,F)},s.set(u,v)}let x=0;for(let p=0;p<f.length;p++)x+=f[p];const m=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",m),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const g=f===void 0?0:f.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let _=0;_<g;_++)v[_]=[_,0];n[u.id]=v}for(let _=0;_<g;_++){const M=v[_];M[0]=_,M[1]=f[_]}v.sort(lm);for(let _=0;_<8;_++)_<g&&v[_][1]?(a[_][0]=v[_][0],a[_][1]=v[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(am);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const M=a[_],T=M[0],y=M[1];T!==Number.MAX_SAFE_INTEGER&&y?(x&&u.getAttribute("morphTarget"+_)!==x[T]&&u.setAttribute("morphTarget"+_,x[T]),m&&u.getAttribute("morphNormal"+_)!==m[T]&&u.setAttribute("morphNormal"+_,m[T]),i[_]=y,p+=y):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const b=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function um(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ic extends nt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ic.prototype.isDataTexture3D=!0;const sc=new nt,hm=new Go,dm=new ic,rc=new cr,Fa=[],Na=[],Pa=new Float32Array(16),Va=new Float32Array(9),Da=new Float32Array(4);function Ti(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Fa[i];if(s===void 0&&(s=new Float32Array(i),Fa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function oc(r,e){let t=Na[e];t===void 0&&(t=new Int32Array(e),Na[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),gt(t,e)}}function mm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),gt(t,e)}}function gm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),gt(t,e)}}function vm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(yt(t,n))return;Da.set(n),r.uniformMatrix2fv(this.addr,!1,Da),gt(t,n)}}function xm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(yt(t,n))return;Va.set(n),r.uniformMatrix3fv(this.addr,!1,Va),gt(t,n)}}function ym(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(yt(t,n))return;Pa.set(n),r.uniformMatrix4fv(this.addr,!1,Pa),gt(t,n)}}function _m(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bm(r,e){const t=this.cache;yt(t,e)||(r.uniform2iv(this.addr,e),gt(t,e))}function wm(r,e){const t=this.cache;yt(t,e)||(r.uniform3iv(this.addr,e),gt(t,e))}function Mm(r,e){const t=this.cache;yt(t,e)||(r.uniform4iv(this.addr,e),gt(t,e))}function Sm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Cm(r,e){const t=this.cache;yt(t,e)||(r.uniform2uiv(this.addr,e),gt(t,e))}function Im(r,e){const t=this.cache;yt(t,e)||(r.uniform3uiv(this.addr,e),gt(t,e))}function Am(r,e){const t=this.cache;yt(t,e)||(r.uniform4uiv(this.addr,e),gt(t,e))}function Tm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||sc,i)}function Em(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dm,i)}function Rm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||rc,i)}function Lm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hm,i)}function Bm(r){switch(r){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return vm;case 35675:return xm;case 35676:return ym;case 5124:case 35670:return _m;case 35667:case 35671:return bm;case 35668:case 35672:return wm;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return Cm;case 36295:return Im;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Gm(r,e){r.uniform1fv(this.addr,e)}function Fm(r,e){const t=Ti(e,this.size,2);r.uniform2fv(this.addr,t)}function Nm(r,e){const t=Ti(e,this.size,3);r.uniform3fv(this.addr,t)}function Pm(r,e){const t=Ti(e,this.size,4);r.uniform4fv(this.addr,t)}function Vm(r,e){const t=Ti(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Dm(r,e){const t=Ti(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Hm(r,e){const t=Ti(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Um(r,e){r.uniform1iv(this.addr,e)}function zm(r,e){r.uniform2iv(this.addr,e)}function Wm(r,e){r.uniform3iv(this.addr,e)}function km(r,e){r.uniform4iv(this.addr,e)}function Om(r,e){r.uniform1uiv(this.addr,e)}function Zm(r,e){r.uniform2uiv(this.addr,e)}function Xm(r,e){r.uniform3uiv(this.addr,e)}function Ym(r,e){r.uniform4uiv(this.addr,e)}function Km(r,e,t){const n=e.length,i=oc(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||sc,i[s])}function Jm(r,e,t){const n=e.length,i=oc(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||rc,i[s])}function jm(r){switch(r){case 5126:return Gm;case 35664:return Fm;case 35665:return Nm;case 35666:return Pm;case 35674:return Vm;case 35675:return Dm;case 35676:return Hm;case 5124:case 35670:return Um;case 35667:case 35671:return zm;case 35668:case 35672:return Wm;case 35669:case 35673:return km;case 5125:return Om;case 36294:return Zm;case 36295:return Xm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35680:case 36300:case 36308:case 36293:return Jm}}function Qm(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Bm(e.type)}function ac(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=jm(e.type)}ac.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),gt(e,r)};function lc(r){this.id=r,this.seq=[],this.map={}}lc.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(r,e[o.id],t)}};const Xr=/(\w+)(\])?(\[|\.)?/g;function Ha(r,e){r.seq.push(e),r.map[e.id]=e}function qm(r,e,t){const n=r.name,i=n.length;for(Xr.lastIndex=0;;){const s=Xr.exec(n),o=Xr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ha(t,c===void 0?new Qm(a,r,e):new ac(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new lc(a),Ha(t,h)),t=h}}}function gn(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);qm(i,s,this)}}gn.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};gn.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};gn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};gn.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function Ua(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let $m=0;function eg(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function cc(r){switch(r){case mt:return["Linear","( value )"];case xt:return["sRGB","( value )"];case Ao:return["RGBE","( value )"];case kl:return["RGBM","( value, 7.0 )"];case Ol:return["RGBM","( value, 16.0 )"];case Zl:return["RGBD","( value, 256.0 )"];case Io:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Fh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function za(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+eg(r.getShaderSource(e))}function Rn(r,e){const t=cc(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function tg(r,e){const t=cc(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ng(r,e){let t;switch(e){case Bu:t="Linear";break;case Gu:t="Reinhard";break;case Fu:t="OptimizedCineon";break;case Nu:t="ACESFilmic";break;case Pu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ig(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ji).join(`
`)}function sg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rg(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ji(r){return r!==""}function Wa(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ka(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const og=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(r){return r.replace(og,ag)}function ag(r,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return po(t)}const lg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oa(r){return r.replace(cg,uc).replace(lg,ug)}function ug(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),uc(r,e,t,n)}function uc(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Za(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function dg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fs:case ps:e="ENVMAP_TYPE_CUBE";break;case ar:case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ps:case So:e="ENVMAP_MODE_REFRACTION";break}return e}function pg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case or:e="ENVMAP_BLENDING_MULTIPLY";break;case Ru:e="ENVMAP_BLENDING_MIX";break;case Lu:e="ENVMAP_BLENDING_ADD";break}return e}function mg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=hg(t),c=dg(t),u=fg(t),h=pg(t),d=r.gammaFactor>0?r.gammaFactor:1,f=t.isWebGL2?"":ig(t),g=sg(s),v=i.createProgram();let x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[g].filter(Ji).join(`
`),x.length>0&&(x+=`
`),m=[f,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`)):(x=[Za(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),m=[f,Za(t),"#define SHADER_NAME "+t.shaderName,g,"#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Te.tonemapping_pars_fragment:"",t.toneMapping!==Fn?ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===qt?"#define OPAQUE":"",Te.encodings_pars_fragment,t.map?Rn("mapTexelToLinear",t.mapEncoding):"",t.matcap?Rn("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Rn("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Rn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?Rn("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?Rn("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?Rn("lightMapTexelToLinear",t.lightMapEncoding):"",tg("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),o=po(o),o=Wa(o,t),o=ka(o,t),a=po(a),a=Wa(a,t),a=ka(a,t),o=Oa(o),a=Oa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===pa?"":"out highp vec4 pc_fragColor;",t.glslVersion===pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=p+x+o,_=p+m+a,M=Ua(i,35633,b),T=Ua(i,35632,_);if(i.attachShader(v,M),i.attachShader(v,T),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){const Z=i.getProgramInfoLog(v).trim(),V=i.getShaderInfoLog(M).trim(),E=i.getShaderInfoLog(T).trim();let ee=!0,N=!0;if(i.getProgramParameter(v,35714)===!1){ee=!1;const I=za(i,M,"vertex"),G=za(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+Z+`
`+I+`
`+G)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(V===""||E==="")&&(N=!1);N&&(this.diagnostics={runnable:ee,programLog:Z,vertexShader:{log:V,prefix:x},fragmentShader:{log:E,prefix:m}})}i.deleteShader(M),i.deleteShader(T);let y;this.getUniforms=function(){return y===void 0&&(y=new gn(i,v)),y};let F;return this.getAttributes=function(){return F===void 0&&(F=rg(i,v)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=$m++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=T,this}function gg(r,e,t,n,i,s,o){const a=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.floatVertexTextures,h=i.maxVertexUniforms,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function x(y){const Z=y.skeleton.bones;if(u)return 1024;{const E=Math.floor((h-20)/4),ee=Math.min(E,Z.length);return ee<Z.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+Z.length+" bones. This GPU supports "+ee+"."),0):ee}}function m(y){let F;return y&&y.isTexture?F=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),F=y.texture.encoding):F=mt,l&&y&&y.isTexture&&y.format===ot&&y.type===yn&&y.encoding===xt&&(F=mt),F}function p(y,F,Z,V,E){const ee=V.fog,N=y.isMeshStandardMaterial?V.environment:null,I=(y.isMeshStandardMaterial?t:e).get(y.envMap||N),G=g[y.type],B=E.isSkinnedMesh?x(E):0;y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let R,H;if(G){const U=Nt[G];R=U.vertexShader,H=U.fragmentShader}else R=y.vertexShader,H=y.fragmentShader;const J=r.getRenderTarget(),oe=y.alphaTest>0,ne=y.clearcoat>0;return{isWebGL2:l,shaderID:G,shaderName:y.type,vertexShader:R,fragmentShader:H,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:E.isInstancedMesh===!0,instancingColor:E.isInstancedMesh===!0&&E.instanceColor!==null,supportsVertexTextures:d,outputEncoding:J!==null?m(J.texture):r.outputEncoding,map:!!y.map,mapEncoding:m(y.map),matcap:!!y.matcap,matcapEncoding:m(y.matcap),envMap:!!I,envMapMode:I&&I.mapping,envMapEncoding:m(I),envMapCubeUV:!!I&&(I.mapping===ar||I.mapping===So),lightMap:!!y.lightMap,lightMapEncoding:m(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:m(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Vh,tangentSpaceNormalMap:y.normalMapType===Dn,clearcoat:ne,clearcoatMap:ne&&!!y.clearcoatMap,clearcoatRoughnessMap:ne&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ne&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,specularColorMapEncoding:m(y.specularColorMap),alphaMap:!!y.alphaMap,alphaTest:oe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenColorMapEncoding:m(y.sheenColorMap),sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!E.geometry&&!!E.geometry.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!E.geometry&&!!E.geometry.attributes.color&&E.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||!!y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!ee,useFog:y.fog,fogExp2:ee&&ee.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:c,skinning:E.isSkinnedMesh===!0&&B>0,maxBones:B,useVertexTexture:u,morphTargets:!!E.geometry&&!!E.geometry.morphAttributes.position,morphNormals:!!E.geometry&&!!E.geometry.morphAttributes.normal,morphTargetsCount:E.geometry&&E.geometry.morphAttributes.position?E.geometry.morphAttributes.position.length:0,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:y.format,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&Z.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:Fn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Nn,flipSided:y.side===$e,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function b(y){const F=[];if(y.shaderID?F.push(y.shaderID):(F.push(ma(y.fragmentShader)),F.push(ma(y.vertexShader))),y.defines!==void 0)for(const Z in y.defines)F.push(Z),F.push(y.defines[Z]);if(y.isRawShaderMaterial===!1){for(let Z=0;Z<v.length;Z++)F.push(y[v[Z]]);F.push(r.outputEncoding),F.push(r.gammaFactor)}return F.push(y.customProgramCacheKey),F.join()}function _(y){const F=g[y.type];let Z;if(F){const V=Nt[F];Z=nr.clone(V.uniforms)}else Z=y.uniforms;return Z}function M(y,F){let Z;for(let V=0,E=a.length;V<E;V++){const ee=a[V];if(ee.cacheKey===F){Z=ee,++Z.usedTimes;break}}return Z===void 0&&(Z=new mg(r,F,y,s),a.push(Z)),Z}function T(y){if(--y.usedTimes===0){const F=a.indexOf(y);a[F]=a[a.length-1],a.pop(),y.destroy()}}return{getParameters:p,getProgramCacheKey:b,getUniforms:_,acquireProgram:M,releaseProgram:T,programs:a}}function vg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function xg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ya(r){const e=[];let t=0;const n=[],i=[],s=[],o={id:-1};function a(){t=0,n.length=0,i.length=0,s.length=0}function l(f,g,v,x,m,p){let b=e[t];const _=r.get(v);return b===void 0?(b={id:f.id,object:f,geometry:g,material:v,program:_.program||o,groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},e[t]=b):(b.id=f.id,b.object=f,b.geometry=g,b.material=v,b.program=_.program||o,b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=m,b.group=p),t++,b}function c(f,g,v,x,m,p){const b=l(f,g,v,x,m,p);v.transmission>0?i.push(b):v.transparent===!0?s.push(b):n.push(b)}function u(f,g,v,x,m,p){const b=l(f,g,v,x,m,p);v.transmission>0?i.unshift(b):v.transparent===!0?s.unshift(b):n.unshift(b)}function h(f,g){n.length>1&&n.sort(f||xg),i.length>1&&i.sort(g||Xa),s.length>1&&s.sort(g||Xa)}function d(){for(let f=t,g=e.length;f<g;f++){const v=e[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:c,unshift:u,finish:d,sort:h}}function yg(r){let e=new WeakMap;function t(i,s){let o;return e.has(i)===!1?(o=new Ya(r),e.set(i,[o])):s>=e.get(i).length?(o=new Ya(r),e.get(i).push(o)):o=e.get(i)[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function _g(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new re};break;case"SpotLight":t={position:new A,direction:new A,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new A,halfWidth:new A,halfHeight:new A};break}return r[e.id]=t,t}}}function bg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let wg=0;function Mg(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Sg(r,e){const t=new _g,n=bg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new A);const s=new A,o=new pe,a=new pe;function l(u,h){let d=0,f=0,g=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let v=0,x=0,m=0,p=0,b=0,_=0,M=0,T=0;u.sort(Mg);const y=h!==!0?Math.PI:1;for(let Z=0,V=u.length;Z<V;Z++){const E=u[Z],ee=E.color,N=E.intensity,I=E.distance,G=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=ee.r*N*y,f+=ee.g*N*y,g+=ee.b*N*y;else if(E.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(E.sh.coefficients[B],N);else if(E.isDirectionalLight){const B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity*y),E.castShadow){const R=E.shadow,H=n.get(E);H.shadowBias=R.bias,H.shadowNormalBias=R.normalBias,H.shadowRadius=R.radius,H.shadowMapSize=R.mapSize,i.directionalShadow[v]=H,i.directionalShadowMap[v]=G,i.directionalShadowMatrix[v]=E.shadow.matrix,_++}i.directional[v]=B,v++}else if(E.isSpotLight){const B=t.get(E);if(B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(ee).multiplyScalar(N*y),B.distance=I,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,E.castShadow){const R=E.shadow,H=n.get(E);H.shadowBias=R.bias,H.shadowNormalBias=R.normalBias,H.shadowRadius=R.radius,H.shadowMapSize=R.mapSize,i.spotShadow[m]=H,i.spotShadowMap[m]=G,i.spotShadowMatrix[m]=E.shadow.matrix,T++}i.spot[m]=B,m++}else if(E.isRectAreaLight){const B=t.get(E);B.color.copy(ee).multiplyScalar(N),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=B,p++}else if(E.isPointLight){const B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity*y),B.distance=E.distance,B.decay=E.decay,E.castShadow){const R=E.shadow,H=n.get(E);H.shadowBias=R.bias,H.shadowNormalBias=R.normalBias,H.shadowRadius=R.radius,H.shadowMapSize=R.mapSize,H.shadowCameraNear=R.camera.near,H.shadowCameraFar=R.camera.far,i.pointShadow[x]=H,i.pointShadowMap[x]=G,i.pointShadowMatrix[x]=E.shadow.matrix,M++}i.point[x]=B,x++}else if(E.isHemisphereLight){const B=t.get(E);B.skyColor.copy(E.color).multiplyScalar(N*y),B.groundColor.copy(E.groundColor).multiplyScalar(N*y),i.hemi[b]=B,b++}}p>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==v||F.pointLength!==x||F.spotLength!==m||F.rectAreaLength!==p||F.hemiLength!==b||F.numDirectionalShadows!==_||F.numPointShadows!==M||F.numSpotShadows!==T)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=p,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=T,F.directionalLength=v,F.pointLength=x,F.spotLength=m,F.rectAreaLength=p,F.hemiLength=b,F.numDirectionalShadows=_,F.numPointShadows=M,F.numSpotShadows=T,i.version=wg++)}function c(u,h){let d=0,f=0,g=0,v=0,x=0;const m=h.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const _=u[p];if(_.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(_.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),M.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function Ka(r,e){const t=new Sg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Cg(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Ka(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new Ka(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class hc extends tt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}hc.prototype.isMeshDepthMaterial=!0;class dc extends tt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}dc.prototype.isMeshDistanceMaterial=!0;const Ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fc(r,e,t){let n=new ur;const i=new K,s=new K,o=new He,a=new hc({depthPacking:Ph}),l=new dc,c={},u=t.maxTextureSize,h={0:$e,1:gi,2:Nn},d=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Ig,fragmentShader:Ag}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new We(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl,this.render=function(_,M,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||_.length===0)return;const y=r.getRenderTarget(),F=r.getActiveCubeFace(),Z=r.getActiveMipmapLevel(),V=r.state;V.setBlending(pn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);for(let E=0,ee=_.length;E<ee;E++){const N=_[E],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const G=I.getFrameExtents();if(i.multiply(G),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/G.x),i.x=s.x*G.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/G.y),i.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null&&!I.isPointLightShadow&&this.type===Ki){const R={minFilter:rt,magFilter:rt,format:ot};I.map=new pt(i.x,i.y,R),I.map.texture.name=N.name+".shadowMap",I.mapPass=new pt(i.x,i.y,R),I.camera.updateProjectionMatrix()}if(I.map===null){const R={minFilter:qe,magFilter:qe,format:ot};I.map=new pt(i.x,i.y,R),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const B=I.getViewportCount();for(let R=0;R<B;R++){const H=I.getViewport(R);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),V.viewport(o),I.updateMatrices(N,R),n=I.getFrustum(),b(M,T,I.camera,N,this.type)}!I.isPointLightShadow&&this.type===Ki&&m(I,T),I.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(y,F,Z)};function m(_,M){const T=e.update(v);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(M,null,T,d,v,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(M,null,T,f,v,null)}function p(_,M,T,y,F,Z,V){let E=null;const ee=y.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(ee!==void 0?E=ee:E=y.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const N=E.uuid,I=T.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let B=G[I];B===void 0&&(B=E.clone(),G[I]=B),E=B}return E.visible=T.visible,E.wireframe=T.wireframe,V===Ki?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:h[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0&&(E.referencePosition.setFromMatrixPosition(y.matrixWorld),E.nearDistance=F,E.farDistance=Z),E}function b(_,M,T,y,F){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&F===Ki)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,_.matrixWorld);const E=e.update(_),ee=_.material;if(Array.isArray(ee)){const N=E.groups;for(let I=0,G=N.length;I<G;I++){const B=N[I],R=ee[B.materialIndex];if(R&&R.visible){const H=p(_,E,R,y,T.near,T.far,F);r.renderBufferDirect(T,null,E,H,_,B)}}}else if(ee.visible){const N=p(_,E,ee,y,T.near,T.far,F);r.renderBufferDirect(T,null,E,N,_,null)}}const V=_.children;for(let E=0,ee=V.length;E<ee;E++)b(V[E],M,T,y,F)}}function Tg(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const le=new He;let Y=null;const ve=new He(0,0,0,0);return{setMask:function(de){Y!==de&&!L&&(r.colorMask(de,de,de,de),Y=de)},setLocked:function(de){L=de},setClear:function(de,Ee,ct,ut,tn){tn===!0&&(de*=ut,Ee*=ut,ct*=ut),le.set(de,Ee,ct,ut),ve.equals(le)===!1&&(r.clearColor(de,Ee,ct,ut),ve.copy(le))},reset:function(){L=!1,Y=null,ve.set(-1,0,0,0)}}}function s(){let L=!1,le=null,Y=null,ve=null;return{setTest:function(de){de?Q(2929):ce(2929)},setMask:function(de){le!==de&&!L&&(r.depthMask(de),le=de)},setFunc:function(de){if(Y!==de){if(de)switch(de){case Mu:r.depthFunc(512);break;case Su:r.depthFunc(519);break;case Cu:r.depthFunc(513);break;case ao:r.depthFunc(515);break;case Iu:r.depthFunc(514);break;case Au:r.depthFunc(518);break;case Tu:r.depthFunc(516);break;case Eu:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);Y=de}},setLocked:function(de){L=de},setClear:function(de){ve!==de&&(r.clearDepth(de),ve=de)},reset:function(){L=!1,le=null,Y=null,ve=null}}}function o(){let L=!1,le=null,Y=null,ve=null,de=null,Ee=null,ct=null,ut=null,tn=null;return{setTest:function(je){L||(je?Q(2960):ce(2960))},setMask:function(je){le!==je&&!L&&(r.stencilMask(je),le=je)},setFunc:function(je,Ut,Et){(Y!==je||ve!==Ut||de!==Et)&&(r.stencilFunc(je,Ut,Et),Y=je,ve=Ut,de=Et)},setOp:function(je,Ut,Et){(Ee!==je||ct!==Ut||ut!==Et)&&(r.stencilOp(je,Ut,Et),Ee=je,ct=Ut,ut=Et)},setLocked:function(je){L=je},setClear:function(je){tn!==je&&(r.clearStencil(je),tn=je)},reset:function(){L=!1,le=null,Y=null,ve=null,de=null,Ee=null,ct=null,ut=null,tn=null}}}const a=new i,l=new s,c=new o;let u={},h=null,d={},f=null,g=!1,v=null,x=null,m=null,p=null,b=null,_=null,M=null,T=!1,y=null,F=null,Z=null,V=null,E=null;const ee=r.getParameter(35661);let N=!1,I=0;const G=r.getParameter(7938);G.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=I>=1):G.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=I>=2);let B=null,R={};const H=r.getParameter(3088),J=r.getParameter(2978),oe=new He().fromArray(H),ne=new He().fromArray(J);function te(L,le,Y){const ve=new Uint8Array(4),de=r.createTexture();r.bindTexture(L,de),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let Ee=0;Ee<Y;Ee++)r.texImage2D(le+Ee,0,6408,1,1,0,6408,5121,ve);return de}const U={};U[3553]=te(3553,3553,1),U[34067]=te(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(2929),l.setFunc(ao),j(!1),ie($o),Q(2884),Ie(pn);function Q(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function ce(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function W(L){L!==h&&(r.bindFramebuffer(36160,L),h=L)}function xe(L,le){return le===null&&h!==null&&(le=h),d[L]!==le?(r.bindFramebuffer(L,le),d[L]=le,n&&(L===36009&&(d[36160]=le),L===36160&&(d[36009]=le)),!0):!1}function Me(L){return f!==L?(r.useProgram(L),f=L,!0):!1}const ue={[ci]:32774,[du]:32778,[fu]:32779};if(n)ue[na]=32775,ue[ia]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(ue[na]=L.MIN_EXT,ue[ia]=L.MAX_EXT)}const fe={[pu]:0,[mu]:1,[gu]:768,[Vl]:770,[wu]:776,[_u]:774,[xu]:772,[vu]:769,[Dl]:771,[bu]:775,[yu]:773};function Ie(L,le,Y,ve,de,Ee,ct,ut){if(L===pn){g===!0&&(ce(3042),g=!1);return}if(g===!1&&(Q(3042),g=!0),L!==hu){if(L!==v||ut!==T){if((x!==ci||b!==ci)&&(r.blendEquation(32774),x=ci,b=ci),ut)switch(L){case ji:r.blendFuncSeparate(1,771,1,771);break;case oo:r.blendFunc(1,1);break;case ea:r.blendFuncSeparate(0,0,769,771);break;case ta:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ji:r.blendFuncSeparate(770,771,1,771);break;case oo:r.blendFunc(770,1);break;case ea:r.blendFunc(0,769);break;case ta:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,p=null,_=null,M=null,v=L,T=ut}return}de=de||le,Ee=Ee||Y,ct=ct||ve,(le!==x||de!==b)&&(r.blendEquationSeparate(ue[le],ue[de]),x=le,b=de),(Y!==m||ve!==p||Ee!==_||ct!==M)&&(r.blendFuncSeparate(fe[Y],fe[ve],fe[Ee],fe[ct]),m=Y,p=ve,_=Ee,M=ct),v=L,T=null}function O(L,le){L.side===Nn?ce(2884):Q(2884);let Y=L.side===$e;le&&(Y=!Y),j(Y),L.blending===ji&&L.transparent===!1?Ie(pn):Ie(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ve=L.stencilWrite;c.setTest(ve),ve&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(32926):ce(32926)}function j(L){y!==L&&(L?r.frontFace(2304):r.frontFace(2305),y=L)}function ie(L){L!==lu?(Q(2884),L!==F&&(L===$o?r.cullFace(1029):L===cu?r.cullFace(1028):r.cullFace(1032))):ce(2884),F=L}function me(L){L!==Z&&(N&&r.lineWidth(L),Z=L)}function ae(L,le,Y){L?(Q(32823),(V!==le||E!==Y)&&(r.polygonOffset(le,Y),V=le,E=Y)):ce(32823)}function C(L){L?Q(3089):ce(3089)}function w(L){L===void 0&&(L=33984+ee-1),B!==L&&(r.activeTexture(L),B=L)}function k(L,le){B===null&&w();let Y=R[B];Y===void 0&&(Y={type:void 0,texture:void 0},R[B]=Y),(Y.type!==L||Y.texture!==le)&&(r.bindTexture(L,le||U[L]),Y.type=L,Y.texture=le)}function q(){const L=R[B];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(L){oe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Se(L){ne.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function ge(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},B=null,R={},h=null,d={},f=null,g=!1,v=null,x=null,m=null,p=null,b=null,_=null,M=null,T=!1,y=null,F=null,Z=null,V=null,E=null,oe.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Q,disable:ce,bindFramebuffer:xe,bindXRFramebuffer:W,useProgram:Me,setBlending:Ie,setMaterial:O,setFlipSided:j,setCullFace:ie,setLineWidth:me,setPolygonOffset:ae,setScissorTest:C,activeTexture:w,bindTexture:k,unbindTexture:q,compressedTexImage2D:$,texImage2D:he,texImage3D:be,scissor:ye,viewport:Se,reset:ge}}function Eg(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=new WeakMap;let f,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return g?new OffscreenCanvas(C,w):lr("canvas")}function x(C,w,k,q){let $=1;if((C.width>q||C.height>q)&&($=q/Math.max(C.width,C.height)),$<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const he=w?Yl:Math.floor,be=he($*C.width),ye=he($*C.height);f===void 0&&(f=v(be,ye));const Se=k?v(be,ye):f;return Se.width=be,Se.height=ye,Se.getContext("2d").drawImage(C,0,0,be,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+ye+")."),Se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return fo(C.width)&&fo(C.height)}function p(C){return a?!1:C.wrapS!==bt||C.wrapT!==bt||C.minFilter!==qe&&C.minFilter!==rt}function b(C,w){return C.generateMipmaps&&w&&C.minFilter!==qe&&C.minFilter!==rt}function _(C,w,k,q,$=1){r.generateMipmap(C);const he=n.get(w);he.__maxMipLevel=Math.log2(Math.max(k,q,$))}function M(C,w,k,q){if(a===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=w;return w===6403&&(k===5126&&($=33326),k===5131&&($=33325),k===5121&&($=33321)),w===6407&&(k===5126&&($=34837),k===5131&&($=34843),k===5121&&($=32849)),w===6408&&(k===5126&&($=34836),k===5131&&($=34842),k===5121&&($=q===xt?35907:32856)),($===33325||$===33326||$===34842||$===34836)&&e.get("EXT_color_buffer_float"),$}function T(C){return C===qe||C===uo||C===ho?9728:9729}function y(C){const w=C.target;w.removeEventListener("dispose",y),Z(w),w.isVideoTexture&&d.delete(w),o.memory.textures--}function F(C){const w=C.target;w.removeEventListener("dispose",F),V(w)}function Z(C){const w=n.get(C);w.__webglInit!==void 0&&(r.deleteTexture(w.__webglTexture),n.remove(C))}function V(C){const w=C.texture,k=n.get(C),q=n.get(w);if(C){if(q.__webglTexture!==void 0&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++)r.deleteFramebuffer(k.__webglFramebuffer[$]),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[$]);else r.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer&&r.deleteRenderbuffer(k.__webglColorRenderbuffer),k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer);if(C.isWebGLMultipleRenderTargets)for(let $=0,he=w.length;$<he;$++){const be=n.get(w[$]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(w[$])}n.remove(w),n.remove(C)}}let E=0;function ee(){E=0}function N(){const C=E;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),E+=1,C}function I(C,w){const k=n.get(C);if(C.isVideoTexture&&O(C),C.version>0&&k.__version!==C.version){const q=C.image;if(q===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(k,C,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,k.__webglTexture)}function G(C,w){const k=n.get(C);if(C.version>0&&k.__version!==C.version){te(k,C,w);return}t.activeTexture(33984+w),t.bindTexture(35866,k.__webglTexture)}function B(C,w){const k=n.get(C);if(C.version>0&&k.__version!==C.version){te(k,C,w);return}t.activeTexture(33984+w),t.bindTexture(32879,k.__webglTexture)}function R(C,w){const k=n.get(C);if(C.version>0&&k.__version!==C.version){U(k,C,w);return}t.activeTexture(33984+w),t.bindTexture(34067,k.__webglTexture)}const H={[vi]:10497,[bt]:33071,[qs]:33648},J={[qe]:9728,[uo]:9984,[ho]:9986,[rt]:9729,[Ul]:9985,[Mi]:9987};function oe(C,w,k){if(k?(r.texParameteri(C,10242,H[w.wrapS]),r.texParameteri(C,10243,H[w.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,H[w.wrapR]),r.texParameteri(C,10240,J[w.magFilter]),r.texParameteri(C,10241,J[w.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(w.wrapS!==bt||w.wrapT!==bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,T(w.magFilter)),r.texParameteri(C,10241,T(w.minFilter)),w.minFilter!==qe&&w.minFilter!==rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(w.type===jt&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===fi&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function ne(C,w){C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",y),C.__webglTexture=r.createTexture(),o.memory.textures++)}function te(C,w,k){let q=3553;w.isDataTexture2DArray&&(q=35866),w.isDataTexture3D&&(q=32879),ne(C,w),t.activeTexture(33984+k),t.bindTexture(q,C.__webglTexture),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const $=p(w)&&m(w.image)===!1,he=x(w.image,$,!1,u),be=m(he)||a,ye=s.convert(w.format);let Se=s.convert(w.type),ge=M(w.internalFormat,ye,Se,w.encoding);oe(q,w,be);let L;const le=w.mipmaps;if(w.isDepthTexture)ge=6402,a?w.type===jt?ge=36012:w.type===Qs?ge=33190:w.type===Qi?ge=35056:ge=33189:w.type===jt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===pi&&ge===6402&&w.type!==$s&&w.type!==Qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=$s,Se=s.convert(w.type)),w.format===is&&ge===6402&&(ge=34041,w.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Qi,Se=s.convert(w.type))),t.texImage2D(3553,0,ge,he.width,he.height,0,ye,Se,null);else if(w.isDataTexture)if(le.length>0&&be){for(let Y=0,ve=le.length;Y<ve;Y++)L=le[Y],t.texImage2D(3553,Y,ge,L.width,L.height,0,ye,Se,L.data);w.generateMipmaps=!1,C.__maxMipLevel=le.length-1}else t.texImage2D(3553,0,ge,he.width,he.height,0,ye,Se,he.data),C.__maxMipLevel=0;else if(w.isCompressedTexture){for(let Y=0,ve=le.length;Y<ve;Y++)L=le[Y],w.format!==ot&&w.format!==qt?ye!==null?t.compressedTexImage2D(3553,Y,ge,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,Y,ge,L.width,L.height,0,ye,Se,L.data);C.__maxMipLevel=le.length-1}else if(w.isDataTexture2DArray)t.texImage3D(35866,0,ge,he.width,he.height,he.depth,0,ye,Se,he.data),C.__maxMipLevel=0;else if(w.isDataTexture3D)t.texImage3D(32879,0,ge,he.width,he.height,he.depth,0,ye,Se,he.data),C.__maxMipLevel=0;else if(le.length>0&&be){for(let Y=0,ve=le.length;Y<ve;Y++)L=le[Y],t.texImage2D(3553,Y,ge,ye,Se,L);w.generateMipmaps=!1,C.__maxMipLevel=le.length-1}else t.texImage2D(3553,0,ge,ye,Se,he),C.__maxMipLevel=0;b(w,be)&&_(q,w,he.width,he.height),C.__version=w.version,w.onUpdate&&w.onUpdate(w)}function U(C,w,k){if(w.image.length!==6)return;ne(C,w),t.activeTexture(33984+k),t.bindTexture(34067,C.__webglTexture),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const q=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),$=w.image[0]&&w.image[0].isDataTexture,he=[];for(let Y=0;Y<6;Y++)!q&&!$?he[Y]=x(w.image[Y],!1,!0,c):he[Y]=$?w.image[Y].image:w.image[Y];const be=he[0],ye=m(be)||a,Se=s.convert(w.format),ge=s.convert(w.type),L=M(w.internalFormat,Se,ge,w.encoding);oe(34067,w,ye);let le;if(q){for(let Y=0;Y<6;Y++){le=he[Y].mipmaps;for(let ve=0;ve<le.length;ve++){const de=le[ve];w.format!==ot&&w.format!==qt?Se!==null?t.compressedTexImage2D(34069+Y,ve,L,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+Y,ve,L,de.width,de.height,0,Se,ge,de.data)}}C.__maxMipLevel=le.length-1}else{le=w.mipmaps;for(let Y=0;Y<6;Y++)if($){t.texImage2D(34069+Y,0,L,he[Y].width,he[Y].height,0,Se,ge,he[Y].data);for(let ve=0;ve<le.length;ve++){const Ee=le[ve].image[Y].image;t.texImage2D(34069+Y,ve+1,L,Ee.width,Ee.height,0,Se,ge,Ee.data)}}else{t.texImage2D(34069+Y,0,L,Se,ge,he[Y]);for(let ve=0;ve<le.length;ve++){const de=le[ve];t.texImage2D(34069+Y,ve+1,L,Se,ge,de.image[Y])}}C.__maxMipLevel=le.length}b(w,ye)&&_(34067,w,be.width,be.height),C.__version=w.version,w.onUpdate&&w.onUpdate(w)}function Q(C,w,k,q,$){const he=s.convert(k.format),be=s.convert(k.type),ye=M(k.internalFormat,he,be,k.encoding);$===32879||$===35866?t.texImage3D($,0,ye,w.width,w.height,w.depth,0,he,be,null):t.texImage2D($,0,ye,w.width,w.height,0,he,be,null),t.bindFramebuffer(36160,C),r.framebufferTexture2D(36160,q,$,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function ce(C,w,k){if(r.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let q=33189;if(k){const $=w.depthTexture;$&&$.isDepthTexture&&($.type===jt?q=36012:$.type===Qs&&(q=33190));const he=Ie(w);r.renderbufferStorageMultisample(36161,he,q,w.width,w.height)}else r.renderbufferStorage(36161,q,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){if(k){const q=Ie(w);r.renderbufferStorageMultisample(36161,q,35056,w.width,w.height)}else r.renderbufferStorage(36161,34041,w.width,w.height);r.framebufferRenderbuffer(36160,33306,36161,C)}else{const q=w.isWebGLMultipleRenderTargets===!0?w.texture[0]:w.texture,$=s.convert(q.format),he=s.convert(q.type),be=M(q.internalFormat,$,he,q.encoding);if(k){const ye=Ie(w);r.renderbufferStorageMultisample(36161,ye,be,w.width,w.height)}else r.renderbufferStorage(36161,be,w.width,w.height)}r.bindRenderbuffer(36161,null)}function W(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),I(w.depthTexture,0);const q=n.get(w.depthTexture).__webglTexture;if(w.depthTexture.format===pi)r.framebufferTexture2D(36160,36096,3553,q,0);else if(w.depthTexture.format===is)r.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function xe(C){const w=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture){if(k)throw new Error("target.depthTexture not supported in Cube render targets");W(w.__webglFramebuffer,C)}else if(k){w.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,w.__webglFramebuffer[q]),w.__webglDepthbuffer[q]=r.createRenderbuffer(),ce(w.__webglDepthbuffer[q],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),ce(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Me(C){const w=C.texture,k=n.get(C),q=n.get(w);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture=r.createTexture(),q.__version=w.version,o.memory.textures++);const $=C.isWebGLCubeRenderTarget===!0,he=C.isWebGLMultipleRenderTargets===!0,be=C.isWebGLMultisampleRenderTarget===!0,ye=w.isDataTexture3D||w.isDataTexture2DArray,Se=m(C)||a;if(a&&w.format===qt&&(w.type===jt||w.type===fi)&&(w.format=ot,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),$){k.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)k.__webglFramebuffer[ge]=r.createFramebuffer()}else if(k.__webglFramebuffer=r.createFramebuffer(),he)if(i.drawBuffers){const ge=C.texture;for(let L=0,le=ge.length;L<le;L++){const Y=n.get(ge[L]);Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(be)if(a){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,k.__webglColorRenderbuffer);const ge=s.convert(w.format),L=s.convert(w.type),le=M(w.internalFormat,ge,L,w.encoding),Y=Ie(C);r.renderbufferStorageMultisample(36161,Y,le,C.width,C.height),t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,k.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ce(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if($){t.bindTexture(34067,q.__webglTexture),oe(34067,w,Se);for(let ge=0;ge<6;ge++)Q(k.__webglFramebuffer[ge],C,w,36064,34069+ge);b(w,Se)&&_(34067,w,C.width,C.height),t.unbindTexture()}else if(he){const ge=C.texture;for(let L=0,le=ge.length;L<le;L++){const Y=ge[L],ve=n.get(Y);t.bindTexture(3553,ve.__webglTexture),oe(3553,Y,Se),Q(k.__webglFramebuffer,C,Y,36064+L,3553),b(Y,Se)&&_(3553,Y,C.width,C.height)}t.unbindTexture()}else{let ge=3553;ye&&(a?ge=w.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(ge,q.__webglTexture),oe(ge,w,Se),Q(k.__webglFramebuffer,C,w,36064,ge),b(w,Se)&&_(ge,w,C.width,C.height,C.depth),t.unbindTexture()}C.depthBuffer&&xe(C)}function ue(C){const w=m(C)||a,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let q=0,$=k.length;q<$;q++){const he=k[q];if(b(he,w)){const be=C.isWebGLCubeRenderTarget?34067:3553,ye=n.get(he).__webglTexture;t.bindTexture(be,ye),_(be,he,C.width,C.height),t.unbindTexture()}}}function fe(C){if(C.isWebGLMultisampleRenderTarget)if(a){const w=C.width,k=C.height;let q=16384;C.depthBuffer&&(q|=256),C.stencilBuffer&&(q|=1024);const $=n.get(C);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer),r.blitFramebuffer(0,0,w,k,0,0,w,k,q,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ie(C){return a&&C.isWebGLMultisampleRenderTarget?Math.min(h,C.samples):0}function O(C){const w=o.render.frame;d.get(C)!==w&&(d.set(C,w),C.update())}let j=!1,ie=!1;function me(C,w){C&&C.isWebGLRenderTarget&&(j===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),j=!0),C=C.texture),I(C,w)}function ae(C,w){C&&C.isWebGLCubeRenderTarget&&(ie===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ie=!0),C=C.texture),R(C,w)}this.allocateTextureUnit=N,this.resetTextureUnits=ee,this.setTexture2D=I,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=R,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=fe,this.safeSetTexture2D=me,this.safeSetTextureCube=ae}function Rg(r,e,t){const n=t.isWebGL2;function i(s){let o;if(s===yn)return 5121;if(s===Uu)return 32819;if(s===zu)return 32820;if(s===Wu)return 33635;if(s===Vu)return 5120;if(s===Du)return 5122;if(s===$s)return 5123;if(s===Hu)return 5124;if(s===Qs)return 5125;if(s===jt)return 5126;if(s===fi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ku)return 6406;if(s===qt)return 6407;if(s===ot)return 6408;if(s===Ou)return 6409;if(s===Zu)return 6410;if(s===pi)return 6402;if(s===is)return 34041;if(s===Yu)return 6403;if(s===Ku)return 36244;if(s===Ju)return 33319;if(s===ju)return 33320;if(s===Qu)return 36248;if(s===qu)return 36249;if(s===sa||s===ra||s===oa||s===aa)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ra)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===aa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===la||s===ca||s===ua||s===ha)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===la)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ca)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ua)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ha)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$u)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===da||s===fa)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===da)return o.COMPRESSED_RGB8_ETC2;if(s===fa)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===eh||s===th||s===nh||s===ih||s===sh||s===rh||s===oh||s===ah||s===lh||s===ch||s===uh||s===hh||s===dh||s===fh||s===mh||s===gh||s===vh||s===xh||s===yh||s===_h||s===bh||s===wh||s===Mh||s===Sh||s===Ch||s===Ih||s===Ah||s===Th)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===ph)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Qi)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class pc extends dt{constructor(e=[]){super(),this.cameras=e}}pc.prototype.isArrayCamera=!0;class Pt extends Ne{constructor(){super(),this.type="Group"}}Pt.prototype.isGroup=!0;const Lg={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lg))),c&&e.hand){o=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const p=new Pt;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[v.jointName]=p,c.add(p)}const m=c.joints[v.jointName];x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=x.radius),m.visible=x!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class Bg extends Hn{constructor(e,t){super();const n=this,i=e.state;let s=null,o=1,a=null,l="local-floor",c=null,u=null,h=null,d=null,f=null,g=!1,v=null,x=null,m=null,p=null,b=null,_=null;const M=[],T=new Map,y=new dt;y.layers.enable(1),y.viewport=new He;const F=new dt;F.layers.enable(2),F.viewport=new He;const Z=[y,F],V=new pc;V.layers.enable(1),V.layers.enable(2);let E=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Q=M[U];return Q===void 0&&(Q=new Yr,M[U]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(U){let Q=M[U];return Q===void 0&&(Q=new Yr,M[U]=Q),Q.getGripSpace()},this.getHand=function(U){let Q=M[U];return Q===void 0&&(Q=new Yr,M[U]=Q),Q.getHandSpace()};function N(U){const Q=T.get(U.inputSource);Q&&Q.dispatchEvent({type:U.type,data:U.inputSource})}function I(){T.forEach(function(U,Q){U.disconnect(Q)}),T.clear(),E=null,ee=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),h&&t.deleteFramebuffer(h),v&&t.deleteFramebuffer(v),x&&t.deleteRenderbuffer(x),m&&t.deleteRenderbuffer(m),h=null,v=null,x=null,m=null,f=null,d=null,u=null,s=null,te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){l=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",I),s.addEventListener("inputsourceschange",G);const Q=t.getContextAttributes();if(Q.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0){const ce={antialias:Q.antialias,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f})}else if(t instanceof WebGLRenderingContext){const ce={antialias:!0,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({layers:[f]})}else{g=Q.antialias;let ce=null;Q.depth&&(_=256,Q.stencil&&(_|=1024),b=Q.stencil?33306:36096,ce=Q.stencil?35056:33190);const W={colorFormat:Q.alpha?32856:32849,depthFormat:ce,scaleFactor:o};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(W),h=t.createFramebuffer(),s.updateRenderState({layers:[d]}),g&&(v=t.createFramebuffer(),x=t.createRenderbuffer(),t.bindRenderbuffer(36161,x),t.renderbufferStorageMultisample(36161,4,32856,d.textureWidth,d.textureHeight),i.bindFramebuffer(36160,v),t.framebufferRenderbuffer(36160,36064,36161,x),t.bindRenderbuffer(36161,null),ce!==null&&(m=t.createRenderbuffer(),t.bindRenderbuffer(36161,m),t.renderbufferStorageMultisample(36161,4,ce,d.textureWidth,d.textureHeight),t.framebufferRenderbuffer(36160,b,36161,m),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}a=await s.requestReferenceSpace(l),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(U){const Q=s.inputSources;for(let ce=0;ce<M.length;ce++)T.set(Q[ce],M[ce]);for(let ce=0;ce<U.removed.length;ce++){const W=U.removed[ce],xe=T.get(W);xe&&(xe.dispatchEvent({type:"disconnected",data:W}),T.delete(W))}for(let ce=0;ce<U.added.length;ce++){const W=U.added[ce],xe=T.get(W);xe&&xe.dispatchEvent({type:"connected",data:W})}}const B=new A,R=new A;function H(U,Q,ce){B.setFromMatrixPosition(Q.matrixWorld),R.setFromMatrixPosition(ce.matrixWorld);const W=B.distanceTo(R),xe=Q.projectionMatrix.elements,Me=ce.projectionMatrix.elements,ue=xe[14]/(xe[10]-1),fe=xe[14]/(xe[10]+1),Ie=(xe[9]+1)/xe[5],O=(xe[9]-1)/xe[5],j=(xe[8]-1)/xe[0],ie=(Me[8]+1)/Me[0],me=ue*j,ae=ue*ie,C=W/(-j+ie),w=C*-j;Q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(w),U.translateZ(C),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const k=ue+C,q=fe+C,$=me-w,he=ae+(W-w),be=Ie*fe/q*k,ye=O*fe/q*k;U.projectionMatrix.makePerspective($,he,be,ye,k,q)}function J(U,Q){Q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;V.near=F.near=y.near=U.near,V.far=F.far=y.far=U.far,(E!==V.near||ee!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),E=V.near,ee=V.far);const Q=U.parent,ce=V.cameras;J(V,Q);for(let xe=0;xe<ce.length;xe++)J(ce[xe],Q);V.matrixWorld.decompose(V.position,V.quaternion,V.scale),U.position.copy(V.position),U.quaternion.copy(V.quaternion),U.scale.copy(V.scale),U.matrix.copy(V.matrix),U.matrixWorld.copy(V.matrixWorld);const W=U.children;for(let xe=0,Me=W.length;xe<Me;xe++)W[xe].updateMatrixWorld(!0);ce.length===2?H(V,y,F):V.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return V},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)};let oe=null;function ne(U,Q){if(c=Q.getViewerPose(a),p=Q,c!==null){const W=c.views;f!==null&&i.bindXRFramebuffer(f.framebuffer);let xe=!1;W.length!==V.cameras.length&&(V.cameras.length=0,xe=!0);for(let Me=0;Me<W.length;Me++){const ue=W[Me];let fe=null;if(f!==null)fe=f.getViewport(ue);else{const O=u.getViewSubImage(d,ue);i.bindXRFramebuffer(h),O.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,b,3553,O.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,O.colorTexture,0),fe=O.viewport}const Ie=Z[Me];Ie.matrix.fromArray(ue.transform.matrix),Ie.projectionMatrix.fromArray(ue.projectionMatrix),Ie.viewport.set(fe.x,fe.y,fe.width,fe.height),Me===0&&V.matrix.copy(Ie.matrix),xe===!0&&V.cameras.push(Ie)}g&&(i.bindXRFramebuffer(v),_!==null&&t.clear(_))}const ce=s.inputSources;for(let W=0;W<M.length;W++){const xe=M[W],Me=ce[W];xe.update(Me,Q,a)}if(oe&&oe(U,Q),g){const W=d.textureWidth,xe=d.textureHeight;i.bindFramebuffer(36008,v),i.bindFramebuffer(36009,h),t.invalidateFramebuffer(36008,[b]),t.invalidateFramebuffer(36009,[b]),t.blitFramebuffer(0,0,W,xe,0,0,W,xe,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,v)}p=null}const te=new ec;te.setAnimationLoop(ne),this.setAnimationLoop=function(U){oe=U},this.dispose=function(){}}}function Gg(r){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function t(m,p,b,_,M){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),l(m,p)):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?d(m,p,M):h(m,p)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?(n(m,p),g(m,p)):p.isMeshDistanceMaterial?(n(m,p),v(m,p)):p.isMeshNormalMaterial?(n(m,p),x(m,p)):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?o(m,p,b,_):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=r.get(p).envMap;if(b){m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio;const T=r.get(b).__maxMipLevel;T!==void 0&&(m.maxMipLevel.value=T)}p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),r.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){h(m,p),m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===$e&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function v(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function x(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Fg(){const r=lr("canvas");return r.style.display="block",r}function De(r={}){const e=r.canvas!==void 0?r.canvas:Fg(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,o=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=mt,this.physicallyCorrectLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const v=this;let x=!1,m=0,p=0,b=null,_=-1,M=null;const T=new He,y=new He;let F=null,Z=e.width,V=e.height,E=1,ee=null,N=null;const I=new He(0,0,Z,V),G=new He(0,0,Z,V);let B=!1;const R=[],H=new ur;let J=!1,oe=!1,ne=null;const te=new pe,U=new A,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return b===null?E:1}let W=t;function xe(S,P){for(let z=0;z<S.length;z++){const D=S[z],X=e.getContext(D,P);if(X!==null)return X}return null}try{const S={alpha:n,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",ut,!1),W===null){const P=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&P.shift(),W=xe(P,S),W===null)throw xe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Me,ue,fe,Ie,O,j,ie,me,ae,C,w,k,q,$,he,be,ye,Se,ge,L,le,Y,ve;function de(){Me=new im(W),ue=new Jp(W,Me,r),Me.init(ue),Y=new Rg(W,Me,ue),fe=new Tg(W,Me,ue),R[0]=1029,Ie=new om,O=new vg,j=new Eg(W,Me,fe,O,ue,Y,Ie),ie=new Qp(v),me=new nm(v),ae=new xd(W,ue),ve=new Yp(W,Me,ae,ue),C=new sm(W,ae,Ie,ve),w=new um(W,C,ae,Ie),ge=new cm(W,ue,j),be=new jp(O),k=new gg(v,ie,me,Me,ue,ve,be),q=new Gg(O),$=new yg(O),he=new Cg(Me,ue),Se=new Xp(v,ie,fe,w,a),ye=new fc(v,w,ue),L=new Kp(W,Me,Ie,ue),le=new rm(W,Me,Ie,ue),Ie.programs=k.programs,v.capabilities=ue,v.extensions=Me,v.properties=O,v.renderLists=$,v.shadowMap=ye,v.state=fe,v.info=Ie}de();const Ee=new Bg(v,W);this.xr=Ee,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const S=Me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return E},this.setPixelRatio=function(S){S!==void 0&&(E=S,this.setSize(Z,V,!1))},this.getSize=function(S){return S.set(Z,V)},this.setSize=function(S,P,z){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,V=P,e.width=Math.floor(S*E),e.height=Math.floor(P*E),z!==!1&&(e.style.width=S+"px",e.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(Z*E,V*E).floor()},this.setDrawingBufferSize=function(S,P,z){Z=S,V=P,E=z,e.width=Math.floor(S*z),e.height=Math.floor(P*z),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(I)},this.setViewport=function(S,P,z,D){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,P,z,D),fe.viewport(T.copy(I).multiplyScalar(E).floor())},this.getScissor=function(S){return S.copy(G)},this.setScissor=function(S,P,z,D){S.isVector4?G.set(S.x,S.y,S.z,S.w):G.set(S,P,z,D),fe.scissor(y.copy(G).multiplyScalar(E).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(S){fe.setScissorTest(B=S)},this.setOpaqueSort=function(S){ee=S},this.setTransparentSort=function(S){N=S},this.getClearColor=function(S){return S.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(S,P,z){let D=0;(S===void 0||S)&&(D|=16384),(P===void 0||P)&&(D|=256),(z===void 0||z)&&(D|=1024),W.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",ut,!1),$.dispose(),he.dispose(),O.dispose(),ie.dispose(),me.dispose(),w.dispose(),ve.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ko),Ee.removeEventListener("sessionend",Jo),ne&&(ne.dispose(),ne=null),Mn.stop()};function ct(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=Ie.autoReset,P=ye.enabled,z=ye.autoUpdate,D=ye.needsUpdate,X=ye.type;de(),Ie.autoReset=S,ye.enabled=P,ye.autoUpdate=z,ye.needsUpdate=D,ye.type=X}function tn(S){const P=S.target;P.removeEventListener("dispose",tn),je(P)}function je(S){Ut(S),O.remove(S)}function Ut(S){const P=O.get(S).programs;P!==void 0&&P.forEach(function(z){k.releaseProgram(z)})}this.renderBufferDirect=function(S,P,z,D,X,Ce){P===null&&(P=Q);const we=X.isMesh&&X.matrixWorld.determinant()<0,_e=iu(S,P,z,D,X);fe.setMaterial(D,we);let Ae=z.index;const Ve=z.attributes.position;if(Ae===null){if(Ve===void 0||Ve.count===0)return}else if(Ae.count===0)return;let Re=1;D.wireframe===!0&&(Ae=C.getWireframeAttribute(z),Re=2),ve.setup(X,D,_e,z,Ae);let Be,Ye=L;Ae!==null&&(Be=ae.get(Ae),Ye=le,Ye.setIndex(Be));const Sn=Ae!==null?Ae.count:Ve.count,Ge=z.drawRange.start*Re,Fi=z.drawRange.count*Re,ke=Ce!==null?Ce.start*Re:0,Cn=Ce!==null?Ce.count*Re:1/0,In=Math.max(Ge,ke),An=Math.min(Sn,Ge+Fi,ke+Cn)-1,nn=Math.max(0,An-In+1);if(nn!==0){if(X.isMesh)D.wireframe===!0?(fe.setLineWidth(D.wireframeLinewidth*ce()),Ye.setMode(1)):Ye.setMode(4);else if(X.isLine){let Ke=D.linewidth;Ke===void 0&&(Ke=1),fe.setLineWidth(Ke*ce()),X.isLineSegments?Ye.setMode(1):X.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else X.isPoints?Ye.setMode(0):X.isSprite&&Ye.setMode(4);if(X.isInstancedMesh)Ye.renderInstances(In,nn,X.count);else if(z.isInstancedBufferGeometry){const Ke=Math.min(z.instanceCount,z._maxInstanceCount);Ye.renderInstances(In,nn,Ke)}else Ye.render(In,nn)}},this.compile=function(S,P){d=he.get(S),d.init(),g.push(d),S.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(v.physicallyCorrectLights),S.traverse(function(z){const D=z.material;if(D)if(Array.isArray(D))for(let X=0;X<D.length;X++){const Ce=D[X];xr(Ce,S,z)}else xr(D,S,z)}),g.pop(),d=null};let Et=null;function eu(S){Et&&Et(S)}function Ko(){Mn.stop()}function Jo(){Mn.start()}const Mn=new ec;Mn.setAnimationLoop(eu),typeof window<"u"&&Mn.setContext(window),this.setAnimationLoop=function(S){Et=S,Ee.setAnimationLoop(S),S===null?Mn.stop():Mn.start()},Ee.addEventListener("sessionstart",Ko),Ee.addEventListener("sessionend",Jo),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(P),P=Ee.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,P,b),d=he.get(S,g.length),d.init(),g.push(d),te.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),H.setFromProjectionMatrix(te),oe=this.localClippingEnabled,J=be.init(this.clippingPlanes,oe,P),h=$.get(S,f.length),h.init(),f.push(h),jo(S,P,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(ee,N),J===!0&&be.beginShadows();const z=d.state.shadowsArray;if(ye.render(z,S,P),J===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(h,S),d.setupLights(v.physicallyCorrectLights),P.isArrayCamera){const D=P.cameras;for(let X=0,Ce=D.length;X<Ce;X++){const we=D[X];Qo(h,S,we,we.viewport)}}else Qo(h,S,P);b!==null&&(j.updateMultisampleRenderTarget(b),j.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,P),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1),ve.resetDefaultState(),_=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function jo(S,P,z,D){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){D&&U.setFromMatrixPosition(S.matrixWorld).applyMatrix4(te);const we=w.update(S),_e=S.material;_e.visible&&h.push(S,we,_e,z,U.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ie.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ie.render.frame),!S.frustumCulled||H.intersectsObject(S))){D&&U.setFromMatrixPosition(S.matrixWorld).applyMatrix4(te);const we=w.update(S),_e=S.material;if(Array.isArray(_e)){const Ae=we.groups;for(let Ve=0,Re=Ae.length;Ve<Re;Ve++){const Be=Ae[Ve],Ye=_e[Be.materialIndex];Ye&&Ye.visible&&h.push(S,we,Ye,z,U.z,Be)}}else _e.visible&&h.push(S,we,_e,z,U.z,null)}}const Ce=S.children;for(let we=0,_e=Ce.length;we<_e;we++)jo(Ce[we],P,z,D)}function Qo(S,P,z,D){const X=S.opaque,Ce=S.transmissive,we=S.transparent;d.setupLightsView(z),Ce.length>0&&tu(X,P,z),D&&fe.viewport(T.copy(D)),X.length>0&&xs(X,P,z),Ce.length>0&&xs(Ce,P,z),we.length>0&&xs(we,P,z)}function tu(S,P,z){if(ne===null){const we=o===!0&&ue.isWebGL2===!0?Jl:pt;ne=new we(1024,1024,{generateMipmaps:!0,type:Y.convert(fi)!==null?fi:yn,minFilter:Mi,magFilter:qe,wrapS:bt,wrapT:bt})}const D=v.getRenderTarget();v.setRenderTarget(ne),v.clear();const X=v.toneMapping;v.toneMapping=Fn,xs(S,P,z),v.toneMapping=X,j.updateMultisampleRenderTarget(ne),j.updateRenderTargetMipmap(ne),v.setRenderTarget(D)}function xs(S,P,z){const D=P.isScene===!0?P.overrideMaterial:null;for(let X=0,Ce=S.length;X<Ce;X++){const we=S[X],_e=we.object,Ae=we.geometry,Ve=D===null?we.material:D,Re=we.group;_e.layers.test(z.layers)&&nu(_e,P,z,Ae,Ve,Re)}}function nu(S,P,z,D,X,Ce){S.onBeforeRender(v,P,z,D,X,Ce),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(v,P,z,D,S,Ce),X.transparent===!0&&X.side===Nn?(X.side=$e,X.needsUpdate=!0,v.renderBufferDirect(z,P,D,X,S,Ce),X.side=gi,X.needsUpdate=!0,v.renderBufferDirect(z,P,D,X,S,Ce),X.side=Nn):v.renderBufferDirect(z,P,D,X,S,Ce),S.onAfterRender(v,P,z,D,X,Ce)}function xr(S,P,z){P.isScene!==!0&&(P=Q);const D=O.get(S),X=d.state.lights,Ce=d.state.shadowsArray,we=X.state.version,_e=k.getParameters(S,X.state,Ce,P,z),Ae=k.getProgramCacheKey(_e);let Ve=D.programs;D.environment=S.isMeshStandardMaterial?P.environment:null,D.fog=P.fog,D.envMap=(S.isMeshStandardMaterial?me:ie).get(S.envMap||D.environment),Ve===void 0&&(S.addEventListener("dispose",tn),Ve=new Map,D.programs=Ve);let Re=Ve.get(Ae);if(Re!==void 0){if(D.currentProgram===Re&&D.lightsStateVersion===we)return qo(S,_e),Re}else _e.uniforms=k.getUniforms(S),S.onBuild(z,_e,v),S.onBeforeCompile(_e,v),Re=k.acquireProgram(_e,Ae),Ve.set(Ae,Re),D.uniforms=_e.uniforms;const Be=D.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=be.uniform),qo(S,_e),D.needsLights=ru(S),D.lightsStateVersion=we,D.needsLights&&(Be.ambientLightColor.value=X.state.ambient,Be.lightProbe.value=X.state.probe,Be.directionalLights.value=X.state.directional,Be.directionalLightShadows.value=X.state.directionalShadow,Be.spotLights.value=X.state.spot,Be.spotLightShadows.value=X.state.spotShadow,Be.rectAreaLights.value=X.state.rectArea,Be.ltc_1.value=X.state.rectAreaLTC1,Be.ltc_2.value=X.state.rectAreaLTC2,Be.pointLights.value=X.state.point,Be.pointLightShadows.value=X.state.pointShadow,Be.hemisphereLights.value=X.state.hemi,Be.directionalShadowMap.value=X.state.directionalShadowMap,Be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Be.spotShadowMap.value=X.state.spotShadowMap,Be.spotShadowMatrix.value=X.state.spotShadowMatrix,Be.pointShadowMap.value=X.state.pointShadowMap,Be.pointShadowMatrix.value=X.state.pointShadowMatrix);const Ye=Re.getUniforms(),Sn=gn.seqWithValue(Ye.seq,Be);return D.currentProgram=Re,D.uniformsList=Sn,Re}function qo(S,P){const z=O.get(S);z.outputEncoding=P.outputEncoding,z.instancing=P.instancing,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents}function iu(S,P,z,D,X){P.isScene!==!0&&(P=Q),j.resetTextureUnits();const Ce=P.fog,we=D.isMeshStandardMaterial?P.environment:null,_e=b===null?v.outputEncoding:b.texture.encoding,Ae=(D.isMeshStandardMaterial?me:ie).get(D.envMap||we),Ve=D.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Re=!!D.normalMap&&!!z.attributes.tangent,Be=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,Sn=z.morphAttributes.position?z.morphAttributes.position.length:0,Ge=O.get(D),Fi=d.state.lights;if(J===!0&&(oe===!0||S!==M)){const Rt=S===M&&D.id===_;be.setState(D,S,Rt)}let ke=!1;D.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Fi.state.version||Ge.outputEncoding!==_e||X.isInstancedMesh&&Ge.instancing===!1||!X.isInstancedMesh&&Ge.instancing===!0||X.isSkinnedMesh&&Ge.skinning===!1||!X.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Ae||D.fog&&Ge.fog!==Ce||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==be.numPlanes||Ge.numIntersection!==be.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==Re||Ge.morphTargets!==Be||Ge.morphNormals!==Ye||ue.isWebGL2===!0&&Ge.morphTargetsCount!==Sn)&&(ke=!0):(ke=!0,Ge.__version=D.version);let Cn=Ge.currentProgram;ke===!0&&(Cn=xr(D,P,X));let In=!1,An=!1,nn=!1;const Ke=Cn.getUniforms(),Ni=Ge.uniforms;if(fe.useProgram(Cn.program)&&(In=!0,An=!0,nn=!0),D.id!==_&&(_=D.id,An=!0),In||M!==S){if(Ke.setValue(W,"projectionMatrix",S.projectionMatrix),ue.logarithmicDepthBuffer&&Ke.setValue(W,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,An=!0,nn=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const Rt=Ke.map.cameraPosition;Rt!==void 0&&Rt.setValue(W,U.setFromMatrixPosition(S.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Ke.setValue(W,"isOrthographic",S.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||X.isSkinnedMesh)&&Ke.setValue(W,"viewMatrix",S.matrixWorldInverse)}if(X.isSkinnedMesh){Ke.setOptional(W,X,"bindMatrix"),Ke.setOptional(W,X,"bindMatrixInverse");const Rt=X.skeleton;Rt&&(ue.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),Ke.setValue(W,"boneTexture",Rt.boneTexture,j),Ke.setValue(W,"boneTextureSize",Rt.boneTextureSize)):Ke.setOptional(W,Rt,"boneMatrices"))}return z&&(z.morphAttributes.position!==void 0||z.morphAttributes.normal!==void 0)&&ge.update(X,z,D,Cn),(An||Ge.receiveShadow!==X.receiveShadow)&&(Ge.receiveShadow=X.receiveShadow,Ke.setValue(W,"receiveShadow",X.receiveShadow)),An&&(Ke.setValue(W,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&su(Ni,nn),Ce&&D.fog&&q.refreshFogUniforms(Ni,Ce),q.refreshMaterialUniforms(Ni,D,E,V,ne),gn.upload(W,Ge.uniformsList,Ni,j)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(gn.upload(W,Ge.uniformsList,Ni,j),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Ke.setValue(W,"center",X.center),Ke.setValue(W,"modelViewMatrix",X.modelViewMatrix),Ke.setValue(W,"normalMatrix",X.normalMatrix),Ke.setValue(W,"modelMatrix",X.matrixWorld),Cn}function su(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function ru(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return b},this.setRenderTarget=function(S,P=0,z=0){b=S,m=P,p=z,S&&O.get(S).__webglFramebuffer===void 0&&j.setupRenderTarget(S);let D=null,X=!1,Ce=!1;if(S){const _e=S.texture;(_e.isDataTexture3D||_e.isDataTexture2DArray)&&(Ce=!0);const Ae=O.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(D=Ae[P],X=!0):S.isWebGLMultisampleRenderTarget?D=O.get(S).__webglMultisampledFramebuffer:D=Ae,T.copy(S.viewport),y.copy(S.scissor),F=S.scissorTest}else T.copy(I).multiplyScalar(E).floor(),y.copy(G).multiplyScalar(E).floor(),F=B;if(fe.bindFramebuffer(36160,D)&&ue.drawBuffers){let _e=!1;if(S)if(S.isWebGLMultipleRenderTargets){const Ae=S.texture;if(R.length!==Ae.length||R[0]!==36064){for(let Ve=0,Re=Ae.length;Ve<Re;Ve++)R[Ve]=36064+Ve;R.length=Ae.length,_e=!0}}else(R.length!==1||R[0]!==36064)&&(R[0]=36064,R.length=1,_e=!0);else(R.length!==1||R[0]!==1029)&&(R[0]=1029,R.length=1,_e=!0);_e&&(ue.isWebGL2?W.drawBuffers(R):Me.get("WEBGL_draw_buffers").drawBuffersWEBGL(R))}if(fe.viewport(T),fe.scissor(y),fe.setScissorTest(F),X){const _e=O.get(S.texture);W.framebufferTexture2D(36160,36064,34069+P,_e.__webglTexture,z)}else if(Ce){const _e=O.get(S.texture),Ae=P||0;W.framebufferTextureLayer(36160,36064,_e.__webglTexture,z||0,Ae)}_=-1},this.readRenderTargetPixels=function(S,P,z,D,X,Ce,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=O.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(_e=_e[we]),_e){fe.bindFramebuffer(36160,_e);try{const Ae=S.texture,Ve=Ae.format,Re=Ae.type;if(Ve!==ot&&Y.convert(Ve)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Re===fi&&(Me.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Re!==yn&&Y.convert(Re)!==W.getParameter(35738)&&!(Re===jt&&(ue.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W.checkFramebufferStatus(36160)===36053?P>=0&&P<=S.width-D&&z>=0&&z<=S.height-X&&W.readPixels(P,z,D,X,Y.convert(Ve),Y.convert(Re),Ce):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Ae=b!==null?O.get(b).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(S,P,z=0){const D=Math.pow(2,-z),X=Math.floor(P.image.width*D),Ce=Math.floor(P.image.height*D);let we=Y.convert(P.format);ue.isWebGL2&&(we===6407&&(we=32849),we===6408&&(we=32856)),j.setTexture2D(P,0),W.copyTexImage2D(3553,z,we,S.x,S.y,X,Ce,0),fe.unbindTexture()},this.copyTextureToTexture=function(S,P,z,D=0){const X=P.image.width,Ce=P.image.height,we=Y.convert(z.format),_e=Y.convert(z.type);j.setTexture2D(z,0),W.pixelStorei(37440,z.flipY),W.pixelStorei(37441,z.premultiplyAlpha),W.pixelStorei(3317,z.unpackAlignment),P.isDataTexture?W.texSubImage2D(3553,D,S.x,S.y,X,Ce,we,_e,P.image.data):P.isCompressedTexture?W.compressedTexSubImage2D(3553,D,S.x,S.y,P.mipmaps[0].width,P.mipmaps[0].height,we,P.mipmaps[0].data):W.texSubImage2D(3553,D,S.x,S.y,we,_e,P.image),D===0&&z.generateMipmaps&&W.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(S,P,z,D,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=S.max.x-S.min.x+1,we=S.max.y-S.min.y+1,_e=S.max.z-S.min.z+1,Ae=Y.convert(D.format),Ve=Y.convert(D.type);let Re;if(D.isDataTexture3D)j.setTexture3D(D,0),Re=32879;else if(D.isDataTexture2DArray)j.setTexture2DArray(D,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,D.flipY),W.pixelStorei(37441,D.premultiplyAlpha),W.pixelStorei(3317,D.unpackAlignment);const Be=W.getParameter(3314),Ye=W.getParameter(32878),Sn=W.getParameter(3316),Ge=W.getParameter(3315),Fi=W.getParameter(32877),ke=z.isCompressedTexture?z.mipmaps[0]:z.image;W.pixelStorei(3314,ke.width),W.pixelStorei(32878,ke.height),W.pixelStorei(3316,S.min.x),W.pixelStorei(3315,S.min.y),W.pixelStorei(32877,S.min.z),z.isDataTexture||z.isDataTexture3D?W.texSubImage3D(Re,X,P.x,P.y,P.z,Ce,we,_e,Ae,Ve,ke.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Re,X,P.x,P.y,P.z,Ce,we,_e,Ae,ke.data)):W.texSubImage3D(Re,X,P.x,P.y,P.z,Ce,we,_e,Ae,Ve,ke),W.pixelStorei(3314,Be),W.pixelStorei(32878,Ye),W.pixelStorei(3316,Sn),W.pixelStorei(3315,Ge),W.pixelStorei(32877,Fi),X===0&&D.generateMipmaps&&W.generateMipmap(Re),fe.unbindTexture()},this.initTexture=function(S){j.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){m=0,p=0,b=null,fe.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}De.prototype.isWebGLRenderer=!0;class Ng extends De{}Ng.prototype.isWebGL1Renderer=!0;class ms extends Ne{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}ms.prototype.isScene=!0;class Ei{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=It()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=It()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=It()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Ei.prototype.isInterleavedBuffer=!0;const Qe=new A;class _i{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qe.x=this.getX(t),Qe.y=this.getY(t),Qe.z=this.getZ(t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.x=this.getX(t),Qe.y=this.getY(t),Qe.z=this.getZ(t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.x=this.getX(t),Qe.y=this.getY(t),Qe.z=this.getZ(t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Je(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_i.prototype.isInterleavedBufferAttribute=!0;class mc extends tt{constructor(e){super(),this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}mc.prototype.isSpriteMaterial=!0;let ri;const zi=new A,oi=new A,ai=new A,li=new K,Wi=new K,gc=new pe,Hs=new A,ki=new A,Us=new A,Ja=new K,Kr=new K,ja=new K;class Pg extends Ne{constructor(e){if(super(),this.type="Sprite",ri===void 0){ri=new Pe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ei(t,5);ri.setIndex([0,1,2,0,2,3]),ri.setAttribute("position",new _i(n,3,0,!1)),ri.setAttribute("uv",new _i(n,2,3,!1))}this.geometry=ri,this.material=e!==void 0?e:new mc,this.center=new K(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oi.setFromMatrixScale(this.matrixWorld),gc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ai.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oi.multiplyScalar(-ai.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;zs(Hs.set(-.5,-.5,0),ai,o,oi,i,s),zs(ki.set(.5,-.5,0),ai,o,oi,i,s),zs(Us.set(.5,.5,0),ai,o,oi,i,s),Ja.set(0,0),Kr.set(1,0),ja.set(1,1);let a=e.ray.intersectTriangle(Hs,ki,Us,!1,zi);if(a===null&&(zs(ki.set(-.5,.5,0),ai,o,oi,i,s),Kr.set(0,1),a=e.ray.intersectTriangle(Hs,Us,ki,!1,zi),a===null))return;const l=e.ray.origin.distanceTo(zi);l<e.near||l>e.far||t.push({distance:l,point:zi.clone(),uv:et.getUV(zi,Hs,ki,Us,Ja,Kr,ja,new K),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Pg.prototype.isSprite=!0;function zs(r,e,t,n,i,s){li.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Wi.x=s*li.x-i*li.y,Wi.y=i*li.x+s*li.y):Wi.copy(li),r.copy(e),r.x+=Wi.x,r.y+=Wi.y,r.applyMatrix4(gc)}const Qa=new A,qa=new He,$a=new He,Vg=new A,el=new pe;class Fo extends We{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new pe,this.bindMatrixInverse=new pe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new He,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;qa.fromBufferAttribute(i.attributes.skinIndex,e),$a.fromBufferAttribute(i.attributes.skinWeight,e),Qa.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=$a.getComponent(s);if(o!==0){const a=qa.getComponent(s);el.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Vg.copy(Qa).applyMatrix4(el),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}Fo.prototype.isSkinnedMesh=!0;class No extends Ne{constructor(){super(),this.type="Bone"}}No.prototype.isBone=!0;class vc extends nt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=qe,u=qe,h,d){super(null,o,a,l,c,u,i,s,h,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}vc.prototype.isDataTexture=!0;const tl=new pe,Dg=new pe;class Po{constructor(e=[],t=[]){this.uuid=It(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Dg;tl.multiplyMatrices(a,t[s]),tl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Po(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Xl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new vc(t,e,e,ot,jt);return this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new No),this.bones.push(o),this.boneInverses.push(new pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class mo extends Je{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}mo.prototype.isInstancedBufferAttribute=!0;const nl=new pe,il=new pe,Ws=[],Oi=new We;class Hg extends We{constructor(e,t,n){super(e,t),this.instanceMatrix=new mo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,nl),il.multiplyMatrices(n,nl),Oi.matrixWorld=il,Oi.raycast(e,Ws);for(let o=0,a=Ws.length;o<a;o++){const l=Ws[o];l.instanceId=s,l.object=this,t.push(l)}Ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Hg.prototype.isInstancedMesh=!0;class zn extends tt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}zn.prototype.isLineBasicMaterial=!0;const sl=new A,rl=new A,ol=new pe,Jr=new Ci,ks=new Un;class dr extends Ne{constructor(e=new Pe,t=new zn){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)sl.fromBufferAttribute(t,i-1),rl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sl.distanceTo(rl);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(i),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;ol.copy(i).invert(),Jr.copy(e.ray).applyMatrix4(ol);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new A,u=new A,h=new A,d=new A,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,x=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),p=Math.min(g.count,o.start+o.count);for(let b=m,_=p-1;b<_;b+=f){const M=g.getX(b),T=g.getX(b+1);if(c.fromBufferAttribute(x,M),u.fromBufferAttribute(x,T),Jr.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),p=Math.min(x.count,o.start+o.count);for(let b=m,_=p-1;b<_;b+=f){if(c.fromBufferAttribute(x,b),u.fromBufferAttribute(x,b+1),Jr.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}dr.prototype.isLine=!0;const al=new A,ll=new A;class gs extends dr{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)al.fromBufferAttribute(t,i),ll.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+al.distanceTo(ll);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}gs.prototype.isLineSegments=!0;class xc extends dr{constructor(e,t){super(e,t),this.type="LineLoop"}}xc.prototype.isLineLoop=!0;class Vo extends tt{constructor(e){super(),this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Vo.prototype.isPointsMaterial=!0;const cl=new pe,go=new Ci,Os=new Un,Zs=new A;class yc extends Ne{constructor(e=new Pe,t=new Vo){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=s,e.ray.intersectsSphere(Os)===!1)return;cl.copy(i).invert(),go.copy(e.ray).applyMatrix4(cl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const x=c.getX(g);Zs.fromBufferAttribute(h,x),ul(Zs,x,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Zs.fromBufferAttribute(h,g),ul(Zs,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}yc.prototype.isPoints=!0;function ul(r,e,t,n,i,s,o){const a=go.distanceSqToPoint(r);if(a<t){const l=new A;go.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ug extends nt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.format=a!==void 0?a:qt,this.minFilter=o!==void 0?o:rt,this.magFilter=s!==void 0?s:rt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Ug.prototype.isVideoTexture=!0;class zg extends nt{constructor(e,t,n,i,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,i,s,h,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}zg.prototype.isCompressedTexture=!0;class Wg extends nt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.needsUpdate=!0}}Wg.prototype.isCanvasTexture=!0;class kg extends nt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:pi,u!==pi&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pi&&(n=$s),n===void 0&&u===is&&(n=Qi),super(null,i,s,o,a,l,u,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1}}kg.prototype.isDepthTexture=!0;class At{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new K:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],s=[],o=[],a=new A,l=new pe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_t(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(_t(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fr extends At{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new K,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}fr.prototype.isEllipseCurve=!0;class _c extends fr{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.type="ArcCurve"}}_c.prototype.isArcCurve=!0;function Do(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Xs=new A,jr=new Do,Qr=new Do,qr=new Do;class bc extends At{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Xs.subVectors(i[0],i[1]).add(i[0]),c=Xs);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Xs.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),jr.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,x),Qr.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,x),qr.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,x)}else this.curveType==="catmullrom"&&(jr.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Qr.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),qr.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(jr.calc(l),Qr.calc(l),qr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}bc.prototype.isCatmullRomCurve3=!0;function hl(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Og(r,e){const t=1-r;return t*t*e}function Zg(r,e){return 2*(1-r)*r*e}function Xg(r,e){return r*r*e}function es(r,e,t,n){return Og(r,e)+Zg(r,t)+Xg(r,n)}function Yg(r,e){const t=1-r;return t*t*t*e}function Kg(r,e){const t=1-r;return 3*t*t*r*e}function Jg(r,e){return 3*(1-r)*r*r*e}function jg(r,e){return r*r*r*e}function ts(r,e,t,n,i){return Yg(r,e)+Kg(r,t)+Jg(r,n)+jg(r,i)}class Ho extends At{constructor(e=new K,t=new K,n=new K,i=new K){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new K){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ts(e,i.x,s.x,o.x,a.x),ts(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Ho.prototype.isCubicBezierCurve=!0;class wc extends At{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ts(e,i.x,s.x,o.x,a.x),ts(e,i.y,s.y,o.y,a.y),ts(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}wc.prototype.isCubicBezierCurve3=!0;class pr extends At{constructor(e=new K,t=new K){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new K;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}pr.prototype.isLineCurve=!0;class Qg extends At{constructor(e=new A,t=new A){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uo extends At{constructor(e=new K,t=new K,n=new K){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(es(e,i.x,s.x,o.x),es(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Uo.prototype.isQuadraticBezierCurve=!0;class Mc extends At{constructor(e=new A,t=new A,n=new A){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(es(e,i.x,s.x,o.x),es(e,i.y,s.y,o.y),es(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Mc.prototype.isQuadraticBezierCurve3=!0;class zo extends At{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new K){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(hl(a,l.x,c.x,u.x,h.x),hl(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new K().fromArray(i))}return this}}zo.prototype.isSplineCurve=!0;var Sc=Object.freeze({__proto__:null,ArcCurve:_c,CatmullRomCurve3:bc,CubicBezierCurve:Ho,CubicBezierCurve3:wc,EllipseCurve:fr,LineCurve:pr,LineCurve3:Qg,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:Mc,SplineCurve:zo});class qg extends At{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new pr(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Sc[i.type]().fromJSON(i))}return this}}class ir extends qg{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new pr(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Uo(this.currentPoint.clone(),new K(e,t),new K(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Ho(this.currentPoint.clone(),new K(e,t),new K(n,i),new K(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new zo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new fr(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vn extends ir{constructor(e){super(e),this.uuid=It(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ir().fromJSON(i))}return this}}const $g={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Cc(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,f;if(n&&(s=s0(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],d=r[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?1/f:0}return as(s,o,t,a,l,f),o}};function Cc(r,e,t,n,i){let s,o;if(i===m0(r,e,t,n)>0)for(s=e;s<t;s+=n)o=dl(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=dl(s,r[s],r[s+1],o);return o&&mr(o,o.next)&&(cs(o),o=o.next),o}function bn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(mr(t,t.next)||Xe(t.prev,t,t.next)===0)){if(cs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function as(r,e,t,n,i,s,o){if(!r)return;!o&&s&&c0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?t0(r,n,i,s):e0(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),cs(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=n0(bn(r),e,t),as(r,e,t,n,i,s,2)):o===2&&i0(r,e,t,n,i,s):as(bn(r),e,t,n,i,s,1);break}}}function e0(r){const e=r.prev,t=r,n=r.next;if(Xe(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(di(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Xe(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function t0(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Xe(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,u=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,h=vo(a,l,e,t,n),d=vo(c,u,e,t,n);let f=r.prevZ,g=r.nextZ;for(;f&&f.z>=h&&g&&g.z<=d;){if(f!==r.prev&&f!==r.next&&di(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Xe(f.prev,f,f.next)>=0||(f=f.prevZ,g!==r.prev&&g!==r.next&&di(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Xe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=h;){if(f!==r.prev&&f!==r.next&&di(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Xe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&di(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Xe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function n0(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!mr(i,s)&&Ic(i,n,n.next,s)&&ls(i,s)&&ls(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),cs(n),cs(n.next),n=r=s),n=n.next}while(n!==r);return bn(n)}function i0(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&d0(o,a)){let l=Ac(o,a);o=bn(o,o.next),l=bn(l,l.next),as(o,e,t,n,i,s),as(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function s0(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Cc(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(h0(c));for(i.sort(r0),s=0;s<i.length;s++)o0(i[s],t),t=bn(t,t.next);return t}function r0(r,e){return r.x-e.x}function o0(r,e){if(e=a0(r,e),e){const t=Ac(e,r);bn(e,e.next),bn(t,t.next)}}function a0(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&di(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),ls(t,r)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&l0(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function l0(r,e){return Xe(r.prev,r,e.prev)<0&&Xe(e.next,r,r.next)<0}function c0(r,e,t,n){let i=r;do i.z===null&&(i.z=vo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,u0(i)}function u0(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function vo(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function h0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function di(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function d0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!f0(r,e)&&(ls(r,e)&&ls(e,r)&&p0(r,e)&&(Xe(r.prev,r,e.prev)||Xe(r,e.prev,e))||mr(r,e)&&Xe(r.prev,r,r.next)>0&&Xe(e.prev,e,e.next)>0)}function Xe(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function mr(r,e){return r.x===e.x&&r.y===e.y}function Ic(r,e,t,n){const i=Ks(Xe(r,e,t)),s=Ks(Xe(r,e,n)),o=Ks(Xe(t,n,r)),a=Ks(Xe(t,n,e));return!!(i!==s&&o!==a||i===0&&Ys(r,t,e)||s===0&&Ys(r,n,e)||o===0&&Ys(t,r,n)||a===0&&Ys(t,e,n))}function Ys(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ks(r){return r>0?1:r<0?-1:0}function f0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Ic(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ls(r,e){return Xe(r.prev,r,r.next)<0?Xe(r,e,r.next)>=0&&Xe(r,r.prev,e)>=0:Xe(r,e,r.prev)<0||Xe(r,r.next,e)<0}function p0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Ac(r,e){const t=new xo(r.i,r.x,r.y),n=new xo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function dl(r,e,t,n){const i=new xo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function cs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function xo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class $t{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return $t.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];fl(e),pl(n,e);let o=e.length;t.forEach(fl);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,pl(n,t[l]);const a=$g.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function fl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function pl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Wn extends Pe{constructor(e=new vn([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ze(i,3)),this.setAttribute("uv",new Ze(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:g0;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let b,_=!1,M,T,y,F;m&&(b=m.getSpacedPoints(u),_=!0,d=!1,M=m.computeFrenetFrames(u,!1),T=new A,y=new A,F=new A),d||(x=0,f=0,g=0,v=0);const Z=a.extractPoints(c);let V=Z.shape;const E=Z.holes;if(!$t.isClockWise(V)){V=V.reverse();for(let O=0,j=E.length;O<j;O++){const ie=E[O];$t.isClockWise(ie)&&(E[O]=ie.reverse())}}const N=$t.triangulateShape(V,E),I=V;for(let O=0,j=E.length;O<j;O++){const ie=E[O];V=V.concat(ie)}function G(O,j,ie){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(ie).add(O)}const B=V.length,R=N.length;function H(O,j,ie){let me,ae,C;const w=O.x-j.x,k=O.y-j.y,q=ie.x-O.x,$=ie.y-O.y,he=w*w+k*k,be=w*$-k*q;if(Math.abs(be)>Number.EPSILON){const ye=Math.sqrt(he),Se=Math.sqrt(q*q+$*$),ge=j.x-k/ye,L=j.y+w/ye,le=ie.x-$/Se,Y=ie.y+q/Se,ve=((le-ge)*$-(Y-L)*q)/(w*$-k*q);me=ge+w*ve-O.x,ae=L+k*ve-O.y;const de=me*me+ae*ae;if(de<=2)return new K(me,ae);C=Math.sqrt(de/2)}else{let ye=!1;w>Number.EPSILON?q>Number.EPSILON&&(ye=!0):w<-Number.EPSILON?q<-Number.EPSILON&&(ye=!0):Math.sign(k)===Math.sign($)&&(ye=!0),ye?(me=-k,ae=w,C=Math.sqrt(he)):(me=w,ae=k,C=Math.sqrt(he/2))}return new K(me/C,ae/C)}const J=[];for(let O=0,j=I.length,ie=j-1,me=O+1;O<j;O++,ie++,me++)ie===j&&(ie=0),me===j&&(me=0),J[O]=H(I[O],I[ie],I[me]);const oe=[];let ne,te=J.concat();for(let O=0,j=E.length;O<j;O++){const ie=E[O];ne=[];for(let me=0,ae=ie.length,C=ae-1,w=me+1;me<ae;me++,C++,w++)C===ae&&(C=0),w===ae&&(w=0),ne[me]=H(ie[me],ie[C],ie[w]);oe.push(ne),te=te.concat(ne)}for(let O=0;O<x;O++){const j=O/x,ie=f*Math.cos(j*Math.PI/2),me=g*Math.sin(j*Math.PI/2)+v;for(let ae=0,C=I.length;ae<C;ae++){const w=G(I[ae],J[ae],me);xe(w.x,w.y,-ie)}for(let ae=0,C=E.length;ae<C;ae++){const w=E[ae];ne=oe[ae];for(let k=0,q=w.length;k<q;k++){const $=G(w[k],ne[k],me);xe($.x,$.y,-ie)}}}const U=g+v;for(let O=0;O<B;O++){const j=d?G(V[O],te[O],U):V[O];_?(y.copy(M.normals[0]).multiplyScalar(j.x),T.copy(M.binormals[0]).multiplyScalar(j.y),F.copy(b[0]).add(y).add(T),xe(F.x,F.y,F.z)):xe(j.x,j.y,0)}for(let O=1;O<=u;O++)for(let j=0;j<B;j++){const ie=d?G(V[j],te[j],U):V[j];_?(y.copy(M.normals[O]).multiplyScalar(ie.x),T.copy(M.binormals[O]).multiplyScalar(ie.y),F.copy(b[O]).add(y).add(T),xe(F.x,F.y,F.z)):xe(ie.x,ie.y,h/u*O)}for(let O=x-1;O>=0;O--){const j=O/x,ie=f*Math.cos(j*Math.PI/2),me=g*Math.sin(j*Math.PI/2)+v;for(let ae=0,C=I.length;ae<C;ae++){const w=G(I[ae],J[ae],me);xe(w.x,w.y,h+ie)}for(let ae=0,C=E.length;ae<C;ae++){const w=E[ae];ne=oe[ae];for(let k=0,q=w.length;k<q;k++){const $=G(w[k],ne[k],me);_?xe($.x,$.y+b[u-1].y,b[u-1].x+ie):xe($.x,$.y,h+ie)}}}Q(),ce();function Q(){const O=i.length/3;if(d){let j=0,ie=B*j;for(let me=0;me<R;me++){const ae=N[me];Me(ae[2]+ie,ae[1]+ie,ae[0]+ie)}j=u+x*2,ie=B*j;for(let me=0;me<R;me++){const ae=N[me];Me(ae[0]+ie,ae[1]+ie,ae[2]+ie)}}else{for(let j=0;j<R;j++){const ie=N[j];Me(ie[2],ie[1],ie[0])}for(let j=0;j<R;j++){const ie=N[j];Me(ie[0]+B*u,ie[1]+B*u,ie[2]+B*u)}}n.addGroup(O,i.length/3-O,0)}function ce(){const O=i.length/3;let j=0;W(I,j),j+=I.length;for(let ie=0,me=E.length;ie<me;ie++){const ae=E[ie];W(ae,j),j+=ae.length}n.addGroup(O,i.length/3-O,1)}function W(O,j){let ie=O.length;for(;--ie>=0;){const me=ie;let ae=ie-1;ae<0&&(ae=O.length-1);for(let C=0,w=u+x*2;C<w;C++){const k=B*C,q=B*(C+1),$=j+me+k,he=j+ae+k,be=j+ae+q,ye=j+me+q;ue($,he,be,ye)}}}function xe(O,j,ie){l.push(O),l.push(j),l.push(ie)}function Me(O,j,ie){fe(O),fe(j),fe(ie);const me=i.length/3,ae=p.generateTopUV(n,i,me-3,me-2,me-1);Ie(ae[0]),Ie(ae[1]),Ie(ae[2])}function ue(O,j,ie,me){fe(O),fe(j),fe(me),fe(j),fe(ie),fe(me);const ae=i.length/3,C=p.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);Ie(C[0]),Ie(C[1]),Ie(C[3]),Ie(C[1]),Ie(C[2]),Ie(C[3])}function fe(O){i.push(l[O*3+0]),i.push(l[O*3+1]),i.push(l[O*3+2])}function Ie(O){s.push(O.x),s.push(O.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return v0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Sc[i.type]().fromJSON(i)),new Wn(n,e.options)}}const g0={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new K(s,o),new K(a,l),new K(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],v=e[s*3],x=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new K(o,1-l),new K(c,1-h),new K(d,1-g),new K(v,1-m)]:[new K(a,1-l),new K(u,1-h),new K(f,1-g),new K(x,1-m)]}};function v0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wo extends Pe{constructor(e=new vn([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ze(i,3)),this.setAttribute("normal",new Ze(s,3)),this.setAttribute("uv",new Ze(o,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;$t.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,m=g.length;x<m;x++){const p=g[x];$t.isClockWise(p)===!0&&(g[x]=p.reverse())}const v=$t.triangulateShape(f,g);for(let x=0,m=g.length;x<m;x++){const p=g[x];f=f.concat(p)}for(let x=0,m=f.length;x<m;x++){const p=f[x];i.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let x=0,m=v.length;x<m;x++){const p=v[x],b=p[0]+h,_=p[1]+h,M=p[2]+h;n.push(b,_,M),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return x0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Wo(n,e.curveSegments)}}function x0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class y0 extends tt{constructor(e){super(),this.type="ShadowMaterial",this.color=new re(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}y0.prototype.isShadowMaterial=!0;class Ri extends tt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Ri.prototype.isMeshStandardMaterial=!0;class kn extends Ri{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}kn.prototype.isMeshPhysicalMaterial=!0;class _0 extends tt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}_0.prototype.isMeshPhongMaterial=!0;class b0 extends tt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}b0.prototype.isMeshToonMaterial=!0;class w0 extends tt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}w0.prototype.isMeshNormalMaterial=!0;class M0 extends tt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}M0.prototype.isMeshLambertMaterial=!0;class S0 extends tt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}S0.prototype.isMeshMatcapMaterial=!0;class C0 extends zn{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}C0.prototype.isLineDashedMaterial=!0;const Oe={arraySlice:function(r,e,t){return Oe.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<t||g>=n)){h.push(c.times[f]);for(let v=0;v<u;++v)d.push(c.values[f*u+v])}}h.length!==0&&(c.times=Oe.convertArray(h,c.times.constructor),c.values=Oe.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=a.times.length-1;let v;if(s<=a.times[0]){const m=u,p=h-u;v=Oe.arraySlice(a.values,m,p)}else if(s>=a.times[g]){const m=g*h+u,p=m+h-u;v=Oe.arraySlice(a.values,m,p)}else{const m=a.createInterpolant(),p=u,b=h-u;m.evaluate(s),v=Oe.arraySlice(m.resultBuffer,p,b)}l==="quaternion"&&new vt().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let m=0;m<x;++m){const p=m*f+d;if(l==="quaternion")vt.multiplyQuaternionsFlat(c.values,p,v,0,c.values,p);else{const b=f-d*2;for(let _=0;_<b;++_)c.values[p+_]-=v[_]}}}return r.blendMode=zl,r}};class en{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}en.prototype.beforeStart_=en.prototype.copySampleValue_;en.prototype.afterEnd_=en.prototype.copySampleValue_;class I0 extends en{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ui,endingEnd:ui}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hi:s=e,a=2*t-n;break;case er:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hi:o=e,l=2*n-t;break;case er:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,x=v*g,m=-d*x+2*d*v-d*g,p=(1+d)*x+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*x+(1.5+f)*v+.5*g,_=f*x-f*v;for(let M=0;M!==a;++M)s[M]=m*o[u+M]+p*o[c+M]+b*o[l+M]+_*o[h+M];return s}}class Tc extends en{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class A0 extends en{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oe.convertArray(t,this.TimeBufferType),this.values=Oe.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oe.convertArray(e.times,Array),values:Oe.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new A0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new I0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ss:t=this.InterpolantFactoryMethodDiscrete;break;case xi:t=this.InterpolantFactoryMethodLinear;break;case yr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return xi;case this.InterpolantFactoryMethodSmooth:return yr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Oe.arraySlice(n,s,o),this.values=Oe.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Oe.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Oe.arraySlice(this.times),t=Oe.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===yr,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Oe.arraySlice(e,0,o),this.values=Oe.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Oe.arraySlice(this.times,0),t=Oe.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Dt.prototype.TimeBufferType=Float32Array;Dt.prototype.ValueBufferType=Float32Array;Dt.prototype.DefaultInterpolation=xi;class Li extends Dt{}Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ss;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;class Ec extends Dt{}Ec.prototype.ValueTypeName="color";class us extends Dt{}us.prototype.ValueTypeName="number";class T0 extends en{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)vt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Pn extends Dt{InterpolantFactoryMethodLinear(e){return new T0(this.times,this.values,this.getValueSize(),e)}}Pn.prototype.ValueTypeName="quaternion";Pn.prototype.DefaultInterpolation=xi;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;class Bi extends Dt{}Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=ss;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends Dt{}hs.prototype.ValueTypeName="vector";class yo{constructor(e,t=-1,n,i=Co){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=It(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(R0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Dt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Oe.getKeyframeOrder(l);l=Oe.sortedArray(l,1,u),c=Oe.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new us(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,v){if(f.length!==0){const x=[],m=[];Oe.flattenJSON(f,x,m,g),x.length!==0&&v.push(new h(d,x,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const x=[],m=[];for(let p=0;p!==d[g].morphTargets.length;++p){const b=d[g];x.push(b.time),m.push(b.morphTarget===v?1:0)}i.push(new us(".morphTargetInfluence["+v+"]",x,m))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(hs,f+".position",d,"pos",i),n(Pn,f+".quaternion",d,"rot",i),n(hs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function E0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return Ec;case"quaternion":return Pn;case"bool":case"boolean":return Li;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function R0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=E0(r.type);if(r.times===void 0){const t=[],n=[];Oe.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Rc{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const L0=new Rc;class Ht{constructor(e){this.manager=e!==void 0?e:L0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Yt={};class gr extends Ht{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Yt[e]!==void 0){Yt[e].push({onLoad:t,onProgress:n,onError:i});return}Yt[e]=[],Yt[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(o).then(a=>{if(a.status===200||a.status===0){a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=Yt[e],c=a.body.getReader(),u=a.headers.get("Content-Length"),h=u?parseInt(u):0,d=h!==0;let f=0;return new ReadableStream({start(g){v();function v(){c.read().then(({done:x,value:m})=>{if(x)g.close();else{f+=m.byteLength;const p=new ProgressEvent("progress",{lengthComputable:d,loaded:f,total:h});for(let b=0,_=l.length;b<_;b++){const M=l[b];M.onProgress&&M.onProgress(p)}g.enqueue(m),v()}})}}})}else throw Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>{const l=new Response(a);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(a=>{bi.add(e,a);const l=Yt[e];delete Yt[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onLoad&&h.onLoad(a)}this.manager.itemEnd(e)}).catch(a=>{const l=Yt[e];delete Yt[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onError&&h.onError(a)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Lc extends Ht{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=lr("img");function l(){u(),bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Bc extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=new cr,o=new Lc(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class vr extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=new nt,o=new Lc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Vt extends Ne{constructor(e,t=1){super(),this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Vt.prototype.isLight=!0;class B0 extends Vt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.groundColor=new re(t)}copy(e){return Vt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}B0.prototype.isHemisphereLight=!0;const ml=new pe,gl=new A,vl=new A;class ko{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(gl),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gc extends ko{constructor(){super(new dt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Gc.prototype.isSpotLightShadow=!0;class Fc extends Vt{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new Gc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Fc.prototype.isSpotLight=!0;const xl=new pe,Zi=new A,$r=new A;class Nc extends ko{constructor(){super(new dt(90,1,.5,500)),this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zi),$r.copy(n.position),$r.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($r),n.updateMatrixWorld(),i.makeTranslation(-Zi.x,-Zi.y,-Zi.z),xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl)}}Nc.prototype.isPointLightShadow=!0;class Pc extends Vt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Pc.prototype.isPointLight=!0;class Vc extends ko{constructor(){super(new wn(-5,5,5,-5,.5,500))}}Vc.prototype.isDirectionalLightShadow=!0;class Dc extends Vt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.target=new Ne,this.shadow=new Vc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Dc.prototype.isDirectionalLight=!0;class Hc extends Vt{constructor(e,t){super(e,t),this.type="AmbientLight"}}Hc.prototype.isAmbientLight=!0;class G0 extends Vt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}G0.prototype.isRectAreaLight=!0;class Uc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Uc.prototype.isSphericalHarmonics3=!0;class Oo extends Vt{constructor(e=new Uc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Oo.prototype.isLightProbe=!0;class xn{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class F0 extends Pe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}F0.prototype.isInstancedBufferGeometry=!0;class zc extends Ht{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){bi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}zc.prototype.isImageBitmapLoader=!0;let Js;const N0={getContext:function(){return Js===void 0&&(Js=new(window.AudioContext||window.webkitAudioContext)),Js},setContext:function(r){Js=r}};class P0 extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new gr(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);N0.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class V0 extends Oo{constructor(e,t,n=1){super(void 0,n);const i=new re().set(e),s=new re().set(t),o=new A(i.r,i.g,i.b),a=new A(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}V0.prototype.isHemisphereLightProbe=!0;class D0 extends Oo{constructor(e,t=1){super(void 0,t);const n=new re().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}D0.prototype.isAmbientLightProbe=!0;class Wc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yl(){return(typeof performance>"u"?Date:performance).now()}class H0 extends Ne{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class U0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){vt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;vt.multiplyQuaternionsFlat(e,o,e,t,e,n),vt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Zo="\\[\\]\\.:\\/",z0=new RegExp("["+Zo+"]","g"),Xo="[^"+Zo+"]",W0="[^"+Zo.replace("\\.","")+"]",k0=/((?:WC+[\/:])*)/.source.replace("WC",Xo),O0=/(WCOD+)?/.source.replace("WCOD",W0),Z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xo),X0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xo),Y0=new RegExp("^"+k0+O0+Z0+X0+"$"),K0=["material","materials","bones"];class J0{constructor(e,t,n){const i=n||Fe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Fe{constructor(e,t,n){this.path=t,this.parsedPath=n||Fe.parseTrackName(t),this.node=Fe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Fe.Composite(e,t,n):new Fe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z0,"")}static parseTrackName(e){const t=Y0.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);K0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Fe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Fe.Composite=J0;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class j0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:ui,endingEnd:ui};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Rh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case zl:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Co:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Lh;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Eh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=hi,i.endingEnd=hi):(e?i.endingStart=this.zeroSlopeAtStart?hi:ui:i.endingStart=er,t?i.endingEnd=this.zeroSlopeAtEnd?hi:ui:i.endingEnd=er)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class Q0 extends Hn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let g=u[f];if(g!==void 0)o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new U0(Fe.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Tc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?yo.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Co),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new j0(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?yo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Q0.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class q0 extends Ei{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}q0.prototype.isInstancedInterleavedBuffer=!0;const hn=new A,js=new pe,eo=new pe;class $0 extends gs{constructor(e){const t=kc(e),n=new Pe,i=[],s=[],o=new re(0,0,1),a=new re(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Ze(i,3)),n.setAttribute("color",new Ze(s,3));const l=new zn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");eo.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(js.multiplyMatrices(eo,a.matrixWorld),hn.setFromMatrixPosition(js),i.setXYZ(o,hn.x,hn.y,hn.z),js.multiplyMatrices(eo,a.parent.matrixWorld),hn.setFromMatrixPosition(js),i.setXYZ(o+1,hn.x,hn.y,hn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function kc(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,kc(r.children[t]));return e}class ev extends gs{constructor(e=10,t=10,n=4473924,i=8947848){n=new re(n),i=new re(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=d===s?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new Pe;u.setAttribute("position",new Ze(l,3)),u.setAttribute("color",new Ze(c,3));const h=new zn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}class tv extends gs{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Pe;i.setAttribute("position",new Ze(t,3)),i.setAttribute("color",new Ze(n,3));const s=new zn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new re,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class nv{constructor(){this.type="ShapePath",this.color=new re,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ir,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(p){const b=[];for(let _=0,M=p.length;_<M;_++){const T=p[_],y=new vn;y.curves=T.curves,b.push(y)}return b}function i(p,b){const _=b.length;let M=!1;for(let T=_-1,y=0;y<_;T=y++){let F=b[T],Z=b[y],V=Z.x-F.x,E=Z.y-F.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(F=b[y],V=-V,Z=b[T],E=-E),p.y<F.y||p.y>Z.y)continue;if(p.y===F.y){if(p.x===F.x)return!0}else{const ee=E*(p.x-F.x)-V*(p.y-F.y);if(ee===0)return!0;if(ee<0)continue;M=!M}}else{if(p.y!==F.y)continue;if(Z.x<=p.x&&p.x<=F.x||F.x<=p.x&&p.x<=Z.x)return!0}}return M}const s=$t.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let a,l,c;const u=[];if(o.length===1)return l=o[0],c=new vn,c.curves=l.curves,u.push(c),u;let h=!s(o[0].getPoints());h=e?!h:h;const d=[],f=[];let g=[],v=0,x;f[v]=void 0,g[v]=[];for(let p=0,b=o.length;p<b;p++)l=o[p],x=l.getPoints(),a=s(x),a=e?!a:a,a?(!h&&f[v]&&v++,f[v]={s:new vn,p:x},f[v].s.curves=l.curves,h&&v++,g[v]=[]):g[v].push({h:l,p:x[0]});if(!f[0])return n(o);if(f.length>1){let p=!1;const b=[];for(let _=0,M=f.length;_<M;_++)d[_]=[];for(let _=0,M=f.length;_<M;_++){const T=g[_];for(let y=0;y<T.length;y++){const F=T[y];let Z=!0;for(let V=0;V<f.length;V++)i(F.p,f[V].p)&&(_!==V&&b.push({froms:_,tos:V,hole:y}),Z?(Z=!1,d[V].push(F)):p=!0);Z&&d[_].push(F)}}b.length>0&&(p||(g=d))}let m;for(let p=0,b=f.length;p<b;p++){c=f[p].s,u.push(c),m=g[p];for(let _=0,M=m.length;_<M;_++)c.holes.push(m[_].h)}return u}}const iv=new Float32Array(1);new Int32Array(iv.buffer);At.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(At.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};ir.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};ev.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};$0.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Ht.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),xn.extractUrlBase(r)};Ht.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Tt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Tt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Tt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Tt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Tt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};Un.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ur.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};lt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};lt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};lt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};lt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};lt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};lt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};pe.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};pe.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};pe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new A().setFromMatrixColumn(this,3)};pe.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};pe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};pe.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};pe.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};pe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};pe.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};pe.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};pe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};pe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};pe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};pe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};pe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};pe.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};pe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};pe.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};pe.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Jt.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};vt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};vt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Ci.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Ci.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Ci.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};et.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};et.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};et.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};et.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};et.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};et.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),et.getBarycoord(r,e,t,n,i)};et.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),et.getNormal(r,e,t,n)};vn.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};vn.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Wn(this,r)};vn.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Wo(this,r)};K.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};K.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};K.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};A.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};A.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};A.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};A.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};A.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};A.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};A.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};A.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};A.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};He.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};He.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ne.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Ne.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ne.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};Ne.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ne.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ne.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});We.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(We.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Bh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Fo.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};dt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(Vt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(Je.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===tr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(tr)}}});Je.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?tr:rs),this};Je.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Je.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Pe.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Pe.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new Je(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};Pe.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};Pe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Pe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Pe.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Pe.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Pe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Ei.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?tr:rs),this};Ei.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Wn.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Wn.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Wn.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};ms.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(tt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new re}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Pl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(ft.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});De.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};De.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};De.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};De.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};De.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};De.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};De.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};De.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};De.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};De.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};De.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};De.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};De.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};De.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};De.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};De.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};De.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};De.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};De.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};De.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};De.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};De.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};De.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};De.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};De.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(De.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?xt:mt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(fc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(pt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});H0.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new P0().load(r,function(n){e.setBuffer(n)}),this};Ro.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Ro.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};Si.crossOrigin=void 0;Si.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new vr;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};Si.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Bc;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};Si.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Si.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);let _l=Date.now();const sv=()=>{const r=Date.now(),e=r-_l;return _l=r,e/1e3};var sr={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class vs{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const rv=new wn(-1,1,1,-1,0,1),Yo=new Pe;Yo.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3));Yo.setAttribute("uv",new Ze([0,2,0,0,2,0],2));class Oc{constructor(e){this._mesh=new We(Yo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bl extends vs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nr.clone(e.uniforms),this.material=new ft({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Oc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class wl extends vs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class ov extends vs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class av{constructor(e,t){if(this.renderer=e,t===void 0){const n={minFilter:rt,magFilter:rt,format:ot},i=e.getSize(new K);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new pt(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],sr===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),bl===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new bl(sr),this.clock=new Wc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wl!==void 0&&(o instanceof wl?n=!0:o instanceof ov&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new wn(-1,1,1,-1,0,1);const Zc=new Pe;Zc.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3));Zc.setAttribute("uv",new Ze([0,2,0,0,2,0],2));class lv extends vs{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Ml={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class wi extends vs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new K(e.x,e.y):new K(256,256),this.clearColor=new re(0,0,0);const s={minFilter:rt,magFilter:rt,format:ot};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pt(o,a,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new pt(o,a,s);f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const g=new pt(o,a,s);g.texture.name="UnrealBloomPass.v"+d,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),o=Math.round(o/2),a=Math.round(a/2)}Ml===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=Ml;this.highPassUniforms=nr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new K(o,a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,sr===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const h=sr;this.copyUniforms=nr.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new ft({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:oo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new re,this.oldClearAlpha=1,this.basic=new st,this.fsQuad=new Oc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new K(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=wi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=wi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new ft({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}wi.BlurDirectionX=new K(1,0);wi.BlurDirectionY=new K(0,1);const rr=`
varying vec2 vUv;
void main()
{
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Sl=`#define PI 3.1415926538

#define LINE_SIZE 288.0
#define LINE_STRENGTH 0.05
#define LINE_OFFSET 2.0

#define NOISE_STRENGTH 0.2

uniform sampler2D uDiffuse;
uniform float uTime;
uniform float uProgress;
varying vec2 vUv;

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}


float squareWave(float x){
    return (
         (4.0/PI * sin(PI*LINE_SIZE*x))
        +(4.0/PI * 1.0/3.0 * sin(3.0*PI*LINE_SIZE*x))
        +(4.0/PI * 1.0/5.0 * sin(5.0*PI*LINE_SIZE*x))
        - LINE_OFFSET
        )*LINE_STRENGTH ;
}

vec4 progress(){
     if (vUv.y < uProgress && vUv.y > uProgress - 0.2) {
        return vec4(0.1,0.1,0.1,1.0) * (uProgress - vUv.y) ;
    }
        else {return vec4(0,0,0,0);}
}

void main()
        {
            vec4 color = texture2D(uDiffuse, vUv);
            float r = rand(vUv*uTime);

            vec4 p = progress();
            gl_FragColor = color  +  (vec4(r,r,r,0) * (p.a + NOISE_STRENGTH)) + squareWave(vUv.y);            
        }`,cv=`#define LAG 0.8
#define LAG_INVERSE 0.2

uniform sampler2D uDiffuse;
uniform sampler2D uLagTex;
varying vec2 vUv;

void main()
{
    vec4 Diffuse = texture2D(uDiffuse, vUv);
    vec4 LagTex = texture2D(uLagTex, vUv);

    gl_FragColor = (Diffuse * LAG_INVERSE) + (LagTex * LAG);            
}`;class _o{constructor(e,t,n){zt(this,"sceneRTT");zt(this,"cameraRTT");zt(this,"outputTexture");zt(this,"shader");const i=t/n;this.sceneRTT=new ms,this.cameraRTT=new wn(-.5*i,.5*i,.5,-.5,1,3),this.cameraRTT.position.set(0,0,1),this.sceneRTT.add(this.cameraRTT),this.cameraRTT.position.set(0,0,1),this.outputTexture=new pt(t,n,{format:qt}),this.shader=new ft(e);const s=new We(new Qt(1*i,1,1,1),this.shader);this.sceneRTT.add(s),this.sceneRTT.add(new tv(0))}render(e,t){e.setRenderTarget(this.outputTexture),e.clear(),e.render(this.sceneRTT,this.cameraRTT)}}class uv{constructor(e,t,n){zt(this,"outputCopy");zt(this,"shaderToScreen1");zt(this,"outputTexture");zt(this,"lagMat");this.lagMat=new ft,this.shaderToScreen1=new _o({uniforms:{uDiffuse:{value:e.texture},uLagTex:{value:null},uNeedUpdate:{value:!1}},vertexShader:rr,fragmentShader:cv},t,n),this.outputTexture=this.shaderToScreen1.outputTexture,this.outputCopy=new _o({uniforms:{uDiffuse:{value:this.outputTexture.texture}},vertexShader:rr,fragmentShader:"uniform sampler2D uDiffuse; varying vec2 vUv; void main() {gl_FragColor = texture2D(uDiffuse, vUv);}"},t,n),this.shaderToScreen1.shader.uniforms.uLagTex.value=this.outputCopy.outputTexture.texture}render(e,t){this.shaderToScreen1.render(e),this.outputCopy.render(e)}}function hv(r,e,t){const i=new wn(-.1,1.496,.1,-1.1,1,3);t.add(i),i.position.set(0,0,1);const s=new pt(576*1.33,576,{format:qt}),o=new av(e,s);o.renderToScreen=!1;const a=new lv(t,i);o.addPass(a);const l=new ft({uniforms:{uDiffuse:{value:null},uTime:{value:1},uProgress:{value:1.2}},vertexShader:rr,fragmentShader:Sl}),c=new wi(new K(128,128),1.1,.4,0);o.addPass(c);const u=new uv(o.readBuffer,576*1.33,576);l.uniforms.uDiffuse.value=u.outputTexture.texture;let h=1.2;const d=(x,m)=>{l.uniforms.uTime.value=m,l.uniforms.uProgress.value=h,g.shader.uniforms.uTime.value=m,g.shader.uniforms.uProgress.value=h,g.render(e),h-=x*.2,h<0&&(h=1.2),u.render(e),o.render()},f=r.environmentMapTexture;f.encoding=xt;const g=new _o({uniforms:{uDiffuse:{value:u.outputTexture.texture},uTime:{value:1},uProgress:{value:1.2}},vertexShader:rr,fragmentShader:Sl},576*1.33,576);g.outputTexture.texture.encoding=xt;const v=new Ri;return v.metalness=0,v.roughness=.125,v.envMap=f,v.envMapIntensity=.7,v.map=g.outputTexture.texture,{tick:d,material:v}}class to extends Wn{constructor(e,t={}){const n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Pe;const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t),this.type="TextGeometry"}}function dv(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Pe;let c=0;for(let u=0;u<r.length;++u){const h=r[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(l.userData.mergedUserData=l.userData.mergedUserData||[],l.userData.mergedUserData.push(h.userData),e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=r[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Cl(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][d]);const g=Cl(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Cl(r){let e,t,n,i=0;for(let a=0;a<r.length;++a){const l=r[a];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=l.array.length}const s=new e(i);let o=0;for(let a=0;a<r.length;++a)s.set(r[a].array,o),o+=r[a].array.length;return new Je(s,t,n)}const no="#f99021",Ln=function(){let r=.05,e=r,t=r,n=e*2,i=t*.4;return{font:void 0,size:r,height:e,width:t,leading:n,tracking:i}}(),ze=function(){return{font:void 0,size:.04,height:.04,width:.032,leading:.08,tracking:.00704}}(),io=function(){return{font:void 0,size:.03,height:.03,width:.024,leading:.075,tracking:.00528}}(),so=function(){const t=.022000000000000002,n=.0275*2.5,i=t*.22;return{font:void 0,size:.0275,height:.0275,width:t,leading:n,tracking:i}}(),fv=function(){const t=.020000000000000004,n=.025*1.6;return{font:void 0,size:.025,height:.025,width:t,leading:n,tracking:t}}();function pv(r,e){Ln.font=r.publicPixelFont,ze.font=r.chillFont,io.font=r.chillFont,so.font=r.chillFont;const t=new Pt;e.add(t);const n=new st({color:no}),i=new We(new to("",{font:Ln.font,size:Ln.size,height:1e-4,curveSegments:12,bevelEnabled:!1}),n);t.add(i);const s=new We(new to("",{font:Ln.font,size:Ln.size,height:1e-4,curveSegments:12,bevelEnabled:!1}),new st({color:0}));t.add(s);const o=new We(new Qt(0,0),new st({color:no}));t.add(o);const a=new We(new Qt(ze.size,ze.size*1.6),n);a.position.z=-.1,t.add(a);let l;function c(I){l&&(l.material.color=new re(I?"black":no))}let u=1;function h(I){const G={x:f.x,y:-f.y};c(!1),l=void 0;const B=ze.width+ze.tracking,R=Math.floor(screenWidth/B);I!==void 0&&(G.x=f.x+B*((I+p)%R),G.y=-(f.y+ze.leading*Math.floor((I+p)/R)),I<d.length&&(G.y=d[I].position.y,c(!1),l=d[I]));let H=G.x+ze.size/2,J=G.y-ze.size/1.9;H>screenWidth&&(J-=ze.leading,H=ze.size/2),a.position.x=H,a.position.y=J,u=0}let d=[];const f={x:0,y:0};function g(I){I.wrap=I.wrap!==void 0?I.wrap:!1,I.isWord=I.isWord!==void 0?I.isWord:!1,I.updateCharNextLoc=I.updateCharNextLoc!==void 0?I.updateCharNextLoc:!0;const G=(I.font.width+I.font.tracking)*I.str.length,B=I.isWord?(I.font.width+I.font.tracking)*(I.str.length-1):I.font.width*I.str.length;let R=f.x,H=f.y;I.wrap&&B+R>screenWidth&&(H+=I.font.leading,R=0);const J={colorText:void 0,blackText:void 0,bg:void 0},oe=new to(I.str,{font:I.font.font,size:I.font.size,height:1e-4,curveSegments:12,bevelEnabled:!1});if(I.updateCharNextLoc?oe.translate(R,-I.font.height-H,-.001):oe.translate(0,-I.font.height,-.001),I.highlight){const ne=new Qt(G+I.font.tracking*2,I.font.height+I.font.leading/2,1,1);ne.translate(G/2-I.font.tracking/2+R,-I.font.height/2-H,-.01),J.blackText=oe,J.bg=ne}else J.colorText=oe;return I.updateCharNextLoc&&(f.x=G+R,f.y=H),J}function v(I,G){const B=I.geometry;G.push(B),I.geometry=dv(G),B.dispose()}function x(I){f.x=0,f.y+=I.leading}function m(I){const G=f.y,B=[];let R;for(let te=0;te<I.length;te++)if(I[te]!=="\r")if(R===void 0&&I[te]==="#"){let U="h1";te+1<I.length&&I[te+1]==="#"&&(U="h2",te++,te+1<I.length&&I[te+1]==="#"&&(U="h3",te++)),te+1<I.length&&I[te+1]===" "&&te++,R={type:U,emphasis:!1,value:""}}else I[te]===`
`?(R!==void 0&&(B.push(R),R=void 0),B.push({type:"br",emphasis:!1,value:""})):R===void 0&&I[te]==="!"?R={type:"img",emphasis:!1,value:""}:R===void 0?R={type:"p",emphasis:!1,value:I[te]}:I[te]==="*"?R===void 0?R={type:"p",emphasis:!0,value:""}:(B.push(R),R={type:R.type,emphasis:!R.emphasis,value:""}):R.value+=I[te];R!==void 0&&B.push(R);const H=[],J=[],oe=[];for(let te=0;te<B.length;te++){const U=B[te],Q=[];switch(U.type){case"h1":Q.push(g({str:U.value,font:Ln,highlight:U.emphasis}));break;case"h2":Q.push(g({str:U.value,font:ze,highlight:U.emphasis}));break;case"h3":Q.push(g({str:U.value,font:io,highlight:U.emphasis}));break;case"img":ee(U.value);break;case"p":const ce=U.value.split(" ");for(let xe of ce)Q.push(g({str:xe+" ",font:so,highlight:U.emphasis,wrap:!0,isWord:!0}));break;case"br":let W=fv;if(te>0)switch(B[te-1].type){case"h1":W=Ln;break;case"h2":W=ze;break;case"h3":W=io;break;case"p":W=so;break}x(W);break}for(const ce of Q)ce.colorText&&H.push(ce.colorText),ce.blackText&&J.push(ce.blackText),ce.bg&&oe.push(ce.bg)}return v(i,H),v(s,J),v(o,oe),f.y-G}let p=0;function b(I){const G=ze.width+ze.tracking,B=Math.floor(screenWidth/G);let R=0;const H=I.split(`
`);for(let J=0;J<H.length;J++){const oe=[];for(const te of H[J]){const U=g({str:te,font:ze,updateCharNextLoc:!1}).colorText;U&&oe.push(U)}p=0,M=0,T(oe,(te,U,Q)=>{te.translate(U,Q,0)},!1),v(i,oe);const ne=Math.floor(oe.length/B);for(let te=0;te<ne;te++)R+=1,x(ze);J<H.length-1?(x(ze),R+=1):(p=H[J].length+1,h(0))}return R}function _(I){for(const G of I)t.remove(G),G.geometry.dispose(),G.material.dispose()}let M=0;function T(I,G,B){const R=ze.width+ze.tracking,H=Math.floor(screenWidth/R);for(let J=0;J<I.length;J++){const oe=f.x+R*((J+p)%H),ne=-(f.y+ze.leading*Math.floor((J+p)/H));G(I[J],oe,ne)}if(B){const J=Math.floor((I.length+p)/H);J>M,V(J-M,"lines"),M=J}}function y(I,G){if(I.type==="add"){if(I.loc==="end"){a.visible=!0;for(const B of I.str){const R=new We(g({str:B,font:ze,updateCharNextLoc:!1}).colorText,n.clone());d.push(R),T(d,(H,J,oe)=>{H=H,H.position.set(J,oe,0),t.add(H)},!0)}}else if(typeof I.loc=="number"){const B=[];for(const R of I.str)B.push(new We(g({str:R,font:ze,updateCharNextLoc:!1}).colorText,n.clone()));d=[...d.slice(0,I.loc),...B,...d.slice(I.loc,d.length)],T(d,(R,H,J)=>{R=R,R.position.set(H,J,0),t.add(R)},!0)}}else if(I.type==="del"){if(I.loc==="end"){const B=d.slice(-I.str.length);d=d.slice(0,-I.str.length),T(d,(R,H,J)=>{R=R,R.position.set(H,J,0)},!0),_(B)}else if(typeof I.loc=="number"){const B=d.slice(I.loc,I.loc+I.str.length);_(B),d=[...d.slice(0,I.loc),...d.slice(I.loc+I.str.length,d.length)],T(d,(R,H,J)=>{R=R,R.position.set(H,J,0)},!0)}}h(G)}function F(){const I=[];for(const H of d)H.geometry.translate(H.position.x,H.position.y,0),I.push(H.geometry),H.material.dispose();v(i,I);const G=ze.width+ze.tracking,B=Math.floor(screenWidth/G),R=Math.floor((d.length+p)/B);f.y+=ze.leading*R}let Z=t.position.y;function V(I,G,B={updateMaxScroll:!0,moveView:!0}){let R=I;G==="lines"&&(R*=ze.leading),B.moveView&&(t.position.y+=R),B.updateMaxScroll&&(Z+=R),t.position.y<0&&(t.position.y=0),t.position.y>Z&&(t.position.y=Z)}function E(){t.position.y!==Z&&(t.position.y=Z)}function ee(I){const G=I.match(/\(.+\)/);if(!G||G.length===0)return;const[B,R]=G[0].slice(1,-1).split("?"),H=new URLSearchParams(R),J=parseFloat(H.get("aspect")??"");if(Number.isNaN(J))throw new Error(`Error for image at: '${B}'. Image must have aspect ratio like this: '/path/to/image?aspect=1.5'`);const oe=parseFloat(H.get("width")??""),ne=Number.isNaN(oe)?1:oe,te=ne/J,U=new We(new Qt(ne,te,1,1),new st({color:0}));U.position.set(1.4/2,-te*.5-f.y,-.02),H.get("noflow")||(f.y+=te),t.add(U),new vr().load(B,ce=>{ce.magFilter=qe,U.material=new st({map:ce})})}function N(I,G){u>1&&Math.floor(G*2)%2==0?(a.visible=!1,c(!1)):(a.visible=!0,c(!0)),u+=I}return{tick:N,userInput:y,placeMarkdown:m,placeText:b,scroll:V,scrollToEnd:E,freezeInput:F}}const Xc=`!(/images/vin-title.png?aspect=2&noflow=true&width=1.33)


##   Hi there,

#  *I'm Vineet*

##   • Software Engineer
##   • Creative Coder





### Welcome to Vineet-Linux 1.0 LTS
### →→ Scroll or type "help" to get started
`,mv=`



# Hi there

I'm Vineet Sahu — a software engineer who turns fuzzy product asks into fast, maintainable, and polished web interfaces using React, Next.js, Astro and TypeScript. I also build interactive visuals with Three.js and compact AI-powered tools.

### Outside the code
Curious about design, economics and emerging tech. I split my time between the gym, mountain trails, and spiritual practice — staying disciplined, curious and grounded makes me a better engineer and an easier person to build with.

Type cd ~/projects then ls to see details of some of the projects I’ve built.
`,gv=`



# Contact
## Reach out on *LinkedIn*

https://www.linkedin.com/in/vineetsahu01


## Check out my work on *GitHub*

https://github.com/vineet-00


## Send me an *Email*

vineetsahu1901@gmail.com
`,vv=`



## *DataTide*

DataTide is a visual, no-code/low-code web scraper: design scraping workflows on a React Flow canvas, run them with headless browser automation, and extract structured data using AI-assisted parsers.

### Features
- Launch Browser / Navigate: start Puppeteer, load pages, and capture HTML.  
- Element ops: Extract text, Fill input, Click element, Scroll to element, Wait for element.  
- AI Extraction: use Gemini AI to convert HTML into structured JSON via custom prompts.  
- JSON tools: read or build JSON objects inside workflows.  
- Delivery: send results via webhooks or persist to PostgreSQL.  
- Billing: Stripe-powered subscription and billing page for premium features.

### Stack & tooling
Next.js, React, React Flow, Puppeteer, Gemini AI, PostgreSQL + Prisma, Stripe, Tailwind CSS, TypeScript, Axios.
`,xv=`



## *Creative p5.js Collection*

### • p5.js, JavaScript, Generative Art,
### • Simulations, WEBGL, Games, Data Visualization

A curated collection of 50+ creative coding experiments built with p5.js — ranging from generative art to physics-based simulations. The project includes classic systems like flow fields, fractal trees, particle swarms, and diffusion-limited aggregation; alongside interactive sketches such as pathfinding visualizers (A Star, Dijkstra), evolutionary algorithms, Markov text generators, and TF–IDF-based text analysis tools.
`,yv=`



## *RenderDesk (This Website)*

### • TypeScript, WebGL,
### • Shader Language, Web Dev

RenderDesk is a small, playful portfolio built with TypeScript and Three.js. It includes an interactive 3D retro computer, a tiny UNIX-style shell, a virtual file system, a Markdown interpreter/renderer, and a compact text layout engine. The project explores hands-on WebGL UI patterns with an emphasis on clarity, performance and reusability.
`,_v=`



## *Issue Tracking App*

### • Next.js, TypeScript, PostgreSQL (Instagres),
### • Tailwind CSS, Prisma, Authentication, CRUD

Issue Tracking App is a focused issue-management system inspired by modern trackers.  
The project implements the essential workflows you expect from a lightweight tracker: secure authentication, create, view, edit and delete issues, plus a responsive list view with simple filters.

Built with Next.js and TypeScript, styled with Tailwind and backed by PostgreSQL (Instagres). The code emphasises clear server routes, type-safe models (Prisma), and a small, auditable API surface suitable for production.
`,bv=`



## *Zentry*

### • React, GSAP, TailwindCSS

A motion-first landing inspired by the Awwwards-winning Zentry.  
Built with React for structure, GSAP for expressive timelines, and Tailwind for rapid layout. The project explores scroll-driven choreography, layered parallax, and reusable animation primitives that make the UI feel tactile and deliberate.

The build emphasises:
- clear motion systems (timelines & staggered reveals),
- performance and accessibility (reduced-motion, lazy assets),
- and compact, reusable React components that encapsulate animation behaviour.
`,wv=`



## Welcome to Vineet-Linux 1.0 LTS



#  Hi there,
#  *I'm Vineet*
#  -Creative Developer
##     — Background in Information Technology
##        (RGPV University, India)
##
###   *Scroll* or type "help" to get started
`,ns={name:"/",children:[{name:"bin",children:[]},{name:"dev",children:[]},{name:"lib64",children:[]},{name:"media",children:[]}]};function Yc(r){for(const e in r){const t=e.split("/").slice(2);let n=ns;t.forEach((i,s,o)=>{if(s===o.length-1)n.children.push({name:i,data:r[e]});else{let l=n.children.find(c=>c.name===i);l||(l={name:i,children:[]},n.children.push(l)),n=l}})}}Yc(Object.assign({"../file-system/home/user/about/about.md":mv,"../file-system/home/user/contact/contact.md":gv,"../file-system/home/user/projects/00-dataTide.md":vv,"../file-system/home/user/projects/01-CreativeProject.md":xv,"../file-system/home/user/projects/02-RenderDesk.md":yv,"../file-system/home/user/projects/03-issueTrackingApp.md":_v,"../file-system/home/user/projects/04-zentry.md":bv,"../file-system/home/user/title/title-legacy.md":wv,"../file-system/home/user/title/title.md":Xc}));Yc(Object.assign({}));console.log(ns);function Gi(){function r(o){const a=o.split("/");return a.length>0&&a.at(-1)===""&&a.pop(),a}function e(o,a){for(const l of a)switch(l){case"":o=[ns];break;case"..":o.length>1&&o.pop();break;case"~":o=n();break;case".":break;default:const c=o.at(-1);if(!c||!("children"in c))return;const u=c.children.find(h=>h.name===l);if(!u)return;o.push(u);break}return o}function t(o){return o[o.length-1].children}function n(){const o=ns.children.find(l=>l.name==="home"),a=o.children.find(l=>l.name==="user");return[ns,o,a]}function i(o,a){return e([...o],r(a))}function s(o,a,l){const c=r(a),u=c.pop();if(u===void 0)return"bad_args";const h=e([...o],c),d=h==null?void 0:h.at(-1);return!d||!("children"in d)?"bad_path":d.children.find(f=>f.name===u)?"file_exists":(d.children.push(l==="folder"?{name:u,children:[]}:{name:u,data:""}),"ok")}return{getChildren:t,goHome:n,goto:i,make:s}}function Mv(r,e){const t=Gi(),n={name:"cd",short:"change directory",long:""};return{docs:n,app:(s,o)=>{var l;if(o.find(c=>c==="-h"||c==="-help")){r(`
${n.name} – ${n.short}`);return}if(s.length===0||s[0]===""){e.p=t.goHome();return}const a=t.goto(e.p,s[0]);if(console.log(a),!a){r(`
No such file or directory`);return}if(!("children"in a.at(-1))){r(`
${(l=a.at(-1))==null?void 0:l.name}:not a directory`);return}e.p=a}}}function Sv(r,e){const t={name:"echo",short:"display a line of text",long:""};return{docs:t,app:(i,s)=>{if(s.find(a=>a==="-h"||a==="-help")){r(`
${t.name} – ${t.short}`);return}const o=i.length?i.join(" "):"The best apps fade into the background — giving you time to grow, not constantly repair.";r(`
${o}`)}}}function Cv(r,e){const t={name:"hello",short:"friendly greeting program",long:""};return{docs:t,app:(i,s)=>{if(s.find(o=>o==="-h"||o==="-help")){r(`
${t.name} – ${t.short}`);return}r(`
Hello, world!`)}}}function Iv(r,e){const t=Gi(),n={name:"ls",short:"list directory contents",long:""};return{docs:n,app:(s,o)=>{if(o.find(c=>c==="-h"||c==="-help")){r(`
${n.name} – ${n.short}`);return}let a=`
`;const l=t.getChildren(e.p);for(const c of l)a+=`${c.name}
`;r(a)}}}function Av(r,e){const t=Gi(),n={name:"mkdir",short:"make directory",long:""};return{docs:n,app:(s,o)=>{if(o.find(l=>l==="-h"||l==="-help")){r(`
${n.name} – ${n.short}`);return}if(s.length===0){r(`
Missing directory name`);return}const a=t.make(e.p,s[0],"folder");a==="bad_args"?r(`
Missing directory name`):a==="bad_path"?r(`
No such file or directory`):a==="file_exists"&&r(`
File or directory already exists`)}}}function Tv(r,e){const t={name:"pwd",short:"print name of current directory",long:""};return{docs:t,app:(i,s)=>{if(s.find(a=>a==="-h"||a==="-help")){r(`
${t.name} – ${t.short}`);return}let o="";for(let a=0;a<e.p.length;a++)o+=e.p[a].name,a!==0&&a<e.p.length-1&&(o+="/");r(`
${o}`)}}}function Ev(r,e){const t=Gi(),n={name:"show",short:"render markdown (.md) files",long:""};return{docs:n,app:(s,o)=>{var l;if(o.find(c=>c==="-h"||c==="-help")){r(`
${n.name} – ${n.short}`);return}if(o.find(c=>c==="-a"||c==="-all")){let c="";const u=t.goHome().at(-1);if(!u)return;const h=d=>{d&&d.forEach(f=>{if(f.name!=="title"){if(f.name==="projects"&&(c+=`



# Projects`),f.name.match(".md")){c+=f.data;return}h(f.children)}})};h(u.children),r(c,!0);return}if(s.length===0){r(`
Missing filename`);return}const a=(l=t.goto(e.p,s[0]))==null?void 0:l.at(-1);if(!a){r(`
No such file or directory`);return}if(!("data"in a)){r(`
${a.name}:not a file`);return}r(a.data,!0)}}}function Rv(r,e){const t=Gi(),n={name:"touch",short:"create file",long:""};return{docs:n,app:(s,o)=>{if(o.find(l=>l==="-h"||l==="-help")){r(`
${n.name} – ${n.short}`);return}if(s.length===0){r(`
Missing file name`);return}const a=t.make(e.p,s[0],"file");a==="bad_args"?r(`
Missing file name`):a==="bad_path"&&r(`
No such file or directory`)}}}const Lv=`



# Help
### VSSH is just like BASH except much more limited.

## • Type*ls* to list directory contents

## • Type*cd* to change directory

## • Type*show* to render .md files

## • Use ↑ and ↓ keys to scroll

### Tip: try typing "show -all"


## All commands
### VSSH, version 0.0.1
`;function Bv(r,e){const t=(s,o)=>{let a=Lv;Object.entries(n).forEach(l=>{const[c,u]=l;a+=`### ${u.docs.name} - ${u.docs.short}
`}),console.log(a),r(a,!0)},n={ls:Iv(r,e),cd:Mv(r,e),show:Ev(r,e),echo:Sv(r),pwd:Tv(r,e),mkdir:Av(r,e),touch:Rv(r,e),hello:Cv(r)};return s=>{const o=n[s];return o?o.app:s==="help"?t:null}}function Gv(r){let t={p:Gi().goHome()};const n=Bv(r,t);function i(l){const c=[],u=[];return l.forEach(h=>{if(h!==""){if(h.charAt(0)==="-"){u.push(h);return}c.push(h)}}),[c,u]}function s(l){r(`
${l}:command not found`)}function o(){let l="";for(let c=0;c<t.p.length;c++)l+=t.p[c].name,c!==0&&c<t.p.length-1&&(l+="/");l=l.replace(/^\/home\/user/,"~"),l!=="~"&&(l+=" "),r(`
user:${l}$`)}function a(l){l=l.replaceAll(/\s+/g," ");const c=l.split(" "),u=c[0],h=c.slice(1);if(console.log("cmd",u,h),l){const d=n(u);if(d){const[f,g]=i(h);d(f,g)}else s(u)}o()}return{input:a}}function Fv(r){const e=document.querySelector("canvas.webgl"),t=document.getElementById("textarea");t.value="",t.readOnly=!0,t.blur(),r.placeMarkdown(Xc),r.placeText("user:~$");const n=Gv((l,c=!1)=>{if(c){const u=r.placeMarkdown(l);r.scroll(u,"px",{updateMaxScroll:!0,moveView:!1}),r.scroll(12,"lines",{updateMaxScroll:!1,moveView:!0})}else{const u=r.placeText(l);r.scroll(u,"lines")}});let i="";function s(){const l=a(i,t.value);i=t.value,l&&r.userInput(l,t.selectionStart),r.scrollToEnd()}t.addEventListener("input",s,!1),e.addEventListener("pointerup",l=>{l.pointerType==="mouse"?(t.readOnly=!1,t.focus(),t.setSelectionRange(o,o)):(t.readOnly=!0,t.blur())}),window.addEventListener("keypress",l=>{var c;if((t.readOnly===!0||((c=document.activeElement)==null?void 0:c.id)!=="textarea")&&(t.readOnly=!1,t.focus(),l.key.length===1&&(l.preventDefault(),t.value=t.value.slice(0,o)+l.key+t.value.slice(o),o+=1,s()),t.setSelectionRange(o,o)),l.key==="Enter"){r.freezeInput(),n.input(t.value),t.value="";const u=a(i,t.value);i=t.value,u&&r.userInput(u,t.selectionStart)}}),window.addEventListener("keydown",l=>{switch(l.key){case"ArrowUp":l.preventDefault(),r.scroll(-1,"lines",{moveView:!0,updateMaxScroll:!1});break;case"ArrowDown":l.preventDefault(),r.scroll(1,"lines",{moveView:!0,updateMaxScroll:!1});break}});let o=0;document.addEventListener("selectionchange",()=>{t.selectionStart!==t.selectionEnd&&t.setSelectionRange(o,o),o=t.selectionStart,r.userInput({type:"none",loc:"none",str:""},t.selectionStart)});function a(l,c){const u=l.length-c.length;let h={type:"none",loc:"none",str:""},d=0,f=0;if(u!==0){if(u>0)for(h.type="del";d<l.length||f<c.length;){if(d>=l.length){console.error("add and del");return}l.charAt(d)!==c.charAt(f)?(h.loc==="none"&&(h.loc=f===c.length?"end":f),h.str+=l.charAt(d),d++):(d++,f++)}else if(u<0)for(h.type="add";d<l.length||f<c.length;){if(f>=c.length){console.error("add and del");return}l.charAt(d)!==c.charAt(f)?(h.loc==="none"&&(h.loc=d===l.length?"end":d),h.str+=c.charAt(f),f++):(d++,f++)}}return h}}function Nv(r,e){const t=new ms;new We(new Qt(1,1,1,1),new st({color:"red"})).position.set(.5,-.5,-.01);const i=pv(r,t),s=hv(r,e,t);return Fv(i),{tick:(a,l)=>{s.tick(a,l),i.tick(a,l)},screenRenderEngine:s,screenTextEngine:i}}var Pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Kc={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(Pv,function(){var t=function(){function n(f){return o.appendChild(f.dom),f}function i(f){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===f?"block":"none";s=f}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(h.update(f-a,200),f>l+1e3&&(u.update(1e3*c/(f-l),100),l=f,c=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,d=3*c,f=2*c,g=3*c,v=15*c,x=74*c,m=30*c,p=document.createElement("canvas");p.width=u,p.height=h,p.style.cssText="width:80px;height:48px";var b=p.getContext("2d");return b.font="bold "+9*c+"px Helvetica,Arial,sans-serif",b.textBaseline="top",b.fillStyle=s,b.fillRect(0,0,u,h),b.fillStyle=i,b.fillText(n,d,f),b.fillRect(g,v,x,m),b.fillStyle=s,b.globalAlpha=.9,b.fillRect(g,v,x,m),{dom:p,update:function(_,M){o=Math.min(o,_),a=Math.max(a,_),b.fillStyle=s,b.globalAlpha=1,b.fillRect(0,0,u,v),b.fillStyle=i,b.fillText(l(_)+" "+n+" ("+l(o)+"-"+l(a)+")",d,f),b.drawImage(p,g+c,v,x-c,m,g,v,x-c,m),b.fillRect(g+x-c,v,c,m),b.fillStyle=s,b.globalAlpha=.9,b.fillRect(g+x-c,v,c,l((1-_/M)*m))}}},t})})(Kc);var Dv=Kc.exports;const Hv=Vv(Dv),Uv="data:text/javascript;base64,bGV0IHRpbWUgPSBEYXRlLm5vdygpOwpjb25zdCBEZWx0YVRpbWUgPSAoKSA9PiB7CiAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpOwogIGNvbnN0IGRlbHRhVGltZSA9IGN1cnJlbnRUaW1lIC0gdGltZTsKICB0aW1lID0gY3VycmVudFRpbWU7CiAgcmV0dXJuIGRlbHRhVGltZSAvIDEwMDA7Cn07CmV4cG9ydCBkZWZhdWx0IERlbHRhVGltZTs=",zv="data:video/mp2t;base64,bGV0IHRpbWUgPSBEYXRlLm5vdygpOwpjb25zdCBEZWx0YVRpbWUgPSAoKSA9PiB7CiAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpOwogIGNvbnN0IGRlbHRhVGltZSA9IGN1cnJlbnRUaW1lIC0gdGltZTsKICB0aW1lID0gY3VycmVudFRpbWU7CiAgcmV0dXJuIGRlbHRhVGltZSAvIDEwMDA7Cn07CmV4cG9ydCBkZWZhdWx0IERlbHRhVGltZTs=",Wv="/renderDesk/assets/collapse-CtTsooDF.css",kv="data:text/markdown;base64,CgoKCiMgSGkgdGhlcmUKCkknbSBWaW5lZXQgU2FodSDigJQgYSBzb2Z0d2FyZSBlbmdpbmVlciB3aG8gdHVybnMgZnV6enkgcHJvZHVjdCBhc2tzIGludG8gZmFzdCwgbWFpbnRhaW5hYmxlLCBhbmQgcG9saXNoZWQgd2ViIGludGVyZmFjZXMgdXNpbmcgUmVhY3QsIE5leHQuanMsIEFzdHJvIGFuZCBUeXBlU2NyaXB0LiBJIGFsc28gYnVpbGQgaW50ZXJhY3RpdmUgdmlzdWFscyB3aXRoIFRocmVlLmpzIGFuZCBjb21wYWN0IEFJLXBvd2VyZWQgdG9vbHMuCgojIyMgT3V0c2lkZSB0aGUgY29kZQpDdXJpb3VzIGFib3V0IGRlc2lnbiwgZWNvbm9taWNzIGFuZCBlbWVyZ2luZyB0ZWNoLiBJIHNwbGl0IG15IHRpbWUgYmV0d2VlbiB0aGUgZ3ltLCBtb3VudGFpbiB0cmFpbHMsIGFuZCBzcGlyaXR1YWwgcHJhY3RpY2Ug4oCUIHN0YXlpbmcgZGlzY2lwbGluZWQsIGN1cmlvdXMgYW5kIGdyb3VuZGVkIG1ha2VzIG1lIGEgYmV0dGVyIGVuZ2luZWVyIGFuZCBhbiBlYXNpZXIgcGVyc29uIHRvIGJ1aWxkIHdpdGguCgpUeXBlIGNkIH4vcHJvamVjdHMgdGhlbiBscyB0byBzZWUgZGV0YWlscyBvZiBzb21lIG9mIHRoZSBwcm9qZWN0cyBJ4oCZdmUgYnVpbHQuCg==",Ov="data:text/markdown;base64,CgoKCiMgQ29udGFjdAojIyBSZWFjaCBvdXQgb24gKkxpbmtlZEluKgoKaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3ZpbmVldHNhaHUwMQoKCiMjIENoZWNrIG91dCBteSB3b3JrIG9uICpHaXRIdWIqCgpodHRwczovL2dpdGh1Yi5jb20vdmluZWV0LTAwCgoKIyMgU2VuZCBtZSBhbiAqRW1haWwqCgp2aW5lZXRzYWh1MTkwMUBnbWFpbC5jb20K",Zv="data:text/markdown;base64,CgoKCiMjICpEYXRhVGlkZSoKCkRhdGFUaWRlIGlzIGEgdmlzdWFsLCBuby1jb2RlL2xvdy1jb2RlIHdlYiBzY3JhcGVyOiBkZXNpZ24gc2NyYXBpbmcgd29ya2Zsb3dzIG9uIGEgUmVhY3QgRmxvdyBjYW52YXMsIHJ1biB0aGVtIHdpdGggaGVhZGxlc3MgYnJvd3NlciBhdXRvbWF0aW9uLCBhbmQgZXh0cmFjdCBzdHJ1Y3R1cmVkIGRhdGEgdXNpbmcgQUktYXNzaXN0ZWQgcGFyc2Vycy4KCiMjIyBGZWF0dXJlcwotIExhdW5jaCBCcm93c2VyIC8gTmF2aWdhdGU6IHN0YXJ0IFB1cHBldGVlciwgbG9hZCBwYWdlcywgYW5kIGNhcHR1cmUgSFRNTC4gIAotIEVsZW1lbnQgb3BzOiBFeHRyYWN0IHRleHQsIEZpbGwgaW5wdXQsIENsaWNrIGVsZW1lbnQsIFNjcm9sbCB0byBlbGVtZW50LCBXYWl0IGZvciBlbGVtZW50LiAgCi0gQUkgRXh0cmFjdGlvbjogdXNlIEdlbWluaSBBSSB0byBjb252ZXJ0IEhUTUwgaW50byBzdHJ1Y3R1cmVkIEpTT04gdmlhIGN1c3RvbSBwcm9tcHRzLiAgCi0gSlNPTiB0b29sczogcmVhZCBvciBidWlsZCBKU09OIG9iamVjdHMgaW5zaWRlIHdvcmtmbG93cy4gIAotIERlbGl2ZXJ5OiBzZW5kIHJlc3VsdHMgdmlhIHdlYmhvb2tzIG9yIHBlcnNpc3QgdG8gUG9zdGdyZVNRTC4gIAotIEJpbGxpbmc6IFN0cmlwZS1wb3dlcmVkIHN1YnNjcmlwdGlvbiBhbmQgYmlsbGluZyBwYWdlIGZvciBwcmVtaXVtIGZlYXR1cmVzLgoKIyMjIFN0YWNrICYgdG9vbGluZwpOZXh0LmpzLCBSZWFjdCwgUmVhY3QgRmxvdywgUHVwcGV0ZWVyLCBHZW1pbmkgQUksIFBvc3RncmVTUUwgKyBQcmlzbWEsIFN0cmlwZSwgVGFpbHdpbmQgQ1NTLCBUeXBlU2NyaXB0LCBBeGlvcy4K",Xv="data:text/markdown;base64,CgoKCiMjICpDcmVhdGl2ZSBwNS5qcyBDb2xsZWN0aW9uKgoKIyMjIOKAoiBwNS5qcywgSmF2YVNjcmlwdCwgR2VuZXJhdGl2ZSBBcnQsCiMjIyDigKIgU2ltdWxhdGlvbnMsIFdFQkdMLCBHYW1lcywgRGF0YSBWaXN1YWxpemF0aW9uCgpBIGN1cmF0ZWQgY29sbGVjdGlvbiBvZiA1MCsgY3JlYXRpdmUgY29kaW5nIGV4cGVyaW1lbnRzIGJ1aWx0IHdpdGggcDUuanMg4oCUIHJhbmdpbmcgZnJvbSBnZW5lcmF0aXZlIGFydCB0byBwaHlzaWNzLWJhc2VkIHNpbXVsYXRpb25zLiBUaGUgcHJvamVjdCBpbmNsdWRlcyBjbGFzc2ljIHN5c3RlbXMgbGlrZSBmbG93IGZpZWxkcywgZnJhY3RhbCB0cmVlcywgcGFydGljbGUgc3dhcm1zLCBhbmQgZGlmZnVzaW9uLWxpbWl0ZWQgYWdncmVnYXRpb247IGFsb25nc2lkZSBpbnRlcmFjdGl2ZSBza2V0Y2hlcyBzdWNoIGFzIHBhdGhmaW5kaW5nIHZpc3VhbGl6ZXJzIChBIFN0YXIsIERpamtzdHJhKSwgZXZvbHV0aW9uYXJ5IGFsZ29yaXRobXMsIE1hcmtvdiB0ZXh0IGdlbmVyYXRvcnMsIGFuZCBURuKAk0lERi1iYXNlZCB0ZXh0IGFuYWx5c2lzIHRvb2xzLgo=",Yv="data:text/markdown;base64,CgoKCiMjICpSZW5kZXJEZXNrIChUaGlzIFdlYnNpdGUpKgoKIyMjIOKAoiBUeXBlU2NyaXB0LCBXZWJHTCwKIyMjIOKAoiBTaGFkZXIgTGFuZ3VhZ2UsIFdlYiBEZXYKClJlbmRlckRlc2sgaXMgYSBzbWFsbCwgcGxheWZ1bCBwb3J0Zm9saW8gYnVpbHQgd2l0aCBUeXBlU2NyaXB0IGFuZCBUaHJlZS5qcy4gSXQgaW5jbHVkZXMgYW4gaW50ZXJhY3RpdmUgM0QgcmV0cm8gY29tcHV0ZXIsIGEgdGlueSBVTklYLXN0eWxlIHNoZWxsLCBhIHZpcnR1YWwgZmlsZSBzeXN0ZW0sIGEgTWFya2Rvd24gaW50ZXJwcmV0ZXIvcmVuZGVyZXIsIGFuZCBhIGNvbXBhY3QgdGV4dCBsYXlvdXQgZW5naW5lLiBUaGUgcHJvamVjdCBleHBsb3JlcyBoYW5kcy1vbiBXZWJHTCBVSSBwYXR0ZXJucyB3aXRoIGFuIGVtcGhhc2lzIG9uIGNsYXJpdHksIHBlcmZvcm1hbmNlIGFuZCByZXVzYWJpbGl0eS4K",Kv="data:text/markdown;base64,CgoKCiMjICpJc3N1ZSBUcmFja2luZyBBcHAqCgojIyMg4oCiIE5leHQuanMsIFR5cGVTY3JpcHQsIFBvc3RncmVTUUwgKEluc3RhZ3JlcyksCiMjIyDigKIgVGFpbHdpbmQgQ1NTLCBQcmlzbWEsIEF1dGhlbnRpY2F0aW9uLCBDUlVECgpJc3N1ZSBUcmFja2luZyBBcHAgaXMgYSBmb2N1c2VkIGlzc3VlLW1hbmFnZW1lbnQgc3lzdGVtIGluc3BpcmVkIGJ5IG1vZGVybiB0cmFja2Vycy4gIApUaGUgcHJvamVjdCBpbXBsZW1lbnRzIHRoZSBlc3NlbnRpYWwgd29ya2Zsb3dzIHlvdSBleHBlY3QgZnJvbSBhIGxpZ2h0d2VpZ2h0IHRyYWNrZXI6IHNlY3VyZSBhdXRoZW50aWNhdGlvbiwgY3JlYXRlLCB2aWV3LCBlZGl0IGFuZCBkZWxldGUgaXNzdWVzLCBwbHVzIGEgcmVzcG9uc2l2ZSBsaXN0IHZpZXcgd2l0aCBzaW1wbGUgZmlsdGVycy4KCkJ1aWx0IHdpdGggTmV4dC5qcyBhbmQgVHlwZVNjcmlwdCwgc3R5bGVkIHdpdGggVGFpbHdpbmQgYW5kIGJhY2tlZCBieSBQb3N0Z3JlU1FMIChJbnN0YWdyZXMpLiBUaGUgY29kZSBlbXBoYXNpc2VzIGNsZWFyIHNlcnZlciByb3V0ZXMsIHR5cGUtc2FmZSBtb2RlbHMgKFByaXNtYSksIGFuZCBhIHNtYWxsLCBhdWRpdGFibGUgQVBJIHN1cmZhY2Ugc3VpdGFibGUgZm9yIHByb2R1Y3Rpb24uCg==",Jv="data:text/markdown;base64,CgoKCiMjICpaZW50cnkqCgojIyMg4oCiIFJlYWN0LCBHU0FQLCBUYWlsd2luZENTUwoKQSBtb3Rpb24tZmlyc3QgbGFuZGluZyBpbnNwaXJlZCBieSB0aGUgQXd3d2FyZHMtd2lubmluZyBaZW50cnkuICAKQnVpbHQgd2l0aCBSZWFjdCBmb3Igc3RydWN0dXJlLCBHU0FQIGZvciBleHByZXNzaXZlIHRpbWVsaW5lcywgYW5kIFRhaWx3aW5kIGZvciByYXBpZCBsYXlvdXQuIFRoZSBwcm9qZWN0IGV4cGxvcmVzIHNjcm9sbC1kcml2ZW4gY2hvcmVvZ3JhcGh5LCBsYXllcmVkIHBhcmFsbGF4LCBhbmQgcmV1c2FibGUgYW5pbWF0aW9uIHByaW1pdGl2ZXMgdGhhdCBtYWtlIHRoZSBVSSBmZWVsIHRhY3RpbGUgYW5kIGRlbGliZXJhdGUuCgpUaGUgYnVpbGQgZW1waGFzaXNlczoKLSBjbGVhciBtb3Rpb24gc3lzdGVtcyAodGltZWxpbmVzICYgc3RhZ2dlcmVkIHJldmVhbHMpLAotIHBlcmZvcm1hbmNlIGFuZCBhY2Nlc3NpYmlsaXR5IChyZWR1Y2VkLW1vdGlvbiwgbGF6eSBhc3NldHMpLAotIGFuZCBjb21wYWN0LCByZXVzYWJsZSBSZWFjdCBjb21wb25lbnRzIHRoYXQgZW5jYXBzdWxhdGUgYW5pbWF0aW9uIGJlaGF2aW91ci4K",jv="data:text/markdown;base64,CgoKCiMjIFdlbGNvbWUgdG8gVmluZWV0LUxpbnV4IDEuMCBMVFMKCgoKIyAgSGkgdGhlcmUsCiMgICpJJ20gVmluZWV0KgojICAtQ3JlYXRpdmUgRGV2ZWxvcGVyCiMjICAgICDigJQgQmFja2dyb3VuZCBpbiBJbmZvcm1hdGlvbiBUZWNobm9sb2d5CiMjICAgICAgICAoUkdQViBVbml2ZXJzaXR5LCBJbmRpYSkKIyMKIyMjICAgKlNjcm9sbCogb3IgdHlwZSAiaGVscCIgdG8gZ2V0IHN0YXJ0ZWQK",Qv="data:text/markdown;base64,ISgvaW1hZ2VzL3Zpbi10aXRsZS5wbmc/YXNwZWN0PTImbm9mbG93PXRydWUmd2lkdGg9MS4zMykKCgojIyAgIEhpIHRoZXJlLAoKIyAgKkknbSBWaW5lZXQqCgojIyAgIOKAoiBTb2Z0d2FyZSBFbmdpbmVlcgojIyAgIOKAoiBDcmVhdGl2ZSBDb2RlcgoKCgoKCiMjIyBXZWxjb21lIHRvIFZpbmVldC1MaW51eCAxLjAgTFRTCiMjIyDihpLihpIgU2Nyb2xsIG9yIHR5cGUgImhlbHAiIHRvIGdldCBzdGFydGVkCg==",qv="/renderDesk/assets/01Homepage-BZ3jxLvY.png",$v="/renderDesk/assets/02Workflows-tVJKvNiT.png",ex="/renderDesk/assets/03DefinedWorkflow-CALEn-5N.png",tx="/renderDesk/assets/04Executedlogs-CI9xMb-f.png",nx="/renderDesk/assets/05RunsHistory-DN_JvASS.png",ix="/renderDesk/assets/06Schedule-ClQbl3Or.png",sx="/renderDesk/assets/07Scheduled-YJSGFezr.png",rx="/renderDesk/assets/08Credentials-ViBfHChh.png",ox="/renderDesk/assets/09CreateCreds-BIxPnnjD.png",ax="/renderDesk/assets/10Billing-D6m9cphk.png",lx="/renderDesk/assets/11BillingHistory-C3UVrh42.png",cx="/renderDesk/assets/HomeFin-37X6eQzJ.png",ux="/renderDesk/assets/createIssue-D_kiNJW7.png",hx="/renderDesk/assets/creative-01-Bkdw-86F.png",dx="/renderDesk/assets/dashboard-DUomueX8.png",fx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2016%2016'%20style='enable-background:new%200%200%2016%2016;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23F6D4B1;}%20%3c/style%3e%3cpath%20class='st0'%20d='M10.6,12.9c0-1-0.3-1.6-0.7-2c2.4-0.3,4.9-1.1,4.9-5.2c0-1.1-0.4-2.1-1.1-2.9c0.1-0.3,0.5-1.3-0.1-2.8%20c0,0-0.9-0.3-3,1.1c-1.7-0.5-3.6-0.5-5.4,0c-2-1.4-3-1.1-3-1.1C1.6,1.4,2,2.5,2.1,2.8C1.4,3.5,1,4.6,1,5.6c0,4.1,2.5,5,4.9,5.3%20c-0.4,0.4-0.6,0.9-0.7,1.4c-0.6,0.3-2.2,0.7-3.1-0.9c0,0-0.6-1-1.6-1.1c0,0-1.1,0-0.1,0.7c0,0,0.7,0.3,1.1,1.6c0,0,0.6,2.1,3.6,1.5%20c0,0.9,0,1.8,0,1.8h5.3C10.6,15.9,10.6,14.4,10.6,12.9z'/%3e%3c/svg%3e",px="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20100%20100'%20style='enable-background:new%200%200%20100%20100;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%23222A2F;}%20%3c/style%3e%3cpath%20class='st0'%20d='M63,83.4c0-4.5-1.6-7.5-3.3-9C70.6,73.2,82,69.1,82,50.3c0.1-4.9-1.7-9.6-5-13.1c0.5-1.2,2.2-6.2-0.5-13%20c0,0-4.1-1.3-13.5,5c-8-2.2-16.5-2.2-24.5,0c-9.3-6.3-13.5-5-13.5-5c-2.7,6.7-1,11.7-0.5,13c-3.3,3.6-5.1,8.3-5,13.1%20c0,18.8,11.4,23,22.3,24.2c-1.8,1.7-2.9,4-3.1,6.5c-2.8,1.3-9.9,3.4-14.2-4c0,0-2.6-4.7-7.5-5c0,0-4.8,0-0.3,3c0,0,3.2,1.5,5.4,7.2%20c0,0,2.9,9.6,16.5,6.6c0.1,4.1,0.1,7.2,0.1,8.3c0,0.5-0.2,1.1-0.5,1.5c8.2,2.2,16.9,2,25-0.4C63,97.7,63,97.3,63,96.9%20C62.9,95.3,63,90,63,83.4z'/%3e%3cpath%20class='st1'%20d='M98.1,40.2L98.1,40.2C91.8,14,65.3-2.1,39,4.2S-3.4,37.1,2.9,63.4c4.2,17.3,17.5,31,34.6,35.7%20c0.3-0.2,0.5-0.4,0.7-0.6c0.3-0.4,0.5-0.9,0.5-1.5c0-1.2,0-4.2-0.1-8.3c-13.7,3-16.5-6.6-16.5-6.6C20,76.4,16.7,75,16.7,75%20c-4.4-3,0.3-3,0.3-3c4.9,0.3,7.5,5,7.5,5c4.4,7.4,11.4,5.3,14.2,4c0.2-2.5,1.3-4.8,3.1-6.6C31.1,73.2,19.6,69,19.6,50.3%20c-0.1-4.9,1.7-9.6,5-13.1c-0.5-1.2-2.2-6.2,0.5-13c0,0,4.1-1.3,13.4,5c8-2.2,16.5-2.2,24.5,0c9.3-6.3,13.4-5,13.4-5%20c2.7,6.7,1,11.7,0.5,13c3.3,3.6,5.1,8.3,5,13.1c0,18.8-11.4,22.9-22.3,24.1c1.8,1.5,3.3,4.5,3.3,9c0,6.6-0.1,11.8-0.1,13.4%20c0,0.4,0.1,0.8,0.3,1.2c0.2,0.3,0.4,0.6,0.7,0.8C89.2,91.7,104.3,65.8,98.1,40.2z'/%3e%3c/svg%3e",mx="/renderDesk/assets/home-CQ18AcO_.png",gx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2016%2016'%20style='enable-background:new%200%200%2016%2016;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M0.1,2c0-1,0.8-1.8,1.9-1.8c1,0,1.8,0.9,1.8,1.8c0,1-0.8,1.9-1.8,1.9C0.9,3.9,0.1,3.1,0.1,2z%20M0.1,5h3.7v9.8%20H0.1V5z'/%3e%3cpath%20class='st0'%20d='M15.9,8.5v6.2h-3.5V9.4c0-0.9-0.6-1.6-1.5-1.6c-0.8,0-1.4,0.6-1.4,1.5v5.5H5.8V5h3.7v1%20c0.6-0.7,1.6-1.2,2.8-1.2C14.4,4.7,15.9,6.3,15.9,8.5z'/%3e%3c/g%3e%3c/svg%3e",vx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2016%2016'%20style='enable-background:new%200%200%2016%2016;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23F6D4B1;}%20%3c/style%3e%3crect%20class='st0'%20width='16'%20height='3.2'/%3e%3crect%20y='6.4'%20class='st0'%20width='16'%20height='3.2'/%3e%3crect%20y='12.8'%20class='st0'%20width='16'%20height='3.2'/%3e%3c/svg%3e",xx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2098%2098'%20style='enable-background:new%200%200%2098%2098;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%23040D21;}%20%3c/style%3e%3cpath%20class='st0'%20d='M61.5,39h-25c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h25c0.8,0,1.5-0.7,1.5-1.5S62.3,39,61.5,39z'/%3e%3cpath%20class='st0'%20d='M61.5,53h-25c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h25c0.8,0,1.5-0.7,1.5-1.5S62.3,53,61.5,53z'/%3e%3cpath%20class='st0'%20d='M61.5,60h-25c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h25c0.8,0,1.5-0.7,1.5-1.5S62.3,60,61.5,60z'/%3e%3cpath%20class='st0'%20d='M61.5,46h-25c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h25c0.8,0,1.5-0.7,1.5-1.5S62.3,46,61.5,46z'/%3e%3cpath%20class='st0'%20d='M73.7,29.9c0,0,0-0.1-0.1-0.1c-0.1-0.2-0.2-0.4-0.4-0.5L62.7,18.7c-0.2-0.2-0.3-0.3-0.5-0.4l-0.1-0.1%20c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2,0-0.3,0-0.5-0.1H34.2c-5.1,0-9.2,4.1-9.2,9.2v42.7c0,5.1,4.1,9.2,9.2,9.2h30.7%20c5.1,0,9.2-4.1,9.2-9.2V31c0-0.2,0-0.3,0-0.5C73.9,30.3,73.9,30.1,73.7,29.9z%20M69,69.8c0,2.3-1.9,4.2-4.2,4.2H34.2%20c-2.3,0-4.2-1.9-4.2-4.2V27.2c0-2.3,1.9-4.2,4.2-4.2h24.3v1.4c0,5.1,4.1,9.2,9.2,9.2H69V69.8z'/%3e%3cpath%20class='st1'%20d='M49,0C21.9,0,0,21.9,0,49s21.9,49,49,49s49-21.9,49-49S76.1,0,49,0z%20M25,69.8V27.2c0-5.1,4.1-9.2,9.2-9.2H61%20c0.2,0,0.3,0,0.5,0s0.4,0.1,0.6,0.2l0.1,0.1c0.2,0.1,0.4,0.2,0.5,0.4l10.5,10.5c0.2,0.2,0.3,0.3,0.4,0.5l0.1,0.1%20c0.1,0.2,0.2,0.4,0.2,0.6s0,0.3,0.1,0.5v38.8c0,5.1-4.1,9.2-9.2,9.2H34.2C29.1,79,25,74.9,25,69.8z'/%3e%3cpath%20class='st1'%20d='M58.5,24.4V23H34.2c-2.3,0-4.2,1.9-4.2,4.2v42.7c0,2.3,1.9,4.2,4.2,4.2h30.7c2.3,0,4.2-1.9,4.2-4.2V33.5h-1.3%20C62.6,33.5,58.5,29.4,58.5,24.4z%20M61.5,63h-25c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h25c0.8,0,1.5,0.7,1.5,1.5S62.3,63,61.5,63z%20M61.5,56h-25c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h25c0.8,0,1.5,0.7,1.5,1.5S62.3,56,61.5,56z%20M61.5,49h-25%20c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h25c0.8,0,1.5,0.7,1.5,1.5S62.3,49,61.5,49z%20M61.5,42h-25c-0.8,0-1.5-0.7-1.5-1.5%20s0.7-1.5,1.5-1.5h25c0.8,0,1.5,0.7,1.5,1.5S62.3,42,61.5,42z'/%3e%3c/svg%3e",yx="/renderDesk/assets/sc1-Drs7Y5M3.png",_x="/renderDesk/assets/view-DD1A5HBh.png",bx="/renderDesk/assets/zentry-poster-DfGheGSg.png",wx="/renderDesk/assets/zentry-XY_L56XX.mp4",Mx="/renderDesk/assets/main-BvrJ8UtG.css",Sx="data:video/mp2t;base64,aW1wb3J0ICIuL21haW4uY3NzIjsKaW1wb3J0IFdlYkdMIGZyb20gIi4vd2ViZ2wiOwoKV2ViR0woKTsKCmNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7CgpmdW5jdGlvbiBvblNjcm9sbCgpIHsKICBpZiAod2luZG93LnNjcm9sbFkgPiAxMCkgcm9vdC5kYXRhc2V0LnNjcm9sbCA9ICJ0cnVlIjsKICBlbHNlIHJvb3QuZGF0YXNldC5zY3JvbGwgPSAiZmFsc2UiOwp9Cm9uU2Nyb2xsKCk7CndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJzY3JvbGwiLCBvblNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pOwo=",Cx="/renderDesk/assets/nav-CiOHkUlb.css",Ix="data:video/mp2t;base64,aW1wb3J0IEZpbGVTeXN0ZW1CYXNoLCB7IEZpbGVTeXN0ZW1UeXBlIH0gZnJvbSAiLi4vZmlsZVN5c3RlbUJhc2giOwppbXBvcnQgY2QgZnJvbSAiLi9jZCI7CmltcG9ydCBlY2hvIGZyb20gIi4vZWNobyI7CmltcG9ydCBoZWxsbyBmcm9tICIuL2hlbGxvIjsKaW1wb3J0IGxzIGZyb20gIi4vbHMiOwppbXBvcnQgbWtkaXIgZnJvbSAiLi9ta2RpciI7CmltcG9ydCBwd2QgZnJvbSAiLi9wd2QiOwppbXBvcnQgc2hvdyBmcm9tICIuL3Nob3ciOwppbXBvcnQgdG91Y2ggZnJvbSAiLi90b3VjaCI7Ci8vIEB0cy1pZ25vcmUKaW1wb3J0IGhlbHBNRCBmcm9tICIuL2Fzc2V0cy9oZWxwLm1kP3JhdyI7CgpleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBsaWNhdGlvbnMoCiAgcHJpbnQ6IChzOiBzdHJpbmcsIG1kPzogYm9vbGVhbikgPT4gdm9pZCwKICBwYXRoOiBGaWxlU3lzdGVtVHlwZQopIHsKICBjb25zdCBoZWxwID0gKGFyZ3M6IHN0cmluZ1tdLCBvcHRpb25zOiBzdHJpbmdbXSkgPT4gewogICAgbGV0IGhlbHBTdHI6IHN0cmluZyA9IGhlbHBNRDsKICAgIE9iamVjdC5lbnRyaWVzKGFwcHMpLmZvckVhY2goKGVudHJ5KSA9PiB7CiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5OwogICAgICBoZWxwU3RyICs9IGAjIyMgJHt2YWx1ZS5kb2NzLm5hbWV9IC0gJHt2YWx1ZS5kb2NzLnNob3J0fVxuYDsKICAgIH0pOwogICAgY29uc29sZS5sb2coaGVscFN0cik7CiAgICBwcmludChoZWxwU3RyLCB0cnVlKTsKICB9OwogIGNvbnN0IGFwcHMgPSB7CiAgICBsczogbHMocHJpbnQsIHBhdGgpLAogICAgY2Q6IGNkKHByaW50LCBwYXRoKSwKICAgIHNob3c6IHNob3cocHJpbnQsIHBhdGgpLAogICAgZWNobzogZWNobyhwcmludCwgcGF0aCksCiAgICBwd2Q6IHB3ZChwcmludCwgcGF0aCksCiAgICBta2RpcjogbWtkaXIocHJpbnQsIHBhdGgpLAogICAgdG91Y2g6IHRvdWNoKHByaW50LCBwYXRoKSwKICAgIGhlbGxvOiBoZWxsbyhwcmludCwgcGF0aCksCiAgfTsKICBjb25zdCBnZXRBcHAgPSAoCiAgICBhcHBOYW1lOiBzdHJpbmcKICApOiBudWxsIHwgKChhcmdzOiBzdHJpbmdbXSwgb3B0aW9uczogc3RyaW5nW10pID0+IGFueSkgPT4gewogICAgY29uc3QgYXBwID0gKGFwcHMgYXMgYW55KVthcHBOYW1lXTsKICAgIGlmIChhcHApIHJldHVybiBhcHAuYXBwOwoKICAgIGlmIChhcHBOYW1lID09PSAiaGVscCIpIHJldHVybiBoZWxwOwoKICAgIHJldHVybiBudWxsOwogIH07CgogIHJldHVybiBnZXRBcHA7Cn0K",Ax="data:text/markdown;base64,CgoKCiMgSGVscAojIyMgVlNTSCBpcyBqdXN0IGxpa2UgQkFTSCBleGNlcHQgbXVjaCBtb3JlIGxpbWl0ZWQuCgojIyDigKIgVHlwZSpscyogdG8gbGlzdCBkaXJlY3RvcnkgY29udGVudHMKCiMjIOKAoiBUeXBlKmNkKiB0byBjaGFuZ2UgZGlyZWN0b3J5CgojIyDigKIgVHlwZSpzaG93KiB0byByZW5kZXIgLm1kIGZpbGVzCgojIyDigKIgVXNlIOKGkSBhbmQg4oaTIGtleXMgdG8gc2Nyb2xsCgojIyMgVGlwOiB0cnkgdHlwaW5nICJzaG93IC1hbGwiCgoKIyMgQWxsIGNvbW1hbmRzCiMjIyBWU1NILCB2ZXJzaW9uIDAuMC4xCg==",Tx="data:video/mp2t;base64,aW1wb3J0IEZpbGVTeXN0ZW1CYXNoLCB7IEZpbGVTeXN0ZW1UeXBlIH0gZnJvbSAiLi4vZmlsZVN5c3RlbUJhc2giOwoKZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2QocHJpbnQ6IChzOiBzdHJpbmcsIG1kPzogYm9vbGVhbikgPT4gdm9pZCwgcGF0aDogRmlsZVN5c3RlbVR5cGUpIHsKICBjb25zdCBmaWxlU3lzdGVtID0gRmlsZVN5c3RlbUJhc2goKTsKICBjb25zdCBkb2NzID0gewogICAgbmFtZTogImNkIiwKICAgIHNob3J0OiAiY2hhbmdlIGRpcmVjdG9yeSIsCiAgICBsb25nOiAiIiwKICB9OwoKICBjb25zdCBhcHAgPSAoYXJnczogc3RyaW5nW10sIG9wdGlvbnM6IHN0cmluZ1tdKSA9PiB7CiAgICBpZiAob3B0aW9ucy5maW5kKChvKSA9PiBvID09PSAiLWgiIHx8IG8gPT09ICctaGVscCcpKSB7CiAgICAgICAgcHJpbnQoYFxuJHtkb2NzLm5hbWV9IOKAkyAke2RvY3Muc2hvcnR9YCk7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBpZiAoYXJncy5sZW5ndGggPT09IDAgfHwgYXJnc1swXSA9PT0gIiIpIHsKICAgICAgICBwYXRoLnAgPSBmaWxlU3lzdGVtLmdvSG9tZSgpOwogICAgICAgIHJldHVybjsKICAgICAgfQogICAgICBjb25zdCBvcGVyYXRpb24gPSBmaWxlU3lzdGVtLmdvdG8ocGF0aC5wLCBhcmdzWzBdKTsKICAgICAgY29uc29sZS5sb2cob3BlcmF0aW9uKTsKCiAgICAgIGlmICghb3BlcmF0aW9uKSB7CiAgICAgICAgcHJpbnQoYFxuTm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeWApOwogICAgICAgIHJldHVybjsKICAgICAgfQogICAgICBpZiAoISgiY2hpbGRyZW4iIGluIChvcGVyYXRpb24uYXQoLTEpIGFzIGFueSkpKSB7CiAgICAgICAgcHJpbnQoYFxuJHtvcGVyYXRpb24uYXQoLTEpPy5uYW1lfTpub3QgYSBkaXJlY3RvcnlgKTsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIHBhdGgucCA9IG9wZXJhdGlvbiBhcyBhbnk7CiAgfTsKICByZXR1cm4geyBkb2NzLCBhcHAgfTsKfQo=",Ex="data:video/mp2t;base64,aW1wb3J0IEZpbGVTeXN0ZW1CYXNoLCB7IEZpbGVTeXN0ZW1UeXBlIH0gZnJvbSAiLi4vZmlsZVN5c3RlbUJhc2giOwoKZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWNobygKICBwcmludDogKHM6IHN0cmluZywgbWQ/OiBib29sZWFuKSA9PiB2b2lkLAogIHBhdGg6IEZpbGVTeXN0ZW1UeXBlLAopIHsKICBjb25zdCBkb2NzID0gewogICAgbmFtZTogImVjaG8iLAogICAgc2hvcnQ6ICJkaXNwbGF5IGEgbGluZSBvZiB0ZXh0IiwKICAgIGxvbmc6ICIiLAogIH07CgogIGNvbnN0IGFwcCA9IChhcmdzOiBzdHJpbmdbXSwgb3B0aW9uczogc3RyaW5nW10pID0+IHsKICAgIGlmIChvcHRpb25zLmZpbmQoKG8pID0+IG8gPT09ICItaCIgfHwgbyA9PT0gIi1oZWxwIikpIHsKICAgICAgcHJpbnQoYFxuJHtkb2NzLm5hbWV9IOKAkyAke2RvY3Muc2hvcnR9YCk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBjb25zdCBzdHIgPSBhcmdzLmxlbmd0aAogICAgICA/IGFyZ3Muam9pbigiICIpCiAgICAgIDogIlRoZSBiZXN0IGFwcHMgZmFkZSBpbnRvIHRoZSBiYWNrZ3JvdW5kIOKAlCBnaXZpbmcgeW91IHRpbWUgdG8gZ3Jvdywgbm90IGNvbnN0YW50bHkgcmVwYWlyLiI7CiAgICBwcmludChgXG4ke3N0cn1gKTsKICB9OwogIHJldHVybiB7IGRvY3MsIGFwcCB9Owp9Cg==",Rx="data:video/mp2t;base64,aW1wb3J0IEZpbGVTeXN0ZW1CYXNoLCB7IEZpbGVTeXN0ZW1UeXBlIH0gZnJvbSAiLi4vZmlsZVN5c3RlbUJhc2giOwoKZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVsbG8oCiAgcHJpbnQ6IChzOiBzdHJpbmcsIG1kPzogYm9vbGVhbikgPT4gdm9pZCwKICBwYXRoOiBGaWxlU3lzdGVtVHlwZQopIHsKICBjb25zdCBmaWxlU3lzdGVtID0gRmlsZVN5c3RlbUJhc2goKTsKICBjb25zdCBkb2NzID0gewogICAgbmFtZTogImhlbGxvIiwKICAgIHNob3J0OiAiZnJpZW5kbHkgZ3JlZXRpbmcgcHJvZ3JhbSIsCiAgICBsb25nOiAiIiwKICB9OwoKICBjb25zdCBhcHAgPSAoYXJnczogc3RyaW5nW10sIG9wdGlvbnM6IHN0cmluZ1tdKSA9PiB7CiAgICBpZiAob3B0aW9ucy5maW5kKChvKSA9PiBvID09PSAiLWgiIHx8IG8gPT09ICctaGVscCcpKSB7CiAgICAgIHByaW50KGBcbiR7ZG9jcy5uYW1lfSDigJMgJHtkb2NzLnNob3J0fWApOwogICAgICByZXR1cm47CiAgICB9CgogICAgcHJpbnQoIlxuSGVsbG8sIHdvcmxkISIpOwogIH07CiAgcmV0dXJuIHsgZG9jcywgYXBwIH07Cn0K",Lx="data:video/mp2t;base64,aW1wb3J0IEFwcGxpY2F0aW9ucyBmcm9tICIuL2FwcGxpY2F0aW9ucyI7CgpleHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbnM7",Bx="data:video/mp2t;base64,aW1wb3J0IEZpbGVTeXN0ZW1CYXNoLCB7IEZpbGVTeXN0ZW1UeXBlIH0gZnJvbSAiLi4vZmlsZVN5c3RlbUJhc2giOwoKZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbHMoCiAgcHJpbnQ6IChzOiBzdHJpbmcsIG1kPzogYm9vbGVhbikgPT4gdm9pZCwKICBwYXRoOiBGaWxlU3lzdGVtVHlwZQopIHsKICBjb25zdCBmaWxlU3lzdGVtID0gRmlsZVN5c3RlbUJhc2goKTsKICBjb25zdCBkb2NzID0gewogICAgbmFtZTogImxzIiwKICAgIHNob3J0OiAibGlzdCBkaXJlY3RvcnkgY29udGVudHMiLAogICAgbG9uZzogIiIsCiAgfTsKCiAgY29uc3QgYXBwID0gKGFyZ3M6IHN0cmluZ1tdLCBvcHRpb25zOiBzdHJpbmdbXSkgPT4gewogICAgaWYgKG9wdGlvbnMuZmluZCgobykgPT4gbyA9PT0gIi1oIiB8fCBvID09PSAnLWhlbHAnKSkgewogICAgICBwcmludChgXG4ke2RvY3MubmFtZX0g4oCTICR7ZG9jcy5zaG9ydH1gKTsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIGxldCBvdXQgPSAiXG4iOwogICAgY29uc3QgZmlsZXMgPSBmaWxlU3lzdGVtLmdldENoaWxkcmVuKHBhdGgucCk7CiAgICBmb3IgKGNvbnN0IGYgb2YgZmlsZXMpIHsKICAgICAgb3V0ICs9IGAke2YubmFtZX1cbmA7CiAgICB9CiAgICBwcmludChvdXQpOwogIH07CiAgcmV0dXJuIHsgZG9jcywgYXBwIH07Cn0K",Gx="data:video/mp2t;base64,aW1wb3J0IEZpbGVTeXN0ZW1CYXNoLCB7IEZpbGVTeXN0ZW1UeXBlIH0gZnJvbSAiLi4vZmlsZVN5c3RlbUJhc2giOwoKZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWtkaXIoCiAgcHJpbnQ6IChzOiBzdHJpbmcsIG1kPzogYm9vbGVhbikgPT4gdm9pZCwKICBwYXRoOiBGaWxlU3lzdGVtVHlwZQopIHsKICBjb25zdCBmaWxlU3lzdGVtID0gRmlsZVN5c3RlbUJhc2goKTsKICBjb25zdCBkb2NzID0gewogICAgbmFtZTogIm1rZGlyIiwKICAgIHNob3J0OiAibWFrZSBkaXJlY3RvcnkiLAogICAgbG9uZzogIiIsCiAgfTsKCiAgY29uc3QgYXBwID0gKGFyZ3M6IHN0cmluZ1tdLCBvcHRpb25zOiBzdHJpbmdbXSkgPT4gewogICAgaWYgKG9wdGlvbnMuZmluZCgobykgPT4gbyA9PT0gIi1oIiB8fCBvID09PSAnLWhlbHAnKSkgewogICAgICBwcmludChgXG4ke2RvY3MubmFtZX0g4oCTICR7ZG9jcy5zaG9ydH1gKTsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgewogICAgICBwcmludChgXG5NaXNzaW5nIGRpcmVjdG9yeSBuYW1lYCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGNvbnN0IG91dCA9IGZpbGVTeXN0ZW0ubWFrZShwYXRoLnAsIGFyZ3NbMF0sICJmb2xkZXIiKTsKICAgIGlmIChvdXQgPT09ICJiYWRfYXJncyIpIHsKICAgICAgcHJpbnQoYFxuTWlzc2luZyBkaXJlY3RvcnkgbmFtZWApOwogICAgfSBlbHNlIGlmIChvdXQgPT09ICJiYWRfcGF0aCIpIHsKICAgICAgcHJpbnQoYFxuTm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeWApOwogICAgfSBlbHNlIGlmIChvdXQgPT09ICJmaWxlX2V4aXN0cyIpIHsKICAgICAgcHJpbnQoYFxuRmlsZSBvciBkaXJlY3RvcnkgYWxyZWFkeSBleGlzdHNgKTsKICAgIH0KICB9OwogIHJldHVybiB7IGRvY3MsIGFwcCB9Owp9Cg==",Fx="data:video/mp2t;base64,aW1wb3J0IEZpbGVTeXN0ZW1CYXNoLCB7IEZpbGVTeXN0ZW1UeXBlIH0gZnJvbSAiLi4vZmlsZVN5c3RlbUJhc2giOwoKZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHdkKAogIHByaW50OiAoczogc3RyaW5nLCBtZD86IGJvb2xlYW4pID0+IHZvaWQsCiAgcGF0aDogRmlsZVN5c3RlbVR5cGUKKSB7CiAgY29uc3QgZmlsZVN5c3RlbSA9IEZpbGVTeXN0ZW1CYXNoKCk7CiAgY29uc3QgZG9jcyA9IHsKICAgIG5hbWU6ICJwd2QiLAogICAgc2hvcnQ6ICJwcmludCBuYW1lIG9mIGN1cnJlbnQgZGlyZWN0b3J5IiwKICAgIGxvbmc6ICIiLAogIH07CgogIGNvbnN0IGFwcCA9IChhcmdzOiBzdHJpbmdbXSwgb3B0aW9uczogc3RyaW5nW10pID0+IHsKICAgIGlmIChvcHRpb25zLmZpbmQoKG8pID0+IG8gPT09ICItaCIgfHwgbyA9PT0gJy1oZWxwJykpIHsKICAgICAgcHJpbnQoYFxuJHtkb2NzLm5hbWV9IOKAkyAke2RvY3Muc2hvcnR9YCk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBsZXQgb3V0ID0gIiI7CiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgucC5sZW5ndGg7IGkrKykgewogICAgICBvdXQgKz0gcGF0aC5wW2ldLm5hbWU7CiAgICAgIGlmIChpICE9PSAwICYmIGkgPCBwYXRoLnAubGVuZ3RoIC0gMSkgb3V0ICs9ICIvIjsKICAgIH0KICAgIHByaW50KGBcbiR7b3V0fWApOwogIH07CiAgcmV0dXJuIHsgZG9jcywgYXBwIH07Cn0K",Nx="data:video/mp2t;base64,aW1wb3J0IEZpbGVTeXN0ZW1CYXNoLCB7CiAgRmlsZUJhc2gsCiAgRmlsZVN5c3RlbVR5cGUsCiAgRm9sZGVyQmFzaCwKfSBmcm9tICIuLi9maWxlU3lzdGVtQmFzaCI7CgpleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93KAogIHByaW50OiAoczogc3RyaW5nLCBtZD86IGJvb2xlYW4pID0+IHZvaWQsCiAgcGF0aDogRmlsZVN5c3RlbVR5cGUKKSB7CiAgY29uc3QgZmlsZVN5c3RlbSA9IEZpbGVTeXN0ZW1CYXNoKCk7CiAgY29uc3QgZG9jcyA9IHsKICAgIG5hbWU6ICJzaG93IiwKICAgIHNob3J0OiAicmVuZGVyIG1hcmtkb3duICgubWQpIGZpbGVzIiwKICAgIGxvbmc6ICIiLAogIH07CgogIGNvbnN0IGFwcCA9IChhcmdzOiBzdHJpbmdbXSwgb3B0aW9uczogc3RyaW5nW10pID0+IHsKICAgIGlmIChvcHRpb25zLmZpbmQoKG8pID0+IG8gPT09ICItaCIgfHwgbyA9PT0gIi1oZWxwIikpIHsKICAgICAgcHJpbnQoYFxuJHtkb2NzLm5hbWV9IOKAkyAke2RvY3Muc2hvcnR9YCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGlmIChvcHRpb25zLmZpbmQoKG8pID0+IG8gPT09ICItYSIgfHwgbyA9PT0gIi1hbGwiKSkgewogICAgICBsZXQgYWxsU3RyOiBzdHJpbmcgPSAiIjsKICAgICAgY29uc3QgZmlsZXMgPSBmaWxlU3lzdGVtLmdvSG9tZSgpLmF0KC0xKTsKICAgICAgaWYgKCFmaWxlcykgcmV0dXJuOwoKICAgICAgY29uc3Qgc2hvd0FsbCA9IChwOiAoRm9sZGVyQmFzaCB8IEZpbGVCYXNoKVtdKSA9PiB7CiAgICAgICAgaWYgKCFwKSByZXR1cm47CiAgICAgICAgCiAgICAgICAgcC5mb3JFYWNoKChlKSA9PiB7CiAgICAgICAgICBpZiAoZS5uYW1lID09PSAidGl0bGUiKSByZXR1cm47CgogICAgICAgICAgaWYgKGUubmFtZSA9PT0gInByb2plY3RzIikgewogICAgICAgICAgICBhbGxTdHIgKz0gIlxuXG5cblxuIyBQcm9qZWN0cyI7CiAgICAgICAgICB9CgogICAgICAgICAgaWYgKGUubmFtZS5tYXRjaCgiLm1kIikpIHsKICAgICAgICAgICAgYWxsU3RyICs9IChlIGFzIGFueSBhcyBGaWxlQmFzaCkuZGF0YTsKICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgfQoKICAgICAgICAgIHNob3dBbGwoKGUgYXMgYW55KS5jaGlsZHJlbik7CiAgICAgICAgfSk7CiAgICAgIH07CgogICAgICBzaG93QWxsKGZpbGVzLmNoaWxkcmVuKTsKCiAgICAgIHByaW50KGFsbFN0ciwgdHJ1ZSk7CgogICAgICByZXR1cm47CiAgICB9CgogICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7CiAgICAgIHByaW50KGBcbk1pc3NpbmcgZmlsZW5hbWVgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgZmlsZSA9IGZpbGVTeXN0ZW0uZ290byhwYXRoLnAsIGFyZ3NbMF0pPy5hdCgtMSk7CiAgICBpZiAoIWZpbGUpIHsKICAgICAgcHJpbnQoYFxuTm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeWApOwogICAgICByZXR1cm47CiAgICB9CgogICAgaWYgKCEoImRhdGEiIGluIGZpbGUpKSB7CiAgICAgIHByaW50KGBcbiR7ZmlsZS5uYW1lfTpub3QgYSBmaWxlYCk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBwcmludChmaWxlLmRhdGEsIHRydWUpOwogIH07CiAgcmV0dXJuIHsgZG9jcywgYXBwIH07Cn0K",Px="data:video/mp2t;base64,aW1wb3J0IEZpbGVTeXN0ZW1CYXNoLCB7IEZpbGVTeXN0ZW1UeXBlIH0gZnJvbSAiLi4vZmlsZVN5c3RlbUJhc2giOwoKZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWtkaXIoCiAgcHJpbnQ6IChzOiBzdHJpbmcsIG1kPzogYm9vbGVhbikgPT4gdm9pZCwKICBwYXRoOiBGaWxlU3lzdGVtVHlwZQopIHsKICBjb25zdCBmaWxlU3lzdGVtID0gRmlsZVN5c3RlbUJhc2goKTsKICBjb25zdCBkb2NzID0gewogICAgbmFtZTogInRvdWNoIiwKICAgIHNob3J0OiAiY3JlYXRlIGZpbGUiLAogICAgbG9uZzogIiIsCiAgfTsKCiAgY29uc3QgYXBwID0gKGFyZ3M6IHN0cmluZ1tdLCBvcHRpb25zOiBzdHJpbmdbXSkgPT4gewogICAgaWYgKG9wdGlvbnMuZmluZCgobykgPT4gbyA9PT0gIi1oIiB8fCBvID09PSAnLWhlbHAnKSkgewogICAgICBwcmludChgXG4ke2RvY3MubmFtZX0g4oCTICR7ZG9jcy5zaG9ydH1gKTsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgewogICAgICBwcmludChgXG5NaXNzaW5nIGZpbGUgbmFtZWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCBvdXQgPSBmaWxlU3lzdGVtLm1ha2UocGF0aC5wLCBhcmdzWzBdLCAiZmlsZSIpOwogICAgaWYgKG91dCA9PT0gImJhZF9hcmdzIikgewogICAgICBwcmludChgXG5NaXNzaW5nIGZpbGUgbmFtZWApOwogICAgfSBlbHNlIGlmIChvdXQgPT09ICJiYWRfcGF0aCIpIHsKICAgICAgcHJpbnQoYFxuTm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeWApOwogICAgfQogIH07CiAgcmV0dXJuIHsgZG9jcywgYXBwIH07Cn0K",Vx="data:video/mp2t;base64,aW1wb3J0IEZpbGVTeXN0ZW1CYXNoIGZyb20gIi4vZmlsZVN5c3RlbUJhc2giOwppbXBvcnQgQXBwbGljYXRpb25zIGZyb20gIi4vYXBwbGljYXRpb25zIjsKCnR5cGUgQ21kID0gewogIGRvY3M6IHsKICAgIG5hbWU6IHN0cmluZzsKICAgIHNob3J0OiBzdHJpbmc7CiAgICBsb25nOiBzdHJpbmc7CiAgfTsKICBjbWQ6IChzZWxmOiBDbWQsIGFyZ3M6IHN0cmluZ1tdLCBvcHRpb25zOiBzdHJpbmdbXSkgPT4gdm9pZDsKfTsKCmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2gocHJpbnQ6IChzOiBzdHJpbmcsIG1kPzogYm9vbGVhbikgPT4gdm9pZCkgewogIGNvbnN0IGZpbGVTeXN0ZW0gPSBGaWxlU3lzdGVtQmFzaCgpOwogIGxldCBwYXRoID0geyBwOiBmaWxlU3lzdGVtLmdvSG9tZSgpIH07CgogIGNvbnN0IGdldEFwcCA9IEFwcGxpY2F0aW9ucyhwcmludCwgcGF0aCk7CgogIGZ1bmN0aW9uIHNwbGl0QXJncyhhOiBzdHJpbmdbXSkgewogICAgY29uc3QgYXJnczogc3RyaW5nW10gPSBbXTsKICAgIGNvbnN0IG9wdGlvbnM6IHN0cmluZ1tdID0gW107CgogICAgYS5mb3JFYWNoKCh2KSA9PiB7CiAgICAgIGlmICh2ID09PSAiIikgcmV0dXJuOwoKICAgICAgaWYgKHYuY2hhckF0KDApID09PSAiLSIpIHsKICAgICAgICBvcHRpb25zLnB1c2godik7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBhcmdzLnB1c2godik7CiAgICB9KTsKCiAgICByZXR1cm4gW2FyZ3MsIG9wdGlvbnNdOwogIH0KCiAgZnVuY3Rpb24gY21kTm90Rm91bmQoY21kTmFtZTogc3RyaW5nKSB7CiAgICBwcmludChgXG4ke2NtZE5hbWV9OmNvbW1hbmQgbm90IGZvdW5kYCk7CiAgfQoKICBmdW5jdGlvbiBwcm9tcHQoKSB7CiAgICBsZXQgb3V0ID0gIiI7CiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgucC5sZW5ndGg7IGkrKykgewogICAgICBvdXQgKz0gcGF0aC5wW2ldLm5hbWU7CiAgICAgIGlmIChpICE9PSAwICYmIGkgPCBwYXRoLnAubGVuZ3RoIC0gMSkgb3V0ICs9ICIvIjsKICAgIH0KICAgIG91dCA9IG91dC5yZXBsYWNlKC9eXC9ob21lXC91c2VyLywgIn4iKTsKICAgIGlmIChvdXQgIT09ICJ+Iikgb3V0ICs9ICIgIjsKICAgIHByaW50KGBcbnVzZXI6JHtvdXR9JGApOwogIH0KCiAgZnVuY3Rpb24gaW5wdXQoY21kOiBzdHJpbmcpIHsKICAgIGNtZCA9IGNtZC5yZXBsYWNlQWxsKC9ccysvZywgIiAiKTsKICAgIGNvbnN0IGNtZFNwbGl0ID0gY21kLnNwbGl0KCIgIik7CiAgICBjb25zdCBjbWROYW1lID0gY21kU3BsaXRbMF07CiAgICBjb25zdCBjbWRBcmdzOiBzdHJpbmdbXSA9IGNtZFNwbGl0LnNsaWNlKDEpOwogICAgY29uc29sZS5sb2coImNtZCIsIGNtZE5hbWUsIGNtZEFyZ3MpOwoKICAgIGlmIChjbWQpIHsKICAgICAgY29uc3QgYXBwID0gZ2V0QXBwKGNtZE5hbWUpOwogICAgICBpZiAoYXBwKSB7CiAgICAgICAgY29uc3QgW2FyZ3MsIG9wdGlvbnNdID0gc3BsaXRBcmdzKGNtZEFyZ3MpOwogICAgICAgIGFwcChhcmdzLCBvcHRpb25zKTsKICAgICAgfSBlbHNlIGNtZE5vdEZvdW5kKGNtZE5hbWUpOwogICAgfQoKICAgIHByb21wdCgpOwogIH0KCiAgcmV0dXJuIHsgaW5wdXQgfTsKfQo=",Dx="data:video/mp2t;base64,ZXhwb3J0IHR5cGUgRmlsZUJhc2ggPSB7IG5hbWU6IHN0cmluZzsgZGF0YTogc3RyaW5nIH07CmV4cG9ydCB0eXBlIEZvbGRlckJhc2ggPSB7IG5hbWU6IHN0cmluZzsgY2hpbGRyZW46IChGb2xkZXJCYXNoIHwgRmlsZUJhc2gpW10gfTsKZXhwb3J0IHR5cGUgRmlsZVN5c3RlbVR5cGUgPSB7IHA6IChGb2xkZXJCYXNoIHwgRmlsZUJhc2gpW10gfTsKCmNvbnN0IGRpc2s6IEZvbGRlckJhc2ggPSB7CiAgbmFtZTogIi8iLAogIGNoaWxkcmVuOiBbCiAgICB7IG5hbWU6ICJiaW4iLCBjaGlsZHJlbjogW10gfSwKICAgIHsgbmFtZTogImRldiIsIGNoaWxkcmVuOiBbXSB9LAogICAgeyBuYW1lOiAibGliNjQiLCBjaGlsZHJlbjogW10gfSwKICAgIHsgbmFtZTogIm1lZGlhIiwgY2hpbGRyZW46IFtdIH0sCiAgXSwKfTsKCi8qCkdlbmVyYXRlIHZpcnR1YWwgZmlsZSBzeXN0ZW0gYmFzZWQgb2YgIi4uL2ZpbGUtc3lzdGVtIiBmb2xkZXIuCiovCmZ1bmN0aW9uIGdlbmVyYXRlRlMoZmlsZU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgewogIGZvciAoY29uc3QgcGF0aCBpbiBmaWxlTWFwKSB7CiAgICBjb25zdCB2aXJ0dWFsRnNQYXRoID0gcGF0aC5zcGxpdCgiLyIpLnNsaWNlKDIpOwogICAgbGV0IGN1cnJlbnRGb2xkZXIgPSBkaXNrOwogICAgdmlydHVhbEZzUGF0aC5mb3JFYWNoKChuYW1lLCBpLCBhcnIpID0+IHsKICAgICAgY29uc3QgaXNGaWxlID0gaSA9PT0gYXJyLmxlbmd0aCAtIDE7IC8vIGxhc3QgaXRlbSBvZiB2aXJ0dWFsRnNQYXRoIHdpbGwgYWx3YXlzIGJlIGEgZmlsZS4KICAgICAgaWYgKGlzRmlsZSkgewogICAgICAgIGN1cnJlbnRGb2xkZXIuY2hpbGRyZW4ucHVzaCh7IG5hbWUsIGRhdGE6IGZpbGVNYXBbcGF0aF0gfSk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgbGV0IG5leHQgPSBjdXJyZW50Rm9sZGVyLmNoaWxkcmVuLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gbmFtZSkgYXMKICAgICAgICAgIHwgRm9sZGVyQmFzaAogICAgICAgICAgfCB1bmRlZmluZWQ7CiAgICAgICAgaWYgKCFuZXh0KSB7CiAgICAgICAgICBuZXh0ID0geyBuYW1lLCBjaGlsZHJlbjogW10gfTsKICAgICAgICAgIGN1cnJlbnRGb2xkZXIuY2hpbGRyZW4ucHVzaChuZXh0KTsKICAgICAgICB9CgogICAgICAgIGN1cnJlbnRGb2xkZXIgPSBuZXh0OwogICAgICB9CiAgICB9KTsKICB9Cn0KCmdlbmVyYXRlRlMoCiAgaW1wb3J0Lm1ldGEuZ2xvYigiLi4vZmlsZS1zeXN0ZW0vKiovKi5tZCIsIHsKICAgIHF1ZXJ5OiAiP3JhdyIsCiAgICBpbXBvcnQ6ICJkZWZhdWx0IiwKICAgIGVhZ2VyOiB0cnVlLAogIH0pCik7CgpnZW5lcmF0ZUZTKAogIGltcG9ydC5tZXRhLmdsb2IoIi4uL2ZpbGUtc3lzdGVtLyoqLyoucG5nIiwgewogICAgcXVlcnk6ICI/dXJsIiwKICAgIGltcG9ydDogImRlZmF1bHQiLAogICAgZWFnZXI6IHRydWUsCiAgfSkKKTsKCmNvbnNvbGUubG9nKGRpc2spOwoKCmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVTeXN0ZW1CYXNoKCkgewogIGZ1bmN0aW9uIF9wYXRoU3RyVG9BcnIocDogc3RyaW5nKSB7CiAgICBjb25zdCBwYXRoQXJyYXkgPSBwLnNwbGl0KCIvIik7CiAgICAvLyByZW1vdmUgdHJhaWxsaW5nIHNsYXNoCiAgICBpZiAocGF0aEFycmF5Lmxlbmd0aCA+IDAgJiYgcGF0aEFycmF5LmF0KC0xKSA9PT0gIiIpIHBhdGhBcnJheS5wb3AoKTsKCiAgICByZXR1cm4gcGF0aEFycmF5OwogIH0KCiAgZnVuY3Rpb24gX2J1aWxkUGF0aChwYXRoOiAoRm9sZGVyQmFzaCB8IEZpbGVCYXNoKVtdLCBuZXdQYXRoQXJyYXk6IHN0cmluZ1tdKSB7CiAgICBmb3IgKGNvbnN0IHAgb2YgbmV3UGF0aEFycmF5KSB7CiAgICAgIHN3aXRjaCAocCkgewogICAgICAgIGNhc2UgIiI6CiAgICAgICAgICAvLyBnbyB0byByb290CiAgICAgICAgICBwYXRoID0gW2Rpc2tdOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiLi4iOgogICAgICAgICAgLy8gZ28gdXAgYSBmb2xkZXIKICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDEpIHBhdGgucG9wKCk7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJ+IjoKICAgICAgICAgIC8vIGdvIGhvbWUKICAgICAgICAgIHBhdGggPSBnb0hvbWUoKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIi4iOgogICAgICAgICAgLy8gY3VycmVudCBmb2xkZXIKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAvLyBnb3RvIG5leHQgbG9jYXRpb24KICAgICAgICAgIGNvbnN0IGN1cnJlbnRGb2xkZXIgPSBwYXRoLmF0KC0xKTsKICAgICAgICAgIGlmICghY3VycmVudEZvbGRlciB8fCAhKCJjaGlsZHJlbiIgaW4gY3VycmVudEZvbGRlcikpCiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7CgogICAgICAgICAgY29uc3QgbmV4dCA9IGN1cnJlbnRGb2xkZXIuY2hpbGRyZW4uZmluZCgoZikgPT4gZi5uYW1lID09PSBwKTsKICAgICAgICAgIGlmICghbmV4dCkgcmV0dXJuIHVuZGVmaW5lZDsKCiAgICAgICAgICBwYXRoLnB1c2gobmV4dCk7CiAgICAgICAgICBicmVhazsKICAgICAgfQogICAgfQogICAgcmV0dXJuIHBhdGg7CiAgfQoKICBmdW5jdGlvbiBnZXRDaGlsZHJlbihwYXRoOiAoRm9sZGVyQmFzaCB8IEZpbGVCYXNoKVtdKSB7CiAgICByZXR1cm4gKHBhdGhbcGF0aC5sZW5ndGggLSAxXSBhcyBhbnkpLmNoaWxkcmVuOwogIH0KCiAgZnVuY3Rpb24gZ29Ib21lKCkgewogICAgY29uc3QgaG9tZSA9IGRpc2suY2hpbGRyZW4uZmluZCgobSkgPT4gbS5uYW1lID09PSAiaG9tZSIpIGFzIEZvbGRlckJhc2g7CiAgICBjb25zdCB1c2VyID0gaG9tZS5jaGlsZHJlbi5maW5kKChtKSA9PiBtLm5hbWUgPT09ICJ1c2VyIikgYXMgRm9sZGVyQmFzaDsKICAgIHJldHVybiBbZGlzaywgaG9tZSwgdXNlcl07CiAgfQoKICBmdW5jdGlvbiBnb3RvKHBhdGg6IChGb2xkZXJCYXNoIHwgRmlsZUJhc2gpW10sIG5ld1BhdGg6IHN0cmluZykgewogICAgcmV0dXJuIF9idWlsZFBhdGgoWy4uLnBhdGhdLCBfcGF0aFN0clRvQXJyKG5ld1BhdGgpKTsKICB9CiAgZnVuY3Rpb24gbWFrZSgKICAgIHBhdGg6IChGb2xkZXJCYXNoIHwgRmlsZUJhc2gpW10sCiAgICBuZXdQYXRoOiBzdHJpbmcsCiAgICB0eXBlOiAiZmlsZSIgfCAiZm9sZGVyIgogICkgewogICAgY29uc3QgbmV3UGF0aEFycmF5ID0gX3BhdGhTdHJUb0FycihuZXdQYXRoKTsKICAgIGNvbnN0IG5hbWUgPSBuZXdQYXRoQXJyYXkucG9wKCk7CgogICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICJiYWRfYXJncyI7CgogICAgY29uc3QgY3VycmVudFBhdGggPSBfYnVpbGRQYXRoKFsuLi5wYXRoXSwgbmV3UGF0aEFycmF5KTsKICAgIGNvbnN0IGN1cnJlbnRGb2xkZXIgPSBjdXJyZW50UGF0aD8uYXQoLTEpOwoKICAgIGlmICghY3VycmVudEZvbGRlciB8fCAhKCJjaGlsZHJlbiIgaW4gY3VycmVudEZvbGRlcikpIHJldHVybiAiYmFkX3BhdGgiOwoKICAgIC8vIENoZWNrIGlmIGZvbGRlciBhbGxyZWFkeSBleGlzaXRzCiAgICBpZiAoY3VycmVudEZvbGRlci5jaGlsZHJlbi5maW5kKChtKSA9PiBtLm5hbWUgPT09IG5hbWUpKQogICAgICByZXR1cm4gImZpbGVfZXhpc3RzIjsKCiAgICBjdXJyZW50Rm9sZGVyLmNoaWxkcmVuLnB1c2goCiAgICAgIHR5cGUgPT09ICJmb2xkZXIiID8geyBuYW1lLCBjaGlsZHJlbjogW10gfSA6IHsgbmFtZSwgZGF0YTogIiIgfQogICAgKTsKICAgIHJldHVybiAib2siOwogIH0KCiAgcmV0dXJuIHsgZ2V0Q2hpbGRyZW4sIGdvSG9tZSwgZ290bywgbWFrZSB9Owp9Cg==",Hx="/renderDesk/assets/index-B4kb6lBG.ts",Ux="data:video/mp2t;base64,Ly8vIDxyZWZlcmVuY2UgdHlwZXM9InZpdGUvY2xpZW50IiAvPgo=",zx="/renderDesk/assets/index-2Xr_3GJx.ts",Wx="data:video/mp2t;base64,aW1wb3J0ICogYXMgVEhSRUUgZnJvbSAidGhyZWUiOwppbXBvcnQgU2NyZWVuUmVuZGVyRW5naW5lIGZyb20gIi4vcmVuZGVyRW5naW5lIjsKaW1wb3J0IFNjcmVlblRleHRFbmdpbmUgZnJvbSAiLi90ZXh0RW5naW5lIjsKaW1wb3J0IHsgQXNzaXN0cyB9IGZyb20gIi4uL2xvYWRlciI7CmltcG9ydCBUZXJtaW5hbCBmcm9tICIuLi8uLi90ZXJtaW5hbCI7CgpleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JlZW4oCiAgYXNzaXN0czogQXNzaXN0cywKICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcgopIHsKICBjb25zdCBzY2VuZVJUVCA9IG5ldyBUSFJFRS5TY2VuZSgpOwoKICAvLyBHZW9tZXRyeQogIGNvbnN0IGJhY2tHcm91bmQgPSBuZXcgVEhSRUUuTWVzaCgKICAgIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEsIDEsIDEsIDEpLAogICAgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICJyZWQiIH0pCiAgKTsKICBiYWNrR3JvdW5kLnBvc2l0aW9uLnNldCgwLjUsIC0wLjUsIC0wLjAxKTsKCiAgY29uc3Qgc2NyZWVuVGV4dEVuZ2luZSA9IFNjcmVlblRleHRFbmdpbmUoCiAgICBhc3Npc3RzLAogICAgc2NlbmVSVFQsCiAgKTsKCiAgY29uc3Qgc2NyZWVuUmVuZGVyRW5naW5lID0gU2NyZWVuUmVuZGVyRW5naW5lKGFzc2lzdHMsIHJlbmRlcmVyLCBzY2VuZVJUVCk7CgogIFRlcm1pbmFsKHNjcmVlblRleHRFbmdpbmUpOwoKICBjb25zdCB0aWNrID0gKGRlbHRhVGltZTogbnVtYmVyLCBlbGFwc2VkVGltZTogbnVtYmVyKSA9PiB7CiAgICBzY3JlZW5SZW5kZXJFbmdpbmUudGljayhkZWx0YVRpbWUsIGVsYXBzZWRUaW1lKTsKICAgIHNjcmVlblRleHRFbmdpbmUudGljayhkZWx0YVRpbWUsIGVsYXBzZWRUaW1lKTsKICB9OwoKICByZXR1cm4geyB0aWNrLCBzY3JlZW5SZW5kZXJFbmdpbmUsIHNjcmVlblRleHRFbmdpbmUgfTsKfQo=",kx="data:video/mp2t;base64,aW1wb3J0ICogYXMgVEhSRUUgZnJvbSAidGhyZWUiOwovLyBAdHMtaWdub3JlCmltcG9ydCB2ZXJ0ZXhTaGFkZXIgZnJvbSAiLi4vc2hhZGVycy92ZXJ0ZXgudmVydD9yYXciOwovLyBAdHMtaWdub3JlCmltcG9ydCBsYWdGcmFnbWVudFNoYWRlciBmcm9tICIuLi9zaGFkZXJzL2xhZy5mcmFnP3JhdyI7CmltcG9ydCB7IFNoYWRlclRvU2NyZWVuIH0gZnJvbSAiLi9zaGFkZXJUb1NjcmVlbiI7CgpjbGFzcyBMYWcgewogIG91dHB1dENvcHk6IFNoYWRlclRvU2NyZWVuOwogIHNoYWRlclRvU2NyZWVuMTogU2hhZGVyVG9TY3JlZW47CiAgb3V0cHV0VGV4dHVyZTogVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQ7CgogIGxhZ01hdDogVEhSRUUuU2hhZGVyTWF0ZXJpYWw7CiAgY29uc3RydWN0b3IoYnVmZmVyOiBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHsKICAgIHRoaXMubGFnTWF0ID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCk7CiAgICB0aGlzLnNoYWRlclRvU2NyZWVuMSA9IG5ldyBTaGFkZXJUb1NjcmVlbigKICAgICAgewogICAgICAgIHVuaWZvcm1zOiB7CiAgICAgICAgICB1RGlmZnVzZTogeyB2YWx1ZTogYnVmZmVyLnRleHR1cmUgfSwKICAgICAgICAgIHVMYWdUZXg6IHsgdmFsdWU6IG51bGwgfSwKICAgICAgICAgIHVOZWVkVXBkYXRlOiB7IHZhbHVlOiBmYWxzZSB9LAogICAgICAgIH0sCiAgICAgICAgdmVydGV4U2hhZGVyOiB2ZXJ0ZXhTaGFkZXIsCiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGxhZ0ZyYWdtZW50U2hhZGVyLAogICAgICB9LAogICAgICB3aWR0aCwKICAgICAgaGVpZ2h0CiAgICApOwogICAgdGhpcy5vdXRwdXRUZXh0dXJlID0gdGhpcy5zaGFkZXJUb1NjcmVlbjEub3V0cHV0VGV4dHVyZTsKCiAgICB0aGlzLm91dHB1dENvcHkgPSBuZXcgU2hhZGVyVG9TY3JlZW4oCiAgICAgIHsKICAgICAgICB1bmlmb3JtczogewogICAgICAgICAgdURpZmZ1c2U6IHsgdmFsdWU6IHRoaXMub3V0cHV0VGV4dHVyZS50ZXh0dXJlIH0sCiAgICAgICAgfSwKICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHZlcnRleFNoYWRlciwKICAgICAgICBmcmFnbWVudFNoYWRlcjogYHVuaWZvcm0gc2FtcGxlcjJEIHVEaWZmdXNlOyB2YXJ5aW5nIHZlYzIgdlV2OyB2b2lkIG1haW4oKSB7Z2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVEaWZmdXNlLCB2VXYpO31gLAogICAgICB9LAogICAgICB3aWR0aCwKICAgICAgaGVpZ2h0CiAgICApOwoKICAgIHRoaXMuc2hhZGVyVG9TY3JlZW4xLnNoYWRlci51bmlmb3Jtcy51TGFnVGV4LnZhbHVlID0KICAgICAgdGhpcy5vdXRwdXRDb3B5Lm91dHB1dFRleHR1cmUudGV4dHVyZTsKICB9CgogIHJlbmRlcihyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlciwgdGV4PzogVEhSRUUuVGV4dHVyZSkgewogICAgdGhpcy5zaGFkZXJUb1NjcmVlbjEucmVuZGVyKHJlbmRlcmVyKTsKICAgIHRoaXMub3V0cHV0Q29weS5yZW5kZXIocmVuZGVyZXIpOwogIH0KfQoKZXhwb3J0IHsgTGFnIH07Cg==",Ox="data:video/mp2t;base64,aW1wb3J0ICogYXMgVEhSRUUgZnJvbSAidGhyZWUiOwppbXBvcnQgeyBFZmZlY3RDb21wb3NlciB9IGZyb20gInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9FZmZlY3RDb21wb3Nlci5qcyI7CmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tICJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUmVuZGVyUGFzcy5qcyI7CmltcG9ydCB7IFVucmVhbEJsb29tUGFzcyB9IGZyb20gInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9VbnJlYWxCbG9vbVBhc3MuanMiOwovLyBAdHMtaWdub3JlCmltcG9ydCB2ZXJ0ZXhTaGFkZXIgZnJvbSAiLi4vc2hhZGVycy92ZXJ0ZXgudmVydD9yYXciOwovLyBAdHMtaWdub3JlCmltcG9ydCBub2lzZUZyYWdtZW50U2hhZGVyIGZyb20gIi4uL3NoYWRlcnMvbm9pc2UuZnJhZz9yYXciOwppbXBvcnQgeyBMYWcgfSBmcm9tICIuL2xhZyI7CmltcG9ydCBEZWx0YVRpbWUgZnJvbSAiLi4vLi4vRGVsdGFUaW1lIjsKaW1wb3J0IHsgU2hhZGVyVG9TY3JlZW4gfSBmcm9tICIuL3NoYWRlclRvU2NyZWVuIjsKaW1wb3J0IHsgQXNzaXN0cyB9IGZyb20gIi4uL2xvYWRlciI7CgpleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JlZW5SZW5kZXJFbmdpbmUoCiAgYXNzaXN0czogQXNzaXN0cywKICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlciwKICBzY2VuZVJUVDogVEhSRUUuU2NlbmUKKSB7CiAgY29uc3QgcmVzb2x1dGlvbiA9IDUxMiArIDY0OwoKICBjb25zdCBjYW1lcmFSVFQgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKC0wLjEsIDEuNDk2LCAwLjEsIC0xLjEsIDEsIDMpOwogIHNjZW5lUlRULmFkZChjYW1lcmFSVFQpOwogIGNhbWVyYVJUVC5wb3NpdGlvbi5zZXQoMCwgMCwgMSk7CgogIGNvbnN0IHJ0VGV4dHVyZSA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldChyZXNvbHV0aW9uICogMS4zMywgcmVzb2x1dGlvbiwgewogICAgZm9ybWF0OiBUSFJFRS5SR0JGb3JtYXQsCiAgfSk7CgogIGNvbnN0IGNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHJlbmRlcmVyLCBydFRleHR1cmUpOwogIGNvbXBvc2VyLnJlbmRlclRvU2NyZWVuID0gZmFsc2U7CgogIGNvbnN0IHJlbmRlclBhc3MgPSBuZXcgUmVuZGVyUGFzcyhzY2VuZVJUVCwgY2FtZXJhUlRUKTsKICBjb21wb3Nlci5hZGRQYXNzKHJlbmRlclBhc3MpOwoKICBjb25zdCBub2lzZU1hdCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7CiAgICB1bmlmb3JtczogewogICAgICB1RGlmZnVzZTogeyB2YWx1ZTogbnVsbCB9LAogICAgICB1VGltZTogeyB2YWx1ZTogMSB9LAogICAgICB1UHJvZ3Jlc3M6IHsgdmFsdWU6IDEuMiB9LAogICAgfSwKICAgIHZlcnRleFNoYWRlcjogdmVydGV4U2hhZGVyLAogICAgZnJhZ21lbnRTaGFkZXI6IG5vaXNlRnJhZ21lbnRTaGFkZXIsCiAgfSk7CgogIGNvbnN0IGJsb29tUGFzcyA9IG5ldyBVbnJlYWxCbG9vbVBhc3MoCiAgICBuZXcgVEhSRUUuVmVjdG9yMigxMjgsIDEyOCksCiAgICAxLjEsCiAgICAwLjQsCiAgICAwCiAgKTsKICBjb21wb3Nlci5hZGRQYXNzKGJsb29tUGFzcyk7CgogIGNvbnN0IGxhZyA9IG5ldyBMYWcoY29tcG9zZXIucmVhZEJ1ZmZlciwgcmVzb2x1dGlvbiAqIDEuMzMsIHJlc29sdXRpb24pOwogIG5vaXNlTWF0LnVuaWZvcm1zLnVEaWZmdXNlLnZhbHVlID0gbGFnLm91dHB1dFRleHR1cmUudGV4dHVyZTsKCiAgbGV0IHVQcm9ncmVzcyA9IDEuMjsKICBjb25zdCB0aWNrID0gKGRlbHRhVGltZTogbnVtYmVyLCBlbGFwc2VkVGltZTogbnVtYmVyKSA9PiB7CiAgICBub2lzZU1hdC51bmlmb3Jtcy51VGltZS52YWx1ZSA9IGVsYXBzZWRUaW1lOwogICAgbm9pc2VNYXQudW5pZm9ybXMudVByb2dyZXNzLnZhbHVlID0gdVByb2dyZXNzOwoKICAgIHNoYWRlclRvU2NyZWVuLnNoYWRlci51bmlmb3Jtcy51VGltZS52YWx1ZSA9IGVsYXBzZWRUaW1lOwogICAgc2hhZGVyVG9TY3JlZW4uc2hhZGVyLnVuaWZvcm1zLnVQcm9ncmVzcy52YWx1ZSA9IHVQcm9ncmVzczsKCiAgICBzaGFkZXJUb1NjcmVlbi5yZW5kZXIocmVuZGVyZXIpOwoKICAgIHVQcm9ncmVzcyAtPSBkZWx0YVRpbWUgKiAwLjI7CiAgICBpZiAodVByb2dyZXNzIDwgMCkgdVByb2dyZXNzID0gMS4yOwoKICAgIGxhZy5yZW5kZXIocmVuZGVyZXIpOwogICAgY29tcG9zZXIucmVuZGVyKCk7CiAgfTsKCiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKgoKICBjb25zdCBlbnZpcm9ubWVudE1hcFRleHR1cmUgPSBhc3Npc3RzLmVudmlyb25tZW50TWFwVGV4dHVyZTsKICBlbnZpcm9ubWVudE1hcFRleHR1cmUuZW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2Rpbmc7CgogIGNvbnN0IHNoYWRlclRvU2NyZWVuID0gbmV3IFNoYWRlclRvU2NyZWVuKAogICAgewogICAgICB1bmlmb3JtczogewogICAgICAgIHVEaWZmdXNlOiB7IHZhbHVlOiBsYWcub3V0cHV0VGV4dHVyZS50ZXh0dXJlIH0sCiAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDEgfSwKICAgICAgICB1UHJvZ3Jlc3M6IHsgdmFsdWU6IDEuMiB9LAogICAgICB9LAogICAgICB2ZXJ0ZXhTaGFkZXI6IHZlcnRleFNoYWRlciwKICAgICAgZnJhZ21lbnRTaGFkZXI6IG5vaXNlRnJhZ21lbnRTaGFkZXIsCiAgICB9LAogICAgcmVzb2x1dGlvbiAqIDEuMzMsCiAgICByZXNvbHV0aW9uCiAgKTsKCiAgc2hhZGVyVG9TY3JlZW4ub3V0cHV0VGV4dHVyZS50ZXh0dXJlLmVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nOwogIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKCk7CiAgbWF0ZXJpYWwubWV0YWxuZXNzID0gMDsKICBtYXRlcmlhbC5yb3VnaG5lc3MgPSAwLjEyNTsKICBtYXRlcmlhbC5lbnZNYXAgPSBlbnZpcm9ubWVudE1hcFRleHR1cmU7CiAgbWF0ZXJpYWwuZW52TWFwSW50ZW5zaXR5ID0gMC43OwogIG1hdGVyaWFsLm1hcCA9IHNoYWRlclRvU2NyZWVuLm91dHB1dFRleHR1cmUudGV4dHVyZTsKCiAgcmV0dXJuIHsgdGljaywgbWF0ZXJpYWwgfTsKfQo=",Zx="data:video/mp2t;base64,aW1wb3J0ICogYXMgVEhSRUUgZnJvbSAidGhyZWUiOwoKY2xhc3MgU2hhZGVyVG9TY3JlZW4gewogIHNjZW5lUlRUOiBUSFJFRS5TY2VuZTsKICBjYW1lcmFSVFQ6IFRIUkVFLkNhbWVyYTsKICBvdXRwdXRUZXh0dXJlOiBUSFJFRS5XZWJHTFJlbmRlclRhcmdldDsKICBzaGFkZXI6IFRIUkVFLlNoYWRlck1hdGVyaWFsOwogIGNvbnN0cnVjdG9yKAogICAgc2hhZGVyOiBUSFJFRS5TaGFkZXJNYXRlcmlhbFBhcmFtZXRlcnMsCiAgICB3aWR0aDogbnVtYmVyLAogICAgaGVpZ2h0OiBudW1iZXIKICApIHsKICAgIGNvbnN0IGFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0OwogICAgdGhpcy5zY2VuZVJUVCA9IG5ldyBUSFJFRS5TY2VuZSgpOwogICAgdGhpcy5jYW1lcmFSVFQgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKAogICAgICAtMC41ICogYXNwZWN0LAogICAgICAwLjUgKiBhc3BlY3QsCiAgICAgIDAuNSwKICAgICAgLTAuNSwKICAgICAgMSwKICAgICAgMwogICAgKTsKICAgIHRoaXMuY2FtZXJhUlRULnBvc2l0aW9uLnNldCgwLCAwLCAxKTsKICAgIHRoaXMuc2NlbmVSVFQuYWRkKHRoaXMuY2FtZXJhUlRUKTsKICAgIHRoaXMuY2FtZXJhUlRULnBvc2l0aW9uLnNldCgwLCAwLCAxKTsKCiAgICB0aGlzLm91dHB1dFRleHR1cmUgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQod2lkdGgsIGhlaWdodCwgewogICAgICBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwKICAgIH0pOwoKICAgIHRoaXMuc2hhZGVyID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHNoYWRlcik7CgogICAgY29uc3QgcGxhbmUgPSBuZXcgVEhSRUUuTWVzaCgKICAgICAgbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMSAqIGFzcGVjdCwgMSwgMSwgMSksCiAgICAgIHRoaXMuc2hhZGVyCiAgICApOwogICAgdGhpcy5zY2VuZVJUVC5hZGQocGxhbmUpOwogICAgdGhpcy5zY2VuZVJUVC5hZGQobmV3IFRIUkVFLkF4ZXNIZWxwZXIoMCkpOwoKICB9CgogIHJlbmRlcihyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlciwgdGV4PzogVEhSRUUuVGV4dHVyZSkgewogICAgcmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KHRoaXMub3V0cHV0VGV4dHVyZSk7CiAgICByZW5kZXJlci5jbGVhcigpOwogICAgcmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmVSVFQsIHRoaXMuY2FtZXJhUlRUKTsKICB9Cn0KCmV4cG9ydCB7IFNoYWRlclRvU2NyZWVuIH07Cg==",Xx="/renderDesk/assets/textEngine-Bn329fxD.ts",Yx="data:application/octet-stream;base64,I2RlZmluZSBMQUcgMC44CiNkZWZpbmUgTEFHX0lOVkVSU0UgMC4yCgp1bmlmb3JtIHNhbXBsZXIyRCB1RGlmZnVzZTsKdW5pZm9ybSBzYW1wbGVyMkQgdUxhZ1RleDsKdmFyeWluZyB2ZWMyIHZVdjsKCnZvaWQgbWFpbigpCnsKICAgIHZlYzQgRGlmZnVzZSA9IHRleHR1cmUyRCh1RGlmZnVzZSwgdlV2KTsKICAgIHZlYzQgTGFnVGV4ID0gdGV4dHVyZTJEKHVMYWdUZXgsIHZVdik7CgogICAgZ2xfRnJhZ0NvbG9yID0gKERpZmZ1c2UgKiBMQUdfSU5WRVJTRSkgKyAoTGFnVGV4ICogTEFHKTsgICAgICAgICAgICAKfQ==",Kx="data:application/octet-stream;base64,I2RlZmluZSBQSSAzLjE0MTU5MjY1MzgKCiNkZWZpbmUgTElORV9TSVpFIDI4OC4wCiNkZWZpbmUgTElORV9TVFJFTkdUSCAwLjA1CiNkZWZpbmUgTElORV9PRkZTRVQgMi4wCgojZGVmaW5lIE5PSVNFX1NUUkVOR1RIIDAuMgoKdW5pZm9ybSBzYW1wbGVyMkQgdURpZmZ1c2U7CnVuaWZvcm0gZmxvYXQgdVRpbWU7CnVuaWZvcm0gZmxvYXQgdVByb2dyZXNzOwp2YXJ5aW5nIHZlYzIgdlV2OwoKZmxvYXQgcmFuZCh2ZWMyIGNvKXsKICAgIHJldHVybiBmcmFjdChzaW4oZG90KGNvLCB2ZWMyKDEyLjk4OTgsIDc4LjIzMykpKSAqIDQzNzU4LjU0NTMpOwp9CgoKZmxvYXQgc3F1YXJlV2F2ZShmbG9hdCB4KXsKICAgIHJldHVybiAoCiAgICAgICAgICg0LjAvUEkgKiBzaW4oUEkqTElORV9TSVpFKngpKQogICAgICAgICsoNC4wL1BJICogMS4wLzMuMCAqIHNpbigzLjAqUEkqTElORV9TSVpFKngpKQogICAgICAgICsoNC4wL1BJICogMS4wLzUuMCAqIHNpbig1LjAqUEkqTElORV9TSVpFKngpKQogICAgICAgIC0gTElORV9PRkZTRVQKICAgICAgICApKkxJTkVfU1RSRU5HVEggOwp9Cgp2ZWM0IHByb2dyZXNzKCl7CiAgICAgaWYgKHZVdi55IDwgdVByb2dyZXNzICYmIHZVdi55ID4gdVByb2dyZXNzIC0gMC4yKSB7CiAgICAgICAgcmV0dXJuIHZlYzQoMC4xLDAuMSwwLjEsMS4wKSAqICh1UHJvZ3Jlc3MgLSB2VXYueSkgOwogICAgfQogICAgICAgIGVsc2Uge3JldHVybiB2ZWM0KDAsMCwwLDApO30KfQoKdm9pZCBtYWluKCkKICAgICAgICB7CiAgICAgICAgICAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodURpZmZ1c2UsIHZVdik7CiAgICAgICAgICAgIGZsb2F0IHIgPSByYW5kKHZVdip1VGltZSk7CgogICAgICAgICAgICB2ZWM0IHAgPSBwcm9ncmVzcygpOwogICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSBjb2xvciAgKyAgKHZlYzQocixyLHIsMCkgKiAocC5hICsgTk9JU0VfU1RSRU5HVEgpKSArIHNxdWFyZVdhdmUodlV2LnkpOyAgICAgICAgICAgIAogICAgICAgIH0=",Jx="data:application/octet-stream;base64,CnZhcnlpbmcgdmVjMiB2VXY7CnZvaWQgbWFpbigpCnsKICAgIHZVdiA9IHV2OwogICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTsKfQ==";class jx extends Ht{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ey(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new ly(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=xn.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new gr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={};if(typeof e=="string")s=e;else if(xn.decodeText(new Uint8Array(e,0,4))===Jc){try{o[Le.KHR_BINARY_GLTF]=new cy(e)}catch(h){i&&i(h);return}s=o[Le.KHR_BINARY_GLTF].content}else s=xn.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new by(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],d=l.extensionsRequired||[];switch(h){case Le.KHR_MATERIALS_UNLIT:o[h]=new $x;break;case Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[h]=new dy;break;case Le.KHR_DRACO_MESH_COMPRESSION:o[h]=new uy(l,this.dracoLoader);break;case Le.KHR_TEXTURE_TRANSFORM:o[h]=new hy;break;case Le.KHR_MESH_QUANTIZATION:o[h]=new fy;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}}function Qx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Le={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class qx{constructor(e){this.parser=e,this.name=Le.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new re(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dc(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Pc(u),c.distance=h;break;case"spot":c=new Fc(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class $x{constructor(){this.name=Le.KHR_MATERIALS_UNLIT}getMaterialType(){return st}extendParams(e,t,n){const i=[];e.color=new re(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(i)}}class ey{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new K(a,a)}return Promise.all(s)}}class ty{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class ny{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class iy{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new re(a[0],a[1],a[2]),Promise.all(s)}}class sy{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ry{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new re(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture).then(function(l){l.encoding=xt})),Promise.all(s)}}class oy{constructor(e){this.parser=e,this.name=Le.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=n.images[s.source],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o,a)}}class ay{constructor(e){this.parser=e,this.name=Le.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ly{constructor(e){this.name=Le.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,o.ready]).then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new ArrayBuffer(u*h),f=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})}else return null}}const Jc="glTF",Xi=12,Il={JSON:1313821514,BIN:5130562};class cy{constructor(e){this.name=Le.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xi);if(this.header={magic:xn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Xi,i=new DataView(e,Xi);let s=0;for(;s<n;){const o=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===Il.JSON){const l=new Uint8Array(e,Xi+s,o);this.content=xn.decodeText(l)}else if(a===Il.BIN){const l=Xi+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Le.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=wo[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=wo[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=ds[d.componentType];c[h]=f,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const g=d.attributes[f],v=l[f];v!==void 0&&(g.normalized=v)}h(d)},a,c)})})}}class hy{constructor(){this.name=Le.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class bo extends Ri{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new re().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class dy{constructor(){this.name=Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return bo}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new re(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const o=i.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new re(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new re(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const o=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",o)),s.push(n.assignTexture(e,"specularMap",o))}return Promise.all(s)}createMaterial(e){const t=new bo(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Dn,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class fy{constructor(){this.name=Le.KHR_MESH_QUANTIZATION}}class Vn extends en{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}}Vn.prototype.beforeStart_=Vn.prototype.copySampleValue_;Vn.prototype.afterEnd_=Vn.prototype.copySampleValue_;Vn.prototype.interpolate_=function(r,e,t,n){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=n-e,u=(t-e)/c,h=u*u,d=h*u,f=r*l,g=f-l,v=-2*d+3*h,x=d-h,m=1-v,p=x-h+u;for(let b=0;b!==o;b++){const _=s[g+b+o],M=s[g+b+a]*c,T=s[f+b+o],y=s[f+b]*c;i[b]=m*_+p*M+v*T+x*y}return i};const py=new vt;class my extends Vn{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return py.fromArray(s).normalize().toArray(s),s}}const Kt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Al={9728:qe,9729:rt,9984:uo,9985:Ul,9986:ho,9987:Mi},Tl={33071:bt,33648:qs,10497:vi},El={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},dn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gy={CUBICSPLINE:void 0,LINEAR:xi,STEP:ss},ro={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ri({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),r.DefaultMaterial}function Yi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xy(r,e,t){let n=!1,i=!1;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(r);const s=[],o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];if(n){const u=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):r.attributes.position;s.push(u)}if(i){const u=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):r.attributes.normal;o.push(u)}}return Promise.all([Promise.all(s),Promise.all(o)]).then(function(a){const l=a[0],c=a[1];return n&&(r.morphAttributes.position=l),i&&(r.morphAttributes.normal=c),r.morphTargetsRelative=!0,r})}function yy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _y(r){const e=r.extensions&&r.extensions[Le.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Rl(e.attributes):t=r.indices+":"+Rl(r.attributes)+":"+r.mode,t}function Rl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Mo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class by{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qx,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap<"u"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new zc(this.options.manager):this.textureLoader=new vr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Yi(s,a,i),Gn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Le.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(xn.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=El[i.type],c=ds[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,x;if(f&&f!==h){const m=Math.floor(d/f),p="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let b=t.cache.get(p);b||(v=new c(a,m*f,i.count*f/u),b=new Ei(v,f/u),t.cache.add(p,b)),x=new _i(b,l,d%f/u,g)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),x=new Je(v,l,g);if(i.sparse!==void 0){const m=El.SCALAR,p=ds[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,M=new p(o[1],b,i.sparse.count*m),T=new c(o[2],_,i.sparse.count*l);a!==null&&(x=new Je(x.array.slice(),x.itemSize,x.normalized));for(let y=0,F=M.length;y<F;y++){const Z=M[y];if(x.setX(Z,T[y*l]),l>=2&&x.setY(Z,T[y*l+1]),l>=3&&x.setZ(Z,T[y*l+2]),l>=4&&x.setW(Z,T[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e],s=t.images[i.source];let o=this.textureLoader;if(s.uri){const a=n.manager.getHandler(s.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,o=this.options,a=s.textures[e],l=(t.uri||t.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let u=t.uri||"",h=!1;if(t.bufferView!==void 0)u=i.getDependency("bufferView",t.bufferView).then(function(f){h=!0;const g=new Blob([f],{type:t.mimeType});return u=c.createObjectURL(g),u});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(u).then(function(f){return new Promise(function(g,v){let x=g;n.isImageBitmapLoader===!0&&(x=function(m){const p=new nt(m);p.needsUpdate=!0,g(p)}),n.load(xn.resolveURL(f,o.path),x,void 0,v)})}).then(function(f){h===!0&&c.revokeObjectURL(u),f.flipY=!1,a.name&&(f.name=a.name);const v=(s.samplers||{})[a.sampler]||{};return f.magFilter=Al[v.magFilter]||rt,f.minFilter=Al[v.minFilter]||Mi,f.wrapS=Tl[v.wrapS]||vi,f.wrapT=Tl[v.wrapT]||vi,i.associations.set(f,{textures:e}),f}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",u),null});return this.textureCache[l]=d,d}assignTexture(e,t,n){const i=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[Le.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Le.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=i.associations.get(s);s=i.extensions[Le.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),i.associations.set(s,a)}}return e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Vo,tt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new zn,tt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Ri}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else if(l[Le.KHR_MATERIALS_UNLIT]){const h=i[Le.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Nn);const u=s.alphaMode||ro.OPAQUE;if(u===ro.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.format=qt,a.transparent=!1,u===ro.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==st&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new K(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==st&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==st&&(a.emissive=new re().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==st&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let h;return o===bo?h=i[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new o(a),s.name&&(h.name=s.name),h.map&&(h.map.encoding=xt),h.emissiveMap&&(h.emissiveMap.encoding=xt),Gn(h,s),t.associations.set(h,{materials:e}),s.extensions&&Yi(i,h,s),h})}createUniqueName(e){const t=Fe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Le.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ll(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=_y(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Le.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Ll(new Pe,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?vy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const v=u[f],x=o[f];let m;const p=c[f];if(x.mode===Kt.TRIANGLES||x.mode===Kt.TRIANGLE_STRIP||x.mode===Kt.TRIANGLE_FAN||x.mode===void 0)m=s.isSkinnedMesh===!0?new Fo(v,p):new We(v,p),m.isSkinnedMesh===!0&&!m.geometry.attributes.skinWeight.normalized&&m.normalizeSkinWeights(),x.mode===Kt.TRIANGLE_STRIP?m.geometry=Bl(m.geometry,Gh):x.mode===Kt.TRIANGLE_FAN&&(m.geometry=Bl(m.geometry,Wl));else if(x.mode===Kt.LINES)m=new gs(v,p);else if(x.mode===Kt.LINE_STRIP)m=new dr(v,p);else if(x.mode===Kt.LINE_LOOP)m=new xc(v,p);else if(x.mode===Kt.POINTS)m=new yc(v,p);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(m.geometry.morphAttributes).length>0&&yy(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Gn(m,s),x.extensions&&Yi(i,m,x),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return h[0];const d=new Pt;t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dt($h.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],f=h.target,g=f.node!==void 0?f.node:f.id,v=n.parameters!==void 0?n.parameters[d.input]:d.input,x=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",v)),o.push(this.getDependency("accessor",x)),a.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],f=c[3],g=c[4],v=[];for(let m=0,p=u.length;m<p;m++){const b=u[m],_=h[m],M=d[m],T=f[m],y=g[m];if(b===void 0)continue;b.updateMatrix(),b.matrixAutoUpdate=!0;let F;switch(dn[y.path]){case dn.weights:F=us;break;case dn.rotation:F=Pn;break;case dn.position:case dn.scale:default:F=hs;break}const Z=b.name?b.name:b.uuid,V=T.interpolation!==void 0?gy[T.interpolation]:xi,E=[];dn[y.path]===dn.weights?b.traverse(function(N){N.isMesh===!0&&N.morphTargetInfluences&&E.push(N.name?N.name:N.uuid)}):E.push(Z);let ee=M.array;if(M.normalized){const N=Mo(ee.constructor),I=new Float32Array(ee.length);for(let G=0,B=ee.length;G<B;G++)I[G]=ee[G]*N;ee=I}for(let N=0,I=E.length;N<I;N++){const G=new F(E[N]+"."+dn[y.path],_.array,ee,V);T.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(R){const H=this instanceof Pn?my:Vn;return new H(this.times,this.values,this.getValueSize()/3,R)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),v.push(G)}}const x=n.name?n.name:"animation_"+e;return new yo(x,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new No:a.length>1?l=new Pt:a.length===1?l=a[0]:l=new Ne,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=o),Gn(l,s),s.extensions&&Yi(n,l,s),s.matrix!==void 0){const c=new pe;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,o=new Pt;i.name&&(o.name=s.createUniqueName(i.name)),Gn(o,i),i.extensions&&Yi(n,o,i);const a=i.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(jc(a[c],o,t,s));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof tt||d instanceof nt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(o),o})}}function jc(r,e,t,n){const i=t.nodes[r];return n.getDependency("node",r).then(function(s){if(i.skin===void 0)return s;let o;return n.getDependency("skin",i.skin).then(function(a){o=a;const l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,d=a.length;h<d;h++){const f=a[h];if(f){c.push(f);const g=new pe;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[h])}l.bind(new Po(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(jc(u,s,t,n))}}return Promise.all(o)})}function wy(r,e,t){const n=e.attributes,i=new Tt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){const u=Mo(ds[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new A,l=new A;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Mo(ds[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ll(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=wo[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Gn(r,e),wy(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xy(r,e.targets,t):r})}function Bl(r,e){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Wl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s}class My extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new gr(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){let l;try{l=JSON.parse(a)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),l=JSON.parse(a.substring(65,a.length-2))}const c=s.parse(l);t&&t(c)},n,i)}parse(e){return new Qc(e)}}class Qc{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=Sy(e,t,this.data);for(let s=0,o=i.length;s<o;s++)Array.prototype.push.apply(n,i[s].toShapes());return n}}function Sy(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=Cy(u,i,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function Cy(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new nv;let a,l,c,u,h,d,f,g;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let x=0,m=v.length;x<m;)switch(v[x++]){case"m":a=v[x++]*e+t,l=v[x++]*e+n,o.moveTo(a,l);break;case"l":a=v[x++]*e+t,l=v[x++]*e+n,o.lineTo(a,l);break;case"q":c=v[x++]*e+t,u=v[x++]*e+n,h=v[x++]*e+t,d=v[x++]*e+n,o.quadraticCurveTo(h,d,c,u);break;case"b":c=v[x++]*e+t,u=v[x++]*e+n,h=v[x++]*e+t,d=v[x++]*e+n,f=v[x++]*e+t,g=v[x++]*e+n,o.bezierCurveTo(h,d,f,g,c,u);break}}return{offsetX:s.ha*e,path:o}}Qc.prototype.isFont=!0;function Iy(r){const e={},t=document.querySelector("#loading"),n=document.querySelector("#loading-items"),i=document.querySelector("#loading-bar-progress"),s=new Rc;s.onStart=function(h,d,f){console.log("Started loading file: "+h+`.
Loaded `+d+" of "+f+" files.")},s.onLoad=function(){n&&(n.textContent="Nearly There...",console.log("Loading complete!"),window.setTimeout(()=>{t.style.opacity="0",r(e)},200),window.setTimeout(()=>{t.style.display="none"},500))},s.onProgress=function(h,d,f){!n||!i||(i.style.transform=`scaleX(${d/f})`,n.textContent=`${d} of ${f} File Loaded: ${h}`,console.log("Loading file: "+h+`.
Loaded `+d+" of "+f+" files."))};const o=h=>new URL(Object.assign({"../DeltaTime.js":Uv,"../DeltaTime.ts":zv,"../collapse.css":Wv,"../file-system/home/user/about/about.md":kv,"../file-system/home/user/contact/contact.md":Ov,"../file-system/home/user/projects/00-dataTide.md":Zv,"../file-system/home/user/projects/01-CreativeProject.md":Xv,"../file-system/home/user/projects/02-RenderDesk.md":Yv,"../file-system/home/user/projects/03-issueTrackingApp.md":Kv,"../file-system/home/user/projects/04-zentry.md":Jv,"../file-system/home/user/title/title-legacy.md":jv,"../file-system/home/user/title/title.md":Qv,"../img/01Homepage.png":qv,"../img/02Workflows.png":$v,"../img/03DefinedWorkflow.png":ex,"../img/04Executedlogs.png":tx,"../img/05RunsHistory.png":nx,"../img/06Schedule.png":ix,"../img/07Scheduled.png":sx,"../img/08Credentials.png":rx,"../img/09CreateCreds.png":ox,"../img/10Billing.png":ax,"../img/11BillingHistory.png":lx,"../img/HomeFin.png":cx,"../img/createIssue.png":ux,"../img/creative-01.png":hx,"../img/dashboard.png":dx,"../img/git-icon.svg":fx,"../img/git-iconold.svg":px,"../img/home.png":mx,"../img/linkedin-icon.svg":gx,"../img/menu-icon.svg":vx,"../img/r-icon.svg":xx,"../img/sc1.png":yx,"../img/view.png":_x,"../img/zentry-poster.png":bx,"../img/zentry.mp4":wx,"../main.css":Mx,"../main.ts":Sx,"../nav.css":Cx,"../terminal/applications/applications.ts":Ix,"../terminal/applications/assets/help.md":Ax,"../terminal/applications/cd.ts":Tx,"../terminal/applications/echo.ts":Ex,"../terminal/applications/hello.ts":Rx,"../terminal/applications/index.ts":Lx,"../terminal/applications/ls.ts":Bx,"../terminal/applications/mkdir.ts":Gx,"../terminal/applications/pwd.ts":Fx,"../terminal/applications/show.ts":Nx,"../terminal/applications/touch.ts":Px,"../terminal/bash.ts":Vx,"../terminal/fileSystemBash.ts":Dx,"../terminal/index.ts":Hx,"../vite-env.d.ts":Ux,"./index.ts":zx,"./screen/index.ts":Wx,"./screen/lag.ts":kx,"./screen/renderEngine.ts":Ox,"./screen/shaderToScreen.ts":Zx,"./screen/textEngine.ts":Xx,"./shaders/lag.frag":Yx,"./shaders/noise.frag":Kx,"./shaders/vertex.vert":Jx})[`../${h}`],import.meta.url).href,a=new My(s);a.load(o("public/fonts/public-pixel.json"),h=>{e.publicPixelFont=h}),a.load(o("public/fonts/chill.json"),h=>{e.chillFont=h});const l=new vr(s);l.load(o("public/textures/bake-quality-5.jpg"),h=>{h.flipY=!1,h.encoding=xt,e.bakeTexture=h}),l.load(o("public/textures/bake_floor-quality-3.jpg"),h=>{h.flipY=!1,h.encoding=xt,e.bakeFloorTexture=h}),new Bc(s).load([o("public/textures/environmentMap/px.jpg"),o("public/textures/environmentMap/nx.jpg"),o("public/textures/environmentMap/py.jpg"),o("public/textures/environmentMap/ny.jpg"),o("public/textures/environmentMap/pz.jpg"),o("public/textures/environmentMap/nz.jpg")],h=>{e.environmentMapTexture=h}),new jx(s).load(o("public/models/Commodore710_33.5.glb"),h=>{e.screenMesh=h.scene.children.find(d=>d.name==="Screen"),e.computerMesh=h.scene.children.find(d=>d.name==="Computer"),e.crtMesh=h.scene.children.find(d=>d.name==="CRT"),e.keyboardMesh=h.scene.children.find(d=>d.name==="Keyboard"),e.shadowPlaneMesh=h.scene.children.find(d=>d.name==="ShadowPlane")})}function Ct(r,e,t){const n=(r-e[0])/(e[1]-e[0])*(t[1]-t[0])+t[0];if(t[0]<t[1]){if(n<t[0])return t[0];if(n>t[1])return t[1]}else{if(n>t[0])return t[0];if(n<t[1])return t[1]}return n}let qc=document.documentElement.clientHeight,fn=window.scrollY/document.documentElement.clientHeight;window.addEventListener("scroll",r=>{fn=window.scrollY/qc},{passive:!0});function Ay(){Iy(r=>{const e=new Hv,t=window.location.hash;if(t&&t.toLowerCase()==="#debug"){e.showPanel(0),document.body.appendChild(e.dom);const M=document.getElementById("textarea");M.style.zIndex="3",M.style.opacity="1"}const n=document.querySelector("canvas.webgl");n||console.error("no canvas");const i={width:document.documentElement.clientWidth,height:window.innerHeight,portraitOffset:Ct(window.innerHeight/document.documentElement.clientWidth,[.75,1.75],[0,2])},s=new ms,o=new Hc(16777215,.55);s.add(o),s.background=new re(16176305);const a=new dt(50,i.width/i.height,.1,100);a.position.set(0,0,-2.5),a.rotation.set(-Math.PI,0,Math.PI),s.add(a);const l={computerHeight:1.5,computerAngle:Math.PI*.2,computerHorizontal:.5};let c=null;function u(M){M.pointerType!=="mouse"&&(c=null,h.x=0,h.y=0)}const h={x:0,y:0};n.addEventListener("pointermove",M=>{u(M),c&&(h.x+=(M.clientX-c.x)/(window.innerWidth*.5),h.x=Ct(h.x,[-1,1],[-1,1]),h.y+=(M.clientY-c.y)/(window.innerHeight*.5),h.y=Ct(h.y,[-1,1],[-1,1]),c={x:M.clientX,y:M.clientY})},{passive:!0}),n.addEventListener("pointerdown",M=>{u(M),c={x:M.clientX,y:M.clientY}},{passive:!0}),document.addEventListener("pointerup",M=>{u(M),c=null},{passive:!0});const d=new De({canvas:n});d.setSize(i.width,i.height),d.setPixelRatio(2),d.outputEncoding=xt;function f(M,T){a.aspect=M/T,a.updateProjectionMatrix(),d.setSize(M,T)}window.addEventListener("resize",()=>{qc=document.documentElement.clientHeight,i.width=document.documentElement.clientWidth,i.height=window.innerHeight,f(i.width,i.height),i.portraitOffset=Ct(i.height/i.width,[.8,1.8],[0,2.5])},{passive:!0});const g=Nv(r,d),v=new Ai(1,1,1),x=new We(v,new st({color:"blue"}));x.scale.x=1.33;const m=new st({map:r.bakeTexture}),p=new Pt;r.screenMesh.material=g.screenRenderEngine.material,p.add(r.screenMesh),r.computerMesh.material=m,p.add(r.computerMesh),r.crtMesh.material=m,p.add(r.crtMesh),r.keyboardMesh.material=m,p.add(r.keyboardMesh),r.shadowPlaneMesh.material=new st({map:r.bakeFloorTexture}),p.add(r.shadowPlaneMesh),p.position.x=l.computerHorizontal,p.position.y=l.computerHeight,p.rotation.y=l.computerAngle,s.add(p);const b=new Wc,_=()=>{e.begin();const M=sv(),T=b.getElapsedTime(),y=Ct(fn,[0,1],[0,1]);a.position.z=Ct(fn,[0,1],[-2.5-i.portraitOffset,-10-i.portraitOffset]),p.position.x=l.computerHorizontal*y,p.position.y=Ct(fn,[0,1],[0,l.computerHeight]),p.rotation.y=l.computerAngle*y,a.position.x=h.x*Ct(fn,[0,1],[.2,5])*.1+a.position.x*.9,a.position.y=h.y*Ct(fn,[0,1],[.2,1.5])*.1+a.position.y*.9,a.lookAt(new A(0,0,0)),n.style.opacity=`${Ct(fn,[1.25,1.75],[1,0])}`,i.portraitOffset>.5?p.rotation.z=Ct(fn,[0,1],[-Math.PI/2,0]):p.rotation.z=0,r.crtMesh.morphTargetInfluences&&(r.crtMesh.morphTargetInfluences[0]=Ct(y,[0,.1],[.5,0])),g.tick(M,T),d.setRenderTarget(null),d.render(s,a),e.end(),window.requestAnimationFrame(_)};window.requestAnimationFrame(_)})}Ay();const Gl=document.documentElement;function $c(){window.scrollY>10?Gl.dataset.scroll="true":Gl.dataset.scroll="false"}$c();window.addEventListener("scroll",$c,{passive:!0});
