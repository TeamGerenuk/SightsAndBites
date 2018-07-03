import { PLACES } from '../Actions/index.js';


export default function(state = [], action) {
    console.log('Action Received', action);
    switch(action.type) {
        case PLACES:
            return [action.payload.data.results, ...state];
    }
    return state
}