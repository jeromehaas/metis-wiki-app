import { Hamburger } from 'components/01-atoms/hamburger/hamburger';
import { Logo } from 'components/01-atoms/logo/logo';
import { TextInput } from 'components/01-atoms/text-input/text-input';
import { Button } from 'components/01-atoms/button/button';
import { Icon } from 'components/01-atoms/icon/icon';

const Header = () => {

  return (
    <div className="header">
      <Hamburger className="header__hamburger" />
      <Logo className="header__logo" />
      <TextInput className="header__text-input" label="Document Name" />
      <Icon className="header__delete-icon icon--grey icon--medium" symbol="trash" />
      <Button className="header__button" symbol="save">Save Changes</Button>
    </div>
  )

};

export {
  Header
};