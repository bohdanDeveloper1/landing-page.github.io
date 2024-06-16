  let navElement = document.querySelector(".header__burger__nav");

  function burgerToggler(){
    if(navElement){
      if(navElement.style.display === "block"){
        navElement.style.display = "none";
       }else{
        navElement.style.display = "block";
       }
    }
  }

  function checkWindowWidth() {
        if (document.documentElement.clientWidth >= 624) {
          navElement.style.display = "none";
        }
  }
  
  window.addEventListener('resize', checkWindowWidth);