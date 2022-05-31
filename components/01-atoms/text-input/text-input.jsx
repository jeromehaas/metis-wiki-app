const TextInput = () => {

  return (

    <div className="text-input">
      <i className="text-input__icon">X</i>
      <label className="text-input__label">Label</label>
      <input type="text" className="text-input__input" value="Value" />
    </div>
  )

};

export {
  TextInput
};