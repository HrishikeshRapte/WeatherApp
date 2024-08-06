const apiKey = "6294cc2e434db76dd29834ec1ea63783";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherVdo = document.querySelector(".weatherVdo");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".main").innerHTML = data.weather[0].main;
    document.querySelector(".temp_max").innerHTML = data.main.temp_max;
    document.querySelector(".speed").innerHTML = data.wind.speed;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".visibility").innerHTML = data.visibility;
    document.querySelector(".timezone").innerHTML = data.timezone;
    document.querySelector(".feels_like").innerHTML = data.main.feels_like;

    if (data.weather[0].main == "Clouds") {
        weatherVdo.src = "screen_drops.mp4";
    }
    else if (data.weather[0].main == "Clear") {
        weatherVdo.src = "sunnyDay.mp4";
    }
    else if (data.weather[0].main == "Rain") {
        weatherVdo.src = "screen_drops.mp4";
    }
    else if (data.weather[0].main == "Mist") {
        weatherVdo.src = "MistDay.mp4";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})



//Ahmadnagar
const apiKey1 = "6294cc2e434db76dd29834ec1ea63783";
const apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Ahmadnagar";

async function checkWeather1(){
    const response = await fetch(apiUrl1 + `&appid=${apiKey1}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".amdngr_temp").innerHTML = data.main.temp;
    document.querySelector(".amdngr_tempMax").innerHTML = data.main.temp_max;
    document.querySelector(".amdngr_wind").innerHTML = data.wind.speed;
    document.querySelector(".amdngr_cw").innerHTML = data.weather[0].description;
    document.querySelector(".amdngr_humidity").innerHTML = data.main.humidity;
    document.querySelector(".amdngr_feels").innerHTML = data.main.feels_like;

}

checkWeather1();




//Lonavala
const apiKey2 = "6294cc2e434db76dd29834ec1ea63783";
const apiUrl2 = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lonavala";

async function checkWeather2(){
    const response = await fetch(apiUrl2 + `&appid=${apiKey2}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".lonv_temp").innerHTML = data.main.temp;
    document.querySelector(".lonv_tempMax").innerHTML = data.main.temp_max;
    document.querySelector(".lonv_wind").innerHTML = data.wind.speed;
    document.querySelector(".lonv_cw").innerHTML = data.weather[0].description;
    document.querySelector(".lonv_humidity").innerHTML = data.main.humidity;
    document.querySelector(".lonv_feels").innerHTML = data.main.feels_like;

}

checkWeather2();


//Mumbai
const apiKey3 = "6294cc2e434db76dd29834ec1ea63783";
const apiUrl3 = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Mumbai";

async function checkWeather3(){
    const response = await fetch(apiUrl3 + `&appid=${apiKey3}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".mum_temp").innerHTML = data.main.temp;
    document.querySelector(".mum_tempMax").innerHTML = data.main.temp_max;
    document.querySelector(".mum_wind").innerHTML = data.wind.speed;
    document.querySelector(".mum_cw").innerHTML = data.weather[0].description;
    document.querySelector(".mum_humidity").innerHTML = data.main.humidity;
    document.querySelector(".mum_feels").innerHTML = data.main.feels_like;

}

checkWeather3();



//Nashik
const apiKey4 = "6294cc2e434db76dd29834ec1ea63783";
const apiUrl4 = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Nashik";

async function checkWeather4(){
    const response = await fetch(apiUrl4 + `&appid=${apiKey4}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".nsk_temp").innerHTML = data.main.temp;
    document.querySelector(".nsk_tempMax").innerHTML = data.main.temp_max;
    document.querySelector(".nsk_wind").innerHTML = data.wind.speed;
    document.querySelector(".nsk_cw").innerHTML = data.weather[0].description;
    document.querySelector(".nsk_humidity").innerHTML = data.main.humidity;
    document.querySelector(".nsk_feels").innerHTML = data.main.feels_like;

}

checkWeather4();




//Satara
const apiKey5 = "6294cc2e434db76dd29834ec1ea63783";
const apiUrl5 = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Satara";

async function checkWeather5(){
    const response = await fetch(apiUrl5 + `&appid=${apiKey5}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".sat_temp").innerHTML = data.main.temp;
    document.querySelector(".sat_tempMax").innerHTML = data.main.temp_max;
    document.querySelector(".sat_wind").innerHTML = data.wind.speed;
    document.querySelector(".sat_cw").innerHTML = data.weather[0].description;
    document.querySelector(".sat_humidity").innerHTML = data.main.humidity;
    document.querySelector(".sat_feels").innerHTML = data.main.feels_like;

}

checkWeather5();





//Dapoli
const apiKey6 = "6294cc2e434db76dd29834ec1ea63783";
const apiUrl6 = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Dapoli";

async function checkWeather6(){
    const response = await fetch(apiUrl6 + `&appid=${apiKey6}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".dap_temp").innerHTML = data.main.temp;
    document.querySelector(".dap_tempMax").innerHTML = data.main.temp_max;
    document.querySelector(".dap_wind").innerHTML = data.wind.speed;
    document.querySelector(".dap_cw").innerHTML = data.weather[0].description;
    document.querySelector(".dap_humidity").innerHTML = data.main.humidity;
    document.querySelector(".dap_feels").innerHTML = data.main.feels_like;

}

checkWeather6();















// const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Pune&format=json&u=f';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'e802a2193amsh35610e63550c827p1aa4b5jsn49b077aff9a3',
//         'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
//     }
// };

// fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Pune&format=json&u=f', options)
//     .then(response => response.json())
//     .then((response) => {

//         console.log(response)

    
      

//     })
//     .catch(err => console.error(err));







    // visibility.innerHTML = response.visibility
    // temp.innerHTML = response.temp
    // temp_max.innerHTML = response.temp_max
    // humidity.innerHTML = response.humidity
    // speed.innerHTML = response.speed
    // description.innerHTML = response.description
    // feels_like.innerHTML = response.feels_like
    // timezone.innerHTML = response.timezone

// // // try {
// // // 	const response = await fetch(url, options);
// // // 	const result = await response.text();
// // // 	console.log(result);
// // // } catch (error) {
// // // 	console.error(error);
// // // }