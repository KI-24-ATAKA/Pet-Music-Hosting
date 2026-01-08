import React from 'react';
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
            <input 
                className='InputField__input'
                name={props.label}
                ref={inputRef}
                type={props.type}
                placeholder={props.placeholder}
                value={value}
                onChange={handleChange}
            />
            {value && (
                <button
                    type='button'
                    className='InputField__remove-button'
                    onClick={handleClear}
                >
                    <IoMdClose size={20} />
                </button>
            )}
        </div>
    );
};

export default InputField;
