import {useFormik} from 'formik'; 
import Button from '../../ui/form/Button';
import InputField from '../../ui/form/InputField';
import FileField from '../../ui/form/FileField';
import type {IFormProps} from '../../types/FormProps';

import './Form.scss';

function Form(props: IFormProps) {
    const formik = useFormik({
        initialValues: props.initialValue,
        onSubmit: props.onSubmit,
    });

    return (
    <form className='Form'>
        {props.ui.map((UI) => {
            if (UI.type == 'InputField') {
                return (
                    <div className='Form__field'>
                        <label className='Form__label'>{UI.label}</label>
                        <InputField 
                            {...UI.ui}
                            value={formik.values[UI.ui.label]}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            setFieldValue={formik.setFieldValue}
                        />
                    </div>
                );
            } if (UI.type == 'FileField') {
                return (
                    <div>
                        <label>{UI.label}</label>
                        <FileField />
                    </div>
                );
            };
        })}
        <div className='Form__button'>
            <Button {...props.button} />
        </div>
    </form>
    );
}

export default Form;
