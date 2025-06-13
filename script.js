const apiKey = "your_api_key";//replace with openweather API Key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
        suggestWearables(data);
      })
      .catch(err => {
        alert("City not found!");
      });
  }

  
  function displayWeather(data) {
    const weather = document.getElementById("weatherInfo");
    weather.innerHTML = `
      <h3>Weather in ${data.name}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Condition: ${data.weather[0].main}</p>
    `;
  }

  
  function suggestWearables(data) {
    const temp = data.main.temp;
    const humidity = data.main.humidity;
  
    let suggestions = [];
  
    if (temp >= 35) {
      suggestions.push("Wear light-colored, breathable cotton clothes.");
      suggestions.push("Avoid dark and tight clothing.");
    } else if (temp >= 30) {
      suggestions.push("Prefer loose-fitting outfits made of natural fibers.");
    }
  
    if (humidity > 60) {
      suggestions.push("Use moisture-wicking clothes.");
      suggestions.push("Keep a cooling towel or water spray handy.");
    }
  
    suggestions.push("Wear a wide-brim hat or cap to protect from the sun.");
    suggestions.push("Use UV-protection sunglasses and sunscreen.");
  
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "<h3>Suggestions:</h3>" + suggestions.map(item => `<div class="card">${item}</div>`).join("");
  }

  