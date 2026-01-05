interface IButtonProps {
    label: string,
    isDisable?: boolean,
    onClick: () => void,
};

function Button (props: IButtonProps)  {
    return (
        <button 
            className='Button'
            disabled={props.isDisable}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};

export default Button;
