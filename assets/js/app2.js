/*const key = 'a852dce88d74582eda81a235c6240fbe'
const url = 'https://api.openweathermap.org/data/2.5/weather?q=medellin&appid=8684198c2eb23343d85874dac76f1006&units=metric'
const clima = fetch(url)
                .then(response => response.json())
                .then(data => console.log(data.main.temp))

console.log(clima);*/

const send = document.querySelector('#send');
const clima = document.querySelector('#clima')
send.addEventListener('click', queryWeather);
function queryWeather(e) {
    e.preventDefault()
    const city = document.querySelector('#city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8684198c2eb23343d85874dac76f1006&units=metric`
   

    const weather = fetch(url)
        .then(res => res.json())
        .then(data => showIntoDOM(data))
}
function showIntoDOM(data) {
    clearHTML()
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const { main:{temp,humidity,feels_like}} =data;
const city = document.querySelector('#city').value;
const celsius = document.createElement('p');
const icono = document.createElement('img');
icono.src = iconUrl;
const humedad = document.createElement('p')
humedad.textContent = ` La Humedad es ${humidity}`
const ciudad = document.createElement('h2')
ciudad.textContent = `En ${city}`

celsius.textContent = `La temperatura es ${Math.ceil(temp)}°C`
clima.appendChild(ciudad)
clima.appendChild(celsius)
clima.appendChild(humedad)
clima.appendChild(icono)
console.log(data);
}


function clearHTML() {
    clima.innerHTML = '';
}
