import Form from '../../components/Form';
import {LOG_IN_FORM_CONTENT, SIGN_UP_FORM_CONTENT} from '../../constants/forms_content';

function ProfilePage() {
    return (
        <div>
            <Form
                initialValue={
                    {
                        email: '', 
                        password: '',
                    }
                }
                ui={
                    [
                        {
                            label: 'email',     
                            type: 'InputField',
                            ui: {
                                label: 'password',
                                placeholder: 'email',
                                type: 'text'
                            }
                        }, 
                        {
                            label: 'password',
                            type: 'InputField',
                            ui: {
                                label: 'password',
                                placeholder: 'password',
                                type: 'password',
                            }
                        },
                    ]
                }
                button={
                    {
                        label: 'ffs', 
                        type: 'submit', 
                    }
                }
                onSubmit={({}) => {}}
            />
        </div>
    );  
};

export default ProfilePage;
