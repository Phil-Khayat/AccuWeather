import React from "react";
import { Stack, Autocomplete, TextField } from '@mui/material'
import { useState } from "react";
import axios from "axios";

// var city =  ["Paris", "Tel Aviv", "New York", "Ra'anana", "Marseille", "Los Angeles", "Miami", "Lyon", "Courbevoie", "Neuilly Sur Seine"]

// var cities = [
// 	{	"Version":1,
// 		"Key":"102144",
// 		"Type":"City",
// 		"Rank":11,
// 		"LocalizedName":"Chongqing",
// 		"Country":{
// 					"ID":"CN",
// 					"LocalizedName":"Chine"
// 				},
// 		"AdministrativeArea":{
// 				"ID":"CQ",
// 				"LocalizedName":"Chongqing"
// 				}
// 	},
// 	{	"Version":1,
// 		"Key":"102255",
// 		"Type":"City",
// 		"Rank":11,
// 		"LocalizedName":"Canton",
// 		"Country":{
// 					"ID":"CN",
// 					"LocalizedName":"Chine"
// 					},
// 		"AdministrativeArea":{
// 				"ID":"GD",
// 				"LocalizedName":"Guangdong"}
// 	},{"Version":1,"Key":"105567","Type":"City","Rank":11,"LocalizedName":"Changsha","Country":{"ID":"CN","LocalizedName":"Chine"},"AdministrativeArea":{"ID":"HN","LocalizedName":"Hunan"}},{"Version":1,"Key":"105915","Type":"City","Rank":11,"LocalizedName":"Changchun","Country":{"ID":"CN","LocalizedName":"Chine"},"AdministrativeArea":{"ID":"JL","LocalizedName":"Jilin"}},{"Version":1,"Key":"106774","Type":"City","Rank":11,"LocalizedName":"Chengdu","Country":{"ID":"CN","LocalizedName":"Chine"},"AdministrativeArea":{"ID":"SC","LocalizedName":"Sichuan"}},{"Version":1,"Key":"206671","Type":"City","Rank":11,"LocalizedName":"Chennai","Country":{"ID":"IN","LocalizedName":"Inde"},"AdministrativeArea":{"ID":"TN","LocalizedName":"Tamil Nadu"}},{"Version":1,"Key":"206690","Type":"City","Rank":11,"LocalizedName":"Calcutta","Country":{"ID":"IN","LocalizedName":"Inde"},"AdministrativeArea":{"ID":"WB","LocalizedName":"Bengale-occidental"}},{"Version":1,"Key":"243353","Type":"City","Rank":11,"LocalizedName":"Casablanca","Country":{"ID":"MA","LocalizedName":"Maroc"},"AdministrativeArea":{"ID":"06","LocalizedName":"Casablanca-Settat"}},{"Version":1,"Key":"56911","Type":"City","Rank":13,"LocalizedName":"Chuzhou","Country":{"ID":"CN","LocalizedName":"Chine"},"AdministrativeArea":{"ID":"AH","LocalizedName":"Anhui"}},{"Version":1,"Key":"58670","Type":"City","Rank":13,"LocalizedName":"Cangzhou","Country":{"ID":"CN","LocalizedName":"Chine"},"AdministrativeArea":{"ID":"HE","LocalizedName":"Hebei"}}]


const API_ACCUWEATHER_KEY = "eZiYPUHGeyU6mTwAAXEGG1eBi1PJ62rA"
const API_ACCUWEATHER_LANG = "language=fr-fr"
const API_ACCUWEATHER_GETLOCATION = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + API_ACCUWEATHER_KEY;

function SearchCityTextField() {

    const [searchIput, setSearchIput] = useState('');
    const [city, setCity] = useState([]);
    const [citiesAPI, setCitiesAPI] = useState([]);

    function searchChange (event) {
        setCity([]);
        setSearchIput(event.target.value);
                
        async function getCities ()  {
            await axios.get(API_ACCUWEATHER_GETLOCATION + "&q=" + event.target.value + "&" + API_ACCUWEATHER_LANG)
            .then(function (response) {
                setCitiesAPI(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

            let newCity = [];
            citiesAPI.map( (x) => newCity.push(x.LocalizedName) );
            setCity(newCity);

        };
        getCities();
    };

    return(
        <div>
           <Stack spacing={2} width='250px'>
                <Autocomplete options={city} renderInput={ (params) => <TextField {...params} label='Recherchez une ville' value={searchIput} onChange={searchChange} size="small" />} />
            </Stack>
        </div>
    );

}

export default SearchCityTextField;