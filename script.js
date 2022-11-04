// ///////////////typing animation//////////////////////////////////

var typed= new Typed(".typing",{
  strings:["Full Stack Java Developer","Back-End Developer"],
  typeSpeed:80,
  BackSpeed:60,
  loop:true
})

// ///////////////////////Aside//////////////////////////////////

let nav = document.querySelector(".nav")

navlist=nav.querySelectorAll("li")

allsection=document.querySelectorAll(".section")

for(let i=0;i<navlist.length;i++)
{
  const a=navlist[i].querySelector("a");

  a.addEventListener("click",function()
  {
    for(let i=0;i<allsection.length;i++){
      allsection[i].classList.remove("back-section")
    }
    for(let j=0;j<navlist.length;j++)
    {
      if(navlist[j].querySelector("a").classList.contains("active"))
      {
           allsection[j].classList.add("back-section")
      }
      navlist[j].querySelector("a").classList.remove("active")
    }
    this.classList.add("active")
    showSection(this)
    if(window.innerWidth<1200){
      asidetoglebtn()
    }
  })
}

function showSection(element){
  for(let i=0;i<allsection.length;i++){
    allsection[i].classList.remove("active")
  }
  const target=element.getAttribute("href").split("#")[1]

  document.querySelector("#"+target).classList.add("active")

}
function updateNav(element){
for(let i=0;i<navlist.length;i++){
  navlist[i].querySelector("a").classList.remove("active")

  const target=element.getAttribute("href").split("#")[1]

  if(target===navlist[i].querySelector("a").getAttribute("href").split("#")[1])
{
  navlist[i].querySelector("a").classList.add("active")

}
}
}
document.querySelector(".hire-me").addEventListener("click",function()
{
  showSection(this)

  updateNav(this)
})
// //////////////////////togle btn////////////////////

const toglebtn=document.querySelector(".nav-toggle"),

aside=document.querySelector(".aside")

toglebtn.addEventListener("click",()=>
{
  asidetoglebtn()
})

function asidetoglebtn()
{
  aside.classList.toggle("open")

  toglebtn.classList.toggle("open")

  for(let i=0;i<allsection.length;i++)
  {
    allsection[i].classList.toggle("open")
  }
}