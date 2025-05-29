import SearchBox from "./searchBox"
import WeatherInfo from "./weeatherInfo"
import "./weatherApp.css"
import { useState } from "react"

export default function WheatherApp()
{
    const [weather, setweather] = useState({
        city:"anand",
des: "clear sky",
temp: 38.35,
temp_max: 38.35,
temp_min: 38.35,
    })
    
    function handleUpdate(result)
    {
        setweather(result);
    }
    return (
        <div>
            <SearchBox update={handleUpdate} />
            <WeatherInfo info={weather} />
        </div> 
   )
}