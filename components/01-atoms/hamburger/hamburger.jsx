const Hamburger = ({ className, onClick, currentStatus }) => {

  return (
    <button className={`hamburger hamburger--squeeze ${ currentStatus !== 'hidden' ? 'hamburger--active' : ''} ${className ? className : ''}`} id="hamburger" type='button' onClick={ onClick }>
      <span className='hamburger__box'>
        <span className='hamburger__inner' />
      </span>
    </button>
  );

};

export {
  Hamburger
};