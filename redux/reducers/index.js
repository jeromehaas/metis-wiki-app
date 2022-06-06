import { combineReducers } from "redux";
import notes from 'redux/reducers/notes';
import theme from 'redux/reducers/theme';

const rootReducer = combineReducers({
	notes,
	theme
});

export default rootReducer;