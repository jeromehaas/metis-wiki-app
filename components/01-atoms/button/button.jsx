import { Icon } from 'components/01-atoms/icon/icon';

const Button = ({ children, className, onClick, symbol }) => {

  return (
    <button className={`button ${className ? className : ''} `} onClick={ onClick }>
      {symbol ? (<Icon className='button__icon icon--white icon--small' symbol={symbol} />) : ''}
      <span className="button__text">{children}</span>
    </button>
  )
};

export {
  Button
};