const Icon = ({ symbol, className, onClick }) => {

  return (
    <i className={`icon ${symbol ? `icon-${symbol}` : 'icon-eye'} ${className ? className : ''}`} onClick={onClick}></i >
  );

};

export {
  Icon
};
