import React from 'react';
import InputIcon from '../InputIcon';
import {IoMdClose, IoMdEye, IoMdEyeOff} from 'react-icons/io';
import type {FormikHandlers} from 'formik';

import './InputField.scss';

export interface IInputFieldProps {
    label: string,
    value?: string,
    placeholder: string,
    type: 'text' | 'password',
    iconName: 'lock' | 'mail' | 'user';
    onChange?: FormikHandlers['handleChange'],
    onBlur?: FormikHandlers['handleBlur'],
    setFieldValue?: (field: string, value: string) => void,
};

function InputField(props: IInputFieldProps) {
    const [value, setValue] = React.useState(props.value || '');
    const [showPassword, setShowPassword] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const isPasswordField = props.type === 'password';
    const inputType = isPasswordField && showPassword ? 'text' : props.type;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleClear = () => {
        setValue('');
        inputRef.current?.focus();
    };

    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
        inputRef.current?.focus();
    };

    return (
        <div className='InputField'>
            <InputIcon iconName={props.iconName} />
            <input 
                name={props.label}
                className='InputField__input'
                ref={inputRef}
                type={inputType}
                placeholder={props.placeholder}
                value={value}
                onChange={handleChange}
                onBlur={props.onBlur}
            />
            <button
                type='button'
                className='InputField__remove-button'
                onClick={!isPasswordField ?  handleClear : handleShowPassword}
            >
                {value && (
                    !isPasswordField 
                        ? <IoMdClose size={20} />
                        : (showPassword 
                            ? <IoMdEye size={20} /> 
                            : <IoMdEyeOff size={20} />)
                )}
            </button>
        </div>
    );
};

export default InputField;
