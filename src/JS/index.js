import validator from './validator.js';

let botonValidar = document.getElementById('btnValidar')
botonValidar.addEventListener('click', () => {
    let cardNumber = document.getElementById('inputNumero').value;
    //console.log('Me diste click: ' + cardNumber);

    let resultValidator = validator.isvalid(cardNumber.replace(/\s/g, ''));
    //console.log(resultValidator);

    // if (resultValidator === true) {
    //     alert('Tarjeta valida');
    // }else{
    //     alert('Tarjeta invalida')
    // }

    let maskNumber = validator.maskify(cardNumber.replace(/\s/g, ''));
    //console.log(maskNumber);

    resultValidator === true?alert('Tarjeta valida ' + maskNumber):alert('Tarjeta invalida');

});

//console.log(validator);
