import { Link } from 'react-router-dom';
import TakedaLogo from '../../assets/icons/takeda.svg';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div
            className="w-auto flex flex-row items-center text-left pt-3 px-4 pb-16 bg-footerMainColor text-white
          text-sm justify-between"
        >
            <div className="flex flex-col gap-4">
                <p className="font-bold text-base">{t('footerLegalInformation')}</p>
                <Link to="/agreement" target="_blank" className="underline hover:text-mainTextColor">
                    {t('footerPersonalDataProcessingPolicy')}
                </Link>
                <a href="https://accounts.takeda.com/privacy-notice/" target="_blank" className="underline hover:text-mainTextColor">
                    {t('footerPrivacyPolicy')}
                </a>
            </div>

            <div className="flex flex-col items-end gap-1">
                <p className="font-bold w-full text-right text-base">{t('footerRightsReserved')}</p>
                <p className="font-normal w-full text-right">
                    VV-MEDMAT-113958 <br /> {t('footerLicenseDate')}
                </p>

                <p className="font-normal w-full text-right">
                    {t('footerLocation')} <br />
                    {t('footerPhoneNumber')}
                </p>
                <p>
                    <img src={TakedaLogo} alt="Takeda-logo" />
                </p>
            </div>
        </div>
    );
}
