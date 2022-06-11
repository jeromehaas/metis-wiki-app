import { useEffect } from 'react';
import { Header } from 'components/02-molecules/header/header';
import { Sidepanel } from 'components/02-molecules/sidepanel/sidepanel';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes } from 'redux/actions/notes';
import { toggleMenu } from 'redux/actions/menu';
import { Editor } from 'components/02-molecules/editor/editor';

const Dashboard = () => {

	const activeNote = useSelector( state => state.notes.active);
	const currentStatus = useSelector( state => state.menu.status);

  return (
    <div className={`dashboard ${ currentStatus === 'hidden' ? 'dashboard--hide-menu' : ''}`}>
      <Header />
      <Sidepanel />
			<Editor />
      <div className="preview"></div>
    </div>
  );

};

export {
  Dashboard
};