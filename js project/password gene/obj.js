// console.log(a)
// var a =2
// console.log()

// console.log(a)
// if(true){
   
//    var a =3
// }

// console.log(a)



 // tempelate string

//  var a = "cinpd"
//  var b ="singh"
//  console.log(`${a}and ${b } is ${a }`)
//  var a =`vinod
//  and singh`
//  console.log(a)


 let student  ={
    name:"vinod",
    class:"mobile",
    roll:"233",
    school:{
        mentor:"ghous ahmed"
    },

    friend:{
        two:"i and me"
    }

 }

  console.log(student.school.mentor)

  let {name,friend,roll,school} =student;
  const {mentor} =school
  console.log(name)
  console.log(friend,roll)