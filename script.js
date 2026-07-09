const weatherData = {
  hyderabad: {
    temp: "34°",
    condition: "Sunny skies ☀️ — ideal weather for a rooftop biryani.",
    humidity: "55%",
    wind: "12 km/h",
    icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png"
  },
  delhi: {
    temp: "40°",
    condition: "Scorching heat 🔥 — carry water and stick to the shade.",
    humidity: "38%",
    wind: "10 km/h",
    icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png"
  },
  mumbai: {
    temp: "30°",
    condition: "Monsoon showers 🌧️ — keep that umbrella within reach.",
    humidity: "82%",
    wind: "20 km/h",
    icon: "https://cdn-icons-png.flaticon.com/512/414/414974.png"
  },
  chennai: {
    temp: "33°",
    condition: "Cloudy skies ☁️ — a mild, humid afternoon ahead.",
    humidity: "65%",
    wind: "15 km/h",
    icon: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
  },
  bengaluru: {
    temp: "27°",
    condition: "Pleasant breeze 🌤️ — perfect café-hopping weather.",
    humidity: "60%",
    wind: "8 km/h",
    icon: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
  }
};

const cityInput = document.getElementById("city");
const errorBox = document.getElementById("errorBox");
const postmark = document.getElementById("postmark");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function todayStamp() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  return `${day} ${month}`;
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.style.display = "block";
  postmark.classList.remove("stamped");
}

function clearError() {
  errorBox.textContent = "";
  errorBox.style.display = "none";
}

function stampPostmark() {
  // restart the stamp animation even on repeat searches
  postmark.classList.remove("stamped");
  void postmark.offsetWidth;
  postmark.classList.add("stamped");
}

function getWeather() {
  const city = cityInput.value.trim().toLowerCase();

  if (!city) {
    showError("Please write a destination before sending.");
    return;
  }

  if (weatherData[city]) {
    clearError();
    const w = weatherData[city];

    document.getElementById("cityName").innerHTML = capitalize(city);
    document.getElementById("dateStamp").innerHTML = todayStamp();
    document.getElementById("temp").innerHTML = w.temp;
    document.getElementById("condition").innerHTML = w.condition;
    document.getElementById("humidity").innerHTML = w.humidity;
    document.getElementById("wind").innerHTML = w.wind;
    document.getElementById("icon").src = w.icon;

    stampPostmark();
  } else {
    showError("Return to sender — unknown destination. Try Hyderabad, Delhi, Mumbai, Chennai, or Bengaluru.");
  }
}

cityInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getWeather();
  }
});
