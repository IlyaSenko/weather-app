import React from 'react';
import { Container, Row, Spinner, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { ErrorModal } from '../../components/ErrorModal';
import { WeatherCard } from '../../components/WeatherCard';
import { Search } from '../../components/Search';
import { useDispatch } from 'react-redux';
import { setCustomForecastWeather } from '../../store/actions';

export const Home = () => {
    const dispatch = useDispatch();
    const cities = useSelector(state => state.searchWeatherReducer.cities);
    const searchStatus = useSelector(state => state.searchWeatherReducer.searchStatus);
    const forecastWeather = useSelector(state => state.searchWeatherReducer.forecastWeather);

    return (
        <Container>
            <Row>
              <Col sm='12' md='12' lg='12'>
                  <Search />
              </Col>

            </Row>
            <Row>
              <Col sm='12' md='12' lg='12'>
                {cities.length > 0 && (
                    <div className='mt-2' style={{display: 'flex', width: '100%'}}>
                        <p>Last searches:</p>
                            { cities.map((city, key) => {
                                return (
                                    <p onClick={() => dispatch(setCustomForecastWeather(city))} className='ml-2' style={{cursor: 'pointer', color: 'blue'}} href="#" key={key}>{city.location.name}</p>
                                )
                            }) }
                    </div>
                )}
              </Col>

            </Row>
             <Row>
                <Col lg='12'>
                    { searchStatus === 200 && forecastWeather ? (
                        <WeatherCard forecastWeather={forecastWeather} />
                    ) : searchStatus === 400 ? (
                        <ErrorModal />
                    ) : searchStatus === 102 ? (
                        <Spinner type="grow" color="warning" size="xl" />
                    ) : (
                        <></>
                    )}
                </Col>
            </Row>
        </Container>
    );
};
