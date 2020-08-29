import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const WeatherCard = ({ forecastWeather }) => {
    return (
        <Card style={{display: 'flex', flexDirection: 'row' }}>
            <img className='mt-2' src={forecastWeather.current.condition.icon} alt='weather' height='80' width='80' />
            <CardBody>
                <CardTitle className='font-weight-bolder'>{forecastWeather.location.name}</CardTitle>
                <CardText>Temperature: {Math.ceil(forecastWeather.current.temp_c)}&#8451;</CardText>
            </CardBody>
            <CardBody>
                <CardText>Wind Speed: {forecastWeather.current.wind_kph}km/h</CardText>
                <CardText>Humidity: {forecastWeather.current.humidity}%</CardText>
            </CardBody>
            <Link style={{ display: 'flex' }} to={{ pathname: '/details', city: forecastWeather.location.name }}>
              <Button className='mt-10' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} color="link">Forecast for 3 days for {forecastWeather.location.name}</Button>
            </Link>
        </Card>
    )
}
