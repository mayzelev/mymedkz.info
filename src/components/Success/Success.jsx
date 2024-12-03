import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useTranslation } from 'react-i18next';
export default function Success() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="bg-formBackground  my-auto mx-0">
                <div className="py-[55px] px-[20px]">
                    <br />
                    <h2 className="text-[30px] lg:text-[56px] md:text-[30px]  leading-[1.35] font-sans text-mainTextColor font-bold m-0">
                        {t('successTitle')}
                    </h2>
                    <p className="text-xs pb-3">
                        <i>{t('successSubTitle')}</i>
                    </p>
                    <p className="text-xs mb-16">
                        <i>{t('successSubTitleSpam')}</i>
                    </p>
                    <br />
                    <br />
                    <button className="w-fit font-normal leading-[1.4] text-[16px] lg:text-[22px] md:text-[16px] pt-[11px] px-[45px] pb-[15px] rounded-full border-[3px] border-solid bg-transparent  text-btnBackColor cursor-pointer">
                        <Link to="/">{t('successSubTitleBtn')}</Link>
                    </button>
                </div>
            </main>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
