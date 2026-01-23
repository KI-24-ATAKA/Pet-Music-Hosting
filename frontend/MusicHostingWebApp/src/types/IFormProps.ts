import type {IButtonProps} from 'ui/form/Button/Button';
import type {IInputFieldProps} from 'ui/form/InputField/InputField';
import type {IFileFieldProps} from 'ui/form/FileField/FileField';

interface IInitialValue {
    [key: string]: string,
};

interface IInputFormUI {
    label: string;
    type: 'InputField';
    ui: IInputFieldProps;
};

interface IFileFormUI {
    label: string;
    type: 'FileField';
    ui: IFileFieldProps;
};

export type IFormUI = IInputFormUI | IFileFormUI;


export interface IFormProps {
    initialValue: IInitialValue,
    ui: IFormUI[],
    button: IButtonProps,
    changeFormText: string,
    onSubmit: (formData: any) => void, 
};
