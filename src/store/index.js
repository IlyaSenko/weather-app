import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { searchWeatherReducer } from './reducers';

const rootReducer = combineReducers({
    searchWeatherReducer
});


export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
