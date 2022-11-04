

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