function attachEvents() {
    const baseUrl = 'https://judgetests.firebaseio.com';
    $('#submit').click(loadForecast);

    function request(endpoint) {
        return $.ajax({
            url: baseUrl + endpoint
        })
    }

    function loadForecast() {
        request('/locations.json')
            .then(displayLocations)
            .catch(handleError)
    }

    // AJAX GET all locations
    function displayLocations(data) {
        let inputLocation = $('#location').val();
        let code = data
            .filter(loc => loc.name === inputLocation)
            .map(loc => loc.code)[0];

        if (!code) {
            handleError(); // displays error if no such code exists
        }

        let todayForecastPromise = request(`/forecast/today/${code}.json `);
        let upcomingForecastPromise = request(`/forecast/upcoming/${code}.json `);

        Promise.all([todayForecastPromise, upcomingForecastPromise])
            .then(displayAllForecastInfo)
            .catch(handleError);
    }

    function displayAllForecastInfo([todayWeather, upcomingWeather]) {
        let weatherSymbols = {
            'Sunny': '&#x2600',
            'Partly sunny': '&#x26C5',
            'Overcast': '&#x2601',
            'Rain': '&#x2614',
        };

        let forecast = $('#forecast');
        forecast.show();

        displayToCurrent(todayWeather, weatherSymbols);
        displayToUpcoming(upcomingWeather, weatherSymbols);
    }

    function displayToCurrent(todayWeather, weatherSymbols) {
        let current = $('#current');
        current.empty();
        current.append($('<div class="label">Current conditions</div>'))
            .append($(`<span class="condition symbol">${weatherSymbols[todayWeather.forecast.condition]}</span>`))
            .append($('<span class="condition">')
                .append($(`<span class="forecast-data">${todayWeather.name}</span>`))
                .append($(`<span class="forecast-data">${todayWeather.forecast.low}&#176;/${todayWeather.forecast.high}&#176;</span>`))
                .append($(`<span class="forecast-data">${todayWeather.forecast.condition}</span>`)));
    }

    function displayToUpcoming(upcomingWeather, weatherSymbols) {
        let upcoming = $('#upcoming');
        upcoming.empty();
        upcoming.append($('<div class="label">Three-day forecast</div>'));
        let data = upcomingWeather.forecast;

        for (let info of data) {
            upcoming
                .append($('<span class="upcoming">')
                    .append($(`<span class="symbol">${weatherSymbols[info.condition]}</span>`))
                    .append($(`<span class="forecast-data">${info.low}&#176;/${info.high}&#176;</span>`))
                    .append($(`<span class="forecast-data">${info.condition}</span>`)));
        }
    }


    function handleError() {
        $('#forecast').show().text('Error')
    }

} 