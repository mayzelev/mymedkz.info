import { useNavigate } from 'react-router-dom';
import TakedaLogo from '../../assets/icons/takeda.svg';
import { useTranslation } from 'react-i18next';

export default function Footer({ formFooter = false }) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <>
            {formFooter && (
                <div className="py-4 bg-white">
                    <p className="text-center font-bold text-[16px] md:text-[16px] lg:text-lg text-mainTextColor pb-2">
                        {t('formFooterInfo')}
                    </p>
                    <p className="text-center font-bold text-[16px] md:text-[16px] lg:text-base text-textColorSecondary ">
                        {t('formFooterQuestionTitle')}{' '}
                        <a className="underline text-mainTextColor" href="mailto:KZ.medinfo@takeda.com">
                            {t('formFooterQuestionTitle2')}
                        </a>{' '}
                        {t('formFooterQuestionTitle3')}
                    </p>
                    <p className="text-center font-bold text-base text-textColorSecondary italic">{t('formFooterQuestion')}</p>
                </div>
            )}
            <div className="w-auto flex flex-row items-center text-left pt-3 px-4 pb-10 bg-footerMainColor text-white text-sm justify-between">
                <div className="flex flex-col gap-4">
                    <p className="font-bold text-[16px]">{t('footerLegalInformation')}</p>
                    <a target="_blank" onClick={() => navigate('/agreement')} className="underline cursor-pointer hover:text-mainTextColor">
                        {t('footerPersonalDataProcessingPolicy')}
                    </a>
                    <a href="https://accounts.takeda.com/privacy-notice/" target="_blank" className="underline hover:text-mainTextColor">
                        {t('footerPrivacyPolicy')}
                    </a>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <p className="font-bold w-full text-right text-[16px]">{t('footerRightsReserved')}</p>
                    <p className="font-normal w-full text-right">
                        VV-MEDMAT-113958 <br /> {t('footerLicenseDate')}
                    </p>

                    <p className="font-normal w-full text-right text-[14px]">
                        {t('footerLocation')} <br />
                        {t('footerPhoneNumber')}
                    </p>
                    <p className="pt-1">
                        <img src={TakedaLogo} alt="Takeda-logo" />
                    </p>
                </div>
            </div>
        </>
    );
}
