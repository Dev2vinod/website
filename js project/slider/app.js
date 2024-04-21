var image = document.getElementById("image");

var rightX =0;
var leftX =4

 
document.addEventListener("click",(event)=>{
    let imgWidth = event.target.clientWidth;
    var x =event.offsetX
    // var y =Math.floor(x)
    let screenPercentage = Math.floor((x * 100) / imgWidth);
   console.log(screenPercentage,"wi")
    // console.log(y)
    if(rightX==4){
        rightX=0
    }

  if(0<x ||x<=500){
    if (leftX<=0) {
        leftX =4
        
    }
    image.src= `./img${leftX}.jpg `
    leftX--;
        }else{
        rightX++
    image.src= `./img${leftX}.jpg `

    }
    

//  console.log(x,"<--x","y-->",event.offsetY)


})