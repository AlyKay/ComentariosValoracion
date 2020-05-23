(this.webpackJsonptourism=this.webpackJsonptourism||[]).push([[0],{205:function(e,a,t){e.exports=t(360)},210:function(e,a,t){},343:function(e,a,t){},358:function(e,a,t){},359:function(e,a,t){},360:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"request",(function(){return v}));var r=t(0),l=t.n(r),c=t(41),o=t.n(c),i=(t(210),t(374)),u=t(53),m=t(83),s=t(164),E=t.n(s),d=t(27),p=Object(d.a)(),h={baseURL:"/api",headers:{}},f=function(e){if(e.response)throw function(e){var a=e.data,t=e.status,n=Object(m.a)(e,["data","status"]);switch(t){case 400:return a;case 401:break;case 403:return{error:"forbidden"};case 404:return void p.push("/404");case 500:return console.error("status ".concat(t,": ").concat(JSON.stringify(a))),a;default:return console.error("status ".concat(t,": ").concat(JSON.stringify(a))),Object(u.a)({data:a,status:t},n)}}(e.response);if(e.request)throw console.error(e.request),new Error("The request was made but no response was received");throw console.error("Error",e.message),console.error(e.config),new Error("Something happened in setting up the request that triggered an Error")},g=function(e){return e.data},v=function(e){return E.a.request((a=e,Object(u.a)(Object(u.a)({},h),a))).then(g).catch(f);var a},b=t(377),y=t(376);var N=function(){return l.a.createElement(b.a,{inverted:!0,color:"teal",className:"no-radius"},l.a.createElement(y.a,{inverted:!0,color:"teal",secondary:!0},l.a.createElement(y.a.Item,{name:"home",active:!0})))},w=t(369),j=t(81),x=t(170),O=t(171),R=t(192),S=t(191),C=t(172),k=t.n(C),q=t(368),G=t(373),L=function(e){Object(R.a)(t,e);var a=Object(S.a)(t);function t(){var e;return Object(x.a)(this,t),(e=a.call(this)).state={posts:[],loading:!0},e}return Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([n.request({url:"/users/posts"}),n.request({url:"/users/users"})]).then((function(a){var t=Object(j.a)(a,2),n=t[0],r=t[1],l=k.a.keyBy(r,"id"),c=n.map((function(e){var a=e.userId,t=Object(m.a)(e,["userId"]);return Object(u.a)({user:l[a]},t)}));e.setState({posts:c})})).catch((function(e){console.error(e)})).finally(this.setState({loading:!1}))}},{key:"render",value:function(){var e=this.state,a=e.posts,t=e.loading;return l.a.createElement(q.a,null,l.a.createElement(b.a,{loading:t},l.a.createElement(G.a.Group,null,a.map((function(e){var a=e.id,t=e.title,n=e.body,r=e.user,c=r.name,o=r.email,i=r.company.name;return l.a.createElement(G.a,{key:a},l.a.createElement(G.a.Image,{size:"tiny",src:"https://react.semantic-ui.com/images/wireframe/image.png"}),l.a.createElement(G.a.Content,null,l.a.createElement(G.a.Header,{as:"a"},t),l.a.createElement(G.a.Meta,null,c," ",l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:".concat(o)},o)),l.a.createElement(G.a.Description,null,n),l.a.createElement(G.a.Extra,null,"Company: ",i)))})))))}}]),t}(r.Component);function F(){var e=Object(i.e)().path;return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement(w.a,null,l.a.createElement(w.a.Column,null,l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:e,component:L}),l.a.createElement(i.b,{exact:!0,path:"".concat(e,"/posts"),component:L}),l.a.createElement(i.b,null,l.a.createElement(i.a,{to:"/404"}))))))}t(343);var A=function(){return l.a.createElement("div",{className:"ui grid middle aligned segment grey inverted"},l.a.createElement("div",{className:"ui column center aligned"},l.a.createElement("div",{className:"ui inverted statistic"},l.a.createElement("div",{className:"value"},"404"),l.a.createElement("div",{className:"label"},"Error"))))},I=t(378),T=t(190),B=function(){return l.a.createElement(I.a,{as:"h2"},l.a.createElement(T.a,{src:"./img/img1.jpg",size:"small",wrapped:!0}),l.a.createElement(I.a.Content,null,"Lugar Turistico Actual",l.a.createElement(I.a.Subheader,null,"Descripcion del lugar turistico")))},J=t(370),M=function(){return l.a.createElement(r.Fragment,null,l.a.createElement(J.a,{label:l.a.createElement("label",null,l.a.createElement("b",null,"Aceptar terminos y politicas"))}),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, in."))},P=t(379),z=function(e){var a=e.calificacion;return l.a.createElement(r.Fragment,null,l.a.createElement("h3",null,"Puntuacion general para lugar turistico"),l.a.createElement(P.a,{onRate:function(e,t){var n=t.rating;t.maxRating;a(n)},maxRating:5,defaultRating:0,icon:"star",size:"massive"}))},D=t(177),U=t(178),V=function(){return l.a.createElement(r.Fragment,null,l.a.createElement("h3",null,"Puntuacion de factores"),l.a.createElement("div",null,l.a.createElement(D.a,null,l.a.createElement(w.a,{columns:2},l.a.createElement(U.a,null,l.a.createElement("h4",null,"Beneficio"),l.a.createElement(P.a,{icon:"star",defaultRating:0,maxRating:5}))),l.a.createElement(w.a,{columns:2},l.a.createElement(U.a,null,l.a.createElement("h4",null,"Precio"),l.a.createElement(P.a,{icon:"star",defaultRating:0,maxRating:5}))),l.a.createElement(w.a,{columns:2},l.a.createElement(U.a,null,l.a.createElement("h4",null,"Ubicacion"),l.a.createElement(P.a,{icon:"star",defaultRating:0,maxRating:5}))),l.a.createElement(w.a,{columns:2},l.a.createElement(U.a,null,l.a.createElement("h4",null,"Calidad"),l.a.createElement(P.a,{icon:"star",defaultRating:0,maxRating:5}))))))},W=t(372),H=t(371),$=function(){return l.a.createElement(D.a,null,l.a.createElement("h2",null,"Comentario"),l.a.createElement(W.a.Group,null,l.a.createElement("h3",null,"Titulo del comentario"),l.a.createElement("input",{type:"text",placeholder:"ingrese tiutlo del comentario"}),l.a.createElement(H.a,{reply:!0},l.a.createElement(H.a.TextArea,{placeholder:"Escribe tu comentario"}))))},K=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Fecha de Visita"),l.a.createElement("p",null,"01/02/2019"))},Q=t(375),X=function(){return l.a.createElement(D.a,null,l.a.createElement("h2",null,"Cuestionario(opcional)"),l.a.createElement(w.a,{columns:2},l.a.createElement(U.a,null,l.a.createElement("p",null,"Lorem ipsum dolor sit amet?"),l.a.createElement(Q.a.Group,{buttons:["Si","No","No se"]}))),l.a.createElement(w.a,{columns:2},l.a.createElement(U.a,null,l.a.createElement("p",null,"Lorem ipsum dolor sit amet?"),l.a.createElement(Q.a.Group,{buttons:["Si","No","No se"]}))),l.a.createElement(w.a,{columns:2},l.a.createElement(U.a,null,l.a.createElement("p",null,"Lorem ipsum dolor sit amet?"),l.a.createElement(Q.a.Group,{buttons:["Si","No","No se"]}))),l.a.createElement(w.a,{columns:2},l.a.createElement(U.a,null,l.a.createElement("p",null,"Lorem ipsum dolor sit amet?"),l.a.createElement(Q.a.Group,{buttons:["Si","No","No se"]}))))},Y=(t(358),function(){return l.a.createElement(w.a.Column,null,l.a.createElement(Q.a,{primary:!0},"Enviar"),l.a.createElement("p",null,"Tu experiencia es muy valiosa para otros viajeros \xa1Muchas Gracias!"))}),Z=function(){return l.a.createElement("h1",null,"Aqui se mostraran los ultimos comentarios")},_=(t(359),function(){var e=Object(r.useState)(0),a=Object(j.a)(e,2),t=(a[0],a[1]);return l.a.createElement("div",{className:"cvpadre"},l.a.createElement(I.a,{as:"h1",textAlign:"center"},"Cometarios y Valoraci\xf3n"),l.a.createElement(B,null),l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"preguntas"},l.a.createElement(M,null),l.a.createElement(z,{calificacion:function(e){t(e),console.log("esto es de state",e)}}),l.a.createElement(V,null),l.a.createElement($,null),l.a.createElement(K,null),l.a.createElement(X,null)),l.a.createElement("div",{class:"vertical-line"}),l.a.createElement("section",{className:"cometarios"},l.a.createElement(Z,null))),l.a.createElement(Y,{className:"enviar"}))});var ee=function(){return l.a.createElement(i.c,{history:p},l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/comentariosvaloracion",component:_}),l.a.createElement(i.b,{exact:!0,path:"/",component:F}),l.a.createElement(i.b,{exact:!0,path:"/404",component:A}),l.a.createElement(i.b,{component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[205,1,2]]]);
//# sourceMappingURL=main.3bec7fea.chunk.js.map