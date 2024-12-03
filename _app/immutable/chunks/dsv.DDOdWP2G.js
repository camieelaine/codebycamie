import{f as mn,g as _e,e as Tn,h as yn,j as Mn}from"./linear.DL41VL5L.js";import{a as Cn,c as V}from"./array.2GBN5xbU.js";function tr(e,n){let t,r;if(n===void 0)for(const i of e)i!=null&&(t===void 0?i>=i&&(t=r=i):(t>i&&(t=i),r<i&&(r=i)));else{let i=-1;for(let u of e)(u=n(u,++i,e))!=null&&(t===void 0?u>=u&&(t=r=u):(t>u&&(t=u),r<u&&(r=u)))}return[t,r]}function pn(e,n){e=e.slice();var t=0,r=e.length-1,i=e[t],u=e[r],c;return u<i&&(c=t,t=r,r=c,c=i,i=u,u=c),e[t]=n.floor(i),e[r]=n.ceil(u),e}const ae=new Date,ce=new Date;function S(e,n,t,r){function i(u){return e(u=arguments.length===0?new Date:new Date(+u)),u}return i.floor=u=>(e(u=new Date(+u)),u),i.ceil=u=>(e(u=new Date(u-1)),n(u,1),e(u),u),i.round=u=>{const c=i(u),m=i.ceil(u);return u-c<m-u?c:m},i.offset=(u,c)=>(n(u=new Date(+u),c==null?1:Math.floor(c)),u),i.range=(u,c,m)=>{const f=[];if(u=i.ceil(u),m=m==null?1:Math.floor(m),!(u<c)||!(m>0))return f;let l;do f.push(l=new Date(+u)),n(u,m),e(u);while(l<u&&u<c);return f},i.filter=u=>S(c=>{if(c>=c)for(;e(c),!u(c);)c.setTime(c-1)},(c,m)=>{if(c>=c)if(m<0)for(;++m<=0;)for(;n(c,-1),!u(c););else for(;--m>=0;)for(;n(c,1),!u(c););}),t&&(i.count=(u,c)=>(ae.setTime(+u),ce.setTime(+c),e(ae),e(ce),Math.floor(t(ae,ce))),i.every=u=>(u=Math.floor(u),!isFinite(u)||!(u>0)?null:u>1?i.filter(r?c=>r(c)%u===0:c=>i.count(0,c)%u===0):i)),i}const re=S(()=>{},(e,n)=>{e.setTime(+e+n)},(e,n)=>n-e);re.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?S(n=>{n.setTime(Math.floor(n/e)*e)},(n,t)=>{n.setTime(+n+t*e)},(n,t)=>(t-n)/e):re);re.range;const O=1e3,W=O*60,I=W*60,R=I*24,Me=R*7,we=R*30,se=R*365,B=S(e=>{e.setTime(e-e.getMilliseconds())},(e,n)=>{e.setTime(+e+n*O)},(e,n)=>(n-e)/O,e=>e.getUTCSeconds());B.range;const Ce=S(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*O)},(e,n)=>{e.setTime(+e+n*W)},(e,n)=>(n-e)/W,e=>e.getMinutes());Ce.range;const Un=S(e=>{e.setUTCSeconds(0,0)},(e,n)=>{e.setTime(+e+n*W)},(e,n)=>(n-e)/W,e=>e.getUTCMinutes());Un.range;const pe=S(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*O-e.getMinutes()*W)},(e,n)=>{e.setTime(+e+n*I)},(e,n)=>(n-e)/I,e=>e.getHours());pe.range;const vn=S(e=>{e.setUTCMinutes(0,0,0)},(e,n)=>{e.setTime(+e+n*I)},(e,n)=>(n-e)/I,e=>e.getUTCHours());vn.range;const te=S(e=>e.setHours(0,0,0,0),(e,n)=>e.setDate(e.getDate()+n),(e,n)=>(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*W)/R,e=>e.getDate()-1);te.range;const Ue=S(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/R,e=>e.getUTCDate()-1);Ue.range;const Dn=S(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/R,e=>Math.floor(e/R));Dn.range;function q(e){return S(n=>{n.setDate(n.getDate()-(n.getDay()+7-e)%7),n.setHours(0,0,0,0)},(n,t)=>{n.setDate(n.getDate()+t*7)},(n,t)=>(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*W)/Me)}const ie=q(0),ue=q(1),_n=q(2),wn=q(3),J=q(4),Sn=q(5),Fn=q(6);ie.range;ue.range;_n.range;wn.range;J.range;Sn.range;Fn.range;function Q(e){return S(n=>{n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-e)%7),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCDate(n.getUTCDate()+t*7)},(n,t)=>(t-n)/Me)}const Ne=Q(0),oe=Q(1),dn=Q(2),Yn=Q(3),X=Q(4),xn=Q(5),$n=Q(6);Ne.range;oe.range;dn.range;Yn.range;X.range;xn.range;$n.range;const ve=S(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,n)=>{e.setMonth(e.getMonth()+n)},(e,n)=>n.getMonth()-e.getMonth()+(n.getFullYear()-e.getFullYear())*12,e=>e.getMonth());ve.range;const bn=S(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCMonth(e.getUTCMonth()+n)},(e,n)=>n.getUTCMonth()-e.getUTCMonth()+(n.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());bn.range;const E=S(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,n)=>{e.setFullYear(e.getFullYear()+n)},(e,n)=>n.getFullYear()-e.getFullYear(),e=>e.getFullYear());E.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:S(n=>{n.setFullYear(Math.floor(n.getFullYear()/e)*e),n.setMonth(0,1),n.setHours(0,0,0,0)},(n,t)=>{n.setFullYear(n.getFullYear()+t*e)});E.range;const P=S(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n)},(e,n)=>n.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());P.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:S(n=>{n.setUTCFullYear(Math.floor(n.getUTCFullYear()/e)*e),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCFullYear(n.getUTCFullYear()+t*e)});P.range;function Hn(e,n,t,r,i,u){const c=[[B,1,O],[B,5,5*O],[B,15,15*O],[B,30,30*O],[u,1,W],[u,5,5*W],[u,15,15*W],[u,30,30*W],[i,1,I],[i,3,3*I],[i,6,6*I],[i,12,12*I],[r,1,R],[r,2,2*R],[t,1,Me],[n,1,we],[n,3,3*we],[e,1,se]];function m(l,T,s){const h=T<l;h&&([l,T]=[T,l]);const p=s&&typeof s.range=="function"?s:f(l,T,s),U=p?p.range(l,+T+1):[];return h?U.reverse():U}function f(l,T,s){const h=Math.abs(T-l)/s,p=mn(([,,Y])=>Y).right(c,h);if(p===c.length)return e.every(_e(l/se,T/se,s));if(p===0)return re.every(Math.max(_e(l,T,s),1));const[U,D]=c[h/c[p-1][2]<c[p][2]/h?p-1:p];return U.every(D)}return[m,f]}const[Ln,Wn]=Hn(E,ve,ie,te,pe,Ce);function fe(e){if(0<=e.y&&e.y<100){var n=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return n.setFullYear(e.y),n}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function le(e){if(0<=e.y&&e.y<100){var n=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return n.setUTCFullYear(e.y),n}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function G(e,n,t){return{y:e,m:n,d:t,H:0,M:0,S:0,L:0}}function kn(e){var n=e.dateTime,t=e.date,r=e.time,i=e.periods,u=e.days,c=e.shortDays,m=e.months,f=e.shortMonths,l=K(i),T=ee(i),s=K(u),h=ee(u),p=K(c),U=ee(c),D=K(m),Y=ee(m),x=K(f),A=ee(f),_={a:nn,A:tn,b:rn,B:un,c:null,d:$e,e:$e,f:ut,g:mt,G:yt,H:nt,I:tt,j:rt,L:Oe,m:ot,M:it,p:on,q:an,Q:Le,s:We,S:at,u:ct,U:st,V:ft,w:lt,W:ht,x:null,X:null,y:gt,Y:Tt,Z:Mt,"%":He},d={a:cn,A:sn,b:fn,B:ln,c:null,d:be,e:be,f:vt,g:bt,G:Lt,H:Ct,I:pt,j:Ut,L:Re,m:Dt,M:_t,p:hn,q:gn,Q:Le,s:We,S:wt,u:St,U:Ft,V:dt,w:Yt,W:xt,x:null,X:null,y:$t,Y:Ht,Z:Wt,"%":He},k={a:ze,A:Be,b:Je,B:Xe,c:Ge,d:Ye,e:Ye,f:Xn,g:de,G:Fe,H:xe,I:xe,j:Vn,L:Jn,m:Qn,M:zn,p:Ve,q:qn,Q:Kn,s:et,S:Bn,u:Rn,U:En,V:Zn,w:In,W:jn,x:Ke,X:en,y:de,Y:Fe,Z:Pn,"%":Gn};_.x=g(t,_),_.X=g(r,_),_.c=g(n,_),d.x=g(t,d),d.X=g(r,d),d.c=g(n,d);function g(a,y){return function(M){var o=[],$=-1,v=0,H=a.length,L,Z,De;for(M instanceof Date||(M=new Date(+M));++$<H;)a.charCodeAt($)===37&&(o.push(a.slice(v,$)),(Z=Se[L=a.charAt(++$)])!=null?L=a.charAt(++$):Z=L==="e"?" ":"0",(De=y[L])&&(L=De(M,Z)),o.push(L),v=$+1);return o.push(a.slice(v,$)),o.join("")}}function w(a,y){return function(M){var o=G(1900,void 0,1),$=N(o,a,M+="",0),v,H;if($!=M.length)return null;if("Q"in o)return new Date(o.Q);if("s"in o)return new Date(o.s*1e3+("L"in o?o.L:0));if(y&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+o.p*12),o.m===void 0&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(v=le(G(o.y,0,1)),H=v.getUTCDay(),v=H>4||H===0?oe.ceil(v):oe(v),v=Ue.offset(v,(o.V-1)*7),o.y=v.getUTCFullYear(),o.m=v.getUTCMonth(),o.d=v.getUTCDate()+(o.w+6)%7):(v=fe(G(o.y,0,1)),H=v.getDay(),v=H>4||H===0?ue.ceil(v):ue(v),v=te.offset(v,(o.V-1)*7),o.y=v.getFullYear(),o.m=v.getMonth(),o.d=v.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),H="Z"in o?le(G(o.y,0,1)).getUTCDay():fe(G(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+o.W*7-(H+5)%7:o.w+o.U*7-(H+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,le(o)):fe(o)}}function N(a,y,M,o){for(var $=0,v=y.length,H=M.length,L,Z;$<v;){if(o>=H)return-1;if(L=y.charCodeAt($++),L===37){if(L=y.charAt($++),Z=k[L in Se?y.charAt($++):L],!Z||(o=Z(a,M,o))<0)return-1}else if(L!=M.charCodeAt(o++))return-1}return o}function Ve(a,y,M){var o=l.exec(y.slice(M));return o?(a.p=T.get(o[0].toLowerCase()),M+o[0].length):-1}function ze(a,y,M){var o=p.exec(y.slice(M));return o?(a.w=U.get(o[0].toLowerCase()),M+o[0].length):-1}function Be(a,y,M){var o=s.exec(y.slice(M));return o?(a.w=h.get(o[0].toLowerCase()),M+o[0].length):-1}function Je(a,y,M){var o=x.exec(y.slice(M));return o?(a.m=A.get(o[0].toLowerCase()),M+o[0].length):-1}function Xe(a,y,M){var o=D.exec(y.slice(M));return o?(a.m=Y.get(o[0].toLowerCase()),M+o[0].length):-1}function Ge(a,y,M){return N(a,n,y,M)}function Ke(a,y,M){return N(a,t,y,M)}function en(a,y,M){return N(a,r,y,M)}function nn(a){return c[a.getDay()]}function tn(a){return u[a.getDay()]}function rn(a){return f[a.getMonth()]}function un(a){return m[a.getMonth()]}function on(a){return i[+(a.getHours()>=12)]}function an(a){return 1+~~(a.getMonth()/3)}function cn(a){return c[a.getUTCDay()]}function sn(a){return u[a.getUTCDay()]}function fn(a){return f[a.getUTCMonth()]}function ln(a){return m[a.getUTCMonth()]}function hn(a){return i[+(a.getUTCHours()>=12)]}function gn(a){return 1+~~(a.getUTCMonth()/3)}return{format:function(a){var y=g(a+="",_);return y.toString=function(){return a},y},parse:function(a){var y=w(a+="",!1);return y.toString=function(){return a},y},utcFormat:function(a){var y=g(a+="",d);return y.toString=function(){return a},y},utcParse:function(a){var y=w(a+="",!0);return y.toString=function(){return a},y}}}var Se={"-":"",_:" ",0:"0"},F=/^\s*\d+/,An=/^%/,Nn=/[\\^$*+?|[\]().{}]/g;function C(e,n,t){var r=e<0?"-":"",i=(r?-e:e)+"",u=i.length;return r+(u<t?new Array(t-u+1).join(n)+i:i)}function On(e){return e.replace(Nn,"\\$&")}function K(e){return new RegExp("^(?:"+e.map(On).join("|")+")","i")}function ee(e){return new Map(e.map((n,t)=>[n.toLowerCase(),t]))}function In(e,n,t){var r=F.exec(n.slice(t,t+1));return r?(e.w=+r[0],t+r[0].length):-1}function Rn(e,n,t){var r=F.exec(n.slice(t,t+1));return r?(e.u=+r[0],t+r[0].length):-1}function En(e,n,t){var r=F.exec(n.slice(t,t+2));return r?(e.U=+r[0],t+r[0].length):-1}function Zn(e,n,t){var r=F.exec(n.slice(t,t+2));return r?(e.V=+r[0],t+r[0].length):-1}function jn(e,n,t){var r=F.exec(n.slice(t,t+2));return r?(e.W=+r[0],t+r[0].length):-1}function Fe(e,n,t){var r=F.exec(n.slice(t,t+4));return r?(e.y=+r[0],t+r[0].length):-1}function de(e,n,t){var r=F.exec(n.slice(t,t+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),t+r[0].length):-1}function Pn(e,n,t){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(t,t+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),t+r[0].length):-1}function qn(e,n,t){var r=F.exec(n.slice(t,t+1));return r?(e.q=r[0]*3-3,t+r[0].length):-1}function Qn(e,n,t){var r=F.exec(n.slice(t,t+2));return r?(e.m=r[0]-1,t+r[0].length):-1}function Ye(e,n,t){var r=F.exec(n.slice(t,t+2));return r?(e.d=+r[0],t+r[0].length):-1}function Vn(e,n,t){var r=F.exec(n.slice(t,t+3));return r?(e.m=0,e.d=+r[0],t+r[0].length):-1}function xe(e,n,t){var r=F.exec(n.slice(t,t+2));return r?(e.H=+r[0],t+r[0].length):-1}function zn(e,n,t){var r=F.exec(n.slice(t,t+2));return r?(e.M=+r[0],t+r[0].length):-1}function Bn(e,n,t){var r=F.exec(n.slice(t,t+2));return r?(e.S=+r[0],t+r[0].length):-1}function Jn(e,n,t){var r=F.exec(n.slice(t,t+3));return r?(e.L=+r[0],t+r[0].length):-1}function Xn(e,n,t){var r=F.exec(n.slice(t,t+6));return r?(e.L=Math.floor(r[0]/1e3),t+r[0].length):-1}function Gn(e,n,t){var r=An.exec(n.slice(t,t+1));return r?t+r[0].length:-1}function Kn(e,n,t){var r=F.exec(n.slice(t));return r?(e.Q=+r[0],t+r[0].length):-1}function et(e,n,t){var r=F.exec(n.slice(t));return r?(e.s=+r[0],t+r[0].length):-1}function $e(e,n){return C(e.getDate(),n,2)}function nt(e,n){return C(e.getHours(),n,2)}function tt(e,n){return C(e.getHours()%12||12,n,2)}function rt(e,n){return C(1+te.count(E(e),e),n,3)}function Oe(e,n){return C(e.getMilliseconds(),n,3)}function ut(e,n){return Oe(e,n)+"000"}function ot(e,n){return C(e.getMonth()+1,n,2)}function it(e,n){return C(e.getMinutes(),n,2)}function at(e,n){return C(e.getSeconds(),n,2)}function ct(e){var n=e.getDay();return n===0?7:n}function st(e,n){return C(ie.count(E(e)-1,e),n,2)}function Ie(e){var n=e.getDay();return n>=4||n===0?J(e):J.ceil(e)}function ft(e,n){return e=Ie(e),C(J.count(E(e),e)+(E(e).getDay()===4),n,2)}function lt(e){return e.getDay()}function ht(e,n){return C(ue.count(E(e)-1,e),n,2)}function gt(e,n){return C(e.getFullYear()%100,n,2)}function mt(e,n){return e=Ie(e),C(e.getFullYear()%100,n,2)}function Tt(e,n){return C(e.getFullYear()%1e4,n,4)}function yt(e,n){var t=e.getDay();return e=t>=4||t===0?J(e):J.ceil(e),C(e.getFullYear()%1e4,n,4)}function Mt(e){var n=e.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+C(n/60|0,"0",2)+C(n%60,"0",2)}function be(e,n){return C(e.getUTCDate(),n,2)}function Ct(e,n){return C(e.getUTCHours(),n,2)}function pt(e,n){return C(e.getUTCHours()%12||12,n,2)}function Ut(e,n){return C(1+Ue.count(P(e),e),n,3)}function Re(e,n){return C(e.getUTCMilliseconds(),n,3)}function vt(e,n){return Re(e,n)+"000"}function Dt(e,n){return C(e.getUTCMonth()+1,n,2)}function _t(e,n){return C(e.getUTCMinutes(),n,2)}function wt(e,n){return C(e.getUTCSeconds(),n,2)}function St(e){var n=e.getUTCDay();return n===0?7:n}function Ft(e,n){return C(Ne.count(P(e)-1,e),n,2)}function Ee(e){var n=e.getUTCDay();return n>=4||n===0?X(e):X.ceil(e)}function dt(e,n){return e=Ee(e),C(X.count(P(e),e)+(P(e).getUTCDay()===4),n,2)}function Yt(e){return e.getUTCDay()}function xt(e,n){return C(oe.count(P(e)-1,e),n,2)}function $t(e,n){return C(e.getUTCFullYear()%100,n,2)}function bt(e,n){return e=Ee(e),C(e.getUTCFullYear()%100,n,2)}function Ht(e,n){return C(e.getUTCFullYear()%1e4,n,4)}function Lt(e,n){var t=e.getUTCDay();return e=t>=4||t===0?X(e):X.ceil(e),C(e.getUTCFullYear()%1e4,n,4)}function Wt(){return"+0000"}function He(){return"%"}function Le(e){return+e}function We(e){return Math.floor(+e/1e3)}var z,Ze;kt({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function kt(e){return z=kn(e),Ze=z.format,z.parse,z.utcFormat,z.utcParse,z}function At(e){return new Date(e)}function Nt(e){return e instanceof Date?+e:+new Date(+e)}function je(e,n,t,r,i,u,c,m,f,l){var T=yn(),s=T.invert,h=T.domain,p=l(".%L"),U=l(":%S"),D=l("%I:%M"),Y=l("%I %p"),x=l("%a %d"),A=l("%b %d"),_=l("%B"),d=l("%Y");function k(g){return(f(g)<g?p:m(g)<g?U:c(g)<g?D:u(g)<g?Y:r(g)<g?i(g)<g?x:A:t(g)<g?_:d)(g)}return T.invert=function(g){return new Date(s(g))},T.domain=function(g){return arguments.length?h(Array.from(g,Nt)):h().map(At)},T.ticks=function(g){var w=h();return e(w[0],w[w.length-1],g??10)},T.tickFormat=function(g,w){return w==null?k:l(w)},T.nice=function(g){var w=h();return(!g||typeof g.range!="function")&&(g=n(w[0],w[w.length-1],g??10)),g?h(pn(w,g)):T},T.copy=function(){return Mn(T,je(e,n,t,r,i,u,c,m,f,l))},T}function rr(){return Tn.apply(je(Ln,Wn,E,ve,ie,te,pe,Ce,B,Ze).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}const Te=Math.PI,ye=2*Te,j=1e-6,Ot=ye-j;function Pe(e){this._+=e[0];for(let n=1,t=e.length;n<t;++n)this._+=arguments[n]+e[n]}function It(e){let n=Math.floor(e);if(!(n>=0))throw new Error(`invalid digits: ${e}`);if(n>15)return Pe;const t=10**n;return function(r){this._+=r[0];for(let i=1,u=r.length;i<u;++i)this._+=Math.round(arguments[i]*t)/t+r[i]}}class Rt{constructor(n){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=n==null?Pe:It(n)}moveTo(n,t){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(n,t){this._append`L${this._x1=+n},${this._y1=+t}`}quadraticCurveTo(n,t,r,i){this._append`Q${+n},${+t},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(n,t,r,i,u,c){this._append`C${+n},${+t},${+r},${+i},${this._x1=+u},${this._y1=+c}`}arcTo(n,t,r,i,u){if(n=+n,t=+t,r=+r,i=+i,u=+u,u<0)throw new Error(`negative radius: ${u}`);let c=this._x1,m=this._y1,f=r-n,l=i-t,T=c-n,s=m-t,h=T*T+s*s;if(this._x1===null)this._append`M${this._x1=n},${this._y1=t}`;else if(h>j)if(!(Math.abs(s*f-l*T)>j)||!u)this._append`L${this._x1=n},${this._y1=t}`;else{let p=r-c,U=i-m,D=f*f+l*l,Y=p*p+U*U,x=Math.sqrt(D),A=Math.sqrt(h),_=u*Math.tan((Te-Math.acos((D+h-Y)/(2*x*A)))/2),d=_/A,k=_/x;Math.abs(d-1)>j&&this._append`L${n+d*T},${t+d*s}`,this._append`A${u},${u},0,0,${+(s*p>T*U)},${this._x1=n+k*f},${this._y1=t+k*l}`}}arc(n,t,r,i,u,c){if(n=+n,t=+t,r=+r,c=!!c,r<0)throw new Error(`negative radius: ${r}`);let m=r*Math.cos(i),f=r*Math.sin(i),l=n+m,T=t+f,s=1^c,h=c?i-u:u-i;this._x1===null?this._append`M${l},${T}`:(Math.abs(this._x1-l)>j||Math.abs(this._y1-T)>j)&&this._append`L${l},${T}`,r&&(h<0&&(h=h%ye+ye),h>Ot?this._append`A${r},${r},0,1,${s},${n-m},${t-f}A${r},${r},0,1,${s},${this._x1=l},${this._y1=T}`:h>j&&this._append`A${r},${r},0,${+(h>=Te)},${s},${this._x1=n+r*Math.cos(u)},${this._y1=t+r*Math.sin(u)}`)}rect(n,t,r,i){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function Et(e){let n=3;return e.digits=function(t){if(!arguments.length)return n;if(t==null)n=null;else{const r=Math.floor(t);if(!(r>=0))throw new RangeError(`invalid digits: ${t}`);n=r}return e},()=>new Rt(n)}function qe(e){this._context=e}qe.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:this._context.lineTo(e,n);break}}};function Zt(e){return new qe(e)}function jt(e){return e[0]}function Pt(e){return e[1]}function ur(e,n){var t=V(!0),r=null,i=Zt,u=null,c=Et(m);e=typeof e=="function"?e:e===void 0?jt:V(e),n=typeof n=="function"?n:n===void 0?Pt:V(n);function m(f){var l,T=(f=Cn(f)).length,s,h=!1,p;for(r==null&&(u=i(p=c())),l=0;l<=T;++l)!(l<T&&t(s=f[l],l,f))===h&&((h=!h)?u.lineStart():u.lineEnd()),h&&u.point(+e(s,l,f),+n(s,l,f));if(p)return u=null,p+""||null}return m.x=function(f){return arguments.length?(e=typeof f=="function"?f:V(+f),m):e},m.y=function(f){return arguments.length?(n=typeof f=="function"?f:V(+f),m):n},m.defined=function(f){return arguments.length?(t=typeof f=="function"?f:V(!!f),m):t},m.curve=function(f){return arguments.length?(i=f,r!=null&&(u=i(r)),m):i},m.context=function(f){return arguments.length?(f==null?r=u=null:u=i(r=f),m):r},m}var ke={},he={},ge=34,ne=10,me=13;function Qe(e){return new Function("d","return {"+e.map(function(n,t){return JSON.stringify(n)+": d["+t+'] || ""'}).join(",")+"}")}function qt(e,n){var t=Qe(e);return function(r,i){return n(t(r),i,e)}}function Ae(e){var n=Object.create(null),t=[];return e.forEach(function(r){for(var i in r)i in n||t.push(n[i]=i)}),t}function b(e,n){var t=e+"",r=t.length;return r<n?new Array(n-r+1).join(0)+t:t}function Qt(e){return e<0?"-"+b(-e,6):e>9999?"+"+b(e,6):b(e,4)}function Vt(e){var n=e.getUTCHours(),t=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":Qt(e.getUTCFullYear())+"-"+b(e.getUTCMonth()+1,2)+"-"+b(e.getUTCDate(),2)+(i?"T"+b(n,2)+":"+b(t,2)+":"+b(r,2)+"."+b(i,3)+"Z":r?"T"+b(n,2)+":"+b(t,2)+":"+b(r,2)+"Z":t||n?"T"+b(n,2)+":"+b(t,2)+"Z":"")}function zt(e){var n=new RegExp('["'+e+`
\r]`),t=e.charCodeAt(0);function r(s,h){var p,U,D=i(s,function(Y,x){if(p)return p(Y,x-1);U=Y,p=h?qt(Y,h):Qe(Y)});return D.columns=U||[],D}function i(s,h){var p=[],U=s.length,D=0,Y=0,x,A=U<=0,_=!1;s.charCodeAt(U-1)===ne&&--U,s.charCodeAt(U-1)===me&&--U;function d(){if(A)return he;if(_)return _=!1,ke;var g,w=D,N;if(s.charCodeAt(w)===ge){for(;D++<U&&s.charCodeAt(D)!==ge||s.charCodeAt(++D)===ge;);return(g=D)>=U?A=!0:(N=s.charCodeAt(D++))===ne?_=!0:N===me&&(_=!0,s.charCodeAt(D)===ne&&++D),s.slice(w+1,g-1).replace(/""/g,'"')}for(;D<U;){if((N=s.charCodeAt(g=D++))===ne)_=!0;else if(N===me)_=!0,s.charCodeAt(D)===ne&&++D;else if(N!==t)continue;return s.slice(w,g)}return A=!0,s.slice(w,U)}for(;(x=d())!==he;){for(var k=[];x!==ke&&x!==he;)k.push(x),x=d();h&&(k=h(k,Y++))==null||p.push(k)}return p}function u(s,h){return s.map(function(p){return h.map(function(U){return T(p[U])}).join(e)})}function c(s,h){return h==null&&(h=Ae(s)),[h.map(T).join(e)].concat(u(s,h)).join(`
`)}function m(s,h){return h==null&&(h=Ae(s)),u(s,h).join(`
`)}function f(s){return s.map(l).join(`
`)}function l(s){return s.map(T).join(e)}function T(s){return s==null?"":s instanceof Date?Vt(s):n.test(s+="")?'"'+s.replace(/"/g,'""')+'"':s}return{parse:r,parseRows:i,format:c,formatBody:m,formatRows:f,formatRow:l,formatValue:T}}var Bt=zt(","),Jt=Bt.parse;function Xt(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function Gt(e,n){return fetch(e,n).then(Xt)}function Kt(e){return function(n,t,r){return arguments.length===2&&typeof t=="function"&&(r=t,t=void 0),Gt(n,t).then(function(i){return e(i,r)})}}var or=Kt(Jt);export{Ze as a,or as c,tr as e,ur as l,rr as t};