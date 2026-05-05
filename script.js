let imgs = document.querySelectorAll("img") ;

imgs.forEach(img =>{
    img.addEventListener("click" , ()=>{
        window.open(img.src) ;
    }) ;
}) ;
