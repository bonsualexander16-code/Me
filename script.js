let imgs = document.querySelectorAll("img") ;

imgs.forEach(img =>{
    img.addEventListner("click" , ()=>{
        window.open(img.src) ;
    }) ;
}) ;