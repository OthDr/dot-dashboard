import * as Yup from 'yup';
import { SignInRequestPayload } from '../../data/request/SignInRequestPayload';
import { t } from 'i18next';
import "../i18n";


export const signUpValidation: Yup.Schema<SignInRequestPayload> = Yup.object(
    {
        email: Yup
            .string()
            .email(`${t("invalidEmail")}`)
            .required(`${t('requiredEmail')}`),
        fullName: Yup.string()
            .matches(/^[^0-9!@#$%^&*()_+={}[\]:;"'<>,.?/|\\]+$/, {
                message: `${t("invalidFullName")}`,
                excludeEmptyString: true
            })
            .required(`${t("requiredFullName")}`),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .max(255, "Password must not exceed 255 characters")
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d!@#$%^&*]{8,}$/,
                `${t("invalidPassword")}`
            )
            .required("Password is required"),
    }
);