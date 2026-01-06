import './InputField.scss';

interface IInputFieldProps {};

function InputField(props: IInputFieldProps) {
    return (
        <div className='InputField'>
            <input className='InputField__input'/>
        </div>
    );
};
