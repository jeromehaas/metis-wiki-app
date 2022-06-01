const Subheading = ({ className, children }) => {

  return (
    <p className={`subheading ${className ? className : ''}`}>{children}</p>
  );

};

export {
  Subheading
};

