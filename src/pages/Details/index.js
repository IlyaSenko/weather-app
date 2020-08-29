import React, { useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { ForecastWeather } from '../../components/ForecastWeather';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLongForecast } from '../../store/middlewares';
import { useLocation, useHistory } from 'react-router-dom';

export const Details = () => {
    const DAYS = 3;
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { city } = location;
    if (!city) {
        history.push('/');
    }
    const someDaysForecast = useSelector(state => state.searchWeatherReducer.forecastSomeDays);
    const statusForecastDays = useSelector(state => state.searchWeatherReducer.forecastDaysStatus);
    useEffect(() => {
        if (city) {
            dispatch(fetchLongForecast({ city, days: DAYS }));
        }
    }, [city, dispatch]);

    return (
        <Container style={{marginTop: '36px', width: '100%'}}>
            <Row>
              <Col sm='12' md='12' lg='12'>
                { statusForecastDays === 200 && someDaysForecast && someDaysForecast.forecast.forecastday.map((forecast, key) => {
                    return (
                        <Col lg='12' key={key}>
                            <ForecastWeather forecast={forecast} someDaysForecast={someDaysForecast} />
                        </Col>
                    )
                }) }
                { !statusForecastDays && <Spinner /> }
              </Col>
            </Row>
        </Container>
    );
};
