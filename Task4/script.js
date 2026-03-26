document.getElementById("get-weather").addEventListener("click", function () {
    var city = document.getElementById("city-input").value;
    var outputDiv = document.getElementById("weather-result");

    if(city === ""){
        outputDiv.innerHTML = "Please enter a city name";
        outputDiv.classList="error";
        return;
    }

    fetch(`https://wttr.in/${city}?format=j1`)
        .then(response => response.json())
        .then(data => {

            const weather = data.current_condition[0];
            const cityName = data.nearest_area[0].areaName[0].value;
            outputDiv.classList="success";
            outputDiv.innerHTML = `
                <h2>${cityName}</h2>   
                <img src="${weather.weatherIconUrl[0].value}" alt="weather icon">
                <p><b>Temperature (°C):</b> ${weather.temp_C}</p>
                <p><b>Temperature (°F):</b> ${weather.temp_F}</p>
                <p><b>Humidity:</b> ${weather.humidity}%</p>
                <p><b>Pressure:</b> ${weather.pressure} mb</p>
                <p><b>Weather:</b> ${weather.weatherDesc[0].value}</p>

            `;
        })

        .catch(error => {
            outputDiv.innerHTML = "Error fetching weather data";
            outputDiv.classList="error";
            console.error(error);
        });
    });