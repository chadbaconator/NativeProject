import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { photos } from './photos';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            photos
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}