
/*-----------------------Animation Scrolling Start----------------*/
window.addEventListener("load",function(){

    /*Animation*/
    AOS.init();
})
/*-----------------------Animation Scrolling END----------------*/


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
// const menuTabs=document.querySelector(".menu-tabs");
// menuTabs.addEventListener("click",function(e){
//     if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
//         const target =e.target.getAttribute("data-target");
//         menuTabs.querySelector(".active").classList.remove("active");
//         e.target.classList.add("active");
//         const menuSection=document.querySelector(".menu-section");
//         menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
//         menuSection.querySelector(target).classList.add("active")
//     }
// })

const menuTabs=document.querySelector(".menu-tabs");
console.log(menuTabs);
menuTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const tarGet=e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        // const menuSection=document.querySelector(".menu-section");
        // console.log(menuSection);
        document.querySelector(".menu-tab-content.active").classList.remove("active");
        document.querySelector(tarGet).classList.add("active");  

        /*Animation*/
        AOS.init(); 
        
        
}})