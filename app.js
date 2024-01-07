 const navigatonList = document.querySelector("ul");
        const burgerIcon= document.querySelector(".burger");
        const list = document.querySelector("li")
        
          // The transition
          burgerIcon.onclick = function (){
            navigatonList.classList.toggle("ul-active")
            burgerIcon.classList.toggle("toogle")
            
        }
        // The animation of the burger
        list.forEach((links, index) => {
        
       });