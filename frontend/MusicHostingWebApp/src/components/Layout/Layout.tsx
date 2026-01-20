import Form from '../Form';

import './Layout.scss';

function Layout() {
    return(
        <div className='Layout'>
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

export default Layout;
