import {VscLock, VscMail} from 'react-icons/vsc';

function InputIcon(iconName: string) {
    if (iconName === 'lock') {
        return <VscLock />;
    } if (iconName === 'mail') {
        return <VscMail />;
    };
};

export default InputIcon;
