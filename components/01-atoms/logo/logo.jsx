const Logo = ({ className }) => {

  return (
    <p className={`logo ${className ? className : ''}`}>METIS</p>
  )
};

export {
  Logo
};

