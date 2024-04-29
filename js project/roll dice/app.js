var result =document.getElementById("result");
var image =document.getElementById("img");


 const roll =()=>{

    var randomNumber =Math.ceil(Math.random()*6);
    console.log(randomNumber,"nmber")

    if(randomNumber===1){
        image.src ='./one.png'
        result.innerHTML =`Dice Value: ${randomNumber}`
        console.log(randomNumber," im zero")
    }if(randomNumber===2){
        image.src ='./two.png'
        result.innerHTML =`Dice Value:${randomNumber}`

        
    }if(randomNumber===3){
        image.src ='./three.png'
        result.innerHTML =`Dice Value:${randomNumber}`


    }if(randomNumber===4){
        image.src ='./four.png'
        result.innerHTML =`Dice Value:${randomNumber}`


    }if(randomNumber===5){
        image.src ='./five.png'
        result.innerHTML =`Dice Value:${randomNumber}`


    }if(randomNumber===6){
        image.src ='./six.png'
        result.innerHTML =`Dice Value:${randomNumber}`


    }
 }

