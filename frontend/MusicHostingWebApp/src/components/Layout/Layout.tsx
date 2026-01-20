import Form from '../Form';

function Layout() {
    return(
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
    );
};

export default Layout;
