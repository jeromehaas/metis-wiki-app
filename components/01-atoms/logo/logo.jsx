import { useSelector } from 'react-redux';

const Logo = ({ className }) => {

	const theme = useSelector( state => state.theme.active );

  return (
    <img className={`logo ${className ? className : ''}`} src={ theme === 'light' ? "/media/graphics/logo-light.svg" : "/media/graphics/logo-dark.svg"} />
  );
  
};

export {
  Logo
};

