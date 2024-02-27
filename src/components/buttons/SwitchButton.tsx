import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
    isOn: boolean;
    onSwitchToggle: (event: any) => void;
};

const SwitchButton: React.FC<Props> = ({ isOn, onSwitchToggle }) => {

    const { t } = useTranslation();

    return (
        <div className="flex items-center gap-x-4">
            <button
                type='button'
                className={`bg-gray-300 rounded-full w-9 h-[18px] flex items-center transition-colors ${isOn ? 'bg-gradient-to-l from-blue-300 to-primaryBlue' : 'bg-gradient-to-r from-gray-600 to-gray-50'
                    }`}
                onClick={(event: any) => onSwitchToggle(event)}
            >
                <span
                    className={`bg-white brightness-100 w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? 'translate-x-[21px]' : 'translate-x-1'
                        }`}
                />
            </button>
            <p className='text-primaryWhite'>
                {t("rememberMe")}
            </p>
        </div>
    );
};

export default SwitchButton;