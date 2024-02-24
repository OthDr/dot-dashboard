import { useTranslation } from "react-i18next";

interface props {
    supportedLanguages: string[];
    app: JSX.Element;
};

const RtlHoc: React.FC<props> = ({ supportedLanguages, app }) => {

    const { i18n } = useTranslation();

    return (
        <div style={supportedLanguages.includes(i18n.language) ? { direction: 'rtl' } : {}}>
            {app}
        </div>
    );
};

export default RtlHoc;