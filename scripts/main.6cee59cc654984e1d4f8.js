!function(){var t={266:function(){const t=document.querySelectorAll(".game__button"),e=document.querySelector(".game__button-reset"),o=document.querySelector("#userScore"),n=document.querySelector("#computer-score"),r=document.querySelector(".game__content-choice--user-choice"),c=document.querySelector(".game__content-choice--computer-choice"),u=document.querySelector(".game__result");let s=0,i=0;t.forEach((e=>e.addEventListener("click",(()=>function(e){const a=["rock","scissors","paper"][Math.floor(3*Math.random())],d=function(t,e){const o={rock:"✊",scissors:"✌️",paper:"✋"};return r.textContent=o[t],c.textContent=o[e],t===e?"Ничья!":"rock"===t&&"scissors"===e||"scissors"===t&&"paper"===e||"paper"===t&&"rock"===e?(s++,"Вы выиграли!"):(i++,"Компьютер выиграл!")}(e,a);o.textContent=s,n.textContent=i,u.textContent=d,(5===s||5===i)&&(u.textContent=s>i?"ПОБЕДА! Вы выиграли игру!":"ПОРАЖЕНИЕ! Компьютер выиграл игру!",t.forEach((t=>t.disabled=!0)))}(e.id))))),e.addEventListener("click",(function(){s=0,i=0,o.textContent="0",n.textContent="0",r.textContent="❓",c.textContent="❓",u.textContent="Игра не начата",t.forEach((t=>t.disabled=!1))}))}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,o),c.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";o(266)}()}();
//# sourceMappingURL=main.6cee59cc654984e1d4f8.js.map