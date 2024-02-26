import React from 'react'
import { useTranslation } from 'react-i18next';

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

    return (
        <div className='relative w-full flex-col items-start pb-2'>

            {label &&
                <label
                    htmlFor={name}
                    className='px-2 block text-start pb-1 text-sm md:text-base text-baseGray font-normal'
                >
                    {t(label)}
                </label>
            }
            <input
                className='p-2 md:p-3 w-full text-baseGray text-sm md:text-base placeholder:text-baseGray/50 rounded-full border border-baseGray bg-gradient-to-br from-darkBlue to-darkPurple outline-none focus:shadow-md focus:border-primaryBlue focus:shadow-purple-600/50 duration-200'
                type={inputType}
                placeholder={t(placeHolder)}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[name]}
            />

        </div>
    )
};

export default PrimaryAuthInput