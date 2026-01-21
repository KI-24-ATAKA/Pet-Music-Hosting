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
                type: 'text',
            },
        },
        {
            label: 'Пароль',
            type: 'InputField',
            ui: {
                label: 'password',
                placeholder: 'пароль',
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
                type: 'text',
            },
        },
        {
            label: 'Пароль',
            type: 'InputField',
            ui: {
                label: 'password',
                placeholder: 'пароль',
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
