import { Button } from 'components/01-atoms/button/button';
import { TextInput } from 'components/01-atoms/text-input/text-input';
import { Subheading } from 'components/01-atoms/subheading/subheading';
import { ThemeToggle } from 'components/01-atoms/theme-toggle/theme-toggle.jsx';

const Sidepanel = () => {

  return (
    <div className="sidepanel">
      <Subheading className="sidepanel__subheading">My Documents</Subheading>
      <Button className="sidepanel__button">New Document</Button>
      <TextInput className="sidepanel__text-input" label="01 April 2022" value="welcome.md" />
      <TextInput className="sidepanel__text-input" label="01 April 2022" value="bienvenido.md" />
      <ThemeToggle className="sidepanel__theme-toggle" />
    </div>
  );

};

export {
  Sidepanel
};
