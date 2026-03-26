
window.goPage = function(page){

setTimeout(()=>{

document.querySelectorAll(".page").forEach(section=>{
section.classList.remove("active")
})

document.getElementById(page).classList.add("active")

},300)


}



document.addEventListener("click",()=>{

spider.style.transform="scale(1.4)"

setTimeout(()=>{
spider.style.transform="scale(1)"
},150)

})



setInterval(()=>{

spider.style.transform="rotate("+(Math.random()*8-4)+"deg)"

},1000)