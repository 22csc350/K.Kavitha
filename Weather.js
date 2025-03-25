const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found!");
            } else {
                const weather = data.weather[0];
                const main = data.main;

                document.getElementById('location').innerText = `Weather in ${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').innerText = `Temperature: ${main.temp}°C`;
                document.getElementById('description').innerText = `Description: ${weather.description}`;
                document.getElementById('humidity').innerText = `Humidity: ${main.humidity}%`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
