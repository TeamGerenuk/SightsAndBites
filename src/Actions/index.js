import axios from 'axios';
import requestGoogle from './requestGoogle.js';

const API_KEY = 'AIzaSyAuLEO4q3qEIub-ez0kc4QxWW9sHR70kFU';
const ROOT_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+in+";




export const PLACES = 'Places';


export function getPlaces(city) {
const url = ROOT_URL + city + '&key=' + API_KEY;
const request = axios.get(url);
console.log('Request', request);

    return {
        type: PLACES,
        payload: request
    }
}