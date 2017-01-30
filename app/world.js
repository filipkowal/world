var world = angular.module('world', []);

world.factory("getCountries", ['$http',function($http){
    var obj = {};

    obj.fetchCountries = function(){
        return $http.get('https://restcountries.eu/rest/v1/all');
    };

    return obj;
}]);

world.controller('WorldCtrl', function WorldCtrl($scope, getCountries){
    getCountries.fetchCountries().success(function(response){
        //  COUNTRIES
        $scope.countries = response;

        // Add .checked property and delete not important properties to countries
        $scope.countries = $scope.countries.map(function(country) {
        country = {name: country.name, continent: country.region,
            capital: country.capital, checked: false};
        return country;
        });

        // CONTINENTS
        $scope.continents = [];
        $scope.countries.forEach(function(country){
            if($scope.continents.indexOf(country.continent)<0 && country.continent!==""){
                $scope.continents.push(country.continent);
            }
        });
        // add .checked property
        $scope.continents = $scope.continents.map(function (continent) {
            continent = {name: continent, checked: false};
            return continent;
        });
    });
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