document.getElementById("year").textContent=new Date().getFullYear();
const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
const moreBtn=document.getElementById("loadMore");
if(moreBtn){
  moreBtn.addEventListener("click",()=>{
    document.querySelectorAll(".extra-project").forEach(el=>{el.classList.add("show","visible")});
    moreBtn.parentElement.style.display="none";
  });
}
