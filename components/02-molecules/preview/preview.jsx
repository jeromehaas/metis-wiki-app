import { useSelector, useDispatch } from 'react-redux';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { Tag } from 'components/01-atoms/tag/tag';
import { previewToggleFocus } from 'redux/actions/preview';

const Preview = () => {

    const dispatch = useDispatch();
    const activeNote = useSelector( state => state.notes.active );
    const previewFocus = useSelector( state => state.preview.focus );
    
    return (
        <div className="preview">
            <p>{ previewFocus }</p>
            <Tag text="Preview" icon={ previewFocus === true ? 'eye-closed' : 'eye' } onClick={ () => dispatch( previewToggleFocus( previewFocus ) ) } />
            <div className="preview__editor">
                <ReactMarkdown children={ activeNote.content ? activeNote.content : '' } />
            </div>
        </div>
    );

};

export {
    Preview
};