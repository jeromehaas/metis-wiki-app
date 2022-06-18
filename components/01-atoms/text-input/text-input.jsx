import { Icon } from 'components/01-atoms/icon/icon';

const TextInput = ({ className, label, value, onDelete, onClick, onChange, readOnly }) => {

  return (

    <div className={`text-input ${className ? className : ''}`} onClick={ onClick } >
      <Icon symbol="file" className="text-input__icon icon--white icon--file" />
      <label className="text-input__label">{label ? label : ''}</label>
      <input type="text" className="text-input__input" value={ value } onChange={ onChange } readOnly={ readOnly } />
			<Icon  symbol="close" className="text-input__icon icon--white icon--close" onClick={ onDelete } />
    </div >
  )

};

export {
  TextInput
};