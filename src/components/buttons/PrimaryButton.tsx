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
            className="bg-gradient-to-tl from-[#174DAF] to-primaryBlue px-4 md:px-6 py-3 w-full flex flex-col items-center justify-center rounded-xl text-white hover:rounded-lg hover:brightness-110 shadow-lg duration-100"
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