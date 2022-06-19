import { combineReducers } from "redux";
import notes from 'redux/reducers/notes';
import theme from 'redux/reducers/theme';
import menu from 'redux/reducers/menu';
import preview from 'redux/reducers/preview';
import dialogBox from 'redux/reducers/dialog-box';
import loginForm from 'redux/reducers/login-form';

const rootReducer = combineReducers({
	notes,
	theme,
	menu,
	preview,
	dialogBox,
	loginForm
});

export default rootReducer;