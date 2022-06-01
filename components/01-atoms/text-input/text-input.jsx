import { Icon } from 'components/01-atoms/icon/icon';

const TextInput = ({ className, label }) => {

  return (

    <div className={`text-input ${className ? className : ''}`} >
      <Icon symbol="file" className="text-input__icon icon--white" />
      <label className="text-input__label">{label ? label : ''}</label>
      <input type="text" className="text-input__input" value="welcome.md" onChange={() => console.log('change detected')} />
    </div >
  )

};

export {
  TextInput
};