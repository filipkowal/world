var world = angular.module('world', []);

world.factory("getCountries", function($http){
    // var countries = $http.get('https://restcountries.eu/rest/v1/all')
    //     .then(function(response) {
    //         var countriesLong = response.data;
    //         console.log('response:', response);
    //         console.log('response.data:', countriesLong);
    //         return countriesLong;
    //     });
    // countries = countries.data;
    // console.log('countries:', countries);
    // // console.log('countries', countries);
    // var factory = {};
    // factory.countries = function() {return $http.get('https://restcountries.eu/rest/v1/all');}
    // console.log('fac.countries:', factory.countries());

    var factory = {};
    factory.countries = [
        {
            "name": "Andorra",
            "continent": "EU",
            "capital": "Andorra la Vella",
            "checked":  false
        },
        {
            "name": "United Arab Emirates",
            "continent": "AS",
            "capital": "Abu Dhabi",
            "checked":  false
        }
    ];
    // Add .checked property and delete not important properties
    factory.countries = factory.countries.map(function(country) {
        country = {name: country.name, continent: country.continent,
            capital: country.capital, checked: false};
        return country;
    });

    factory.continents = [];
    factory.countries.forEach(function(country){
        if(factory.continents.indexOf(country.continent)<0){
            factory.continents.push(country.continent);
        }
    });
    factory.continents = factory.continents.map(function (continent) {
        continent = {name: continent, checked: false};
        return continent;
    });
    console.log('factory.continents:', factory.continents);
    console.log('factory.countries:', factory.countries);
    return factory;
});

world.controller('WorldCtrl', function WorldCtrl($scope, getCountries){
    $scope.countries = [];
    $scope.continents = [];

    init();
    function init() {
        $scope.countries = getCountries.countries;
        $scope.continents = getCountries.continents;
        console.log('scope.countries', $scope.countries);
        console.log('scope.continents', $scope.continents);
    }
    // $scope.continents = [
    //         {name: "Africa", shortName: "AF", checked: false},
    //         {name: "Antarctica", shortName: "AN", checked: false},
    //         {name: "Asia", shortName: "AS", checked: false},
    //         {name: "Europe", shortName: "EU", checked: false},
    //         {name: "North America", shortName: "NA", checked: false},
    //         {name: "Oceania", shortName: "OC", checked: false},
    //         {name: "South America", shortName: "SA", checked: false}
    //     ];
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchCountry   = '';     // set the default search/filter term
    $scope.checkCountries = function(continent) {
        var countriesOfContinent = $scope.countries.filter(function(country){
                return country.continent===continent.name;
            }
        );
        // Check countriesOfContinent if continent is checked
        countriesOfContinent.forEach(function(country) {country.checked = continent.checked;});
    };
    $scope.checkContinent = function() {
        //Returns true if all the countries of continent are checked
        function allCountriesChecked(continent) {
            var countriesOfContinent = $scope.countries.filter(function(country){
                    return country.continent===continent.name;
                }
            );
            var checkedCountries = countriesOfContinent.filter(function(country){
                return country.checked;
            });
            // ALL COUNTRIES OF CONTINENT CHECKED
            return checkedCountries.length===countriesOfContinent.length;
        }

        //for continent in continents
        $scope.continents.forEach(function(continent) {
            continent.checked = allCountriesChecked(continent);
        })
    }
});