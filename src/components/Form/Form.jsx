import { useTranslation } from 'react-i18next';

export default function Form() {
    const { t } = useTranslation();
    return (
        <div className="bg-formBackground pb-3 px-0 w-full grow">
            <h4 className="m-0 font-semibold text-xl text-mainTextColor">
                {t('headerText')}
                <br />
                {t('headerTextSecoundPart')}
            </h4>
        </div>
    );
}
