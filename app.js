const button = document.querySelector(".search");

const input = document.querySelector(".search-input");



button.addEventListener('click', () => {
    let search = input.value;
    fetch(`https://lobster-app-kps4x.ondigitalocean.app/api/weather/batumi?search=${search}`)
        .then((response) => response.json())
        .then((data) => {
            const content_container = document.createElement("div");
            const content = document.getElementById("content");

            content_container.innerHTML = `
            <div class="weatherDetail"
            <div class = "avatar"> 
            <div class= "text"> 
            <h1 class= "celcius"> ${data.currentTemp}° </h1>
          
          <div class"city">
          <h1 class="cid"> ${data.city}</h1>
          <p class="cids"> ${data.dayLength} - ${data.month}, </p>
          <div>
            <h1 class="cloud"><i class="fa-solid fa-cloud"></i> </h1>
            </div>
            
      
            
           <div class = "details"
           <p> Weather details..</p>

          <div class = "detailsC"
          <h1 style="font-size: 20px;">thunderstorm with light drizzle</h1>
        <div class="temp">
        <p> Temp Max </p>
        <div class = "icon"> ${data.maxTemp}<i class="fa-solid fa-temperature-half" id="max"></i> </div>
         </div>
        <div class="temp">
        <p>Min Temp </p> 
          <div class = "icon"> ${data.minTemp}<i class="fa-solid fa-temperature-half" id="min"></i> </div> </div>
        <div class="temp"> 
        <p>Humidity </p>
        <div class = "icon"> ${data.humidity} <i class="fa-regular fa-droplet-degree"></i></div>
        </div>
    
        <div class="templ">
        <p>Wind </p>
        <div class="icons">
        ${data.windSpeed}km/h <i class="fa-solid fa-wind"></i>
        </div>

          </div>
          <hr>
           </div>
            </div>
            </div>
            `;
            
            content.appendChild(content_container);
        })
        .catch(error => {
            console.error(error);
        });
});
