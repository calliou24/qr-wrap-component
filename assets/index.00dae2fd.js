import{j as c,R as d,a}from"./vendor.abad06dd.js";const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}};u();var f="/qr-wrap-component/assets/image-qr-code.c38c08d5.png";const t=c.exports.jsx,s=c.exports.jsxs;function m(){return t("div",{className:"App",children:s("div",{className:"cont-card",children:[t("div",{className:"qr-img-cont",children:t("img",{src:f,alt:"qr image"})}),s("div",{className:"qr-info-cont",children:[t("h1",{children:"Improve your front-end skills by building projects"}),t("p",{children:"Scan the QR code to visit Frontend Mentor and take your coding skills to me next level"})]})]})})}d.render(t(a.StrictMode,{children:t(m,{})}),document.getElementById("root"));
