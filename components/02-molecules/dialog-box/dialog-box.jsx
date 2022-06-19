import { Heading } from 'components/01-atoms/heading/heading';
import { Text } from 'components/01-atoms/text/text';
import  { Button } from 'components/01-atoms/button/button';
import { useSelector, useDispatch } from 'react-redux';
import { hideDialogBox } from 'redux/actions/dialog-box';
import { deleteActiveNote, setToActiveNote } from 'redux/actions/notes';

const DialogBox = ({ className }) => {

    const dispatch = useDispatch();
    const dialogBox = useSelector(state => state.dialogBox);
    const activeNote = useSelector(state => state.notes.active);

    const renderDialogBox = ( type ) => {
        switch(type) {
            case 'delete-note': {
                return (
                    <div className="dialog-box__box box">
                        <Heading className="box__heading" type="h3">Delete this document?</Heading>
                        <Text className="box__text">Are you sure you want to delete the ‘{ activeNote.filename }’ document and its contents? This action cannot be reversed.</Text>
                        <Button className="box__button" onClick={ () => { 
                            dispatch(deleteActiveNote(activeNote.id));
                            dispatch(hideDialogBox())
                            dispatch(setToActiveNote())
                        }}>Confirm & Delete</Button>
                    </div>
                )
            } 
            default: {
                return false;
            }
        }
    }

    return (
        <div className={`dialog-box ${ className ? className : '' } ${ dialogBox.isVisible ? 'dialog-box--visible' : '' }`}>
            <div className="dialog-box__inner">
            <div className="dialog-box__background-layer" onClick={ () => dispatch( hideDialogBox() ) }></div>
            {  renderDialogBox( dialogBox.type ) }
            </div>
        </div>
    );

};

export {
    DialogBox
};