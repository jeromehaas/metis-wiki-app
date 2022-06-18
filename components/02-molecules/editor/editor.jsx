import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { javascript } from '@codemirror/lang-javascript';
import { useSelector, useDispatch } from 'react-redux';
import { updateActiveNoteContent } from 'redux/actions/notes';

const Editor = () => {

	const dispatch = useDispatch();
	const activeNote = useSelector( state => state.notes.active);

	return (
		<div className="editor">
			<textarea name="editor" id="editor" cols="30" rows="10" value={ activeNote.content } onChange={ (event) => dispatch( updateActiveNoteContent(event.target.value)) }></textarea>
		</div>
	);

};

export {
	Editor
};