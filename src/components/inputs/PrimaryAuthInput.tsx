import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ReactComponent as PasswordOn } from '../../assets/buttons/passwordOn.svg';
import { ReactComponent as PasswordOff } from '../../assets/buttons/passwordOff.svg';

type Props = {
    name: string,
    label?: string,
    placeHolder: string,
    inputType: string,
    formik: any,
};

const PrimaryAuthInput: React.FC<Props> = ({
    name,
    label,
    placeHolder,
    inputType,
    formik
}) => {

    const { t } = useTranslation();

    const borderStyle = (formik.touched[name] && formik.errors[name]) ? "border-red-400" : "border-baseGray";

    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className='relative w-full flex-col items-start pb-3'>

            {label &&
                <label
                    htmlFor={name}
                    className='px-2 block text-start pb-1 text-sm md:text-base text-baseGray font-normal'
                >
                    {t(label)}
                </label>
            }
            <div className="relative w-full h-fit block">
                <input
                    id={name}
                    name={name}
                    className={`px-4 md:px-6 py-3 md:py-4 w-full text-baseGray text-sm md:text-base placeholder:text-baseGray/50 rounded-full border bg-gradient-to-br from-darkBlue to-darkPurple focus:brightness-125 hover:brightness-125 outline-none shadow-md shadow-transparent focus:border-primaryBlue hover:shadow-purple-600/35 focus:shadow-purple-600/50 duration-200 ${borderStyle}`}
                    type={showPassword ? "text" : inputType}
                    placeholder={t(placeHolder)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[name]}
                />

                {/* Toggle show/hide pwd */}
                {inputType === "password" && (
                    showPassword ?
                        <PasswordOn onClick={() => setShowPassword(false)} className='absolute text-baseGray drop-shadow w-5 h-5 bottom-1/3 end-5 cursor-pointer' />
                        :
                        <PasswordOff onClick={() => setShowPassword(true)} className='absolute text-baseGray drop-shadow w-5 h-5 bottom-1/3 end-5 cursor-pointer' />
                )
                }
            </div>
            <span className={`${inputType === "password" ? " pb-2 ":" pb-1 "} relative w-full block `}>
                {formik.touched[name] && formik.errors[name] && (
                    <p className="w-full text-start absolute text-primaryRed top-1 start-2 text-xs lg:text-sm">
                        {formik.errors[name]}
                    </p>
                )}
            </span>
        </div>
    )
};

export default PrimaryAuthInput