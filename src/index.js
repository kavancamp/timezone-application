setInterval(function () {
  //dublin

  let SamoaElement = document.querySelector("#samoa");
  let SamoaDateElement = SamoaElement.querySelector(".date");
  let SamoaTimeElement = SamoaElement.querySelector(".time");
  let SamoaTime = moment().tz("Pacific/Samoa");

  SamoaDateElement.innerHTML = SamoaTime.format("MMMM Do YYYY");
  SamoaTimeElement.innerHTML = SamoaTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  //paris

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  //fiji

  let fijiElement = document.querySelector("#fiji");
  let fijiDateElement = fijiElement.querySelector(".date");
  let fijiTimeElement = fijiElement.querySelector(".time");
  let fijiTime = moment().tz("Pacific/Fiji");

  fijiDateElement.innerHTML = fijiTime.format("MMMM Do YYYY");
  fijiTimeElement.innerHTML = fijiTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

//dropdown

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = ` 
  <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small>
          </div>
        </div>
          <a
          href="/"
          target=""
          class="homepage"
          >Home</a
        >`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
