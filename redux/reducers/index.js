import { combineReducers } from "redux";
import notes from 'redux/reducers/notes';

const rootReducer = combineReducers({
	notes
});

export default rootReducer;