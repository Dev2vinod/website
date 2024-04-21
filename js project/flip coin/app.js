var coin =document.getElementById("coin")
var reset =document.getElementById("reset")
var image =document.getElementById("image")







     coin.addEventListener("click",()=>{
        
        var randomNumber =Math.floor((Math.random()*2))
        
    if(randomNumber===0){
     
        Swal.fire({
            title: "Good job!",
            text: "Head is come",
            icon: "success"
          });
       
        image.src ='./headin.jpg'
        
       

    }else{
        
        Swal.fire({
            title: "Good job!",
            text: "Tail is come",
            icon: "success"
          });
        image.src ='./tail ci.jpg'
       
        

    }

})

 reset.addEventListener("click",()=>{
    location.reload()
 })

