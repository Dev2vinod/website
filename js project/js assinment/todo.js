var list =document.getElementById("list");
var input =document.getElementById("input");
var btn =document.getElementById("add");

btn.addEventListener("click",()=>{
   var userInput =input.value;
   if(userInput.trim()==''){
      console.log("please enter some thing")
   }else{

      var li =document.createElement("li")
      var un =document.createElement("un")
   var p =document.createElement("p");
   var delBtn =document.createElement("button")
   var delText =document.createTextNode("Delete")
   delBtn.appendChild(delText);
   delBtn.setAttribute("onclick","workDel()")
  
   var editBtn =document.createElement("button");
   editBtn.setAttribute("class","workEdit")
   var editText =document.createTextNode("Edit")
   editBtn.appendChild(editText)
   
  
   var text =document.createTextNode(userInput)
   p.appendChild(text);
   p.appendChild(delBtn);
   p.appendChild(editBtn);
   li.appendChild(p)
  //  un.appendChild(li)
   list.appendChild(li)
  //  list.appendChild(un)
   
   console.log(list)
   input.value =''
  
   }
   
   
})

 function workDel(){
   // console.clear()
 event.target.parentNode.parentNode.remove()
 }

 document.getElementById("delAll").addEventListener("click",()=>{
   // console.log(event.target.parentNode.remove())
   // list.remove(li)
   // list.removeChild()
   

 
 console.log(list.childNodes)

 })

  function light(){
    
    input.style.backgroundColor='yellowgreen'
  }

 
  