import React from 'react'
import LoadingSpinner from '../include/LoadingSpinner';
import { useTranslation } from 'react-i18next';

type Props = {
    loading: boolean;
    handleClick: () => void;
};

const PrimaryButton: React.FC<Props> = ({ loading, handleClick }) => {

    const { t } = useTranslation();

    return (
        <button
            disabled={loading}
            className="disabled:opacity-60 h-[48px] bg-gradient-to-r from-blue-600 to-violet-600 px-4 md:px-6 py-2 md:py-3 w-full flex flex-col items-center justify-center rounded-xl text-sm md:text-base text-white hover:rounded-lg hover:brightness-110 shadow-lg duration-100"
            onClick={handleClick}
        >
            {loading
                ? (< LoadingSpinner />)
                : <p className='drop-shadow'>{t('signInBtn')}</p>
            }
        </button>
    )
}

export default PrimaryButton