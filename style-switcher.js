//////////// toogel styl switcher////////////////////

// let toogle= document.querySelector(".switch-toggle");

// toogle.addEventListener("click",()=>{
//   document.querySelector(".style-switch").classList.toggle("open")
// })

////////hide style swicher scroll tym

// window.addEventListener("scroll",()=>{
  
//   if(document.querySelector(".style-switch").classList.contains("open"))
//   {
//     document.querySelector(".style-switch").classList.remove("open")
//   }
// })

//////////// theme colors////////////////////

// let as=document.querySelectorAll(".alternate-style");
 
// const setactive=(color)=>{
// as.forEach((style)=>{
//   if(color===style.getAttribute("title")){
//     style.removeAttribute("disabled");
//   }
//   else{
//     style.setAttribute("disabled","true")
//   }
// })
// }

//////////// theme dark  mode or light mode////////////////////

let day=document.querySelector(".day-night");
day.addEventListener("click",()=>{
  day.querySelector("i").classList.toggle("fa-sun")
  day.querySelector("i").classList.toggle("fa-moon")
  document.body.classList.toggle("dark")


})
window.addEventListener("load",()=>{
  if(document.body.classList.contains("dark"))
  {
    day.querySelector("i").classList.add("fa-sun")
  }
  else{
    day.querySelector("i").classList.add("fa-moon")

  }
})