let food=prompt("ماذا ستطلب؟")

switch(food) {
    case 1:
      console.log("برقر")
      break;
    case 2:
      console.log("بيتزا")
      break;
    case 3:
        console.log("شاورما")
        break;

    default:
      "لا يوجد لدينا هذا الطلب"
  };

  let numper1 = parseInt(prompt("ادخل الرقم الاول"))
  
  let numper2 = parseInt(prompt("ادخل الرقم الثاني"))

   let calculation = prompt("+,-,*,/")
   if (numper1 && numper2) 
   {console.log("worng")
if (calculation == "+") {
    console.log(numper1+numper2);
}  else if (calculation == "-")
console.log(numper1-numper2)
} 
else if (calculation == "*"){

console.log(numper1*numper2)
}
else if (calculation == "/"){
console.log(numper1/numper2);
}
else{
    console.log("worng")
}

let age = parseInt(prompt("ادخل عمرك"))
if(age < 5){
    console.log("روضه");

}
else if (age > 5 && age < 18){
console.log("مدرسه");
}
else if (age >17){
console.log("جامعه")}
