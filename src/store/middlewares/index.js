import api from '../../api';
import { setSearchStatus, setForecastWeather, setForecastSomeDays, forecastDaysStatus } from '../actions';

export const fetchWeather = ({ city, days }) => dispatch => {
    api.post({ city, days })
    .then(response => {
        const { status, data } = response;
        dispatch(setSearchStatus({ status }));
        dispatch(setForecastWeather({ forecast: data }));
    })
    .catch(err => {
        console.log(err.response);
        dispatch(setSearchStatus({ status: err.response.status }));
    })
};

export const fetchLongForecast = ({ city, days }) => dispatch => {
    api.post({ city, days })
    .then(response => {
        const { status, data } = response;
        dispatch(forecastDaysStatus({ status }));
        dispatch(setForecastSomeDays({ forecast: data }));
    })
    .catch(err => {
        dispatch(forecastDaysStatus({ status: err.response.status }));
        console.error(err);
    })
}
