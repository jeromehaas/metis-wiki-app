import { useEffect } from 'react';
import { Header } from 'components/02-molecules/header/header';
import { Sidepanel } from 'components/02-molecules/sidepanel/sidepanel';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes } from 'redux/actions/notes';
import { toggleMenu } from 'redux/actions/menu';
import { Editor } from 'components/02-molecules/editor/editor';
import { Preview } from 'components/02-molecules/preview/preview';

const Dashboard = () => {

	const activeNote = useSelector( state => state.notes.active);
	const currentStatus = useSelector( state => state.menu.status);
  const previewFocus = useSelector( state => state.preview.focus );

  return (
    <div className={`dashboard ${ currentStatus === 'hidden' ? 'dashboard--hide-menu' : ''} ${ previewFocus === true ? 'dashboard--preview-focus' : ''}`}>
      <Header />
      <Sidepanel />
			<Editor />
      <Preview />
    </div>
  );

};

export {
  Dashboard
};