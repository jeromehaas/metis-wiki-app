import { Heading } from 'components/01-atoms/heading/heading';
import { Text } from 'components/01-atoms/text/text';


const DialogBox = ({ className }) => {

    return (
        <div className={`dialog-box ${ className ? className : '' }`}>
            <div className="dialog-box__inner">

            <div className="dialog-box__background-layer">
                hello dialog-box
            </div>

            <div className="dialog-box__box box">
                <Heading className="box__heading" type="h3">Delete this document?</Heading>
                <Text className="box__text">Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.</Text>
            </div>

            </div>
        </div>
    );

};

export {
    DialogBox
};