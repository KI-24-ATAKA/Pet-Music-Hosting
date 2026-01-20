import Form from '../Form';

import './Content.scss';

function Content() {
    return(
        <div className='Content'>
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

export default Content;
