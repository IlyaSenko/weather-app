import React from 'react';
import { Card, CardText, CardBody,  CardTitle } from 'reactstrap';

export const ForecastWeather = ({ forecast, someDaysForecast }) => {
    return (
        <Card className="mt-5" style={{display: 'flex', flexDirection: 'row'}}>
            <img className='mt-5 ml-5' src={forecast.day.condition.icon} alt='weather' height='80' width='80' />
            <CardBody className='ml-5'>
                <CardTitle className='font-weight-bolder'>{someDaysForecast.location.name}</CardTitle>
                <CardText>Max. Temperature: <span className='font-weight-bolder'>{ Math.ceil(forecast.day.maxtemp_c) }&#8451;</span></CardText>
                <CardText>Min. Temperature: <span className='font-weight-bolder'>{ Math.ceil(forecast.day.mintemp_c) }&#8451;</span></CardText>
                <CardText style={{ textDecoration: 'underline' }}>{forecast.day.daily_will_it_rain === 0 ? 'No rain today' : 'Rainy today'}</CardText>
            </CardBody>
        </Card>
    )
}
