const Button = ({ children, className, onClick }) => {

  return (
    <button
      className={`button ${className ? className : ''} `}
      onClick={onClick ? onClick : null}
    > {children}</button>
  )
};

export {
  Button
};