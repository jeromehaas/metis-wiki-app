import { useEffect } from 'react';
import { Header } from 'components/02-molecules/header/header';
import { Sidepanel } from 'components/02-molecules/sidepanel/sidepanel';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes } from 'redux/actions/notes';


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