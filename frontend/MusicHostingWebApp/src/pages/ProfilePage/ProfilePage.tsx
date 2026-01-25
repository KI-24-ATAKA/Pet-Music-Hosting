import React from 'react';
import Form from '../../components/Form';
import {LuMusic2} from 'react-icons/lu';
import {LOG_IN_FORM_CONTENT, SIGN_UP_FORM_CONTENT} from '../../constants/forms_content';

import './ProfilePage.scss';

function ProfilePage() {
    const [isLoginForm, setIsLoginForm] = React.useState(true);

    const togleContent = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className='ProfilePage'>
            <div className='ProfilePage__form_label'>
                <div className='ProfilePage__note_icon'>
                    <LuMusic2 size={30} />
                </div>
                <h1 className='ProfilePage__welcome_headline'>Добро пожаловать</h1>
                <span className='ProfilePage__login_prompt'>Войдите, чтобы продолжить</span>
            </div>
            <Form 
                {...(isLoginForm ? LOG_IN_FORM_CONTENT : SIGN_UP_FORM_CONTENT)}
                togleContent={togleContent}
                textForTogleLabel={isLoginForm ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
            />
        </div>
    );  
};

export default ProfilePage;
