/**
 * API geo handling.
 * Uses navigator._geolocation
 * If unavailable uses a polyfiller by looking up ip address location 
 * http://geoip.nekudo.com/api/
 */
meetupApp.geo = {
    /** This is a private function that checks whether 
     * to use navigator.geolocation or call the private geo polyfill
     * function
     * */
    _geolocation: function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._showPosition, this._showError);
        } else {
            meetupApp.geo._geoPolyFill();
            console.log("Geolocation is not supported by this browser.");
        }
    },
    /** This is a private function that acts as a polyfill for geolocation
     * it stores the location to local storage to be accessed later when needed
    */
    _geoPolyFill: function () {
        fetch('http://geoip.nekudo.com/api/').then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    localStorage.setItem("location", JSON.stringify(data));
                    console.log(localStorage.getItem("location", data));
                });
            }
        ).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    },
    /** This is a private function that is passed
     * to  navigator.geolocation.getCurrentPosition as the first param
     * */
    _showPosition: function (position) {
            console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
        
            /*var locationLat =position.coords.latitude;
            var locationLong = position.coords.longitude;
            fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + locationLat + "," + locationLong).then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    var addressToFormat = data.results[0].formatted_address;
                    var cleansedAddress = addressToFormat.split(',')[1];
                    console.log(cleansedAddress);
                    localStorage.setItem("location", cleansedAddress);
                    console.log(localStorage.getItem("location", data));
                });
                
            }
         
        ).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
        */
        meetupApp.geo._geoPolyFill();
    },
    /** This is a private function that is passed
     * to  navigator.geolocation.getCurrentPosition as the second param.
     * Deals with errors that can occur from geolocation.
     * In the event of an error the polyfill is used
     * */
    _showError: function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log("permission denied");
                meetupApp.geo._geoPolyFill();
                break;
            case error.POSITION_UNAVAILABLE:
                meetupApp.geo._geoPolyFill();
                break;
            case error.TIMEOUT:
                meetupApp.geo._geoPolyFill();
                break;
            case error.UNKNOWN_ERROR:
                meetupApp.geo._geoPolyFill();
                break;
        }
    },
    /** This is a function that runs the geolocation process
     * Checks if navigator.geolocation is available if not uses a polyfill
     * Handles geolocation errors.
     * Gets users current position and stores into local storage as
     * location
    */
    runGeo: function () {
        if (!navigator.geolocation) {
            console.log("no geo");
            this._geoPolyFill();
        }
        else {
            this._geolocation();
        }
    }
};

meetupApp.geo.runGeo();



