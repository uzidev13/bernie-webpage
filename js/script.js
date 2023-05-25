(() =>{
  
  
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
  
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if(menuItemHasChildren.classList.contains("active")){
              collapseSubMenu();
          }
          else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".menu-item.active")){
              collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item.active")
        .classList.remove("active");
    }
    function resizeFix(){
         // if navMenu is open ,close it
         if(navMenu.classList.contains("open")){
             toggleNav();
         }
         // if menuItemHasChildren is expanded , collapse it
         if(navMenu.querySelector(".menu-item.active")){
              collapseSubMenu();
       }
    }
  
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
           resizeFix();
       }
    });

    const toggleables = document.querySelectorAll('.toggleable')

const toggleImage = (e) => {
  const icon = e.composedPath().find((el) =>  el.classList.contains('toggleable'));
  
  if (icon.classList.contains('toggled')) {
    icon.classList.remove('toggled');
  } else {
    icon.classList.add('toggled');
  }
};

toggleables.forEach((toggleable) => {
  toggleable.addEventListener('click', toggleImage);
});


  
  })();

  let tl = gsap.timeline({});
tl.from(".hands", {
  opacity: 0,
  x: 120,
  duration: 0.7
});
tl.from("h1", {
  opacity: 0,
  x: 120,
  duration: 1,
  delay: 0.2
}, "-=0.6");
tl.from("p", {
  opacity: 0,
  y: 80,
  duration: 1
}, "-=0.6");

  
  
  