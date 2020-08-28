import * as types from '../types';

export const saveCity = city => {
    return {
        type: types.SAVE_CITY,
        payload: city
    }
};

export const setSearchStatus = status => {
    return {
        type: types.SEARCH_STATUS,
        payload: status
    }
};

export const setForecastWeather = forecast => {
    return {
        type: types.FORECAST_WEATHER,
        payload: forecast
    }
};

export const setCustomForecastWeather = forecast => {
    return {
        type: types.SET_CUSTOM_FORECAST_WEATHER,
        payload: forecast
    }
};

export const setSearchValue = value => {
    return {
        type: types.SEARCH_VALUE,
        payload: value
    }
};

export const setForecastSomeDays = forecast => {
    return {
        type: types.FORECAST_SOME_DAYS,
        payload: forecast
    }
};

export const forecastDaysStatus = status => {
    return  {
        type: types.FORECAST_DAYS_STATUS,
        payload: status
    }
}
