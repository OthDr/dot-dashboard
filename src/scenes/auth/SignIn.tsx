import React, { useState } from 'react'
import PrimaryAuthInput from '../../components/inputs/PrimaryAuthInput';
import { SignUpRequestPayload } from '../../data/request/SignUpRequestPayload';
import { useFormik } from 'formik';
import signInValidation from '../../utils/formValidation/signInValidation';
import bg from "../../assets/bg/signInBg.png";
import { useTranslation } from 'react-i18next';
import SwitchButton from '../../components/buttons/SwitchButton';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import DothBottomLabel from '../../components/include/DothBottomLabel';

const SignIn: React.FC = () => {

    const { t } = useTranslation();

    const [isRemeberMe, setIsRemeberMe] = useState<boolean>(false);

    const handleRemeberMe = (event: any) => {
        event.preventDefault();
        setIsRemeberMe(prev => !prev);
    };

    const initialValues: SignUpRequestPayload = (
        {
            email: "",
            password: "",
        });

    const formik = useFormik({
        initialValues,
        validationSchema: signInValidation,
        onSubmit: async (values: SignUpRequestPayload) => {
            // try {
            //     const userData = await login(values).unwrap();
            //     dispatch(setCredentials(userData.response));
            // } catch (err: any) {
            //     toast.error(<SubmitResponseHandler message={err?.data?.message} errorCodeStr={err?.data?.errorCodeStr} />);
            // }
        }
    });

    return (
        <div className='max-w-[1920px] mx-auto flex h-screen'>

            <div className="relative w-1/2 hidden lg:block">
                <img className='w-full h-full' src={bg} alt="" />
                <div className="absolute top-0 start-0 drop-shadow-md capitalize w-full h-full flex flex-col gap-y-4 items-center justify-center bg-transparent text-primaryWhite font-bold animate-slowfade2">
                    <h3 className='opacity-75 text-lg'>{t("signInH3")}</h3>
                    <h1 className='lg:text-4xl'>{t("signInH1")}</h1>
                </div>
            </div>

            <div className="relative w-full p-4 lg:p-0 lg:w-1/2 flex flex-col items-center justify-center  bg-gradient-to-br from-darkestPurple1 to-darkestPurple2">
                <form
                    className='w-full md:w-[400px] space-y-2 md:space-y-6 animate-slowfade2'
                    onSubmit={formik.handleSubmit}
                >
                    <div className="block space-y-2 lg:space-y-3 pb-3 lg:pb-6">
                        <h1 id="gradientH1" className='text-start text-primaryWhite font-bold text-lg lg:text-3xl'>{t("signInFormH1")}</h1>
                        <p className='text-start text-baseGray text-xs lg:text-sm'>{t("signInFormP")}</p>
                    </div>

                    <div className="block space-y-3">
                        <PrimaryAuthInput
                            name="email"
                            label="email"
                            inputType="text"
                            placeHolder="enterEmail"
                            formik={formik}
                        />
                        <PrimaryAuthInput
                            name="password"
                            label="password"
                            inputType="password"
                            placeHolder="enterPassword"
                            formik={formik}
                        />
                    </div>

                    <SwitchButton
                        isOn={isRemeberMe}
                        onSwitchToggle={handleRemeberMe}
                    />

                    <PrimaryButton
                        handleClick={() => null}
                        loading={false}
                    />

                    <div className="w-fit mx-auto flex gap-x-1 text-sm lg:text-base text-baseGray">
                        <p>{t("dontHaveAccount")}</p>
                        <Link to="/sign-up" className='text-primaryWhite font-bold hover:underline'>{t("signUp")}</Link>
                    </div>
                </form>

                <DothBottomLabel />
            </div>
        </div>
    )
};

export default SignIn