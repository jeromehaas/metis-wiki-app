
const Heading = ({ children, type, className, color }) => {

  const renderSwitch = (children, type, className, color) => {
    switch (type) {
      case 'h1': return <h1 className={`heading heading--h1 ${color ? `heading--${color}` : ''} ${className ? className : ''}`}>{children}</h1>
      case 'h2': return <h2 className={`heading heading--h2 ${color ? `heading--${color}` : ''} ${className ? className : ''}`}>{children}</h2>
      case 'h3': return <h3 className={`heading heading--h3 ${color ? `heading--${color}` : ''} ${className ? className : ''}`}>{children}</h3>
      case 'h4': return <h4 className={`heading heading--h4 ${color ? `heading--${color}` : ''} ${className ? className : ''}`}>{children}</h4>
      case 'h5': return <h5 className={`heading heading--h5 ${color ? `heading--${color}` : ''} ${className ? className : ''}`}>{children}</h5>
      case 'h6': return <h6 className={`heading heading--h6 ${color ? `heading--${color}` : ''} ${className ? className : ''}`}>{children}</h6>
      default: return <h1 className={`heading heading--h6 ${color ? `heading--${color}` : ''} ${className ? className : ''}`}>{children}</h1>
    }
  }

  return (
    renderSwitch(children, type, className, color)
  );

};

export {
  Heading
};