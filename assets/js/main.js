document.getElementById("year").textContent=new Date().getFullYear();
const words=["php --build custom-platform","node api.js --integrate","wp --engineer custom-system","ai --accelerate web-production"];
let wi=0,ci=0,del=false;const el=document.getElementById("typed");
function type(){const w=words[wi];el.textContent=w.slice(0,ci);if(!del&&ci<w.length){ci++;setTimeout(type,55)}else if(!del){del=true;setTimeout(type,1300)}else if(ci>0){ci--;setTimeout(type,25)}else{del=false;wi=(wi+1)%words.length;setTimeout(type,350)}}type();