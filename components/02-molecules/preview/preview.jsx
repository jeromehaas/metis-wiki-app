import { useSelector, useDispatch } from 'react-redux';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { Tag } from 'components/01-atoms/tag/tag';

const Preview = () => {

    const dispatch = useDispatch();
    const activeNote = useSelector( state => state.notes.active );
    
    return (
        <div className="preview">
            <Tag text="Preview" icon="eye" />
            <div className="preview__editor">
                <ReactMarkdown children={ activeNote.content ? activeNote.content : '' } />
            </div>
        </div>
    );

};

export {
    Preview
};