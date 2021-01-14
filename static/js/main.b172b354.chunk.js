(this.webpackJsonpminutes=this.webpackJsonpminutes||[]).push([[0],{33:function(t,e,n){"use strict";n.r(e);var r=n(2),i=n(0),o=n.n(i),a=n(16),c=n.n(a),u=n(4),s=n(6),l=n(3);function d(t){return function(e){var n=e.theme.typography[t],r=n.fontFamily,i=n.fontSize,o=n.lineHeight;return"\n      font-family: ".concat(r,";\n      font-size: ").concat(i,";\n      line-height: ").concat(o,";\n    ")}}var p=n(5),f=n.n(p),b=l.c.button.withConfig({displayName:"Button",componentId:"ktsuvf-0"})(["background-color:transparent;color:",";border-width:2px;border-radius:4px;border-style:solid;border-color:",";border-radius:4px;padding:12px;text-transform:uppercase;",":hover,&.__hover{background-color:",";border-color:",";}:active,&.__active{background-color:",";}transition:100ms linear;"],(function(t){return t.theme.palette.primary.main}),(function(t){return f()(t.theme.palette.primary.main).fade(.5).string()}),d("button"),(function(t){return f()(t.theme.palette.primary.main).fade(.9).string()}),(function(t){return t.theme.palette.primary.main}),(function(t){return f()("white").fade(.9).string()})),m=n(1),h=Object(m.a)({stopped:Object(m.f)(Object(m.g)("setDuration","stopped",Object(m.b)((function(t,e){var n=e.duration;return n>0&&n<1e3})),Object(m.e)((function(t,e){var n=e.duration;return Object(u.a)(Object(u.a)({},t),{},{duration:n})}))),Object(m.g)("setTicks","stopped",Object(m.b)((function(t,e){return e.ticks>0})),Object(m.e)((function(t,e){var n=e.ticks;return Object(u.a)(Object(u.a)({},t),{},{ticks:n})}))),Object(m.g)("start","running",Object(m.e)(j),Object(m.e)(v))),running:Object(m.d)((function(t){var e=t.duration,n=t.ticks,r=60*e*1e3/n;return new Promise((function(t){return setTimeout(t,r)}))}),Object(m.g)("done","finished",Object(m.b)((function(t){var e=t.ticks,n=t.currentTick;return(void 0===n?0:n)+1===e})),Object(m.e)(j),Object(m.e)(v)),Object(m.g)("done","running",Object(m.e)(j),Object(m.e)(v)),Object(m.g)("error","finished"),Object(m.g)("pause","paused"),Object(m.g)("reset","stopped",Object(m.e)(g))),paused:Object(m.f)(Object(m.g)("resume","running"),Object(m.g)("reset","stopped",Object(m.e)(g))),finished:Object(m.f)(Object(m.g)("reset","stopped",Object(m.e)(g)))},(function(t){return Object(u.a)({},t)}));function g(t){return{duration:t.duration,ticks:t.ticks}}function j(t){return Object(u.a)(Object(u.a)({},t),{},{currentTick:void 0===t.currentTick?0:t.currentTick+1})}function v(t){var e=t.duration,n=t.ticks,r=t.currentTick,i=e/n,o=n-(void 0===r?0:r);return Object(u.a)(Object(u.a)({},t),{},{remainingDuration:Math.ceil(o*i)})}var y=n(8);function k(t,e,n){var r=o.a.useMemo((function(){return new Audio(t)}),[t]),i=o.a.useCallback((function(){return r.play()}),[r]);return o.a.useEffect((function(){e&&e()&&i()}),[i].concat(Object(y.a)(n||[]))),i}var O=function(t){var e=t.width,n=void 0===e?350:e,i=t.height,a=void 0===i?350:i,c=t.thickness,u=void 0===c?8:c,s=t.ratio,d=void 0===s?0:s,p=t.startAngle,f=void 0===p?-Math.PI/2:p,b=Object(l.d)(),m=o.a.useRef(null),h=o.a.useRef(d);return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=o.a.useRef(0),r=o.a.useRef(performance.now()),i=o.a.useCallback((function(){var e=performance.now(),o=e-r.current;t(o)&&(r.current=e,n.current=requestAnimationFrame(i))}),Object(y.a)(e));o.a.useEffect((function(){return n.current&&cancelAnimationFrame(n.current),r.current=performance.now(),n.current=requestAnimationFrame(i),function(){n.current&&cancelAnimationFrame(n.current)}}),[i])}((function(t){var e,r=null===(e=m.current)||void 0===e?void 0:e.getContext("2d");if(r){var i=h.current,o=d-i,c=i+(Math.abs(o)<.001?o:o*t*.01),s={x:n/2,y:a/2},l=Math.floor(Math.min(n/2,a/2)-u/2),p=f-2*Math.PI*c;return r.clearRect(0,0,n,a),r.beginPath(),r.strokeStyle=b.palette.overlay,r.lineWidth=u,r.arc(s.x,s.y,l,f,f+2*Math.PI),r.stroke(),r.beginPath(),r.strokeStyle=b.palette.primary.main,r.lineWidth=u,r.lineCap="round",r.arc(s.x,s.y,l,f,p,!0),r.stroke(),h.current=c,c!==d}}),[b,n,a,u,f,d]),Object(r.jsx)("canvas",{width:n,height:a,ref:m})},x=l.c.input.attrs((function(t){return{type:"number",min:0,step:1,"aria-label":"Duration",role:"timer"}})).withConfig({displayName:"DurationInput",componentId:"hzflu5-0"})([""," background-color:",";color:",";caret-color:transparent;border-style:dotted;border-color:transparent;border-radius:8px 8px 0px 0px;text-align:center;transition:",";:read-only{background-color:transparent;}:focus:not(:read-only){border-bottom-color:",";}:focus{outline:none;}-moz-appearance:textfield !important;::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0;}"],d("hero"),(function(t){return t.theme.palette.overlay}),(function(t){return t.theme.palette.text.primary}),(function(t){return t.theme.transitions.quick}),(function(t){return t.theme.palette.primary.main})),w=l.c.span.withConfig({displayName:"Label",componentId:"sc-1qdu3r9-0"})(["font-family:",";font-size:",";line-height:",";color:",";"],(function(t){return t.theme.typography[t.variant].fontFamily}),(function(t){return t.theme.typography[t.variant].fontSize}),(function(t){return t.theme.typography[t.variant].lineHeight}),(function(t){return t.theme.palette.text[t.color]}));w.defaultProps={variant:"body",color:"primary"};var C=w,S=l.c.div.withConfig({displayName:"Select__SelectWrapper",componentId:"ahraj6-0"})(['display:inline-grid;grid-template-areas:"select";align-items:center;color:',";border-color:",";border-width:2px;border-radius:4px;border-style:solid;border-radius:4px;",'::after{grid-area:select;justify-self:end;content:"";width:0.8em;height:0.5em;margin-right:12px;background-color:',";clip-path:polygon(100% 0%,0 0%,50% 100%);transition:100ms linear;}:hover,&.__hover{background-color:",";border-color:",";::after{background-color:",";}}:active,&.__active{background-color:",";}transition:100ms linear;"],(function(t){return t.theme.palette.primary.main}),(function(t){return f()(t.theme.palette.primary.main).fade(.5).string()}),d("button"),(function(t){return f()(t.theme.palette.primary.main).fade(.5).string()}),(function(t){return f()(t.theme.palette.primary.main).fade(.9).string()}),(function(t){return t.theme.palette.primary.main}),(function(t){return f()(t.theme.palette.primary.main).string()}),(function(t){return f()("white").fade(.9).string()})),T=l.c.select.withConfig({displayName:"Select__SelectInner",componentId:"ahraj6-1"})(["grid-area:select;appearance:none;border:none;outline:none;background-color:transparent;color:inherit;margin:0;padding:12px;padding-right:calc(12px * 2 + 0.8em);box-sizing:border-box;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1.1;"]),_=o.a.forwardRef((function(t,e){return Object(r.jsx)(S,{children:Object(r.jsx)(T,Object(u.a)({ref:e},t))})})),z=n(20),D={typography:{body:{fontFamily:"'Roboto', sans-serif",fontSize:"1rem",lineHeight:1},hero:{fontFamily:"'Roboto Mono', monospace",fontSize:"4rem",lineHeight:1},button:{fontFamily:"'Roboto', sans-serif",fontSize:"1.1rem",lineHeight:1}},palette:{background:"#242625",overlay:"rgba(0, 0, 0, .25)",primary:{main:"#51CF7B"},text:{primary:"rgba(255, 255, 255, 0.87)",secondary:"rgba(255, 255, 255, 0.54)"}},transitions:{quick:"100ms linear"}};function I(){var t=Object(z.a)(["\n  body { \n    background-color: ",";\n    color: ",";\n    margin: 0;\n    font-family: ",";\n    font-size: ",";\n    line-height: ",";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return I=function(){return t},t}var A=Object(l.b)(I(),(function(t){return t.theme.palette.background}),(function(t){return t.theme.palette.text.primary}),(function(t){return t.theme.typography.body.fontFamily}),(function(t){return t.theme.typography.body.fontSize}),(function(t){return t.theme.typography.body.lineHeight}));var F=function(t){var e=t.children;return Object(r.jsxs)(l.a,{theme:D,children:[Object(r.jsx)(A,{}),e]})},N=n.p+"static/media/ticktock.fc4391f1.wav",R=n.p+"static/media/ding2.3d633d15.wav",M=l.c.div.withConfig({displayName:"App__AppRoot",componentId:"zchc57-0"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);.hero{position:relative;width:350px;height:350px;.durationStack{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;}}.buttonArea{padding:32px;display:grid;grid-template-columns:auto;grid-auto-rows:auto;grid-gap:16px;.buttonRow{display:grid;grid-template-rows:auto;grid-auto-columns:auto;grid-auto-flow:column;grid-gap:16px;}}"]),P=Object(l.c)(x).withConfig({displayName:"App___StyledDurationInput",componentId:"zchc57-1"})(["width:180px;"]),W=Object(l.c)(C).withConfig({displayName:"App___StyledLabel",componentId:"zchc57-2"})(["margin-top:8px;position:relative;left:8px;letter-spacing:16px;"]);var H=function(){var t=function(t){var e=o.a.useMemo((function(){var e=Object(u.a)({duration:5,ticks:300},t);return Object(m.c)(h,g,e)}),[]),n=o.a.useCallback((function(){return e.send("start")}),[e]),r=o.a.useCallback((function(){return e.send("reset")}),[e]),i=o.a.useCallback((function(){return e.send("pause")}),[e]),a=o.a.useCallback((function(){return e.send("resume")}),[e]),c=o.a.useCallback((function(t){return e.send({type:"setDuration",duration:t})}),[e]),l=o.a.useCallback((function(t){return e.send({type:"setTicks",ticks:t})}),[e]),d=o.a.useState({state:e.machine.current,duration:e.context.duration,setDuration:c,remainingDuration:e.context.remainingDuration,ticks:e.context.ticks,setTicks:l,currentTick:e.context.currentTick,start:n,reset:r,pause:i,resume:a}),p=Object(s.a)(d,2),f=p[0],b=p[1];function g(t){b({state:t.machine.current,duration:t.context.duration,setDuration:c,remainingDuration:t.context.remainingDuration,ticks:t.context.ticks,setTicks:l,currentTick:t.context.currentTick,start:n,reset:r,pause:i,resume:a})}return f}(),e="stopped"===t.state?1:(t.currentTick||0)/t.ticks,n=function(t,e,n){var i,a=o.a.useMemo((function(){return t}),Object(y.a)(n||[])),c=void 0!==e?e:(null===(i=a[0])||void 0===i?void 0:i.value)||"",l=o.a.useState(c),d=Object(s.a)(l,2),p=d[0],f=d[1],b=function(t){var e=t.target.value;f(e)},m=o.a.useMemo((function(){return{value:p,onChange:b,children:a.map((function(t){return Object(r.jsx)("option",Object(u.a)({},t),t.value)}))}}),[p,a]);return[p,m]}([{label:"None",value:""},{label:"Ding Dong",value:R},{label:"Tick Tock",value:N}],R),i=Object(s.a)(n,2),a=i[0],c=i[1];return k(N,(function(){return"running"===t.state}),[t.state]),k(R,(function(){return a&&"finished"===t.state}),[t.state]),Object(r.jsx)(F,{children:Object(r.jsxs)(M,{children:[Object(r.jsxs)("div",{className:"hero",children:[Object(r.jsx)(O,{width:350,height:350,ratio:e}),Object(r.jsxs)("div",{className:"durationStack",children:[Object(r.jsx)(P,{readOnly:"stopped"!==t.state,value:"stopped"===t.state?t.duration:t.remainingDuration,onChange:function(e){var n=parseInt(e.currentTarget.value);t.setDuration(n),t.setTicks(60*n)}}),Object(r.jsx)(W,{variant:"body",color:"secondary",children:"minutes"})]})]}),Object(r.jsxs)("div",{className:"buttonArea",children:[Object(r.jsx)(_,Object(u.a)({"data-test-id":"select-alarm"},c)),Object(r.jsxs)("div",{className:"buttonRow",children:["stopped"===t.state?Object(r.jsx)(b,{"data-test-id":"start-button",onClick:t.start,children:"Start"}):Object(r.jsx)(b,{"data-test-id":"reset-button",onClick:t.reset,children:"Reset"}),"running"===t.state&&Object(r.jsx)(b,{"data-test-id":"pause-button",onClick:t.pause,children:"Pause"}),"paused"===t.state&&Object(r.jsx)(b,{"data-test-id":"resume-button",onClick:t.resume,children:"Resume"})]})]})]})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),r(t),i(t),o(t),a(t)}))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(H,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/minutes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/minutes","/service-worker.js");q?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):B(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(e,t)}))}}(),L()}},[[33,1,2]]]);
//# sourceMappingURL=main.b172b354.chunk.js.map