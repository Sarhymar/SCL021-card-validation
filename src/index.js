import validator from './validator.js';
//Llamando al botón "Validar" y añadiendo evento
const element= document.getElementById('buttonFunction');

element.addEventListener('click', buttonFunction);


//LLamando a todos los valores del formulario
function buttonFunction () {
    let userName= document.getElementById('name').value
    let userMail= document.getElementById('mail').value
    let userPhone= document.getElementById('phone').value
    let userAdress= document.getElementById('adress').value
    
    let cardNumber= parseInt (document.getElementById('cardNumber').value)
    let cardCvv= document.getElementById('cardCvv').value
    let cardDate= document.getElementById('date').value
    let cardCountry= document.getElementById('country').value

    /*function errorCardNumber () {   
      let cardNumber= parseInt (document.getElementById('cardNumber').value)
      if (cardNumber === NaN){
        document.getElementById("demo").innerHTML+= 'Campo requerido, introduce solo números';
  }
}
*/
    console.log(userName);
    console.log(userMail);
    console.log(cardDate);
    console.log(cardNumber);

       //Dando vuelta al número de tarjeta
   let reversedCard = cardNumber.toString().split('').reverse().map(Number)
   
   //console.log(reversedCard);
   
   //
   for(let i = 0; i < reversedCard.length; i++) {
    if(i % 2 === 1) {
      reversedCard[i] = reversedCard[i] * 2;
      
      let suma = reversedCard.length;
      if (suma > 1) {
        reversedCard[i] = reversedCard[i]-9; 
        //reversedCard[i]+=reversedCard;
    }
     

      }

      
}


console.log(reversedCard);

let arrayCard= reversedCard;
let suma= 0;
for(let i = 0;i<arrayCard.length; i++){
  suma +=arrayCard[i];
}

console.log(suma);

}