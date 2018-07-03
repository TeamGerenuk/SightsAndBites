import { combineReducers } from 'redux';
import Places from './reducer_places';

const rootReducer = combineReducers({
    getPlaces: Places
  });
  
export default rootReducer;