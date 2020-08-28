import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { useSelector } from 'react-redux';
import { fetchWeather } from '../../store/middlewares';
import { saveCity, setSearchStatus, setSearchValue, setCustomForecastWeather } from '../../store/actions';
import { useDispatch } from 'react-redux';

export const Search = () => {
    const dispatch = useDispatch();
    const cities = useSelector(state => state.searchWeatherReducer.cities);
    const { control, handleSubmit, errors } = useForm();
    const searchWeather = data => {
        const { search:city } = data;
        const isCitySearched = cities.find(c => c.location.name.toLowerCase() === city)
        if (isCitySearched) {
          dispatch(setCustomForecastWeather(isCitySearched))
        } else {
          dispatch(fetchWeather({ city, days: 1 }));
          // dispatch(saveCity(city));
          dispatch(setSearchStatus({ status: 102 }));
          dispatch(setSearchValue({ value: city }));
        }
    };

    return (
        <>
            <InputGroup className='mt-5'>
                <Controller
                    as={Input}
                    name="search"
                    control={control}
                    onChange={args => args[0].nativeEvent.text}
                    placeholder="Search your city"
                    defaultValue=""
                    rules={{ required: true }}
                />
                <InputGroupAddon addonType="append">
                    <Button color="secondary" onClick={handleSubmit(searchWeather)}>Search</Button>
                </InputGroupAddon>
            </InputGroup>
            { errors.search && errors.search.type === 'required' && <p style={{color: 'red'}}>Field is required!</p> }
        </>
    )
};
