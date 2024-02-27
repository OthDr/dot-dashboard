import * as Yup from 'yup';
import { SignUpRequestPayload } from '../../data/request/SignUpRequestPayload';
import { t } from 'i18next';


const signInValidation: Yup.Schema<SignUpRequestPayload> = Yup.object(
    {
        email: Yup
            .string()
            .email(`${t("invalidEmail")}`)
            .required(`${t('requiredEmail')}`),
        password: Yup
            .string()
            .max(255, `${t("maxCharachters_255")}`)
            .min(5, `${t("minCharachters_5")}`)
            .required(`${t('requiredPassword')}`),
    }
);

export default signInValidation;