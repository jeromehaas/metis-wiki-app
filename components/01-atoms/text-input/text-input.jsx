const TextInput = ({ className }) => {

  return (

    <div className={`text-input ${className ? className : ''}`} >
      <i className="text-input__icon">X</i>
      <label className="text-input__label">Label</label>
      <input type="text" className="text-input__input" />
    </div>
  )

};

export {
  TextInput
};