import{i as u,B as f,p as h,D as y,w as p,V as m,T as g}from"./vendor.a8288ece.js";const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=e(n);fetch(n.href,l)}};b();function I(i,t,e){return y(i,t,e)}const k={apiKey:"AIzaSyAxuWfnEQDkoGXZtY1blaGwNQ9IMWlwkNU",authDomain:"thedailywonton.firebaseapp.com",projectId:"thedailywonton",storageBucket:"thedailywonton.appspot.com",messagingSenderId:"960882307434",appId:"1:960882307434:web:ea219606913ffbeb077513",measurementId:"G-34D4PB9BGH"},w=u(k),d=f(w);var r=new Date,B=String(r.getDate()).padStart(2,"0"),E=String(r.getMonth()+1).padStart(2,"0"),v=r.getFullYear();r=E+"/"+B+"/"+v;async function a(){return await p(m(d,"articles"))}let s=!1;if(document.getElementById("info")!=null){let i=document.getElementById("taken").children[0].children[0];a().then(function(t){if(console.log(t),console.log(t.docs),t.docs)for(let e of t.docs)e.data().date==r&&(i.innerHTML="Taken",i.style.color="coral",document.getElementById("tb").style.display="none",s=!0)}),s==!1&&(i.innerHTML="Not Taken",i.style.color="lightgreen"),document.getElementById("tb").onclick=function(){location.href="pages/write.html"},document.getElementById("rb").onclick=function(){location.href="pages/read.html"}}else if(document.getElementById("write")!=null){async function i(t,e,o){return await g(m(d,"articles"),{date:t,article:e,name:o,comments:[]})}document.getElementById("submit").onclick=async function(){a().then(function(t){if(t.docs){let e=!1;for(let o of t.docs)o.data().date==r&&(e=!0,alert("Today's article is already taken"),location.href="../index.html");if(e==!1){let o=document.getElementById("write").value,n=document.getElementById("name").value;i(r,o,n).then(function(l){alert("article added successfully"),location.href="../index.html"})}}})}}else a().then(function(i){for(let t of i.docs){let e=document.getElementById("entry").cloneNode(!0);e.children[5].style="display:none;background-color:gray;padding:1%;",document.getElementById("app").appendChild(e),e.style.display="block",e.children[1].innerHTML=t.data().name,e.children[2].innerHTML=t.data().date,e.children[3].innerHTML=t.data().article,e.children[4].onclick=()=>{let o=t.data().comments;for(let n of o){let l=document.createElement("p"),c=document.createElement("b");c.innerHTML=n.name+": ",l.appendChild(c),l.innerHTML+=n.comment,e.children[5].children[5].appendChild(l)}if(e.children[5].style.display=="none")e.children[5].style.display="block";else{for(;e.children[5].children[5].firstChild;)e.children[5].children[5].removeChild(e.children[5].children[5].firstChild);e.children[5].style.display="none"}},e.children[5].children[4].onclick=()=>{let o=e.children[5].children[2].value,n=e.children[5].children[3].value,l=t.data().comments;l.push({name:n,comment:o}),h(I(d,"articles",t.id),{comments:l}),e.children[5].children[3].value="",e.children[5].children[2].value=""}}});