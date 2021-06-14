const validator = {
  isvalid: (cardNumber) => {
    
    let card = cardNumber; // Obtenemos el número de la tarjeta
    console.log(card);

    let stringCardNumber = card.split(""); // Obtnemos el número en una cadena y en reversa
    console.log(stringCardNumber);

    // let reverseCardNumber = stringCardNumber.reverse(); // Obtenemos el número en reversa
    // console.log(reverseCardNumber);

    let parNumber = [];
    let doubleNumber = [];
    let finalNumber = [];

    let sumNumber = 0;

    if ((card.length === 18) || (card.length === 16) || (card.length === 14)) {
      for (let i = stringCardNumber.length-1; i >= 0; i--) {
        if (i % 2 !== 0) {
          parNumber.push(stringCardNumber[i]);
        }else {
          doubleNumber.push((stringCardNumber[i] *2).toString());
        }
      }
    } else if ((card.length <= 19) || (card.length === 17) (card.length === 15) || (card.length === 13)) {
      for (let i = stringCardNumber.length-1; i >= 0; i--) {
        if (i % 2 === 0) {
          parNumber.push(stringCardNumber[i]);
        }else {
          doubleNumber.push((stringCardNumber[i]*2).toString());
        }
      }
    }

    doubleNumber = doubleNumber.join("").split("");
    finalNumber = doubleNumber.concat(parNumber);

    for (let index = 0; index < finalNumber.length; index++) {
      sumNumber += parseInt(finalNumber[index], 10);
    }

    console.log(sumNumber);

    if (sumNumber % 10 === 0) {
      return true;
    }else{
      return false;
    }

    //console.log(parNumber);
  }
};

export default validator;
