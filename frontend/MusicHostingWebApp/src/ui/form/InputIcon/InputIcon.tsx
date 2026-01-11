import {VscLock, VscMail} from 'react-icons/vsc';

import './InputIcon.scss';

interface InputIconProps {
    iconName: string;
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
    } else {
        return <></>;
    };
};

export default InputIcon;
