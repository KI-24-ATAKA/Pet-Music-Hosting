import './Button.scss';

export interface IButtonProps {
    label: string,
    isDisable?: boolean,
    type: 'submit' | 'button',
    onClick?: () => void,
};

function Button (props: IButtonProps)  {
    return (
        <button 
            name={props.label}
            className='Button'
            disabled={props.isDisable}
            type={props.type}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};

export default Button;
