const weatherData={

hyderabad:{
temp:"34°C",
condition:"Sunny ☀️",
humidity:"55%",
wind:"12 km/h",
icon:"https://cdn-icons-png.flaticon.com/512/869/869869.png"
},

delhi:{
temp:"40°C",
condition:"Hot 🔥",
humidity:"38%",
wind:"10 km/h",
icon:"https://cdn-icons-png.flaticon.com/512/869/869869.png"
},

mumbai:{
temp:"30°C",
condition:"Rainy 🌧️",
humidity:"82%",
wind:"20 km/h",
icon:"https://cdn-icons-png.flaticon.com/512/414/414974.png"
},

chennai:{
temp:"33°C",
condition:"Cloudy ☁️",
humidity:"65%",
wind:"15 km/h",
icon:"https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
},

bengaluru:{
temp:"27°C",
condition:"Pleasant 🌤️",
humidity:"60%",
wind:"8 km/h",
icon:"https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
}

};

function getWeather(){

let city=document.getElementById("city").value.trim().toLowerCase();

if(weatherData[city]){

let w=weatherData[city];

document.getElementById("cityName").innerHTML=city.toUpperCase();

document.getElementById("temp").innerHTML=w.temp;

document.getElementById("condition").innerHTML=w.condition;

document.getElementById("humidity").innerHTML=w.humidity;

document.getElementById("wind").innerHTML=w.wind;

document.getElementById("icon").src=w.icon;

}

else{

alert("City Not Found!\n\nTry:\nHyderabad\nDelhi\nMumbai\nChennai\nBengaluru");

}

}