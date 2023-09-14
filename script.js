const weatherForm = document.getElementById("weather-form");
const getWeatherButton = document.getElementById("get-weather-button");
const loadingSpinner = document.querySelector(".spinner-border");
const loadingText = document.querySelector(".loading-text");
const originalText = document.querySelector(".original-text");
const weatherInfo = document.getElementById("weather-info"); 
weatherForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const city = document.getElementById("city").value;

    clearWeatherInfo();

    showLoading();

    fetch("weather.php?city=" + city, {
        method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        const weatherData = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
        weatherInfo.innerHTML = weatherData;

        hideLoading();
    })
    .catch(error => {
        console.error("Error:", error);

        hideLoading();
    });
});

function showLoading() {
    getWeatherButton.disabled = true; 
    loadingSpinner.classList.remove("d-none");
    loadingText.classList.remove("d-none"); 
    originalText.classList.add("d-none"); 
}

function hideLoading() {
    getWeatherButton.disabled = false; 
    loadingSpinner.classList.add("d-none"); 
    loadingText.classList.add("d-none");
    originalText.classList.remove("d-none"); 
}

function clearWeatherInfo() {
    weatherInfo.innerHTML = ""; 
}
