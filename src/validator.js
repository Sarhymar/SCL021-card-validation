const validator = {
 isValid: function(cardNumber) {
    //Dando vuelta al número de tarjeta
    let reversedCard = cardNumber.toString().split('').reverse().map(Number)
  
    console.log(reversedCard);
  
    //Encontrando posición impar y duplicándola
    for (let i = 0; i < reversedCard.length; i++) {
      if (i % 2 === 1) {
        reversedCard[i] = reversedCard[i] * 2;
        // Si el número duplicado tiene dos dígitos, resto nueve (mismo resultado de sumar ambos dígitos)
        let digits = reversedCard[i];
        if (digits >= 10) {
          reversedCard[i] = reversedCard[i] - 9;
        }
      }
    }
  
  
    //Suma de todos los números del nuevo array de la tarjeta
    let arrayCard = reversedCard;
    let suma = 0;
    for (let i = 0; i < arrayCard.length; i++) {
      suma += arrayCard[i];
    }
  
  
    let lastDigit = suma.toString().slice(-1)
    
    if (lastDigit === '0' && suma > 0 && arrayCard.length > 15) {
      console.log('Is valid');
      alert('¡Sus datos han sido guardados con éxito!');
    }
    else {
      console.log('Is not valid');
      document.getElementById("demo").innerHTML = '';
      document.getElementById("demo").innerHTML += 'Número de tarjeta inválido, revise el número ingresado';
    }
  }
};

export default validator;
