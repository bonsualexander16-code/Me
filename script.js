            const imgs = document.querySelectorAll("img") ;
            let v = document.getElementById("viewer") ;
            let closeB = document.getElementById("close") ;
            let v1 = document.getElementById("imgC");
            let down = document.getElementById("download") ;
            
            imgs.forEach(img=>{
                img.addEventListener("click" , ()=>{
                    v1.src = img.src
                    down.download = img.src ;
                v.classList.toggle("active") ;
                })
                
                v1.addEventListener("click", (e) => {
                e.stopPropagation();
       });
            })
            
            closeB.addEventListener("click" , (e)=>{
                console.log(e) ;
                v.classList.remove("active") ;
            })
            
            dowm.addEventListener("click" , ()=>{
    
            })
