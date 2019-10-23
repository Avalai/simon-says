(this["webpackJsonpsimon-says"]=this["webpackJsonpsimon-says"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),u=n(5),r=n.n(u),c=n(6),l=n.n(c),m=n(3),s=n.n(m),i=n(2),b=n(1),_={SETUP:"SETUP",PLAY:"PLAY",END:"END"},g=[{number:1,color:"yellow"},{number:2,color:"red"},{number:3,color:"blue"},{number:4,color:"green"}],B=function(){return Object(b.sample)(g)},E={COLOR:"COLOR",NUMBER:"NUMBER"},p=function(){return Object(b.sample)(E)},O={BUTTON:"BUTTON",TIME:"TIME",SIMON:"SIMON"},f=2e3;var G=n(7),h=n.n(G);function d(e){var t=e.button,n=e.onClick,a=t.number,u=t.color;return o.a.createElement("button",{className:h.a["".concat(u,"GameButton")],onClick:function(){return n(t)}},a)}var S=function(){var e=function(){var e=Object(a.useState)(_.SETUP),t=Object(i.a)(e,2),n=t[0],u=t[1],r=Object(a.useState)(0),c=Object(i.a)(r,2),l=c[0],m=c[1],s=Object(a.useState)(B()),G=Object(i.a)(s,2),h=G[0],d=G[1],S=Object(a.useState)(!0),j=Object(i.a)(S,2),N=j[0],k=j[1],y=Object(a.useState)(p()),T=Object(i.a)(y,2),v=T[0],P=T[1],w=Object(a.useState)(""),M=Object(i.a)(w,2),U=M[0],A=M[1],C=Object(a.useCallback)((function(e){A(e),u(_.END)}),[A,u]),I=Object(a.useCallback)((function(){var e=p(),t=B(),n=Object(b.sample)([!0,!0,!0,!1,!1]);e===v&&Object(b.isEqual)(t,h)&&n===N?I():(m((function(e){return e+1})),P(e),d(t),k(n))}),[v,h,N]);return Object(a.useEffect)((function(){if(n===_.PLAY){var e=setTimeout((function(){N?C(O.TIME):I()}),f);return function(){return clearTimeout(e)}}}),[l,n,N,C,I]),{buttons:g,onButtonClick:function(e){if(n===_.END)return u(_.PLAY),void m(0);n===_.SETUP&&u(_.PLAY),N?Object(b.isEqual)(e,h)?I():C(O.BUTTON):C(O.SIMON)},message:function(){var e=v===E.COLOR?"the ".concat(h.color," button"):"button number ".concat(h.number);switch(n){case _.END:return U===O.BUTTON?"You pressed the wrong button.":U===O.SIMON?"I didn't say Simon says!":"You took too long to respond!";case _.SETUP:case _.PLAY:default:return"".concat(N?"Simon says press":"Press"," ").concat(e)}}(),gameInfo:function(){switch(n){case _.SETUP:return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Simply press the buttons that Simon asks you to."),o.a.createElement("p",null,o.a.createElement("strong",null,"You lose")," if you:"),o.a.createElement("ul",{style:{textAlign:"left"}},o.a.createElement("li",null,"Press the wrong button"),o.a.createElement("li",null,"Do anything without Simon"),o.a.createElement("li",null,"Take too long")));case _.END:return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"You made it through ",l," challenge",1===l?"":"s","."),o.a.createElement("p",null,"Press any button to restart."));default:return""}}()}}(),t=e.buttons,n=e.onButtonClick,u=e.message,r=e.gameInfo;return o.a.createElement("div",{className:s.a.root},o.a.createElement("header",{className:s.a.header},r,o.a.createElement("p",{className:s.a.gameMessage},u),Object(b.chunk)(t,Math.ceil(t.length/3)).map((function(e,t){return o.a.createElement("div",{key:t},e.map((function(e){return o.a.createElement(d,{key:e.number,button:e,onClick:n})})))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(S,{className:l.a.body}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,n){e.exports={root:"App_root__1Jh3p",header:"App_header__2MS2l",gameMessage:"App_gameMessage__BM14P"}},6:function(e,t,n){},7:function(e,t,n){e.exports={"game-button":"GameButton_game-button__1qbin",greenGameButton:"GameButton_greenGameButton__1AZyO GameButton_game-button__1qbin",redGameButton:"GameButton_redGameButton__1xWk- GameButton_game-button__1qbin",blueGameButton:"GameButton_blueGameButton__3g-JK GameButton_game-button__1qbin",yellowGameButton:"GameButton_yellowGameButton__2uKPY GameButton_game-button__1qbin",purpleGameButton:"GameButton_purpleGameButton__1lHbG GameButton_game-button__1qbin",orangeGameButton:"GameButton_orangeGameButton__UvuMu GameButton_game-button__1qbin",pinkGameButton:"GameButton_pinkGameButton__6x9Ct GameButton_game-button__1qbin"}},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.6eaa25b0.chunk.js.map