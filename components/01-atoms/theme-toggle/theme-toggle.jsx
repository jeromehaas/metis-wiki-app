import { Icon } from 'components/01-atoms/icon/icon';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleTheme } from 'redux/actions/theme';

const ThemeToggle = ({ className, onClick }) => {

	const dispatch = useDispatch();
	const theme = useSelector( state => state.theme.active );

  return (
    <div className={`theme-toggle theme-toggle--${ theme } ${className ? className : ''}`} onClick={() => dispatch(toggleTheme() )}>
      <Icon className="theme-toggle__icon icon--moon" />
      <span className="theme-toggle__switch switch" >
        <div className="switch__input"></div>
        <div className="switch__background"><i className="switch__toggle"></i></div>
      </span>
      <Icon className="theme-toggle__icon icon--sun" />
    </div>
  );

};

export {
  ThemeToggle
};