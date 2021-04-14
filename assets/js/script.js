/*------------------------Toggle Navbar----------------------*/

const navToggler=document.querySelector(".nav-toggler");
navToggler.addEventListener("click",toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/*----------close nav when clicking on a nav item-------------*/
document.addEventListener("click",function(event){
    if(event.target.closest(".nav-item")){
        toggleNav();
    }
})

/*-----------------------Sticky Navbar-------------------------*/
window.addEventListener("scroll",function(){
    
    if(this.pageYOffset>100){
        console.log("if")
        document.querySelector(".header").classList.add("sticky");
       
    }
    else{
        console.log("else")
        document.querySelector(".header").classList.remove("sticky");
       
    }
})