import { combineReducers } from "redux";
import notes from 'redux/reducers/notes';
import theme from 'redux/reducers/theme';
import menu from 'redux/reducers/menu';

const rootReducer = combineReducers({
	notes,
	theme,
	menu
});

export default rootReducer;