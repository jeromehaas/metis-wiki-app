import { Button } from 'components/01-atoms/button/button';
import { TextInput } from 'components/01-atoms/text-input/text-input';
import { Subheading } from 'components/01-atoms/subheading/subheading';
import { ThemeToggle } from 'components/01-atoms/theme-toggle/theme-toggle.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getAllNotes, createNote, deleteNote } from 'redux/actions/notes';

const Sidepanel = () => {

	const dispatch = useDispatch();
	const notes = useSelector( state => state.notes );

	useEffect(() => {
		dispatch( getAllNotes() )
	}, []);

  return (
    <div className="sidepanel">
      <Subheading className="sidepanel__subheading">My Documents</Subheading>
      <Button className="sidepanel__button" onClick={ () => dispatch( createNote() ) }>New Document</Button>

				<div className="sidepanel__notes">
				{ notes.all.map(( note ) => (
					<TextInput 
						className="sidepanel__text-input" 
						label={ note.dateCreated } 
						value={ note.filename } 
						key={ note._id } 
						onDelete={ () => dispatch( deleteNote( note._id )) }		
					/>
					))}
				</div>

      <ThemeToggle className="sidepanel__theme-toggle" />
    </div>
  );

};

export {
  Sidepanel
};
