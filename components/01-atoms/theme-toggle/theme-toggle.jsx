import { Icon } from 'components/01-atoms/icon/icon';

const ThemeToggle = ({ className, onClick }) => {

  return (
    <div className={`theme-toggle ${className ? className : ''}`}>
      <Icon className="theme-toggle__icon icon-moon" />
      <span className="theme-toggle__switch switch" onClick={onClick}>
        <input className="switch__input" type="checkbox" name="range" id="range" />
        <label className="switch__background" htmlFor="range"><i className="switch__toggle"></i></label>
      </span>
      <Icon className="theme-toggle__icon icon-sun" />
    </div>
  );

};

export {
  ThemeToggle
};