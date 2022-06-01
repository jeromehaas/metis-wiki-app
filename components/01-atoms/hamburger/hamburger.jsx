const Hamburger = ({ className }) => {

  return (
    <button className={`hamburger hamburger--squeeze ${className ? className : ''}`} id="hamburger" type='button'>
      <span className='hamburger__box'>
        <span className='hamburger__inner' />
      </span>
    </button>
  );

};

export {
  Hamburger
};