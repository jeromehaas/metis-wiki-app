const Text = ({ children, className }) => {

  return (
    <p className={`text ${className ? className : ''}`}>{children}</p>
  )

};

export {
  Text
};