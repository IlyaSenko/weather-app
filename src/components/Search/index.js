import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputGroup, Input } from 'reactstrap';
import { useSelector } from 'react-redux';
import { fetchWeather } from '../../store/middlewares';
import { setSearchStatus, setSearchValue, setCustomForecastWeather } from '../../store/actions';
import { useDispatch } from 'react-redux';
import useDebounce from './debounce';

export const Search = () => {
    const dispatch = useDispatch();
    const cities = useSelector(state => state.searchWeatherReducer.cities);
    const searchValue = useSelector(state => state.searchWeatherReducer.searchValue);
    const { control, handleSubmit, errors } = useForm();
    const city = useDebounce(searchValue, 1000);
    useEffect(() => {
        console.log(1)
        if (city && city.length > 1) {
            console.log(2)
            const isCitySearched = cities.find(c => c.location.name.toLowerCase() === city);
            if (isCitySearched) {
                dispatch(setCustomForecastWeather(isCitySearched));
            } else {
                dispatch(fetchWeather({ city, days: 1 }));
                dispatch(setSearchStatus({ status: 102 }));
            }
        }
    }, [city]);

    const onSubmit = value => {
        const { search } = value;
        dispatch(setSearchValue({ value: search }));
    }

    return (
        <>
            <InputGroup className='mt-5'>
                <form onSubmit={e => e.preventDefault()} onChange={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                    <Controller
                        as={Input}
                        name="search"
                        control={control}
                        placeholder="Search your city"
                        defaultValue=""
                        rules={{ required: true }}
                    />
                </form>

            </InputGroup>
            { errors.search && errors.search.type === 'required' && <p style={{color: 'red'}}>Field is required!</p> }
        </>
    )
};
