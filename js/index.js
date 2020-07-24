

document.addEventListener('DOMContentLoaded', Saludar);

function Saludar()
{
    const cuerpo = document.querySelector('#cuerpo');
    let saludo = document.createElement('p');
    saludo.textContent = 'Hola Estamos probado git'
    cuerpo.appendChild(saludo);
}