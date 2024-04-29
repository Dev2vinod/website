
var second =60;
var mintues =2;

var hoursVal =document.getElementById("hours");
var mintuesVal =document.getElementById("mintues");
var secondVal =document.getElementById("second");
var result =document.getElementById("result");
var result2 =document.getElementById("result2");
var result3 =document.getElementById("result3");

 var hours =hoursVal.value;

//  document.getElementById("start").addEventListener("click",timer)

 if(!hoursVal ==0&&mintuesVal!==0){
  alert("plese some number in mintues or hours")
 }else{

  var timer =()=>{

    
    setInterval(() => {
   result.innerHTML =`second ${second}  `
   console.log("im upper value",second)


   if (second==0) {
    mintues--
    result2.innerHTML =` mintues ${mintues}`
    second =59
    console.log(mintues,"i am mintues")
    mintuesVal--

   //  if(mintuesVal==0&&hours==0){
   //   stop()
   //  }
    if(mintues==0){
      hours--
      result3.innerHTML =`hours ${hours}`
      mintues =2
      if (hours==0) {
        console.log(hours,"im a hours")
        stop()
        
      }
      console.log(hours,"value of housrs")
    
    }
    console.log(second,"value of second")
   }

 second--;

 }, 1); 
}



 }

  
   
   
  const myTimeout = setTimeout(myGreeting, 3000);

  function myGreeting() {
    document.getElementById("demo").innerHTML = "Happy Birthday to You !!"
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);
  }


 function stop(){
  clearTimeout(timer)
 }
 
