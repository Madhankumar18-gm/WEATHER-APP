const apiKey = '721bd53debd41674d63aa355e6dd8681'; // Your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById('city-input').value;
  const resultDiv = document.getElementById('weather-result');

  if (!city) {
    resultDiv.innerHTML = '<p>Please enter a city name.</p>';
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();

    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].main}</p>
      <p><strong>Description:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

    resultDiv.innerHTML = weatherHTML;

  } catch (error) {
    resultDiv.innerHTML = `<p>${error.message}</p>`;
  }
}
