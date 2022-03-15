const myToken = "8c0c1858e3c1c83087abaea46e1892fd";

const search = document.getElementById("search");
search.addEventListener("click", addItem)


function addItem() {
    const textInput = document.getElementById("cityChoosed");
    const items = document.getElementById("items");

    const userEnterdCity = textInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userEnterdCity}&appid=${myToken}&units=metric`)
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            const resultCity = json.name;
            const resultCountry = json.sys.country;
            const resultTemp = Math.floor(json.main.temp) + " °C";
            const resultIcon = json.weather[0].icon;
            const resultType = (json.weather[0].description).toUpperCase();

            const newElemnt = document.createElement("div");
            const newElemntCity = document.createElement("p");
            const newElemntTemp = document.createElement("p");
            const newElemntImg = document.createElement("img");
            const newElemntType = document.createElement("p");

            newElemntCity.innerHTML = `${resultCity} <span class="countrySet">${resultCountry}</span>`;
            newElemnt.setAttribute("class", "item")
            newElemntCity.setAttribute("class", "citySet");

            newElemntTemp.innerHTML = resultTemp;
            newElemntTemp.setAttribute("class", "tempSet");


            newElemntImg.setAttribute("class", "imgSet");
            newElemntImg.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${resultIcon}.svg`;

            newElemntType.setAttribute("class", "statusSet");
            newElemntType.innerHTML = resultType;

            items.appendChild(newElemnt);
            newElemnt.appendChild(newElemntCity);
            newElemnt.appendChild(newElemntTemp);
            newElemnt.appendChild(newElemntImg);
            newElemnt.appendChild(newElemntType);

        });

}


