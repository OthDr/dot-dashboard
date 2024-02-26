import * as Yup from 'yup';
import { t } from 'i18next';


const signInValidation = Yup.object({
    email: Yup.string().required(`${t('required')}`),
    password: Yup.string().required(`${t('required')}`)
});



export default signInValidation;