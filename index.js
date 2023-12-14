const apiKey="aa2626df8ee76e94d338175352c1b3d2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search btn");
let weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./weather-app-img/images/clouds.png";
        }
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./weather-app-img/images/clear.png";
        }
        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./weather-app-img/images/rain.png";
        }
        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./weather-app-img/images/drizzle.png";
        }
        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./weather-app-img/images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    }
    
}

searchButton,addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})