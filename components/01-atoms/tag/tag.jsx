import { Icon } from 'components/01-atoms/icon/icon';
import { Text } from 'components/01-atoms/text/text';

const Tag = ({ className, text, icon, onClick }) => {

    return (
        <div className={`tag ${ className ? className : '' }`}>
            <Text className="tag__text">{ text }</Text>
            { icon  && ( <Icon className="header__delete-icon icon--grey icon--extrasmall" symbol={ icon } onClick={ onClick } /> )}
        </div>
    );

};

export {
    Tag
};