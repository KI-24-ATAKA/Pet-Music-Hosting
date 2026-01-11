import React from 'react';
import InputIcon from '../InputIcon';
import {IoMdClose} from 'react-icons/io';

import './InputField.scss';

interface IInputFieldProps {
    label: string,
    value: string,
    placeholder: string,
    type: string,
};

function InputField(props: IInputFieldProps) {
    const [value, setValue] = React.useState(props.value || '');

    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleClear = () => {
        setValue('');
        inputRef.current?.focus();
    };

    return (
        <div className='InputField'>
            <InputIcon iconName='mail'/>
            <input 
                className='InputField__input'
                name={props.label}
                ref={inputRef}
                type={props.type}
                placeholder={props.placeholder}
                value={value}
                onChange={handleChange}
            />
            <button
                type='button'
                className='InputField__remove-button'
                onClick={handleClear}
            >
                {value && <IoMdClose size={20} />}
            </button>
        </div>
    );
};

export default InputField;
