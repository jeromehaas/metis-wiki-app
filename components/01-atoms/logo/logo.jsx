const Logo = ({ className }) => {

  return (
    <img className={`logo ${className ? className : ''}`} src="/media/graphics/logo.svg" />
  );
};

export {
  Logo
};

