import React from 'react'

const WeatherCard = (props) => {
    // example:
    // 20200323195924
    // // http://api.openweathermap.org/data/2.5/weather?lat=35&lon=-139.345643&appid=64f5f100c1b5dddfe0a28db2cc50e320

    // {
    //     "coord": {
    //       "lon": -139.35,
    //       "lat": 35
    //     },
    //     "weather": [
    //       {
    //         "id": 500,
    //         "main": "Rain",
    //         "description": "light rain",
    //         "icon": "10d"
    //       }
    //     ],
    //     "base": "stations",
    //     "main": {
    //       "temp": 286.55,
    //       "feels_like": 280.51,
    //       "temp_min": 286.55,
    //       "temp_max": 286.55,
    //       "pressure": 1029,
    //       "humidity": 69,
    //       "sea_level": 1029,
    //       "grnd_level": 1029
    //     },
    //     "wind": {
    //       "speed": 7.91,
    //       "deg": 335
    //     },
    //     "rain": {
    //       "3h": 0.13
    //     },
    //     "clouds": {
    //       "all": 73
    //     },
    //     "dt": 1585018764,
    //     "sys": {
    //       "sunrise": 1584976549,
    //       "sunset": 1585020693
    //     },
    //     "timezone": -32400,
    //     "id": 0,
    //     "name": "",
    //     "cod": 200
    //   }
    const weatherObj = props.weatherObj
    // This should show human readable data from the json above
    return (
        <div>

        </div>
    )
}

export default WeatherCard