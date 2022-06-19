import { useSelector, useDispatch } from 'react-redux';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

const Preview = () => {

    const dispatch = useDispatch();
    const activeNote = useSelector( state => state.notes.active );
    
    return (
        <div className="preview">
            <div className="preview__inner">
                <ReactMarkdown children={ activeNote.content ? activeNote.content : '' } />
            </div>
        </div>
    );

};

export {
    Preview
};