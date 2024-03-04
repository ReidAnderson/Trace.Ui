"use strict";(self.webpackChunktrace_ui=self.webpackChunktrace_ui||[]).push([[276],{276:(t,e,o)=>{o.d(e,{diagram:()=>L});var s=o(9267),a=o(6162),c=o(2016),n=o(1231),i=o(5780);o(3481),o(4681),o(5607),o(8915),o(1954);const r="rect",d="rectWithTitle",l="statediagram",p="".concat(l,"-").concat("state"),g="transition",b="".concat(g," ").concat("note-edge"),h="".concat(l,"-").concat("note"),u="".concat(l,"-").concat("cluster"),y="".concat(l,"-").concat("cluster-alt"),f="parent",w="note",x="----",m="".concat(x).concat(w),T="".concat(x).concat(f),v="fill:none",S="fill: #333",k="text",D="normal";let A={},B=0;function C(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:x;const a=null!==o&&o.length>0?"".concat(s).concat(o):"";return"".concat("state","-").concat(t).concat(a,"-").concat(e)}const E=(t,e,o,a,c,i)=>{const l=o.id,g=void 0===(x=a[l])||null===x?"":x.classes?x.classes.join(" "):"";var x;if("root"!==l){let e=r;!0===o.start&&(e="start"),!1===o.start&&(e="end"),o.type!==s.D&&(e=o.type),A[l]||(A[l]={id:l,shape:e,description:n.e.sanitizeText(l,(0,n.c)()),classes:"".concat(g," ").concat(p)});const a=A[l];o.description&&(Array.isArray(a.description)?(a.shape=d,a.description.push(o.description)):a.description.length>0?(a.shape=d,a.description===l?a.description=[o.description]:a.description=[a.description,o.description]):(a.shape=r,a.description=o.description),a.description=n.e.sanitizeTextOrArray(a.description,(0,n.c)())),1===a.description.length&&a.shape===d&&(a.shape=r),!a.type&&o.doc&&(n.l.info("Setting cluster for ",l,V(o)),a.type="group",a.dir=V(o),a.shape=o.type===s.a?"divider":"roundedWithTitle",a.classes=a.classes+" "+u+" "+(i?y:""));const c={labelStyle:"",shape:a.shape,labelText:a.description,classes:a.classes,style:"",id:l,dir:a.dir,domId:C(l,B),type:a.type,padding:15,centerLabel:!0};if(o.note){const e={labelStyle:"",shape:"note",labelText:o.note.text,classes:h,style:"",id:l+m+"-"+B,domId:C(l,B,w),type:a.type,padding:15},s={labelStyle:"",shape:"noteGroup",labelText:o.note.text,classes:a.classes,style:"",id:l+T,domId:C(l,B,f),type:"group",padding:0};B++;const n=l+T;t.setNode(n,s),t.setNode(e.id,e),t.setNode(l,c),t.setParent(l,n),t.setParent(e.id,n);let i=l,r=e.id;"left of"===o.note.position&&(i=e.id,r=l),t.setEdge(i,r,{arrowhead:"none",arrowType:"",style:v,labelStyle:"",classes:b,arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D})}else t.setNode(l,c)}e&&"root"!==e.id&&(n.l.trace("Setting node ",l," to be child of its parent ",e.id),t.setParent(l,e.id)),o.doc&&(n.l.trace("Adding nodes children "),R(t,o,o.doc,a,c,!i))},R=(t,e,o,a,c,i)=>{n.l.trace("items",o),o.forEach((o=>{switch(o.stmt){case s.b:case s.D:E(t,e,o,a,c,i);break;case s.S:{E(t,e,o.state1,a,c,i),E(t,e,o.state2,a,c,i);const s={id:"edge"+B,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:v,labelStyle:"",label:n.e.sanitizeText(o.description,(0,n.c)()),arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D,classes:g};t.setEdge(o.state1.id,o.state2.id,s,B),B++}}}))},V=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.c;if(t.doc)for(let o=0;o<t.doc.length;o++){const s=t.doc[o];"dir"===s.stmt&&(e=s.value)}return e},N={setConf:function(t){const e=Object.keys(t);for(const o of e)t[o]},getClasses:function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()},draw:async function(t,e,o,s){n.l.info("Drawing state diagram (v2)",e),A={},s.db.getDirection();const{securityLevel:d,state:p}=(0,n.c)(),g=p.nodeSpacing||50,b=p.rankSpacing||50;n.l.info(s.db.getRootDocV2()),s.db.extract(s.db.getRootDocV2()),n.l.info(s.db.getRootDocV2());const h=s.db.getStates(),u=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:V(s.db.getRootDocV2()),nodesep:g,ranksep:b,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;E(u,void 0,s.db.getRootDocV2(),h,s.db,!0),"sandbox"===d&&(y=(0,c.Ys)("#i"+e));const f="sandbox"===d?(0,c.Ys)(y.nodes()[0].contentDocument.body):(0,c.Ys)("body"),w=f.select('[id="'.concat(e,'"]')),x=f.select("#"+e+" g");await(0,i.r)(x,u,["barb"],l,e);n.u.insertTitle(w,"statediagramTitleText",p.titleTopMargin,s.db.getDiagramTitle());const m=w.node().getBBox(),T=m.width+16,v=m.height+16;w.attr("class",l);const S=w.node().getBBox();(0,n.i)(w,v,T,p.useMaxWidth);const k="".concat(S.x-8," ").concat(S.y-8," ").concat(T," ").concat(v);n.l.debug("viewBox ".concat(k)),w.attr("viewBox",k);const D=document.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const a of D){const t=a.getBBox(),e=document.createElementNS("http://www.w3.org/2000/svg",r);e.setAttribute("rx",0),e.setAttribute("ry",0),e.setAttribute("width",t.width),e.setAttribute("height",t.height),a.insertBefore(e,a.firstChild)}}},L={parser:s.p,db:s.d,renderer:N,styles:s.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,s.d.clear()}}}}]);
//# sourceMappingURL=276.8fc96fd9.chunk.js.map