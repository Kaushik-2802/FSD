async function getWeather(event) {
    event.preventDefault();
    const city = document.getElementById('city').value; 
    const url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7904dc8957973f928efdfc19061e0bb`);
    try {
        const res = await fetch(url);
        const data = await res.json();
        const count = data.sys.country;
        const temp = data.main.temp - 273.15;
        const desc = data.weather[0].description;
        const min_temp = data.main.temp_min - 273.15;
        const wres = document.getElementById('wres');
        wres.innerHTML = `
            <p><strong>Country:</strong> ${count}</p>
            <p><strong>Temperature:</strong> ${temp.toFixed(2)}°C</p>
            <p><strong>Weather:</strong> ${desc}</p>
            <p><strong>Min Temperature:</strong> ${min_temp.toFixed(2)}°C</p>
        `;
    } catch (error) {
        console.error(error);
        const wres = document.getElementById('wres');
        wres.innerHTML = `<p style="color: red;">${error.message}</p>`; 
    }
}
document.getElementById('weatherForm').addEventListener('submit', getWeather);
