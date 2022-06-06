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
      <span className="theme-toggle__switch switch" onClick={onClick}>
        <input className="switch__input" type="checkbox" name="range" id="range" />
        <label className="switch__background" htmlFor="range"><i className="switch__toggle"></i></label>
      </span>
      <Icon className="theme-toggle__icon icon--sun" />
    </div>
  );

};

export {
  ThemeToggle
};