import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchPhotos = () => dispatch => {

    dispatch(photosLoading());

    return fetch(baseUrl + 'photos')
        .then(response => {
                if (response.ok) {
                return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(photos => dispatch(addPhotos(photos)))
        .catch(error => dispatch(photosFailed(error.message)));
};

export const photosLoading = () => ({
    type: ActionTypes.PHOTOS_LOADING
});

export const photosFailed = errMess => ({
    type: ActionTypes.PHOTOS_FAILED,
    payload: errMess
});

export const addPhotos = photos => ({
    type: ActionTypes.ADD_PHOTOS,
    payload: photos
});