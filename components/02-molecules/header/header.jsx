import { Hamburger } from 'components/01-atoms/hamburger/hamburger';
import { Logo } from 'components/01-atoms/logo/logo';
import { TextInput } from 'components/01-atoms/text-input/text-input';
import { Button } from 'components/01-atoms/button/button';

const Header = () => {

  return (
    <div className="header">
      <Hamburger className="header__hamburger" />
      <Logo className="header__logo" />
      <TextInput className="header__text-input" />
      <Button className="header__button">Save Changes</Button>
    </div>
  )

};

export {
  Header
};