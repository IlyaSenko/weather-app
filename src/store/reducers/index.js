import * as types from '../types';

const initialState = {
    cities: [],
    searchStatus: null,
    forecastWeather: null,
    searchValue: null,
    forecastSomeDays: null,
    forecastDaysStatus: null
};

export const searchWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_STATUS: {
            const { status }  = action.payload;
            return {
                ...state,
                searchStatus: status
            }
        }
        case types.FORECAST_WEATHER: {
            const { forecast } = action.payload;
            return {
                ...state,
                forecastWeather: forecast,
                cities: [forecast, ...state.cities.splice(0,4)]
            }
        }
        case types.SET_CUSTOM_FORECAST_WEATHER: {
            return {
                ...state,
                forecastWeather: action.payload,
            }
        }
        case types.SEARCH_VALUE: {
            const { value } = action.payload;
            return {
                ...state,
                searchValue: value
            }
        }
        case types.FORECAST_SOME_DAYS: {
            const { forecast } = action.payload;
            return {
                ...state,
                forecastSomeDays: forecast
            }
        }
        case types.FORECAST_DAYS_STATUS: {
            const { status } = action.payload;
            return {
                ...state,
                forecastDaysStatus: status
            }
        }
        default: {
            return state;
        }
    }
}
