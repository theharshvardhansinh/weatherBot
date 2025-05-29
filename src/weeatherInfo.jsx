import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./weatherInfo.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';

import SunnyIcon from '@mui/icons-material/Sunny';

export default function WeatherInfo({ info }) {
  let init_img = "https://plus.unsplash.com/premium_photo-1669239115468-bf7412c1da94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3"
  return (
    <div className='card'>
      <div>
        <Card sx={{
          minWidth: 400
        }}>
          <CardMedia
            sx={{ height: 200 }}
            image={info.temp > 35 ? "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D" : "https://plus.unsplash.com/premium_photo-1669239115468-bf7412c1da94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3"}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Typography className='city'><h2>{info.city} {info.temp > 35 ?
                <SunnyIcon /> : <AcUnitIcon />}</h2>
              </Typography>



              <Typography>
                <p>Temp={info.temp}</p>

              </Typography>


              <Typography>
                <p>Des={info.des}</p></Typography>

            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}