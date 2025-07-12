const WeatherInput=document.querySelector(".search-input");
const SearchButton=document.querySelector(".search-button");

const WeatherInfo=document.querySelector("#weather-info");

const cityName=document.querySelector("#city-name");
const WeatherLocation=document.querySelector("#weather-location");
const WeatherTemprature=document.querySelector("#weather-temprature");
const WeatherDescription=document.querySelector("#weather-description");
const Sunrise=document.querySelector("#sunrise");
const Sunset=document.querySelector("#sunset");
const Humidity=document.querySelector("#humidity");
const WindSpeed=document.querySelector("#wind-speed");
const Pressure=document.querySelector("#pressure");
const Visibility=document.querySelector("#visibility");
const Cloudiness=document.querySelector("#cloudiness");

WeatherInfo.style.display="none";

const convertUnixTimestampToTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};


SearchButton.addEventListener("click",async ()=>{
    const city= WeatherInput.value.trim();
    if(!city){
        alert("Please Enter a City Name");
        return;
    }
    console.log(city);
    const APIKey="066828f1425519ba1a18462a6aa1ab79";
    try{

        if (data.cod !== 200) {
            alert("City not found, please try again.");
            return;
        }



        const BASE_URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
        const response =await fetch(BASE_URL);
        const data=await response.json();
        // Extracting and Displaying Weather Data Directly
        cityName.innerText=`Weather in ${data.name}`;
        WeatherLocation.innerText=`Location : ${data.name}`;
        WeatherTemprature.innerText=`${data.main.temp}°C`;
        WeatherDescription.innerText=data.weather[0].description.charAt(0).toUpperCase() +
        data.weather[0].description.slice(1);
        Sunrise.innerText=`Sunrise: ${convertUnixTimestampToTime(data.sys.sunrise)}`;
        Sunset.innerText=`Sunset: ${convertUnixTimestampToTime(data.sys.sunset)}`;
        Humidity.innerText=`Humidity: ${data.main.humidity}%`;
        WindSpeed.innerText=`Wind Speed: ${data.wind.speed} m/s`;
        Pressure.innerText=`Pressure: ${data.main.pressure} hPa`;
        Visibility.innerText=`Visibility: ${data.visibility/1000} km`; // Converting to km
        Cloudiness.innerText=`Cloudiness: ${data.clouds.all}%`;

        WeatherInfo.style.display="block";

        //console.log(data);
    }
    catch(error){
        //console.log(error);
        console.error("Error fetching weather data:", error);
        alert("An Error Occured While Fetching the Weather data.Please try Again");
    }
})

/*{
    "coord": {
        "lon": 77.2167,
        "lat": 28.6667
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 31.88,
        "feels_like": 38.88,
        "temp_min": 31.88,
        "temp_max": 31.88,
        "pressure": 999,
        "humidity": 69,
        "sea_level": 999,
        "grnd_level": 973
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.57,
        "deg": 162,
        "gust": 4.45
    },
    "clouds": {
        "all": 87
    },
    "dt": 1751735630,
    "sys": {
        "country": "IN",
        "sunrise": 1751673490,
        "sunset": 1751723571
    },
    "timezone": 19800,
    "id": 1273294,
    "name": "Delhi",
    "cod": 200
} */