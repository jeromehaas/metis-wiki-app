import { combineReducers } from "redux";
import notes from 'redux/reducers/notes';
import theme from 'redux/reducers/theme';
import menu from 'redux/reducers/menu';
import preview from 'redux/reducers/preview';

const rootReducer = combineReducers({
	notes,
	theme,
	menu,
	preview
});

export default rootReducer;