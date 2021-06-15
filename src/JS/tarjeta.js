const tarjeta = document.querySelector('#tarjeta');
const formulario = document.querySelector('#formulario-tarjeta');
const numeroTarjeta = document.querySelector('#tarjeta .numero');
const logoTarjeta = document.querySelector('#logo-tarjeta');
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
const monthExpiracion = document.querySelector('#tarjeta .month');
const yearExpiracion = document.querySelector('#tarjeta .year');
const ccv = document.querySelector('#tarjeta .ccv');

const mostrarDelantera = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}

// Agrege la clase active para que la tarjeta gire
tarjeta.addEventListener('click',() => {
    tarjeta.classList.toggle('active');
});

// Mes
for (let i = 1; i <= 12; i++) {
    //console.log(i);
    let month = document.createElement('option');
    month.value = i;
    month.innerText = i;
    formulario.selectMonth.appendChild(month);
}

// Año
const yearActual = new Date().getFullYear();
for (let i = yearActual; i < yearActual + 6; i++) {
    //console.log(i);
    let year = document.createElement('option');
    year.value = i;
    year.innerText = i;
    formulario.selectYear.appendChild(year);
}

// Formulario: Número de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    //console.log(e.target.value);
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    // reemplazar espacios por vacio
    .replace(/\s/g, '')
    // reemplazar letras por vacio
    .replace(/\D/g, '')
    // agrupar en 4 y colocar un espacio
    .replace(/([0-9]{4})/g, '$1 ')
    //elimina el ultimo espacio de una text
    .trim();

    numeroTarjeta.textContent = valorInput;

    if(valorInput == ''){
        numeroTarjeta.textContent =  '#### #### #### ####';
        logoTarjeta.innerHTML = '';
    }

    if (valorInput[0] == 4) {
        logoTarjeta.innerHTML = '';
        const logo = document.createElement('img');
        logo.src = '../Images/visa.png';
        logoTarjeta.appendChild(logo);
    } else if(valorInput[0] == 5) {
        logoTarjeta.innerHTML = '';
        const logo = document.createElement('img');
        logo.src = '../Images/mastercard.png';
        logoTarjeta.appendChild(logo);
    }

    mostrarDelantera();
});

// Formulario: Nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'FRIENDS';
	}

	mostrarDelantera();
});

// Formulario: Mes
formulario.selectMonth.addEventListener('change', (e) => {
	monthExpiracion.textContent = e.target.value;
	mostrarDelantera();
});

// Formulario: Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarDelantera();
});

// Formulario: CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});
