import type {IFormProps} from '../types/IFormProps';

export const LOG_IN_FORM_CONTENT: IFormProps = {
    initialValue: {
        email: '',
        password: '',
    },
    ui: [
        {
            label: 'Email',
            type: 'InputField',
            ui: {
                label: 'email',
                placeholder: 'email',
                iconName: 'mail',
                type: 'text',
            },
        },
        {
            label: 'Пароль',
            type: 'InputField',
            ui: {
                label: 'password',
                placeholder: 'пароль',
                iconName: 'lock',
                type: 'password',
            },
        },
    ],
    button: {
        label: 'Войти',
        type: 'submit',
    },
    onSubmit: () => {},
};
export const SIGN_UP_FORM_CONTENT: IFormProps = {
    initialValue: {
        name: '',
        profilePhoto: '',
        email: '',
        password: '',
    },
    ui: [
        {
            label: 'Имя',
            type: 'InputField',
            ui: {
                label: 'name',
                placeholder: 'Ваше имя',
                iconName: 'user',
                type: 'text',
            },
        },
        {
            label: 'Фото профиля',
            type: 'FileField',
            ui: {
                label: 'photo',
            },
        },
        {
            label: 'Email',
            type: 'InputField',
            ui: {
                label: 'email',
                placeholder: 'email',
                iconName: 'mail',
                type: 'text',
            },
        },
        {
            label: 'Пароль',
            type: 'InputField',
            ui: {
                label: 'password',
                placeholder: 'пароль',
                iconName: 'lock',
                type: 'password',
            },
        },
    ],
    button: {
        label: 'Зарегистрироваться',
        type: 'submit',
    },
    onSubmit: () => {},
};
