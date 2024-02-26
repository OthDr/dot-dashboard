import React from 'react'
import PrimaryAuthInput from '../../components/inputs/PrimaryAuthInput';
import { SignUpRequestPayload } from '../../data/request/SignUpRequestPayload';
import { useFormik } from 'formik';
import signInValidation from '../../utils/formValidation/signInValidation';
import bg from "../../assets/bg/signInBg.png";

const SignIn: React.FC = () => {

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

            <img className='w-1/2' src={bg} alt="" />

            <div className="w-1/2 flex flex-col items-center justify-center  bg-gradient-to-br from-darkestPurple1 to-darkestPurple2">
                <form
                    className='w-full md:w-[400px] space-y-2 md:space-y-4'
                    action=""
                >
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
                        inputType="text"
                        placeHolder="enterPassword"
                        formik={formik}
                    />
                </form>
            </div>
        </div>
    )
};

export default SignIn