import{L as u,a as c}from"./lightweight-charts.production-d476aad2.js";function m(t){if(u(t))return t*1e3;if(c(t))return new Date(t.year,t.month,t.day).valueOf();const[e,n,a]=t.split("-").map(parseInt);return new Date(e,n,a).valueOf()}function g(t){if(!t)return["",""];const e=new Date(t),n=e.getFullYear(),a=e.toLocaleString("default",{month:"short"}),r=`${e.getDate().toString().padStart(2,"0")} ${a} ${n}`,o=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0"),i=`${o}:${s}`;return[r,i]}export{m as c,g as f};
