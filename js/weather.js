
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = config.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temp =Math.floor(data.main.temp);
            city.innerText = `${data.name}-ro`; 
            weather.innerText = `${data.weather[0].main} / ${temp}°C`;
    });
}

function onGeoError(){
    alert("can't find you. No eather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
