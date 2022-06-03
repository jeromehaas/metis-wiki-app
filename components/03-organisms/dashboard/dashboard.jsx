import { Header } from 'components/02-molecules/header/header';
import { Sidepanel } from 'components/02-molecules/sidepanel/sidepanel';

const Dashboard = () => {

  return (
    <div className="dashboard">
      <Header />
      <Sidepanel />
      <div className="editor"></div>
      <div className="preview"></div>
    </div>
  );

};

export {
  Dashboard
};