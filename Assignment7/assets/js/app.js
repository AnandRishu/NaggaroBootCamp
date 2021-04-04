// Target input text by user
const inputCity = document.querySelector(".input-city");
const showData = document.querySelector(".show-data");

const apiKey = "95f7a4ec6f2783d68b49373568d35f3c";

// Add event listener for inputCity
inputCity.addEventListener("keypress", function ( e ) {
    if (e.key === 'Enter') {
        // retrieve the data from input box
        const cityName = inputCity.value;
        if (cityName !== "") {
            // Fetch the data through API
            // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&cnt=16&units=metric
            const queryString = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&cnt=16&units=metric`;
            fetch(queryString).then(fetchedData => {
                return fetchedData.json();
            }).then(fetchedJson => {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var today  = new Date();
                // show data 
                showData.innerHTML = `
                <ul>
                    <!-- City Name and Country Name -->
                    <li class="city-country-name"> <span>${fetchedJson.name}</span>, <span>${fetchedJson.sys.country}</span></li>
                    <!-- Date -->
                    <li class="current-date">${today.toLocaleDateString("en-US", options)}</li>
                    <!-- Temperature -->
                    <li class="current-temp"><span>${fetchedJson.main.temp}°c</span></li>
                    <!-- Type of weather (Haze, sunny etc) -->
                    <li class="weather-type">${fetchedJson.weather[0].description}</span></li>
                    <!-- Max/Min temperature -->
                    <li class="min-max-temp"><span>${fetchedJson.main.temp_min}°c</span> / <span>${fetchedJson.main.temp_max}°c</span></li>
                </ul>
                `
            }).catch(err => console.log(err));
            console.log(cityName);
        }
        
        // Clear the search box
        inputCity.value = "";
    }
})
