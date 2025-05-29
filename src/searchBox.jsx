import React,{ useState } from 'react';
import TextField from '@mui/material/TextField';
import "./searchbox.css";
import Button from '@mui/material/Button';

export default function SearchBox({update})
{
    const api_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const api_key="b3e9163b9168d3afda83392af5b4bb6c"
    const [city, setcity] = useState("");
   async function getWheter()
    {
       let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
       let jsonr = await responce.json();
       let info = {
           city: city,
           temp: jsonr.main.temp,
           temp_max: jsonr.main.temp_max,
           temp_min: jsonr.main.temp_min,
           des: jsonr.weather[0].description
       };
       console.log(info);
       return info;
    }
    function handleCity(event)
    {
        setcity(event.target.value);
    }

   async function handleSub(event)
    {
        event.preventDefault();
        console.log(city);
        setcity("");
       let newi = await getWheter();
       update(newi);
    }
    return(
    <div className="search">
        <h3>
            Search for the weather
            </h3> 
            <form action="" onSubmit={handleSub}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city}
                onChange={handleCity}/>  
                <br/>
                <Button variant="contained" type='submit'>Serach</Button>
            </form>
    </div>
    )
}