import {VscLock, VscMail} from 'react-icons/vsc';
import {FiUser} from 'react-icons/fi';

import './InputIcon.scss';

interface InputIconProps {
    iconName: 'lock' | 'mail' | 'user';
}

function InputIcon(props: InputIconProps) {
    if (props.iconName === 'lock') {
        return (
            <div className='InputIcon'>
                <VscLock className='InputIcon__icon' size={20} />
            </div>
        );
    } if (props.iconName === 'mail') {
        return (
            <div className='InputIcon'>
                <VscMail className='InputIcon__icon' size={20} />
            </div>
        );
    } if(props.iconName === 'user') {
        return (
            <div className='InputIcon'>
                <FiUser className='InputIcon__icon' size={20} />
            </div>
        );
    } else {
        return <></>;
    };
};

export default InputIcon;
