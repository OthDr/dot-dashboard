import * as Yup from 'yup';
import { SignInRequestPayload } from '../../data/request/SignInRequestPayload';
import { t } from 'i18next';
import "../i18n";


export const signInValidation: Yup.Schema<SignInRequestPayload> = Yup.object(
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