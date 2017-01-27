var world = angular.module('world', []);

world.controller('WorldCtrl', function WorldCtrl($scope){
    $scope.continents = [
            {name: "Africa", shortName: "AF", checked: false},
            {name: "Antarctica", shortName: "AN", checked: false},
            {name: "Asia", shortName: "AS", checked: false},
            {name: "Europe", shortName: "EU", checked: false},
            {name: "North America", shortName: "NA", checked: false},
            {name: "Oceania", shortName: "OC", checked: false},
            {name: "South America", shortName: "SA", checked: false}
        ];
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchCountry   = '';     // set the default search/filter term
    $scope.countries = [
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
    },
    {
        "name": "Afghanistan",
			"continent": "AS",
            "capital": "Kabul",
            "checked":  false
    },
    {
        "name": "Antigua and Barbuda",
			"continent": "NA",
            "capital": "Saint John's",
			"checked":  false
    },
    {
        "name": "Anguilla",
			"continent": "NA",
            "capital": "The Valley",
			"checked":  false
    },
    {
        "name": "Albania",
			"continent": "EU",
            "capital": "Tirana",
			"checked":  false
    },
    {
        "name": "Armenia",
			"continent": "AS",
            "capital": "Yerevan",
			"checked":  false
    },
    {
        "name": "Angola",
			"continent": "AF",
            "capital": "Luanda",
			"checked":  false
    },
    {
        "name": "Antarctica",
			"continent": "AN",
            "capital": "",
			"checked":  false
    },
    {
        "name": "Argentina",
			"continent": "SA",
            "capital": "Buenos Aires",
			"checked":  false
    },
    {
        "name": "American Samoa",
			"continent": "OC",
            "capital": "Pago Pago",
			"checked":  false
    },
    {
        "name": "Austria",
			"continent": "EU",
            "capital": "Vienna",
			"checked":  false
    },
    {
        "name": "Australia",
			"continent": "OC",
            "capital": "Canberra",
			"checked":  false
    },
    {
        "name": "Aruba",
			"continent": "NA",
            "capital": "Oranjestad",
			"checked":  false
    },
    {
        "name": "Åland",
			"continent": "EU",
            "capital": "Mariehamn",
			"checked":  false
    },
    {
        "name": "Azerbaijan",
			"continent": "AS",
            "capital": "Baku",
			"checked":  false
    },
    {
        "name": "Bosnia and Herzegovina",
			"continent": "EU",
            "capital": "Sarajevo",
			"checked":  false
    },
    {
        "name": "Barbados",
			"continent": "NA",
            "capital": "Bridgetown",
			"checked":  false
    },
    {
        "name": "Bangladesh",
			"continent": "AS",
            "capital": "Dhaka",
			"checked":  false
    },
    {
        "name": "Belgium",
			"continent": "EU",
            "capital": "Brussels",
			"checked":  false
    },
    {
        "name": "Burkina Faso",
			"continent": "AF",
            "capital": "Ouagadougou",
			"checked":  false
    },
    {
        "name": "Bulgaria",
			"continent": "EU",
            "capital": "Sofia",
			"checked":  false
    },
    {
        "name": "Bahrain",
			"continent": "AS",
            "capital": "Manama",
			"checked":  false
    },
    {
        "name": "Burundi",
			"continent": "AF",
            "capital": "Bujumbura",
			"checked":  false
    },
    {
        "name": "Benin",
			"continent": "AF",
            "capital": "Porto-Novo",
			"checked":  false
    },
    {
        "name": "Saint Barthélemy",
			"continent": "NA",
            "capital": "Gustavia",
			"checked":  false
    },
    {
        "name": "Bermuda",
			"continent": "NA",
            "capital": "Hamilton",
			"checked":  false
    },
    {
        "name": "Brunei",
			"continent": "AS",
            "capital": "Bandar Seri Begawan",
			"checked":  false
    },
    {
        "name": "Bolivia",
			"continent": "SA",
            "capital": "Sucre",
			"checked":  false
    },
    {
        "name": "Bonaire",
			"continent": "NA",
            "capital": "Kralendijk",
			"checked":  false
    },
    {
        "name": "Brazil",
			"continent": "SA",
            "capital": "Brasília",
			"checked":  false
    },
    {
        "name": "Bahamas",
			"continent": "NA",
            "capital": "Nassau",
			"checked":  false
    },
    {
        "name": "Bhutan",
			"continent": "AS",
            "capital": "Thimphu",
			"checked":  false
    },
    {
        "name": "Bouvet Island",
			"continent": "AN",
            "capital": "",
			"checked":  false
    },
    {
        "name": "Botswana",
			"continent": "AF",
            "capital": "Gaborone",
			"checked":  false
    },
    {
        "name": "Belarus",
			"continent": "EU",
            "capital": "Minsk",
			"checked":  false
    },
    {
        "name": "Belize",
			"continent": "NA",
            "capital": "Belmopan",
			"checked":  false
    },
    {
        "name": "Canada",
			"continent": "NA",
            "capital": "Ottawa",
			"checked":  false
    },
    {
        "name": "Cocos [Keeling] Islands",
			"continent": "AS",
            "capital": "West Island",
			"checked":  false
    },
    {
        "name": "Democratic Republic of the Congo",
			"continent": "AF",
            "capital": "Kinshasa",
			"checked":  false
    },
    {
        "name": "Central African Republic",
			"continent": "AF",
            "capital": "Bangui",
			"checked":  false
    },
    {
        "name": "Republic of the Congo",
			"continent": "AF",
            "capital": "Brazzaville",
			"checked":  false
    },
    {
        "name": "Switzerland",
			"continent": "EU",
            "capital": "Bern",
			"checked":  false
    },
    {
        "name": "Ivory Coast",
			"continent": "AF",
            "capital": "Yamoussoukro",
			"checked":  false
    },
    {
        "name": "Cook Islands",
			"continent": "OC",
            "capital": "Avarua",
			"checked":  false
    },
    {
        "name": "Chile",
			"continent": "SA",
            "capital": "Santiago",
			"checked":  false
    },
    {
        "name": "Cameroon",
			"continent": "AF",
            "capital": "Yaoundé",
			"checked":  false
    },
    {
        "name": "China",
			"continent": "AS",
            "capital": "Beijing",
			"checked":  false
    },
    {
        "name": "Colombia",
			"continent": "SA",
            "capital": "Bogotá",
			"checked":  false
    },
    {
        "name": "Costa Rica",
			"continent": "NA",
            "capital": "San José",
			"checked":  false
    },
    {
        "name": "Cuba",
			"continent": "NA",
            "capital": "Havana",
			"checked":  false
    },
    {
        "name": "Cape Verde",
			"continent": "AF",
            "capital": "Praia",
			"checked":  false
    },
    {
        "name": "Curacao",
			"continent": "NA",
            "capital": "Willemstad",
			"checked":  false
    },
    {
        "name": "Christmas Island",
			"continent": "AS",
            "capital": "Flying Fish Cove",
			"checked":  false
    },
    {
        "name": "Cyprus",
			"continent": "EU",
            "capital": "Nicosia",
			"checked":  false
    },
    {
        "name": "Czech Republic",
			"continent": "EU",
            "capital": "Prague",
			"checked":  false
    },
    {
        "name": "Germany",
			"continent": "EU",
            "capital": "Berlin",
			"checked":  false
    },
    {
        "name": "Djibouti",
			"continent": "AF",
            "capital": "Djibouti",
			"checked":  false
    },
    {
        "name": "Denmark",
			"continent": "EU",
            "capital": "Copenhagen",
			"checked":  false
    },
    {
        "name": "Dominica",
			"continent": "NA",
            "capital": "Roseau",
			"checked":  false
    },
    {
        "name": "Dominican Republic",
			"continent": "NA",
            "capital": "Santo Domingo",
			"checked":  false
    },
    {
        "name": "Algeria",
			"continent": "AF",
            "capital": "Algiers",
			"checked":  false
    },
    {
        "name": "Ecuador",
			"continent": "SA",
            "capital": "Quito",
			"checked":  false
    },
    {
        "name": "Estonia",
			"continent": "EU",
            "capital": "Tallinn",
			"checked":  false
    },
    {
        "name": "Egypt",
			"continent": "AF",
            "capital": "Cairo",
			"checked":  false
    },
    {
        "name": "Western Sahara",
			"continent": "AF",
            "capital": "El Aaiún",
			"checked":  false
    },
    {
        "name": "Eritrea",
			"continent": "AF",
            "capital": "Asmara",
			"checked":  false
    },
    {
        "name": "Spain",
			"continent": "EU",
            "capital": "Madrid",
			"checked":  false
    },
    {
        "name": "Ethiopia",
			"continent": "AF",
            "capital": "Addis Ababa",
			"checked":  false
    },
    {
        "name": "Finland",
			"continent": "EU",
            "capital": "Helsinki",
			"checked":  false
    },
    {
        "name": "Fiji",
			"continent": "OC",
            "capital": "Suva",
			"checked":  false
    },
    {
        "name": "Falkland Islands",
			"continent": "SA",
            "capital": "Stanley",
			"checked":  false
    },
    {
        "name": "Micronesia",
			"continent": "OC",
            "capital": "Palikir",
			"checked":  false
    },
    {
        "name": "Faroe Islands",
			"continent": "EU",
            "capital": "Tórshavn",
			"checked":  false
    },
    {
        "name": "France",
			"continent": "EU",
            "capital": "Paris",
			"checked":  false
    },
    {
        "name": "Gabon",
			"continent": "AF",
            "capital": "Libreville",
			"checked":  false
    },
    {
        "name": "United Kingdom",
			"continent": "EU",
            "capital": "London",
			"checked":  false
    },
    {
        "name": "Grenada",
			"continent": "NA",
            "capital": "St. George's",
			"checked":  false
    },
    {
        "name": "Georgia",
			"continent": "AS",
            "capital": "Tbilisi",
			"checked":  false
    },
    {
        "name": "French Guiana",
			"continent": "SA",
            "capital": "Cayenne",
			"checked":  false
    },
    {
        "name": "Guernsey",
			"continent": "EU",
            "capital": "St. Peter Port",
			"checked":  false
    },
    {
        "name": "Ghana",
			"continent": "AF",
            "capital": "Accra",
			"checked":  false
    },
    {
        "name": "Gibraltar",
			"continent": "EU",
            "capital": "Gibraltar",
			"checked":  false
    },
    {
        "name": "Greenland",
			"continent": "NA",
            "capital": "Nuuk",
			"checked":  false
    },
    {
        "name": "Gambia",
			"continent": "AF",
            "capital": "Banjul",
			"checked":  false
    },
    {
        "name": "Guinea",
			"continent": "AF",
            "capital": "Conakry",
			"checked":  false
    },
    {
        "name": "Guadeloupe",
			"continent": "NA",
            "capital": "Basse-Terre",
			"checked":  false
    },
    {
        "name": "Equatorial Guinea",
			"continent": "AF",
            "capital": "Malabo",
			"checked":  false
    },
    {
        "name": "Greece",
			"continent": "EU",
            "capital": "Athens",
			"checked":  false
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
			"continent": "AN",
            "capital": "King Edward Point",
			"checked":  false
    },
    {
        "name": "Guatemala",
			"continent": "NA",
            "capital": "Guatemala City",
			"checked":  false
    },
    {
        "name": "Guam",
			"continent": "OC",
            "capital": "Hagåtña",
			"checked":  false
    },
    {
        "name": "Guinea-Bissau",
			"continent": "AF",
            "capital": "Bissau",
			"checked":  false
    },
    {
        "name": "Guyana",
			"continent": "SA",
            "capital": "Georgetown",
			"checked":  false
    },
    {
        "name": "Hong Kong",
			"continent": "AS",
            "capital": "City of Victoria",
			"checked":  false
    },
    {
        "name": "Heard Island and McDonald Islands",
			"continent": "AN",
            "capital": "",
			"checked":  false
    },
    {
        "name": "Honduras",
			"continent": "NA",
            "capital": "Tegucigalpa",
			"checked":  false
    },
    {
        "name": "Croatia",
			"continent": "EU",
            "capital": "Zagreb",
			"checked":  false
    },
    {
        "name": "Haiti",
			"continent": "NA",
            "capital": "Port-au-Prince",
			"checked":  false
    },
    {
        "name": "Hungary",
			"continent": "EU",
            "capital": "Budapest",
			"checked":  false
    },
    {
        "name": "Indonesia",
			"continent": "AS",
            "capital": "Jakarta",
			"checked":  false
    },
    {
        "name": "Ireland",
			"continent": "EU",
            "capital": "Dublin",
			"checked":  false
    },
    {
        "name": "Israel",
			"continent": "AS",
            "capital": "Jerusalem",
			"checked":  false
    },
    {
        "name": "Isle of Man",
			"continent": "EU",
            "capital": "Douglas",
			"checked":  false
    },
    {
        "name": "India",
			"continent": "AS",
            "capital": "New Delhi",
			"checked":  false
    },
    {
        "name": "British Indian Ocean Territory",
			"continent": "AS",
            "capital": "Diego Garcia",
			"checked":  false
    },
    {
        "name": "Iraq",
			"continent": "AS",
            "capital": "Baghdad",
			"checked":  false
    },
    {
        "name": "Iran",
			"continent": "AS",
            "capital": "Tehran",
			"checked":  false
    },
    {
        "name": "Iceland",
			"continent": "EU",
            "capital": "Reykjavik",
			"checked":  false
    },
    {
        "name": "Italy",
			"continent": "EU",
            "capital": "Rome",
			"checked":  false
    },
    {
        "name": "Jersey",
			"continent": "EU",
            "capital": "Saint Helier",
			"checked":  false
    },
    {
        "name": "Jamaica",
			"continent": "NA",
            "capital": "Kingston",
			"checked":  false
    },
    {
        "name": "Jordan",
			"continent": "AS",
            "capital": "Amman",
			"checked":  false
    },
    {
        "name": "Japan",
			"continent": "AS",
            "capital": "Tokyo",
			"checked":  false
    },
    {
        "name": "Kenya",
			"continent": "AF",
            "capital": "Nairobi",
			"checked":  false
    },
    {
        "name": "Kyrgyzstan",
			"continent": "AS",
            "capital": "Bishkek",
			"checked":  false
    },
    {
        "name": "Cambodia",
			"continent": "AS",
            "capital": "Phnom Penh",
			"checked":  false
    },
    {
        "name": "Kiribati",
			"continent": "OC",
            "capital": "South Tarawa",
			"checked":  false
    },
    {
        "name": "Comoros",
			"continent": "AF",
            "capital": "Moroni",
			"checked":  false
    },
    {
        "name": "Saint Kitts and Nevis",
			"continent": "NA",
            "capital": "Basseterre",
			"checked":  false
    },
    {
        "name": "North Korea",
			"continent": "AS",
            "capital": "Pyongyang",
			"checked":  false
    },
    {
        "name": "South Korea",
			"continent": "AS",
            "capital": "Seoul",
			"checked":  false
    },
    {
        "name": "Kuwait",
			"continent": "AS",
            "capital": "Kuwait City",
			"checked":  false
    },
    {
        "name": "Cayman Islands",
			"continent": "NA",
            "capital": "George Town",
			"checked":  false
    },
    {
        "name": "Kazakhstan",
			"continent": "AS",
            "capital": "Astana",
			"checked":  false
    },
    {
        "name": "Laos",
			"continent": "AS",
            "capital": "Vientiane",
			"checked":  false
    },
    {
        "name": "Lebanon",
			"continent": "AS",
            "capital": "Beirut",
			"checked":  false
    },
    {
        "name": "Saint Lucia",
			"continent": "NA",
            "capital": "Castries",
			"checked":  false
    },
    {
        "name": "Liechtenstein",
			"continent": "EU",
            "capital": "Vaduz",
			"checked":  false
    },
    {
        "name": "Sri Lanka",
			"continent": "AS",
            "capital": "Colombo",
			"checked":  false
    },
    {
        "name": "Liberia",
			"continent": "AF",
            "capital": "Monrovia",
			"checked":  false
    },
    {
        "name": "Lesotho",
			"continent": "AF",
            "capital": "Maseru",
			"checked":  false
    },
    {
        "name": "Lithuania",
			"continent": "EU",
            "capital": "Vilnius",
			"checked":  false
    },
    {
        "name": "Luxembourg",
			"continent": "EU",
            "capital": "Luxembourg",
			"checked":  false
    },
    {
        "name": "Latvia",
			"continent": "EU",
            "capital": "Riga",
			"checked":  false
    },
    {
        "name": "Libya",
			"continent": "AF",
            "capital": "Tripoli",
			"checked":  false
    },
    {
        "name": "Morocco",
			"continent": "AF",
            "capital": "Rabat",
			"checked":  false
    },
    {
        "name": "Monaco",
			"continent": "EU",
            "capital": "Monaco",
			"checked":  false
    },
    {
        "name": "Moldova",
			"continent": "EU",
            "capital": "Chișinău",
			"checked":  false
    },
    {
        "name": "Montenegro",
			"continent": "EU",
            "capital": "Podgorica",
			"checked":  false
    },
    {
        "name": "Saint Martin",
			"continent": "NA",
            "capital": "Marigot",
			"checked":  false
    },
    {
        "name": "Madagascar",
			"continent": "AF",
            "capital": "Antananarivo",
			"checked":  false
    },
    {
        "name": "Marshall Islands",
			"continent": "OC",
            "capital": "Majuro",
			"checked":  false
    },
    {
        "name": "Macedonia",
			"continent": "EU",
            "capital": "Skopje",
			"checked":  false
    },
    {
        "name": "Mali",
			"continent": "AF",
            "capital": "Bamako",
			"checked":  false
    },
    {
        "name": "Myanmar [Burma]",
			"continent": "AS",
            "capital": "Naypyidaw",
			"checked":  false
    },
    {
        "name": "Mongolia",
			"continent": "AS",
            "capital": "Ulan Bator",
			"checked":  false
    },
    {
        "name": "Macao",
			"continent": "AS",
            "capital": "",
			"checked":  false
    },
    {
        "name": "Northern Mariana Islands",
			"continent": "OC",
            "capital": "Saipan",
			"checked":  false
    },
    {
        "name": "Martinique",
			"continent": "NA",
            "capital": "Fort-de-France",
			"checked":  false
    },
    {
        "name": "Mauritania",
			"continent": "AF",
            "capital": "Nouakchott",
			"checked":  false
    },
    {
        "name": "Montserrat",
			"continent": "NA",
            "capital": "Plymouth",
			"checked":  false
    },
    {
        "name": "Malta",
			"continent": "EU",
            "capital": "Valletta",
			"checked":  false
    },
    {
        "name": "Mauritius",
			"continent": "AF",
            "capital": "Port Louis",
			"checked":  false
    },
    {
        "name": "Maldives",
			"continent": "AS",
            "capital": "Malé",
			"checked":  false
    },
    {
        "name": "Malawi",
			"continent": "AF",
            "capital": "Lilongwe",
			"checked":  false
    },
    {
        "name": "Mexico",
			"continent": "NA",
            "capital": "Mexico City",
			"checked":  false
    },
    {
        "name": "Malaysia",
			"continent": "AS",
            "capital": "Kuala Lumpur",
			"checked":  false
    },
    {
        "name": "Mozambique",
			"continent": "AF",
            "capital": "Maputo",
			"checked":  false
    },
    {
        "name": "Namibia",
			"continent": "AF",
            "capital": "Windhoek",
			"checked":  false
    },
    {
        "name": "New Caledonia",
			"continent": "OC",
            "capital": "Nouméa",
			"checked":  false
    },
    {
        "name": "Niger",
			"continent": "AF",
            "capital": "Niamey",
			"checked":  false
    },
    {
        "name": "Norfolk Island",
			"continent": "OC",
            "capital": "Kingston",
			"checked":  false
    },
    {
        "name": "Nigeria",
			"continent": "AF",
            "capital": "Abuja",
			"checked":  false
    },
    {
        "name": "Nicaragua",
			"continent": "NA",
            "capital": "Managua",
			"checked":  false
    },
    {
        "name": "Netherlands",
			"continent": "EU",
            "capital": "Amsterdam",
			"checked":  false
    },
    {
        "name": "Norway",
			"continent": "EU",
            "capital": "Oslo",
			"checked":  false
    },
    {
        "name": "Nepal",
			"continent": "AS",
            "capital": "Kathmandu",
			"checked":  false
    },
    {
        "name": "Nauru",
			"continent": "OC",
            "capital": "Yaren",
			"checked":  false
    },
    {
        "name": "Niue",
			"continent": "OC",
            "capital": "Alofi",
			"checked":  false
    },
    {
        "name": "New Zealand",
			"continent": "OC",
            "capital": "Wellington",
			"checked":  false
    },
    {
        "name": "Oman",
			"continent": "AS",
            "capital": "Muscat",
			"checked":  false
    },
    {
        "name": "Panama",
			"continent": "NA",
            "capital": "Panama City",
			"checked":  false
    },
    {
        "name": "Peru",
			"continent": "SA",
            "capital": "Lima",
			"checked":  false
    },
    {
        "name": "French Polynesia",
			"continent": "OC",
            "capital": "Papeetē",
			"checked":  false
    },
    {
        "name": "Papua New Guinea",
			"continent": "OC",
            "capital": "Port Moresby",
			"checked":  false
    },
    {
        "name": "Philippines",
			"continent": "AS",
            "capital": "Manila",
			"checked":  false
    },
    {
        "name": "Pakistan",
			"continent": "AS",
            "capital": "Islamabad",
			"checked":  false
    },
    {
        "name": "Poland",
			"continent": "EU",
            "capital": "Warsaw",
			"checked":  false
    },
    {
        "name": "Saint Pierre and Miquelon",
			"continent": "NA",
            "capital": "Saint-Pierre",
			"checked":  false
    },
    {
        "name": "Pitcairn Islands",
			"continent": "OC",
            "capital": "Adamstown",
			"checked":  false
    },
    {
        "name": "Puerto Rico",
			"continent": "NA",
            "capital": "San Juan",
			"checked":  false
    },
    {
        "name": "Palestine",
			"continent": "AS",
            "capital": "Ramallah",
			"checked":  false
    },
    {
        "name": "Portugal",
			"continent": "EU",
            "capital": "Lisbon",
			"checked":  false
    },
    {
        "name": "Palau",
			"continent": "OC",
            "capital": "Ngerulmud",
			"checked":  false
    },
    {
        "name": "Paraguay",
			"continent": "SA",
            "capital": "Asunción",
			"checked":  false
    },
    {
        "name": "Qatar",
			"continent": "AS",
            "capital": "Doha",
			"checked":  false
    },
    {
        "name": "Réunion",
			"continent": "AF",
            "capital": "Saint-Denis",
			"checked":  false
    },
    {
        "name": "Romania",
			"continent": "EU",
            "capital": "Bucharest",
			"checked":  false
    },
    {
        "name": "Serbia",
			"continent": "EU",
            "capital": "Belgrade",
			"checked":  false
    },
    {
        "name": "Russia",
			"continent": "EU",
            "capital": "Moscow",
			"checked":  false
    },
    {
        "name": "Rwanda",
			"continent": "AF",
            "capital": "Kigali",
			"checked":  false
    },
    {
        "name": "Saudi Arabia",
			"continent": "AS",
            "capital": "Riyadh",
			"checked":  false
    },
    {
        "name": "Solomon Islands",
			"continent": "OC",
            "capital": "Honiara",
			"checked":  false
    },
    {
        "name": "Seychelles",
			"continent": "AF",
            "capital": "Victoria",
			"checked":  false
    },
    {
        "name": "Sudan",
			"continent": "AF",
            "capital": "Khartoum",
			"checked":  false
    },
    {
        "name": "Sweden",
			"continent": "EU",
            "capital": "Stockholm",
			"checked":  false
    },
    {
        "name": "Singapore",
			"continent": "AS",
            "capital": "Singapore",
			"checked":  false
    },
    {
        "name": "Saint Helena",
			"continent": "AF",
            "capital": "Jamestown",
			"checked":  false
    },
    {
        "name": "Slovenia",
			"continent": "EU",
            "capital": "Ljubljana",
			"checked":  false
    },
    {
        "name": "Svalbard and Jan Mayen",
			"continent": "EU",
            "capital": "Longyearbyen",
			"checked":  false
    },
    {
        "name": "Slovakia",
			"continent": "EU",
            "capital": "Bratislava",
			"checked":  false
    },
    {
        "name": "Sierra Leone",
			"continent": "AF",
            "capital": "Freetown",
			"checked":  false
    },
    {
        "name": "San Marino",
			"continent": "EU",
            "capital": "City of San Marino",
			"checked":  false
    },
    {
        "name": "Senegal",
			"continent": "AF",
            "capital": "Dakar",
			"checked":  false
    },
    {
        "name": "Somalia",
			"continent": "AF",
            "capital": "Mogadishu",
			"checked":  false
    },
    {
        "name": "Suriname",
			"continent": "SA",
            "capital": "Paramaribo",
			"checked":  false
    },
    {
        "name": "South Sudan",
			"continent": "AF",
            "capital": "Juba",
			"checked":  false
    },
    {
        "name": "São Tomé and Príncipe",
			"continent": "AF",
            "capital": "São Tomé",
			"checked":  false
    },
    {
        "name": "El Salvador",
			"continent": "NA",
            "capital": "San Salvador",
			"checked":  false
    },
    {
        "name": "Sint Maarten",
			"continent": "NA",
            "capital": "Philipsburg",
			"checked":  false
    },
    {
        "name": "Syria",
			"continent": "AS",
            "capital": "Damascus",
			"checked":  false
    },
    {
        "name": "Swaziland",
			"continent": "AF",
            "capital": "Lobamba",
			"checked":  false
    },
    {
        "name": "Turks and Caicos Islands",
			"continent": "NA",
            "capital": "Cockburn Town",
			"checked":  false
    },
    {
        "name": "Chad",
			"continent": "AF",
            "capital": "N'Djamena",
			"checked":  false
    },
    {
        "name": "French Southern Territories",
			"continent": "AN",
            "capital": "Port-aux-Français",
			"checked":  false
    },
    {
        "name": "Togo",
			"continent": "AF",
            "capital": "Lomé",
			"checked":  false
    },
    {
        "name": "Thailand",
			"continent": "AS",
            "capital": "Bangkok",
			"checked":  false
    },
    {
        "name": "Tajikistan",
			"continent": "AS",
            "capital": "Dushanbe",
			"checked":  false
    },
    {
        "name": "Tokelau",
			"continent": "OC",
            "capital": "Fakaofo",
			"checked":  false
    },
    {
        "name": "East Timor",
			"continent": "OC",
            "capital": "Dili",
			"checked":  false
    },
    {
        "name": "Turkmenistan",
			"continent": "AS",
            "capital": "Ashgabat",
			"checked":  false
    },
    {
        "name": "Tunisia",
			"continent": "AF",
            "capital": "Tunis",
			"checked":  false
    },
    {
        "name": "Tonga",
			"continent": "OC",
            "capital": "Nuku'alofa",
			"checked":  false
    },
    {
        "name": "Turkey",
			"continent": "AS",
            "capital": "Ankara",
			"checked":  false
    },
    {
        "name": "Trinidad and Tobago",
			"continent": "NA",
            "capital": "Port of Spain",
			"checked":  false
    },
    {
        "name": "Tuvalu",
			"continent": "OC",
            "capital": "Funafuti",
			"checked":  false
    },
    {
        "name": "Taiwan",
			"continent": "AS",
            "capital": "Taipei",
			"checked":  false
    },
    {
        "name": "Tanzania",
			"continent": "AF",
            "capital": "Dodoma",
			"checked":  false
    },
    {
        "name": "Ukraine",
			"continent": "EU",
            "capital": "Kiev",
			"checked":  false
    },
    {
        "name": "Uganda",
			"continent": "AF",
            "capital": "Kampala",
			"checked":  false
    },
    {
        "name": "U.S. Minor Outlying Islands",
			"continent": "OC",
            "capital": "",
			"checked":  false
    },
    {
        "name": "United States",
			"continent": "NA",
            "capital": "Washington D.C.",
			"checked":  false
    },
    {
        "name": "Uruguay",
			"continent": "SA",
            "capital": "Montevideo",
			"checked":  false
    },
    {
        "name": "Uzbekistan",
			"continent": "AS",
            "capital": "Tashkent",
			"checked":  false
    },
    {
        "name": "Vatican City",
			"continent": "EU",
            "capital": "Vatican City",
			"checked":  false
    },
    {
        "name": "Saint Vincent and the Grenadines",
			"continent": "NA",
            "capital": "Kingstown",
			"checked":  false
    },
    {
        "name": "Venezuela",
			"continent": "SA",
            "capital": "Caracas",
			"checked":  false
    },
    {
        "name": "British Virgin Islands",
			"continent": "NA",
            "capital": "Road Town",
			"checked":  false
    },
    {
        "name": "U.S. Virgin Islands",
			"continent": "NA",
            "capital": "Charlotte Amalie",
			"checked":  false
    },
    {
        "name": "Vietnam",
			"continent": "AS",
            "capital": "Hanoi",
			"checked":  false
    },
    {
        "name": "Vanuatu",
			"continent": "OC",
            "capital": "Port Vila",
			"checked":  false
    },
    {
        "name": "Wallis and Futuna",
			"continent": "OC",
            "capital": "Mata-Utu",
			"checked":  false
    },
    {
        "name": "Samoa",
			"continent": "OC",
            "capital": "Apia",
			"checked":  false
    },
    {
        "name": "Kosovo",
			"continent": "EU",
            "capital": "Pristina",
			"checked":  false
    },
    {
        "name": "Yemen",
			"continent": "AS",
            "capital": "Sana'a",
			"checked":  false
    },
    {
        "name": "Mayotte",
			"continent": "AF",
            "capital": "Mamoudzou",
			"checked":  false
    },
    {
        "name": "South Africa",
			"continent": "AF",
            "capital": "Pretoria",
			"checked":  false
    },
    {
        "name": "Zambia",
			"continent": "AF",
            "capital": "Lusaka",
			"checked":  false
    },
    {
        "name": "Zimbabwe",
			"continent": "AF",
            "capital": "Harare",
			"checked":  false
    }];
    $scope.checkCountries = function(continent) {
        var countriesOfContinent = $scope.countries.filter(function(country){
                return country.continent===continent.shortName;
            }
        );
        if(continent.checked){
            // Check countriesOfContinent
            for(var i=0; i<countriesOfContinent.length; i+=1){
                countriesOfContinent[i].checked = true;
            }
            $scope.countries = countriesOfContinent;
        } else {
            for(var i=0; i<countriesOfContinent.length; i+=1){
                countriesOfContinent[i].checked = false;
            }
            $scope.countries = countriesOfContinent;
        }
    };
    $scope.checkContinent = function() {
        //Returns true if all the countries of continent are checked
        function allCountriesChecked(continent) {
            var countriesOfContinent = $scope.countries.filter(function(country){
                    return country.continent===continent.shortName;
                }
            );
            var checkedCountries = countriesOfContinent.filter(function(country){
                return country.checked;
            });
            if(checkedCountries.length===countriesOfContinent.length){
                return true
            } else return false
        }

        //for continent in continents
        $scope.continents.forEach(function(continent) {
            if(allCountriesChecked(continent)){
                continent.checked = true;
            } else continent.checked = false;
        })
    }
});