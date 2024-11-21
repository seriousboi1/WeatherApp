const apiKey = "5c26eb49551b4346aa0135828241411";

function fetchWeather(city) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const location = data.location.name;
            const country = data.location.country;
            const city = data.location.name;
            const temperature = Math.round(data.current.temp_c);
            const condition = data.current.condition.text;
            const time = data.location.localtime;
            const humidity = data.current.humidity;  
            const wind_speed = data.current.wind_kph;
            const wind_direction = data.current.wind_dir;
            const wind = `${wind_speed}Kmph towards ${wind_direction}`
            const uv = data.current.uv;
            const feels_like = data.current.feelslike_c;

            const state_input = document.getElementById('state_input');
            state_input.value = country;

            const city_title = document.getElementById('city_title');
            const state_title = document.getElementById('state_title');
            city_title.textContent = city;
            state_title.textContent = country;

            const temperature_title = document.getElementById('temperature');
            temperature_title.textContent = `${temperature}°C`;
            const humidity_title = document.getElementById('humidity');
            humidity_title.textContent = `Humidity: ${humidity}%`;
            const wind_title = document.getElementById('wind');
            wind_title.textContent = wind;
            const uv_title = document.getElementById('uv_index');
            uv_title.textContent = `UV Index is currently at ${uv}`;
            const feels_like_title = document.getElementById('feels_like');
            feels_like_title.textContent = `Feels like ${Math.round(feels_like)}°C`;
            const condition_title = document.getElementById('condition');
            condition_title.textContent = condition;
            
            console.log(`City: ${location}`);
            console.log(`Country: ${country}`);
            console.log(`Temperature: ${temperature}°C`);
            console.log(`Condition: ${condition}`);
            console.log(`Time: ${time}`);
            console.log(`Wind: ${wind}`);
            console.log(`UV: ${uv}`);

            const hour = parseInt(time.split(' ')[1].split(':')[0]);
            console.log(hour);
            const isTimeNight = (hour >= 19 || hour < 5);
            console.log(isTimeNight);
            const isTimeDay = (hour >= 8 && hour <= 16);
            const isTimeSunrise = (hour >= 6 && hour <= 7)
            const isTimeSunset = (hour >= 17 && hour <= 18)
            console.log(`Yes or No: ${isTimeNight}`);

            if (isTimeNight && !(condition == "Light rain" || condition == "Moderate rain" || condition == "Heavy rain" || condition == "Heavy rain shower")) {
                const bgFade = document.getElementById('bg_fade');
                const head = document.querySelector('head');
                const body = document.querySelector('body');
                head.innerHTML = `
                    <link rel="stylesheet" href="night.css">
                    <link rel="stylesheet" href="main.css">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
                `;
                const script = document.createElement('script');
                script.src = 'types/night.js';
                script.async = true;

                script.onload = () => {
                    console.log('night.js loaded successfully.');
                    PresentNight();
                };

                script.onerror = () => {
                    console.error('Failed to load night.js.');
                };

                document.body.appendChild(script);

                bgFade.innerHTML = `
                    <div id="moon">
                        <div id="shadowing"></div>
                    </div>
                    <img class="cloud front-cloud" id="cloud1" src="../images/night_cloud.png">
                    <img class="cloud front-cloud" id="cloud2" src="../images/night_cloud.png">
                    <img class="cloud front-cloud" id="cloud3" src="../images/night_cloud.png">
                    <img class="cloud front-cloud" id="cloud4" src="../images/night_cloud.png">
                    <img class="cloud front-cloud" id="cloud5" src="../images/night_cloud.png">
                    <img class="cloud front-cloud" id="cloud6" src="../images/night_cloud.png">
                    <img class="cloud front-cloud" id="cloud7" src="../images/night_cloud.png">
                    <img class="cloud back-cloud" id="cloud8" src="../images/night_cloud.png">
                    <img class="cloud back-cloud" id="cloud9" src="../images/night_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud10" src="../images/night_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud11" src="../images/night_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud12" src="../images/night_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud13" src="../images/night_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud14" src="../images/night_cloud.png">
                    <div class="stars" style="top: 5vh; left: 2vw;"></div>
                    <div class="stars" style="top: 15vh; left: 8vw;"></div>
                    <div class="stars" style="top: 20vh; left: 13vw;"></div>
                    <div class="stars" style="top: 25vh; left: 3vw;"></div>
                    <div class="stars" style="top: 30vh; left: 18vw;"></div>
                    <div class="stars" style="top: 35vh; left: 12vw;"></div>
                    <div class="stars" style="top: 40vh; left: 7vw;"></div>
                    <div class="stars" style="top: 45vh; left: 20vw;"></div>
                    <div class="stars" style="top: 50vh; left: 5vw;"></div>
                    <div class="stars" style="top: 55vh; left: 10vw;"></div>
                `;

                setTimeout(() => {
                    PresentNight();
                }, 0);
            }

            if (isTimeDay && !(condition == "Light rain" || condition == "Moderate rain" || condition == "Heavy rain" || condition == "Heavy rain shower")) {
                const bgFade = document.getElementById('bg_fade');
                const head = document.querySelector('head');
                const body = document.querySelector('body');
                head.innerHTML = `
                    <link rel="stylesheet" href="day.css">
                    <link rel="stylesheet" href="main.css">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
                `;
                const script = document.createElement('script');
                script.src = 'types/day.js';
                script.async = true;

                script.onload = () => {
                    console.log('day.js loaded successfully.');
                    PresentDay();
                };

                script.onerror = () => {
                    console.error('Failed to load day.js.');
                };

                document.body.appendChild(script);

                bgFade.innerHTML = `
                    <div id="sun"></div>
                    <img class="cloud front-cloud" id="cloud1" src="../images/day_cloud.png">
                    <img class="cloud front-cloud" id="cloud2" src="../images/day_cloud.png">
                    <img class="cloud front-cloud" id="cloud3" src="../images/day_cloud.png">
                    <img class="cloud front-cloud" id="cloud4" src="../images/day_cloud.png">
                    <img class="cloud front-cloud" id="cloud5" src="../images/day_cloud.png">
                    <img class="cloud front-cloud" id="cloud6" src="../images/day_cloud.png">
                    <img class="cloud front-cloud" id="cloud7" src="../images/day_cloud.png">
                    <img class="cloud back-cloud" id="cloud8" src="../images/day_cloud.png">
                    <img class="cloud back-cloud" id="cloud9" src="../images/day_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud10" src="../images/day_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud11" src="../images/day_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud12" src="../images/day_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud13" src="../images/day_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud14" src="../images/day_cloud.png">
                `;

                setTimeout(() => {
                    PresentDay();
                }, 0);
            }

            if (isTimeSunrise && !(condition == "Light rain" || condition == "Moderate rain" || condition == "Heavy rain" || condition == "Heavy rain shower")) {
                const bgFade = document.getElementById('bg_fade');
                const head = document.querySelector('head');
                const body = document.querySelector('body');
                head.innerHTML = `
                    <link rel="stylesheet" href="sunrise.css">
                    <link rel="stylesheet" href="main.css">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
                `;
                const script = document.createElement('script');
                script.src = 'types/sunset.js';
                script.async = true;

                script.onload = () => {
                    console.log('sunset.js loaded successfully.');
                    PresentSunset();
                };

                script.onerror = () => {
                    console.error('Failed to load sunset.js.');
                };

                document.body.appendChild(script);

                bgFade.innerHTML = `
                    <div id="sun"></div>
                    <img class="cloud front-cloud" id="cloud1" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud2" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud3" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud4" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud5" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud6" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud7" src="../images/sunrise_cloud.png">
                    <img class="cloud back-cloud" id="cloud8" src="../images/sunrise_cloud.png">
                    <img class="cloud back-cloud" id="cloud9" src="../images/sunrise_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud10" src="../images/sunrise_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud11" src="../images/sunrise_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud12" src="../images/sunrise_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud13" src="../images/sunrise_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud14" src="../images/sunrise_cloud.png">
                `;

                setTimeout(() => {
                    PresentSunrise();
                }, 0);
            }

            if (isTimeSunset && !(condition == "Light rain" || condition == "Moderate rain" || condition == "Heavy rain" || condition == "Heavy rain shower")) {
                const bgFade = document.getElementById('bg_fade');
                const head = document.querySelector('head');
                const body = document.querySelector('body');
                head.innerHTML = `
                    <link rel="stylesheet" href="sunset.css">
                    <link rel="stylesheet" href="main.css">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
                `;
                const script = document.createElement('script');
                script.src = 'types/sunset.js';
                script.async = true;

                script.onload = () => {
                    console.log('sunset.js loaded successfully.');
                    PresentSunset();
                };

                script.onerror = () => {
                    console.error('Failed to load sunset.js.');
                };

                document.body.appendChild(script);

                bgFade.innerHTML = `
                    <div id="sun"></div>
                    <img class="cloud front-cloud" id="cloud1" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud2" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud3" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud4" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud5" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud6" src="../images/sunrise_cloud.png">
                    <img class="cloud front-cloud" id="cloud7" src="../images/sunrise_cloud.png">
                    <img class="cloud back-cloud" id="cloud8" src="../images/sunrise_cloud.png">
                    <img class="cloud back-cloud" id="cloud9" src="../images/sunrise_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud10" src="../images/sunrise_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud11" src="../images/sunrise_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud12" src="../images/sunrise_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud13" src="../images/sunrise_cloud.png">
                    <img class="cloud2 back-cloud" id="cloud14" src="../images/sunrise_cloud.png">
                `;

                setTimeout(() => {
                    PresentSunrise();
                }, 0);
            }

            if (condition == "Light rain" || condition == "Moderate rain") {
                const bgFade = document.getElementById('bg_fade');
                const head = document.querySelector('head');
                const body = document.querySelector('body');
                head.innerHTML = `
                    <link rel="stylesheet" href="rain.css">
                    <link rel="stylesheet" href="main.css">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
                `
                const script = document.createElement('script');
                script.src = 'types/rain.js';
                script.async = true;

                script.onload = () => {
                    console.log('rain.js loaded successfully.');
                    PresentRain();
                };

                script.onerror = () => {
                    console.error('Failed to load rain.js.');
                };

                document.body.appendChild(script);

                bgFade.innerHTML = `
                    <img id="cloud1" class="clouds" src="images/day_cloud.png">
                    <img id="cloud2" class="clouds" src="images/day_cloud.png">
                    <img id="cloud3" class="clouds" src="images/day_cloud.png">
                    <div id="rain-container"></div>
                `
            }

            function updateCompass(windDirection) {
                const directionToDegrees = {
                    N: 0,
                    NNE: 22.5,
                    NE: 45,
                    ENE: 67.5,
                    E: 90,
                    ESE: 112.5,
                    SE: 135,
                    SSE: 157.5,
                    S: 180,
                    SSW: 202.5,
                    SW: 225,
                    WSW: 247.5,
                    W: 270,
                    WNW: 292.5,
                    NW: 315,
                    NNW: 337.5,
                };
                
                const arrow = document.getElementById('arrow');
                const degrees = directionToDegrees[windDirection];
                if (degrees !== undefined) {
                    arrow.style.transform = `translateY(-50%) rotate(${degrees}deg)`;
                    console.log(`Wind direction: ${windDirection}, Degrees: ${degrees}`);
                } else {
                    console.error('Invalid wind direction:', windDirection);
                }

                setTimeout(() => {
                    PresentRain();
                }, 0);
            }

            if (condition == "Heavy rain" || condition == "Heavy rain shower") {
                const bgFade = document.getElementById('bg_fade');
                const head = document.querySelector('head');
                const body = document.querySelector('body');
                head.innerHTML = `
                    <link rel="stylesheet" href="rain.css">
                    <link rel="stylesheet" href="main.css">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
                `
                const script = document.createElement('script');
                script.src = 'types/rain.js';
                script.async = true;

                script.onload = () => {
                    console.log('rain.js loaded successfully.');
                    PresentRain();
                };

                script.onerror = () => {
                    console.error('Failed to load rain.js.');
                };

                bgFade.innerHTML = `
                    <img id="cloud1" class="clouds" src="images/day_cloud.png">
                    <img id="cloud2" class="clouds" src="images/day_cloud.png">
                    <img id="cloud3" class="clouds" src="images/day_cloud.png">
                    <div id="rain-container"></div>
                `
            }

            function updateCompass(windDirection) {
                const directionToDegrees = {
                    N: 0,
                    NNE: 22.5,
                    NE: 45,
                    ENE: 67.5,
                    E: 90,
                    ESE: 112.5,
                    SE: 135,
                    SSE: 157.5,
                    S: 180,
                    SSW: 202.5,
                    SW: 225,
                    WSW: 247.5,
                    W: 270,
                    WNW: 292.5,
                    NW: 315,
                    NNW: 337.5,
                };
                
                const arrow = document.getElementById('arrow');
                const degrees = directionToDegrees[windDirection];
                if (degrees !== undefined) {
                    arrow.style.transform = `translateY(-50%) rotate(${degrees}deg)`;
                    console.log(`Wind direction: ${windDirection}, Degrees: ${degrees}`);
                } else {
                    console.error('Invalid wind direction:', windDirection);
                }

                setTimeout(() => {
                }, 0);
            }
            
            updateCompass(wind_direction);
        })
        .catch(error => console.error('Error:', error));
    }    

    const countries = [
        'Israel', 'United States of America'
    ];

    const citiesByCountry = {
        Israel: [
            'Aba Hillel', 'Abu Ghosh', 'Acre', 'Adam', 'Adi', 'Afek', 'Afula',
            'Ahituv', 'Ajami', 'Akko', 'Alfei Menashe', 'Amirim', 'Arad',
            'Arava', 'Arraba', 'Ashdod', 'Ashkelon', 'Atlit', 'Avivim', 'Azor',
            'Baka-Jatt', 'Baqa al-Gharbiyye', 'Bar Yohai', 'Bat Hefer',
            'Bat Yam', 'Beersheba', 'Beit Dagan', 'Beit Jala', 'Beit Shean',
            'Beit Shemesh', 'Binyamina', 'Bnei Brak', 'Bnei Yehuda', 'Buqei\'a',
            'Caesarea', 'Carmiel', 'Dabburiya', 'Dalit el-Carmel', 'Dimona',
            'Efrat', 'Eilat', 'Ein Hod', 'Ein Karem', 'Elad', 'Elyakhin',
            'Even Yehuda', 'Ganei Tikva', 'Givatayim', 'Givat Shmuel',
            'Giv\'at Zeev', 'Hadera', 'Haifa', 'Hatzor HaGlilit', 'Herzliya',
            'Hod HaSharon', 'Holon', 'Ibillin', 'Iksal', 'Jaffa',
            'Jaljulia', 'Jerusalem', 'Jisr az-Zarqa', 'Julis', 'Kafr Bara',
            'Kafr Kassim', 'Kafr Manda', 'Kafr Qara', 'Karmiel', 'Kfar Saba',
            'Kfar Shmaryahu', 'Kiryat Ata', 'Kiryat Bialik', 'Kiryat Gat',
            'Kiryat Malakhi', 'Kiryat Motzkin', 'Kiryat Ono', 'Kiryat Shmona',
            'Lod', 'Ma\'alot-Tarshiha', 'Maale Adumim', 'Majdal Shams',
            'Metula', 'Migdal HaEmek', 'Modiin', 'Modiin Illit', 'Nahariya',
            'Nazareth', 'Nazareth Illit', 'Netanya', 'Nesher', 'Ness Ziona',
            'Ofakim', 'Or Akiva', 'Or Yehuda', 'Petah Tikva', 'Qiryat Shemona',
            'Ra\'anana', 'Ramat Gan', 'Ramat HaSharon', 'Ramla', 'Rehovot',
            'Rishon Lezion', 'Rosh HaAyin', 'Safed', 'Sderot', 'Shoham',
            'Tayibe', 'Tel Aviv', 'Tiberias', 'Tirat Carmel', 'Umm al-Fahm',
            'Yavne', 'Yehud', 'Yokneam', 'Zefat', 'Zichron Yaakov'
        ],
        'United States of America': [
            'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
            'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
            'Austin', 'Jacksonville', 'San Francisco', 'Indianapolis',
            'Columbus', 'Fort Worth', 'Charlotte', 'Memphis', 'Boston',
            'Baltimore', 'Detroit', 'El Paso', 'Seattle', 'Denver', 'Washington',
            'Milwaukee', 'Portland', 'Oklahoma City', 'Nashville',
            'Louisville', 'Albuquerque', 'Tucson', 'Long Beach', 'Kansas City',
            'St. Louis', 'New Orleans', 'Cleveland', 'Sacramento', 'Miami',
            'Long Island'
        ]
    };

    function filterStateList(input, list, data) {
        const query = input.value.toLowerCase();
        const filteredData = data.filter(item => item.toLowerCase().includes(query));
    
        list.innerHTML = '';
    
        if (filteredData.length > 0) {
            list.style.display = 'block';
            filteredData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li);
    
                li.addEventListener('click', () => {
                    input.value = item;
                    list.innerHTML = '';
                    list.style.display = 'none';
    
                    console.log(`Selected State: ${item}`);
    
                    populateCityList(item);
                });
            });
        } else {
            list.style.display = 'none';
        }
    }
    
    function filterList(input, list, data) {
        const query = input.value.toLowerCase();
        const filteredData = data.filter(item => item.toLowerCase().includes(query));
    
        list.innerHTML = '';
    
        if (filteredData.length > 0) {
            list.style.display = 'block';
            filteredData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li);
    
                li.addEventListener('click', () => {
                    input.value = item;
                    list.innerHTML = '';
                    list.style.display = 'none';
    
                    console.log(`Selected City: ${item}`);
    
                    const selectedCityElement = document.getElementById('selected_city_output');
                    if (selectedCityElement) {
                        selectedCityElement.textContent = `You selected: ${item}`;
                    }
    
                    fetchWeather(item);
                });
            });
        } else {
            list.style.display = 'none';
        }
    }
    
    function populateCityList(state) {
        const cityInput = document.getElementById('city_input');
        const cityList = document.getElementById('city_list');
        
        if (citiesByCountry[state]) {
            cityInput.disabled = false;
            cityInput.value = '';
            cityList.innerHTML = '';
            cityList.style.display = 'none';
        
            cityInput.addEventListener('input', () =>
                filterList(cityInput, cityList, citiesByCountry[state])
            );
        } else {
            cityInput.disabled = true;
        }
    }
    
    const stateInput = document.getElementById('state_input');
    const stateList = document.getElementById('state_list');
    
    stateInput.addEventListener('input', () => filterStateList(stateInput, stateList, countries));
