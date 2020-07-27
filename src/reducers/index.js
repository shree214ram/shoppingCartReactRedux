
import { combineReducers } from 'redux';
import homeReducer from '../Components/Home/homeReducer';

const rootReducer = combineReducers({
  home: homeReducer,

});

export default rootReducer;