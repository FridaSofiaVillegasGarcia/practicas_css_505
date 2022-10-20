const VerClima=  ()=>{
let apikey= "ee1e5278fc35d18f5d761e4b3f3bfa0e";
let divRes=document.querySelector("#res");
if(navigator.geolocation){
    var success = async function(position){
    var latitud = position.coords.latitude,
            longitud = position.coords.longitude;
            console.log("Latitud:  " +latitud +",Longitud: " + longitud);
let url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric&lang=es `;

        const  api= await fetch(url);
        const  data= await api.json();
        console.log(data);
        const urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        divRes.innerHTML=`
        <h2> ${data.name.toUpperCase()}</h2>
        <p> Temperatura : ${data.main.temp} °C </p>
        <img src="${urlIcon}">  
        <h2>${data.weather[0].description}</h2>
        <p> MIN:${data .main.temp_min}°C</p>
        <p> MAX:${data .main.temp_max}°C</p>
        <p> PRESION:${data .main.pressure}pda</p>
        <p> HUMEDAD:${data .main.humidity}</p>
        <p> VELOCIDAD DE VIENTO:${data.wind.speed} k/hr</p>
        
        `;
        }
        navigator.geolocation.getCurrentPosition(success, function(msg){
        console.error( msg );
        });
        } 
}