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
    if(this.pageYOffset>400){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
})


/*-----------------------Menu Tabs-------------------------*/
function menuClick(e){
    
    console.log("click",e)
}