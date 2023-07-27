menu = () =>  {
    const option = parseInt(prompt('Elije la opción que deseas\n' +
        '1. Sumar dos números\n' +
        '2. Promedio de notas\n' +
        '3. Área de un rectángulo\n' +
        '4. Área de un triángulo\n' +
        '5. Area de un círculo\n' +
        '6. Sueldo semanal\n' +
        '7. Transformar metros a pulgadas (modista)\n' +
        '8. Cambio a dólar (empresa importadora)\n' +
        '9. Calcular edad en base al año de nacimiento'));

    switch (option) {
        case 1:
            const number1 = parseInt(prompt('Ingresar primer número'));
            const number2 = parseInt(prompt('Ingresar primer número'));
            sumar(number1, number2);
            break;
        case 2:
            const nota1 = parseInt(prompt('Ingresar 1era nota'));
            const nota2 = parseInt(prompt('Ingresar 2da nota'));
            const nota3 = parseInt(prompt('Ingresar 3ra nota'));
            const nota4 = parseInt(prompt('Ingresar 4ta nota'));
            promedio(nota1, nota2, nota3, nota4);
            break;
        case 3:
            const base = parseInt(prompt('Ingresar la base'));
            const altura = parseInt(prompt('Ingresar la altura'));
            areaRectangulo(base, altura);
            break;
        case 4:
            const base2 = parseInt(prompt('Ingresar la base'));
            const altura2 = parseInt(prompt('Ingresar la altura'));
            areaTriangulo(base, altura)
            break;
        case 5:
            const radio = parseInt(prompt('Ingresar el radio'));
            areaCirculo(radio);
            break;
        case 6:
            const tarifaPorHora = parseInt(prompt('Ingresar la tarifa por hora'));
            const horasTrabajadas = parseInt(prompt('Ingresar las horas trabajadas'));
            calcularSalario(tarifaPorHora, horasTrabajadas);
            break;
        case 7:
            const metros = parseInt(prompt('Ingresar los metros de tela'));
            transformarMetrosAPulgadas(metros);
            break;
        case 8:
            const soles =  parseInt(prompt('Ingresar la cantidad de soles por cambiar'));
            transformarADolares(soles);
            break;
        case 9:
            const anioNac =  parseInt(prompt('Ingresar tu año de nacimiento'));
            calcularEdad(anioNac);
            break;
        default:
            alert('Elige alguna opción adecuada');
            break;
    }
}



// Ejercicio 1
const sumar = (number1, number2) => {
    const suma = number1 + number2;
    alert("La suma de los números es " + suma);
}

// Ejercicio 2
const promedio = (nota1, nota2, nota3, nota4) => {
    const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    alert("El promedio de las notas ingresadas es " + promedio);
}

// Ejercicio 3
const areaRectangulo = (base, altura) => {
    const area = base * altura;
    alert("El área de este rectángulo es " + area);
}

// Ejercicio 4
const areaTriangulo = (base, altura) => {
    const area = base * altura / 2;
    alert("El área de este triángulo es " + area);
}

// Ejercicio 5
const areaCirculo = (radio) => {
    const area = Math.PI * Math.pow(radio, 2);
    alert("El área de este círculo es " + area);
}

// Ejercicio 6
const calcularSalario = (tarifaPorHora, horasTrabajadas) => {
    const salario = tarifaPorHora * horasTrabajadas;
    alert('El salario semanal de esta persona ' + salario);
}

// Ejercicio 7
const transformarMetrosAPulgadas = (metros) => {
    const pulgadas = metros / 0.0254;
    alert('Las pulgadas que debe enviar son ' + pulgadas);
}

// Ejercicio 8
const transformarADolares = (soles) => {
    const dolares = soles / 3.6;
    alert('Los dólares que puede adquirir son ' + dolares);
}

// Ejercicio 9
const calcularEdad = (anioNacimiento) => {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const edad = anioActual - anioNacimiento;
    alert('La edad del trabajador es ' + edad);
}

// Ejercicio 10
const arrayPersonas = [
    {
        edad: 10,
        nombre: 'Juan',
    },
    {
        edad: 15,
        nombre: 'Pedro',
    },
    {
        edad: 8,
        nombre: 'Lorgio',
    }
];
const menorPersona = (personas) => {
    let edadMinima = Infinity;
    personas.forEach(persona => {
        if (persona.edad < edadMinima) {
            edadMinima = persona.edad;
        }
    })
    const {nombre} = personas.find(persona => persona.edad === edadMinima);
    console.log("La persona con edad mínima es " + nombre);
}