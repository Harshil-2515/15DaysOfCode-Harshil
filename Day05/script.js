const apiKey = ""; // API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchbtn = document.querySelector(".search-box button");
const symbol = document.querySelector(".weather img");
const inactiveties = document.querySelectorAll(".inactive");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".errormes").style.display = "block";
    }
    else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        console.log.apply(data);
        if (data.weather[0].main == "Clouds") {
            symbol.src = "assets/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            symbol.src = "assets/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            symbol.src = "assets/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            symbol.src = "assets/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            symbol.src = "assets/rain.png"
        }
        else if (data.weather[0].main == "Snow") {
            symbol.src = "assets/snow.png"
        }
        inactiveties.forEach((inactive) => {
            inactive.classList.remove("inactive");
        });
        document.querySelector(".errormes").style.display = "none";
    }
}


// window.addEventListener("DOMContentLoaded", () => {
//     checkWeather();
//   });



searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

// searchBtn.addEventListener("click", () => {
//     const city = searchBox.value;
//     if(city) {
//         checkWeather(city);
//     }
// });